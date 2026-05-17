import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { 
  Github, 
  Flame, 
  GitBranch, 
  GitCommit, 
  Star, 
  Activity, 
  Cpu, 
  Code2,
  Terminal,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  Tooltip as ReChartsTooltip 
} from "recharts";

const languageData = [
  { name: "TypeScript", value: 45, color: "#3178C6" },
  { name: "Solidity", value: 30, color: "#8A2BE2" },
  { name: "Go", value: 15, color: "#00ADD8" },
  { name: "Rust", value: 10, color: "#DEA584" },
];

const pinnedRepos = [
  {
    name: "adino-core-protocol",
    desc: "A decentralized liquidity layer for EVM-compatible chains with optimized gas efficiency.",
    stars: 124,
    forks: 32,
    lang: "Solidity",
    langColor: "#8A2BE2"
  },
  {
    name: "smart-contract-auditor",
    desc: "CLI tool for static analysis and vulnerability detection in CosmWasm and Solidity contracts.",
    stars: 88,
    forks: 12,
    lang: "Go",
    langColor: "#00ADD8"
  },
  {
    name: "nexus-bridge-sdk",
    desc: "High-performance cross-chain messaging SDK supporting LayerZero and Wormhole.",
    stars: 56,
    forks: 8,
    lang: "TypeScript",
    langColor: "#3178C6"
  }
];

const activityTimeline = [
  { type: "pr", text: "Opened PR #442 in ethers-io/ethers.js", time: "2h ago" },
  { type: "commit", text: "Pushed 12 commits to adino-core/main", time: "5h ago" },
  { type: "issue", text: "Resolved security vulnerability #12 in audit-engine", time: "1d ago" },
  { type: "merge", text: "Merged 'feat-zkevm-support' into production", time: "3d ago" }
];

export const GithubIntelligence = () => {
  const [loading, setLoading] = useState(true);
  const [hoveredDay, setHoveredDay] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Generate heatmap data (52 weeks x 7 days)
  const heatmapData = Array.from({ length: 52 * 7 }, (_, i) => ({
    val: Math.floor(Math.random() * 5),
    date: new Date(Date.now() - (364 - i) * 24 * 60 * 60 * 1000).toDateString()
  }));

  const getHeatmapColor = (val: number) => {
    switch (val) {
      case 0: return "bg-muted/10";
      case 1: return "bg-primary/20";
      case 2: return "bg-primary/40";
      case 3: return "bg-primary/70";
      case 4: return "bg-primary font-bold";
      default: return "bg-muted/10";
    }
  };

  if (loading) {
    return (
      <section className="py-24 px-6 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4">
            <Terminal className="w-12 h-12 text-primary animate-pulse" />
            <div className="text-sm font-mono tracking-[0.4em] uppercase text-primary">Establishing Connection...</div>
            <div className="w-48 h-1 bg-muted rounded-full overflow-hidden">
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="w-1/2 h-full bg-primary"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="github-intel" className="py-24 px-6 bg-background relative overflow-hidden border-t border-border">
      {/* Grid Background Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-primary">
              <Github className="w-5 h-5" />
              <span className="text-xs font-mono tracking-[0.3em] uppercase font-bold">Protocol Dashboard // Alpha-01</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">GitHub Intelligence</h2>
            <p className="text-muted-foreground max-w-xl font-mono text-xs uppercase tracking-wider">
              Real-time synchronization with primary dev node // adino-remote-01
            </p>
          </div>
          <div className="flex gap-4">
            <div className="px-4 py-2 border border-border bg-card rounded-xl flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <div className="text-[10px] font-mono leading-none">
                <div className="text-muted-foreground uppercase mb-1">Status</div>
                <div className="font-bold">LIVE_FEED</div>
              </div>
            </div>
          </div>
        </header>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Main Stats Column */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Heatmap Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-6 relative group overflow-hidden"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 font-mono text-xs uppercase font-bold text-muted-foreground">
                  <Activity className="w-4 h-4" /> Annual Contribution Matrix
                </div>
                <div className="text-[10px] font-mono text-primary/60 italic">Last 365 Days</div>
              </div>
              
              <div className="relative pt-2">
                <div className="grid grid-flow-col grid-rows-7 gap-1 h-32 overflow-x-auto pb-4 custom-scrollbar">
                  {heatmapData.map((day, i) => (
                    <motion.div
                      key={i}
                      onMouseEnter={() => setHoveredDay(day.date)}
                      onMouseLeave={() => setHoveredDay(null)}
                      className={`w-3 h-3 md:w-3.5 md:h-3.5 rounded-[2px] transition-all cursor-crosshair ${getHeatmapColor(day.val)} hover:ring-1 hover:ring-primary`}
                    />
                  ))}
                </div>
                {/* Tooltip Overlay */}
                <AnimatePresence>
                  {hoveredDay && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute top-0 right-0 px-3 py-1 bg-primary text-black text-[10px] font-mono font-bold rounded shadow-xl pointer-events-none"
                    >
                      {hoveredDay}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="flex items-center justify-between mt-4 border-t border-border/50 pt-4">
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-muted-foreground">
                  <span>Less</span>
                  <div className="w-2 h-2 rounded-sm bg-muted/20" />
                  <div className="w-2 h-2 rounded-sm bg-primary/30" />
                  <div className="w-2 h-2 rounded-sm bg-primary/60" />
                  <div className="w-2 h-2 rounded-sm bg-primary" />
                  <span>More</span>
                </div>
                <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                  Total Commits: <span className="text-foreground font-bold">2,143</span>
                </div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Streak Counter */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl p-6 flex flex-col justify-between"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Flame className="w-5 h-5 text-orange-500" />
                  <span className="text-xs font-mono uppercase font-bold text-muted-foreground">Coding Streak</span>
                </div>
                <div className="space-y-1">
                  <div className="text-4xl font-black font-mono tracking-tighter">42</div>
                  <div className="text-[10px] uppercase font-mono tracking-widest text-muted-foreground">Current Days</div>
                </div>
                <div className="mt-4 pt-4 border-t border-border/50 flex justify-between items-center text-[10px] font-mono">
                  <span className="text-muted-foreground">MAX_RECORD</span>
                  <span className="font-bold">89 DAYS</span>
                </div>
              </motion.div>

              {/* Repo Stats */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl p-6 flex flex-col justify-between lg:col-span-2"
              >
                <div className="flex items-center gap-2 mb-4">
                  <GitBranch className="w-5 h-5 text-primary" />
                  <span className="text-xs font-mono uppercase font-bold text-muted-foreground">Repository Insights</span>
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-1">
                    <div className="text-3xl font-black font-mono tracking-tighter">24</div>
                    <div className="text-[10px] uppercase font-mono tracking-widest text-muted-foreground">Active Repos</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-black font-mono tracking-tighter">1.4k</div>
                    <div className="text-[10px] uppercase font-mono tracking-widest text-muted-foreground">Total Stars</div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border/50 flex justify-between items-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5].map(i => (
                      <div key={i} className="w-6 h-6 rounded-full border-2 border-card bg-muted flex items-center justify-center text-[8px] font-bold">
                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      </div>
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground uppercase">Global Contributor Rank: Top 2%</span>
                </div>
              </motion.div>
            </div>

            {/* Pinned Projects */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase font-bold text-muted-foreground px-2">
                <Terminal className="w-3 h-3" /> Pinned Intelligence
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {pinnedRepos.map((repo, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="group bg-card/50 border border-border rounded-xl p-5 hover:border-primary transition-colors cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="font-mono text-xs font-bold truncate group-hover:text-primary transition-colors">
                        {repo.name}
                      </div>
                      <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-[10px] text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                      {repo.desc}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-3 border-t border-border/30">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1 text-[8px] font-mono">
                          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: repo.langColor }} />
                          {repo.lang}
                        </div>
                        <div className="flex items-center gap-1 text-[8px] font-mono text-muted-foreground">
                          <Star className="w-2.5 h-2.5" /> {repo.stars}
                        </div>
                      </div>
                      <GitCommit className="w-3 h-3 text-muted-foreground" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Side Panels Column */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Language Distribution */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-6 font-mono text-xs uppercase font-bold text-muted-foreground">
                <Code2 className="w-4 h-4" /> Language Stack
              </div>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={languageData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {languageData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                      ))}
                    </Pie>
                    <ReChartsTooltip 
                      contentStyle={{ 
                        backgroundColor: '#000', 
                        borderColor: '#333', 
                        fontSize: '10px',
                        fontFamily: 'monospace' 
                      }} 
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-2 mt-4">
                {languageData.map((lang, i) => (
                  <div key={i} className="flex items-center justify-between text-[10px] font-mono">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: lang.color }} />
                      <span className="text-muted-foreground">{lang.name}</span>
                    </div>
                    <span className="font-bold">{lang.value}%</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Activity Feed */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-6 font-mono text-xs uppercase font-bold text-muted-foreground">
                <Cpu className="w-4 h-4" /> Remote Activity Log
              </div>
              <div className="space-y-4">
                {activityTimeline.map((item, i) => (
                  <div key={i} className="relative pl-6 pb-4 border-l border-border last:pb-0">
                    <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />
                    <div className="text-[10px] font-mono text-muted-foreground mb-1 flex justify-between">
                      <span className="uppercase">{item.type}</span>
                      <span>{item.time}</span>
                    </div>
                    <div className="text-xs font-mono leading-relaxed group cursor-pointer hover:text-primary flex items-center gap-2">
                      {item.text}
                      <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-6 text-[10px] font-mono uppercase h-10 rounded-xl group">
                Access Full Logs <Terminal className="w-3 h-3 ml-2 group-hover:animate-pulse" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
