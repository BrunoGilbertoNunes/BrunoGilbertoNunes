import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "../data/profile";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]" />
      <div className="pointer-events-none absolute right-[-120px] top-1/3 h-96 w-96 rounded-full bg-accent-cyan/10 blur-[120px] animate-float-slow" />
      <div className="pointer-events-none absolute bottom-0 left-[-100px] h-80 w-80 rounded-full bg-accent-mint/10 blur-[120px] animate-float" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-x relative z-10 pt-24 pb-16"
      >
        <motion.div
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-xs font-medium text-slate-300">
            Disponível para oportunidades
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          Bruno Nunes,
          <br />
          <span className="gradient-text text-glow">
            desenvolvedor full stack
          </span>{" "}
          que transforma ideias em{" "}
          <span className="underline decoration-accent-cyan decoration-4 underline-offset-8">
            produtos reais
          </span>
          .
        </motion.h1>

        <motion.p variants={item} className="mt-6 max-w-2xl text-lg text-slate-400">
          Construo plataformas ponta a ponta — do modelamento de dados e APIs às
          filas assíncronas e ao deploy em produção. Laravel, Node.js, React e
          arquitetura distribuída em Docker.
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
          <a href="#projetos" className="btn-primary">
            <ArrowDown className="h-4 w-4" />
            Ver projetos
          </a>
          <a href={profile.waUrl} target="_blank" rel="noreferrer" className="btn-ghost">
            WhatsApp
          </a>
          <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="btn-ghost">
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-400"
        >
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-accent-cyan" /> {profile.location}
          </span>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            <Mail className="h-4 w-4 text-accent-cyan" /> {profile.email}
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            <Linkedin className="h-4 w-4 text-accent-cyan" /> LinkedIn
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#sobre"
        aria-label="Rolar para sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 transition-colors hover:text-white"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity }}
      >
        <ArrowDown className="h-5 w-5" />
      </motion.a>
    </section>
  );
}