# ◈ AXIOM
### Adaptive eXchange Intelligence & Omni-context Machine

> A voice-first AI chatbot that remembers everything, searches the web in real time, streams responses token by token, detects your language, and installs as a native app — all for free.

![Version](https://img.shields.io/badge/version-1.9.0-00e5ff?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-a78bfa?style=flat-square)
![Node](https://img.shields.io/badge/node-v20-green?style=flat-square)
![AI](https://img.shields.io/badge/AI-Groq%20%7C%20Llama%203.3%2070B-orange?style=flat-square)
![Cost](https://img.shields.io/badge/cost-%240.00%2Fmonth-brightgreen?style=flat-square)

---

## ✨ What Makes AXIOM Different

| Feature | AXIOM | Typical Chatbot |
|---|---|---|
| Context Memory | ✅ Full conversation history | ❌ Last message only |
| Voice Input | ✅ Speak naturally, auto-sends | ❌ Type only |
| Wake Word | ✅ "Hey AXIOM" always-on | ❌ No |
| Streaming | ✅ Words appear as generated | ❌ Waits for full reply |
| Web Search | ✅ Real-time results via Tavily | ❌ Outdated training data |
| Multi-language | ✅ Auto-detects, responds in kind | ❌ English only |
| PWA Install | ✅ Install as native app | ❌ Browser only |
| Cost | ✅ Completely free | 💸 Paid API |

---

## 🚀 Features

- **🎙 Voice Input** — Click mic, speak, AXIOM auto-sends when you pause
- **🔊 Voice Output** — Every reply spoken aloud with animated waveform
- **👂 Wake Word** — Say "Hey AXIOM" to activate without clicking anything
- **🧠 Full Context Memory** — Every reply builds on the entire conversation
- **⚡ Streaming Responses** — Words appear token by token in real time
- **🌐 Real-time Web Search** — Auto-searches for news, scores, prices, weather
- **💬 Multiple Conversations** — Create, switch, and manage separate threads
- **🗺 Multi-language** — Detects Hindi, Spanish, French, Arabic, Japanese + more
- **📊 Conversation Pulse** — Live metrics: Depth, Curiosity, Complexity
- **🏷 Topic Detection** — Auto-tags AI, Philosophy, Tech, Science, and more
- **📝 Conversation Export** — Download as TXT or styled HTML/PDF
- **🎚 Voice Selection** — Pick any system voice with live preview
- **📋 Auto Summary** — AI-generated summary of your conversation in sidebar
- **📱 PWA Install** — Install on phone or desktop as a standalone app
- **🔒 Secure** — API keys never leave the server, never touch the browser

---

## 🧠 Intelligence Modes

| Mode | Personality | Best For |
|------|-------------|----------|
| ◈ **Explore** | Curious, wide-ranging | Open questions, learning |
| ✦ **Create** | Imaginative, generative | Writing, brainstorming |
| ⬡ **Analyze** | Precise, evidence-driven | Technical topics, research |
| ◎ **Reflect** | Philosophical, introspective | Meaning, ethics, values |

---

## 🔑 API Keys You Need (Both Free)

### 1. Groq API Key — for AI responses
1. Go to **[console.groq.com](https://console.groq.com)**
2. Sign in with Google (no card needed)
3. Click **API Keys** → **Create API Key**
4. Copy the key — starts with `gsk_...`

> **Free tier:** 30 requests/minute · 14,400 requests/day · Llama 3.3 70B

### 2. Tavily API Key — for real-time web search
1. Go to **[app.tavily.com](https://app.tavily.com)**
2. Sign up with Google (no card needed)
3. Copy your API key — starts with `tvly-...`

> **Free tier:** 1,000 searches/month · No credit card required

---

## ☁️ Option A — GitHub Codespaces (Easiest — No Setup)

**Runs entirely in your browser. Nothing to install on your computer.**

### Step 1 — Fork the repo
Go to [github.com/Adarsh73111/Axiom](https://github.com/Adarsh73111/Axiom) → click **Fork** → **Create Fork**

### Step 2 — Open in Codespace
1. On your forked repo, click the green **`< > Code`** button
2. Click **Codespaces** tab → **"Create codespace on main"**
3. Wait ~60 seconds — everything installs automatically

### Step 3 — Add your API keys
In the Codespace terminal:
```bash
echo "GROQ_API_KEY=gsk_your_groq_key_here" > .env
echo "TAVILY_API_KEY=tvly-your_tavily_key_here" >> .env
```

### Step 4 — Start AXIOM
```bash
npm start
```
Click **"Open in Browser"** when the popup appears. AXIOM is live! 🎉

> **If AXIOM shows "Connecting...":** Ports tab → right-click port 3000 → **Port Visibility** → **Public**

---

## 💻 Option B — Run Locally on Your Computer

### Requirements
- [Node.js](https://nodejs.org) v18 or higher
- Free Groq API key from [console.groq.com](https://console.groq.com)
- Free Tavily API key from [app.tavily.com](https://app.tavily.com)
- Chrome or Edge browser (for voice features)

### Steps
```bash
# 1. Clone the repository
git clone https://github.com/Adarsh73111/Axiom.git
cd Axiom

# 2. Install dependencies
npm install

# 3. Add your API keys
echo "GROQ_API_KEY=gsk_your_groq_key_here" > .env
echo "TAVILY_API_KEY=tvly-your_tavily_key_here" >> .env

# 4. Start AXIOM
npm start

# 5. Open in browser — go to:
#    http://localhost:3000
```

---

## 🌐 How Web Search Works

AXIOM automatically detects when your question needs real-world data.

**Triggers web search when you ask about:**
- Today's news, current events
- Weather, stock prices, sports scores
- "Latest", "recent", "breaking", "trending"
- Specific years (2024, 2025, 2026)
- Elections, results, live events

**When search is used:**
- A **🌐 Web search used** badge appears below the response
- AXIOM cites up to 4 real sources from the web
- Responses reflect today's information, not just training data

---

## 📱 Installing as a Phone/Desktop App (PWA)

**On Desktop (Chrome/Edge):**
- Look for the **⬇ Install** button in the address bar → click **Install**

**On Mobile:**
- Open AXIOM in Chrome → tap menu (⋮) → **"Add to Home Screen"**

---

## 🗂 Project Structure
```
Axiom/
├── .devcontainer/
│   └── devcontainer.json    ← GitHub Codespaces auto-setup
├── public/
│   ├── index.html           ← Complete frontend (UI + voice + logic)
│   ├── manifest.json        ← PWA manifest for app install
│   └── sw.js                ← Service worker for offline caching
├── server.js                ← Node.js backend (API proxy + web search)
├── package.json             ← Dependencies
├── .env.example             ← API key template (safe to share)
├── .env                     ← Your real keys — NEVER commit this!
├── .gitignore               ← Ensures .env stays private
└── README.md                ← This file
```

---

## 🛡 Security

- `GROQ_API_KEY` and `TAVILY_API_KEY` live **only** in `.env` on the server
- Keys are **never** sent to the browser
- `.env` is in `.gitignore` — **never** uploaded to GitHub
- Anyone who forks must supply their own keys

---

## 🔧 Troubleshooting

| Problem | Fix |
|---------|-----|
| "Connecting..." won't go away | Ports tab → right-click port 3000 → Port Visibility → **Public** |
| Port 3000 already in use | `pkill -f "node server.js"` then `npm start` |
| Mic button doesn't work | Allow microphone in browser · Use Chrome or Edge |
| Voice not working | Firefox doesn't support SpeechRecognition — use Chrome |
| Web search not working | Check `TAVILY_API_KEY` is in `.env` · Get free key at app.tavily.com |
| API key warning on startup | Run `echo "GROQ_API_KEY=gsk_..." > .env` in terminal |
| Wake word not triggering | Say "Axiom" clearly · Check mic permission is allowed |

---

## 🧰 Tech Stack

| Technology | Purpose | Cost |
|-----------|---------|------|
| Node.js + Express | Backend server & API proxy | Free |
| Groq API (Llama 3.3 70B) | AI language model | Free tier |
| Tavily Search API | Real-time web search | Free tier |
| Web Speech API | Voice recognition (browser built-in) | Free |
| SpeechSynthesis API | Text-to-speech (browser built-in) | Free |
| GitHub Codespaces | Cloud development environment | Free tier |
| PWA (manifest + SW) | Native app install support | Free |

**Total monthly cost: $0.00**

---

## 📦 Version History

| Version | What's New |
|---------|-----------|
| v1.9 | Real-time web search via Tavily API |
| v1.8 | Multiple conversation threads |
| v1.7 | PWA install + multi-language support |
| v1.6 | Hey AXIOM wake word |
| v1.5 | Conversation summaries in sidebar |
| v1.4 | Custom voice selection UI |
| v1.3 | Export conversations as TXT/PDF |
| v1.2 | Streaming responses (word by word) |
| v1.1 | Auto-send on speech pause |
| v1.0 | Initial release — voice chatbot + context memory |

---

## 📄 License

MIT — free to use, modify, and distribute.

---

<div align="center">

**Built by [Adarsh Misra](https://github.com/Adarsh73111)**

◈ AXIOM — Because every conversation deserves a foundation.

</div>
