import SectionWrapper from "./SectionWrapper";
const About = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 text-center transition-colors duration-500">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        About Me
      </h2>
      <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
        I'm a passionate developer who loves building sleek, user-friendly
        websites and applications. With a focus on performance, accessibility,
        and design, I help brands stand out in the digital space.
      </p>
      <div className="mt-6">
        <a
          href="#"
          className="px-6 py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300"
        >
          View My CV
        </a>
      </div>
    </section>
  );
};

const WrappedAbout = SectionWrapper(About, "About");
export default WrappedAbout;
