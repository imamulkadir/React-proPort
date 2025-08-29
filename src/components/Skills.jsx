import React from "react";
import SectionWrapper from "./SectionWrapper";

const Skills = () => {
  const skills = ["React", "TailwindCSS", "Node.js", "Framer Motion"];
  return (
    <div className="transition-colors duration-500">
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100">
        Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full font-medium text-gray-900 dark:text-gray-100 transition-colors duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const WrappedSkills = SectionWrapper(Skills, "Projects");
export default WrappedSkills;
