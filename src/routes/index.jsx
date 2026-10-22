import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import avatar from "@/assets/avatar.jpg";
import talkVideo from "@/assets/avatar-talk.mp4.asset.json";
import { Download, Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code2, Server, Database, Map, Wrench, Trophy, ShieldCheck, GraduationCap, Briefcase, } from "lucide-react";
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
async function downloadCv(href, name) {
    try {
        const blob = await (await fetch(href)).blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = name;
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 30000);
    }
    catch {
        window.open(href, "_blank");
    }
}
function CvMenu({ compact }) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        const f = (e) => { if (!ref.current?.contains(e.target))
            setOpen(false); };
        document.addEventListener("mousedown", f);
        return () => document.removeEventListener("mousedown", f);
    }, []);
    return (_jsxs("div", { ref: ref, className: "relative", children: [_jsxs("button", { onClick: () => setOpen((o) => !o), "aria-expanded": open, className: compact
                    ? "inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:shadow-[0_0_30px_var(--glow)]"
                    : "inline-flex items-center gap-2 rounded-xl border px-5 py-3 font-semibold transition hover:border-primary hover:text-primary", children: [_jsx(Download, { className: "h-4 w-4" }), " ", compact ? "CV" : "Download CV"] }), _jsx("div", { className: `absolute right-0 z-50 mt-2 w-44 origin-top-right rounded-xl glass p-1.5 transition-all duration-300 ${open ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"}`, children: CV_FILES.map((f) => (_jsxs("a", { href: f.href, download: f.name, onClick: (e) => { e.preventDefault(); setOpen(false); downloadCv(f.href, f.name); }, className: "flex items-center justify-between rounded-lg px-3 py-2 text-sm transition hover:bg-secondary hover:text-primary", children: [_jsxs("span", { children: [f.label, " format"] }), _jsx(Download, { className: "h-3.5 w-3.5" })] }, f.label))) })] }));
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
function useAutoVoice(ready) {
    const [speaking, setSpeaking] = useState(false);
    useEffect(() => {
        if (!ready || !("speechSynthesis" in window))
            return;
        const synth = window.speechSynthesis;
        let started = false;
        const speak = () => {
            if (started)
                return;
            started = true;
            synth.cancel();
            const u = new SpeechSynthesisUtterance(INTRO);
            const vs = synth.getVoices();
            const v = vs.find((x) => /en/i.test(x.lang) && /male|Daniel|David|Google UK English Male|Rishi|Alex/i.test(x.name)) ?? vs.find((x) => /en/i.test(x.lang));
            if (v)
                u.voice = v;
            u.rate = 1;
            u.pitch = 1;
            u.onstart = () => setSpeaking(true);
            u.onend = () => setSpeaking(false);
            u.onerror = () => { setSpeaking(false); started = false; };
            synth.speak(u);
            setTimeout(() => { if (!synth.speaking)
                started = false; }, 600);
        };
        const t = setTimeout(speak, 300);
        // Browsers may block speech until the first interaction; start then.
        const evs = ["pointerdown", "keydown", "touchstart"];
        const onAct = () => speak();
        evs.forEach((e) => window.addEventListener(e, onAct, { passive: true }));
        return () => { clearTimeout(t); evs.forEach((e) => window.removeEventListener(e, onAct)); synth.cancel(); };
    }, [ready]);
    return speaking;
}
function Wave({ active, reduced }) {
    const ref = useRef(null);
    useEffect(() => {
        const c = ref.current;
        const ctx = c.getContext("2d");
        let raf = 0;
        let t = 0;
        let amp = 0;
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
    return _jsx("canvas", { ref: ref, className: "h-24 w-full", "aria-hidden": true });
}
function TalkingAvatar({ speaking }) {
    const ref = useRef(null);
    useEffect(() => {
        const v = ref.current;
        if (!v)
            return;
        if (speaking) {
            v.play().catch(() => { });
        }
        else {
            v.pause();
            v.currentTime = 0;
        }
    }, [speaking]);
    return (_jsx("video", { ref: ref, src: talkVideo.url, poster: avatar, muted: true, loop: true, playsInline: true, preload: "auto", "aria-label": "Animated presenter introducing Hatim Ali", width: 1024, height: 1152, className: "h-[34rem] w-full object-cover" }));
}
function Intro({ onDone }) {
    const [hide, setHide] = useState(false);
    const done = useRef(onDone);
    done.current = onDone;
    useEffect(() => {
        const a = setTimeout(() => setHide(true), 1600);
        const b = setTimeout(() => done.current(), 2300);
        return () => { clearTimeout(a); clearTimeout(b); };
    }, []);
    return (_jsxs("div", { className: `fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-700 ${hide ? "opacity-0" : "opacity-100"}`, children: [_jsxs("div", { className: "text-center", children: [_jsx("p", { className: "font-mono text-xs tracking-[0.4em] text-muted-foreground", children: "INITIALIZING" }), _jsx("h1", { className: "mt-3 text-5xl font-bold text-gradient md:text-7xl", children: "Hatim Ali" }), _jsx("div", { className: "mx-auto mt-6 h-px w-48 overflow-hidden bg-border", children: _jsx("div", { className: "h-full bg-primary", style: { animation: "loadbar 1.5s ease forwards", width: "100%", transformOrigin: "left" } }) })] }), _jsx("style", { children: `@keyframes loadbar{from{transform:scaleX(0)}to{transform:scaleX(1)}}` })] }));
}
function Section({ id, label, title, children }) {
    return (_jsxs("section", { id: id, className: "mx-auto max-w-6xl scroll-mt-24 px-6 py-24", children: [_jsxs("div", { className: "reveal mb-12", children: [_jsx("p", { className: "font-mono text-sm text-primary", children: label }), _jsx("h2", { className: "mt-2 text-3xl font-bold md:text-5xl", children: title })] }), children] }));
}
function Index() {
    const [intro, setIntro] = useState(true);
    const reduced = useReducedMotion();
    const speaking = useAutoVoice(!intro);
    useReveal();
    useEffect(() => { if (reduced)
        setIntro(false); }, [reduced]);
    return (_jsxs("div", { className: "relative min-h-screen", children: [intro && _jsx(Intro, { onDone: () => setIntro(false) }), _jsxs("div", { className: "pointer-events-none fixed inset-0 -z-10", children: [_jsx("div", { className: "absolute inset-0 grid-bg opacity-60" }), _jsx("div", { className: "absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-primary/15 blur-[120px] animate-float" }), _jsx("div", { className: "absolute -right-40 top-[60vh] h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-[120px] animate-float", style: { animationDelay: "-3s" } })] }), _jsx("header", { className: "fixed inset-x-0 top-0 z-40", children: _jsxs("nav", { className: "glass mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3", children: [_jsxs("a", { href: "#top", className: "font-mono font-semibold", children: [_jsx("span", { className: "text-primary", children: "<" }), "Hatim", _jsx("span", { className: "text-primary", children: "/>" })] }), _jsx("ul", { className: "hidden gap-6 text-sm text-muted-foreground md:flex", children: NAV.map((n) => _jsx("li", { children: _jsx("a", { href: `#${n}`, className: "capitalize transition-colors hover:text-primary", children: n }) }, n)) }), _jsx(CvMenu, { compact: true })] }) }), _jsxs("section", { id: "top", className: "mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 pt-28 md:grid-cols-[1.1fr_1fr]", children: [_jsxs("div", { className: "reveal", children: [_jsxs("p", { className: "inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs text-muted-foreground", children: [_jsx("span", { className: "h-2 w-2 rounded-full bg-primary" }), " Available for opportunities"] }), _jsxs("h1", { className: "mt-6 text-5xl font-bold leading-tight md:text-7xl", children: ["Hi, I'm ", _jsx("span", { className: "text-gradient", children: "Hatim Ali" })] }), _jsxs("p", { className: "mt-3 font-mono text-lg text-primary", children: ["Software Developer \u00B7 Angular \u00B7 C# \u00B7 .NET", _jsx("span", { className: "caret", children: "_" })] }), _jsx("p", { className: "mt-6 max-w-xl text-muted-foreground", children: "I build fast, maintainable full-stack web applications \u2014 responsive Angular interfaces, C#/.NET services, data-rich dashboards and interactive GIS maps." }), _jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [_jsx("a", { href: "#projects", className: "rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-[0_0_30px_var(--glow)]", children: "View my work" }), _jsx(CvMenu, {}), _jsx("a", { href: GITHUB, target: "_blank", rel: "noreferrer", "aria-label": "GitHub", className: "rounded-xl border p-3 transition hover:border-primary hover:text-primary", children: _jsx(Github, { className: "h-5 w-5" }) }), _jsx("a", { href: LINKEDIN, target: "_blank", rel: "noreferrer", "aria-label": "LinkedIn", className: "rounded-xl border p-3 transition hover:border-primary hover:text-primary", children: _jsx(Linkedin, { className: "h-5 w-5" }) })] })] }), _jsxs("div", { className: "reveal relative", children: [_jsx("div", { className: "absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-primary/40 via-accent/30 to-violet/40 blur-3xl" }), _jsxs("div", { className: "relative overflow-hidden rounded-[2rem] glow-ring", children: [_jsx(TalkingAvatar, { speaking: speaking }), _jsx("div", { className: "absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/60 to-transparent" }), _jsxs("div", { className: `absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl glass px-4 py-3 transition-all duration-700 ${speaking ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`, children: [_jsx("div", { className: "eq flex h-6 items-end gap-1", "aria-hidden": true, children: [0, 1, 2, 3, 4].map((i) => _jsx("span", { style: { height: "100%", animationDelay: `${i * 0.12}s` } }, i)) }), _jsx("p", { className: "font-mono text-xs tracking-widest text-foreground", children: "HATIM'S AI \u00B7 SPEAKING" })] })] }), _jsx("div", { className: "relative -mt-2", children: _jsx(Wave, { active: speaking, reduced: reduced }) })] })] }), _jsx(Section, { id: "about", label: "01. about", title: "Who I am", children: _jsxs("div", { className: "grid gap-8 md:grid-cols-[1.4fr_1fr]", children: [_jsx("p", { className: "reveal text-lg leading-relaxed text-muted-foreground", children: "Software Developer with 2 years of experience building and improving web applications, focused on Angular frontend development and C#/.NET application development. I work on responsive UI implementation, REST API integration, dynamic dashboards, data visualization and troubleshooting frontend issues \u2014 always aiming for clean, maintainable code, performance, usability and reliable delivery." }), _jsx("div", { className: "reveal grid grid-cols-2 gap-4", children: [["2+", "Years building"], ["4+", "Featured projects"], ["6", "Certifications"], ["1", "CTF win"]].map(([n, l]) => (_jsxs("div", { className: "glass rounded-2xl p-5 transition hover:-translate-y-1 hover:border-primary/50", children: [_jsx("p", { className: "text-3xl font-bold text-gradient", children: n }), _jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: l })] }, l))) })] }) }), _jsx(Section, { id: "skills", label: "02. skills", title: "Tech stack", children: _jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: SKILLS.map(({ icon: Icon, title, items }) => (_jsxs("div", { className: "reveal glass group rounded-2xl p-6 transition duration-500 hover:-translate-y-1 hover:border-primary/50", children: [_jsx(Icon, { className: "h-7 w-7 text-primary transition group-hover:scale-110" }), _jsx("h3", { className: "mt-4 text-lg font-semibold", children: title }), _jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: items.map((s) => _jsx("span", { className: "rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground", children: s }, s)) })] }, title))) }) }), _jsxs(Section, { id: "experience", label: "03. experience", title: "Where I've worked", children: [_jsxs("div", { className: "reveal glass relative rounded-2xl border-l-2 border-l-primary p-8", children: [_jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [_jsxs("h3", { className: "flex items-center gap-2 text-xl font-semibold", children: [_jsx(Briefcase, { className: "h-5 w-5 text-primary" }), "Software Developer \u00B7 Neotec"] }), _jsx("span", { className: "font-mono text-sm text-muted-foreground", children: "05/2025 \u2014 Present" })] }), _jsx("ul", { className: "mt-5 space-y-3 text-muted-foreground", children: [
                                    "Develop and enhance web application interfaces using Angular and TypeScript, with attention to responsiveness, readability and maintainability.",
                                    "Work with C#/.NET application code and REST APIs to support reliable data flow between frontend components and backend services.",
                                    "Integrate API-driven data into dashboard views, filters, KPI summaries and map visualizations.",
                                    "Investigate UI and integration issues, validate API responses, and improve loading and rendering behavior.",
                                ].map((b) => _jsxs("li", { className: "flex gap-3", children: [_jsx("span", { className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }), b] }, b)) })] }), _jsx("div", { className: "mt-6 grid gap-5 md:grid-cols-2", children: [["B.Tech", "Currently pursuing — 3rd year"], ["Higher Secondary", "Completed 2024"]].map(([t, s]) => (_jsxs("div", { className: "reveal glass flex items-center gap-4 rounded-2xl p-6", children: [_jsx(GraduationCap, { className: "h-8 w-8 text-accent" }), _jsxs("div", { children: [_jsx("p", { className: "font-semibold", children: t }), _jsx("p", { className: "text-sm text-muted-foreground", children: s })] })] }, t))) })] }), _jsxs(Section, { id: "projects", label: "04. projects", title: "Things I've built", children: [_jsx("div", { className: "grid gap-6 md:grid-cols-2", children: PROJECTS.map((p, i) => (_jsxs("article", { className: "reveal glass group relative overflow-hidden rounded-2xl p-7 transition duration-500 hover:-translate-y-1.5 hover:border-primary/60", style: { transitionDelay: `${i * 60}ms` }, children: [_jsx("div", { className: "absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-2xl transition group-hover:bg-primary/25" }), _jsx("p", { className: "font-mono text-xs text-primary", children: p.tag }), _jsx("h3", { className: "mt-2 text-xl font-semibold", children: p.title }), _jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: p.desc }), _jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: p.stack.map((s) => _jsx("span", { className: "rounded-md border px-2 py-0.5 font-mono text-xs", children: s }, s)) }), _jsxs("div", { className: "mt-6 flex gap-4 text-sm", children: [p.live && _jsxs("a", { href: p.live, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-1 text-primary hover:underline", children: [_jsx(ExternalLink, { className: "h-4 w-4" }), "Live demo"] }), p.code && _jsxs("a", { href: p.code, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-1 text-primary hover:underline", children: [_jsx(Github, { className: "h-4 w-4" }), "Source"] }), !p.live && !p.code && _jsx("span", { className: "text-muted-foreground", children: "Professional work \u00B7 Neotec" })] })] }, p.title))) }), _jsx("div", { className: "reveal mt-8 text-center", children: _jsxs("a", { href: GITHUB, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 rounded-xl border px-5 py-3 transition hover:border-primary hover:text-primary", children: [_jsx(Github, { className: "h-4 w-4" }), "More on GitHub"] }) })] }), _jsxs(Section, { id: "achievements", label: "05. achievements", title: "Certifications & wins", children: [_jsxs("div", { className: "reveal glass glow-ring mb-6 flex items-center gap-5 rounded-2xl p-7", children: [_jsx(Trophy, { className: "h-10 w-10 shrink-0 text-primary" }), _jsxs("div", { children: [_jsx("p", { className: "text-lg font-semibold", children: "Winner \u2014 CTF Competition" }), _jsx("p", { className: "text-muted-foreground", children: "Logic Arena \u00B7 Sistec GN" })] })] }), _jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: CERTS.map((c) => (_jsxs("div", { className: "reveal glass flex items-start gap-3 rounded-2xl p-5 transition hover:border-accent/60", children: [_jsx(ShieldCheck, { className: "mt-0.5 h-5 w-5 shrink-0 text-accent" }), _jsx("p", { className: "text-sm", children: c })] }, c))) })] }), _jsx(Section, { id: "contact", label: "06. contact", title: "Let's build something", children: _jsxs("div", { className: "reveal glass glow-ring grid gap-8 rounded-3xl p-8 md:grid-cols-2 md:p-12", children: [_jsxs("div", { children: [_jsx("p", { className: "text-muted-foreground", children: "Open to developer roles, freelance projects and collaborations. Reach out \u2014 I usually reply quickly." }), _jsxs("a", { href: `mailto:${EMAIL}`, className: "mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground transition hover:shadow-[0_0_30px_var(--glow)]", children: [_jsx(Mail, { className: "h-4 w-4" }), "Say hello"] })] }), _jsxs("ul", { className: "space-y-4 text-sm", children: [_jsx("li", { children: _jsxs("a", { href: `mailto:${EMAIL}`, className: "flex items-center gap-3 hover:text-primary", children: [_jsx(Mail, { className: "h-5 w-5 text-primary" }), EMAIL] }) }), _jsx("li", { children: _jsxs("a", { href: "tel:+917049616553", className: "flex items-center gap-3 hover:text-primary", children: [_jsx(Phone, { className: "h-5 w-5 text-primary" }), "+91 70496 16553"] }) }), _jsxs("li", { className: "flex items-center gap-3", children: [_jsx(MapPin, { className: "h-5 w-5 text-primary" }), "Bhopal, Madhya Pradesh, India"] }), _jsx("li", { children: _jsxs("a", { href: LINKEDIN, target: "_blank", rel: "noreferrer", className: "flex items-center gap-3 hover:text-primary", children: [_jsx(Linkedin, { className: "h-5 w-5 text-primary" }), "linkedin.com/in/hatim-ali"] }) }), _jsx("li", { children: _jsxs("a", { href: GITHUB, target: "_blank", rel: "noreferrer", className: "flex items-center gap-3 hover:text-primary", children: [_jsx(Github, { className: "h-5 w-5 text-primary" }), "github.com/Ha72ali"] }) })] })] }) }), _jsxs("footer", { className: "border-t py-8 text-center font-mono text-xs text-muted-foreground", children: ["\u00A9 ", new Date().getFullYear(), " Hatim Ali \u00B7 Built with care"] })] }));
}
