import { Heart } from "lucide-react";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="container-x flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-cyan font-mono text-xs font-bold text-white">
            B
          </span>
          <span className="font-mono text-sm text-slate-400">
            bruno<span className="text-accent-cyan">.</span>dev
          </span>
        </div>
        <p className="flex items-center gap-1.5 text-xs text-slate-500">
          Construído com React + Tailwind. Feito com{" "}
          <Heart className="h-3.5 w-3.5 fill-rose-500 text-rose-500" /> por Bruno Nunes ·{" "}
          {new Date().getFullYear()}
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="font-mono text-xs text-slate-500 transition-colors hover:text-white"
        >
          {profile.email}
        </a>
      </div>
    </footer>
  );
}