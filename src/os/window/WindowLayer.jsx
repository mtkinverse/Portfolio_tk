import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { selectAllWindows } from '../../store/windowsSlice';
import Window from './Window';

// Windows marked `closing` are removed from this list; AnimatePresence keeps
// them mounted until their exit animation finishes (two-phase close).
export default function WindowLayer({ constraintsRef }) {
  const windows = useSelector(selectAllWindows);
  const visible = windows.filter((w) => !w.closing);

  return (
    <AnimatePresence>
      {visible.map((w) => (
        <Window key={w.id} win={w} constraintsRef={constraintsRef} />
      ))}
    </AnimatePresence>
  );
}
