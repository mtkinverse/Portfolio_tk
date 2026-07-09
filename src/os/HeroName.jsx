import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion, animate } from 'framer-motion';
import profile from '../data/profile';

// Stat values like "1+", "6+", "3-4", "3.76" count up from 0 on load.
function StatValue({ value, reduced }) {
  const num = parseFloat(value);
  const suffix = Number.isNaN(num) ? value : value.slice(String(num).length);
  const decimals = value.includes('.') ? 2 : 0;
  const [display, setDisplay] = useState(reduced ? num : 0);

  useEffect(() => {
    if (reduced || Number.isNaN(num)) return undefined;
    const controls = animate(0, num, {
      duration: 0.9,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [num, reduced]);

  return (
    <>
      {Number.isNaN(num) ? value : display.toFixed(decimals)}
      {suffix}
    </>
  );
}

// The full ambient hero — engraved identity typography rendered BENEATH the
// wallpaper's node canvas, so the graph draws across the letters. Everything
// here is scenery (pointer-events-none); the desktop's interactive surface is
// the folders, taskbar, and Ctrl+K. Decorative: Desktop.jsx carries the
// accessible heading.
export default function HeroName() {
  const reduced = useReducedMotion();

  // Gentle pointer drift (deeper plane than the icons/windows).
  const nx = useMotionValue(0);
  const sx = useSpring(nx, { stiffness: 50, damping: 20 });
  const drift = useTransform(sx, (v) => v * 12);

  useEffect(() => {
    if (reduced) return undefined;
    const onMove = (e) => nx.set(e.clientX / window.innerWidth - 0.5);
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, [nx, reduced]);

  const [firstName, ...restName] = profile.name.split(' ');
  const engrave = {
    color: 'transparent',
    backgroundImage: 'linear-gradient(180deg, var(--os-engrave-strong), var(--os-engrave-faint))',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
  };

  return (
    // Flex wrapper centers vertically; motion transform stays on the inner
    // element so it can't clobber the centering.
    <div aria-hidden className="pointer-events-none absolute inset-0 hidden select-none items-center lg:flex">
      <motion.div
        initial={reduced ? { opacity: 0 } : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        style={{ x: drift }}
        className="ml-60 max-w-[62vw]"
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-os-accentSoft opacity-70">
          {profile.title} @ {profile.org}
        </p>
        <p className="mt-5 text-[24px] font-medium uppercase tracking-[0.55em]" style={engrave}>
          {firstName}
        </p>
        <p
          className="mt-1 whitespace-nowrap text-[min(9vw,140px)] font-bold leading-[0.95] tracking-tight"
          style={engrave}
        >
          {restName.join(' ')}
        </p>
        <p className="mt-4 text-[15px] tracking-wide text-os-muted opacity-75">
          {profile.roles.join('  ·  ')}
        </p>
        <p className="mt-2.5 flex items-center gap-2 text-[13px] text-os-muted opacity-75">
          <span className="os-breathe h-2 w-2 rounded-full bg-os-online" />
          Building at {profile.org}
        </p>

        {/* Quiet metrics, same material as the wallpaper */}
        <div className="mt-7 flex items-start gap-8">
          {profile.stats.map(({ label, value }) => (
            <div key={label}>
              <p className="font-mono text-[22px] font-semibold leading-none text-os-text opacity-80">
                <StatValue value={value} reduced={reduced} />
              </p>
              <p className="mt-1.5 text-[11px] leading-tight text-os-dim">{label}</p>
            </div>
          ))}
        </div>

        {/* Tech index — plain engraved words */}
        <p className="mt-6 max-w-xl font-mono text-[11.5px] leading-relaxed text-os-dim">
          {profile.techChips.join('   ')}
        </p>
      </motion.div>
    </div>
  );
}
