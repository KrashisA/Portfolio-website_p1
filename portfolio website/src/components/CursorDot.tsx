import { useEffect, useRef } from 'react';

/**
 * Global cursor-following rec indicator dot.
 * Renders fixed over the entire viewport; never interferes with pointer events.
 */
export const CursorDot = () => {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    const onMove = (e: MouseEvent) => {
      // Offset by half the dot size (w-6 = 24px) to centre it on the cursor
      dot.style.left = `${e.clientX - 12}px`;
      dot.style.top = `${e.clientY - 12}px`;
      dot.style.opacity = '1';
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div
      ref={dotRef}
      className="fixed pointer-events-none z-[9999] w-6 h-6 rounded-full border border-[#ff3030]/50 bg-[rgba(255, 48, 48, 0)] flex items-center justify-center shadow-[0_0_10px_rgba(255,48,48,0.4)] opacity-0 transition-opacity duration-300"
      aria-hidden="true"
    >
      <span className="w-1.5 h-1.5 bg-[#ff3030] rounded-full animate-pulse shadow-[0_0_6px_#ff3030]" />
    </div>
  );
};
