import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  CreditCard,
  Gift,
  Heart,
  LayoutDashboard,
  QrCode,
  Radar,
  RefreshCw,
  Server,
  Shield,
  Truck,
} from "lucide-react";
import Reveal from "./Reveal";
import { projects } from "../data/profile";

const iconMap = {
  qrcode: QrCode,
  server: Server,
  refresh: RefreshCw,
  layout: LayoutDashboard,
  "credit-card": CreditCard,
  shield: Shield,
  heart: Heart,
  radar: Radar,
  truck: Truck,
  gift: Gift,
};

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projetos" className="relative py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
      <div className="container-x relative">
        <Reveal>
          <p className="section-title mb-3">// projetos</p>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Projetos de <span className="gradient-text">destaque</span> em produção
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((p, i) => {
            const Icon = iconMap[p.icon] || Code2;
            return (
              <Reveal key={p.id} delay={i * 0.08} className={i === 0 ? "md:col-span-2 xl:col-span-1" : ""}>
                <FeatureCard project={p} Icon={Icon} highlight={i === 0} />
              </Reveal>
            );
          })}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => {
            const Icon = iconMap[p.icon] || Code2;
            return (
              <Reveal key={p.id} delay={(i % 3) * 0.06}>
                <ProjectCard project={p} Icon={Icon} />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ project, Icon, highlight }) {
  return (
    <div
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] ${highlight ? "backdrop-blur" : ""}`}
    >
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-br ${project.accent} opacity-20 transition-opacity duration-500 group-hover:opacity-40`}
      />
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/5 blur-3xl transition-transform duration-700 group-hover:scale-125" />

      <div className="relative p-7">
        <div className="flex items-start justify-between">
          <span
            className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${project.accent} text-white shadow-lg`}
          >
            <Icon className="h-6 w-6" />
          </span>
          <span className="font-mono text-sm text-slate-500">{project.year}</span>
        </div>

        <h3 className="mt-5 flex items-center gap-2 text-xl font-bold text-white">
          {project.name}
          {project.links?.site && (
            <ArrowUpRight className="h-4 w-4 text-accent-cyan opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          )}
        </h3>
        <p className="mt-1 text-sm font-medium text-accent-soft">{project.tagline}</p>

        <p className="mt-4 text-sm leading-relaxed text-slate-400">{project.description}</p>

        <ul className="mt-5 grid gap-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-slate-300">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>

        {(project.links?.repo || project.links?.site) && (
          <div className="mt-6 flex gap-3 border-t border-white/10 pt-5">
            {project.links?.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-soft transition-colors hover:text-white"
              >
                Repositório <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            {project.links?.site && (
              <a
                href={project.links.site}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-cyan transition-colors hover:text-white"
              >
                Site <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectCard({ project, Icon }) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.05]">
      <div
        className={`flex h-32 items-center justify-center bg-gradient-to-br ${project.accent} opacity-90 transition-opacity duration-500 group-hover:opacity-100`}
      >
        <Icon className="h-12 w-12 text-white transition-transform duration-500 group-hover:scale-110" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">{project.name}</h3>
          <span className="font-mono text-xs text-slate-500">{project.year}</span>
        </div>
        <p className="mt-1 text-sm font-medium text-accent-soft">{project.tagline}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}