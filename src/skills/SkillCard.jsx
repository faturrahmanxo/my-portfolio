import {
  CodeXml,
  Bot,
  ArrowRightLeft,
  Palette,
  Scan,
  ScanEye,
  SquareCode,
} from "lucide-react";

export default function SkillCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-15">
      {/* Card 1 -Languages */}
      <div
        className="group relative rounded-3xl p-1 transition-all duration-300 hover:scale-[1.02]"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="100"
      >
        {/* Fake Border */}
        <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-white/10 to-transparent" />
        {/* Hover Gradient */}
        <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-cyan-500/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-50" />
        <div className="relative flex h-full flex-col overflow-hidden rounded-[22px] border border-white/5 bg-slate-900/80 backdrop-blur-xl p-6 sm:p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="rounded-2xl bg-slate-800/80 p-4 transition-colors duration-300 group-hover:bg-cyan-500">
              <CodeXml className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
            </div>

            <Bot className="h-6 w-6 sm:h-7 sm:w-7 text-cyan-400 opacity-0 transition-all duration-300 group-hover:opacity-40" />
          </div>

          <h3 className="mb-2 text-xl font-bold text-white">Languages</h3>

          <p className="mb-8 text-xs font-medium text-gray-400">
            The Programming languages that I often use.
          </p>

          <div className="mt-auto flex flex-wrap gap-2">
            <span className="rounded-lg border border-cyan-500/20 bg-cyan-500/5 px-3 py-1.5 text-sm font-medium text-gray-400 transition-all duration-300 group-hover:border-cyan-400 group-hover:text-cyan-400 group-hover:shadow-[0_0_18px_rgba(34,211,238,.25)] delay-100">
              JavaScript
            </span>
            <span className="rounded-lg border border-cyan-500/20 bg-cyan-500/5 px-3 py-1.5 text-sm font-medium text-gray-400 transition-all duration-300 group-hover:border-cyan-400 group-hover:text-cyan-400 group-hover:shadow-[0_0_18px_rgba(34,211,238,.25)] delay-100">
              Python
            </span>
          </div>
        </div>
      </div>

      {/* Card 2 - Design Tools*/}
      <div
        className="group relative rounded-3xl p-1 transition-all duration-300 hover:scale-[1.02]"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="200"
      >
        {/* Fake Border */}
        <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-white/10 to-transparent" />

        {/* Hover Gradient */}
        <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-cyan-500/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-50" />

        <div className="relative flex h-full flex-col overflow-hidden rounded-[22px] border border-white/5 bg-slate-900/80 backdrop-blur-xl p-6 sm:p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="rounded-2xl bg-slate-800/80 p-4 transition-colors duration-300 group-hover:bg-cyan-500">
              <Palette className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
            </div>

            <Bot className="h-6 w-6 sm:h-7 sm:w-7 text-cyan-400 opacity-0 transition-all duration-300 group-hover:opacity-40" />
          </div>

          <h3 className="mb-2 text-xl font-bold text-white">Design Tools</h3>

          <p className="mb-8 text-xs font-medium text-gray-400">
            Crafting beautiful and intuitive interfaces.
          </p>

          <div className="mt-auto flex flex-wrap gap-2">
            <span className="rounded-lg border border-cyan-500/20 bg-cyan-500/5 px-3 py-1.5 text-sm font-medium text-gray-400 transition-all duration-300 group-hover:border-cyan-400 group-hover:text-cyan-400 group-hover:shadow-[0_0_18px_rgba(34,211,238,.25)] delay-100">
              Figma
            </span>

            <span className="rounded-lg border border-cyan-500/20 bg-cyan-500/5 px-3 py-1.5 text-sm font-medium text-gray-400 transition-all duration-300 group-hover:border-cyan-400 group-hover:text-cyan-400 group-hover:shadow-[0_0_18px_rgba(34,211,238,.25)] delay-200">
              Canva
            </span>

            <span className="rounded-lg border border-cyan-500/20 bg-cyan-500/5 px-3 py-1.5 text-sm font-medium text-gray-400 transition-all duration-300 group-hover:border-cyan-400 group-hover:text-cyan-400 group-hover:shadow-[0_0_18px_rgba(34,211,238,.25)] delay-300">
              Alight Motion
            </span>

            <span className="rounded-lg border border-cyan-500/20 bg-cyan-500/5 px-3 py-1.5 text-sm font-medium text-gray-400 transition-all duration-300 group-hover:border-cyan-400 group-hover:text-cyan-400 group-hover:shadow-[0_0_18px_rgba(34,211,238,.25)] delay-300">
              Capcut
            </span>
          </div>
        </div>
      </div>

      {/* Card 3 - Frameworks*/}
      <div
        className="group relative rounded-3xl p-1 transition-all duration-300 hover:scale-[1.02]"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="300"
      >
        {/* Fake Border */}
        <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-white/10 to-transparent" />

        {/* Hover Gradient */}
        <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-cyan-500/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-50" />

        {/* Card */}
        <div className="relative flex h-full flex-col overflow-hidden rounded-[22px] border border-white/5 bg-slate-900/80 backdrop-blur-xl p-6 sm:p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="rounded-2xl bg-slate-800/80 p-4 transition-colors duration-300 group-hover:bg-cyan-500">
              <SquareCode className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
            </div>

            <Bot className="h-6 w-6 sm:h-7 sm:w-7 text-cyan-400 opacity-0 transition-all duration-300 group-hover:opacity-40" />
          </div>

          <h3 className="mb-2 text-xl font-bold text-white">Frameworks</h3>

          <p className="mb-8 text-xs font-medium text-gray-400">
            A great tool for building today's ever-evolving user interfaces.
          </p>

          <div className="mt-auto flex flex-wrap gap-2">
            <span className="rounded-lg border border-cyan-500/20 bg-cyan-500/5 px-3 py-1.5 text-sm font-medium text-gray-400 transition-all duration-300 group-hover:border-cyan-400 group-hover:text-cyan-400 group-hover:shadow-[0_0_18px_rgba(34,211,238,.25)]">
              React JS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
