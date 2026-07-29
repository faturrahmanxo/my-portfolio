import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-10 opacity-30"
      style={{
        background: `radial-gradient(
          600px circle at ${mouse.x}px ${mouse.y}px,
          rgba(59,130,246,.20),
          transparent 40%
        )`,
      }}
    />
  );
}
