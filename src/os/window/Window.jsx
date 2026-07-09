import { memo, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { motion, useDragControls, useMotionValue, useReducedMotion } from 'framer-motion';
import {
  closeApp, destroyWindow, focusWindow, minimizeWindow, toggleMaximize, moveWindow,
} from '../../store/windowsSlice';
import { getComponent } from '../apps/registry';
import TitleBar from './TitleBar';

const spring = { type: 'spring', stiffness: 300, damping: 28, mass: 0.8 };
const clamp = (v, min, max) => Math.min(Math.max(v, min), Math.max(min, max));

// Position is driven by x/y motion values passed to `style` — framer's drag
// mutates those same values, so drag and store position never double-apply.
// Maximize is DETERMINISTIC: the transform is hard-set to 0,0 in the same
// handler that dispatches (no animation to be interrupted), so the title bar
// and close button can never end up off-screen.
function Window({ win, constraintsRef }) {
  const dispatch = useDispatch();
  const controls = useDragControls();
  const reduced = useReducedMotion();
  const x = useMotionValue(win.x);
  const y = useMotionValue(win.y);

  // Keep the transform in sync when the store moves us from outside a drag
  // (e.g. viewport-resize clamping). No-op after normal drag ends.
  useEffect(() => {
    if (!win.maximized) {
      x.set(win.x);
      y.set(win.y);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [win.x, win.y, win.maximized]);

  const handleToggleMax = () => {
    if (win.maximized) {
      x.set(win.x);
      y.set(win.y);
    } else {
      x.set(0);
      y.set(0);
    }
    dispatch(toggleMaximize(win.id));
  };

  const startDrag = (e) => {
    if (e.button !== 0) return;
    if (win.maximized) {
      // Drag-to-restore: un-maximize under the cursor and keep dragging.
      const vw = window.innerWidth;
      const ratio = clamp(e.clientX / vw, 0.05, 0.95);
      const newX = clamp(e.clientX - win.w * ratio, 0, vw - win.w);
      const newY = Math.max(e.clientY - 20, 0);
      x.set(newX);
      y.set(newY);
      dispatch(moveWindow({ id: win.id, x: newX, y: newY }));
      dispatch(toggleMaximize(win.id));
    }
    controls.start(e);
  };

  const AppComp = useMemo(() => getComponent(win.appId), [win.appId]);

  const variants = useMemo(() => {
    if (reduced) {
      return {
        closed: { opacity: 0, transition: { duration: 0.12 } },
        open: { opacity: 1, transition: { duration: 0.12 } },
        min: { opacity: 0, transition: { duration: 0.12 } },
      };
    }
    return {
      closed: { opacity: 0, scale: 0.3, transition: { duration: 0.18, ease: 'easeIn' } },
      open: { opacity: 1, scale: 1, transition: { ...spring, opacity: { duration: 0.18 } } },
      min: { opacity: 0, scale: 0.92, transition: { duration: 0.16, ease: 'easeIn' } },
    };
  }, [reduced]);

  const transformOrigin = win.origin
    ? `${win.origin.x - win.x}px ${win.origin.y - win.y}px`
    : '50% 50%';

  return (
    <motion.div
      role="dialog"
      aria-label={win.title}
      className="os-glass absolute left-0 top-0 flex flex-col overflow-hidden shadow-window"
      style={{
        x, y,
        width: win.maximized ? '100%' : win.w,
        height: win.maximized ? '100%' : win.h,
        zIndex: win.z,
        transformOrigin,
        borderRadius: win.maximized ? 0 : 12,
        pointerEvents: win.minimized ? 'none' : 'auto',
      }}
      drag
      dragControls={controls}
      dragListener={false}
      dragMomentum={false}
      dragElastic={0}
      dragConstraints={constraintsRef}
      onDragEnd={() => dispatch(moveWindow({ id: win.id, x: x.get(), y: y.get() }))}
      onPointerDownCapture={() => dispatch(focusWindow(win.id))}
      variants={variants}
      initial="closed"
      animate={win.minimized ? 'min' : 'open'}
      exit="closed"
      onAnimationComplete={(def) => {
        if (def === 'closed') dispatch(destroyWindow(win.id));
      }}
    >
      <TitleBar
        win={win}
        onDragStart={startDrag}
        onMinimize={() => dispatch(minimizeWindow(win.id))}
        onToggleMax={handleToggleMax}
        onClose={() => dispatch(closeApp(win.id))}
      />
      <div className="min-h-0 flex-1">
        <AppComp {...win.props} />
      </div>
    </motion.div>
  );
}

export default memo(Window);
