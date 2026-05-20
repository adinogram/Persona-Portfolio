import { motion, AnimatePresence } from "motion/react";
import React, { useEffect, useState, useRef, useMemo } from "react";
import { 
  Code2, 
  Database, 
  ShieldCheck, 
  Cpu, 
  Layers,
  Zap,
  Globe,
  Terminal,
  Cpu as AI,
  GitBranch,
  Layout,
  Figma,
  Box,
  Binary,
  Github
} from "lucide-react";
import * as d3 from "d3-force";

interface SkillNode extends d3.SimulationNodeDatum {
  id: string;
  name: string;
  category: "Frontend" | "Backend" | "Blockchain" | "Tools";
  icon: React.ReactNode;
  level: number;
  desc: string;
  projects: number;
}

const skillsData: SkillNode[] = [
  // Frontend
  { id: "react", name: "React", category: "Frontend", icon: <Layout className="w-4 h-4" />, level: 95, desc: "Building complex UIs with hooks and state management.", projects: 12 },
  { id: "nextjs", name: "NextJS", category: "Frontend", icon: <Globe className="w-4 h-4" />, level: 90, desc: "SSR, SSG, and App Router optimization.", projects: 8 },
  { id: "typescript", name: "TypeScript", category: "Frontend", icon: <Code2 className="w-4 h-4" />, level: 92, desc: "Type-safe development for large scale apps.", projects: 15 },
  { id: "tailwind", name: "Tailwind", category: "Frontend", icon: <Layers className="w-4 h-4" />, level: 98, desc: "Utility-first CSS for rapid, polished design.", projects: 20 },
  
  // Backend
  { id: "node", name: "Node.js", category: "Backend", icon: <Terminal className="w-4 h-4" />, level: 88, desc: "Asynchronous backend logic and API services.", projects: 10 },
  { id: "express", name: "Express", category: "Backend", icon: <Cpu className="w-4 h-4" />, level: 90, desc: "Middleware and robust routing systems.", projects: 9 },
  { id: "databases", name: "Databases", category: "Backend", icon: <Database className="w-4 h-4" />, level: 85, desc: "SQL (Postgres) and NoSQL (MongoDB, Redis).", projects: 11 },
  
  // Blockchain
  { id: "solidity", name: "Solidity", category: "Blockchain", icon: <ShieldCheck className="w-4 h-4" />, level: 85, desc: "Secure smart contract development for EVM.", projects: 6 },
  { id: "web3", name: "Web3", category: "Blockchain", icon: <Zap className="w-4 h-4" />, level: 88, desc: "Interfacing dApps with provider libraries.", projects: 7 },
  { id: "contracts", name: "Contracts", category: "Blockchain", icon: <Binary className="w-4 h-4" />, level: 82, desc: "Auditing and optimizing protocol logic.", projects: 5 },
  { id: "solana", name: "Solana", category: "Blockchain", icon: <Box className="w-4 h-4" />, level: 75, desc: "Rust-based contract development (Anchor).", projects: 3 },
  
  // Tools
  { id: "git", name: "Git", category: "Tools", icon: <GitBranch className="w-4 h-4" />, level: 95, desc: "Advanced version control and branching strategies.", projects: 25 },
  { id: "github", name: "Github", category: "Tools", icon: <Github className="w-4 h-4" />, level: 92, desc: "Actions, CI/CD, and collaborative workflows.", projects: 25 },
  { id: "figma", name: "Figma", category: "Tools", icon: <Figma className="w-4 h-4" />, level: 80, desc: "Translating high-fidelity designs into code.", projects: 18 },
  { id: "ai", name: "AI", category: "Tools", icon: <AI className="w-4 h-4" />, level: 85, desc: "Leveraging LLMs and agents for dev productivity.", projects: 14 },
];

const categoryColors = {
  Frontend: "text-blue-400 border-blue-400/30 bg-blue-400/10 shadow-blue-400/20",
  Backend: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10 shadow-emerald-400/20",
  Blockchain: "text-purple-400 border-purple-400/30 bg-purple-400/10 shadow-purple-400/20",
  Tools: "text-amber-400 border-amber-400/30 bg-amber-400/10 shadow-amber-400/20",
};

export const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [nodes, setNodes] = useState<SkillNode[]>(skillsData.map(node => ({ ...node })));
  const [hoveredNode, setHoveredNode] = useState<SkillNode | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const { width, height } = containerRef.current.getBoundingClientRect();

    const simulation = d3.forceSimulation<SkillNode>(nodes)
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("charge", d3.forceManyBody().strength(-300))
      .force("collision", d3.forceCollide().radius(70))
      .force("x", d3.forceX(width / 2).strength(0.05))
      .force("y", d3.forceY(height / 2).strength(0.05));

    simulation.on("tick", () => {
      setNodes([...simulation.nodes()]);
    });

    return () => {
      simulation.stop();
    };
  }, []);

  const handleDrag = (id: string, x: number, y: number) => {
    setNodes(prev => prev.map(n => n.id === id ? { ...n, x, y } : n));
  };

  return (
    <section id="skills" className="py-24 px-6 bg-background relative overflow-hidden border-t border-border">
      {/* 3D Grid Background */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          perspective: "1000px",
          backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          transform: "rotateX(60deg) translateY(-200px)",
          transformOrigin: "top",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Skill Map</h2>
            <p className="text-muted-foreground max-w-xl font-mono text-[10px] uppercase tracking-wider">
              Interactive map of my engineering stack. Drag and hover nodes to explore.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {Object.keys(categoryColors).map(cat => (
              <div key={cat} className={`px-4 py-1.5 rounded-full text-[10px] uppercase font-bold border ${categoryColors[cat as keyof typeof categoryColors]}`}>
                {cat}
              </div>
            ))}
          </div>
        </header>

        <div 
          ref={containerRef}
          className="relative w-full h-[600px] bg-black/20 rounded-3xl border border-white/5 backdrop-blur-sm overflow-hidden group/canvas"
        >
          {/* Legend / Status */}
          <div className="absolute top-6 left-6 z-20 pointer-events-none">
            <div className="flex items-center gap-2 group/status">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground group-hover/status:text-primary transition-colors">
                Physics Engine: Active
              </div>
            </div>
          </div>

          {nodes.map((node) => (
            <motion.div
              key={node.id}
              drag
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              dragConstraints={containerRef}
              initial={false}
              animate={{ 
                x: node.x || 0, 
                y: node.y || 0,
                scale: hoveredNode?.id === node.id ? 1.2 : 1,
                opacity: hoveredNode && hoveredNode.id !== node.id ? 0.3 : 1,
              }}
              onDrag={(e, info) => {
                // Manually update d3 position if needed to keep simulation in sync
                node.fx = node.x;
                node.fy = node.y;
              }}
              onDragEnd={() => {
                node.fx = null;
                node.fy = null;
              }}
              className={`absolute flex items-center justify-center cursor-pointer transition-shadow`}
              style={{ 
                width: 100, 
                height: 100, 
                marginLeft: -50, 
                marginTop: -50 
              }}
              onMouseEnter={() => setHoveredNode(node)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div className={`
                relative w-full h-full rounded-2xl border flex flex-col items-center justify-center gap-2 transition-all duration-300
                ${categoryColors[node.category]}
                ${hoveredNode?.id === node.id ? "ring-4 ring-primary/20 scale-110 shadow-2xl" : "shadow-lg"}
              `}>
                <div className="p-2 bg-black/40 rounded-lg group-hover:scale-110 transition-transform">
                  {node.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-tighter text-center px-1">
                  {node.name}
                </span>
                
                {/* Level Ring */}
                <svg className="absolute inset-0 w-full h-full rotate-[-90deg] opacity-20 pointer-events-none">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray={`${node.level * 2.8} 282`}
                  />
                </svg>
              </div>
            </motion.div>
          ))}

          {/* Detailed Info Panel */}
          <AnimatePresence>
            {hoveredNode && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 w-full max-w-sm pointer-events-none px-6"
              >
                <div className="bg-black/80 backdrop-blur-3xl border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-1 h-full ${categoryColors[hoveredNode.category].split(' ')[1]}`} />
                  
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary mb-1">
                        Deployment Unit: {hoveredNode.id}
                      </div>
                      <h4 className="text-2xl font-black tracking-tight text-white">{hoveredNode.name}</h4>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-mono font-black text-primary">{hoveredNode.level}%</div>
                      <div className="text-[8px] uppercase tracking-widest text-muted-foreground">Proficiency</div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed bg-white/5 p-3 rounded-lg border border-white/5">
                    {hoveredNode.desc}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <div className="text-[10px] uppercase font-mono tracking-widest text-muted-foreground">Category</div>
                      <div className="text-xs font-bold text-white">{hoveredNode.category}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-[10px] uppercase font-mono tracking-widest text-muted-foreground">Deployments</div>
                      <div className="text-xs font-bold text-white">{hoveredNode.projects}+ Repositories</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Floating Background Nodes (Pure Visual) */}
        <div className="mt-12 flex flex-wrap justify-center gap-12 opacity-30 grayscale saturate-0 pointer-events-none">
          {["Docker", "K8s", "AWS", "Python", "Go", "Redis", "Elastic"].map(link => (
            <div key={link} className="text-[10px] font-mono uppercase tracking-[0.5em]">{link}</div>
          ))}
        </div>
      </div>
    </section>
  );
};
