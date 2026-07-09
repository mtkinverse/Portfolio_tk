import { useDispatch } from 'react-redux';
import { focusWindow, minimizeWindow } from '../../store/windowsSlice';
import { getApp } from '../apps/appMeta';
import { getIcon } from '../../config/iconMap';

// OS-like toggle: active window minimizes, anything else focuses/restores.
export default function TaskbarItem({ win, isActive }) {
  const dispatch = useDispatch();
  const meta = getApp(win.appId);
  const Icon = meta ? getIcon(meta.iconKey) : null;

  const onClick = () => {
    if (isActive && !win.minimized) dispatch(minimizeWindow(win.id));
    else dispatch(focusWindow(win.id));
  };

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`${win.title}${win.minimized ? ' (minimized)' : ''}`}
      className={`relative flex h-9 items-center gap-2 rounded-lg px-3 transition-colors duration-150 ${
        win.minimized ? 'opacity-55' : ''
      } ${isActive ? 'bg-[var(--os-glass)]' : 'hover:bg-[var(--os-glass)]'}`}
    >
      {Icon && <Icon size={13} style={{ color: meta.tint }} aria-hidden />}
      <span className="hidden max-w-[110px] truncate text-[12px] text-os-muted xl:inline">
        {win.title}
      </span>
      <span
        aria-hidden
        className={`absolute bottom-0.5 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-os-accent transition-all duration-200 ${
          isActive ? 'w-5' : 'w-0'
        }`}
      />
    </button>
  );
}
