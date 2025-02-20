import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen">
      <Header />
      <main className="container mx-auto px-4">
        <Hero />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App; 