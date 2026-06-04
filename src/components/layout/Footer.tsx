import React, { useState } from "react";
import { Github, Linkedin, Twitter, Mail, ArrowUpRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [activeModal, setActiveModal] = useState<"privacy" | "terms" | null>(null);

  const sitemapItems = [
    { label: "Profile", href: "#hero" },
    { label: "Work", href: "#experience" },
    { label: "Capabilities", href: "#skills" },
    { label: "Contact", href: "#contact" }
  ];

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
                { icon: <Github className="w-5 h-5" />, href: "https://github.com/adinogram" },
                { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/oluwatosin-oloyerinde-644736240" },
                { icon: <Twitter className="w-5 h-5" />, href: "https://x.com/adinogram" },
                { 
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.1 1.454 4.777 1.458 5.6 0 10.154-4.554 10.158-10.16.002-2.712-1.047-5.263-2.956-7.173C16.622 1.371 14.078.32 11.377.32c-5.6 0-10.16 4.554-10.164 10.16-.002 2.01.526 3.974 1.53 5.71l-1.005 3.68 3.774-.99zm11.23-7.53c-.307-.154-1.82-.9-2.103-1.002-.283-.103-.49-.153-.695.154-.205.307-.795 1.002-.975 1.205-.18.203-.359.227-.666.073-.307-.152-1.3-.48-2.47-1.529-.914-.814-1.53-1.82-1.71-2.126-.18-.306-.02-.471.134-.624.14-.137.307-.36.462-.538.154-.18.205-.307.307-.513.102-.205.051-.385-.026-.54-.077-.153-.694-1.67-.95-2.285-.248-.598-.503-.518-.692-.527-.18-.01-.384-.01-.589-.01-.205 0-.538.077-.82.384-.282.308-1.077 1.05-1.077 2.564 0 1.513 1.1 2.974 1.254 3.18.154.205 2.16 3.298 5.23 4.628.73.315 1.3.504 1.743.645.73.23 1.4.198 1.925.12.585-.088 1.82-.744 2.077-1.46.256-.718.256-1.334.18-1.46-.076-.127-.282-.204-.589-.359z" />
                    </svg>
                  ), 
                  href: "https://wa.me/2349037673964" 
                },
                { icon: <Mail className="w-5 h-5" />, href: "mailto:d.gramjoseph@gmail.com" }
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
              {sitemapItems.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
                  >
                    {item.label}
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
            © {currentYear} — BUILT WITH PASSION.
          </div>
          <div className="flex gap-8 text-xs font-mono uppercase tracking-widest text-muted-foreground/60">
            <button onClick={() => setActiveModal("privacy")} className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</button>
            <button onClick={() => setActiveModal("terms")} className="hover:text-primary transition-colors cursor-pointer">Terms of Service</button>
          </div>
        </div>
      </div>

      {/* Modern Interactive Legal Modals */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
            />
            {/* Modal Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-card border border-border rounded-3xl p-8 md:p-10 shadow-2xl z-10 scrollbar-thin scrollbar-thumb-primary/10"
            >
              <button 
                onClick={() => setActiveModal(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {activeModal === "privacy" ? (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-primary">Compliance & Transparency</span>
                    <h3 className="text-3xl font-bold tracking-tight">Privacy Policy</h3>
                    <p className="text-xs text-muted-foreground font-mono">Last Updated: June 2026</p>
                  </div>
                  <div className="h-px bg-border/50" />
                  
                  <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                    <p>
                      Your privacy is of paramount importance to my development practices. This Policy sets forth the terms upon which Oluwatosin Joseph Oloyerinde collects, uses, and safeguards information.
                    </p>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-foreground font-bold">1. Data Storage and Processing</h4>
                    <p>
                      I operate under an offline-first and client-centric architecture. We do not store, host, distribute, or transact your personal data or network metrics. 
                    </p>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-foreground font-bold">2. Contact & Project Inquiry Forms</h4>
                    <p>
                      Any messages, names, email credentials, or specifications dispatched using the interactive contact form on this platform are encrypted in transit and routed securely to <strong>d.gramjoseph@gmail.com</strong> purely to manage consultations, support delivery, and service collaboration.
                    </p>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-foreground font-bold">3. Local Configurations & Performance cookies</h4>
                    <p>
                      This site utilizes small local-storage objects and cookies to record configuration structures (such as dark-mode and light-mode configurations) to offer high-grade visual responsiveness.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-primary">Agreements & Responsibilities</span>
                    <h3 className="text-3xl font-bold tracking-tight">Terms of Service</h3>
                    <p className="text-xs text-muted-foreground font-mono">Last Updated: June 2026</p>
                  </div>
                  <div className="h-px bg-border/50" />
                  
                  <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                    <p>
                      Welcome to adinogram.dev. By evaluating the software prototypes, layout codes, and design modules published here, you unconditionally agree to abide by these terms.
                    </p>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-foreground font-bold">1. Intellectual Property & Code Evaluation</h4>
                    <p>
                      All client visual layouts, source configurations, motion behaviors, and original text compositions featured on this site are assets built with extreme care. You are granted temporary permission to read, review, and evaluate my professional work for potential employment or contracting. General distribution of proprietary source files requires written permission.
                    </p>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-foreground font-bold">2. Technical Disclaimer</h4>
                    <p>
                      Decentralized software integrations, Smart Contract code segments, web utilities, and demonstration pipelines are provided on an <strong>"as is"</strong> basis, strictly without direct or implied quality warranties.
                    </p>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-foreground font-bold">3. Safe Communication Behaviors</h4>
                    <p>
                      Spam transmissions, malicious bot queries, and bulk network scans directed at our forms or associated connection channels are strictly prohibited.
                    </p>
                  </div>
                </div>
              )}
              
              <div className="mt-8 pt-6 border-t border-border flex justify-end">
                <Button onClick={() => setActiveModal(null)} size="sm" className="rounded-xl px-6">
                  Acknowledge
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
};
