import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import avatar from "@/assets/avatar.jpg";
import talkVideo from "@/assets/avatar-talk.mp4.asset.json";
import {
  Download, Github, Linkedin, Mail, Phone, MapPin,   ExternalLink, Code2, Server, Database, Map, Wrench, Trophy, ShieldCheck, GraduationCap, Briefcase,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hatim Ali — Software Developer | Angular · C# · .NET" },
      { name: "description", content: "Portfolio of Hatim Ali, a software developer building Angular, C#/.NET full-stack apps, GIS dashboards and security tools." },
      { property: "og:title", content: "Hatim Ali — Software Developer" },
      { property: "og:description", content: "Angular, C#/.NET, GIS mapping and CTF-winning security skills. View projects and download the CV." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const CV_FILES = [
  { label: "PDF", href: "/downloads/Hatim_Ali_Resume.pdf", name: "Hatim_Ali_Resume.pdf" },
  { label: "TXT", href: "/downloads/Hatim_Ali_Resume.txt", name: "Hatim_Ali_Resume.txt" },
];

async function downloadCv(href: string, name: string) {
  try {
    const blob = await (await fetch(href)).blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 30000);
  } catch {
    window.open(href, "_blank");
  }
}

function CvMenu({ compact }: { compact?: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const f = (e: MouseEvent) => { if (!ref.current?.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", f);
    return () => document.removeEventListener("mousedown", f);
  }, []);
  return (
    <div ref={ref} className="relative">
      <button onClick={() => setOpen((o) => !o)} aria-expanded={open}
        className={compact
          ? "inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:shadow-[0_0_30px_var(--glow)]"
          : "inline-flex items-center gap-2 rounded-xl border px-5 py-3 font-semibold transition hover:border-primary hover:text-primary"}>
        <Download className="h-4 w-4" /> {compact ? "CV" : "Download CV"}
      </button>
      <div className={`absolute right-0 z-50 mt-2 w-44 origin-top-right rounded-xl glass p-1.5 transition-all duration-300 ${open ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"}`}>
        {CV_FILES.map((f) => (
          <a key={f.label} href={f.href} download={f.name}
            onClick={(e) => { e.preventDefault(); setOpen(false); downloadCv(f.href, f.name); }}
            className="flex items-center justify-between rounded-lg px-3 py-2 text-sm transition hover:bg-secondary hover:text-primary">
            <span>{f.label} format</span><Download className="h-3.5 w-3.5" />
          </a>
        ))}
      </div>
    </div>
  );
}
const GITHUB = "https://github.com/Ha72ali";
const LINKEDIN = "https://www.linkedin.com/in/hatim-ali-54588b281";
const EMAIL = "ahatimali82@gmail.com";

const INTRO = "Hi there! I'm Hatim Ali, a software developer specializing in Angular, C sharp and dot NET. I build full-stack web apps, smart dashboards and interactive maps. Welcome to my portfolio!";

const NAV = ["about", "skills", "experience", "projects", "achievements", "contact"];

const SKILLS = [
  { icon: Code2, title: "Frontend", items: ["Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Responsive UI"] },
  { icon: Server, title: "Backend", items: ["C#", ".NET", "ASP.NET Core", "REST APIs"] },
  { icon: Database, title: "Database & Data", items: ["SQL Server", "Entity Framework Core", "JSON", "GeoJSON"] },
  { icon: Map, title: "Mapping & Visualization", items: ["ArcGIS / Esri", "OpenStreetMap", "GIS route layers", "Dashboard KPIs"] },
  { icon: Wrench, title: "Tools & Practices", items: ["Git", "API debugging", "DevTools", "Testing", "Documentation"] },
];

const PROJECTS = [
  { title: "Fiber Rollout Dashboard & GIS Map", tag: "Neotec · Angular · ArcGIS", desc: "Fiber-rollout dashboard map with dynamic GeoJSON routes, ArcGIS/Esri and OpenStreetMap basemaps, contractor/ring/phase filters, route highlighting and layer controls.", stack: ["Angular", "GeoJSON", "ArcGIS", "OSM"] },
  { title: "Binance Futures Trading Bot", tag: "Trading · Automation", desc: "A futures trading bot dashboard for Binance with live market views and automated strategy controls.", stack: ["Next.js", "Trading API", "Charts"], live: "https://v0-binance-blush.vercel.app/" },
  { title: "Ndmsk Technology Website", tag: "Business · Web", desc: "Modern showcase website for Ndmsk Technology presenting services, solutions and brand identity.", stack: ["React", "Tailwind", "Vercel"], live: "https://ndmsk-showcase-a557e651.vercel.app/" },
  { title: "PhishGuard", tag: "AI · Cybersecurity", desc: "AI-powered email phishing detector that analyses messages and flags suspicious links, senders and content.", stack: ["Python", "Machine Learning", "Security"], code: "https://github.com/Ha72ali/-Phishguard.git" },
];

const CERTS = [
  "Python Programming Course", "Ethical Hacking (CNSP, CISCO, CCEP, CSSO)", "Digital Forensics & Incident Investigation",
  "Certified Red Team Operations Management (CRTOM)", "Capture The Flag (CTF) Practical Training",
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")), { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useReducedMotion() {
  const [r, setR] = useState(false);
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setR(m.matches);
    const f = () => setR(m.matches);
    m.addEventListener("change", f);
    return () => m.removeEventListener("change", f);
  }, []);
  return r;
}

function useAutoVoice(ready: boolean) {
  const [speaking, setSpeaking] = useState(false);
  useEffect(() => {
    if (!ready || !("speechSynthesis" in window)) return;
    const synth = window.speechSynthesis;
    let started = false;
    const speak = () => {
      if (started) return;
      started = true;
      synth.cancel();
      const u = new SpeechSynthesisUtterance(INTRO);
      const vs = synth.getVoices();
      const v = vs.find((x) => /en/i.test(x.lang) && /male|Daniel|David|Google UK English Male|Rishi|Alex/i.test(x.name)) ?? vs.find((x) => /en/i.test(x.lang));
      if (v) u.voice = v;
      u.rate = 1; u.pitch = 1;
      u.onstart = () => setSpeaking(true);
      u.onend = () => setSpeaking(false);
      u.onerror = () => { setSpeaking(false); started = false; };
      synth.speak(u);
      setTimeout(() => { if (!synth.speaking) started = false; }, 600);
    };
    const t = setTimeout(speak, 300);
    // Browsers may block speech until the first interaction; start then.
    const evs = ["pointerdown", "keydown", "touchstart"] as const;
    const onAct = () => speak();
    evs.forEach((e) => window.addEventListener(e, onAct, { passive: true }));
    return () => { clearTimeout(t); evs.forEach((e) => window.removeEventListener(e, onAct)); synth.cancel(); };
  }, [ready]);
  return speaking;
}

function Wave({ active, reduced }: { active: boolean; reduced: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current!; const ctx = c.getContext("2d")!;
    let raf = 0; let t = 0; let amp = 0;
    const color = getComputedStyle(document.documentElement).getPropertyValue("--primary").trim();
    const color2 = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim();
    const draw = () => {
      const w = (c.width = c.clientWidth * 2), h = (c.height = c.clientHeight * 2);
      ctx.clearRect(0, 0, w, h);
      amp += ((active ? 1 : 0.12) - amp) * 0.06;
      const bars = 64;
      for (let i = 0; i < bars; i++) {
        const x = (i + 0.5) * (w / bars);
        const n = Math.sin(i * 0.45 + t) * 0.5 + Math.sin(i * 0.17 - t * 1.7) * 0.35 + Math.sin(i * 1.3 + t * 2.3) * 0.15;
        const env = Math.sin((i / bars) * Math.PI);
        const bh = Math.max(4, Math.abs(n) * env * h * 0.85 * amp);
        ctx.fillStyle = i % 2 ? color : color2;
        ctx.globalAlpha = 0.5 + 0.5 * env;
        ctx.fillRect(x - w / bars / 4, h / 2 - bh / 2, w / bars / 2, bh);
      }
      t += reduced ? 0.02 : 0.07;
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, [active, reduced]);
  return <canvas ref={ref} className="h-24 w-full" aria-hidden />;
}

function TalkingAvatar({ speaking }: { speaking: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current; if (!v) return;
    if (speaking) { v.play().catch(() => {}); } else { v.pause(); v.currentTime = 0; }
  }, [speaking]);
  return (
    <video ref={ref} src={talkVideo.url} poster={avatar} muted loop playsInline preload="auto"
      aria-label="Animated presenter introducing Hatim Ali" width={1024} height={1152}
      className="h-[34rem] w-full object-cover" />
  );
}

function Intro({ onDone }: { onDone: () => void }) {
  const [hide, setHide] = useState(false);
  const done = useRef(onDone); done.current = onDone;
  useEffect(() => {
    const a = setTimeout(() => setHide(true), 1600);
    const b = setTimeout(() => done.current(), 2300);
    return () => { clearTimeout(a); clearTimeout(b); };
  }, []);
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-700 ${hide ? "opacity-0" : "opacity-100"}`}>
      <div className="text-center">
        <p className="font-mono text-xs tracking-[0.4em] text-muted-foreground">INITIALIZING</p>
        <h1 className="mt-3 text-5xl font-bold text-gradient md:text-7xl">Hatim Ali</h1>
        <div className="mx-auto mt-6 h-px w-48 overflow-hidden bg-border">
          <div className="h-full bg-primary" style={{ animation: "loadbar 1.5s ease forwards", width: "100%", transformOrigin: "left" }} />
        </div>
      </div>
      <style>{`@keyframes loadbar{from{transform:scaleX(0)}to{transform:scaleX(1)}}`}</style>
    </div>
  );
}

function Section({ id, label, title, children }: { id: string; label: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <div className="reveal mb-12">
        <p className="font-mono text-sm text-primary">{label}</p>
        <h2 className="mt-2 text-3xl font-bold md:text-5xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Index() {
  const [intro, setIntro] = useState(true);
  const reduced = useReducedMotion();
  const speaking = useAutoVoice(!intro);
  useReveal();
  useEffect(() => { if (reduced) setIntro(false); }, [reduced]);

  return (
    <div className="relative min-h-screen">
      {intro && <Intro onDone={() => setIntro(false)} />}

      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-primary/15 blur-[120px] animate-float" />
        <div className="absolute -right-40 top-[60vh] h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-[120px] animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <header className="fixed inset-x-0 top-0 z-40">
        <nav className="glass mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3">
          <a href="#top" className="font-mono font-semibold"><span className="text-primary">&lt;</span>Hatim<span className="text-primary">/&gt;</span></a>
          <ul className="hidden gap-6 text-sm text-muted-foreground md:flex">
            {NAV.map((n) => <li key={n}><a href={`#${n}`} className="capitalize transition-colors hover:text-primary">{n}</a></li>)}
          </ul>
          <CvMenu compact />
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 pt-28 md:grid-cols-[1.1fr_1fr]">
        <div className="reveal">
          <p className="inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary" /> Available for opportunities
          </p>
          <h1 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">Hi, I'm <span className="text-gradient">Hatim Ali</span></h1>
          <p className="mt-3 font-mono text-lg text-primary">Software Developer · Angular · C# · .NET<span className="caret">_</span></p>
          <p className="mt-6 max-w-xl text-muted-foreground">
            I build fast, maintainable full-stack web applications — responsive Angular interfaces, C#/.NET services, data-rich dashboards and interactive GIS maps.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-[0_0_30px_var(--glow)]">View my work</a>
            <CvMenu />
            <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-xl border p-3 transition hover:border-primary hover:text-primary"><Github className="h-5 w-5" /></a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-xl border p-3 transition hover:border-primary hover:text-primary"><Linkedin className="h-5 w-5" /></a>
          </div>
        </div>

        <div className="reveal relative">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-primary/40 via-accent/30 to-violet/40 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] glow-ring">
<TalkingAvatar speaking={speaking} />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/60 to-transparent" />
            <div className={`absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl glass px-4 py-3 transition-all duration-700 ${speaking ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
              <div className="eq flex h-6 items-end gap-1" aria-hidden>
                {[0, 1, 2, 3, 4].map((i) => <span key={i} style={{ height: "100%", animationDelay: `${i * 0.12}s` }} />)}
              </div>
              <p className="font-mono text-xs tracking-widest text-foreground">HATIM'S AI · SPEAKING</p>
            </div>
          </div>
          <div className="relative -mt-2"><Wave active={speaking} reduced={reduced} /></div>
        </div>
      </section>

      <Section id="about" label="01. about" title="Who I am">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
          <p className="reveal text-lg leading-relaxed text-muted-foreground">
            Software Developer with 2 years of experience building and improving web applications, focused on Angular frontend development and C#/.NET application development. I work on responsive UI implementation, REST API integration, dynamic dashboards, data visualization and troubleshooting frontend issues — always aiming for clean, maintainable code, performance, usability and reliable delivery.
          </p>
          <div className="reveal grid grid-cols-2 gap-4">
            {[["2+", "Years building"], ["4+", "Featured projects"], ["6", "Certifications"], ["1", "CTF win"]].map(([n, l]) => (
              <div key={l} className="glass rounded-2xl p-5 transition hover:-translate-y-1 hover:border-primary/50">
                <p className="text-3xl font-bold text-gradient">{n}</p><p className="mt-1 text-sm text-muted-foreground">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="skills" label="02. skills" title="Tech stack">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map(({ icon: Icon, title, items }) => (
            <div key={title} className="reveal glass group rounded-2xl p-6 transition duration-500 hover:-translate-y-1 hover:border-primary/50">
              <Icon className="h-7 w-7 text-primary transition group-hover:scale-110" />
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((s) => <span key={s} className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="experience" label="03. experience" title="Where I've worked">
        <div className="reveal glass relative rounded-2xl border-l-2 border-l-primary p-8">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="flex items-center gap-2 text-xl font-semibold"><Briefcase className="h-5 w-5 text-primary" />Software Developer · Neotec</h3>
            <span className="font-mono text-sm text-muted-foreground">05/2025 — Present</span>
          </div>
          <ul className="mt-5 space-y-3 text-muted-foreground">
            {[
              "Develop and enhance web application interfaces using Angular and TypeScript, with attention to responsiveness, readability and maintainability.",
              "Work with C#/.NET application code and REST APIs to support reliable data flow between frontend components and backend services.",
              "Integrate API-driven data into dashboard views, filters, KPI summaries and map visualizations.",
              "Investigate UI and integration issues, validate API responses, and improve loading and rendering behavior.",
            ].map((b) => <li key={b} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{b}</li>)}
          </ul>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {[["B.Tech", "Currently pursuing — 3rd year"], ["Higher Secondary", "Completed 2024"]].map(([t, s]) => (
            <div key={t} className="reveal glass flex items-center gap-4 rounded-2xl p-6">
              <GraduationCap className="h-8 w-8 text-accent" /><div><p className="font-semibold">{t}</p><p className="text-sm text-muted-foreground">{s}</p></div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="projects" label="04. projects" title="Things I've built">
        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <article key={p.title} className="reveal glass group relative overflow-hidden rounded-2xl p-7 transition duration-500 hover:-translate-y-1.5 hover:border-primary/60" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-2xl transition group-hover:bg-primary/25" />
              <p className="font-mono text-xs text-primary">{p.tag}</p>
              <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">{p.stack.map((s) => <span key={s} className="rounded-md border px-2 py-0.5 font-mono text-xs">{s}</span>)}</div>
              <div className="mt-6 flex gap-4 text-sm">
                {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-primary hover:underline"><ExternalLink className="h-4 w-4" />Live demo</a>}
                {p.code && <a href={p.code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-primary hover:underline"><Github className="h-4 w-4" />Source</a>}
                {!p.live && !p.code && <span className="text-muted-foreground">Professional work · Neotec</span>}
              </div>
            </article>
          ))}
        </div>
        <div className="reveal mt-8 text-center">
          <a href={GITHUB} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border px-5 py-3 transition hover:border-primary hover:text-primary"><Github className="h-4 w-4" />More on GitHub</a>
        </div>
      </Section>

      <Section id="achievements" label="05. achievements" title="Certifications & wins">
        <div className="reveal glass glow-ring mb-6 flex items-center gap-5 rounded-2xl p-7">
          <Trophy className="h-10 w-10 shrink-0 text-primary" />
          <div><p className="text-lg font-semibold">Winner — CTF Competition</p><p className="text-muted-foreground">Logic Arena · Sistec GN</p></div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CERTS.map((c) => (
            <div key={c} className="reveal glass flex items-start gap-3 rounded-2xl p-5 transition hover:border-accent/60">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" /><p className="text-sm">{c}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" label="06. contact" title="Let's build something">
        <div className="reveal glass glow-ring grid gap-8 rounded-3xl p-8 md:grid-cols-2 md:p-12">
          <div>
            <p className="text-muted-foreground">Open to developer roles, freelance projects and collaborations. Reach out — I usually reply quickly.</p>
            <a href={`mailto:${EMAIL}`} className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground transition hover:shadow-[0_0_30px_var(--glow)]"><Mail className="h-4 w-4" />Say hello</a>
          </div>
          <ul className="space-y-4 text-sm">
            <li><a href={`mailto:${EMAIL}`} className="flex items-center gap-3 hover:text-primary"><Mail className="h-5 w-5 text-primary" />{EMAIL}</a></li>
            <li><a href="tel:+917049616553" className="flex items-center gap-3 hover:text-primary"><Phone className="h-5 w-5 text-primary" />+91 70496 16553</a></li>
            <li className="flex items-center gap-3"><MapPin className="h-5 w-5 text-primary" />Bhopal, Madhya Pradesh, India</li>
            <li><a href={LINKEDIN} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-primary"><Linkedin className="h-5 w-5 text-primary" />linkedin.com/in/hatim-ali</a></li>
            <li><a href={GITHUB} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-primary"><Github className="h-5 w-5 text-primary" />github.com/Ha72ali</a></li>
          </ul>
        </div>
      </Section>

      <footer className="border-t py-8 text-center font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} Hatim Ali · Built with care
      </footer>
    </div>
  );
}
