import {
  Award,
  Braces,
  CodeXml,
  GraduationCap,
  Rocket,
  Star,
} from "lucide-react";
import Profile from "../assets/Profile.jpg";
import Profile2 from "../assets/Profile2.jpg";
import logoUnsika from "../assets/about/unsikaLogo.png";
import logoYaspia from "../assets/about/yaspiaLogo.png";

import Counter from "../components/Counter";

export default function AboutPage() {
  return (
    <section className="relative min-h-screen pt-30 pb-24 overflow-hidden font-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-border bg-primary/10 px-4 py-0.5 backdrop-blur-xl">
            <GraduationCap className="w-6 h-6 text-primary" />
            <h3 className="page-title mb-0">About Me</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-14 items-center">
          {/* ================= KIRI ================= */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative sm:max-w-lg md:max-w-sm lg:max-w-xs">
              {/* Card Depan */}
              <div
                className="
                relative
                rounded-[34px]
                bg-card
                border
                border-border
                p-5
              "
              >
                {/* Image Background */}
                <div
                  className="
                  relative
                  rounded-[26px]
                  overflow-hidden
                  bg-[#1E293B]
                "
                >
                  <div className="shine" />
                  <div className="aspect-4/6">
                    <img
                      src={Profile}
                      alt="Profile"
                      className="w-full h-full object-cover floating-image"
                    />
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-5 border-t border-border pt-5">
                  <div className="flex justify-between text-[11px] text-slate-400 uppercase">
                    <span>Status</span>
                    <span className="text-primary">Available</span>
                  </div>

                  <div className="mt-3 flex justify-between text-[11px] text-slate-400 uppercase">
                    <span>Role</span>
                    <span>Frontend Developer</span>
                  </div>

                  <div className="mt-3 flex justify-between text-[11px] text-slate-400 uppercase">
                    <span>Location</span>
                    <span>Bekasi, ID</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= KANAN ================= */}
          <div className="lg:col-span-7 flex flex-col justify-center lg:items-start">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-px bg-primary" />
                  <h2 className="text-primary uppercase text-sm font-medium tracking-wider">
                    who is Habib Iqbal Faturrahman?
                  </h2>
                </div>
                <h3 className="text-left text-4xl md:text-4xl font-bold leading-tight">
                  Transforming Ideas into Modern <br />
                  <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-blue-600">
                    Web Experiences.
                  </span>
                </h3>
              </div>
              <div className="text-base md:text-lg text-gray-400 leading-relaxed space-y-7">
                <p>
                  I am a passionate{" "}
                  <span className="font-bold text-white">
                    Frontend Developer
                  </span>{" "}
                  about building modern, responsive, and user-friendly web
                  applications.
                </p>
                <p>
                  Beyond frontend development, I have a{" "}
                  <span className="font-bold text-white">
                    interest in UI/UX design, graphic design, and video editing.
                  </span>
                  These creative skills help me better understand user needs and
                  visual communication.
                </p>
                <p>
                  I am always eager to learn new technologies and continuously
                  improve my skills to deliver high-quality digital solutions.
                </p>
              </div>

              {/* badge */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* gpa */}
                <div className="badge w-full md:flex-1 bg-purple-500/10 border border-purple-500/20 hover:border-purple-500 transition-colors duration-300">
                  <div className="flex items-start gap-1">
                    <div className="bg-purple-500/20 p-2 rounded-xl">
                      <Award className="w-6 h-6 text-purple-500" />
                    </div>
                    <div className="flex flex-col items-start mx-2">
                      <h4 className="font-bold text-xl">
                        <Counter to={3.84} duration={3} decimals={2} />
                      </h4>
                      <span className="badge-span">GPA</span>
                    </div>
                  </div>
                </div>

                {/* projects */}
                <div className="badge w-full  md:flex-1 bg-pink-500/10 border border-pink-500/20 hover:border-pink-500 transition-colors duration-300">
                  <div className="flex items-start gap-1">
                    <div className="bg-pink-500/20 p-2 rounded-xl">
                      <CodeXml className="w-6 h-6 text-pink-500" />
                    </div>
                    <div className="flex flex-col items-start mx-2">
                      <h4 className="font-bold text-xl">
                        <Counter to={2.89} duration={3} suffix="+" />
                      </h4>
                      <span className="badge-span">Projects</span>
                    </div>
                  </div>
                </div>

                {/* years */}
                <div className="badge w-full md:flex-1 bg-primary/10 border border-border hover:border-primary transition-colors duration-300">
                  <div className="flex items-start gap-1">
                    <div className="bg-primary/20 p-2 rounded-xl">
                      <Rocket className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex flex-col items-start mx-2">
                      <h4 className="font-bold text-xl ">
                        <Counter to={1} duration={2} suffix="+" />
                      </h4>
                      <span className="badge-span">Years Learning</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Education*/}
        <div className="mt-24">
          {/* Title */}
          <div className="flex justify-center">
            <div
              className="inline-flex items-center gap-3 rounded-full border border-border bg-primary/10 px-4 py-0.5 backdrop-blur-xl"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="page-title mb-0">Education</h3>
            </div>
          </div>

          {/*Content*/}
          <div className="mt-14 max-w-4xl mx-auto ">
            <div className="relative">
              {/* Timeline */}
              <div className="hidden lg:block absolute left-1/2 -translate-x-[380px] top-0 bottom-0 w-px bg-primary/20" />

              <div className="flex flex-col items-center gap-8">
                {/* Card 1*/}
                <div
                  className="group relative w-full flex justify-center"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  {/* Timeline Dot */}
                  <div className="hidden lg:flex absolute left-[calc(50%-387px)] top-8 h-4 w-4 rounded-full bg-primary-foreground border border-primary/20 ring-slate-950 group-hover:bg-primary transition-all duration-300" />

                  {/* Card */}
                  <div className="group relative w-full max-w-2xl min-h-[170px] rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-5 transition-all duration-300 group-hover:border-primary/40 group-hover:-translate-y-1">
                    {/* GPA */}
                    <span className="absolute top-5 right-5 z-10 rounded-lg border border-border bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary whitespace-nowrap">
                      GPA 3.84 / 4.00
                    </span>

                    <div className="flex gap-4">
                      {/* Image */}
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-foreground border border-border">
                        <img
                          src={logoUnsika}
                          alt="Logo Unsika"
                          className="w-8 h-8"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0 flex flex-col">
                        {/* Header */}
                        <div className="relative pr-20">
                          <h3 className="line-clamp-2 text-lg font-semibold leading-snug text-white">
                            Universitas Singaperbangsa Karawang
                          </h3>

                          {/* GPA */}
                          <span className="absolute top-0 right-0 rounded-lg border border-border bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary whitespace-nowrap">
                            GPA 3.84 / 4.00
                          </span>
                        </div>

                        {/* Major */}
                        <p className="mt-2 max-w-[95%] text-sm leading-6 text-primary">
                          Bachelor Degree in Information Systems
                        </p>

                        {/* Bottom */}
                        <div className="mt-auto pt-5 flex flex-wrap gap-2">
                          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
                            2024 - 2028
                          </span>

                          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
                            Karawang, Indonesia
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ================= Card 2 ================= */}
                <div
                  className="group relative w-full flex justify-center"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  {/* Timeline Dot */}
                  <div className="hidden lg:flex absolute left-[calc(50%-387px)] top-8 h-4 w-4 rounded-full bg-primary-foreground border border-primary/20 ring-slate-950 group-hover:bg-primary transition-all duration-300"></div>

                  {/* Card */}
                  <div className="group relative w-full max-w-2xl min-h-[170px] rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-5 transition-all duration-300 group-hover:border-primary/40 group-hover:-translate-y-1">
                    {/* GPA */}
                    <span className="absolute top-5 right-5 z-10 rounded-lg border border-border bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary whitespace-nowrap">
                      Grade 85
                    </span>

                    <div className="flex gap-4">
                      {/* IImage */}
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-foreground border border-border">
                        <img
                          src={logoYaspia}
                          alt="Logo Unsika"
                          className="w-10 h-10"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0 flex flex-col">
                        {/* Header */}
                        <div className="relative pr-20">
                          <h3 className="line-clamp-2 text-lg font-semibold leading-snug text-white">
                            Madrasah Aliyah Al'Imaroh
                          </h3>

                          {/* GPA */}
                          <span className="absolute top-0 right-0 rounded-lg border border-border bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary whitespace-nowrap">
                            Grade 85
                          </span>
                        </div>

                        {/* Major */}
                        <p className="mt-2 max-w-[95%] text-sm leading-6 text-primary">
                          Science / IPA
                        </p>

                        {/* Bottom */}
                        <div className="mt-auto pt-5 flex flex-wrap gap-2">
                          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
                            2021 - 2024
                          </span>

                          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
                            Bekasi, Indonesia
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
