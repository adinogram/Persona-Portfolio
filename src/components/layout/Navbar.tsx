import { motion } from "motion/react";
import { User, Globe, Briefcase, Heart, Monitor, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const navItems = [
    { icon: <User className="w-5 h-5" />, label: "Profile", href: "#about" },
    { icon: <Globe className="w-5 h-5" />, label: "Skills", href: "#skills" },
    { icon: <Briefcase className="w-5 h-5" />, label: "Projects", href: "#projects" },
    { icon: <Heart className="w-5 h-5" />, label: "Interests", href: "#interests" },
    { icon: <Monitor className="w-5 h-5" />, label: "Terminal", href: "#hero" },
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
      <div className="w-px h-6 bg-border mx-2" />
      <Button 
        variant="default" 
        className="rounded-full px-6 font-medium bg-gradient-to-r from-[#FF98E2] to-[#B085FF] hover:opacity-90 border-none text-black"
        onClick={() => window.location.hash = "#contact"}
      >
        Hire me
      </Button>
    </motion.nav>
  );
};
