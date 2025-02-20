import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // ... existing useEffect

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/95 backdrop-blur-sm py-4' : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <motion.div
            className="text-xl font-bold"
            whileHover={{ scale: 1.1 }}
          >
            Dante Morrello
          </motion.div>
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>
          <ul className={`md:flex md:space-x-8 ${mobileMenuOpen ? 'block' : 'hidden'} 
            absolute md:relative top-full left-0 right-0 md:top-auto 
            bg-gray-900/95 md:bg-transparent p-4 md:p-0 mt-2 md:mt-0 
            space-y-4 md:space-y-0`}
          >
            {['About', 'Experience', 'Skills', 'Contact'].map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-blue-400 transition-colors block md:inline-block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>
    </motion.header>
  );
}

export default Header; 