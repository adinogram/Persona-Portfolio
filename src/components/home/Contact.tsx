import { motion } from "motion/react";
import { Mail, MessageSquare, Send, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">Let's build something extraordinary.</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Whether you have a complex engineering challenge, a decentralized protocol idea, or just want to say hi, my inbox is always open.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest opacity-50">Email</div>
                  <div className="text-lg font-medium">adinogram1@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MessageSquare className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest opacity-50">Discord</div>
                  <div className="text-lg font-medium">adinogramm</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              {[
                { icon: <Github />, href: "#" },
                { icon: <Linkedin />, href: "https://www.linkedin.com/in/oluwatosin-oloyerinde-644736240" },
                { icon: <Twitter />, href: "https://x.com/adinogram" }
              ].map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noreferrer">
                  <Button size="icon" variant="outline" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                    {social.icon}
                  </Button>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card border border-border p-8 rounded-3xl shadow-xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest opacity-50 ml-1">Name</label>
                  <Input placeholder="John Doe" className="bg-muted/50 border-border focus:ring-primary/20" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest opacity-50 ml-1">Email</label>
                  <Input placeholder="john@example.com" type="email" className="bg-muted/50 border-border focus:ring-primary/20" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest opacity-50 ml-1">Subject</label>
                <Input placeholder="Project Inquiry" className="bg-muted/50 border-border focus:ring-primary/20" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest opacity-50 ml-1">Message</label>
                <Textarea 
                  placeholder="Hey, I'd love to collaborate on..." 
                  className="bg-muted/50 border-border focus:ring-primary/20 min-h-[150px] resize-none" 
                />
              </div>
              <Button className="w-full h-12 rounded-xl text-lg font-medium flex gap-2 group">
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
