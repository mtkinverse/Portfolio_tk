import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '../store/uiSlice';
import Wallpaper from './Wallpaper';
import Desktop from './Desktop';
import WindowLayer from './window/WindowLayer';
import Taskbar from './taskbar/Taskbar';
import StartMenu from './StartMenu';
import CommandPalette from './palette/CommandPalette';
import SmallScreenGate from './SmallScreenGate';
import useGlobalHotkeys from './hooks/useGlobalHotkeys';

export default function OS() {
  const theme = useSelector(selectTheme);
  const desktopRef = useRef(null);
  useGlobalHotkeys();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <div className="fixed inset-0 overflow-hidden bg-os-base text-os-text font-os">
      <Wallpaper />

      {/* Full experience needs a desktop-sized viewport; small screens get a card */}
      <SmallScreenGate />

      <div className="hidden md:block h-full">
        {/* Window drag area: everything above the taskbar */}
        <div ref={desktopRef} className="absolute inset-x-0 top-0 bottom-14">
          <Desktop />
          <WindowLayer constraintsRef={desktopRef} />
        </div>

        <StartMenu />
        <CommandPalette />
        <Taskbar />
      </div>
    </div>
  );
}
