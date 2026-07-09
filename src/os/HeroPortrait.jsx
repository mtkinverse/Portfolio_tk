import { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import profile from '../data/profile';

// The portrait as wallpaper material. The photo is a background-removed
// RGBA cutout, so no wall needs hiding: the figure is graded into the slate
// palette, seated on a soft accent backglow, cropped so the subject (not the
// empty headroom) fills the frame, and bottom-faded into the taskbar. It
// renders beneath the node canvas, so the graph draws across it — the same
// treatment as the engraved name.
export default function HeroPortrait() {
  const reduced = useReducedMotion();

  // Slight counter-drift against the pointer (opposite plane to the name).
  const nx = useMotionValue(0);
  const ny = useMotionValue(0);
  const sx = useSpring(nx, { stiffness: 50, damping: 20 });
  const sy = useSpring(ny, { stiffness: 50, damping: 20 });
  const dx = useTransform(sx, (v) => v * -14);
  const dy = useTransform(sy, (v) => v * -8);

  useEffect(() => {
    if (reduced) return undefined;
    const onMove = (e) => {
      nx.set(e.clientX / window.innerWidth - 0.5);
      ny.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, [nx, ny, reduced]);

  return (
    // Flex wrapper centers the figure vertically, matching the name block's
    // midline; motion transform stays on the inner element.
    <div aria-hidden className="pointer-events-none absolute inset-0 hidden select-none items-center justify-end lg:flex">
      <motion.div
        initial={reduced ? { opacity: 0 } : { opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.25 }}
        style={{
          x: dx,
          y: dy,
          // Soften the figure's lower edge into the scene.
          maskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)',
        }}
        // Square frame + bottom-anchored cover crops the transparent headroom
        // so the subject rides at the top; size capped so the figure never
        // runs into the name on narrower screens.
        // Slightly above true center: the figure reads better riding a bit
        // high against the text block and fills the upper-right space.
        className="relative -top-[5vh] mr-[3%] aspect-square h-[min(84%,36vw)]"
      >
        {/* Soft accent backglow seats the figure in the scene */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(58% 52% at 50% 34%, rgba(var(--os-wallpaper-node), 0.16), transparent 72%)',
          }}
        />
        <img
          src={profile.portrait}
          alt=""
          className="relative h-full w-full object-cover"
          style={{
            objectPosition: '50% 100%',
            filter: 'saturate(0.68) brightness(0.8) contrast(1.05)',
          }}
        />
      </motion.div>
    </div>
  );
}
