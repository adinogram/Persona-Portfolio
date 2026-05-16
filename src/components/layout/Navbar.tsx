import { motion, AnimatePresence } from "motion/react";
import { User, Globe, Briefcase, Monitor, Sun, Moon, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const Navbar = ({ isDark, toggleTheme }: NavbarProps) => {
  const navItems = [
    { icon: <User className="w-5 h-5" />, label: "Profile", href: "#about" },
    { icon: <Briefcase className="w-5 h-5" />, label: "Work", href: "#experience" },
    { icon: <Zap className="w-5 h-5" />, label: "Services", href: "#services" },
    { icon: <Globe className="w-5 h-5" />, label: "Skills", href: "#skills" },
    { icon: <Monitor className="w-5 h-5" />, label: "Dev", href: "#projects" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 p-2 px-4 rounded-full bg-background/80 backdrop-blur-md border border-border shadow-2xl"
      id="main-nav"
    >
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
