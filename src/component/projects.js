import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio built with React.js and TailwindCSS.",
    tech: ["React", "Tailwind", "Framer Motion"],
  },
  {
    title: "Job Tracker App",
    description: "Track job applications with filters, auth and dark mode.",
    tech: ["React", "Redux", "Node.js"],
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio built with React.js and TailwindCSS.",
    tech: ["React", "Tailwind", "Framer Motion"],
  },
  {
    title: "Job Tracker App",
    description: "Track job applications with filters, auth and dark mode.",
    tech: ["React", "Redux", "Node.js"],
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio built with React.js and TailwindCSS.",
    tech: ["React", "Tailwind", "Framer Motion"],
  },
  {
    title: "Job Tracker App",
    description: "Track job applications with filters, auth and dark mode.",
    tech: ["React", "Redux", "Node.js"],
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio built with React.js and TailwindCSS.",
    tech: ["React", "Tailwind", "Framer Motion"],
  },
  {
    title: "Job Tracker App",
    description: "Track job applications with filters, auth and dark mode.",
    tech: ["React", "Redux", "Node.js"],
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio built with React.js and TailwindCSS.",
    tech: ["React", "Tailwind", "Framer Motion"],
  },
  {
    title: "Job Tracker App",
    description: "Track job applications with filters, auth and dark mode.",
    tech: ["React", "Redux", "Node.js"],
  },
];

const ProjectCard = ({ title, description, tech, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.6, delay: index * 0.3 }}
      className={`absolute w-full left-0 p-6 rounded-xl border border-white/10 bg-[#111111] shadow-md transition-all duration-300 ${
        index === 0 ? "z-10" : "z-20"
      }`}
      style={{ top: `${index * 60}px` }}
    >
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-[#bbbbbb] text-sm mb-3">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((item, idx) => (
          <span
            key={idx}
            className="text-xs px-3 py-1 border border-white/10 rounded-full bg-white/5 text-[#999]"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="relative w-full max-w-xl mx-auto px-4 py-32">
      <div className="relative h-[600px]">
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
