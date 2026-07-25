import { useState } from "react";
import {
  BriefcaseBusiness,
  Users,
  Camera,
  Mic,
  ChevronRight,
} from "lucide-react";

import { AnimatePresence, motion } from "motion/react";

const experiences = [
  {
    id: 1,
    title: "Media Coordinator",
    company: "HIMSIKA",
    period: "2025 - Present",
    description: [
      "Assist in coordinating the Media Department to ensure smooth collaboration and task execution.",
      "Contribute to the management and maintenance of the organization's official website.",
      "Support the planning and publication of social media content to strengthen the organization's online presence.",
      "Assist in event documentation and the creation of visual branding materials for organizational activities.",
    ],
    skills: [
      "Communication",
      "Website",
      "Design",
      "Documentation",
      "Team Coordination",
    ],
  },
  {
    id: 2,
    title: "Publication, Documentation & Decoration",
    company: "FCUP 2025",
    period: "Committee",
    description: [
      "Designed promotional media before the event.",
      "Managed documentation archives until the event concludes.",
      "Handled event documentation and publicity.",
    ],
    skills: ["Design", "Communication", "Documentation"],
  },
  {
    id: 3,
    title: "Publication, Documentation & Decoration",
    company: "DORAA 2025",
    period: "Committee",
    description: [
      "Designed promotional media before the event.",
      "Managed documentation archives until the event concludes.",
      "Handled event documentation and publicity.",
    ],
    skills: ["Design", "Communication", "Documentation"],
  },
  {
    id: 4,
    title: "Moderator",
    company: "SIM 2025",
    period: "Committee",
    description: [
      "Moderated seminar sessions professionally.",
      "Coordinated speakers and event committee.",
      "Maintained audience interaction throughout the seminar.",
    ],
    skills: ["Public Speaking", "Communication", "Leadership"],
  },
];

export default function ExperiencePage() {
  const [selected, setSelected] = useState(experiences[0]);

  const Icon = selected.icon;

  return (
    <section
      id="experience"
      className="relative min-h-screen pt-30 pb-24 font-primary"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mb-10" data-aos="fade-up" data-aos-duration="1000">
          <h3 className="text-4xl sm:text-5xl font-bold font-title flex items-center gap-3 bg-linear-to-r from-blue-400 via-primary to-blue-400 bg-clip-text text-transparent">
            Experience
          </h3>
          <p className="text-sm font-medium  max-w-2xl text-gray-400 mt-5">
            I always want to seek out new experiences.
          </p>
        </div>
        {/* ================= Content ================= */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-20 items-start">
          {/* ================= LEFT ================= */}
          <div
            className="relative pl-8"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* Timeline */}
            <div className="absolute left-0 top-0 bottom-0 w-px overflow-hidden">
              {/* Garis utama */}
              <div className="absolute inset-0 bg-white/10" />

              {/* Cahaya berjalan */}
              <motion.div
                className="absolute left-0 w-px h-40"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent, #22d3ee, transparent)",
                  filter: "drop-shadow(0 0 8px #22d3ee)",
                }}
                initial={{
                  top: "-160px",
                }}
                animate={{
                  top: "100%",
                }}
                transition={{
                  duration: 2.8,
                  ease: "linear",
                  repeat: Infinity,
                  repeatDelay: 0,
                }}
              />
            </div>

            <div className="flex flex-col gap-6">
              {experiences.map((item) => {
                const active = selected.id === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => setSelected(item)}
                    className={`
              relative flex items-center gap-5
              rounded-2xl px-4 py-3
              transition-all duration-300
              ${active ? "bg-white/5" : "hover:bg-white/5"}
            `}
                  >
                    {/* Active Glow */}
                    {active && (
                      <motion.div
                        layoutId="activeExperience"
                        className="absolute inset-0 rounded-2xl border border-primary/20 bg-primary/5"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 28,
                        }}
                      />
                    )}

                    {/* Company */}
                    <span
                      className={`
                      relative z-10
                      text-lg font-semibold
                      transition-all duration-300
                      ${
                        active
                          ? "text-white"
                          : "text-gray-400 group-hover:text-white"
                      }
                    `}
                    >
                      {item.company}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-card/40 backdrop-blur-sm p-7 lg:p-8"
            >
              {/* Decorative */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Horizontal */}
                <div className="absolute top-20 left-0 h-px w-full bg-white/5" />
                <div className="absolute top-44 left-0 h-px w-full bg-white/5" />
                <div className="absolute bottom-20 left-0 h-px w-full bg-white/5" />

                {/* Vertical */}
                <div className="absolute left-28 top-0 h-full w-px bg-white/5" />
                <div className="absolute right-24 top-0 h-full w-px bg-white/5" />

                {/* Glow */}
                <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/10 blur-[100px]" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Period */}
                <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-primary">
                  {selected.period}
                </span>

                {/* Title */}
                <h2 className="mt-6 text-3xl lg:text-4xl font-bold leading-tight">
                  {selected.title}
                </h2>

                <p className="mt-2 text-lg text-primary">@{selected.company}</p>

                {/* Location */}
                <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
                  <span>Karawang, Indonesia</span>
                </div>

                {/* Divider */}
                <div className="my-8 h-px bg-gradient-to-r from-primary/40 via-white/10 to-transparent" />

                {/* Description */}
                <ul className="space-y-4">
                  {selected.description.map((item, index) => (
                    <li key={index} className="flex gap-3">
                      <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />

                      <span className="text-base leading-8 text-gray-400">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Skills */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {selected.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
              rounded-full
              border border-white/10
              bg-white/5
              px-4 py-2
              text-xs
              text-gray-300
              transition-all
              duration-300
              hover:border-primary/40
              hover:bg-primary/10
              hover:text-primary
            "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
