import { motion } from "motion/react";
import { Code2, ShieldCheck, Zap, Globe2, Cpu, BarChart3 } from "lucide-react";

const services = [
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Smart Contract Auditing",
    description: "In-depth security analysis and vulnerability assessment of Solidity and EVM-compatible contracts to ensure protocol safety.",
    tags: ["Security", "Vulnerability Research", "Audits"]
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "DApp Development",
    description: "End-to-end development of decentralized applications with seamless wallet integration and intuitive user interfaces.",
    tags: ["React/Next.js", "Ethers.js", "Wagmi"]
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Scalable Backend Systems",
    description: "Architecting high-performance microservices and APIs capable of handling millions of requests with sub-second latency.",
    tags: ["Node.js", "Go", "PostgreSQL", "Redis"]
  },
  {
    icon: <Globe2 className="w-8 h-8" />,
    title: "Full-Stack Architecture",
    description: "Designing comprehensive software ecosystems that bridge the gap between complex backend logic and polished frontend UI.",
    tags: ["System Design", "Cloud Infrastructure", "DevOps"]
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Protocol Engineering",
    description: "Developing custom DeFi or NFT protocols from scratch, including tokenomics design and liquidity mechanisms.",
    tags: ["Layer 2s", "Bridges", "Governance"]
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Performance Optimization",
    description: "Auditing existing codebases to identify bottlenecks, reducing gas costs and improving application load times.",
    tags: ["React Profiling", "Gas Efficiency", "CI/CD"]
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4">Capabilities</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Expert Solutions</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I combine technical excellence with strategic thinking to build software that drives real-world value.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all group"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 bg-muted rounded border border-border/50">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
