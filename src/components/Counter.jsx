import { animate, motion, useInView, useMotionValue } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function Counter({
  from = 0,
  to,
  duration = 2,
  suffix = "",
  decimals = 0,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const count = useMotionValue(from);
  const [display, setDisplay] = useState(from);

  useEffect(() => {
    const unsubscribe = count.on("change", (latest) => {
      if (decimals > 0) {
        setDisplay(Number(latest).toFixed(decimals));
      } else {
        setDisplay(Math.floor(latest));
      }
    });

    return unsubscribe;
  }, [count, decimals]);

  useEffect(() => {
    if (isInView) {
      animate(count, to, {
        duration,
      });
    }
  }, [isInView, count, to, duration]);

  return (
    <motion.span ref={ref}>
      {display}
      {suffix}
    </motion.span>
  );
}
