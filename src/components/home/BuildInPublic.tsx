import React from "react";
import { motion } from "motion/react";
import { 
  Calendar, 
  Terminal, 
  Rocket, 
  Lightbulb, 
  AlertCircle, 
  CheckCircle2,
  BookOpen,
  FastForward,
  Construction
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface UpdateLog {
  id: string;
  date: string;
  type: "learning" | "project" | "milestone" | "mistake";
  title: string;
  content: string;
  tags: string[];
}

const logs: UpdateLog[] = [
  {
    id: "1",
    date: "May 15, 2026",
    type: "learning",
    title: "Mastering Zero Knowledge Proofs",
    content: "Diving deep into Circom and SnarkJS. Spent the weekend understanding the underlying math of zk-SNARKs. It's mind-bending how we can prove knowledge without revealing data.",
    tags: ["Cryptography", "ZKP", "Solidity"]
  },
  {
    id: "2",
    date: "May 10, 2026",
    type: "project",
    title: "Project Orion Alpha",
    content: "Started the core engine for Project Orion - a decentralized resource allocation protocol. Architecture involves a hybrid off-chain resolver for gas optimization.",
    tags: ["Dev Log", "Architecture", "Web3"]
  },
  {
    id: "3",
    date: "May 5, 2026",
    type: "mistake",
    title: "The Re-entrancy Nightmare",
    content: "Experienced a logic leak in a playground contract. Lesson learned: always use Checks-Effects-Interactions pattern rigidly even in simple state transitions. Re-entrancy guards aren't a silver bullet.",
    tags: ["Security", "Lessons", "Smart Contracts"]
  },
  {
    id: "4",
    date: "Apr 28, 2026",
    type: "milestone",
    title: "Global Opportunity Secured",
    content: "Accepted a contribution role in a major Ethereum L2 ecosystem. Looking forward to scaling high-throughput applications for real-world impact.",
    tags: ["Career", "Ecosystem", "L2"]
  }
];

const currentLearnings = [
  "Advanced Rust for Solana development",
  "LLM fine-tuning for technical documentation",
  "Product-Led Growth strategies for SaaS"
];

export const BuildInPublic = () => {
  return (
    <section id="build-in-public" className="py-24 px-6 bg-[#030303] relative overflow-hidden border-t border-border/50">
      <div className="max-w-6xl mx-auto relative z-10">
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Learning Log</h2>
            <p className="text-muted-foreground max-w-lg font-mono text-[10px] uppercase tracking-wider leading-relaxed">
              Transparent engineering journey and technical evolution.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md max-w-sm w-full">
            <h3 className="text-xs font-mono uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> Currently Learning
            </h3>
            <ul className="space-y-3">
              {currentLearnings.map((item, i) => (
                <li key={i} className="text-xs flex items-start gap-3 text-muted-foreground group">
                  <div className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                  <span className="group-hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {logs.map((log, index) => (
            <motion.div
              key={log.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card border border-border rounded-3xl p-8 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5 flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                  <Calendar className="w-3 h-3" />
                  {log.date}
                </div>
                <div className={`p-2 rounded-xl ${
                  log.type === "learning" ? "bg-blue-400/10 text-blue-400" :
                  log.type === "project" ? "bg-emerald-400/10 text-emerald-400" :
                  log.type === "mistake" ? "bg-red-400/10 text-red-400" :
                  "bg-purple-400/10 text-purple-400"
                }`}>
                  {log.type === "learning" && <Lightbulb className="w-4 h-4" />}
                  {log.type === "project" && <Terminal className="w-4 h-4" />}
                  {log.type === "mistake" && <AlertCircle className="w-4 h-4" />}
                  {log.type === "milestone" && <CheckCircle2 className="w-4 h-4" />}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">
                {log.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-1">
                {log.content}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {log.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="bg-white/5 border-none text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full text-muted-foreground">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Call to Action Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group bg-primary border border-primary p-8 rounded-3xl flex flex-col items-center justify-center text-center text-black space-y-6"
          >
            <div className="w-16 h-16 rounded-full bg-black/10 flex items-center justify-center animate-pulse">
              <Rocket className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-black tracking-tighter">Follow The Build</h3>
              <p className="text-sm font-medium opacity-80">Join 500+ developers receiving weekly engineering logs and technical updates.</p>
            </div>
            <button className="w-full bg-black text-white px-8 py-4 rounded-full font-mono text-xs uppercase tracking-[0.2em] font-bold hover:bg-black/90 transition-all active:scale-95 shadow-xl shadow-black/20">
              Subscribe to Logs
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
