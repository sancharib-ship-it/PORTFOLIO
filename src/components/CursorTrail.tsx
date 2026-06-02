import { useEffect, useRef } from "react";

const DOT_COUNT = 5;

export const CursorTrail = () => {
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);
  const target = useRef({ x: -100, y: -100 });
  const positions = useRef(
    Array.from({ length: DOT_COUNT }, () => ({ x: -100, y: -100 }))
  );

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMove);

    let raf = 0;
    const tick = () => {
      let prevX = target.current.x;
      let prevY = target.current.y;
      positions.current.forEach((pos, i) => {
        pos.x += (prevX - pos.x) * (0.35 - i * 0.04);
        pos.y += (prevY - pos.y) * (0.35 - i * 0.04);
        const el = dotsRef.current[i];
        if (el) {
          el.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
        }
        prevX = pos.x;
        prevY = pos.y;
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
    >
      {Array.from({ length: DOT_COUNT }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (dotsRef.current[i] = el)}
          className="absolute left-0 top-0 rounded-full bg-cherry"
          style={{
            width: `${10 - i * 1.4}px`,
            height: `${10 - i * 1.4}px`,
            opacity: 1 - i * 0.16,
          }}
        />
      ))}
    </div>
  );
};

export default CursorTrail;
