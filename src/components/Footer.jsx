import { Link } from "react-router-dom";
import {
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiTwitterXLine,
} from "react-icons/ri";

const links = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Experience", to: "/experience" },
  { name: "Projects", to: "/projects" },
  { name: "Contact", to: "/contact" },
];

const socials = [
  {
    icon: <RiGithubLine size={20} />,
    href: "https://github.com/faturrahmanxo",
  },
  {
    icon: <RiLinkedinLine size={20} />,
    href: "https://www.linkedin.com/in/fatur02/",
  },
  {
    icon: <RiInstagramLine size={20} />,
    href: "https://www.instagram.com/faturrahmanxo?igsMW50OHpmaHRhaTBzbA==",
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 overflow-hidden font-primary">
      {/* Glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/70 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          {/* LEFT */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-3xl font-bold bg-linear-to-r from-blue-400 via-primary to-blue-400 bg-clip-text text-transparent">
              Fatur.
            </h2>

            <p className="mt-5 max-w-xs text-sm leading-7 text-muted-foreground text-center md:text-left">
              Building modern websites and digital experiences with clean code,
              elegant design, and meaningful user interactions.
            </p>
          </div>

          {/* CENTER */}
          <div className="flex flex-col items-center">
            <span className="text-xs tracking-[0.25em] uppercase text-muted-foreground">
              Navigation
            </span>

            <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-4">
              {links.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className="relative text-muted-foreground transition duration-300 hover:text-primary after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-center md:items-end">
            <span className="text-xs tracking-[0.25em] uppercase text-muted-foreground">
              Connect
            </span>

            <div className="mt-6 flex gap-4">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="
                  group
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-border/10
                  dark:border-border/50
                  bg-white/5
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-primary
                  hover:bg-primary/10
                  text-muted-foreground
                  hover:text-primary
                  hover:-translate-y-1
                  hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]
                  "
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-14 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Fatur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
