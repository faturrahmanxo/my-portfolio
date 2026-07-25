import {
  ArrowBigDownDash,
  ArrowRight,
  ChevronDown,
  Sparkle,
  CodeXml,
  Bot,
  ArrowRightLeft,
  LayoutList,
  Search,
  Lightbulb,
  Code,
  Webhook,
  Workflow,
  Sparkles,
  LayoutGrid,
  Palette,
  Bug,
} from "lucide-react";

import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { codeExamples, floatingCards } from "../data/CodeExamples";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

import SkillCard from "../skills/SkillCard";
import SkillList from "../skills/SkillList";
import SkillVer2 from "../skills/SkillVer2";
import ProjectCard, { projects } from "../projects/ProjectCard";

import Card from "../components/Card";

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState("Profile.jsx");
  const [scrambleText, setScrambleText] = useState("");
  const [viewMode, setviewMode] = useState("card");

  const finalText = "Frontend Developer";
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

  useEffect(() => {
    function handleMouseMove(e) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    let scrambleInterval;
    let repeatTimeout;

    const scramble = () => {
      let iteration = 0;

      scrambleInterval = setInterval(() => {
        setScrambleText(
          finalText
            .split("")
            .map((char, index) => {
              if (char === " ") return " ";

              if (index < iteration) {
                return finalText[index];
              }

              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join(""),
        );

        iteration += 0.28;

        if (iteration >= finalText.length) {
          clearInterval(scrambleInterval);

          setScrambleText(finalText);

          // diam 2 detik
          repeatTimeout = setTimeout(() => {
            scramble();
          }, 2000);
        }
      }, 30);
    };

    scramble();

    return () => {
      clearInterval(scrambleInterval);
      clearTimeout(repeatTimeout);
    };
  }, []);

  const currentFloatingCard = floatingCards[activeTab];
  return (
    <div className="font-primary">
      {/* section 1 */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-16 lg:px-8 overflow-hidden">
        {/* Background Grid */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundSize: "60px 50px",
            backgroundImage: `
        linear-gradient(rgba(34,211,238,0.15) 1px, transparent 1px),
        linear-gradient(90deg, rgba(34,211,238,0.05) 1px, transparent 1px)
      `,
          }}
        />

        {/* mouse efek blur */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.20), transparent 40%)`,
          }}
        />

        {/* efek blur */}
        <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-border/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Content */}
        <div className="max-w-6xl mx-auto relative w-full">
          <div className="flex flex-col grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center relative">
            {/* Content left */}
            <div className="text-center lg:text-left">
              <div className="relative inline-flex rounded-full p-[1.5px] overflow-hidden mb-6">
                {/* Animated Border */}
                <span className="absolute inset-0 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0%,#00BFFF_15%,transparent_35%)]" />
                <div className="relative inline-flex items-center gap-2 px-3 py-1.5 bg-[#060b14] border border-white/10 rounded-full">
                  <Sparkle className="w-3 h-3 text-primary" />
                  <span className="text-xs font-medium text-primary">
                    Open to Opportunities
                  </span>
                </div>
              </div>
              <p className="text-sm md:text-[16px] font-medium my-2">
                Hii, my name is
              </p>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700 delay-100 leading-tight">
                <span className=" block bg-linear-to-r from-blue-400 via-primary to-blue-400 bg-clip-text text-transparent mb-1 sm:mb-2 font-title">
                  Habib Iqbal Faturrahman
                </span>
              </h1>

              {/* Frontend Developer */}
              <div className="inline-flex items-center space-x-2 px-3 py-2 rounded-full mb-4 sm:mb-6 bg-blue-500/10 border border-blue-500/20 backdrop-blur-md">
                {/* Bulatan menyala */}
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary"></span>
                </span>
                <span className="text-xs font-medium text-blue-300">
                  {scrambleText}
                </span>
              </div>

              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 animate-in slide-in-from-bottom duration-700 delay-200">
                An Information Systems student with a strong passion and
                interest in building accessible and responsive websites,
                focusing on robust performance.
              </p>

              {/* buttons */}
              <div className="flex flex-col flex-wrap sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12 animate-in slide-in-from-bottom duration-700 delay-300">
                <a
                  href="/projects"
                  className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 whitespace-nowrap rounded-full hover:scale-103 hover:bg-primary/10 transition-all duration-300 flex items-center justify-center space-x-2 border border-primary"
                >
                  <span className="tracking-widest font-medium text-sm group-hover:text-primary">
                    View My Work
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:text-primary transition-transform duration-300 " />
                </a>

                <div className="flex items-center w-full sm:w-auto gap-4 text-sm whitespace-nowrap">
                  <a
                    href="https://drive.google.com/file/d/1gWDDlzW0AZAl8RqqBe9FXeVxRmA810Id/view?usp=sharing"
                    target="_blank"
                    className="group flex-1 sm:flex-initial px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full transition-all duration-300 hover:border-primary hover:scale-103 flex items-center justify-center space-x-2"
                  >
                    <ArrowBigDownDash className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-medium text-sm group-hover:text-primary">
                      Download CV
                    </span>
                  </a>

                  <a
                    href="/contact"
                    className="group flex-1 sm:flex-initial px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full transition-all duration-300 hover:border-primary hover:scale-103 flex items-center justify-center space-x-2"
                  >
                    <span className="font-medium text-sm group-hover:text-primary">
                      Contact Me
                    </span>
                  </a>
                </div>
              </div>
              {/* akhir buttons */}
            </div>

            {/* kanan */}
            <div
              className="hidden lg:block relative order-2 w-full lg:max-w-[500px] lg:justify-self-end"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10">
                <div className="bg-linear-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-[280px] sm:h-[350px] lg:h-[350px] border border-white/5">
                  {/* ide header */}
                  <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border-b border-white/10">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1 sm:space-x-2">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                      </div>
                      <span className="text-xs sm:text-sm text-gray-300">
                        Fatur.
                      </span>
                    </div>
                    <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                  </div>
                  <div className="p-3 sm:p-4 relative h-full">
                    {/* file tabs */}
                    <div className="flex space-x-1 sm:space-x-2 mb-3 sm:mb-4 overflow-x-auto">
                      <button
                        onClick={() => setActiveTab("Profile.jsx")}
                        className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${
                          activeTab === "Profile.jsx"
                            ? "bg-blue-500/30 text-white border-blue-400/20"
                            : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                        }  
                      transition-all duration-200 whitespace-nowrap`}
                      >
                        Profile.jsx
                      </button>
                    </div>

                    {/* code content */}
                    <div className="relative overflow-hidden flex-grow">
                      <SyntaxHighlighter
                        language="javascript"
                        style={nightOwl}
                        customStyle={{
                          margin: 0,
                          borderRadius: "8px",
                          fontSize: "12px",
                          lineHeight: "1.4",
                          height: "100%",
                          border: "1px solid #3c3c3c",
                          wordWrap: "break-word",
                          whitespace: "pre-wrap",
                        }}
                      >
                        {codeExamples[activeTab]}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </div>

                {/* floating card */}
                {/* <div
                  className={`hidden lg:block absolute bottom-4 right-4 transform translate-x-8 translate-y-8 w-72 ${currentFloatingCard.bgColor} backdrop-blur-xl rounded-lg p-4 border border-white/20 shadow-2xl`}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <div
                      className={`w-6 h-6 ${currentFloatingCard.iconColor} flex items-center justify-center text-sm font-bold`}
                    >
                      {currentFloatingCard.icon}
                    </div>
                    <span
                      className={`text-sm font-medium ${currentFloatingCard.textColor}`}
                    >
                      {currentFloatingCard.title}
                    </span>
                  </div>

                  <div
                    className={`text-sm text-left ${currentFloatingCard.contentColor}`}
                  >
                    {currentFloatingCard.content}
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* floating arrow */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 
          animate-fade-in animation-delay-800"
        >
          <a
            href=""
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </a>
        </div>
      </section>

      {/* Section skills */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12" data-aos="fade-up" data-aos-duration="500">
            {/* title */}
            <h2 className="section-title">
              Skill &<span className="section-title-span"> Technologies</span>
            </h2>
            <p className="text-gray-300 text-center mt-6">
              How I turn complex problems into simple, elegant solutions.
            </p>

            {/* button skills */}
            <div className="flex flex-col items-center mt-10 gap-3">
              <span className="text-xs uppercase tracking-[0.2em] text-gray-400">
                View Mode
              </span>

              <div className="inline-flex items-center gap-1 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-1.5 shadow-lg shadow-black/20">
                <button
                  onClick={() => setviewMode("card")}
                  className={`group flex items-center gap-2 rounded-xl px-4 py-2.5 transition-all duration-300 ${
                    viewMode === "card"
                      ? "bg-linear-to-r from-blue-400 via-primary to-blue-400 text-white"
                      : "text-white/60 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <LayoutGrid className="w-4 h-4" />
                  <span className="hidden sm:block text-sm font-medium">
                    Cards
                  </span>
                </button>

                <button
                  onClick={() => setviewMode("list")}
                  className={`group flex items-center gap-2 rounded-xl px-4 py-2.5 transition-all duration-300 ${
                    viewMode === "list"
                      ? "bg-linear-to-r from-primary to-blue-500 text-white"
                      : "text-white/60 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <LayoutList className="w-4 h-4" />
                  <span className="hidden sm:block text-sm font-medium">
                    List
                  </span>
                </button>

                {/* <button
                  onClick={() => setviewMode("ver2")}
                  className={`group flex items-center gap-2 rounded-xl px-4 py-2.5 transition-all duration-300 ${
                    viewMode === "ver2"
                      ? "bg-gradient-to-r from-primary to-blue-500 text-white"
                      : "text-white/60 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Sparkles className="w-4 h-4" />
                  <span className="hidden sm:block text-sm font-medium">
                    Flow
                  </span>
                </button> */}
              </div>
            </div>

            {/* skills */}
            {viewMode === "card" && <SkillCard />}
            {viewMode === "list" && <SkillList />}
            {viewMode === "ver2" && <SkillVer2 />}
          </div>
        </div>
      </section>

      {/* Section Workflow */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* title */}
          <div
            className="text-center mb-20"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Workflow className="w-10 h-10 text-primary" />
              <h2 className="section-title">
                My
                <span className="section-title-span"> Workflow</span>
              </h2>
            </div>
            <div className="mt-3 w-25 h-1 mx-auto bg-linear-to-r from-blue-400 via-primary to-blue-400 rounded-full" />

            <p className="text-gray-300 mt-6">
              Here are some of the technologies I've worked with
            </p>
          </div>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="hidden md:block absolute top-12 left-0 bg-border/50 w-full h-0.5" />

            {/* card 1 - Research */}
            <div
              className="group relative flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <div className="absolute w-8 h-8 -top-3 -right-3 bg-primary/20 rounded-full border border-white/20 flex items-center justify-center text-sm font-bold text-gray-400 group-hover:border-white group-hover:text-white transition-colors duration-300 z-20">
                1
              </div>
              <div className="flex flex-col items-center justify-center w-24 h-24 rounded-2xl bg-linear-to-br from-primary to-blue-500 mb-6 z-10 shadow-lg  rotate-3 group-hover:rotate-10 transition-transform duration-300">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Research</h3>
              <p className="text-gray-400 text-xs leading-relaxed px-4">
                Learning about user needs, project objectives, and technical
                requirements before development.
              </p>
            </div>

            {/* card 2 - Design */}
            <div
              className="group relative flex flex-col items-center text-center"
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              <div className="absolute w-8 h-8 -top-3 -right-3 bg-primary/20 rounded-full border border-white/20 flex items-center justify-center text-sm font-bold text-gray-400 group-hover:border-white group-hover:text-white transition-colors duration-300 z-20">
                2
              </div>
              <div className="flex flex-col items-center justify-center w-24 h-24 rounded-2xl  bg-gray-300 mb-6 z-10 shadow-lg  rotate-3 group-hover:rotate-10 transition-transform duration-300">
                <Palette className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Design</h3>
              <p className="text-gray-400 text-xs leading-relaxed px-4">
                Creating clean, modern, and user-friendly interfaces that
                balance aesthetics and functionality.
              </p>
            </div>

            {/* card 3 - Develop */}
            <div
              className="group relative flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              <div className="absolute w-8 h-8 -top-3 -right-3 bg-primary/20 rounded-full border border-white/20 flex items-center justify-center text-sm font-bold text-gray-400 group-hover:border-white group-hover:text-white transition-colors duration-300 z-20">
                3
              </div>
              <div className="flex flex-col items-center justify-center w-24 h-24 rounded-2xl bg-primary mb-6 z-10 shadow-lg  rotate-3 group-hover:rotate-10 transition-transform duration-300">
                <CodeXml className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Develop</h3>
              <p className="text-gray-400 text-xs leading-relaxed px-4">
                Turning designs into fast, responsive, and interactive web
                applications with React and modern tools.
              </p>
            </div>

            {/* card 4 - Optimize */}
            <div
              className="group relative flex flex-col items-center text-center"
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-delay="700"
            >
              <div className="absolute w-8 h-8 -top-3 -right-3 bg-primary/20 rounded-full border border-white/20 flex items-center justify-center text-sm font-bold text-gray-400 group-hover:border-white group-hover:text-white transition-colors duration-300 z-20">
                4
              </div>
              <div className="flex flex-col items-center justify-center w-24 h-24 rounded-2xl bg-blue-500 mb-6 z-10 shadow-lg  rotate-3 group-hover:rotate-10 transition-transform duration-300">
                <Bug className="w-8 h-8 text-highlight" />
              </div>
              <h3 className="text-xl font-bold mb-3">Optimize</h3>
              <p className="text-gray-400 text-xs leading-relaxed px-4">
                Enhancing performance, fixing issues, and refining the interface
                for the best possible experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* title */}
          <div
            className="text-center mb-20"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h2 className="section-title">
              My
              <span className="section-title-span"> Projects</span>
            </h2>
            <p className="text-gray-300 mt-6">
              Here are some of the technologies I've worked with
            </p>
          </div>

          {/* card projects */}
          <div className="max-w-5xl mx-auto space-y-10">
            {projects.slice(0, 2).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          {/* button see more */}
          <div className="mt-14 flex justify-center">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-8 py-3 transition-all duration-300 hover:border-primary hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
            >
              <span className="tracking-wider uppercase text-[10px] font-medium">
                See More Projects
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
