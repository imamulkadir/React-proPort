import React from "react";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    { name: "Client 1", quote: "Imamul is fantastic to work with!" },
    { name: "Client 2", quote: "Reliable, skilled, and very creative." },
  ];

  return (
    <div className="transition-colors duration-500">
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100">
        Testimonials
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02 }}
            className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md transition-colors duration-300"
          >
            <p className="italic text-gray-600 dark:text-gray-300">
              "{t.quote}"
            </p>
            <h4 className="mt-4 font-semibold text-gray-900 dark:text-gray-100">
              - {t.name}
            </h4>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const WrappedTestimonials = SectionWrapper(Testimonials, "Projects");
export default WrappedTestimonials;
