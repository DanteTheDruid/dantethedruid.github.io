import React from 'react';
import { motion } from 'framer-motion';

function Skills() {
  const skills = [
    { 
      category: "Languages & Frameworks", 
      items: ["JavaScript", "TypeScript", "C#", "Go-Lang", "React.js", "Node.js", "PHP"]
    },
    { 
      category: "Automation & Testing", 
      items: ["Selenium", "Ranorex", "PowerShell", "Test Automation", "CI/CD", "Jenkins", "Docker"]
    },
    { 
      category: "Cloud & Tools", 
      items: ["AWS", "Azure", "Git", "REST API", "SQL", "Microservices", "Jira"]
    },
    { 
      category: "Development", 
      items: ["Agile/Scrum", "Low-Code Platforms", "D365", "Power Platform", "Test-Driven Development"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills; 