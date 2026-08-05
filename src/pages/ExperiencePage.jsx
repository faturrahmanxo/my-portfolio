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
      "Improved the organization's digital presence by managing website updates and supporting consistent social media publication.",
      "Coordinated media team activities to ensure design, documentation, and publication tasks were completed on schedule.",
      "Collaborated with committee members using effective communication, task planning, and content management workflows.",
    ],
    skills: [
      "Communication",
      "Website Management",
      "Content Management",
      "Design",
      "Documentation",
      "Team Coordination",
    ],
  },

  {
    id: 2,
    title: "Publication, Documentation & Decoration",
    company: "EDUFAIR 2026",
    period: "Committee",
    description: [
      "Produced promotional materials that supported event awareness before the program.",
      "Maintained organized documentation and media archives throughout the event lifecycle.",
      "Executed event documentation and publication by collaborating with the committee and following the event timeline.",
    ],
    skills: [
      "Graphic Design",
      "Documentation",
      "Visual Branding",
      "Communication",
    ],
  },

  {
    id: 3,
    title: "Publication, Documentation & Decoration",
    company: "FCUP 2025",
    period: "Committee",
    description: [
      "Designed promotional assets to increase participant engagement before the competition.",
      "Captured and organized event documentation for publication and future organizational archives.",
      "Supported publicity activities by creating visual content and coordinating with the event committee.",
    ],
    skills: [
      "Graphic Design",
      "Documentation",
      "Communication",
      "Visual Branding",
    ],
  },

  {
    id: 4,
    title: "Publication, Documentation & Decoration",
    company: "DORAA 2025",
    period: "Committee",
    description: [
      "Developed promotional designs that strengthened the event's visual identity.",
      "Managed photo and video documentation to ensure complete and organized event records.",
      "Worked closely with committee members to deliver publication materials before and during the event.",
    ],
    skills: ["Graphic Design", "Documentation", "Communication", "Teamwork"],
  },

  {
    id: 5,
    title: "Publication, Documentation & Decoration",
    company: "REVOIST 5.0",
    period: "Committee",
    description: [
      "Created promotional media to support event marketing and participant outreach.",
      "Documented key event activities and maintained structured media archives.",
      "Collaborated with the publication team to ensure consistent branding across event materials.",
    ],
    skills: ["Graphic Design", "Documentation", "Branding", "Communication"],
  },

  {
    id: 6,
    title: "Moderator",
    company: "SIM 2025",
    period: "Committee",
    description: [
      "Facilitated seminar sessions to ensure smooth communication between speakers and participants.",
      "Maintained audience engagement throughout the event by managing discussions and question sessions.",
      "Prepared event flow and coordinated with speakers and committee members to ensure the program ran according to schedule.",
    ],
    skills: [
      "Public Speaking",
      "Leadership",
      "Communication",
      "Event Coordination",
    ],
  },
];

export default function ExperiencePage() {
  const [selected, setSelected] = useState(experiences[0]);

  const Icon = selected.icon;

  return (
    <section
      id="experience"
      className="relative min-h-screen py-24 font-primary dark:bg-slate-950 bg-white"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mb-10" data-aos="fade-up" data-aos-duration="1000">
          <h3 className="text-4xl sm:text-5xl font-bold font-title flex items-center gap-3 bg-linear-to-r from-blue-400 via-primary to-blue-400 bg-clip-text text-transparent">
            Experience
          </h3>
          <p className="text-sm font-medium  max-w-2xl text-muted-foreground mt-5">
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
              ${active ? "bg-white/5" : "dark:hover:bg-white/5 hover:bg-foreground"}
            `}
                  >
                    {/* Active Glow */}
                    {active && (
                      <motion.div
                        layoutId="activeExperience"
                        className="absolute inset-0 rounded-2xl border dark:border-primary/20 border-primary/60 dark:bg-primary/5 bg-foreground"
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
                      ${active ? "text-primary" : "text-muted-foreground"}
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
              className="relative overflow-hidden rounded-2xl border dark:border-white/10 border-border/10 dark:bg-dark/40 bg-foreground backdrop-blur-sm p-7 lg:p-8"
            >
              {/* Decorative */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Horizontal */}
                <div className="absolute top-20 left-0 h-px w-full dark:bg-white/5 bg-black/5" />
                <div className="absolute top-44 left-0 h-px w-full dark:bg-white/5 bg-black/5" />
                <div className="absolute bottom-20 left-0 h-px w-full dark:bg-white/5 bg-black/5" />

                {/* Vertical */}
                <div className="absolute left-28 top-0 h-full w-px dark:bg-white/5 bg-black/5" />
                <div className="absolute right-24 top-0 h-full w-px dark:bg-white/5 bg-black/5" />

                {/* Glow */}
                <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full dark:bg-primary/10 bg-primary/15 blur-[100px]" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Period */}
                <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-primary">
                  {selected.period}
                </span>

                {/* Title */}
                <h2 className="mt-6 text-3xl lg:text-4xl font-bold leading-tight dark:text-white">
                  {selected.title}
                </h2>

                <p className="mt-2 text-lg text-primary font-semibold line-clamp-1">
                  {selected.company}
                </p>

                {/* Location */}
                <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <span>Karawang, Indonesia</span>
                </div>

                {/* Divider */}
                <div className="my-8 h-px bg-linear-to-r dark:from-primary/40 from-primary/80 via-white/10 to-transparent" />

                {/* Description */}
                <ul className="space-y-4">
                  {selected.description.map((item, index) => (
                    <li key={index} className="flex gap-3">
                      <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />

                      <span className="text-base leading-6 dark:text-muted-foreground text-slate-600">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Skills */}
                <div className="mt-8">
                  <h4 className="font-title text-xs  uppercase tracking-[0.2em] text-muted-foreground mb-4">
                    Skills
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selected.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
              rounded-full
              px-2 py-1
              text-[10px]
              font-semibold
              border 
              border-primary/40
              bg-primary/10
              text-primary
            "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
