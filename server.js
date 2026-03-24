require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ── Search trigger detection ──────────────────────────────
const SEARCH_TRIGGERS=/\b(today|tonight|now|current|latest|recent|news|weather|price|score|live|happening|2024|2025|2026|who won|what happened|update|breaking|trending|stock|match|election|result)\b/i;
function needsSearch(text){ return SEARCH_TRIGGERS.test(text); }

// ── Tavily web search ─────────────────────────────────────
async function webSearch(query){
  const key=process.env.TAVILY_API_KEY;
  if(!key) return null;
  try{
    const r=await fetch('https://api.tavily.com/search',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({api_key:key,query,search_depth:'basic',max_results:5,include_answer:true})
    });
    const d=await r.json();
    if(!r.ok) return null;
    let context=`[WEB SEARCH RESULTS for "${query}" — ${new Date().toDateString()}]\n\n`;
    if(d.answer) context+=`Summary: ${d.answer}\n\n`;
    if(d.results?.length){
      d.results.slice(0,4).forEach((res,i)=>{
        context+=`[${i+1}] ${res.title}\n${res.content?.slice(0,300)}...\nSource: ${res.url}\n\n`;
      });
    }
    context+=`[Use above results to answer accurately. Today is ${new Date().toDateString()}.]`;
    return context;
  }catch(e){ return null; }
}

app.get('/health', (req, res) => {
  res.json({ status: 'ok', api_key_configured: !!process.env.GROQ_API_KEY, search_enabled: !!process.env.TAVILY_API_KEY });
});

app.post('/api/chat', async (req, res) => {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'Groq API key not configured.' });
  const { messages, systemPrompt, mode } = req.body;
  if (!messages || !Array.isArray(messages)) return res.status(400).json({ error: 'Invalid request.' });
  try {
    const lastMsg=messages[messages.length-1]?.content||'';
    let sysPrompt=systemPrompt;
    if(needsSearch(lastMsg)){
      const results=await webSearch(lastMsg);
      if(results) sysPrompt=systemPrompt+'\n\n'+results;
    }
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        max_tokens: 512,
        temperature: mode === 'create' ? 0.9 : mode === 'reflect' ? 0.8 : 0.7,
        messages: [{ role: 'system', content: sysPrompt }, ...messages]
      })
    });
    const data = await response.json();
    if (!response.ok) return res.status(response.status).json({ error: data.error?.message || 'Groq API error' });
    res.json({ reply: data.choices?.[0]?.message?.content || '' });
  } catch (err) {
    res.status(500).json({ error: 'Server error: ' + err.message });
  }
});

app.post('/api/chat/stream', async (req, res) => {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'Groq API key not configured.' });
  const { messages, systemPrompt, mode } = req.body;
  try {
    const lastMsg=messages[messages.length-1]?.content||'';
    let sysPrompt=systemPrompt;
    let searchUsed=false;
    if(needsSearch(lastMsg)){
      const results=await webSearch(lastMsg);
      if(results){ sysPrompt=systemPrompt+'\n\n'+results; searchUsed=true; }
    }
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        max_tokens: 512,
        temperature: mode === 'create' ? 0.9 : mode === 'reflect' ? 0.8 : 0.7,
        stream: true,
        messages: [{ role: 'system', content: sysPrompt }, ...messages]
      })
    });
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('X-Accel-Buffering', 'no');
    res.setHeader('X-Search-Used', searchUsed?'true':'false');
    res.flushHeaders();
    for await (const chunk of response.body) {
      res.write(chunk);
    }
    res.end();
  } catch (err) { res.status(500).json({ error: 'Server error: ' + err.message }); }
});

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.listen(PORT, () => {
  console.log(`\n╔══════════════════════════════════════╗`);
  console.log(`║       AXIOM Server is running        ║`);
  console.log(`║   http://localhost:${PORT}              ║`);
  console.log(`╚══════════════════════════════════════╝\n`);
  if (!process.env.GROQ_API_KEY) console.warn('⚠  Add GROQ_API_KEY to your .env file.\n');
  if (!process.env.TAVILY_API_KEY) console.warn('⚠  Add TAVILY_API_KEY for web search. Free key at: app.tavily.com\n');
});
