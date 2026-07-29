import {
  Menu,
  X,
  House,
  CodeXml,
  User,
  BriefcaseBusiness,
  Mail,
  Moon,
  Globe,
} from "lucide-react";
import { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";

import { motion, AnimatePresence } from "motion/react";
import ThemeToggle from "./ThemeToggle";

const NavLinks = [
  {
    id: 1,
    icon: House,
    to: "/",
    label: "Home",
  },
  {
    id: 2,
    icon: User,
    to: "/about",
    label: "About",
  },
  {
    id: 3,
    icon: BriefcaseBusiness,
    to: "/experience",
    label: "Experience",
  },
  {
    id: 4,
    icon: CodeXml,
    to: "/projects",
    label: "Projects",
  },
  {
    id: 5,
    icon: Mail,
    to: "/contact",
    label: "Contact",
  },
];

export default function Navbar({ theme, toggleTheme }) {
  const [MobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    // Cek posisi saat pertama kali render
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 font-primary">
      <div
        className={`
      transition-all duration-500 ease-in-out
      ${
        isScrolled
          ? "dark:bg-slate-950 bg-white border-b dark:border-muted-foreground/20 border-border/20 shadow-sm shadow-black/5"
          : "w-full bg-transparent border-transparent"
      }
    `}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
          <NavLink
            to="/"
            className="text-xl font-bold bg-linear-to-r from-blue-400 via-primary to-blue-400 bg-clip-text text-transparent"
          >
            Fatur.
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2 relative rounded-full p-1">
            {NavLinks.map((nav) => (
              <NavLink key={nav.id} to={nav.to}>
                {({ isActive }) => (
                  <div
                    className={`relative z-10 px-4 py-1 rounded-xl cursor-pointer transition-all duration-300 ${
                      isActive
                        ? "bg-linear-to-r from-blue-400 via-primary to-blue-400"
                        : ""
                    }`}
                  >
                    <span
                      className={`transition-all duration-300 ${
                        isActive
                          ? "text-white font-bold"
                          : "text-muted-foreground dark:hover:text-white hover:text-black"
                      }`}
                    >
                      {nav.label}
                    </span>
                  </div>
                )}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

            {/* Hamburger */}
            <button
              className="md:hidden flex items-center p-2 dark:text-white text-muted hover:text-primary transition-all duration-300 cursor-pointer"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
              {MobileMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {MobileMenuOpen && (
        <div className="md:hidden dark:bg-slate-950 bg-white animate-in slide-in-from-top duration-300">
          <div className="grid grid-cols-2 px-5 py-5 gap-4">
            {NavLinks.map((nav) => (
              <NavLink
                to={nav.to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-2 rounded-xl px-4 py-3
                text-sm font-medium transition-colors duration-300
                ${
                  isActive
                    ? "bg-primary/10 border border-primary/80 text-primary"
                    : "text-muted-foreground dark:hover:bg-primary/10 hover:text-muted dark:hover:text-white"
                }`
                }
              >
                <nav.icon className="w-4 h-4" />
                {nav.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
