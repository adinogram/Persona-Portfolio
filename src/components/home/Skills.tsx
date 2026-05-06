import { motion } from "motion/react";
import { 
  Code2, 
  Database, 
  Layout, 
  ShieldCheck, 
  Cpu, 
  Layers 
} from "lucide-react";

const skillCategories = [
  {
    title: "Full Stack",
    icon: <Code2 className="w-6 h-6" />,
    skills: ["React", "Next.js", "Node.js", "TypeScript", "Python", "Go"],
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Blockchain",
    icon: <ShieldCheck className="w-6 h-6" />,
    skills: ["Solidity", "Ether.js", "Hardhat", "Smart Contracts", "Web3.js", "IPFS"],
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Database",
    icon: <Database className="w-6 h-6" />,
    skills: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "DynamoDB"],
    color: "from-amber-500/20 to-orange-500/20"
  },
  {
    title: "Infrastructure",
    icon: <Cpu className="w-6 h-6" />,
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    color: "from-emerald-500/20 to-teal-500/20"
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Arsenal</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive suite of tools and technologies I've mastered to build production-grade software and decentralized systems.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-2xl border border-border bg-gradient-to-br ${category.color} backdrop-blur-sm group`}
            >
              <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center mb-6 border border-border group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="text-sm text-muted-foreground flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
