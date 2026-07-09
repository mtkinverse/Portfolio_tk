import { memo, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import {
  motion, useDragControls, useMotionValue, animate, useReducedMotion,
} from 'framer-motion';
import {
  closeApp, destroyWindow, focusWindow, minimizeWindow, toggleMaximize, moveWindow,
} from '../../store/windowsSlice';
import { getComponent } from '../apps/registry';
import TitleBar from './TitleBar';

const spring = { type: 'spring', stiffness: 300, damping: 28, mass: 0.8 };

// Position is driven by x/y motion values passed to `style` — framer's drag
// mutates those same values, so drag and store position never double-apply.
// The open/close scale grows from the clicked folder icon via transformOrigin.
function Window({ win, constraintsRef }) {
  const dispatch = useDispatch();
  const controls = useDragControls();
  const reduced = useReducedMotion();
  const x = useMotionValue(win.x);
  const y = useMotionValue(win.y);

  // Maximize ⇄ restore glides between the corner and the stored position.
  useEffect(() => {
    const to = win.maximized ? { x: 0, y: 0 } : { x: win.x, y: win.y };
    const ax = animate(x, to.x, spring);
    const ay = animate(y, to.y, spring);
    return () => { ax.stop(); ay.stop(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [win.maximized]);

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
      drag={!win.maximized}
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
        onDragStart={(e) => {
          if (e.button === 0 && !win.maximized) controls.start(e);
        }}
        onMinimize={() => dispatch(minimizeWindow(win.id))}
        onToggleMax={() => dispatch(toggleMaximize(win.id))}
        onClose={() => dispatch(closeApp(win.id))}
      />
      <div className="min-h-0 flex-1">
        <AppComp {...win.props} />
      </div>
    </motion.div>
  );
}

export default memo(Window);
