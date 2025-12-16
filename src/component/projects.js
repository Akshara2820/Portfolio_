import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaTimes, FaGithub, FaEye } from 'react-icons/fa';

const projects = [
  {
    title: 'Career Coach',
    description: 'A hiring platform with admin-managed job creation, eligibility rules, hiring workflows, and dashboard analytics.',
    fullDescription: 'Career Coach is a comprehensive hiring platform designed for educational institutions. Admins can create and manage companies, post jobs, and define complete hiring workflows including eligibility criteria and configurations. The admin dashboard provides detailed insights such as application rate, hit rate, offer letter rate, and CTC analytics.',
    tech: ['React.js', 'MUI', 'Redux', 'REST API'],
    image: '/careercoach.png',
    color: '#FFFFFF',
  },
  {
    title: 'Resume AI',
    description: 'An AI-powered platform to build ATS-friendly resumes with AI-generated content and skills recommendations.',
    fullDescription: 'Resume AI helps students create ATS-friendly resumes with AI-powered content generation. AI assists in generating content for every resume section, including skills recommendations based on the candidate profile and job description.',
    tech: ['React.js', 'TailwindCSS', 'REST API', 'AI'],
    image: '/resume.png',
    color: '#E0E0E0',
  },
  {
    title: 'OXO Website',
    description: 'A UI learning project focused on animations and fully responsive design across all devices.',
    fullDescription: 'The OXO website was built as a learning project to improve UI development skills with focus on creating clean, modern interface with smooth animations.',
    tech: ['React.js', 'TailwindCSS', 'Styled Components'],
    image: '/oxo.png',
    color: '#A0A0A0',
  },
  {
    title: 'Bostani',
    description: 'My first React.js project, built to learn React fundamentals and component architecture.',
    fullDescription: 'Bostani is my first project, built as a dummy website to learn and practice React.js fundamentals, including component-based architecture and state management.',
    tech: ['React.js', 'Tailwind'],
    image: '/boostani.png',
    color: '#10B981',
  },
];

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <motion.div className="absolute inset-0 bg-black/90 backdrop-blur-xl" />
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotateX: -15 }} animate={{ opacity: 1, scale: 1, rotateX: 0 }} exit={{ opacity: 0, scale: 0.8 }}
        transition={{ type: 'spring', damping: 25 }}
        className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10"
        style={{ background: 'linear-gradient(135deg, #111 0%, #0a0a0a 100%)', boxShadow: `0 0 80px ${project.color}20` }}
        onClick={(e) => e.stopPropagation()}
      >
        <motion.button onClick={onClose}
          className="absolute top-4 right-4 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }}
        >
          <FaTimes className="text-white text-lg" />
        </motion.button>

        <div className="relative h-72 overflow-hidden rounded-t-3xl">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top" onError={(e) => { e.target.style.display = 'none'; }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
          <motion.div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: project.color }}
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>

        <div className="p-8">
          <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>
          <p className="text-white/60 leading-relaxed mb-6">{project.fullDescription}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((item, idx) => (
              <span key={idx} className="text-sm px-4 py-2 rounded-full border"
                style={{ backgroundColor: `${project.color}15`, borderColor: `${project.color}40`, color: project.color }}
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <motion.button className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium"
              style={{ backgroundColor: project.color }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            >
              <FaEye /> View Live
            </motion.button>
            <motion.button className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium border border-white/20"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }} whileTap={{ scale: 0.95 }}
            >
              <FaGithub /> Source Code
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectCard = ({ project, index, totalCards, scrollYProgress, onClick }) => {
  const cardStart = index / totalCards;
  const opacity = useTransform(scrollYProgress, [cardStart - 0.05, cardStart], [0, 1]);
  const y = useTransform(scrollYProgress, [cardStart - 0.05, cardStart], [100, 0]);
  const scale = useTransform(scrollYProgress, [cardStart - 0.05, cardStart], [0.9, 1]);
  const [isHovered, setIsHovered] = useState(false);

  // Fun labels for projects
  const projectLabels = ['🔥 Hot', '⭐ Featured', '🚀 Latest', '💎 Classic'];

  return (
    <motion.div
      style={{ opacity, y, scale, zIndex: index, top: `${index * 60}px` }}
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="absolute w-full left-0 rounded-2xl border border-white/10 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] overflow-hidden cursor-pointer group"
      whileHover={{ borderColor: `${project.color}40` }}
    >
      {/* Image preview on hover */}
      <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
        style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'top' }}
      />

      {/* Glow effect */}
      <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at 0% 0%, ${project.color}15, transparent 50%)` }}
      />

      {/* Floating emoji on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute top-4 right-16 text-2xl pointer-events-none"
            initial={{ opacity: 0, scale: 0, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            👀
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 p-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <motion.span className="text-xs font-mono px-3 py-1 rounded-full"
              style={{ backgroundColor: `${project.color}20`, color: project.color }}
            >
              0{index + 1}
            </motion.span>
            <motion.span 
              className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/60"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
            >
              {projectLabels[index % projectLabels.length]}
            </motion.span>
          </div>
          <motion.div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <motion.span 
              className="text-xs text-white/40"
              animate={isHovered ? { opacity: [0.4, 1, 0.4] } : {}}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Click to explore
            </motion.span>
            <motion.div
              animate={isHovered ? { x: [0, 5, 0] } : {}}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaExternalLinkAlt style={{ color: project.color }} />
            </motion.div>
          </motion.div>
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white transition-colors">{project.title}</h3>
        <p className="text-white/50 text-sm mb-4 group-hover:text-white/70 transition-colors line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((item, idx) => (
            <motion.span key={idx} className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/60"
              whileHover={{ scale: 1.05, borderColor: `${project.color}40`, color: project.color }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Bottom accent */}
      <motion.div className="absolute bottom-0 left-0 h-1 rounded-full"
        style={{ backgroundColor: project.color }}
        initial={{ width: 0 }} animate={{ width: isHovered ? '100%' : '0%' }} transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

const Projects = () => {
  const containerRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });

  return (
    <>
      <section id="projects" ref={containerRef} className="relative w-full max-w-3xl mx-auto px-4" style={{ height: `${projects.length * 50}vh` }}>
        <div className="sticky top-20 h-auto py-10">
          {/* Header */}
          <motion.div className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
          >
            <motion.div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-gray-400/10 to-white/10 border border-white/10"
              initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} viewport={{ once: true }}
            >
              <FaEye className="text-gray-400" />
              <span className="text-sm font-medium text-gray-400">My Work</span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Featured</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">Projects</span>
            </h2>
          </motion.div>

          {/* Cards */}
          <div className="relative" style={{ height: `${projects.length * 60 + 150}px` }}>
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} totalCards={projects.length}
                scrollYProgress={scrollYProgress} onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </>
  );
};

export default Projects;
