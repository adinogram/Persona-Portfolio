import React from "react";
import { motion } from "motion/react";
import { 
  Building2, 
  Globe, 
  Cpu, 
  Tractor, 
  Briefcase, 
  Compass,
  ArrowRight,
  TrendingUp,
  Zap
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface VisionMileStone {
  id: string;
  sector: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  status: "active" | "planned" | "long-term";
}

const visionData: VisionMileStone[] = [
  {
    id: "v1",
    sector: "Technology",
    title: "Venture Studio",
    description: "Building a high-performance lab dedicated to incubating Web3 protocols and AI-native SaaS products from zero to one.",
    icon: <Cpu className="w-6 h-6" />,
    color: "#3B82F6",
    status: "active"
  },
  {
    id: "v2",
    sector: "Agriculture",
    title: "Smart Farms",
    description: "Integrating IoT and blockchain for supply-chain transparency and autonomous crop monitoring in emerging markets.",
    icon: <Tractor className="w-6 h-6" />,
    color: "#10B981",
    status: "planned"
  },
  {
    id: "v3",
    sector: "Real Estate",
    title: "Tokenized Assets",
    description: "Democratizing access to high-yield commercial real estate through fractional ownership and RWA tokenization protocols.",
    icon: <Building2 className="w-6 h-6" />,
    color: "#F59E0B",
    status: "long-term"
  }
];

export const Vision = () => {
  return (
    <section id="vision" className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Background Motion Graphics */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9]">
              Future <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-purple-500">Roadmap.</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              My vision extends beyond code. I am architecting a future where technology, real estate, and agriculture converge to impact millions of lives globally.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                <Globe className="w-4 h-4 text-primary" />
                <span className="text-[10px] font-mono uppercase tracking-widest">Global Impact</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                <Briefcase className="w-4 h-4 text-primary" />
                <span className="text-[10px] font-mono uppercase tracking-widest">Entrepreneurship</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-[10px] font-mono uppercase tracking-widest">Scalability</span>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Visual Roadmap */}
            <div className="space-y-6">
              {visionData.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative flex items-center gap-6 bg-card border border-border p-8 rounded-[2rem] hover:border-primary/50 transition-all cursor-crosshair"
                >
                  <div 
                    className="p-5 rounded-2xl shrink-0 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `${item.color}15`, color: item.color }}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-[0.2em]">{item.sector}</span>
                      <Badge variant="outline" className={`text-[8px] uppercase tracking-widest h-5 ${
                        item.status === 'active' ? 'border-primary text-primary' : 'border-border text-muted-foreground'
                      }`}>
                        {item.status}
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Decorative Connection Line */}
            <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/20 to-transparent hidden xl:block" />
          </div>
        </div>

        <div className="mt-32 p-12 bg-primary rounded-[3rem] text-black relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:rotate-12 transition-transform duration-700">
            <Zap className="w-48 h-48" />
          </div>
          <div className="max-w-2xl relative z-10 space-y-6">
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter">Impact at Scale</h3>
            <p className="text-xl font-medium opacity-90 leading-relaxed">
              \"I'm not just building products; I'm building engines of growth. The goal is to create technology that doesn't just sell, but solves.\"
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="w-12 h-px bg-black" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] font-bold">The Vision</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
