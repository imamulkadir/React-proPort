import React from "react";
import { motion } from "framer-motion";

const SectionWrapper = (Component, sectionName) => {
  const WrappedSection = (props) => (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-5xl mx-auto px-6 py-20"
    >
      <Component {...props} />
    </motion.section>
  );

  WrappedSection.displayName = sectionName || Component.name;

  return WrappedSection;
};

export default SectionWrapper;
