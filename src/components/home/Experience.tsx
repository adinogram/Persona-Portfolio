import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { FileDown, Download } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const experiences = [
  {
    company: "Freelance & Independent",
    role: "Full-Stack Software and Blockchain Engineer",
    period: "Feb 2025 - Present",
    description: "Building modern full-stack web apps and decentralized blockchain solutions independently. Working on smart contracts, APIs, and personal software research initiatives.",
    skills: ["Rust", "Solidity", "NestJS", "React.js", "APIs", "TypeScript"]
  },
  {
    company: "DotCircle Labs",
    role: "Full-Stack Software and Blockchain Engineer",
    period: "Dec 2022 - Jan 2025",
    description: "Developed web applications and experimented with decentralized protocols, smart contracts, and Web3 tools across frontend and backend development workflows.",
    skills: ["Solidity", "React.js", "Node.js", "Web3.js", "Smart Contracts", "DApps"]
  },
  {
    company: "DotCircle Labs",
    role: "Blockchain Engineer Intern",
    period: "Mar 2022 - Dec 2024",
    description: "Assisted in writing smart contracts and auditing decentralized workflows while supporting app testing, testing frameworks, and multi-chain integrations.",
    skills: ["Solidity", "Hardhat", "EVM", "Testing", "DApp Integration"]
  },
  {
    company: "Freelance",
    role: "Junior Full Stack Developer",
    period: "Dec 2020 - Mar 2022",
    description: "Built responsive Web2 platforms, integrated external REST APIs, designed authentication flows, and designed fintech dashboards with React.js and Node.js.",
    skills: ["JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "Rest APIs"]
  },
  {
    company: "Crypto Communities",
    role: "Moderator & Community Manager",
    period: "Jan 2019 - Present",
    description: "Managed and moderated online cryptocurrency communities, organized educational meetups, coordinated community events, and supported digital communication strategies.",
    skills: ["Leadership", "Project Management", "Communication", "Community Building"]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Professional Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A history of technical leadership, creative problem solving, and building decentralized solutions.
          </p>
          <div className="flex justify-center pt-4">
            <a 
              href="/resume.txt" 
              download="Oloyerinde_Oluwatosin_Joseph_Resume.txt"
              className={cn(
                buttonVariants({ variant: "default" }),
                "rounded-full px-8 h-12 flex items-center justify-center gap-2 group transition-all duration-300"
              )}
            >
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              Download Resume
            </a>
          </div>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border/50 before:to-transparent">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-card shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform group-hover:scale-110 group-hover:bg-primary/10">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              </div>

              {/* Content Panel */}
              <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm shadow-xl transition-all hover:border-primary/30">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg">{exp.company}</h3>
                  <time className="font-mono text-[10px] uppercase text-primary/60">{exp.period}</time>
                </div>
                <div className="text-sm font-medium text-foreground/80 mb-3">{exp.role}</div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map(skill => (
                    <Badge key={skill} variant="outline" className="text-[9px] px-2 py-0 border-white/5 opacity-60">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
