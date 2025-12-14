import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Career Coach",
    description: "A hiring platform with admin-managed job creation, eligibility rules, hiring workflows, and dashboard analytics. Students can apply only to eligible jobs.",
    fullDescription: "Career Coach is a comprehensive hiring platform designed for educational institutions. Admins can create and manage companies, post jobs, and define complete hiring workflows including eligibility criteria and configurations. The admin dashboard provides detailed insights such as application rate, hit rate, offer letter rate, and CTC analytics to track hiring performance. On the student side, students can view and apply only to the jobs for which they are eligible, ensuring a streamlined and fair application process.",
    tech: ["React.js", "MUI", "Redux", "REST API"],
    image: "/careercoach.png",
  },
  {
    title: "Resume AI",
    description: "An AI-powered platform to build ATS-friendly resumes, with AI-generated content and skills based on profile and job descriptions, plus full manual editing support.",
    fullDescription: "Resume AI is a platform that helps students create ATS-friendly resumes with the support of AI-powered content generation. AI assists in generating content for every resume section, including skills recommendations based on the candidate's profile and the job description (JD). The platform also provides full flexibility, allowing users to manually add, edit, or customize content, with AI support available at every step to enhance quality and relevance.",
    tech: ["React.js", "TailwindCSS", "REST API", "AI"],
    image: "/resume.png",
  },
  {
    title: "OXO Website",
    description: "A UI learning project focused on animations and fully responsive design across desktop, tablet, and mobile.",
    fullDescription: "The OXO website was built as a learning project to improve my UI development skills. The focus was on creating a clean, modern interface with smooth animations and ensuring the website is fully responsive across desktop, tablet, and mobile views.",
    tech: ["React.js", "TailwindCSS", "Styled Components"],
    image: "/oxo.png",
  },
  {
    title: "Bostani",
    description: "My first React.js project, a dummy website built to learn React fundamentals.",
    fullDescription: "Bostani is my first project, built as a dummy website to learn and practice React.js fundamentals, including component-based architecture and state management.",
    tech: ["React.js", "Tailwind"],
    image: "/boostani.png",
  },
];

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Blurred backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      
      {/* Modal content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#111111] rounded-2xl border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Project image */}
        <div className="w-full h-64 bg-[#1a1a1a] rounded-t-2xl overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white mb-4">{project.title}</h2>
          <p className="text-[#bbbbbb] text-sm leading-relaxed mb-6">{project.fullDescription}</p>
          
          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((item, idx) => (
              <span
                key={idx}
                className="text-xs px-3 py-1 border border-white/10 rounded-full bg-white/5 text-[#999]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectCard = ({ title, description, tech, index, totalCards, scrollYProgress, onClick }) => {
  // Each card appears at a specific scroll point and stays
  const cardStart = index / totalCards;
  
  // Card slides in from bottom and stays visible
  const opacity = useTransform(
    scrollYProgress,
    [cardStart - 0.05, cardStart],
    [0, 1]
  );
  
  const y = useTransform(
    scrollYProgress,
    [cardStart - 0.05, cardStart],
    [100, 0]
  );

  return (
    <motion.div
      style={{ 
        opacity, 
        y, 
        zIndex: index,
        top: `${index * 50}px`
      }}
      onClick={onClick}
      className="absolute w-full left-0 p-6 rounded-xl border border-white/10 bg-gradient-to-br from-[#1e1e1e] to-[#111] shadow-lg cursor-pointer hover:shadow-cyan-500/20 hover:border-white/20 transition-all duration-150 group hover:scale-[1.02]"
    >
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white transition-colors">{title}</h3>
      <p className="text-[#bbbbbb] text-sm mb-3 group-hover:text-white/90 transition-colors">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((item, idx) => (
          <span
            key={idx}
            className="text-xs px-3 py-1 border border-white/10 rounded-full bg-white/5 text-[#999] group-hover:text-white/80 transition-colors"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const containerRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <>
      <section id="projects" ref={containerRef} className="relative w-full max-w-3xl mx-auto px-4" style={{ height: `${projects.length * 50}vh` }}>
        <div className="sticky top-20 h-auto py-10">
          <motion.h2 
            className="text-3xl sm:text-4xl font-extrabold mb-16 text-center text-[#f5f5f5]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: false }}
          >
            Projects
          </motion.h2>
          <div className="relative" style={{ height: `${projects.length * 50 + 150}px` }}>
            {projects.map((project, index) => (
              <ProjectCard 
                key={index} 
                index={index} 
                totalCards={projects.length}
                scrollYProgress={scrollYProgress}
                onClick={() => setSelectedProject(project)}
                {...project} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
