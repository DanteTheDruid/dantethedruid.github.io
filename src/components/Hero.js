    <section id="about" className="min-h-screen flex items-center justify-center">
      <div className="text-center px-4 md:px-8">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Dante Morrello
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-3xl text-blue-400 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Senior Software Engineer
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4"
        >
          {/* Add your paragraph content here */}
        </motion.p>
      </div>
    </section> 