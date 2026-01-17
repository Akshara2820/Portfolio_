import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  "React", "Next.js", "TypeScript", "Tailwind CSS",
  "Framer Motion", "Node.js", "Redux", "GraphQL",
  "Three.js", "Git", "Figma", "GSAP"
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 overflow-hidden">
      <div className="mb-12 px-4 md:px-12 lg:px-24">
        <h2 className="text-3xl font-display font-medium mb-1">Toolbox</h2>
        <span className="text-sm text-primary/40 font-mono">Endless Learning</span>
      </div>

      <div className="relative flex overflow-hidden group">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />

        <motion.div
          className="flex gap-8 whitespace-nowrap py-8"
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear"
            }
          }}
        >
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <span
              key={index}
              className="text-6xl md:text-8xl font-display font-bold text-transparent stroke-text hover:text-white transition-colors duration-300 select-none cursor-default"
              style={{ WebkitTextStroke: '1px #333' }}
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
