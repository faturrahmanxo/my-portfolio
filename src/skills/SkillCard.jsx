import {
  CodeXml,
  Bot,
  ArrowRightLeft,
  Palette,
  Scan,
  ScanEye,
  SquareCode,
} from "lucide-react";

export default function SkillCard({ theme }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-15">
      {/* Card 1 -Languages */}
      <div
        className="group relative rounded-3xl p-1"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="100"
      >
        {/* Fake Border */}
        <div className="absolute inset-0 rounded-3xl bg-linear-to-br dark:from-white/10 from-muted-foreground/20 to-transparent" />
        {/* Hover Gradient */}
        <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-50" />
        {/* content */}
        <div className="relative p-6 sm:p-8 flex h-full flex-col overflow-hidden rounded-[22px] border dark:border-white/5 border-black/10 dark:bg-slate-900/80 bg-white/60">
          <div className="flex items-center justify-between mb-6">
            <div className="rounded-2xl dark:bg-slate-800/80 bg-primary/20 p-4 group-hover:scale-110 transition-transform duration-500">
              <CodeXml className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
            </div>

            <Bot className="h-6 w-6 sm:h-7 sm:w-7 text-primary dark:text-primary opacity-0 transition-all duration-300 group-hover:opacity-80" />
          </div>

          <h3 className="text-xl font-bold tracking-wider mb-2 text-muted dark:text-white group-hover:text-primary transition-colors">
            Languages
          </h3>

          <p className="mb-8 text-xs font-medium text-muted-foreground">
            The Programming languages that I often use.
          </p>

          <div className="mt-auto flex flex-wrap gap-2">
            <span className="skill-card delay-100">JavaScript</span>
            <span className="skill-card delay-100">Python</span>
          </div>
        </div>
      </div>

      {/* Card 2 - Design Tools*/}
      <div
        className="group relative rounded-3xl p-1"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="200"
      >
        {/* Fake Border */}
        <div className="absolute inset-0 rounded-3xl bg-linear-to-br dark:from-white/10 from-muted-foreground/20 to-transparent" />

        {/* Hover Gradient */}
        <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-50" />
        {/* content */}
        <div className="relative p-6 sm:p-8 flex h-full flex-col overflow-hidden rounded-[22px] border dark:border-white/5 border-black/10 dark:bg-slate-900/80 bg-white/60">
          <div className="flex items-center justify-between mb-6">
            <div className="rounded-2xl p-4 dark:bg-slate-800/80 bg-primary/20">
              <Palette className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
            </div>

            <Bot className="h-6 w-6 sm:h-7 sm:w-7 text-primary dark:text-primary opacity-0 transition-all duration-300 group-hover:opacity-60" />
          </div>

          <h3 className="text-xl font-bold tracking-wider mb-2 text-muted dark:text-white group-hover:text-primary transition-colors">
            Design Tools
          </h3>

          <p className="mb-8 text-xs font-medium text-muted-foreground">
            Crafting beautiful and intuitive interfaces.
          </p>

          <div className="mt-auto flex flex-wrap gap-2">
            <span className="skill-card delay-100">Figma</span>

            <span className="skill-card delay-200">Canva</span>

            <span className="skill-card delay-300">Alight Motion</span>

            <span className="skill-card delay-300">Capcut</span>
          </div>
        </div>
      </div>

      {/* Card 3 - Frameworks*/}
      <div
        className="group relative rounded-3xl p-1"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="300"
      >
        {/* Fake Border */}
        <div className="absolute inset-0 rounded-3xl bg-linear-to-br dark:from-white/10 from-muted-foreground/20 to-transparent" />

        {/* Hover Gradient */}
        <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-50" />

        {/* Card */}
        <div className="relative p-6 sm:p-8 flex h-full flex-col overflow-hidden rounded-[22px] border dark:border-white/5 border-black/10 dark:bg-slate-900/80 bg-white/60">
          <div className="flex items-center justify-between mb-6">
            <div className="rounded-2xl  p-4 dark:bg-slate-800/80 bg-primary/10 group-hover:scale-110 transition-transform duration-500">
              <SquareCode className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
            </div>

            <Bot className="h-6 w-6 sm:h-7 sm:w-7 text-primary opacity-0 transition-all duration-300 group-hover:opacity-60" />
          </div>

          <h3 className="text-xl font-bold tracking-wider mb-2 text-muted dark:text-white group-hover:text-primary transition-colors">
            Frameworks
          </h3>

          <p className="mb-8 text-xs font-medium text-muted-foreground">
            A great tool for building today's ever-evolving user interfaces.
          </p>

          <div className="mt-auto flex flex-wrap gap-2">
            <span className="skill-card">React JS</span>
          </div>
        </div>
      </div>
    </div>
  );
}
