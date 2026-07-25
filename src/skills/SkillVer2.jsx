import { motion } from "motion/react";

const hardSkills = [
  { name: "React", level: 95 },
  { name: "Laravel", level: 85 },
  { name: "Tailwind CSS", level: 90 },
  { name: "JavaScript", level: 90 },
  { name: "TypeScript", level: 80 },
  { name: "MySQL", level: 85 },
];

const softSkills = [
  "Problem Solving",
  "Teamwork",
  "Communication",
  "Prototyping",
  "Time Management",
];

export default function SkillVer2() {
  return (
    <section className="w-full max-w-5xl mx-auto py-20">
      <div className="grid lg:grid-cols-[1.3fr_0.9fr] gap-14 items-start">
        {/* Hard Skill */}
        <div>
          <div className="flex items-center justify-center gap-4 mb-8">
            <p className="text-gray-400 uppercase tracking-[0.2em] text-sm ">
              Hard Skills
            </p>
            <div className="flex-1 w-20 h-px bg-linear-to-r from-primary/50 to-transparent" />
          </div>
          <div className="space-y-8">
            {hardSkills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-400">
                    {skill.name}
                  </span>

                  <span className="text-primary text-sm">{skill.level}%</span>
                </div>

                <div className="h-1 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-linear-to-r from-primary via-blue-500 to-indigo-500"
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: `${skill.level}%`,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 1,
                      ease: "easeOut",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skill */}
        <div className="w-full lg:max-w-sm">
          <div className="flex items-center justify-center flex-row-reverse gap-4 mb-8">
            <p className="text-gray-400 uppercase tracking-[0.2em] text-sm ">
              Soft Skills
            </p>
            <div className="flex-1 w-20 h-px bg-linear-to-r from-primary/50 to-transparent" />
          </div>

          <div className="space-y-2.5">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                className="flex items-center gap-3 rounded-lg border border-white/8 bg-white/[0.02] px-3 py-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />

                <span className="text-sm text-gray-400">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
