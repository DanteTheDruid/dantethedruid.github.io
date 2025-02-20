const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Cox Automotive Inc.",
    period: "Aug 2024 - Present",
    description: "Currently working as a Senior Software Engineer, bringing expertise in full-stack development and enterprise solutions.",
    technologies: ["JavaScript", "React", "Node.js", "AWS"]
  },
  {
    title: "Senior Application Development Lead / Release Manager ↗️",
    company: "ADP",
    period: "Sep 2021 - Apr 2024",
    promotion: true,
    description: `Led multiple successful SCRUM and Kanban teams working on critical HCM products for large clients including Amazon, GNC, and Wal-Mart. Managed 100+ successful software releases, worked with both Low/No-Code and Full Code solutions, and collaborated with Product Management, UX, & Architects to achieve client satisfaction.`,
    technologies: ["Go-Lang", "JavaScript", "AWS", "Docker", "Jenkins", "SQL", "REST-API", ".NET"]
  },
  {
    title: "Application Development Lead",
    company: "ADP",
    period: "Mar 2021 - Sep 2021",
    promotion: true,
    description: "Started as Application Development Lead before being promoted to Senior Lead position. Demonstrated exceptional performance leading to internal conversion and promotion.",
    technologies: ["JavaScript", "React.js", "TypeScript", "SQL", "Microservices"]
  },
  // ... rest of experiences
];

return (
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
            className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg relative"
          >
            {exp.promotion && (
              <div className="absolute -left-3 top-1/2 h-full w-1 bg-blue-400 transform -translate-y-1/2" />
            )}
            <h3 className="text-xl md:text-2xl font-bold text-blue-400">{exp.title}</h3>
            <p className="text-lg md:text-xl text-gray-300">{exp.company}</p>
            <p className="text-gray-400 mb-4">{exp.period}</p>
            <p className="text-gray-300 mb-4">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
); 