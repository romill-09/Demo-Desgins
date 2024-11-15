// components/AcceptedPlasticPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const facts = [
  "Recycling one plastic bottle saves enough energy to power a 60-watt light bulb for 3 hours.",
  "It takes up to 1000 years for plastic to decompose in landfills.",
  "Over 1 million marine animals die each year from plastic debris in the ocean.",
  "Recycling plastic uses 88% less energy than making plastic from raw materials.",
];

export default function AcceptedPlasticPage() {
  const navigate = useNavigate();
  const [currentFact, setCurrentFact] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % facts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white bg-opacity-80 backdrop-blur-md rounded-lg shadow-xl overflow-hidden">
        <div className="p-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="text-center mb-6"
          >
            <span className="text-6xl mb-4">✅</span>
            <h2 className="text-2xl font-bold text-green-600">Quality Verified</h2>
            <p className="text-gray-600">Your plastic has been accepted for processing.</p>
          </motion.div>
          <motion.div
            className="bg-green-100 p-4 rounded-lg mb-6"
            animate={{ backgroundColor: ["#f0fff4", "#c6f6d5", "#f0fff4"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <h3 className="font-bold mb-2">Did you know?</h3>
            <AnimatePresence mode="wait">
              <motion.p
                key={currentFact}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {facts[currentFact]}
              </motion.p>
            </AnimatePresence>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
              onClick={() => navigate('/success')}
            >
              Continue
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}