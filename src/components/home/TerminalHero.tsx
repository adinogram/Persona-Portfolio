import { motion } from "motion/react";
import { useEffect, useState } from "react";

export const TerminalHero = () => {
  const [text, setText] = useState("");
  const fullText = 'git commit -m "Transforming ideas into intelligent code"';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-[#0A0A0A]"
    >
      {/* Background Pattern - Fingerprint/Contour Effect */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, transparent 0%, #0A0A0A 80%), 
              repeating-radial-gradient(circle at 50% 50%, transparent 0, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 41px)`,
          }}
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <svg width="100%" height="100%" className="opacity-10">
            <filter id="grainy">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" />
            </filter>
            <rect width="100%" height="100%" filter="url(#grainy)" />
          </svg>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-4xl px-4"
      >
        <div className="bg-[#121212]/90 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden shadow-[0_0_80px_-15px_rgba(0,0,0,0.8)]">
          {/* Header */}
          <div className="bg-[#1A1A1A] px-4 py-3 flex items-center justify-between border-b border-white/5">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56] opacity-80" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E] opacity-80" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F] opacity-80" />
            </div>
            <div className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">Oloyerinde@Terminal — zsh</div>
            <div className="w-12" />
          </div>

          {/* Body */}
          <div className="p-8 md:p-14 font-mono text-xl md:text-3xl lg:text-4xl text-white leading-tight min-h-[360px] flex flex-col justify-center">
            <div className="text-sm opacity-40 mb-8 select-none font-light border-l-2 border-white/10 pl-4 py-1">
              Last login: {new Date().toDateString()} on ttys001<br />
              Personal-MBP:~ oluwatoseen$ <span className="text-[#FF98E2]"># Initializing vision...</span>
            </div>
            <div className="flex flex-wrap gap-x-4 items-baseline">
              <span className="text-[#B085FF] font-bold text-2xl md:text-4xl">❯</span>
              <span className="break-all whitespace-pre-wrap font-medium tracking-tight">
                {text}
                <motion.span 
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="inline-block w-3 md:w-4 h-[1.1em] bg-[#FF98E2] ml-1 align-middle"
                />
              </span>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 text-center flex flex-col items-center gap-6"
        >
          <div className="px-4 py-1 rounded-full border border-white/5 bg-white/5 text-[10px] uppercase tracking-[0.3em] text-white/40 font-semibold backdrop-blur-sm">
            Full Stack & Blockchain Engineer
          </div>
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="w-px h-16 bg-gradient-to-b from-[#B085FF] to-transparent opacity-50"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
