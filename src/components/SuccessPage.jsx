// components/SuccessPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

export default function SuccessPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

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
            <h2 className="text-2xl font-bold text-green-600">Successfully Executed</h2>
            <p className="text-gray-600 mt-2">
              Thank you for your contribution to a cleaner environment!
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center justify-between mb-6"
          >
            <div className="flex-1 pr-4">
              <p className="text-sm text-gray-600">
                To be a part of this initiative, download our app:
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button className="mt-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300 flex items-center">
                  <span className="mr-2">ℹ️</span> More Info
                </button>
              </motion.div>
            </div>
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img
                src="/placeholder.svg"
                alt="App QR Code"
                width={100}
                height={100}
                className="rounded-lg"
              />
            </motion.div>
          </motion.div>
          <div className="space-y-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300 flex items-center justify-center"
                onClick={() => navigate('/machine-interface')}
              >
                <span className="mr-2">➕</span> Add More Plastic
              </button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300 flex items-center justify-center"
                onClick={handleLogout}
              >
                <span className="mr-2">🚪</span> Logout
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}