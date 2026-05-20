import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState, useRef } from "react";
import { Shield, Zap, Globe, ArrowRight, Download, Briefcase, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const [statementIndex, setStatementIndex] = useState(0);
  const statements = [
    "Building scalable products.",
    "Engineering Web3 systems.",
    "Learning relentlessly.",
    "Creating global impact."
  ];

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatementIndex((prev) => (prev + 1) % statements.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let mouse = { x: 0, y: 0 };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas!.width) this.x = 0;
        else if (this.x < 0) this.x = canvas!.width;
        if (this.y > canvas!.height) this.y = 0;
        else if (this.y < 0) this.y = canvas!.height;

        // Mouse interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 100) {
          this.x -= dx / 15;
          this.y -= dy / 15;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = "rgba(176, 133, 255, 0.3)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      const numberOfParticles = (canvas.width * canvas.height) / 15000;
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    handleResize();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background"
    >
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono tracking-widest uppercase mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for new projects
          </div>

          <div className="space-y-4">
            <h1 
              className="text-7xl md:text-9xl font-black tracking-tighter leading-none"
            >
              <span className="text-foreground text-primary italic">JOSEPH.</span>
            </h1>
            
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground/90">
                Oluwatosin Joseph
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground font-light max-w-xl">
                Full Stack Engineer | Blockchain Developer | <span className="text-primary font-medium">Future Venture Builder</span>
              </p>
            </div>
          </div>

          <div className="h-8 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={statementIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl font-mono text-primary/80"
              >
                ❯ {statements[statementIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#projects">
              <Button size="lg" className="rounded-full px-8 gap-2 bg-primary text-black hover:bg-primary/90 shadow-xl shadow-primary/20">
                View Projects <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <Button size="lg" variant="outline" className="rounded-full px-8 gap-2 border-border/50 hover:bg-muted" asChild>
              <a href="/resume.txt" download="Oloyerinde_Oluwatosin_Joseph_Resume.txt">
                <Download className="w-4 h-4" /> Download Resume
              </a>
            </Button>
            <div className="flex w-full sm:w-auto gap-2">
              <a href="#contact" className="flex-1 sm:flex-initial">
                <Button variant="ghost" className="w-full rounded-full border border-border/20 px-6 font-medium">
                  Hire Me
                </Button>
              </a>
              <Button variant="ghost" className="flex-1 sm:flex-initial rounded-full border border-border/20 px-6 font-medium">
                Let's Build
              </Button>
            </div>
          </div>

          {/* Trust Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-border/50">
            {[
              { icon: <Briefcase className="w-4 h-4 text-primary" />, label: "Since 2021", sub: "Dev Journey" },
              { icon: <Zap className="w-4 h-4 text-primary" />, label: "Polyglot", sub: "Tech Stacks" },
              { icon: <Shield className="w-4 h-4 text-primary" />, label: "Web3/FullStack", sub: "Deep Focus" },
              { icon: <Globe className="w-4 h-4 text-primary" />, label: "Global", sub: "Remote Work" }
            ].map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="flex items-center gap-2 text-sm font-bold">
                  {stat.icon} {stat.label}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{stat.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Content - Cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          {/* Mission Card */}
          <div className="relative z-10 p-8 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-3xl shadow-2xl space-y-6 max-w-md ml-auto">
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs font-mono uppercase tracking-widest text-primary font-bold">Current Mission</div>
              <Award className="w-5 h-5 text-primary opacity-50" />
            </div>
            <p className="text-2xl font-light leading-snug text-white">
              Currently building skills in <span className="font-bold text-primary">Full Stack + Blockchain Engineering</span> while creating products with global impact.
            </p>
            <div className="space-y-4 pt-4 border-t border-white/5">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-muted-foreground">Focus</span>
                <span className="text-white">Product Development</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 2, delay: 1 }}
                  className="h-full bg-primary"
                />
              </div>
            </div>
          </div>

          {/* Floating Element */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-12 -right-12 w-48 h-48 bg-primary/10 rounded-full blur-[100px] -z-10"
          />
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10"
          />
        </motion.div>
      </div>

      {/* Decorative Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background pointer-events-none" />
    </section>
  );
};

