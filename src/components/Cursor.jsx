import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const enter = () => setHover(true);
    const leave = () => setHover(false);

    window.addEventListener("mousemove", move);

    const targets = document.querySelectorAll(
      "button, a, input, textarea, [data-cursor]",
    );

    targets.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);

      targets.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[99999] h-2 w-2 rounded-full bg-primary"
        animate={{
          x: mouse.x - 4,
          y: mouse.y - 4,
        }}
        transition={{
          type: "spring",
          stiffness: 900,
          damping: 45,
        }}
      />

      {/* Ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[99998] rounded-full border border-primary/60 shadow-[0_0_30px_rgba(34,211,238,0.35)]"
        animate={{
          x: mouse.x - (hover ? 28 : 18),
          y: mouse.y - (hover ? 28 : 18),
          width: hover ? 56 : 36,
          height: hover ? 56 : 36,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 28,
        }}
      />
    </>
  );
}
