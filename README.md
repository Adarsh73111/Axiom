# ◈ AXIOM — Adaptive eXchange Intelligence & Omni-context Machine

> A contextual AI chatbot that remembers your entire conversation, tracks emerging topics, and adapts its intelligence mode to how you think.

---

## ✨ Features

- **4 Intelligence Modes** — Explore, Create, Analyze, Reflect (each rewires the AI's personality)
- **Full Conversation Context** — Every reply builds on everything said before
- **Live Topic Threading** — Auto-detects and tracks conversation themes in real time
- **Conversation Pulse** — Visualizes depth, curiosity, and complexity of your dialogue
- **100% Safe** — Your API key never touches the browser; it lives only on the server

---

## 🚀 Run on GitHub Codespaces (Recommended — No Computer Setup Needed)

### Step 1 — Fork or clone the repo to your GitHub account
If you're viewing this on GitHub, click the **Fork** button (top right).

### Step 2 — Open in Codespace
1. On your repo page, click the green **`< > Code`** button
2. Click the **Codespaces** tab
3. Click **"Create codespace on main"**
4. Wait ~60 seconds — GitHub sets everything up automatically in your browser

### Step 3 — Add your OpenAI API key
In the Codespace terminal (bottom panel), run:
```bash
cp .env.example .env
```
Then open the `.env` file that appears in the file explorer on the left. Replace the placeholder:
```
OPENAI_API_KEY=sk-your-openai-api-key-here
```
with your real key from https://platform.openai.com/api-keys

### Step 4 — Start AXIOM
In the terminal, run:
```bash
npm start
```
A popup will appear — click **"Open in Browser"**. AXIOM is live! 🎉

---

## 💻 Run Locally on Your Own Computer

### Requirements
- [Node.js](https://nodejs.org) version 18 or higher
- An OpenAI API key from https://platform.openai.com

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/YOUR-USERNAME/axiom.git
cd axiom

# 2. Install dependencies
npm install

# 3. Set up your API key
cp .env.example .env
# Open .env in any text editor and paste your OpenAI API key

# 4. Start the server
npm start

# 5. Open your browser and go to:
#    http://localhost:3000
```

---

## 🔑 Getting an OpenAI API Key

1. Go to https://platform.openai.com/api-keys
2. Sign in or create a free account
3. Click **"Create new secret key"**
4. Copy the key (starts with `sk-...`)
5. Paste it into your `.env` file

> AXIOM uses **gpt-4o-mini** by default — it's fast, smart, and very affordable (typically fractions of a cent per conversation).

---

## 🗂 Project Structure

```
axiom/
├── .devcontainer/
│   └── devcontainer.json    ← Codespaces configuration
├── public/
│   └── index.html           ← The full frontend UI
├── server.js                ← Node.js backend (API proxy)
├── package.json             ← Dependencies
├── .env.example             ← API key template (safe to share)
├── .env                     ← Your real key — NEVER commit this!
├── .gitignore               ← Ensures .env is never uploaded
└── README.md                ← This file
```

---

## 🛡 Security Notes

- The `.env` file is listed in `.gitignore` — it will **never** be uploaded to GitHub
- The OpenAI API key stays on the server, invisible to anyone using the app
- The `server.js` file acts as a secure middleman between the browser and OpenAI

---

## 📄 License

MIT — free to use, modify, and share.
