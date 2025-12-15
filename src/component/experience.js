import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const experiences = [
  { company: "Masters' Union", role: "Frontend Developer", location: "Gurugram", type: "Hybrid", period: "Jan 2024 - Present", employment: "Full Time", color: '#06B6D4', description: 'Building scalable web applications and leading frontend initiatives.' },
  { company: "Tif Labs", role: "Frontend Developer", location: "Bangalore", type: "On-site", period: "Nov 2022 - Jan 2024", employment: "Full Time", color: '#8B5CF6', description: 'Developed multiple client-facing applications with React ecosystem.' },
  { company: "Hyperverge", role: "Frontend Developer", location: "Bangalore", type: "Remote", period: "Nov 2021 - April 2022", employment: "Internship", color: '#F59E0B', description: 'Started my professional journey building AI-powered interfaces.' },
];

const ExperienceCard = ({ experience, index, isLeft }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Fun emojis for each experience
  const experienceEmojis = ['🚀', '💼', '🌟'];

  return (
    <motion.div
      ref={cardRef}
      className={`relative flex items-center ${isLeft ? 'lg:justify-start' : 'lg:justify-end'} justify-center mb-12 lg:mb-0`}
      initial={{ opacity: 0, x: isLeft ? -100 : 100, rotateY: isLeft ? -15 : 15 }}
      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2, type: 'spring', stiffness: 100 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Connection line to center */}
      <motion.div
        className={`hidden lg:block absolute top-1/2 h-[2px] w-16 ${isLeft ? 'left-[calc(50%-64px)]' : 'right-[calc(50%-64px)]'}`}
        style={{ background: `linear-gradient(${isLeft ? '90deg' : '270deg'}, ${experience.color}, transparent)` }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
        viewport={{ once: false }}
      />

      {/* Timeline dot with emoji */}
      <motion.div
        className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full items-center justify-center z-20"
        style={{ backgroundColor: `${experience.color}30`, border: `2px solid ${experience.color}`, boxShadow: `0 0 20px ${experience.color}` }}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.4, delay: index * 0.2 + 0.2, type: 'spring' }}
        viewport={{ once: false }}
        whileHover={{ scale: 1.3 }}
      >
        <motion.span 
          className="text-lg"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {experienceEmojis[index % experienceEmojis.length]}
        </motion.span>
        <motion.div className="absolute w-full h-full rounded-full"
          style={{ backgroundColor: experience.color }}
          animate={{ scale: [1, 2, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* Card */}
      <motion.div
        className={`group w-full lg:w-[45%] p-6 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10 overflow-hidden relative ${isLeft ? 'lg:mr-auto' : 'lg:ml-auto'}`}
        whileHover={{ scale: 1.02, y: -5, borderColor: `${experience.color}40` }}
        transition={{ duration: 0.3 }}
        style={{ perspective: 1000 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Glow effect */}
        <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `radial-gradient(circle at ${isLeft ? '100%' : '0%'} 50%, ${experience.color}15, transparent 60%)` }}
        />

        {/* Content */}
        <div className="relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <motion.h3 className="text-xl font-bold text-white flex items-center gap-2"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: index * 0.2 + 0.4 }} viewport={{ once: false }}
            >
              {experience.company}
              {index === 0 && (
                <motion.span 
                  className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 border border-green-500/30"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Current
                </motion.span>
              )}
            </motion.h3>
            <motion.span className="text-xs px-3 py-1.5 rounded-full font-medium"
              style={{ backgroundColor: `${experience.color}20`, color: experience.color, border: `1px solid ${experience.color}40` }}
              initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.2 + 0.5 }} viewport={{ once: false }}
              whileHover={{ scale: 1.1 }}
            >
              {experience.employment}
            </motion.span>
          </div>

          <motion.p className="text-white/80 font-medium mb-2 flex items-center gap-2"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: index * 0.2 + 0.5 }} viewport={{ once: false }}
          >
            {experience.role}
            <motion.span 
              className="text-sm"
              animate={isHovered ? { rotate: [0, 20, 0] } : {}}
              transition={{ duration: 0.5 }}
            >
              💻
            </motion.span>
          </motion.p>

          <motion.p className="text-white/50 text-sm mb-4"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: index * 0.2 + 0.55 }} viewport={{ once: false }}
          >
            {experience.description}
          </motion.p>

          <motion.div className="flex flex-wrap gap-4 text-sm text-white/50"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: index * 0.2 + 0.6 }} viewport={{ once: false }}
          >
            <motion.div className="flex items-center gap-2" whileHover={{ x: 3 }}>
              <FaMapMarkerAlt style={{ color: experience.color }} />
              <span>{experience.location} · {experience.type}</span>
            </motion.div>
            <motion.div className="flex items-center gap-2" whileHover={{ x: 3 }}>
              <FaCalendarAlt style={{ color: experience.color }} />
              <span>{experience.period}</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom accent line */}
        <motion.div className="absolute bottom-0 left-0 h-1 rounded-full"
          style={{ backgroundColor: experience.color }}
          initial={{ width: 0 }} animate={{ width: isHovered ? '100%' : '0%' }} transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="experience" ref={containerRef} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 py-24 text-white">
      {/* Header */}
      <motion.div className="text-center mb-20"
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false }}
      >
        <motion.div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10"
          initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} viewport={{ once: false }}
        >
          <FaBriefcase className="text-cyan-400" />
          <span className="text-sm font-medium text-cyan-400">Career Journey</span>
        </motion.div>
        <h2 className="text-4xl sm:text-5xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Work</span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Experience</span>
        </h2>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Center line */}
        <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/10" />
        <motion.div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 w-[2px] bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500"
          style={{ height: lineHeight }}
        />

        {/* Experience cards */}
        <div className="relative space-y-8 lg:space-y-16">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} isLeft={index % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;