import Reveal from "./Reveal";
import { Mail, MessageCircle, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section id="contato" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[140px]" />
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />

      <div className="container-x relative">
        <Reveal className="text-center">
          <p className="section-title mb-3">// contato</p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Vamos construir algo <span className="gradient-text">juntos?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Tem um projeto, uma vaga ou quer trocar uma ideia sobre arquitetura?
            Me chama no e-mail ou no WhatsApp — respondo rápido.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
          <Reveal delay={0.05}>
            <a
              href={`mailto:${profile.email}`}
              className="glass card-hover group flex h-full flex-col rounded-3xl p-8"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-cyan text-white shadow-lg shadow-accent/30 transition-transform duration-300 group-hover:scale-110">
                <Mail className="h-7 w-7" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-white">E-mail</h3>
              <p className="mt-1 flex-1 break-all font-mono text-sm text-slate-400">
                {profile.email}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-soft">
                Enviar e-mail <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <a
              href={profile.waUrl}
              target="_blank"
              rel="noreferrer"
              className="glass card-hover group flex h-full flex-col rounded-3xl p-8"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/30 transition-transform duration-300 group-hover:scale-110">
                <MessageCircle className="h-7 w-7" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-white">WhatsApp</h3>
              <p className="mt-1 flex-1 font-mono text-sm text-slate-400">{profile.phoneDisplay}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-emerald-400">
                Chamar agora <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-8">
          <div className="mx-auto flex max-w-3xl items-center justify-center gap-6 text-slate-400">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm transition-colors hover:text-white"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <span className="h-4 w-px bg-white/10" />
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm transition-colors hover:text-white"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}