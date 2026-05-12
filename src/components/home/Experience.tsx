import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    company: "DeFi Solutions Int.",
    role: "Senior Blockchain Engineer",
    period: "2023 - Present",
    description: "Architecting secure smart contracts and auditing protocol logic for high-TVL decentralized applications. Leading a team of 4 full-stack developers.",
    skills: ["Solidity", "Security Audits", "EVM", "Team Lead"]
  },
  {
    company: "TechFlow Systems",
    role: "Full Stack Developer",
    period: "2021 - 2023",
    description: "Developed scalable microservices using Node.js and Go. Optimized frontend performance by 40% using Next.js and advanced caching strategies.",
    skills: ["Node.js", "React", "Go", "Redis"]
  },
  {
    company: "CryptoGuard",
    role: "Smart Contract Developer",
    period: "2020 - 2021",
    description: "Implemented multi-signature wallet protocols and integrated cross-chain bridge solutions for enterprise clients.",
    skills: ["Web3.js", "Hardhat", "Cryptography"]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4">Journey</div>
          <h2 className="text-4xl font-bold tracking-tight">Career Milestones</h2>
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
