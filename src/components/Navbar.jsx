import {
  Menu,
  X,
  House,
  CodeXml,
  User,
  BriefcaseBusiness,
  Mail,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

import { NavLink } from "react-router-dom";

import { motion, AnimatePresence } from "motion/react";

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

export default function Navbar() {
  const [MobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const menuRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);

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
          ? "md:max-w-7xl md:mx-auto md:mt-4 md:rounded-full bg-slate-950/50 backdrop-blur-md border border-primary/20 shadow-lg shadow-black/20"
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
          <div
            ref={menuRef}
            className="hidden md:flex items-center gap-2 relative rounded-full p-1"
          >
            {/* Sliding Indicator */}
            <motion.div
              className="absolute top-1 bottom-1 rounded-full bg-slate-900"
              animate={{
                left: indicator.left,
                width: indicator.width,
                opacity: indicator.opacity,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 28,
                mass: 0.8,
              }}
            />

            {NavLinks.map((nav) => (
              <NavLink key={nav.id} to={nav.to}>
                {({ isActive }) => (
                  <div
                    onMouseEnter={(e) => {
                      const parent = menuRef.current.getBoundingClientRect();
                      const target = e.currentTarget.getBoundingClientRect();

                      setIndicator({
                        left: target.left - parent.left,
                        width: target.width,
                        opacity: 1,
                      });
                    }}
                    onMouseLeave={() =>
                      setIndicator((prev) => ({
                        ...prev,
                        opacity: 0,
                      }))
                    }
                    className={`relative z-10 px-4 py-1 rounded-xl cursor-pointer transition-all duration-300 ${
                      isActive
                        ? "bg-linear-to-r from-blue-400 via-primary to-blue-400"
                        : ""
                    }`}
                  >
                    <span
                      className={`transition-colors duration-300 ${
                        isActive ? "text-white font-bold" : "text-gray-300"
                      }`}
                    >
                      {nav.label}
                    </span>
                  </div>
                )}
              </NavLink>
            ))}
          </div>

          {/* humberger menu */}
          <button
            className="md:hidden p-2 text-primary cursor-pointer"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {MobileMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {MobileMenuOpen && (
        <div className="md:hidden bg-slate-950 backdrop-blur-lg animate-in slide-in-from-top duration-300">
          <div className="grid grid-cols-2 px-5 py-5 gap-4">
            {NavLinks.map((nav) => (
              <NavLink
                to={nav.to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-2 rounded-xl px-4 py-3
                text-sm font-medium transition-all duration-300
                ${
                  isActive
                    ? "bg-cyan-500/10 border border-cyan-500/80 text-cyan-400"
                    : "text-gray-300 hover:bg-cyan-800/20 hover:text-white"
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
