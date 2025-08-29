import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";
import SectionWrapper from "./SectionWrapper";

const Header = () => {
  // State for theme
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage or system preference
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Update HTML class & localStorage when darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header
      className="w-full py-4 px-6 flex justify-between items-center sticky top-0 z-50 shadow-md rounded-2xl
             bg-white text-gray-900 dark:bg-gray-900 dark:text-white
             transition-colors duration-500"
    >
      <h1 className="text-xl font-bold">Imamul Kadir</h1>

      {/* Animated Theme Toggle */}
      <motion.button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-yellow-400
               transition-colors duration-300 cursor-pointer"
        whileTap={{ scale: 0.85 }}
        whileHover={{ rotate: 10 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {darkMode ? (
            <motion.div
              key="sun"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.3 }}
            >
              <FaSun className="text-lg" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.3 }}
            >
              <FaMoon className="text-lg" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </header>
  );
};

const WrappedHeader = SectionWrapper(Header, "Header");
export default WrappedHeader;
