"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (dot.current) {
        dot.current.style.transform = `translate3d(${e.clientX - 4}px, ${e.clientY - 4}px, 0)`;
      }
      if (ring.current) {
        ring.current.style.transform = `translate3d(${e.clientX - 16}px, ${e.clientY - 16}px, 0)`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.tagName === "SUMMARY" ||
          target.closest("a") ||
          target.closest("button") ||
          target.closest("summary") ||
          target.getAttribute("role") === "button")
      ) {
        if (ring.current) {
          ring.current.style.transform += " scale(1.5)";
          ring.current.style.borderColor = "var(--accent-2)";
          ring.current.style.backgroundColor = "rgba(0, 148, 255, 0.1)";
        }
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.tagName === "SUMMARY" ||
          target.closest("a") ||
          target.closest("button") ||
          target.closest("summary") ||
          target.getAttribute("role") === "button")
      ) {
        if (ring.current) {
          ring.current.style.borderColor = "var(--accent)";
          ring.current.style.backgroundColor = "transparent";
        }
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      <div
        ref={dot}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          background: "var(--accent)",
          borderRadius: "50%",
          zIndex: 99999,
          pointerEvents: "none",
          transition: "transform 0.04s ease-out",
        }}
      />
      <div
        ref={ring}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 32,
          height: 32,
          border: "1px solid var(--accent)",
          borderRadius: "50%",
          zIndex: 99998,
          pointerEvents: "none",
          transition: "transform 0.1s ease-out, background-color 0.15s ease, border-color 0.15s ease",
          opacity: 0.6,
        }}
      />
    </>
  );
}
