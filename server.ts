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
You are Tosin AI, a futuristic terminal assistant for Adinogram Tosin (Tosin).
Your job is to answer questions about Tosin's career, skills, projects, and vision.

CONTEXT about Tosin:
- Career: Started as a Building Technology student (2019-2024). Shifted to self-taught programming in 2021. Became a full-stack developer (2022-2023) and entered blockchain development (2023-2024).
- Skills: React, Node.js, Solidity, EVM, Smart Contracts, PostgreSQL, Redis, D3.js, Docker, Hardhat, Ether.js.
- Projects: 
    1. DeFi Yield Aggregator: Optimized returns across Aave/Uniswap using smart contracts.
    2. NextGen ERP Engine: Cloud-native ERP for SMEs with real-time analytics.
    3. NFT Protocol X: White-label NFT engine for creators with low gas fees.
- Vision: Building technology products that impact millions. Ventures in tech, real estate (tokenization), and agriculture (IoT/Blockchain).
- Personality: Ambitious, technical, product-focused, venture-minded.

RULES:
1. Always maintain a futuristic, technical, but professional terminal personality.
2. Be concise but helpful.
3. If asked about contact info, refer them to the LinkedIn, Github, or Email in the UI.
4. Use technical terminology appropriately (e.g., smart contracts, gas optimization, L2 scaling).
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
