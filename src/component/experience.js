import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa';

const experiences = [
  {
    company: "Masters' Union",
    role: "Frontend Developer",
    location: "Gurugram",
    type: "Hybrid",
    period: "Jan 2024 - Present",
    employment: "Full Time",
  },
  {
    company: "Tif Labs",
    role: "Frontend Developer",
    location: "Bangalore",
    type: "On-site",
    period: "Nov 2022 - Jan 2024",
    employment: "Full Time",
  },
  {
    company: "Hyperverge",
    role: "Frontend Developer",
    location: "Bangalore",
    type: "Remote",
    period: "Nov 2021 - April 2022",
    employment: "Internship",
  },
];

const ExperienceCard = ({ experience, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      className={`relative flex items-center ${isEven ? 'justify-start' : 'justify-end'} pb-16 last:pb-0`}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Branch line connecting to center */}
      <motion.div
        className={`absolute top-8 h-[2px] w-12 bg-gradient-to-r ${isEven ? 'left-1/2 from-white/30 to-transparent' : 'right-1/2 from-transparent to-white/30'}`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
        viewport={{ once: false }}
        style={{ originX: isEven ? 0 : 1 }}
      />

      {/* Timeline dot at center */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-white/20 border-2 border-white/40 z-10"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3, delay: index * 0.2 + 0.2, type: 'spring', stiffness: 200 }}
        viewport={{ once: false }}
        whileHover={{ scale: 1.4, backgroundColor: "rgba(255,255,255,0.5)" }}
      />

      {/* Card */}
      <motion.div
        className={`group w-[45%] p-5 rounded-xl bg-gradient-to-br from-[#1e1e1e] to-[#111] border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 ${isEven ? 'mr-auto' : 'ml-auto'}`}
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
          <motion.h3
            className="text-xl font-bold text-white group-hover:text-white transition-colors"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: index * 0.2 + 0.4 }}
            viewport={{ once: false }}
          >
            {experience.company}
          </motion.h3>
          <motion.span
            className="text-xs px-3 py-1 rounded-full bg-white/10 text-[#aaa] border border-white/10 w-fit"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.2 + 0.5 }}
            viewport={{ once: false }}
          >
            {experience.employment}
          </motion.span>
        </div>

        <motion.p
          className="text-[#cccccc] font-medium mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: index * 0.2 + 0.5 }}
          viewport={{ once: false }}
        >
          {experience.role}
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 text-sm text-[#888]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: index * 0.2 + 0.6 }}
          viewport={{ once: false }}
        >
          <div className="flex items-center gap-1">
            <FaMapMarkerAlt className="text-xs" />
            <span>{experience.location}</span>
            <span className="text-white/30">•</span>
            <span>{experience.type}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaBriefcase className="text-xs" />
            <span>{experience.period}</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 py-20 text-white">
      <motion.h2
        className="text-3xl sm:text-4xl font-extrabold mb-16 text-center text-[#f5f5f5]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: false }}
      >
        Work Experience
      </motion.h2>

      <div className="relative">
        {/* Center trunk line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-white/30 via-white/20 to-transparent" />
        
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
