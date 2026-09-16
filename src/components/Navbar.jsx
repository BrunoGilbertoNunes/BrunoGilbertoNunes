import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/profile";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-base-950/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        <a href="#inicio" className="group flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-cyan font-mono text-sm font-bold text-white shadow-lg shadow-accent/30">
            B
          </span>
          <span className="font-mono text-sm font-semibold tracking-tight text-white">
            bruno<span className="text-accent-cyan">.</span>dev
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <a href={profile.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github className="h-5 w-5 text-slate-400 transition-colors hover:text-white" />
          </a>
          <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5 text-slate-400 transition-colors hover:text-white" />
          </a>
          <a
            href={profile.waUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent-soft transition-all hover:bg-accent/20"
          >
            Vamos conversar
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-white/10 bg-white/5 p-2 text-white md:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-white/10 bg-base-950/95 backdrop-blur-xl md:hidden"
        >
          <ul className="container-x flex flex-col gap-1 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:bg-white/5"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="mt-2 flex gap-3 px-3">
              <a href={profile.waUrl} target="_blank" rel="noreferrer" className="btn-primary flex-1 text-center">
                <Mail className="h-4 w-4" /> Contato
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}