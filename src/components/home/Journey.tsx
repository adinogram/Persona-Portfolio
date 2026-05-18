import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Milestone, 
  Code2, 
  Terminal, 
  Cpu, 
  Rocket, 
  Lightbulb, 
  ChevronDown, 
  History,
  HardHat
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface JourneyMilestone {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  details: string;
  icon: React.ReactNode;
  color: string;
  tags: string[];
}

const journeyData: JourneyMilestone[] = [
  {
    id: "student",
    year: "2018 - 2021",
    title: "Building Technology",
    subtitle: "Undergraduate Studies",
    details: "I started my academic journey studying Building Technology. This period was crucial for developing a structural mindset and understanding how complex systems are designed and constructed in the physical world.",
    icon: <HardHat className="w-5 h-5" />,
    color: "#3B82F6",
    tags: ["Systems Design", "Structural Thinking", "Engineering Ethics"]
  },
  {
    id: "selftaught",
    year: "2021 - 2022",
    title: "The Self-Taught Shift",
    subtitle: "Breaking into Code",
    details: "I discovered a passion for bits over bricks. I spent my nights mastering HTML, CSS, and basic JavaScript, learning the magic of building things from a blank text editor.",
    icon: <Code2 className="w-5 h-5" />,
    color: "#F59E0B",
    tags: ["JavaScript", "Problem Solving", "Web Fundamentals"]
  },
  {
    id: "fullstack",
    year: "2022 - 2023",
    title: "Full Stack Mastery",
    subtitle: "Building the Modern Web",
    details: "I dived deep into the MERN stack and modern frameworks. I learned how to manage databases, build robust APIs, and create fluid user interfaces that provide real value.",
    icon: <Terminal className="w-5 h-5" />,
    color: "#10B981",
    tags: ["React", "Node.js", "Architecture"]
  },
  {
    id: "blockchain",
    year: "2023 - 2024",
    title: "Blockchain Frontier",
    subtitle: "Smart Contract Engineering",
    details: "The decentralization bug bit hard. I began exploring Solidity, EVM, and the Ethereum ecosystem, learning how to write secure and immutable code for the future of finance.",
    icon: <Cpu className="w-5 h-5" />,
    color: "#8B5CF6",
    tags: ["Solidity", "EVM", "Smart Contracts"]
  },
  {
    id: "current",
    year: "2024 - Present",
    title: "Portfolio & Growth",
    subtitle: "Scaling Skills Globally",
    details: "Currently focusing on building high-performance products and contributing to the open-source community. I'm actively seeking global opportunities to apply my unique blend of building and blockchain skills.",
    icon: <Rocket className="w-5 h-5" />,
    color: "#EF4444",
    tags: ["Open Source", "Product Engineering", "Collaboration"]
  },
  {
    id: "future",
    year: "The Future",
    title: "Future Founder",
    subtitle: "Building Companies",
    details: "My ultimate mission is to build and scale technology startups that create massive global impact. I'm not just an engineer; I'm a venture builder in the making.",
    icon: <Lightbulb className="w-5 h-5" />,
    color: "#EC4899",
    tags: ["Entrepreneurship", "Venture Building", "Scale"]
  }
];

export const Journey = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="journey" className="py-24 px-6 bg-background relative overflow-hidden border-t border-border">
      {/* Decorative vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent -translate-x-1/2 hidden md:block" />

      <div className="max-w-4xl mx-auto relative z-10">
        <header className="text-center mb-20 space-y-4">
          <div className="flex items-center justify-center gap-2 text-primary">
            <History className="w-5 h-5" />
            <span className="text-xs font-mono tracking-[0.4em] uppercase font-bold">Chronology // Pathway-01</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">My Journey</h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-mono text-xs uppercase tracking-wider leading-relaxed">
            From structures in the physical world to engineering decentralization in the digital realm.
          </p>
        </header>

        <div className="space-y-12 relative">
          {journeyData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`relative flex flex-col items-center md:items-start ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Connector Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-background bg-primary z-20 hidden md:block" />

              {/* Year Rail (Oversized Typography) */}
              <div className={`w-full md:w-1/2 px-8 flex justify-center ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                <div className="text-5xl md:text-7xl font-black tracking-tighter text-muted-foreground/10 select-none font-mono">
                  {item.year.split(' ')[0]}
                </div>
              </div>

              {/* Card Container */}
              <div className="w-full md:w-1/2 px-0 md:px-8 mt-4 md:mt-0">
                <motion.div 
                  layout
                  onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                  className={`group relative bg-card border border-border p-6 rounded-3xl transition-all cursor-pointer hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 ${
                    expandedId === item.id ? "ring-2 ring-primary/20" : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div 
                      className="p-3 rounded-2xl shrink-0"
                      style={{ backgroundColor: `${item.color}15`, color: item.color }}
                    >
                      {item.icon}
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-widest">{item.year}</span>
                        <motion.div
                          animate={{ rotate: expandedId === item.id ? 180 : 0 }}
                          className="text-muted-foreground group-hover:text-primary transition-colors"
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      </div>
                      <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-xs text-muted-foreground font-medium">{item.subtitle}</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedId === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 space-y-6">
                          <p className="text-sm text-muted-foreground leading-relaxed border-t border-border pt-6">
                            {item.details}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map(tag => (
                              <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-none text-[10px] font-mono px-3 py-0.5 rounded-full">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Milestone */}
        <div className="mt-20 flex flex-col items-center gap-4 text-center">
          <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent" />
          <div className="text-[10px] font-mono uppercase tracking-[0.5em] text-muted-foreground italic animate-pulse">
            To be continued...
          </div>
        </div>
      </div>
    </section>
  );
};
