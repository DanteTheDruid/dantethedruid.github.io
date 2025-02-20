    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl md:text-2xl font-bold text-blue-400">{exp.title}</h3>
              <p className="text-lg md:text-xl text-gray-300">{exp.company}</p>
              <p className="text-gray-400 mb-4">{exp.period}</p>
              <p className="text-gray-300 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2"> 