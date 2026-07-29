import { useEffect, useRef } from "react";
import { Icon } from "@iconify/react";

const skills = [
  { name: "React", icon: "logos:react" },
  { name: "Canva", icon: "lineicons:canva" },
  { name: "Vite", icon: "material-icon-theme:vite" },
  { name: "Alight Motion", icon: "arcticons:alight-motion" },
  { name: "JavaScript", icon: "logos:javascript" },
  { name: "Figma", icon: "devicon:figma" },
  { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
  { name: "HTML5", icon: "material-icon-theme:html" },
  { name: "MySQL", icon: "logos:mysql" },
  { name: "CSS3", icon: "skill-icons:css" },
  { name: "Python", icon: "devicon:python" },
  { name: "Bootstrap", icon: "devicon:bootstrap" },
];

function SkillCard({ skill }) {
  return (
    <div className="shrink-0 mr-10">
      <div
        className="
          group
          flex
          flex-col
          items-center
          justify-center
          w-26
          h-26
          gap-2
          border
          dark:border-slate-700
          border-border/30
          rounded-lg
          px-6
          py-5
          transition-transform
          duration-300
          hover:scale-105
          hover:border-cyan-400
        "
      >
        <Icon icon={skill.icon} width={40} height={40} />

        <span className="text-sm font-semibold text-muted-foreground dark:group-hover:text-white group-hover:text-muted">
          {skill.name}
        </span>
      </div>
    </div>
  );
}

export default function SkillList() {
  const trackRef = useRef(null);
  const animationRef = useRef();
  const paused = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Tunggu layout selesai
    requestAnimationFrame(() => {
      let x = 0;

      // Pixel / detik
      const speed = 100;

      // Hitung sekali saja
      const resetPoint = track.scrollWidth / 2;

      let previous = performance.now();

      const animate = (now) => {
        const delta = (now - previous) / 1000;
        previous = now;

        if (!paused.current) {
          x -= speed * delta;

          if (-x >= resetPoint) {
            x += resetPoint;
          }

          track.style.transform = `translate3d(${x}px,0,0)`;
        }

        animationRef.current = requestAnimationFrame(animate);
      };

      animationRef.current = requestAnimationFrame(animate);
    });

    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <div className="mt-20" data-aos="fade-up" data-aos-duration="500">
      <div className="relative overflow-x-hidden overflow-y-visible py-4">
        {/* Fade kiri */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r dark:from-slate-950/10 from-white/10 to-transparent z-20" />

        {/* Fade kanan */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l dark:from-slate-950/10 from-white/10  to-transparent z-20" />

        <div className="">
          <div
            ref={trackRef}
            className="
              flex
              w-max
              will-change-transform
              transform-gpu
              select-none
              text-center
              text-sm
            "
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            {[...skills, ...skills].map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
