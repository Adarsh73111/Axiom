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

// ─── Health check ────────────────────────────────────────────────────
app.get('/health', (req, res) => {
  const keySet = !!process.env.OPENAI_API_KEY;
  res.json({ status: 'ok', api_key_configured: keySet });
});

// ─── Chat endpoint ────────────────────────────────────────────────────
app.post('/api/chat', async (req, res) => {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({
      error: 'OpenAI API key not configured. Please add your OPENAI_API_KEY to the .env file.'
    });
  }

  const { messages, systemPrompt, mode } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Invalid request: messages array required.' });
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        max_tokens: 1024,
        temperature: mode === 'create' ? 0.9 : mode === 'reflect' ? 0.8 : 0.7,
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages
        ]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      const msg = data.error?.message || 'OpenAI API error';
      return res.status(response.status).json({ error: msg });
    }

    const reply = data.choices?.[0]?.message?.content || '';
    res.json({ reply });

  } catch (err) {
    console.error('Server error:', err.message);
    res.status(500).json({ error: 'Server error: ' + err.message });
  }
});

// ─── Fallback to index.html ───────────────────────────────────────────
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\n╔══════════════════════════════════════╗`);
  console.log(`║       AXIOM Server is running        ║`);
  console.log(`║   http://localhost:${PORT}              ║`);
  console.log(`╚══════════════════════════════════════╝\n`);
  if (!process.env.OPENAI_API_KEY) {
    console.warn('⚠  WARNING: OPENAI_API_KEY is not set in your .env file!');
    console.warn('   Copy .env.example to .env and add your key.\n');
  }
});
