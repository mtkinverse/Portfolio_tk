import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaSearch, FaRegMoon, FaRegSun, FaThLarge } from 'react-icons/fa';
import { selectAllWindows, selectTopmostId } from '../../store/windowsSlice';
import { toggleStart, togglePalette, toggleTheme, selectTheme, selectStartOpen } from '../../store/uiSlice';
import TaskbarItem from './TaskbarItem';

function Clock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="select-none text-right leading-tight">
      <p className="font-mono text-[12px] text-os-text">
        {now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </p>
      <p className="text-[10px] text-os-dim">
        {now.toLocaleDateString([], { month: 'short', day: 'numeric' })}
      </p>
    </div>
  );
}

const chromeBtn =
  'flex h-9 items-center justify-center rounded-lg px-2.5 text-os-muted ' +
  'transition-colors duration-150 hover:bg-[var(--os-glass)] hover:text-os-text';

export default function Taskbar() {
  const dispatch = useDispatch();
  const windows = useSelector(selectAllWindows);
  const topmostId = useSelector(selectTopmostId);
  const theme = useSelector(selectTheme);
  const startOpen = useSelector(selectStartOpen);
  const running = windows.filter((w) => !w.closing);

  return (
    <div className="os-glass absolute inset-x-0 bottom-0 z-[100000] flex h-14 items-center gap-2 border-x-0 border-b-0 px-3">
      <button
        type="button"
        onClick={() => dispatch(toggleStart())}
        aria-label="Start"
        aria-expanded={startOpen}
        className={`${chromeBtn} ${startOpen ? 'bg-[var(--os-glass)] text-os-accentSoft' : ''}`}
      >
        <FaThLarge size={15} />
      </button>

      <button type="button" onClick={() => dispatch(togglePalette())} className={`${chromeBtn} gap-2`}>
        <FaSearch size={12} />
        <span className="hidden text-[12px] lg:inline">Search</span>
        <kbd className="hidden rounded border border-os-hairline px-1.5 py-0.5 font-mono text-[10px] text-os-dim lg:inline">
          Ctrl K
        </kbd>
      </button>

      <div className="mx-1 h-6 w-px bg-[var(--os-hairline)]" aria-hidden />

      <div className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto">
        {running.map((w) => (
          <TaskbarItem key={w.id} win={w} isActive={w.id === topmostId} />
        ))}
      </div>

      <button
        type="button"
        onClick={() => dispatch(toggleTheme())}
        aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
        className={chromeBtn}
      >
        {theme === 'dark' ? <FaRegSun size={14} /> : <FaRegMoon size={14} />}
      </button>

      <Clock />
    </div>
  );
}
