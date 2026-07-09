import { useDispatch } from 'react-redux';
import { motion, useReducedMotion } from 'framer-motion';
import { FaFolder } from 'react-icons/fa';
import { openApp } from '../store/windowsSlice';
import { getIcon } from '../config/iconMap';

// Desktop folder. Double-click (or Enter/Space) opens the app; the icon's
// center is captured as the window's animation origin.
export default function DesktopIcon({ app }) {
  const dispatch = useDispatch();
  const reduced = useReducedMotion();
  const Badge = getIcon(app.iconKey);

  const open = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    dispatch(
      openApp(app.id, {
        origin: { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 },
      })
    );
  };

  return (
    <motion.button
      type="button"
      onDoubleClick={open}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          open(e);
        }
      }}
      whileHover={reduced ? undefined : { scale: 1.05 }}
      whileTap={reduced ? undefined : { scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 400, damping: 24 }}
      className="group flex w-24 select-none flex-col items-center gap-1.5 rounded-xl p-2
                 hover:bg-[var(--os-glass)] focus-visible:bg-[var(--os-glass)]"
      aria-label={`Open ${app.title}`}
    >
      <span className="relative block">
        <FaFolder size={46} style={{ color: app.tint }} className="drop-shadow-md" />
        {Badge && (
          <Badge
            size={15}
            className="absolute inset-0 m-auto translate-y-[3px] text-os-base opacity-80"
          />
        )}
      </span>
      <span className="text-[12px] leading-tight text-os-text/90 group-hover:text-os-text">
        {app.title}
      </span>
    </motion.button>
  );
}
