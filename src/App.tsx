/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState, lazy, Suspense } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/TerminalHero";
import { About } from "@/components/home/About";
import { Journey } from "@/components/home/Journey";
import { Footer } from "@/components/layout/Footer";
import { TosinAI } from "@/components/ai/TosinAI";
import { motion, useScroll, useSpring } from "motion/react";

// Lazy Loaded Sections for Performance
const Experience = lazy(() => import("@/components/home/Experience").then(m => ({ default: m.Experience })));
const Services = lazy(() => import("@/components/home/Services").then(m => ({ default: m.Services })));
const Skills = lazy(() => import("@/components/home/Skills").then(m => ({ default: m.Skills })));
const Projects = lazy(() => import("@/components/home/Projects").then(m => ({ default: m.Projects })));
const Testimonials = lazy(() => import("@/components/home/Testimonials").then(m => ({ default: m.Testimonials })));
const Contact = lazy(() => import("@/components/home/Contact").then(m => ({ default: m.Contact })));

const LoadingSection = () => (
  <div className="w-full h-[400px] flex items-center justify-center bg-background/50 animate-pulse">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
      <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground">Syncing Modules...</span>
    </div>
  </div>
);

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true;
  });

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className={`${isDark ? "dark" : ""} min-h-screen bg-background text-foreground selection:bg-primary/30`}>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      
      <main className="flex flex-col">
        <Hero />
        
        <div className="relative z-10 bg-background">
          <About />
          <Journey />
          
          <Suspense fallback={<LoadingSection />}>
            <Experience />
            <Services />
            <Skills />
            <Projects />
            <Testimonials />
            <Contact />
          </Suspense>
        </div>
      </main>

      <Footer />
      
      {/* Interactive Floating Layers */}
      <TosinAI />
    </div>
  );
}
