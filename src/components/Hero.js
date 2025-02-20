import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <motion.h1
          className="text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Dante Morrello
        </motion.h1>
        <motion.h2
          className="text-3xl text-blue-400 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Senior Software Engineer
        </motion.h2>
        <motion.p
          className="text-xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Experienced software engineer with a proven track record in full-stack development, 
          team leadership, and delivering enterprise-scale solutions for Fortune 500 companies.
          Specialized in both low-code and full-code development with expertise in modern web technologies.
        </motion.p>
      </div>
    </section>
  );
}

export default Hero; 