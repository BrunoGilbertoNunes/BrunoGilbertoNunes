import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import Reveal from "./Reveal";
import { experience } from "../data/profile";

export default function Experience() {
  return (
    <section id="experiencia" className="relative py-24">
      <div className="container-x">
        <Reveal>
          <p className="section-title mb-3">// experiência</p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Trajetória <span className="gradient-text">profissional</span>
          </h2>
        </Reveal>

        <div className="relative mt-14">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-accent/60 via-white/10 to-transparent md:left-1/2" />

          <div className="space-y-10">
            {experience.map((job, i) => {
              const left = i % 2 === 0;
              return (
                <Reveal key={job.company + job.period} delay={0.05}>
                  <div
                    className={`relative flex flex-col gap-4 pl-12 md:w-1/2 md:pl-0 ${
                      left ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                    }`}
                  >
                    <span
                      className={`absolute left-4 top-1 flex h-3 w-3 -translate-x-1/2 items-center justify-center ${
                        left ? "md:left-full md:translate-x-[-6px]" : "md:left-0 md:translate-x-[-6px]"
                      }`}
                    >
                      <span className="absolute h-3 w-3 animate-ping rounded-full bg-accent/50" />
                      <span className="relative h-3 w-3 rounded-full border-2 border-accent-cyan bg-base-950" />
                    </span>

                    <div className="glass card-hover rounded-3xl p-6">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent-soft">
                            <Briefcase className="h-5 w-5" />
                          </span>
                          <div>
                            <h3 className="font-bold text-white">{job.company}</h3>
                            <p className="text-sm text-accent-soft">{job.role}</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 flex flex-wrap items-center gap-3 font-mono text-xs text-slate-500">
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                          {job.period}
                        </span>
                        <span>{job.place}</span>
                      </div>
                      <ul className="mt-4 space-y-2">
                        {job.items.map((it) => (
                          <li key={it} className="flex items-start gap-2 text-sm leading-relaxed text-slate-300">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-cyan" />
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}