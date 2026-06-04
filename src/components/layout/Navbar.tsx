import { motion, AnimatePresence } from "motion/react";
import { User, Globe, Briefcase, Monitor, Sun, Moon, Zap, Activity, Milestone, Compass, Construction } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const Navbar = ({ isDark, toggleTheme }: NavbarProps) => {
  const navItems = [
    { icon: <User className="w-4 h-4 md:w-5 md:h-5" />, label: "Profile", href: "#hero" },
    { icon: <Milestone className="w-4 h-4 md:w-5 md:h-5" />, label: "Journey", href: "#journey" },
    { icon: <Briefcase className="w-4 h-4 md:w-5 md:h-5" />, label: "Work", href: "#experience" },
    { icon: <Zap className="w-4 h-4 md:w-5 md:h-5" />, label: "Services", href: "#services" },
    { icon: <Globe className="w-4 h-4 md:w-5 md:h-5" />, label: "Skills", href: "#skills" },
    { icon: <Monitor className="w-4 h-4 md:w-5 md:h-5" />, label: "Dev", href: "#projects" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1.5 md:gap-4 p-1.5 md:p-2 px-3 md:px-6 rounded-full bg-background/80 backdrop-blur-xl border border-border shadow-2xl max-w-[95vw]"
      id="main-nav"
    >
      <a href="#hero" className="flex items-center gap-1 group">
        <div className="font-mono font-black text-sm md:text-xl tracking-tighter flex items-center">
          <span className="text-primary font-bold">J</span>
          <span className="hidden sm:inline">OSEPH</span>
        </div>
      </a>
      <div className="w-px h-5 md:h-6 bg-border mx-1 md:mx-2" />
      <div className="flex items-center gap-0.5 md:gap-1">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="p-1.5 md:p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground flex items-center justify-center"
            title={item.label}
          >
            {item.icon}
          </a>
        ))}
      </div>
      <div className="w-px h-5 md:h-6 bg-border mx-1" />
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="rounded-full w-8 h-8 md:w-9 md:h-9 text-muted-foreground hover:text-foreground hover:bg-muted transition-all flex items-center justify-center"
        title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={isDark ? "dark" : "light"}
            initial={{ y: 20, opacity: 0, rotate: -40 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -20, opacity: 0, rotate: 40 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center"
          >
            {isDark ? <Sun className="w-4 h-4 md:w-5 md:h-5" /> : <Moon className="w-4 h-4 md:w-5 md:h-5" />}
          </motion.div>
        </AnimatePresence>
      </Button>
      <div className="hidden md:block w-px h-6 bg-border mx-1" />
      <a href="#contact" className="hidden md:block">
        <Button 
          variant="default" 
          className="rounded-full px-6 font-medium bg-gradient-to-r from-[#FF98E2] to-[#B085FF] hover:from-[#FF98E2] hover:to-[#FF98E2] transition-all border-none text-black cursor-pointer"
        >
          Hire me
        </Button>
      </a>
    </motion.nav>
  );
};
