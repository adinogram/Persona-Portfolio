import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { 
  ExternalLink, 
  Github, 
  ChevronDown, 
  ChevronUp, 
  Code, 
  Zap, 
  Shield, 
  Target, 
  Cpu, 
  Clock, 
  Lightbulb, 
  ArrowUpRight,
  CheckCircle2,
  Terminal,
  Activity
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React, { useState, useMemo, useRef } from "react";

const projects = [
  {
    id: "defi",
    title: "DeFi Yield Aggregator",
    description: "An automated yield farming platform that optimizes returns across multiple liquidity pools using smart contract strategies.",
    problem: "DeFi users struggle with manually rebalancing assets to optimize yield, often losing significant shares to gas fees and slippage during shifts in liquidity between protocols like Aave and Uniswap.",
    research: "Analyzed existing aggregators (Yearn, Beefy) to identify inefficiencies in gas optimization. Researched ERC-4626 standard for vault standardization and LayerZero for potential future omnichain expansion.",
    architecture: {
      diagram: "Vault -> Controller -> Strategy -> Protocol",
      description: "A modular architecture separating fund custody (Vault) from movement logic (Controller and Strategy). Each strategy is a pluggable smart contract targeting a specific protocol."
    },
    techStack: ["Solidity", "TypeScript", "React", "Ether.js", "Hardhat", "The Graph"],
    challenges: [
      "Implementing gas-efficient rebalancing logic during high network congestion.",
      "Ensuring mathematical precision in interest rate calculations across different protocol versions.",
      "Developing a robust emergency shutdown mechanism for smart contract security."
    ],
    solutions: [
      "Utilized GSN (Gas Station Network) to allow meta-transactions.",
      "Implemented a floating-point precision library for complex rate calculations.",
      "Integrated OpenZeppelin's Pausable and AccessControl for granular permission management."
    ],
    lessonsLearned: "Immutability is both a blessing and a curse. Rigorous auditing and formal verification are non-negotiable in production DeFi environments.",
    futureImprovements: "Integration with LayerZero for cross-chain yield optimization and migration to Account Abstraction (ERC-4337) for better UX.",
    readTime: "6 min read",
    codeSnippet: `// Example Strategy Harvesting
function harvest() external onlyController {
  uint256 balance = IERC20(want).balanceOf(address(this));
  _withdrawFromProtocol(balance);
  _reportProfit(balance);
  _reinvest();
}`,
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000&auto=format&fit=crop",
    tags: ["Solidity", "TypeScript", "React", "Ether.js"],
    github: "https://github.com/adinogram/defi-yield",
    live: "https://defi-yield-demo.vercel.app"
  },
  {
    id: "erp",
    title: "NextGen ERP Engine",
    description: "A full-scale cloud-native ERP system designed for SMEs, featuring inventory management, CRM, and real-time analytics.",
    problem: "Small to medium enterprises often use fragmented tools that don't communicate, leading to data silos, inventory inaccuracies, and inefficient customer relationship management.",
    research: "Conducted interviews with 15 local SME owners. Key findings: 80% struggle with inventory-sales sync, and 90% find enterprise solutions (SAP, Oracle) too expensive and complex.",
    architecture: {
      diagram: "Microservices -> Message Bus -> Aggregator -> Client",
      description: "Distributed service architecture using Node.js services communicating via a Redis message bus for real-time state synchronization across inventory and sales modules."
    },
    techStack: ["Node.js", "PostgreSQL", "React", "Docker", "Redis", "D3.js"],
    challenges: [
      "Optimizing complex SQL queries for real-time reporting over millions of records.",
      "Building a scalable multi-tenant architecture with strict data isolation.",
      "Designing a highly responsive UI that remains performant with large data tables."
    ],
    solutions: [
      "Implemented PostgreSQL materialized views for lightning-fast aggregated reports.",
      "Developed a schema-per-tenant isolation strategy for maximum security.",
      "Used React Virtualized for rendering massive inventory lists with zero lag."
    ],
    lessonsLearned: "Materialized views are a game-changer for analytics, but cache invalidation logic must be bulletproof.",
    futureImprovements: "AI-driven demand forecasting and automated supplier ordering based on low-stock triggers.",
    readTime: "8 min read",
    codeSnippet: `// Materialized View Refresh Logic
async function refreshAnalytics() {
  await db.query('REFRESH MATERIALIZED VIEW CONCURRENTLY daily_sales_report');
  broadcastUpdate('analytics_ready');
}`,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
    tags: ["Node.js", "PostgreSQL", "React", "Docker"],
    github: "https://github.com/adinogram/erp-system",
    live: "https://erp-enterprise.demo"
  },
  {
    id: "nft",
    title: "NFT Protocol X",
    description: "A white-label solution for creators to mint, trade, and auction high-quality digital assets with low gas fees.",
    problem: "High Ethereum gas fees and complex UX for non-crypto natives prevent mass adoption of digital collectibles for mainstream creators.",
    research: "Benchmarked performance of Polygon vs Arbitrum for minting costs. Researched EIP-2981 for universal royalty support.",
    architecture: {
      diagram: "Creator -> SDK -> IPFS -> L2 Chain -> Marketplace",
      description: "Hybrid architecture using IPFS for content persistence and Polygon for high-throughput, low-fee transaction execution."
    },
    techStack: ["Hardhat", "Next.js", "Tailwind", "IPFS", "Polygon", "Alchemy"],
    challenges: [
      "Integrating layer-2 scaling solutions (Polygon) to solve Ethereum's high gas fee issues.",
      "Standardizing metadata structures for compatibility across different NFT explorers.",
      "Implementing a secure secondary market royalty system for creators."
    ],
    solutions: [
      "Implemented gasless minting via Biconomy relayers.",
      "Built a custom metadata validator to ensure OpenSea / Rarible compatibility.",
      "Adopted EIP-2981 for multi-chain royalty enforcement."
    ],
    lessonsLearned: "Metadata is as important as the smart contract itself. If IPFS pins fail, the NFT value vanishes.",
    futureImprovements: "Dynamic NFT support (metadata that changes based on on-chain events) and fiat-to-nft checkout.",
    readTime: "5 min read",
    codeSnippet: `// Lazy Minting Data structure
const lazyMint = {
  tokenId: 1,
  minPrice: ethers.utils.parseEther("0.1"),
  uri: "ipfs://...",
  signature: "0x..."
};`,
    image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=2000&auto=format&fit=crop",
    tags: ["Hardhat", "Next.js", "Tailwind", "IPFS"],
    github: "https://github.com/adinogram/nft-marketplace",
    live: "https://nft-engine.demo"
  }
];

const CaseStudySection = ({ title, icon, children, delay = 0 }: { title: string, icon: React.ReactNode, children: React.ReactNode, delay?: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="space-y-4"
  >
    <h4 className="text-xs font-mono uppercase tracking-[0.3em] text-primary flex items-center gap-2 font-bold">
      {icon} {title}
    </h4>
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
      {children}
    </div>
  </motion.div>
);

const AnimatedDiagram = ({ nodes }: { nodes: string[] }) => (
  <div className="relative py-12 flex items-center justify-between gap-4 max-w-lg mx-auto">
    <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />
    {nodes.map((node, i) => (
      <div key={i} className="relative z-10 flex flex-col items-center gap-2">
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }} 
          transition={{ repeat: Infinity, duration: 3, delay: i * 0.5 }}
          className="w-12 h-12 rounded-xl bg-black border border-primary/40 flex items-center justify-center shadow-lg shadow-primary/10"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
        <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{node}</span>
      </div>
    ))}
  </div>
);

export const Projects = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach(p => p.tags.forEach(t => tags.add(t)));
    return ["All", ...Array.from(tags).sort()];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter(p => p.tags.includes(activeFilter));
  }, [activeFilter]);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
    if (expandedId !== id) {
      setTimeout(() => {
        document.getElementById(`project-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  return (
    <section id="projects" className="py-24 px-4 overflow-hidden relative" ref={scrollRef}>
      {/* Scroll Progress Indicator for active case study */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX: expandedId ? scaleX : 0 }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter">Selected Projects</h2>
            <p className="text-muted-foreground max-w-xl leading-relaxed font-mono text-xs uppercase tracking-wide">
              Engineering case studies focused on scalability, security, and performance.
            </p>
          </motion.div>
          
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  setActiveFilter(tag);
                  setExpandedId(null);
                }}
                className={`px-6 py-2 rounded-full text-[10px] font-mono tracking-widest uppercase transition-all border ${
                  activeFilter === tag
                    ? "bg-primary text-black border-primary font-black shadow-xl shadow-primary/20"
                    : "bg-card border-border text-muted-foreground hover:border-primary/40"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout 
          className="grid lg:grid-cols-3 gap-8 items-start"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                id={`project-${project.id}`}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group flex flex-col bg-card border border-border rounded-[2.5rem] overflow-hidden transition-all duration-500 ${
                  expandedId === project.id ? "lg:col-span-3 shadow-2xl ring-1 ring-primary/20" : "hover:shadow-2xl hover:border-primary/30"
                }`}
              >
              <div className={`flex flex-col ${expandedId === project.id ? "lg:flex-row" : ""}`}>
                <motion.div 
                  layout 
                  className={`relative overflow-hidden ${
                    expandedId === project.id ? "w-full lg:w-2/5 aspect-[4/3] lg:aspect-auto" : "aspect-[16/10]"
                  }`}
                  onClick={() => !expandedId && toggleExpand(project.id)}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale-[0.2] transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  
                  {/* Quick Info Overlay */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="flex items-center gap-3 mb-2">
                       <Badge className="bg-primary text-black font-black text-[8px] uppercase tracking-widest">{project.readTime}</Badge>
                       <div className="flex items-center gap-1 text-[10px] text-white font-mono uppercase tracking-widest">
                         <Activity className="w-3 h-3 text-primary" /> Case Study Active
                       </div>
                    </div>
                    <motion.h3 layout className="text-3xl font-black text-white tracking-tight">{project.title}</motion.h3>
                  </div>

                  {!expandedId && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 pointer-events-none">
                       <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-black font-mono uppercase tracking-widest text-xs h-12 px-8">
                         Analyze Architecture <ArrowUpRight className="ml-2 w-4 h-4" />
                       </Button>
                    </div>
                  )}
                </motion.div>
                
                <div className={`p-8 lg:p-12 flex-1 flex flex-col ${expandedId === project.id ? "bg-black/95 overflow-y-auto max-h-[800px] custom-scrollbar" : "bg-card"}`}>
                  <header className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-[10px] font-mono text-primary/60 font-bold uppercase tracking-widest">#{tag}</span>
                        ))}
                      </div>
                      {!expandedId && <p className="text-muted-foreground leading-relaxed max-w-sm">{project.description}</p>}
                    </div>
                    
                    <div className="flex gap-3">
                      {project.github && project.github !== "#" && <a href={project.github} target="_blank" rel="noopener noreferrer"><Button size="icon" variant="ghost" className="rounded-full border border-white/10 hover:border-primary"><Github className="w-5 h-5" /></Button></a>}
                      {project.live && project.live !== "#" && <a href={project.live} target="_blank" rel="noopener noreferrer"><Button size="icon" variant="ghost" className="rounded-full border border-white/10 hover:border-primary"><ExternalLink className="w-5 h-5" /></Button></a>}
                    </div>
                  </header>

                  <AnimatePresence>
                    {expandedId === project.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-12"
                      >
                        <div className="grid md:grid-cols-2 gap-12">
                          <CaseStudySection title="Problem Space" icon={<Target className="w-4 h-4" />} delay={0.1}>
                            <p className="text-sm text-muted-foreground leading-relaxed italic border-l-2 border-primary/30 pl-4">{project.problem}</p>
                          </CaseStudySection>
                          <CaseStudySection title="Technical Research" icon={<Activity className="w-4 h-4" />} delay={0.2}>
                            <p className="text-sm text-muted-foreground leading-relaxed">{project.research}</p>
                          </CaseStudySection>
                        </div>

                        <CaseStudySection title="Deployment Architecture" icon={<Cpu className="w-4 h-4" />} delay={0.3}>
                          <p className="text-sm text-muted-foreground mb-8 text-center">{project.architecture.description}</p>
                          <AnimatedDiagram nodes={project.architecture.diagram.split(" -> ")} />
                        </CaseStudySection>

                        <div className="grid md:grid-cols-2 gap-8">
                           <div className="space-y-4">
                             <h4 className="text-xs font-mono uppercase tracking-[0.3em] font-bold text-muted-foreground">Engineering Constraints</h4>
                             <div className="space-y-4">
                               {project.challenges.map((c, i) => (
                                 <div key={i} className="flex gap-4 items-start bg-red-400/5 p-4 rounded-xl border border-red-400/10">
                                   <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                                   <p className="text-xs font-mono">{c}</p>
                                 </div>
                               ))}
                             </div>
                           </div>
                           <div className="space-y-4">
                             <h4 className="text-xs font-mono uppercase tracking-[0.3em] font-bold text-muted-foreground">Applied Solutions</h4>
                             <div className="space-y-4">
                               {project.solutions.map((s, i) => (
                                 <div key={i} className="flex gap-4 items-start bg-emerald-400/5 p-4 rounded-xl border border-emerald-400/10">
                                   <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                   <p className="text-xs font-mono">{s}</p>
                                 </div>
                               ))}
                             </div>
                           </div>
                        </div>

                        <CaseStudySection title="Core Implementation" icon={<Code className="w-4 h-4" />} delay={0.4}>
                          <div className="bg-black/80 rounded-xl p-6 border border-white/5 font-mono text-[11px] leading-relaxed relative overflow-hidden group/code">
                             <div className="absolute top-0 right-0 p-2 opacity-50 group-hover:opacity-100 transition-opacity">
                                <Terminal className="w-4 h-4" />
                             </div>
                             <pre className="text-emerald-300 drop-shadow-[0_0_10px_rgba(110,231,183,0.2)] whitespace-pre-wrap">{project.codeSnippet}</pre>
                          </div>
                        </CaseStudySection>

                        <div className="grid md:grid-cols-2 gap-8">
                          <CaseStudySection title="Lessons Learned" icon={<Lightbulb className="w-4 h-4" />} delay={0.5}>
                             <p className="text-sm font-medium text-white">{project.lessonsLearned}</p>
                          </CaseStudySection>
                          <CaseStudySection title="Future Improvements" icon={<Zap className="w-4 h-4" />} delay={0.5}>
                             <p className="text-sm text-muted-foreground">{project.futureImprovements}</p>
                          </CaseStudySection>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                           {project.techStack.map((tech, i) => (
                             <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-xl text-center group/tech hover:border-primary transition-colors">
                                <span className="text-[10px] font-mono tracking-widest text-muted-foreground group-hover/tech:text-primary">{tech}</span>
                             </div>
                           ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-auto pt-8 flex items-center justify-between">
                     <Button 
                       variant="ghost" 
                       onClick={(e) => { e.stopPropagation(); toggleExpand(project.id); }}
                       className="group text-[10px] font-mono uppercase tracking-[0.3em] font-bold text-primary px-0 hover:bg-transparent"
                     >
                       <span className="relative">
                         {expandedId === project.id ? "Close Intelligence" : "Open Intelligence"}
                         <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full" />
                       </span>
                     </Button>
                     <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        <span className="text-[10px] font-mono uppercase">{project.readTime}</span>
                     </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
