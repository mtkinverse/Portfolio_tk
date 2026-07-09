import { FaTimes, FaRegSquare, FaMinus } from 'react-icons/fa';
import { getApp } from '../apps/appMeta';
import { getIcon } from '../../config/iconMap';

const btn =
  'flex h-7 w-9 items-center justify-center rounded-md text-os-muted ' +
  'hover:bg-[var(--os-glass)] hover:text-os-text transition-colors duration-150';

// The bar is the window's only drag handle. Caption buttons stop pointerdown
// propagation so pressing them never begins a drag.
export default function TitleBar({ win, onDragStart, onMinimize, onToggleMax, onClose }) {
  const meta = getApp(win.appId);
  const Icon = meta ? getIcon(meta.iconKey) : null;

  return (
    <div
      className="flex h-10 shrink-0 select-none items-center gap-2 border-b border-os-hairline px-3"
      style={{ touchAction: 'none', cursor: win.maximized ? 'default' : 'grab' }}
      onPointerDown={onDragStart}
      onDoubleClick={onToggleMax}
    >
      {Icon && <Icon size={13} style={{ color: meta.tint }} aria-hidden />}
      <span className="flex-1 truncate text-[13px] font-medium text-os-muted">{win.title}</span>
      <div
        className="flex items-center gap-0.5"
        onPointerDown={(e) => e.stopPropagation()}
        onDoubleClick={(e) => e.stopPropagation()}
      >
        <button type="button" aria-label="Minimize" onClick={onMinimize} className={btn}>
          <FaMinus size={10} />
        </button>
        <button
          type="button"
          aria-label={win.maximized ? 'Restore' : 'Maximize'}
          onClick={onToggleMax}
          className={btn}
        >
          <FaRegSquare size={10} />
        </button>
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className={`${btn} hover:!bg-red-500/85 hover:!text-white`}
        >
          <FaTimes size={12} />
        </button>
      </div>
    </div>
  );
}
