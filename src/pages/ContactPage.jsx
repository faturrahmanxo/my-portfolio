import {
  Mail,
  MapPin,
  Copy,
  Check,
  ArrowUpRight,
  MessagesSquare,
  Terminal,
} from "lucide-react";

import { RiGithubLine, RiInstagramLine, RiLinkedinLine } from "react-icons/ri";

import { useState } from "react";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("habibiqbalfaturrahman@gmail.com");

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen pt-30 pb-24 font-primary"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* konten 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-22 items-center">
          {/* left */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center justify-center p-2 bg-white/5 rounded-full mb-6 backdrop-blur-sm border border-white/10">
              <MessagesSquare className="w-5 h-5 text-primary" />
              <span className="text-cyan-100 text-sm font-medium px-2">
                Let's Talk
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Ready to start <br />
              <span className="bg-linear-to-r from-blue-400 via-primary to-blue-400 bg-clip-text text-transparent">
                your next project?
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              I am always open to discussing new projects, collaborations, or
              opportunities that can create solutions and generate a positive
              impact together.
            </p>
            <div className="mt-10">
              <a
                href="mailto:habibiqbalfaturrahman@gmail.com"
                className="inline-flex items-center gap-3 rounded-2xl bg-linear-to-r from-blue-400 via-primary to-blue-400 px-7 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,.35)]"
              >
                Write me an email
                <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* kanan */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Card 1 - Email */}
            <div
              className="group relative rounded-3xl p-1 transition-all duration-300 hover:scale-[1.02]"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent" />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-500/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-50" />

              <div className="relative flex h-full flex-col overflow-hidden rounded-[22px] border border-white/5 bg-slate-900/80 backdrop-blur-xl p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div className="rounded-2xl bg-pink-500/10 p-4 transition-all duration-300 ">
                    <Mail className="h-7 w-7 text-pink-500 " />
                  </div>
                </div>

                <h3 className="mb-2 text-xl font-bold text-white">Email Me</h3>

                <p className="text-xs text-gray-400">
                  habibiqbalfaturrahman@gmail.com
                </p>

                <button
                  onClick={handleCopyEmail}
                  className="mt-auto flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 text-sm text-white transition-all duration-300 hover:bg-white/10"
                >
                  <span className="font-medium">
                    {copied ? "Copied!" : "Copy Email"}
                  </span>

                  {copied ? (
                    <Check className="h-4 w-4 text-green-400" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Card 2 - LinkedIn */}
            <div
              className="group relative rounded-3xl p-1 transition-all duration-300 hover:scale-[1.02]"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="200"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent" />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-50" />

              <div className="relative flex h-full flex-col overflow-hidden rounded-[22px] border border-white/5 bg-slate-900/80 backdrop-blur-xl p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div className="rounded-2xl bg-blue-500/10 p-4 transition-all duration-300">
                    <RiLinkedinLine className="h-7 w-7 text-blue-400 " />
                  </div>
                </div>

                <h3 className="mb-2 text-xl font-bold text-white">LinkedIn</h3>

                <p className="mb-8 text-sm text-gray-400">
                  Professional Profile
                </p>

                <a
                  href="https://www.linkedin.com/in/fatur02/"
                  target="blank"
                  className="mt-auto flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 text-sm text-white transition hover:bg-white/10"
                >
                  Connect
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Card 3 - GitHub */}
            <div
              className="group relative rounded-3xl p-1 transition-all duration-300 hover:scale-[1.02]"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="300"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent" />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-50" />

              <div className="relative flex h-full flex-col overflow-hidden rounded-[22px] border border-white/5 bg-slate-900/80 backdrop-blur-xl p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div className="rounded-2xl bg-violet-500/10 p-4 transition-all duration-300 ">
                    <RiGithubLine className="h-7 w-7 text-violet-400 " />
                  </div>
                </div>

                <h3 className="mb-2 text-xl font-bold text-white">GitHub</h3>

                <p className="mb-8 text-sm text-gray-400">Code Repository</p>

                <a
                  href="https://github.com/faturrahmanxo"
                  target="_blank"
                  className="mt-auto flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 text-sm text-white transition hover:bg-white/10"
                >
                  Follow
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Card 4 - Location */}
            <div
              className="group relative rounded-3xl p-1 transition-all duration-300 hover:scale-[1.02]"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="400"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent" />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-50" />

              <div className="relative flex h-full flex-col overflow-hidden rounded-[22px] border border-white/5 bg-slate-900/80 backdrop-blur-xl p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div className="rounded-2xl bg-emerald-500/10 p-4 transition-all duration-300 ">
                    <MapPin className="h-7 w-7 text-emerald-400" />
                  </div>
                </div>

                <h3 className="mb-2 text-xl font-bold text-white">Location</h3>

                <p className="mb-8 text-sm text-gray-400">Bekasi, Indonesia</p>

                <div className="mt-auto rounded-xl bg-white/5 px-4 py-3 text-sm text-gray-300 flex items-center justify-between">
                  Remote / On-site
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 animate-ping"></span>

                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400"></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
