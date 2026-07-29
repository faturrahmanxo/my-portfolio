import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="group w-8 h-8 md:w-9 md:h-9 rounded-xl flex items-center justify-center dark:text-white text-muted hover:text-primary transition-all duration-300 hover:bg-primary/5 relative"
    >
      {theme === "dark" ? (
        <Moon className="w-4.5 h-4.5 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
      ) : (
        <Sun className="w-4.5 h-4.5 md:w-5 md:h-5 group-hover:-rotate-60 active:rotate-180 transition-transform" />
      )}
    </button>
  );
}
