import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "Redux"]
  },
  {
    title: "Tools",
    skills: ["GraphQL", "Git", "Webpack", "Vite", "Firebase", "GenAI"]
  },
  {
    title: "Design",
    skills: ["Figma", "Adobe XD", "UI/UX Principles", "Responsive Design"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 md:mb-24 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6 text-white">Technical Arsenal</h2>
          <p className="text-primary/50 max-w-2xl mx-auto text-lg">
            A curated set of technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#121212] border border-white/5 p-8 rounded-3xl hover:border-white/10 transition-colors duration-300 group"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-display font-semibold text-white mb-2">
                  {category.title}
                </h3>
                <div className="w-12 h-1 bg-accent rounded-full opacity-50 group-hover:w-24 transition-all duration-500" />
              </div>

              <div className="flex flex-wrap gap-x-2 gap-y-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-white/5 hover:bg-white/10 text-primary/70 hover:text-white text-sm rounded-xl border border-white/5 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
