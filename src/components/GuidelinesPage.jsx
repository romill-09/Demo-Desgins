// components/GuidelinesPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

export default function GuidelinesPage() {
  const navigate = useNavigate();
  const steps = [
    { icon: "📦", text: "Place the plastic in the collector" },
    { icon: "▶️", text: "Press start to begin the process" },
    { icon: "⚖️", text: "Wait for the machine to assess (1-5kg only)" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white bg-opacity-80 backdrop-blur-md rounded-lg shadow-xl overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-center mb-6">How It Works</h2>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex items-center space-x-4 bg-green-50 p-4 rounded-lg"
              >
                <span className="text-2xl">{step.icon}</span>
                <p className="flex-1">{step.text}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="mt-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300 flex items-center justify-center"
              onClick={() => navigate('/machine-interface')}
            >
              I'm Ready
              <span className="ml-2">➡️</span>
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}