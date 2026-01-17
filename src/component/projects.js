import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const projects = [
  {
    title: 'Career Coach',
    shortDescription: 'Hiring platform with admin-managed workflows.',
    fullDescription: 'Career Coach is a comprehensive hiring platform designed for educational institutions. Admins can create and manage companies, post jobs, and define complete hiring workflows including eligibility criteria and configurations. The admin dashboard provides detailed insights such as application rate, hit rate, offer letter rate, and CTC analytics.',
    tech: ['React', 'Redux', 'MUI', 'REST API'],
    image: '/careercoach.png',
    link: '#',
    github: '#'
  },
  {
    title: 'Resume AI',
    shortDescription: 'AI-powered resume builder.',
    fullDescription: 'Resume AI helps students create ATS-friendly resumes with AI-powered content generation. AI assists in generating content for every resume section, including skills recommendations based on the candidate profile and job description.',
    tech: ['React', 'Tailwind', 'OpenAI API'],
    image: '/resume.png',
    link: '#',
    github: '#'
  },
  {
    title: 'OXO Design',
    shortDescription: 'Experimental UI playground.',
    fullDescription: 'The OXO website was built as a learning project to improve UI development skills with focus on creating clean, modern interface with smooth animations and complex layout transitions.',
    tech: ['Framer Motion', 'React', 'GSAP'],
    image: '/oxo.png',
    link: '#',
    github: '#'
  },
  {
    title: 'Bostani',
    shortDescription: 'E-commerce interface.',
    fullDescription: 'Bostani is my first project, built as a dummy website to learn and practice React.js fundamentals, including component-based architecture, state management, and responsive design principles.',
    tech: ['React', 'Tailwind', 'Context API'],
    image: '/boostani.png',
    link: '#',
    github: '#'
  },
];

const ProjectDetail = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 md:py-12 bg-background/80 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div
        layoutId={`project-${project.title}`}
        className="w-full max-w-5xl h-full max-h-[90vh] bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden flex flex-col md:flex-row relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-black/80 transition-all border border-white/10"
        >
          <FaTimes />
        </button>

        {/* Image Section */}
        <div className="w-full md:w-1/2 h-[40vh] md:h-full bg-white/5 relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent md:bg-gradient-to-r" />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-2">{project.title}</h2>
            <p className="text-primary/60 text-lg mb-8">{project.shortDescription}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-primary/80">
                  {tech}
                </span>
              ))}
            </div>

            <div className="prose prose-invert max-w-none text-primary/70 mb-12 leading-relaxed">
              <p>{project.fullDescription}</p>
            </div>

            <div className="flex gap-4">
              <a
                href={project.link}
                className="flex-1 py-4 bg-white text-black font-medium rounded-full text-center hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
              >
                <FaExternalLinkAlt className="text-sm" /> Live Site
              </a>
              <a
                href={project.github}
                className="flex-1 py-4 border border-white/10 text-white font-medium rounded-full text-center hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
              >
                <FaGithub className="text-lg" /> Source
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="mb-12 border-b border-white/5 pb-4 flex justify-between items-end">
        <h2 className="text-3xl font-display font-medium">Selected Work</h2>
        <span className="text-sm text-primary/40 font-mono">Click to view details</span>
      </div>

      <div className="flex flex-col">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            layoutId={`project-${project.title}`}
            className="group relative flex flex-col md:flex-row md:items-center justify-between py-12 border-b border-white/5 hover:bg-white/[0.02] cursor-pointer transition-colors duration-300 px-4 -mx-4 rounded-lg"
            onClick={() => setSelectedProject(project)}
          >
            <div className="z-10">
              <h3 className="text-3xl md:text-5xl font-display font-medium text-primary/40 group-hover:text-white transition-colors">
                {project.title}
              </h3>
            </div>

            <div className="z-10 mt-2 md:mt-0 text-right">
              <p className="text-primary/40 text-sm font-mono group-hover:text-primary/80 transition-colors">
                {project.tech.join(' · ')}
              </p>
              <p className="text-primary/20 text-xs hidden md:block mt-1 group-hover:text-primary/60 transition-colors">
                Read Case Study →
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
