import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const mousePositionRef = useRef({ x: 0, y: 0 });

  const springConfig = { damping: 25, stiffness: 300 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  // Use event delegation instead of attaching listeners to each element
  const handleMouseOver = useCallback((e) => {
    const target = e.target.closest('a, button, [data-cursor="pointer"], input, textarea');
    if (target) {
      setIsHovering(true);
      setCursorText(target.getAttribute('data-cursor-text') || '');
    }
  }, []);

  const handleMouseOut = useCallback((e) => {
    const target = e.target.closest('a, button, [data-cursor="pointer"], input, textarea');
    if (target) {
      setIsHovering(false);
      setCursorText('');
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePositionRef.current = { x: e.clientX, y: e.clientY };
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    
    // Event delegation - single listener on document
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseout', handleMouseOut, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [cursorX, cursorY, handleMouseOver, handleMouseOut]);

  // Hide on mobile/touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: cursorX, y: cursorY }}
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 0.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
      >
        <div
          className="relative -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
          style={{
            width: isHovering ? 8 : 12,
            height: isHovering ? 8 : 12,
          }}
        />
      </motion.div>

      {/* Cursor ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ x: cursorX, y: cursorY }}
        animate={{
          scale: isClicking ? 0.9 : isHovering ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <div
          className="relative -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/50"
          style={{
            width: isHovering ? 60 : 40,
            height: isHovering ? 60 : 40,
            transition: 'width 0.3s, height 0.3s',
          }}
        >
          {cursorText && (
            <span className="absolute inset-0 flex items-center justify-center text-[10px] text-white font-medium">
              {cursorText}
            </span>
          )}
        </div>
      </motion.div>

      {/* Removed trailing particles for performance */}
    </>
  );
};

export default CustomCursor;