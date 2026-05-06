import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "DeFi Yield Aggregator",
    description: "An automated yield farming platform that optimizes returns across multiple liquidity pools using smart contract strategies.",
    image: "https://picsum.photos/seed/defi/800/600",
    tags: ["Solidity", "TypeScript", "React", "Ether.js"],
    github: "#",
    live: "#"
  },
  {
    title: "Enterprise Resource Planner",
    description: "A full-scale cloud-native ERP system designed for SMEs, featuring inventory management, CRM, and real-time analytics.",
    image: "https://picsum.photos/seed/erp/800/600",
    tags: ["Node.js", "PostgreSQL", "React", "Docker"],
    github: "#",
    live: "#"
  },
  {
    title: "NFT Marketplace Engine",
    description: "A white-label solution for creators to mint, trade, and auction high-quality digital assets with low gas fees.",
    image: "https://picsum.photos/seed/nft/800/600",
    tags: ["Hardhat", "Next.js", "Tailwind", "IPFS"],
    github: "#",
    live: "#"
  }
];

export const Projects = () => {
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

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <Button size="icon" variant="secondary" className="rounded-full shadow-lg">
                    <Github className="w-5 h-5" />
                  </Button>
                  <Button size="icon" variant="secondary" className="rounded-full shadow-lg">
                    <ExternalLink className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="text-[10px] font-mono px-2 py-0 border-primary/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                  {project.description}
                </p>
                <div className="mt-auto pt-4 border-t border-border/50 flex justify-between items-center">
                  <span className="text-xs font-mono opacity-50 uppercase tracking-widest">Case Study</span>
                  <ExternalLink className="w-4 h-4 text-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
