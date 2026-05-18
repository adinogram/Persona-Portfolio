import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, MessageSquare, Send, Github, Linkedin, Twitter, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

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
            className="bg-card border border-border p-8 rounded-3xl shadow-xl relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle2 className="w-16 h-16 text-primary mb-6 animate-bounce" />
                  <h3 className="text-2xl font-bold mb-2">Message Received!</h3>
                  <p className="text-muted-foreground">
                    Thanks for reaching out. I'll get back to you shortly.
                  </p>
                  <Button 
                    className="mt-8" 
                    variant="outline"
                    onClick={() => setIsSuccess(false)}
                  >
                    Send another message
                  </Button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6" 
                  onSubmit={handleSubmit}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-widest opacity-50 ml-1">Name</label>
                      <Input 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe" 
                        className={`bg-muted/50 border-border focus:ring-primary/20 ${errors.name ? 'border-destructive ring-destructive/20' : ''}`} 
                      />
                      {errors.name && <p className="text-xs text-destructive font-medium ml-1">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-widest opacity-50 ml-1">Email</label>
                      <Input 
                        name="email"
                        type="email" 
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com" 
                        className={`bg-muted/50 border-border focus:ring-primary/20 ${errors.email ? 'border-destructive ring-destructive/20' : ''}`} 
                      />
                      {errors.email && <p className="text-xs text-destructive font-medium ml-1">{errors.email}</p>}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest opacity-50 ml-1">Subject</label>
                    <Input 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry" 
                      className="bg-muted/50 border-border focus:ring-primary/20" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest opacity-50 ml-1">Message</label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hey, I'd love to collaborate on..." 
                      className={`bg-muted/50 border-border focus:ring-primary/20 min-h-[150px] resize-none ${errors.message ? 'border-destructive ring-destructive/20' : ''}`} 
                    />
                    {errors.message && <p className="text-xs text-destructive font-medium ml-1">{errors.message}</p>}
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full h-12 rounded-xl text-lg font-medium flex gap-2 group relative overflow-hidden"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Transmitting...
                      </span>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
