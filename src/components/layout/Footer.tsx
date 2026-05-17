import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-1 group">
              <div className="font-mono font-black text-3xl tracking-tighter flex items-center gap-0.5">
                <span className="text-primary">A</span>
                <span>D</span>
                <span className="text-primary/80">I</span>
                <span>N</span>
                <span className="text-primary/60">O</span>
              </div>
            </div>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Premium engineering solutions. Specializing in Web3, Cloud Architecture, and Crafting Fluid Digital Interfaces.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Github className="w-5 h-5" />, href: "#" },
                { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/oluwatosin-oloyerinde-644736240" },
                { icon: <Twitter className="w-5 h-5" />, href: "https://x.com/adinogram" },
                { icon: <Mail className="w-5 h-5" />, href: "mailto:adinogram1@gmail.com" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all bounce-subtle"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-mono uppercase tracking-[0.2em] font-bold text-primary">Sitemap</h4>
            <ul className="space-y-4">
              {["Profile", "Work", "Capabilities", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
                  >
                    {item}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-mono uppercase tracking-[0.2em] font-bold text-primary">Status</h4>
            <div className="p-6 rounded-2xl bg-muted/50 border border-border/50">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-medium">Available for hire</span>
              </div>
              <p className="text-xs text-muted-foreground mb-4">Currently accepting new projects for Q3 2026.</p>
              <a href="#contact">
                <Button variant="outline" size="sm" className="w-full text-xs rounded-full">
                  Schedule Call
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs text-muted-foreground font-mono">
            © {currentYear} — BUILT WITH PASSION IN LAGOS, NG.
          </div>
          <div className="flex gap-8 text-xs font-mono uppercase tracking-widest text-muted-foreground/60">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
