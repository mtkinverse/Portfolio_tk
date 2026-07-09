import { APPS } from './apps/appMeta';
import DesktopIcon from './DesktopIcon';
import HeroWidgets from './HeroWidgets';

export default function Desktop() {
  const desktopApps = APPS.filter((a) => a.showOnDesktop);

  return (
    <div className="absolute inset-0">
      {/* Folder icons — classic left column, wraps to a second column if needed */}
      <div className="absolute left-5 top-6 bottom-6 flex flex-col flex-wrap content-start gap-1.5">
        {desktopApps.map((app) => (
          <DesktopIcon key={app.id} app={app} />
        ))}
      </div>

      <HeroWidgets />

      {/* Gentle onboarding hint */}
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 select-none text-[12px] text-os-dim">
        Double-click a folder to open it&ensp;·&ensp;
        <kbd className="rounded border border-os-hairline bg-[var(--os-glass)] px-1.5 py-0.5 font-mono text-[10px]">
          Ctrl
        </kbd>
        +
        <kbd className="rounded border border-os-hairline bg-[var(--os-glass)] px-1.5 py-0.5 font-mono text-[10px]">
          K
        </kbd>
        &ensp;to search everything
      </p>
    </div>
  );
}
