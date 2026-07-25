import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence, motion } from "motion/react";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";

function AnimatedPage({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Cursor />
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/about"
            element={
              <AnimatedPage>
                <AboutPage />
              </AnimatedPage>
            }
          />

          <Route
            path="/experience"
            element={
              <AnimatedPage>
                <ExperiencePage />
              </AnimatedPage>
            }
          />

          <Route
            path="/projects"
            element={
              <AnimatedPage>
                <ProjectPage />
              </AnimatedPage>
            }
          />

          <Route
            path="/contact"
            element={
              <AnimatedPage>
                <ContactPage />
              </AnimatedPage>
            }
          />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default App;
