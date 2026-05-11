"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const down = () => setClicking(true);
    const up = () => setClicking(false);
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.documentElement.addEventListener("mouseleave", leave);
    document.documentElement.addEventListener("mouseenter", enter);

    // Detect hover on interactive elements
    const addHover = () => {
      document.querySelectorAll("a, button, [role='button']").forEach((el) => {
        el.addEventListener("mouseenter", () => setHovering(true));
        el.addEventListener("mouseleave", () => setHovering(false));
      });
    };
    addHover();
    const observer = new MutationObserver(addHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.documentElement.removeEventListener("mouseleave", leave);
      document.documentElement.removeEventListener("mouseenter", enter);
      observer.disconnect();
    };
  }, []);

  // Lag trail effect
  useEffect(() => {
    let raf: number;
    const animate = () => {
      setTrail((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.12,
        y: prev.y + (pos.y - prev.y) * 0.12,
      }));
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [pos]);

  if (typeof window === "undefined") return null;

  return (
    <>
      {/* Hide default cursor */}
      <style>{`
        * { cursor: none !important; }
      `}</style>

      {/* Main cursor dot */}
      <div
        className="pointer-events-none fixed z-[99999] transition-opacity duration-300"
        style={{
          left: pos.x,
          top: pos.y,
          transform: "translate(-50%, -50%)",
          opacity: visible ? 1 : 0,
        }}
      >
        <div
          className={`rounded-full bg-lambo-gold transition-all duration-150 ${
            clicking ? "w-2 h-2" : hovering ? "w-3 h-3" : "w-1.5 h-1.5"
          }`}
        />
      </div>

      {/* Trailing ring */}
      <div
        className="pointer-events-none fixed z-[99998] transition-opacity duration-300"
        style={{
          left: trail.x,
          top: trail.y,
          transform: "translate(-50%, -50%)",
          opacity: visible ? 1 : 0,
        }}
      >
        <div
          className={`border border-lambo-gold/40 rounded-full transition-all duration-200 ${
            clicking
              ? "w-6 h-6 border-lambo-gold/80"
              : hovering
              ? "w-10 h-10 border-lambo-gold/60"
              : "w-8 h-8"
          }`}
        />
      </div>
    </>
  );
}
