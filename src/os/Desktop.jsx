import { APPS } from './apps/appMeta';
import DesktopIcon from './DesktopIcon';
import profile from '../data/profile';

const COARSE_POINTER =
  typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;

export default function Desktop() {
  const desktopApps = APPS.filter((a) => a.showOnDesktop);

  return (
    <div className="absolute inset-0">
      {/* The visible identity lives in the wallpaper (HeroName/HeroPortrait);
          this carries the accessible heading. */}
      <h1 className="sr-only">
        {profile.name} — {profile.title} at {profile.org}
      </h1>

      {/* Folder icons — classic left column, wraps to a second column if needed */}
      <div className="absolute left-5 top-6 bottom-6 z-10 flex flex-col flex-wrap content-start gap-1.5">
        {desktopApps.map((app) => (
          <DesktopIcon key={app.id} app={app} />
        ))}
      </div>

      {/* Gentle onboarding hint */}
      <p className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 select-none text-[12px] text-os-dim">
        {COARSE_POINTER ? 'Tap a folder to open it' : 'Double-click a folder to open it'}
        &ensp;·&ensp;
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
