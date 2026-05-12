import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, ChevronDown, ChevronUp, Code, Zap, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const projects = [
  {
    id: "defi",
    title: "DeFi Yield Aggregator",
    description: "An automated yield farming platform that optimizes returns across multiple liquidity pools using smart contract strategies.",
    fullDescription: "Built a sophisticated DeFi protocol that dynamically rebalances funds across Aave, Compound, and Uniswap to capitalize on shifting interest rates. The system uses off-chain keepers for periodic rebalancing triggers and on-chain governance for strategy updates.",
    challenges: [
      "Implementing gas-efficient rebalancing logic during high network congestion.",
      "Ensuring mathematical precision in interest rate calculations across different protocol versions.",
      "Developing a robust emergency shutdown mechanism for smart contract security."
    ],
    detailedTech: ["Solidity", "TypeScript", "React", "Ether.js", "Hardhat", "The Graph"],
    image: "https://picsum.photos/seed/defi/800/600",
    tags: ["Solidity", "TypeScript", "React", "Ether.js"],
    github: "#",
    live: "#"
  },
  {
    id: "erp",
    title: "Enterprise Resource Planner",
    description: "A full-scale cloud-native ERP system designed for SMEs, featuring inventory management, CRM, and real-time analytics.",
    fullDescription: "Developed a modular ERP solution to handle complex business workflows. Features include real-time inventory tracking with WebSocket updates, a comprehensive CRM with automated lead scoring, and a high-performance analytics dashboard powered by D3.js.",
    challenges: [
      "Optimizing complex SQL queries for real-time reporting over millions of records.",
      "Building a scalable multi-tenant architecture with strict data isolation.",
      "Designing a highly responsive UI that remains performant with large data tables."
    ],
    detailedTech: ["Node.js", "PostgreSQL", "React", "Docker", "Redis", "D3.js"],
    image: "https://picsum.photos/seed/erp/800/600",
    tags: ["Node.js", "PostgreSQL", "React", "Docker"],
    github: "#",
    live: "#"
  },
  {
    id: "nft",
    title: "NFT Marketplace Engine",
    description: "A white-label solution for creators to mint, trade, and auction high-quality digital assets with low gas fees.",
    fullDescription: "Created a high-throughput NFT marketplace engine supporting lazy minting, timed auctions, and fractional ownership. The platform utilizes IPFS for decentralized metadata storage and Pinata for reliable content pinning.",
    challenges: [
      "Integrating layer-2 scaling solutions (Polygon) to solve Ethereum's high gas fee issues.",
      "Standardizing metadata structures for compatibility across different NFT explorers.",
      "Implementing a secure secondary market royalty system for creators."
    ],
    detailedTech: ["Hardhat", "Next.js", "Tailwind", "IPFS", "Polygon", "Alchemy"],
    image: "https://picsum.photos/seed/nft/800/600",
    tags: ["Hardhat", "Next.js", "Tailwind", "IPFS"],
    github: "#",
    live: "#"
  }
];

export const Projects = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Selected Works</h2>
            <p className="text-muted-foreground max-w-xl">
              A curated selection of my recent engineering projects, ranging from decentralized finance protocols to robust enterprise applications.
            </p>
          </motion.div>
          <Button variant="outline" className="rounded-full px-8">
            View All Projects
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`group flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all cursor-pointer ${
                expandedId === project.id ? "lg:col-span-2 lg:row-span-2 ring-2 ring-primary/20" : ""
              }`}
              onClick={() => toggleExpand(project.id)}
            >
              <motion.div layout className="aspect-[16/9] lg:aspect-auto lg:h-64 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <Button size="icon" variant="secondary" className="rounded-full shadow-lg" onClick={(e) => e.stopPropagation()}>
                    <Github className="w-5 h-5" />
                  </Button>
                  <Button size="icon" variant="secondary" className="rounded-full shadow-lg" onClick={(e) => e.stopPropagation()}>
                    <ExternalLink className="w-5 h-5" />
                  </Button>
                </div>
              </motion.div>
              
              <div className="p-8 flex-1 flex flex-col">
                <motion.div layout className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="text-[10px] font-mono px-2 py-0 border-primary/20">
                      {tag}
                    </Badge>
                  ))}
                </motion.div>
                
                <motion.h3 layout className="text-2xl font-bold mb-2 tracking-tight">{project.title}</motion.h3>
                <motion.p layout className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </motion.p>

                <AnimatePresence>
                  {expandedId === project.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 border-t border-border mt-2 space-y-8">
                        <div>
                          <h4 className="text-sm font-mono uppercase tracking-widest text-primary mb-3 flex items-center gap-2">
                            <Zap className="w-4 h-4" /> Technical Deep-Dive
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {project.fullDescription}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-sm font-mono uppercase tracking-widest text-primary mb-3 flex items-center gap-2">
                            <Shield className="w-4 h-4" /> Challenges Overcome
                          </h4>
                          <ul className="space-y-2">
                            {project.challenges.map((challenge, cIdx) => (
                              <li key={cIdx} className="text-sm text-muted-foreground flex gap-3">
                                <span className="text-primary">•</span>
                                {challenge}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-sm font-mono uppercase tracking-widest text-primary mb-3 flex items-center gap-2">
                            <Code className="w-4 h-4" /> Full Stack Composition
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.detailedTech.map(tech => (
                              <Badge key={tech} variant="outline" className="px-3 py-1 bg-primary/5 border-primary/10">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-8 pt-4 border-t border-border/50 flex justify-between items-center text-primary">
                  <span className="text-xs font-mono uppercase tracking-[0.2em] font-semibold">
                    {expandedId === project.id ? "Minimize View" : "Project Details"}
                  </span>
                  {expandedId === project.id ? <ChevronUp className="w-5 h-5 animate-bounce" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
