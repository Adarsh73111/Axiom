# ◈ AXIOM
### Adaptive eXchange Intelligence & Omni-context Machine

> A voice-first AI chatbot that remembers everything, streams responses in real time, detects your language, and can be installed as an app on any device — all for free.

![Version](https://img.shields.io/badge/version-1.8.0-00e5ff?style=flat-square)
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
- **💬 Multiple Conversations** — Create, switch, and manage separate threads
- **🌐 Multi-language** — Detects Hindi, Spanish, French, Arabic, Japanese + more
- **📊 Conversation Pulse** — Live metrics: Depth, Curiosity, Complexity
- **🏷 Topic Detection** — Auto-tags AI, Philosophy, Tech, Science, and more
- **📝 Conversation Export** — Download as TXT or styled HTML/PDF
- **🎚 Voice Selection** — Pick any system voice with live preview
- **📋 Auto Summary** — AI-generated summary of your conversation in sidebar
- **📱 PWA Install** — Install on phone or desktop as a standalone app
- **🔒 Secure** — API key never leaves the server, never touches the browser

---

## 🧠 Intelligence Modes

| Mode | Personality | Best For |
|------|-------------|----------|
| ◈ **Explore** | Curious, wide-ranging | Open questions, learning |
| ✦ **Create** | Imaginative, generative | Writing, brainstorming |
| ⬡ **Analyze** | Precise, evidence-driven | Technical topics, research |
| ◎ **Reflect** | Philosophical, introspective | Meaning, ethics, values |

---

## 🆓 Getting a Free Groq API Key (No Credit Card)

AXIOM uses **Groq's free tier** — no payment required, ever.

1. Go to **[console.groq.com](https://console.groq.com)**
2. Sign in with **Google** (no card needed)
3. Click **API Keys** → **Create API Key**
4. Name it anything (e.g. `axiom`)
5. Copy the key — it starts with `gsk_...`
6. Keep it safe — you'll need it in the setup below

> **Free tier limits:** 30 requests/minute · 14,400 requests/day · Llama 3.3 70B quality

---

## ☁️ Option A — GitHub Codespaces (Easiest — No Computer Setup)

**This runs AXIOM entirely in your browser. Nothing to install.**

### Step 1 — Fork the repo
Go to [github.com/Adarsh73111/Axiom](https://github.com/Adarsh73111/Axiom) → click **Fork** (top right) → **Create Fork**

### Step 2 — Open in Codespace
1. On your forked repo, click the green **`< > Code`** button
2. Click the **Codespaces** tab
3. Click **"Create codespace on main"**
4. Wait ~60 seconds — everything installs automatically

### Step 3 — Add your Groq API key
In the Codespace terminal, run:
```bash
echo "GROQ_API_KEY=gsk_your_key_here" > .env
```
Replace `gsk_your_key_here` with your actual key from console.groq.com

### Step 4 — Start AXIOM
```bash
npm start
```
A popup will appear — click **"Open in Browser"**. AXIOM is live! 🎉

> **Important:** In the Ports tab, right-click port 3000 → **Port Visibility** → **Public** if AXIOM shows "Connecting..."

---

## 💻 Option B — Run Locally on Your Own Computer

### Requirements
- [Node.js](https://nodejs.org) v18 or higher
- A free Groq API key from [console.groq.com](https://console.groq.com)
- Chrome or Edge browser (for voice features)

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/Adarsh73111/Axiom.git
cd Axiom

# 2. Install dependencies
npm install

# 3. Add your Groq API key
echo "GROQ_API_KEY=gsk_your_key_here" > .env

# 4. Start AXIOM
npm start

# 5. Open in browser
# Go to: http://localhost:3000
```

That's it. AXIOM is running locally. ✅

---

## 📱 Installing as a Phone/Desktop App (PWA)

AXIOM can be installed as a native-feeling app:

**On Desktop (Chrome/Edge):**
- Look for the **⬇ Install** button in the address bar
- Click it → **Install** → AXIOM opens as a standalone window

**On Mobile (Android/iPhone):**
- Open AXIOM in Chrome on your phone
- Tap the browser menu (⋮)
- Tap **"Add to Home Screen"**
- AXIOM appears as an app icon on your home screen

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
├── server.js                ← Node.js backend (secure API proxy)
├── package.json             ← Dependencies
├── .env.example             ← API key template (safe to share)
├── .env                     ← Your real key — NEVER commit this!
├── .gitignore               ← Ensures .env stays private
└── README.md                ← This file
```

---

## 🛡 Security

- Your `GROQ_API_KEY` lives **only** in `.env` on the server
- The key is **never** sent to the browser
- `.env` is in `.gitignore` — it will **never** be uploaded to GitHub
- When you share or fork the repo, only `.env.example` (with a placeholder) is visible
- Anyone who clones the repo must supply their own key

---

## 🔧 Troubleshooting

| Problem | Fix |
|---------|-----|
| "Connecting..." won't go away | Ports tab → right-click port 3000 → Port Visibility → **Public** |
| Port 3000 already in use | Run `pkill -f "node server.js"` then `npm start` |
| Mic button doesn't work | Allow microphone in browser settings · Use Chrome or Edge |
| Voice not working on Firefox | Firefox doesn't support SpeechRecognition — use Chrome |
| API key warning on startup | Run `echo "GROQ_API_KEY=gsk_..." > .env` in terminal |
| Wake word not triggering | Say "Axiom" clearly · Check mic permission is allowed |

---

## 🧰 Tech Stack

| Technology | Purpose | Cost |
|-----------|---------|------|
| Node.js + Express | Backend server & API proxy | Free |
| Groq API (Llama 3.3 70B) | AI language model | Free tier |
| Web Speech API | Voice recognition (browser built-in) | Free |
| SpeechSynthesis API | Text-to-speech (browser built-in) | Free |
| GitHub Codespaces | Cloud development environment | Free tier |
| PWA (manifest + SW) | Native app install support | Free |

**Total monthly cost: $0.00**

---

## 📦 Version History

| Version | What's New |
|---------|-----------|
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
