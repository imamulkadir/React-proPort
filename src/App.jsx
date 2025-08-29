import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;

// // App.jsx
// import React, { useState, useEffect } from "react";

// export default function App() {
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     if (darkMode) document.documentElement.classList.add("dark");
//     else document.documentElement.classList.remove("dark");
//   }, [darkMode]);

//   return (
//     <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col items-center justify-center transition-colors duration-500">
//       <h1 className="text-4xl font-bold">Tailwind v4 Dark Mode Test</h1>
//       <button
//         onClick={() => setDarkMode(!darkMode)}
//         className="mt-4 px-6 py-3 bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600 text-white rounded-lg transition-colors duration-300"
//       >
//         Toggle Dark Mode
//       </button>
//     </div>
//   );
// }
