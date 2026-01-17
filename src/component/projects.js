import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import {FaExternalLinkAlt, FaTimes, FaArrowRight } from 'react-icons/fa';

const projects = [
  {
    title: 'Career Coach',
    category: 'Platform',
    shortDescription: 'Comprehensive hiring dashboard for educational institutions.',
    fullDescription: 'Career Coach is a comprehensive hiring platform designed for educational institutions. Admins can create and manage companies, post jobs, and define complete hiring workflows including eligibility criteria and configurations. The admin dashboard provides detailed insights such as application rate, hit rate, offer letter rate, and CTC analytics.',
    tech: ['React', 'Redux', 'MUI', 'REST API'],
    image: '/careercoach.png',
    link: 'https://admin.mastersunion.in/',
    github: '#',
    style: 'dark'
  },
  {
    title: 'Resume AI',
    category: 'AI Tool',
    shortDescription: 'AI-powered ATS resume builder.',
    fullDescription: 'Resume AI helps students create ATS-friendly resumes with AI-powered content generation. AI assists in generating content for every resume section, including skills recommendations based on the candidate profile and job description.',
    tech: ['React', 'Tailwind', 'OpenAI'],
    image: '/resume.png',
    link: 'https://www.resume.mastersunion.org/login',
    github: '#',
    style: 'color'
  },
  {
    title: 'OXO Design',
    category: 'Experimental',
    shortDescription: 'Experimental UI playground and design system.',
    fullDescription: 'The OXO website was built as a learning project to improve UI development skills with focus on creating clean, modern interface with smooth animations and complex layout transitions.',
    tech: ['Framer', 'GSAP', 'React'],
    image: '/oxo.png',
    link: 'https://oxo-website-sandy.vercel.app/',
    github: '#',
    style: 'dark'
  },
  {
    title: "Masters' Union",
    category: 'EdTech',
    shortDescription: 'Managed the Masters\' Union website.',
    fullDescription: 'Managed the Masters\' Union website, ensuring a seamless information flow and user experience for a new-age business school.',
    tech: ['Web Management', 'React'],
    image: '/mastersunion.png',
    link: 'https://mastersunion.org/',
    github: '#',
    style: 'dark'
  },
];

const ProjectCard = ({ project, onClick }) => {
  return (
    <Tilt
      tiltMaxAngleX={2}
      tiltMaxAngleY={2}
      scale={1.01}
      transitionSpeed={1000}
      className="group relative overflow-hidden rounded-[2rem] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 min-h-[400px] md:min-h-[450px] bg-[#161617]"
    >
      <div onClick={() => onClick(project)} className="absolute inset-0 flex flex-col p-8 md:p-10">
        {/* Text Section */}
        <div className="relative z-20 mb-6 md:mb-8 pointer-events-none">
          <span className="text-primary/40 text-xs font-semibold tracking-widest uppercase mb-2 block">
            {project.category}
          </span>
          <h3 className="text-3xl md:text-4xl font-display font-semibold text-white mb-3 tracking-tight">
            {project.title}
          </h3>
          <p className="text-primary/60 text-base md:text-lg max-w-md font-medium leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Image Section - Floating Mockup Style */}
        <div className="relative flex-1 w-full rounded-t-xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-transform duration-500 group-hover:scale-[1.02] group-hover:translate-y-[-5px]">
          <div className="absolute inset-0 bg-[#2C2C2E] rounded-t-xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-500"
            />
          </div>
          {/* Gloss Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>

        {/* Arrow Icon */}
        <div className="absolute top-8 right-8 z-30 bg-white/10 p-3 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <FaArrowRight className="text-white text-lg -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
        </div>
      </div>
    </Tilt>
  );
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8 bg-black/80 backdrop-blur-2xl"
      onClick={onClose}
    >
      <motion.div
        layoutId={`card-${project.title}`}
        className="w-full max-w-5xl bg-[#1C1C1E] rounded-[2rem] overflow-hidden shadow-2xl relative max-h-[85vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 w-10 h-10 bg-[#2C2C2E] rounded-full text-white/50 hover:text-white flex items-center justify-center transition-colors"
        >
          <FaTimes size={18} />
        </button>

        {/* Image Side */}
        <div className="w-full md:w-7/12 bg-[#000] relative">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>

        {/* Content Side */}
        <div className="w-full md:w-5/12 p-8 md:p-10 flex flex-col overflow-y-auto bg-[#1C1C1E] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          <div className="mb-8">
            <span className="text-accent text-sm font-bold tracking-widest uppercase mb-4 block">{project.category}</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 tracking-tight">{project.title}</h2>
            <p className="text-primary/80 leading-relaxed text-base font-medium">
              {project.fullDescription}
            </p>
          </div>

          <div className="mt-auto">
            <h4 className="text-xs text-primary/40 uppercase tracking-widest font-bold mb-4">Core Technologies</h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <span key={tech} className="px-4 py-2 bg-[#2C2C2E] rounded-full text-sm font-medium text-white/90">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-white text-black font-bold text-lg rounded-xl text-center hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                <FaExternalLinkAlt size={16} /> Open Project
              </a>

            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6 tracking-tighter text-white">
            Projects
          </h2>
          <p className="text-xl text-primary/60 max-w-2xl mx-auto leading-relaxed">
            A collection of projects crafted with precision and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onClick={setSelectedProject}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
