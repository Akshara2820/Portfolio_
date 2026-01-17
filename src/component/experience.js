import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Masters' Union",
    role: "Frontend Developer",
    period: "2024 - Present",
    description: "Building scalable web platforms and leading frontend architecture decisions."
  },
  {
    company: "Tif Labs",
    role: "Frontend Developer",
    period: "2022 - 2024",
    description: "Developed client-facing applications using the modern React ecosystem."
  },
  {
    company: "Hyperverge",
    role: "Frontend Developer Intern",
    period: "2021 - 2022",
    description: "Contributed to AI-powered interface development and component libraries."
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-12 border-b border-white/10 pb-4 flex justify-between items-end"
      >
        <h2 className="text-3xl font-display font-medium">Experience</h2>
        <span className="text-sm text-primary/40 font-mono">My Path</span>
      </motion.div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group grid grid-cols-1 md:grid-cols-12 gap-4 py-8 border-b border-white/5 hover:bg-white/[0.02] transition-colors -mx-4 px-4 rounded-lg"
          >
            <div className="md:col-span-3">
              <span className="text-primary/40 font-mono text-sm">{exp.period}</span>
            </div>
            <div className="md:col-span-4">
              <h3 className="text-xl font-display font-medium text-white">{exp.company}</h3>
              <p className="text-primary/60 text-sm mt-1">{exp.role}</p>
            </div>
            <div className="md:col-span-5">
              <p className="text-primary/70 leading-relaxed max-w-lg">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
