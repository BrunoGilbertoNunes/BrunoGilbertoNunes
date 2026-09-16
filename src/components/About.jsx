import { motion } from "framer-motion";
import { Code2, Database, Server, Palette } from "lucide-react";
import Reveal from "./Reveal";
import { profile, skillGroups, skills, stats } from "../data/profile";

const groupIcons = {
  front: Palette,
  back: Code2,
  data: Database,
  infra: Server,
};

const marqueeItems = [...skills.map((s) => s.label), "Laravel", "Inertia.js", "BullMQ", "Stripe", "FFmpeg", "WebSockets", "WooCommerce", "PIX API", "Git", "SOLID", "Clean Code"];

export default function About() {
  return (
    <section id="sobre" className="relative py-24">
      <div className="container-x">
        <Reveal>
          <p className="section-title mb-3">// sobre mim</p>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Engenheiro de software com visão de <span className="gradient-text">produto</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <Reveal delay={0.1}>
            <div className="glass card-hover h-full rounded-3xl p-8">
              {profile.about.map((p) => (
                <p key={p} className="text-slate-300 leading-relaxed [&:not(:last-child)]:mb-4">
                  {p}
                </p>
              ))}

              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center"
                  >
                    <div className="text-2xl font-extrabold text-accent-soft">{s.value}</div>
                    <div className="mt-1 text-xs text-slate-400">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            {skillGroups.map((g, gi) => {
              const Icon = groupIcons[g.id];
              const items = skills.filter((s) => s.group === g.id);
              return (
                <Reveal key={g.id} delay={0.05 * gi}>
                  <div className="glass card-hover rounded-3xl p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/15 text-accent-soft">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="font-semibold text-white">{g.label}</h3>
                    </div>
                    <div className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                      {items.map((s) => (
                        <div key={s.label}>
                          <div className="mb-1 flex items-center justify-between text-sm">
                            <span className="text-slate-300">{s.label}</span>
                            <span className="font-mono text-xs text-slate-500">{s.level}%</span>
                          </div>
                          <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                            <motion.div
                              className="h-full rounded-full bg-gradient-to-r from-accent to-accent-cyan"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${s.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.2 + gi * 0.05, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative mt-16 overflow-hidden border-y border-white/5 bg-white/[0.02] py-4">
        <div className="flex w-max animate-marquee gap-10">
          {[...marqueeItems, ...marqueeItems].map((t, i) => (
            <span key={i} className="font-mono text-sm text-slate-500">
              {t} <span className="ml-6 text-accent/50">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}