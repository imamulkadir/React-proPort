import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const Pricing = () => {
  const plans = [
    { title: "Basic", price: "$100", features: ["Feature 1", "Feature 2"] },
    {
      title: "Pro",
      price: "$200",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    { title: "Enterprise", price: "$300", features: ["All Features"] },
  ];

  return (
    <div className="transition-colors duration-500">
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100">
        Pricing
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md text-center transition-colors duration-300"
          >
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              {plan.title}
            </h3>
            <p className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              {plan.price}
            </p>
            <ul className="text-gray-600 dark:text-gray-300 mb-6 space-y-2">
              {plan.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300">
              Choose Plan
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const WrappedPricing = SectionWrapper(Pricing, "Pricing");
export default WrappedPricing;
