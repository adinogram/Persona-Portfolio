import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Engineering the future of Web3 and scalable apps.
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            My name is <span className="text-foreground font-medium">Oluwatosin Joseph Oloyerinde</span>. 
            I'm a full-stack and blockchain developer dedicated to creating impactful digital experiences. 
            My journey is driven by a relentless pursuit of technical excellence and a commitment to building products that matter.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Innovator", "Full Stack", "Blockchain Expert", "Crypto Enthusiast"].map((tag) => (
              <Badge key={tag} variant="secondary" className="px-4 py-1 text-sm rounded-full">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-12">
            {[
              { label: "Experience", value: "5+ Yrs" },
              { label: "Projects", value: "24+" },
              { label: "Commits", value: "2.1k" },
              { label: "Contracts", value: "112" }
            ].map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="text-3xl font-bold font-mono tracking-tighter text-primary">{stat.value}</div>
                <div className="text-[10px] uppercase font-mono tracking-[0.2em] text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-2xl bg-muted/50 overflow-hidden border border-border group">
            <img 
              src="https://picsum.photos/seed/developer/800/800" 
              alt="Developer Profile"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};
