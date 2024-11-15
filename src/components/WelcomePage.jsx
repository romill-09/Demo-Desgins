// components/WelcomePage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

export default function WelcomePage() {
  const navigate = useNavigate();
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const newBubbles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 60 + 20,
      left: Math.random() * 100,
      animationDuration: Math.random() * 10 + 5,
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <div className="relative">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.left}%`,
            bottom: '-200px',
            background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8), rgba(173, 216, 230, 0.4))',
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.5)',
          }}
          animate={{
            y: [0, -600],
          }}
          transition={{
            duration: bubble.animationDuration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-xl overflow-hidden z-10 relative"
      >
        <div className="p-8">
          <motion.div
            className="flex justify-center mb-6"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img
              src="/placeholder.svg?height=100&width=100"
              alt="EcoSort Logo"
              width={100}
              height={100}
              className="rounded-full"
            />
          </motion.div>
          <h1 className="text-3xl font-bold text-center text-green-600 mb-2">EcoSort</h1>
          <p className="text-center text-gray-600 mb-6">
            Welcome to the future of plastic segregation. 
            Let's make recycling smarter, together.
          </p>
          <div className="space-y-4">
            <button
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
              onClick={() => navigate('/auth?mode=signup')}
            >
              Sign Up
            </button>
            <button
              className="w-full border border-green-500 text-green-500 hover:bg-green-50 font-bold py-2 px-4 rounded transition-colors duration-300"
              onClick={() => navigate('/auth?mode=login')}
            >
              Login
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}