import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { togglePalette, setPalette, setStart } from '../../store/uiSlice';
import { closeApp, selectTopmostId } from '../../store/windowsSlice';

const isTyping = () => {
  const el = document.activeElement;
  return el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable);
};

// One root-level listener for the whole OS.
export default function useGlobalHotkeys() {
  const dispatch = useDispatch();
  const store = useStore();

  useEffect(() => {
    const onKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        dispatch(togglePalette());
        return;
      }
      if (e.key === 'Escape') {
        const { ui } = store.getState();
        if (ui.paletteOpen) {
          dispatch(setPalette(false));
        } else if (ui.startOpen) {
          dispatch(setStart(false));
        } else if (!isTyping()) {
          const topmost = selectTopmostId(store.getState());
          if (topmost) dispatch(closeApp(topmost));
        }
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [dispatch, store]);
}
