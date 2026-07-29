import { motion } from "motion/react";
import { RiGithubLine } from "react-icons/ri";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import FutureFund from "../assets/project/Future-Fund-Transparant.png";
import IIH from "../assets/project/IIH-Transparant.png";
import Flexdrop from "../assets/project/Flexdrop.png";
import Flexdrop1 from "../assets/project/Flexdrop1.png";
import KakakuManis from "../assets/project/Kakaku-Manis.png";
import Design from "../assets/project/design.png";
import GameConsole from "../assets/project/GameConsole.png";

export const projects = [
  {
    id: 1,
    category: "UI / UX",
    title: "Future Fund",
    description:
      "An AI and Open Banking-powered proactive financial management app designed to help university students and young people achieve their financial goals.",
    image: FutureFund,
    github: "",
    demo: "https://www.figma.com/proto/xxxxxxxx",
    tech: ["Figma", "Prototype"],
  },
  {
    id: 2,
    category: "UI / UX",
    title: "Innovate Indonesia Hub",
    description:
      "This application serves as a digital bridge connecting industry, academia, and government to accelerate collaboration and the downstreaming of research.",
    image: IIH,
    github: "",
    demo: "https://www.figma.com/proto/yyyyyyyy",
    tech: ["Figma", "Prototype"],
  },
  {
    id: 3,
    category: "Website",
    title: "Flexdrop",
    description:
      "A responsive e-commerce platform designed for buying and selling second-hand products, enabling users to browse listings, discover affordable items, and connect with sellers through a simple and intuitive shopping experience.",
    image: Flexdrop1,
    github: "",
    demo: "https://flexdrop.infinityfree.io/",
    tech: ["PHP", "MySQL", "Bootstrap"],
  },
  {
    id: 4,
    category: "Website",
    title: "Kakaku Manis",
    description:
      "A responsive e-menu website designed for a dessert shop, allowing customers to explore cakes, pastries, beverages, and featured menu items through a clean and intuitive interface.",
    image: KakakuManis,
    github: "",
    demo: "https://emenu.free.nf/auth/login.php",
    tech: ["PHP", "MySQL", "CSS"],
  },
  {
    id: 5,
    category: "Design",
    title: "MeSign",
    description:
      "A place to showcase the results of my editing skills, such as design, video editing, and photo color grading.",
    image: Design,
    github: "",
    demo: "https://drive.google.com/drive/folders/1NO6R8dmzFMZCOfewl-Z-d1NcFWN9YiVr?usp=sharing",
    tech: ["Canva", "Figma", "Alight Motion", "Capcut"],
  },
  {
    id: 6,
    category: "Dekstop App",
    title: "Rental",
    description:
      "A place to showcase the results of my editing skills, such as design, video editing, and photo color grading.",
    image: GameConsole,
    github: "https://github.com/faturrahmanxo/GUI-Sistem-PenyewaanGameConsole",
    demo: "",
    tech: ["Java", "MySQL", "JavaFX", "JDBC"],
  },
];

export default function ProjectCard({ project, index }) {
  const isReverse = index % 2 !== 0;

  const actionText =
    project.category === "Website" || project.category === "Dekstop App"
      ? "Live Demo"
      : project.category === "UI / UX"
        ? "View Prototype"
        : "View Design";

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7 }}
      className="relative"
    >
      <div className="overflow-hidden rounded-3xl border border-border/10 dark:border-border/50 dark:bg-[#0B1120]/90 bg-white/70 shadow-md backdrop-blur-xl">
        {/* Window Header */}
        <div className="flex items-center justify-between border-b dark:border-border/50 border-border/10 px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-500" />
            <span className="h-3 w-3 rounded-full bg-green-500" />
          </div>

          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-300 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400"
              >
                <RiGithubLine size={18} />
                Github
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-4 py-2 text-sm text-primary transition-all duration-300 hover:bg-primary hover:text-white"
              >
                <FaArrowUpRightFromSquare size={14} />
                {actionText}
              </a>
            )}
          </div>
        </div>

        <div
          className={`grid items-center gap-14 p-8 lg:grid-cols-2 lg:p-12 ${
            isReverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div className={isReverse ? "lg:text-right" : ""}>
            <div className="mb-5 flex items-center gap-3">
              <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-300">
                {project.category}
              </span>

              <span className="h-px flex-1 bg-linear-to-r from-primary/30 to-transparent" />
            </div>

            <h2 className="mb-6 text-3xl font-bold text-black dark:text-white lg:text-5xl">
              {project.title}
            </h2>

            <p className="leading-8 text-muted-foreground">{project.description}</p>

            <div
              className={`mt-8 flex flex-wrap gap-3 ${
                isReverse ? "lg:justify-end" : ""
              }`}
            >
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-border/10 dark:bg-white/5 bg-black/5 px-3 py-2 text-xs font-medium text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full rounded-2xl border dark:border-white/10 border-border/10 dark:bg-[#111827] bg-muted-foreground/10 p-5 dark:shadow-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-xl object-contain transition duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
