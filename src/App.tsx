/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "@/components/layout/Navbar";
import { TerminalHero } from "@/components/home/TerminalHero";
import { About } from "@/components/home/About";
import { Skills } from "@/components/home/Skills";
import { Projects } from "@/components/home/Projects";
import { Contact } from "@/components/home/Contact";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="dark min-h-screen bg-background text-foreground selection:bg-primary/30">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main className="flex flex-col">
        <TerminalHero />
        
        <div className="relative z-10 bg-background">
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </main>

      <footer className="py-12 border-t border-border bg-muted/20">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="text-xl font-bold font-mono tracking-tighter">OLOYERINDE.DEV</div>
            <p className="text-xs text-muted-foreground font-mono uppercase tracking-[0.2em]">
              © {new Date().getFullYear()} — Built with passion & precision
            </p>
          </div>
          <div className="flex gap-8 text-sm font-mono uppercase tracking-widest text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#projects" className="hover:text-primary transition-colors">Work</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
