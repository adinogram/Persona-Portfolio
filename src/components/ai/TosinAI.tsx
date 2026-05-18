import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Bot, 
  Send, 
  X, 
  Terminal, 
  Cpu, 
  Command,
  Sparkles,
  RefreshCw,
  User,
  Zap
} from "lucide-react";

interface Message {
  role: "user" | "model";
  parts: { text: string };
}

const SUGGESTED_PROMPTS = [
  "What is Tosin currently learning?",
  "Tell me about his blockchain projects.",
  "What is his vision for the future?",
  "How did his coding journey start?",
  "What are his core technical skills?"
];

export const TosinAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async (text: string = input) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = { role: "user", parts: { text } };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          message: text,
          history: messages.slice(-6) // Keep last few messages for memory
        }),
      });

      const data = await response.json();
      if (data.text) {
        setMessages(prev => [...prev, { role: "model", parts: { text: data.text } }]);
      } else {
        throw new Error(data.error || "Unknown error");
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: "model", parts: { text: "Protocol Error: Connection to Tosin_A1 Core interrupted. Check API configuration." } }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 left-8 z-50 w-16 h-16 bg-primary rounded-2xl shadow-2xl flex items-center justify-center text-black overflow-hidden group"
      >
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        <Bot className="w-8 h-8" />
        <div className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            className="fixed inset-0 md:inset-auto md:bottom-8 md:left-8 md:w-[450px] md:h-[650px] z-[100] bg-black border border-primary/20 md:rounded-[2.5rem] shadow-[0_0_100px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden"
          >
            {/* Terminal Header */}
            <header className="p-6 bg-white/5 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                  <Cpu className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-sm font-black tracking-widest uppercase flex items-center gap-2">
                    Tosin AI <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded-full font-mono">v4.0</span>
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[9px] font-mono text-emerald-500/80 uppercase tracking-widest">Core Interface Active</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/5 rounded-xl transition-colors text-muted-foreground hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </header>

            {/* Chat Area */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"
            >
              {messages.length === 0 && (
                <div className="space-y-8 py-8">
                  <div className="bg-white/5 border border-white/10 p-6 rounded-3xl space-y-4">
                    <p className="text-xs font-mono text-muted-foreground leading-relaxed">
                      \u0022Initiating secure link to Tosin Intelligence... Data synchronized. I am ready to assist with project analysis, skill mapping, and strategic inquiries.\u0022
                    </p>
                    <div className="flex items-center gap-2">
                      <Zap className="w-3 h-3 text-primary" />
                      <span className="text-[10px] font-mono text-primary uppercase tracking-widest">Protocol Established</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] font-bold text-muted-foreground flex items-center gap-2">
                      <Command className="w-3 h-3" /> Execute Command
                    </h4>
                    <div className="flex flex-col gap-2">
                      {SUGGESTED_PROMPTS.map((prompt, i) => (
                        <button
                          key={i}
                          onClick={() => handleSend(prompt)}
                          className="text-left p-3 rounded-xl border border-white/10 bg-white/5 hover:border-primary/50 hover:bg-primary/5 transition-all text-xs text-muted-foreground hover:text-white flex items-center justify-between group"
                        >
                          {prompt}
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center ${
                      msg.role === 'user' ? 'bg-primary text-black' : 'bg-white/10 text-white'
                    }`}>
                      {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                    </div>
                    <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-primary/10 border border-primary/20 text-white rounded-tr-none' 
                        : 'bg-white/5 border border-white/10 text-muted-foreground rounded-tl-none font-mono text-xs'
                    }`}>
                      {msg.parts.text}
                    </div>
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-3 max-w-[85%]">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white">
                      <RefreshCw className="w-4 h-4 animate-spin" />
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs font-mono text-primary animate-pulse">
                      Processing request...
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <footer className="p-6 bg-white/5 border-t border-white/10">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="relative"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Tosin..."
                  className="w-full bg-black border border-white/10 rounded-2xl py-4 pl-6 pr-14 text-sm focus:outline-none focus:border-primary transition-colors text-white placeholder:text-muted-foreground font-mono"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-primary rounded-xl text-black hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:grayscale"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              <p className="mt-4 text-[10px] text-center text-muted-foreground font-mono uppercase tracking-[0.2em]">
                \u003e Powered by Gemini 3 Core v4.2
              </p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);
