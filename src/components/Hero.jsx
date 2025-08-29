import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import SectionWrapper from "./SectionWrapper"; // <-- Make sure this import exists
import headshot from "../assets/headhsot.jpg";

const Hero = () => {
  return (
    <div className="text-center transition-colors duration-500">
      <img
        src={headshot}
        alt="Headshot"
        className="w-32 h-32 rounded-full border-4 border-gray-300 dark:border-gray-700 mx-auto"
      />
      <h1 className="mt-6 text-4xl font-bold text-gray-900 dark:text-gray-100">
        Imamul Kadir
      </h1>
      <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
        Web Developer & Designer
      </p>
      <div className="flex justify-center gap-4 mt-4">
        <a
          href="#"
          className="text-2xl text-gray-800 dark:text-gray-200 hover:text-blue-500 transition-colors duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="#"
          className="text-2xl text-gray-800 dark:text-gray-200 hover:text-blue-500 transition-colors duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="#"
          className="text-2xl text-gray-800 dark:text-gray-200 hover:text-blue-500 transition-colors duration-300"
        >
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
};

// Wrap the component using SectionWrapper before exporting
const WrappedHero = SectionWrapper(Hero, "Hero");
export default WrappedHero;
