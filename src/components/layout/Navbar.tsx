import { motion, AnimatePresence } from "motion/react";
import { User, Globe, Briefcase, Monitor, Sun, Moon, Zap, Activity, Milestone, Compass, Construction } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const Navbar = ({ isDark, toggleTheme }: NavbarProps) => {
  const navItems = [
    { icon: <User className="w-5 h-5" />, label: "Profile", href: "#about" },
    { icon: <Milestone className="w-5 h-5" />, label: "Journey", href: "#journey" },
    { icon: <Briefcase className="w-5 h-5" />, label: "Work", href: "#experience" },
    { icon: <Zap className="w-5 h-5" />, label: "Services", href: "#services" },
    { icon: <Globe className="w-5 h-5" />, label: "Skills", href: "#skills" },
    { icon: <Monitor className="w-5 h-5" />, label: "Dev", href: "#projects" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 p-2 px-6 rounded-full bg-background/80 backdrop-blur-xl border border-border shadow-2xl"
      id="main-nav"
    >
      <a href="#hero" className="flex items-center gap-1 group">
        <div className="font-mono font-black text-xl tracking-tighter flex items-center gap-0.5">
          <span className="text-primary font-bold">J</span>
          <span className="group-hover:translate-x-0.5 transition-transform">O</span>
          <span className="group-hover:translate-x-1 transition-transform text-primary/80">S</span>
          <span className="group-hover:translate-x-1.5 transition-transform">E</span>
          <span className="group-hover:translate-x-2 transition-transform text-primary/60">P</span>
          <span className="group-hover:translate-x-2.5 transition-transform">H</span>
        </div>
      </a>
      <div className="w-px h-6 bg-border mx-2" />
      <div className="flex items-center gap-1">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            title={item.label}
          >
            {item.icon}
          </a>
        ))}
      </div>
      <div className="w-px h-6 bg-border mx-1" />
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="rounded-full w-9 h-9 text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
        title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={isDark ? "dark" : "light"}
            initial={{ y: 20, opacity: 0, rotate: -40 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -20, opacity: 0, rotate: 40 }}
            transition={{ duration: 0.2 }}
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </motion.div>
        </AnimatePresence>
      </Button>
      <div className="w-px h-6 bg-border mx-1" />
      <a href="#contact">
        <Button 
          variant="default" 
          className="rounded-full px-6 font-medium bg-gradient-to-r from-[#FF98E2] to-[#B085FF] hover:from-[#FF98E2] hover:to-[#FF98E2] transition-all border-none text-black cursor-pointer hidden md:flex"
        >
          Hire me
        </Button>
      </a>
    </motion.nav>
  );
};
