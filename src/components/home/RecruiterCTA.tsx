import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Briefcase, 
  FileText, 
  Mail, 
  Linkedin, 
  Github, 
  PhoneCall, 
  X,
  MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const RecruiterCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true);
      }
    }, 30000); // 30 seconds

    return () => clearTimeout(timer);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0.9 }}
          className="fixed bottom-8 right-8 z-[100] max-w-sm w-full"
        >
          <div className="bg-card border border-primary/20 p-6 rounded-[2rem] shadow-2xl shadow-primary/10 backdrop-blur-xl relative overflow-hidden group">
            {/* Subtle glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-[40px] group-hover:bg-primary/10 transition-colors" />

            <button 
              onClick={handleDismiss}
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-white/5 transition-colors text-muted-foreground"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold tracking-tight">Hire Tosin?</h4>
                  <p className="text-xs text-muted-foreground font-mono uppercase tracking-widest">Recruiter Direct Access</p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Interested in scaling your product with a full-stack engineer experienced in blockchain and high-growth ventures?
              </p>

              <div className="grid grid-cols-2 gap-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="rounded-xl border-border hover:border-primary gap-2 h-10 text-xs font-mono uppercase tracking-widest"
                  onClick={() => window.open('https://calendly.com/', '_blank')}
                >
                  <PhoneCall className="w-3 h-3" /> Book Call
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="rounded-xl border-border hover:border-primary gap-2 h-10 text-xs font-mono uppercase tracking-widest"
                  onClick={() => window.open('/resume.pdf', '_blank')}
                >
                  <FileText className="w-3 h-3" /> Resume
                </Button>
              </div>

              <div className="flex items-center justify-center gap-6 pt-2 border-t border-border/50">
                <a href="mailto:d.gramjoseph@gmail.com" className="text-muted-foreground hover:text-primary transition-colors"><Mail className="w-4 h-4" /></a>
                <a href="https://linkedin.com/in/adinogramtosin" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="w-4 h-4" /></a>
                <a href="https://github.com/adinogram" className="text-muted-foreground hover:text-primary transition-colors"><Github className="w-4 h-4" /></a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
