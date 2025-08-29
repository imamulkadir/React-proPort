import SectionWrapper from "./SectionWrapper";

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-200 dark:bg-gray-900 text-center text-gray-600 dark:text-gray-300 transition-colors duration-500">
      <p>© {new Date().getFullYear()} Imamul Kadir. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
