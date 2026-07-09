import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { APPS } from './apps/appMeta';
import { openApp } from '../store/windowsSlice';
import { setStart, selectStartOpen } from '../store/uiSlice';
import { getIcon } from '../config/iconMap';
import profile from '../data/profile';

const GROUPS = [...new Set(APPS.map((a) => a.group))];

export default function StartMenu() {
  const dispatch = useDispatch();
  const open = useSelector(selectStartOpen);
  const reduced = useReducedMotion();

  const launch = (app) => (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    dispatch(setStart(false));
    dispatch(
      openApp(app.id, {
        origin: { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 },
      })
    );
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Click-away backdrop */}
          <button
            type="button"
            aria-label="Close Start menu"
            onClick={() => dispatch(setStart(false))}
            className="absolute inset-0 z-[100005] cursor-default"
          />
          <motion.div
            role="menu"
            aria-label="Start"
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.98 }}
            animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className="os-glass absolute bottom-16 left-3 z-[100010] w-[340px] rounded-2xl p-4 shadow-window"
          >
            <div className="mb-3 flex items-center gap-3 border-b border-os-hairline pb-3">
              <img
                src={profile.avatar}
                alt=""
                className="h-11 w-11 rounded-lg border border-os-hairline object-cover"
              />
              <div className="min-w-0">
                <p className="truncate text-[13px] font-semibold">{profile.name}</p>
                <p className="truncate text-[11px] text-os-muted">
                  {profile.title} @ {profile.org}
                </p>
              </div>
            </div>

            {GROUPS.map((group) => (
              <div key={group} className="mb-2 last:mb-0">
                <p className="mb-1 px-1 text-[10px] font-semibold uppercase tracking-wider text-os-dim">
                  {group}
                </p>
                <div className="grid grid-cols-2 gap-1">
                  {APPS.filter((a) => a.group === group).map((app) => {
                    const Icon = getIcon(app.iconKey);
                    return (
                      <button
                        key={app.id}
                        type="button"
                        role="menuitem"
                        onClick={launch(app)}
                        className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-left transition-colors duration-150 hover:bg-[var(--os-glass)]"
                      >
                        {Icon && <Icon size={14} style={{ color: app.tint }} aria-hidden />}
                        <span className="text-[12px] text-os-text">{app.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
