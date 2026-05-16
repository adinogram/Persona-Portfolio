import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Oluwatosin delivered our smart contracts ahead of schedule with zero critical vulnerabilities in our final audit. His attention to security is world-class.",
    author: "Elena Sorokin",
    role: "CTO, EtherVentures",
    avatar: "https://i.pravatar.cc/150?u=elena"
  },
  {
    quote: "A rare breed of engineer who understands both the deep technical aspects of blockchain and the nuances of high-end user experience.",
    author: "Marcus Chen",
    role: "Founder, DeFi Pulse",
    avatar: "https://i.pravatar.cc/150?u=marcus"
  },
  {
    quote: "His ability to optimize our cloud infrastructure saved us thousands in monthly overhead while making our dashboard 3x faster.",
    author: "Sarah Jenkins",
    role: "Product Lead, ScaleUp",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4">Reputation</div>
          <h2 className="text-4xl font-bold tracking-tight">Voices of Trust</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-3xl border border-border bg-gradient-to-b from-card to-muted/20"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-primary opacity-10" />
              <p className="text-lg italic text-foreground/80 mb-8 relative z-10">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={t.avatar} 
                  alt={t.author} 
                  className="w-12 h-12 rounded-full border-2 border-primary/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-bold">{t.author}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
