import { useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';
import { openApp } from '../../store/windowsSlice';
import { setPalette, setFocusItem, selectPaletteOpen, selectPaletteSeed } from '../../store/uiSlice';
import { getApp } from '../apps/appMeta';
import { getIcon } from '../../config/iconMap';
import useSearch from '../search/useSearch';

export default function CommandPalette() {
  const dispatch = useDispatch();
  const open = useSelector(selectPaletteOpen);
  const seed = useSelector(selectPaletteSeed);
  const reduced = useReducedMotion();
  const inputRef = useRef(null);
  const [query, setQuery] = useState('');
  const [cursor, setCursor] = useState(0);
  const results = useSearch(query);

  // Group for display while keeping a flat list for keyboard navigation.
  const grouped = useMemo(() => {
    const groups = new Map();
    results.forEach((rec, flatIndex) => {
      if (!groups.has(rec.type)) groups.set(rec.type, []);
      groups.get(rec.type).push({ rec, flatIndex });
    });
    return [...groups.entries()];
  }, [results]);

  useEffect(() => {
    if (open) {
      setQuery(seed ?? '');
      setCursor(0);
      // Focus after the panel mounts.
      requestAnimationFrame(() => inputRef.current?.focus());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => setCursor(0), [query]);

  const run = (rec) => {
    dispatch(setPalette(false));
    dispatch(openApp(rec.appId));
    if (rec.itemId) dispatch(setFocusItem({ appId: rec.appId, itemId: rec.itemId }));
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setCursor((c) => Math.min(c + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setCursor((c) => Math.max(c - 1, 0));
    } else if (e.key === 'Enter' && results[cursor]) {
      e.preventDefault();
      run(results[cursor]);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            aria-label="Close search"
            onClick={() => dispatch(setPalette(false))}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.14 }}
            className="absolute inset-0 z-[100015] cursor-default bg-black/30"
          />
          {/* Centering lives on a plain wrapper — motion's transform would
              clobber a Tailwind -translate-x-1/2 on the animated element. */}
          <div className="pointer-events-none absolute inset-x-4 top-[16%] z-[100020] flex justify-center">
          <motion.div
            role="dialog"
            aria-label="Search everything"
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: -10, scale: 0.99 }}
            animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.99 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className="os-glass pointer-events-auto w-[560px] max-w-full overflow-hidden rounded-2xl shadow-window"
          >
            <label className="flex items-center gap-3 border-b border-os-hairline px-4 py-3.5">
              <FaSearch size={14} className="shrink-0 text-os-dim" aria-hidden />
              <input
                ref={inputRef}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Search projects, skills, experience…  e.g. Docker"
                aria-label="Search everything"
                className="w-full bg-transparent text-[14px] text-os-text placeholder:text-os-dim focus:outline-none"
              />
              <kbd className="shrink-0 rounded border border-os-hairline px-1.5 py-0.5 font-mono text-[10px] text-os-dim">
                Esc
              </kbd>
            </label>

            <div className="os-scroll max-h-[46vh] overflow-y-auto p-2">
              {query.trim() === '' ? (
                <p className="px-3 py-6 text-center text-[12px] text-os-dim">
                  Type to search everything on this desktop — try a technology like{' '}
                  <span className="font-mono text-os-muted">Docker</span> or{' '}
                  <span className="font-mono text-os-muted">RAG</span>.
                </p>
              ) : results.length === 0 ? (
                <p className="px-3 py-6 text-center text-[12px] text-os-dim">
                  No matches for “{query}”. Try a broader term.
                </p>
              ) : (
                grouped.map(([type, items]) => (
                  <div key={type} className="mb-1.5">
                    <p className="px-3 pb-1 pt-2 text-[10px] font-semibold uppercase tracking-wider text-os-dim">
                      {type}
                    </p>
                    {items.map(({ rec, flatIndex }) => {
                      const meta = getApp(rec.appId);
                      const Icon = meta ? getIcon(meta.iconKey) : null;
                      const active = flatIndex === cursor;
                      return (
                        <button
                          key={`${rec.appId}-${rec.itemId ?? rec.title}`}
                          type="button"
                          onClick={() => run(rec)}
                          onMouseEnter={() => setCursor(flatIndex)}
                          className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left ${
                            active ? 'bg-[var(--os-glass)]' : ''
                          }`}
                        >
                          {Icon && (
                            <Icon size={13} style={{ color: meta.tint }} className="shrink-0" aria-hidden />
                          )}
                          <span className="min-w-0 flex-1">
                            <span className="block truncate text-[13px] text-os-text">{rec.title}</span>
                            <span className="block truncate text-[11px] text-os-dim">{rec.subtitle}</span>
                          </span>
                          {active && (
                            <kbd className="shrink-0 rounded border border-os-hairline px-1.5 py-0.5 font-mono text-[10px] text-os-dim">
                              ↵
                            </kbd>
                          )}
                        </button>
                      );
                    })}
                  </div>
                ))
              )}
            </div>
          </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
