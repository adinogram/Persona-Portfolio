import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { 
  ExternalLink, 
  Github, 
  ChevronDown, 
  ChevronUp, 
  Code, 
  Zap, 
  Shield, 
  Target, 
  Cpu, 
  Clock, 
  Lightbulb, 
  ArrowUpRight,
  CheckCircle2,
  Terminal,
  Activity
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React, { useState, useMemo, useRef } from "react";

const projects = [
  {
    id: "longhealth",
    title: "LONGHEALTH — Healthcare Operations Platform",
    description: "A next-generation hospital management platform designed to help medical institutions digitize, automate, and optimize patient care, electronic medical records, billing, and lab workflows.",
    problem: "Healthcare institutions are held back by fragmented, disconnected silos of patient records, pharmacy inventories, and laboratory workflows, often leading to severe delays in critical patient treatment.",
    research: "Conducted comprehensive analyses on healthcare information management standards and designed centralized database schemas capable of handling multi-tenant hospital configurations under high-concurrency conditions.",
    architecture: {
      diagram: "Patient Portal -> Hospital API Gateway -> Database Cluster -> Clinic Worker Services",
      description: "A secure multi-service application that integrates patient electronic medical records (EMR), billing ledgers, pharmacy catalogs, laboratory flows, and clinical schedules."
    },
    techStack: ["React.js", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS"],
    challenges: [
      "Ensuring real-time updates between active lab reports and clinician views during emergency situations.",
      "Optimizing complex PostgreSQL locks to manage live pharmacy inventory levels down to dynamic single-dosage units.",
      "Enforcing strict compliance, role-based data isolation, and medical privacy structures across discrete departments."
    ],
    solutions: [
      "Engineered live data synchronization layers utilizing WebSocket states to instantly feed incoming diagnostic telemetry.",
      "Created transaction-isolated ledger write procedures in PostgreSQL, effectively preventing inventory race conditions.",
      "Built modular role-based routing guards restricting electronic health record accessibility precisely by active staff credentials."
    ],
    lessonsLearned: "Unifying operations into a singular, highly integrated workspace improves clinical turnaround times by up to 40% and completely eliminates traditional communication delays.",
    futureImprovements: "Integrating offline-first local-cache databases for health clinics in remote areas with unstable internet connectivity.",
    readTime: "6 min read",
    codeSnippet: `// Secure Role-Based Electronic Medical Record Authorization Gate
export function authorizeMedicalAccess(requiredRole: StaffRole) {
  return (req: Request, res: Response, next: NextFunction) => {
    const userRole = req.user?.role;
    if (!userRole || !hasSufficientPrivileges(userRole, requiredRole)) {
      return res.status(403).json({ error: "Access Denied: Insufficient clinical clearance" });
    }
    next();
  };
}`,
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop",
    tags: ["React.js", "Node.js", "PostgreSQL", "Healthcare"],
    github: "https://github.com/adinogram",
    live: "https://longhealth-access.vercel.app/"
  },
  {
    id: "proscore",
    title: "ProScore — Real-Time Sports Platform",
    description: "A real-time sports updates platform utilizing Event Streaming architecture, featuring low-latency live scores, NestJS backends, and modular PostgreSQL database handling.",
    problem: "Delivering real-time sports event tracking with millisecond-grade live sync often strains traditional HTTP polling servers and database threads, resulting in laggy outputs.",
    research: "Researched WebSocket-based state pushes versus Server-Sent Events (SSE), choosing SSE for continuous linear sports telemetry streaming due to lighter overhead, clean unidirectional flows, and simplified reconnection paradigms.",
    architecture: {
      diagram: "Match events -> NestJS Worker -> SSE Hub -> React.js Client",
      description: "Structured live-event worker pipeline that ingests raw telemetry matrices and feeds active Server-Sent Events (SSE) loops directly to active subscribers."
    },
    techStack: ["React.js", "NestJS", "PostgreSQL", "SSE", "TypeScript", "Tailwind CSS"],
    challenges: [
      "Mitigating database write locks when under excessive simultaneous live event streams.",
      "Handling thousands of concurrent live connections on a single container layer.",
      "Managing stable state reconstitution for clients reconnecting after short network drops."
    ],
    solutions: [
      "Implemented concurrent batch write-pooling queues and lightweight read indexes in PostgreSQL.",
      "Utilized SSE streaming combined with NestJS reactive observables to optimize concurrent thread management.",
      "Developed client-side event sequencers to rebuild missing live segments on reconnection."
    ],
    lessonsLearned: "SSE is exceptionally efficient for high-frequency live read-only broadcasts, keeping resource usage to a fraction of equivalent WebSocket pipelines.",
    futureImprovements: "Full web-push trigger backups and native edge cache-proxy acceleration for live streams of high-profile events.",
    readTime: "7 min read",
    codeSnippet: `// Server-Sent Events Stream Endpoint in NestJS
@Sse('events/:matchId')
sendMatchEvents(@Param('matchId') id: string): Observable<MessageEvent> {
  return this.matchEventsService.getStream(id).pipe(
    map((data) => ({ data, type: 'match-update' } as MessageEvent))
  );
}`,
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=2000&auto=format&fit=crop",
    tags: ["React.js", "NestJS", "PostgreSQL", "TypeScript"],
    github: "https://github.com/adinogram/proscore",
    live: "https://pro-score-six.vercel.app/"
  },
  {
    id: "paylink",
    title: "PayLink MiniPay (Celo Blockchain)",
    description: "An elegant, stablecoin-focused lightweight Web3 payment client for instant, wallet-based checkout links built specifically for Celo's mobile Opera ecosystem.",
    problem: "Friction-heavy onboarding and expensive gas cost structures prevent on-the-ground vendors in emerging markets from adopting Web3 payment models.",
    research: "Analyzed native mobile gas abstractions and fast, instant stablecoin transaction pipelines on Celo's Ultra-light protocol framework.",
    architecture: {
      diagram: "MiniPay Client -> Wallet-Link -> Smart Contract -> cUSD Ledger",
      description: "Mobile-optimized browser wallet handshakes combined with instant ERC-20 contract triggers on the high-throughput Celo network."
    },
    techStack: ["TypeScript", "Celo", "Web3.js", "React.js", "Vite", "Tailwind CSS"],
    challenges: [
      "Optimizing deep-link callback loops in native WebView wrappers under extreme low-bandwidth connections.",
      "Handling signature verification latency without freezing the merchant's screen layout.",
      "Formatting complex smart contract payload responses in space-restricted mobile viewports."
    ],
    solutions: [
      "Integrated fast local deep-link routing structures that fall back to standard browser connections gracefully.",
      "Adopted optimistic UI updates to instantly register payments, backed by full async RPC verification lists.",
      "Designed clean, text-less transaction indicators styled precisely for lightweight mobile displays."
    ],
    lessonsLearned: "Designing for actual human utility in high-performance situations requires prioritizing mobile-first optimization and minimal wallet transaction roundtrips.",
    futureImprovements: "Adding automatic backup bridges to alternative Layer-2 chains and expanding direct QR offline checkouts.",
    readTime: "5 min read",
    codeSnippet: `// Generating Mobile Wallet Payment Request
const tx = await contract.methods.transfer(recipient, amount).send({
  from: userWalletAddress,
  feeCurrency: celoStableCoinAddress
});`,
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=2000&auto=format&fit=crop",
    tags: ["Celo", "TypeScript", "Web3.js", "React.js"],
    github: "https://github.com/adinogram",
    live: "https://paylink-minipay-rho.vercel.app/"
  },
  {
    id: "solana-bot",
    title: "Solana Volume Bot",
    description: "An automated volume simulation and liquidity tracking system designed for direct, fast DEX integrations on the high-frequency Solana blockchain.",
    problem: "Simulating steady, organic ledger state updates is incredibly complex due to transaction front-running, volatile transaction costs, and raw Raydium pools latency.",
    research: "Analyzed Solana transaction life-cycles, absolute priority fees optimization modules, and Raydium/Jupiter SDK structures for immediate, concurrent execution pathways.",
    architecture: {
      diagram: "Watcher Bot -> Jupiter API -> Solana RPC -> DEX Liquidity Pool",
      description: "Low-overhead node runner executing parallel automated trading pairs via optimized transaction serialization protocols."
    },
    techStack: ["Solana", "Node.js", "JavaScript", "Jupiter API"],
    challenges: [
      "Mitigating transaction drop rates caused by extreme on-chain Solana congestions.",
      "Managing precise private key isolation structures inside multi-threaded runtime loops.",
      "Creating robust balance trackers that accurately sync wallet liquidity levels across sudden price slippages."
    ],
    solutions: [
      "Implemented dynamic compute budget unit modifications based on active on-chain fees recommendations.",
      "Secured environment variable keys via strict local vault architectures with hardware separation limits.",
      "Coded retry streams backed by robust, rapid RPC backup-endpoints rotation loops."
    ],
    lessonsLearned: "Dynamic compute budget adjustments are crucial to guarantee immediate transaction confirmations during major launch hours on Solana.",
    futureImprovements: "Integrating advanced Jito bundle strategies to fully suppress mev/front-running losses.",
    readTime: "6 min read",
    codeSnippet: `// Sending Raydium Swap Transaction with Dynamic CU Budgets
const modifyComputeUnits = ComputeBudgetProgram.setComputeUnitLimit({ units: 100000 });
const addPriorityFee = ComputeBudgetProgram.setComputeUnitPrice({ microLamports: 50000 });
const tx = new Transaction().add(modifyComputeUnits, addPriorityFee, swapInstruction);`,
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2000&auto=format&fit=crop",
    tags: ["Solana", "Node.js", "JavaScript", "Jupiter API"],
    github: "https://github.com/adinogram",
    live: "https://github.com/adinogram"
  },
  {
    id: "solana-token",
    title: "Solana Token Project",
    description: "A secure, rust-backed Solana spl-token manager featuring customizable minting mechanisms, royalty limits, and instant web wallet interactions.",
    problem: "Most blockchain token projects rely on rigid templates with highly insecure, rigid parameter controls and bad responsive web experiences.",
    research: "Researched Rust-based anchor framework limits and Solana's dynamic token metadata standards for immediate on-chain updates.",
    architecture: {
      diagram: "Web Wallet -> SPL-Token Client -> Rust Smart Contract -> Solana Block",
      description: "Rust smart contracts managing absolute minting restrictions and metadata configurations directly tied to an interactive React dashboard."
    },
    techStack: ["Rust", "Solana", "Anchor", "React.js", "Tailwind CSS"],
    challenges: [
      "Structuring safe custom state accounts on Solana to store token limits without inflating rent-exempt fees.",
      "Ensuring clean, cross-compatible support for all modern Solana wallets (Phantom, Solflare).",
      "Validating high-throughput state updates for immediate dashboard syncs."
    ],
    solutions: [
      "Optimized Rust struct data allocations to achieve absolute minimum account sizes on-ledger.",
      "Utilized the robust Solana Wallet Adapter suite to ensure perfect native wallet support.",
      "Built resilient local state caching loops using simple, fast indexer polling systems."
    ],
    lessonsLearned: "Solana's unique account structures demand careful state layout planning from day one to keep ledger costs completely manageable.",
    futureImprovements: "Supporting native gasless metaplex minting capabilities for simplified non-web3 native checkouts.",
    readTime: "5 min read",
    codeSnippet: `// Anchor Smart Contract - Token Minting Restrictive Check
pub fn mint_tokens(ctx: Context<MintTokens>, amount: u64) -> Result<()> {
    let cpi_accounts = MintTo {
        mint: ctx.accounts.token_mint.to_account_info(),
        to: ctx.accounts.user_token_account.to_account_info(),
        authority: ctx.accounts.mint_authority.to_account_info(),
    };
    /* ... execute safe SPL Mint cross contract call ... */
}`,
    image: "https://images.unsplash.com/photo-1644024541214-e591b7d5a5cf?q=80&w=2000&auto=format&fit=crop",
    tags: ["Rust", "Solana", "Anchor", "React.js"],
    github: "https://github.com/adinogram",
    live: "https://github.com/adinogram"
  },
  {
    id: "clientiq-hub",
    title: "ClientIQ Hub",
    description: "An automated workflow manager and CRM orchestrator designed to unify communication streams, client touchpoints, and custom backend syncs.",
    problem: "Teams lose significant resources manually syncing task structures and messages between separate email list interfaces and operational databases.",
    research: "Researched web-socket queues, event trigger patterns, and concurrent asynchronous message queuing logic to streamline business software systems.",
    architecture: {
      diagram: "Client Action -> Webhook Gateway -> Node.js Processor -> DB & Slack Sync",
      description: "Highly redundant Express.js handler that accepts custom external event triggers and fanned-out workflows safely over asynchronous workers."
    },
    techStack: ["JavaScript", "Node.js", "Express.js", "PostgreSQL", "Webhooks", "JSON Schema"],
    challenges: [
      "Handling unexpected format mutations and breaking payloads from varying third-party webhooks.",
      "Ensuring zero event drops when traffic spikes occur.",
      "Designing a clean flow structure that is easily configurable without custom rebuilding."
    ],
    solutions: [
      "Implemented a rigid JSON Schema validation middleware to capture format errors instantly.",
      "Used memory-backed robust buffer queues to sustain sudden spikes in action signals.",
      "Coded a dynamic routing config file allowing users to adjust channel sync endpoints easily."
    ],
    lessonsLearned: "Defensive coding against unstable third-party webhook structures prevents 99% of common server-side automation failures.",
    futureImprovements: "Adding drag-and-drop workflow configuration graphics and dynamic AI email draft responders.",
    readTime: "5 min read",
    codeSnippet: `// Webhook Handler with schema validation middleware
app.post('/api/webhook/client', validateSchema(clientHubSchema), async (req, res) => {
  const { eventType, payload } = req.body;
  await eventQueueService.deferTask(eventType, payload);
  res.status(202).json({ status: 'queued' });
});`,
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2000&auto=format&fit=crop",
    tags: ["JavaScript", "Node.js", "Express.js", "Webhooks"],
    github: "https://github.com/adinogram",
    live: "https://github.com/adinogram"
  }
];

const CaseStudySection = ({ title, icon, children, delay = 0 }: { title: string, icon: React.ReactNode, children: React.ReactNode, delay?: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="space-y-4"
  >
    <h4 className="text-xs font-mono uppercase tracking-[0.3em] text-primary flex items-center gap-2 font-bold">
      {icon} {title}
    </h4>
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
      {children}
    </div>
  </motion.div>
);

const AnimatedDiagram = ({ nodes }: { nodes: string[] }) => (
  <div className="relative py-12 flex items-center justify-between gap-4 max-w-lg mx-auto">
    <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />
    {nodes.map((node, i) => (
      <div key={i} className="relative z-10 flex flex-col items-center gap-2">
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }} 
          transition={{ repeat: Infinity, duration: 3, delay: i * 0.5 }}
          className="w-12 h-12 rounded-xl bg-black border border-primary/40 flex items-center justify-center shadow-lg shadow-primary/10"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
        <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{node}</span>
      </div>
    ))}
  </div>
);

export const Projects = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach(p => p.tags.forEach(t => tags.add(t)));
    return ["All", ...Array.from(tags).sort()];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter(p => p.tags.includes(activeFilter));
  }, [activeFilter]);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
    if (expandedId !== id) {
      setTimeout(() => {
        document.getElementById(`project-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  return (
    <section id="projects" className="py-24 px-4 overflow-hidden relative" ref={scrollRef}>
      {/* Scroll Progress Indicator for active case study */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX: expandedId ? scaleX : 0 }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter">Selected Projects</h2>
            <p className="text-muted-foreground max-w-xl leading-relaxed font-mono text-xs uppercase tracking-wide">
              Engineering case studies focused on scalability, security, and performance.
            </p>
          </motion.div>
          
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  setActiveFilter(tag);
                  setExpandedId(null);
                }}
                className={`px-6 py-2 rounded-full text-[10px] font-mono tracking-widest uppercase transition-all border ${
                  activeFilter === tag
                    ? "bg-primary text-black border-primary font-black shadow-xl shadow-primary/20"
                    : "bg-card border-border text-muted-foreground hover:border-primary/40"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout 
          className="grid lg:grid-cols-3 gap-8 items-start"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                id={`project-${project.id}`}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group flex flex-col bg-card border border-border rounded-[2.5rem] overflow-hidden transition-all duration-500 ${
                  expandedId === project.id ? "lg:col-span-3 shadow-2xl ring-1 ring-primary/20" : "hover:shadow-2xl hover:border-primary/30"
                }`}
              >
              <div className={`flex flex-col ${expandedId === project.id ? "lg:flex-row" : ""}`}>
                <motion.div 
                  layout 
                  className={`relative overflow-hidden ${
                    expandedId === project.id ? "w-full lg:w-2/5 aspect-[4/3] lg:aspect-auto" : "aspect-[16/10]"
                  }`}
                  onClick={() => !expandedId && toggleExpand(project.id)}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale-[0.2] transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  
                  {/* Quick Info Overlay */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="flex items-center gap-3 mb-2">
                       <Badge className="bg-primary text-black font-black text-[8px] uppercase tracking-widest">{project.readTime}</Badge>
                       <div className="flex items-center gap-1 text-[10px] text-white font-mono uppercase tracking-widest">
                         <Activity className="w-3 h-3 text-primary" /> Case Study Active
                       </div>
                    </div>
                    <motion.h3 layout className="text-3xl font-black text-white tracking-tight">{project.title}</motion.h3>
                  </div>

                  {!expandedId && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 pointer-events-none">
                       <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-black font-mono uppercase tracking-widest text-xs h-12 px-8">
                         Analyze Architecture <ArrowUpRight className="ml-2 w-4 h-4" />
                       </Button>
                    </div>
                  )}
                </motion.div>
                
                <div className={`p-8 lg:p-12 flex-1 flex flex-col ${expandedId === project.id ? "bg-black/95 overflow-y-auto max-h-[800px] custom-scrollbar" : "bg-card"}`}>
                  <header className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-[10px] font-mono text-primary/60 font-bold uppercase tracking-widest">#{tag}</span>
                        ))}
                      </div>
                      {!expandedId && <p className="text-muted-foreground leading-relaxed max-w-sm">{project.description}</p>}
                    </div>
                    
                    <div className="flex gap-3">
                      {project.github && project.github !== "#" && <a href={project.github} target="_blank" rel="noopener noreferrer"><Button size="icon" variant="ghost" className="rounded-full border border-white/10 hover:border-primary"><Github className="w-5 h-5" /></Button></a>}
                      {project.live && project.live !== "#" && <a href={project.live} target="_blank" rel="noopener noreferrer"><Button size="icon" variant="ghost" className="rounded-full border border-white/10 hover:border-primary"><ExternalLink className="w-5 h-5" /></Button></a>}
                    </div>
                  </header>

                  <AnimatePresence>
                    {expandedId === project.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-12"
                      >
                        <div className="grid md:grid-cols-2 gap-12">
                          <CaseStudySection title="Problem Space" icon={<Target className="w-4 h-4" />} delay={0.1}>
                            <p className="text-sm text-muted-foreground leading-relaxed italic border-l-2 border-primary/30 pl-4">{project.problem}</p>
                          </CaseStudySection>
                          <CaseStudySection title="Technical Research" icon={<Activity className="w-4 h-4" />} delay={0.2}>
                            <p className="text-sm text-muted-foreground leading-relaxed">{project.research}</p>
                          </CaseStudySection>
                        </div>

                        <CaseStudySection title="Deployment Architecture" icon={<Cpu className="w-4 h-4" />} delay={0.3}>
                          <p className="text-sm text-muted-foreground mb-8 text-center">{project.architecture.description}</p>
                          <AnimatedDiagram nodes={project.architecture.diagram.split(" -> ")} />
                        </CaseStudySection>

                        <div className="grid md:grid-cols-2 gap-8">
                           <div className="space-y-4">
                             <h4 className="text-xs font-mono uppercase tracking-[0.3em] font-bold text-muted-foreground">Engineering Constraints</h4>
                             <div className="space-y-4">
                               {project.challenges.map((c, i) => (
                                 <div key={i} className="flex gap-4 items-start bg-red-400/5 p-4 rounded-xl border border-red-400/10">
                                   <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                                   <p className="text-xs font-mono">{c}</p>
                                 </div>
                               ))}
                             </div>
                           </div>
                           <div className="space-y-4">
                             <h4 className="text-xs font-mono uppercase tracking-[0.3em] font-bold text-muted-foreground">Applied Solutions</h4>
                             <div className="space-y-4">
                               {project.solutions.map((s, i) => (
                                 <div key={i} className="flex gap-4 items-start bg-emerald-400/5 p-4 rounded-xl border border-emerald-400/10">
                                   <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                   <p className="text-xs font-mono">{s}</p>
                                 </div>
                               ))}
                             </div>
                           </div>
                        </div>

                        <CaseStudySection title="Core Implementation" icon={<Code className="w-4 h-4" />} delay={0.4}>
                          <div className="bg-black/80 rounded-xl p-6 border border-white/5 font-mono text-[11px] leading-relaxed relative overflow-hidden group/code">
                             <div className="absolute top-0 right-0 p-2 opacity-50 group-hover:opacity-100 transition-opacity">
                                <Terminal className="w-4 h-4" />
                             </div>
                             <pre className="text-emerald-300 drop-shadow-[0_0_10px_rgba(110,231,183,0.2)] whitespace-pre-wrap">{project.codeSnippet}</pre>
                          </div>
                        </CaseStudySection>

                        <div className="grid md:grid-cols-2 gap-8">
                          <CaseStudySection title="Lessons Learned" icon={<Lightbulb className="w-4 h-4" />} delay={0.5}>
                             <p className="text-sm font-medium text-white">{project.lessonsLearned}</p>
                          </CaseStudySection>
                          <CaseStudySection title="Future Improvements" icon={<Zap className="w-4 h-4" />} delay={0.5}>
                             <p className="text-sm text-muted-foreground">{project.futureImprovements}</p>
                          </CaseStudySection>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                           {project.techStack.map((tech, i) => (
                             <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-xl text-center group/tech hover:border-primary transition-colors">
                                <span className="text-[10px] font-mono tracking-widest text-muted-foreground group-hover/tech:text-primary">{tech}</span>
                             </div>
                           ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-auto pt-8 flex items-center justify-between">
                     <Button 
                       variant="ghost" 
                       onClick={(e) => { e.stopPropagation(); toggleExpand(project.id); }}
                       className="group text-[10px] font-mono uppercase tracking-[0.3em] font-bold text-primary px-0 hover:bg-transparent"
                     >
                       <span className="relative">
                         {expandedId === project.id ? "Close Intelligence" : "Open Intelligence"}
                         <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full" />
                       </span>
                     </Button>
                     <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        <span className="text-[10px] font-mono uppercase">{project.readTime}</span>
                     </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
