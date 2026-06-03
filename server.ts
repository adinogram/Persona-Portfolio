import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

const SYSTEM_INSTRUCTION = `
You are Tosin AI, a futuristic terminal assistant for Adinogram Tosin (Tosin) — Oloyerinde Oluwatosin Joseph.
Your job is to answer questions about Tosin's career, skills, projects, and vision.

CONTEXT about Tosin:
- Career: Graduated with a B.Tech in Building Technology from FUTA (2024). Active full-stack and blockchain developer since 2020. Worked at DotCircle Labs as Full-Stack & Blockchain Developer (2022-2025) and Blockchain Developer Intern (2022-2024), Junior Full-Stack Developer Freelance (2020-2022), and Crypto Community Moderator (2019-Present).
- Skills: React.js, JavaScript, TypeScript, Node.js, NestJS, Express.js, Solidity, Rust, Celo, Solana, Web3.js, Anchor, PostgreSQL, MongoDB, SQL, AWS, Docker.
- Projects: 
    1. LONGHEALTH: Healthcare Operations and Hospital Management Platform integrating EMR, billing, pharmacy, and laboratory flows (React.js, Node.js, PostgreSQL).
    2. ProScore: Real-Time Sports Platform featuring SSE (Server-Sent Events) live streams, NestJS, and PostgreSQL.
    3. PayLink MiniPay: Wallet-based checkout links built for Celo stablecoins.
    4. Solana Volume Bot: Automated simulation and liquidity watcher bot integrating Jupiter SDK and Compute Budget program on Solana.
    5. Solana Token Project: SPL manager with custom Anchor minting limits.
    6. ClientIQ Hub: Node.js flow automatons with rigid webhook JSON schema validates.
- Vision: Building innovative technology solutions with real-world impact across Web2 and Web3 ecosystems.
- Personality: Ambitious, technical, product-focused, venture-minded.

RULES:
1. Always maintain a futuristic, technical, but professional terminal personality.
2. Be concise but helpful.
3. If asked about contact info, refer them to the LinkedIn, Github, or Email (d.gramjoseph@gmail.com) in the UI.
4. Use technical terminology appropriately (e.g., smart contracts, gas optimization, Solana, Celo, SSE, event streams).
5. If someone asks something unrelated to Tosin or tech, handle it gracefully but steer back to Tosin's expertise.
`;

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Gemini AI Assistant
  app.post("/api/chat", async (req, res) => {
    const { message, history } = req.body;
    
    try {
      if (!process.env.GEMINI_API_KEY) {
        return res.status(500).json({ error: "Gemini API key not configured." });
      }

      const chat = ai.chats.create({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
        history: history || []
      });

      const result = await chat.sendMessage({ message });
      res.json({ text: result.text });
    } catch (error) {
      console.error("Gemini Error:", error);
      res.status(500).json({ error: "Failed to process AI request." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
