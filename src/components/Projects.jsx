import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const Projects = () => {
  const projectList = [
    { title: "Project 1", desc: "Sleek and modern web app", link: "#" },
    { title: "Project 2", desc: "Responsive and scalable", link: "#" },
    { title: "Project 3", desc: "Optimized for performance", link: "#" },
  ];

  return (
    <div className="transition-colors duration-500">
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100">
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projectList.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300"
          >
            <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{project.desc}</p>
            <a
              href={project.link}
              className="text-blue-500 hover:underline mt-4 inline-block dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const WrappedProjects = SectionWrapper(Projects, "Projects");
export default WrappedProjects;
