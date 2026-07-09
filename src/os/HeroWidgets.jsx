import { motion, useReducedMotion } from 'framer-motion';
import profile from '../data/profile';

// Desktop widgets: identity, stats, tech chips. Reads only profile.js.
export default function HeroWidgets() {
  const reduced = useReducedMotion();

  // Explicit per-widget entrance (no variant propagation — reliable under StrictMode)
  const enter = (i) =>
    reduced
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.12 } }
      : {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { type: 'spring', stiffness: 260, damping: 26, delay: 0.1 + i * 0.07 },
        };

  return (
    <div className="absolute right-8 top-10 hidden w-[380px] select-none flex-col gap-4 lg:flex">
      {/* Identity */}
      <motion.div {...enter(0)} className="os-glass flex items-center gap-4 rounded-2xl p-5 shadow-window">
        <img
          src={profile.portrait}
          alt={profile.name}
          className="h-20 w-20 rounded-xl border border-os-hairline object-cover"
        />
        <div className="min-w-0">
          <h1 className="truncate text-xl font-semibold tracking-tight">{profile.name}</h1>
          <p className="mt-0.5 text-[13px] text-os-muted">{profile.roles.join(' · ')}</p>
          <p className="mt-1.5 flex items-center gap-1.5 text-[12px] text-os-muted">
            <span className="h-2 w-2 rounded-full bg-os-online" aria-hidden />
            {profile.title} @ {profile.org}
          </p>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div {...enter(1)} className="grid grid-cols-4 gap-2">
        {profile.stats.map(({ label, value }) => (
          <div key={label} className="os-tile rounded-xl px-2 py-3 text-center">
            <p className="font-mono text-lg font-semibold text-os-accentSoft">{value}</p>
            <p className="mt-0.5 text-[10px] leading-tight text-os-muted">{label}</p>
          </div>
        ))}
      </motion.div>

      {/* Tech chips */}
      <motion.div {...enter(2)} className="flex flex-wrap gap-1.5">
        {profile.techChips.map((t) => (
          <span
            key={t}
            className="os-tile rounded-full px-2.5 py-1 font-mono text-[11px] text-os-muted"
          >
            {t}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
