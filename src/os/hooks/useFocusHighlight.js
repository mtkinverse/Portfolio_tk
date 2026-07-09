import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFocusItem, clearFocusItem } from '../../store/uiSlice';

// Consumes the transient search target for this app: returns the itemId to
// highlight (auto-clears after a beat) and scrolls it into view.
export default function useFocusHighlight(appId) {
  const dispatch = useDispatch();
  const focusItem = useSelector(selectFocusItem);
  const [highlightId, setHighlightId] = useState(null);

  useEffect(() => {
    if (focusItem?.appId !== appId) return;
    const id = focusItem.itemId;
    setHighlightId(id);
    dispatch(clearFocusItem());
    // Let the window/app mount before scrolling.
    const scrollTimer = setTimeout(() => {
      document
        .querySelector(`[data-item-id="${CSS.escape(id)}"]`)
        ?.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }, 120);
    const clearTimer = setTimeout(() => setHighlightId(null), 2600);
    return () => {
      clearTimeout(scrollTimer);
      clearTimeout(clearTimer);
    };
  }, [focusItem, appId, dispatch]);

  return highlightId;
}
