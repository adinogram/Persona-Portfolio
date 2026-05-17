/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/TerminalHero";
import { About } from "@/components/home/About";
import { Services } from "@/components/home/Services";
import { Testimonials } from "@/components/home/Testimonials";
import { Skills } from "@/components/home/Skills";
import { Experience } from "@/components/home/Experience";
import { Projects } from "@/components/home/Projects";
import { GithubIntelligence } from "@/components/home/GithubIntelligence";
import { Contact } from "@/components/home/Contact";
import { Footer } from "@/components/layout/Footer";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true; // Default to dark as requested by the initial design
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
          <Experience />
          <Services />
          <Skills />
          <Projects />
          <GithubIntelligence />
          <Testimonials />
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}
