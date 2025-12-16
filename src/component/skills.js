import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiRedux, SiBootstrap, SiMui, SiFigma } from 'react-icons/si';

const skillsData = [
  { name: 'React.js', icon: FaReact, color: '#FFFFFF', category: 'frontend', 
    funFact: 'Powers Facebook, Instagram & Netflix!', 
    tagline: 'The UI King 👑' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#E0E0E0', category: 'frontend', 
    funFact: 'Used by TikTok, Twitch & Nike!', 
    tagline: 'React on Steroids 💪' },
  { name: 'TypeScript', icon: SiTypescript, color: '#C0C0C0', category: 'frontend', 
    funFact: 'Microsoft made it, Google loves it!', 
    tagline: 'JavaScript but Safer 🔒' },
  { name: 'JavaScript', icon: FaJs, color: '#D0D0D0', category: 'frontend', 
    funFact: '95% of websites use it!', 
    tagline: "The Web's Language 🌐" },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#FFFFFF', category: 'styling', 
    funFact: 'Used by Shopify, OpenAI & NASA!', 
    tagline: 'CSS but Fun 🎨' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#B0B0B0', category: 'styling', 
    funFact: 'Can create art without JS!', 
    tagline: 'Making Web Pretty 💅' },
  { name: 'Bootstrap', icon: SiBootstrap, color: '#A0A0A0', category: 'styling', 
    funFact: 'Born at Twitter!', 
    tagline: 'OG Framework 🏆' },
  { name: 'MUI', icon: SiMui, color: '#909090', category: 'styling', 
    funFact: "Google's Material Design!", 
    tagline: 'Beautiful by Default ✨' },
  { name: 'Redux', icon: SiRedux, color: '#C0C0C0', category: 'tools', 
    funFact: 'One state to rule them all!', 
    tagline: 'State Wizard 🧙' },
  { name: 'Git', icon: FaGitAlt, color: '#E0E0E0', category: 'tools', 
    funFact: 'Created by Linus Torvalds!', 
    tagline: 'Time Machine ⏰' },
  { name: 'Figma', icon: SiFigma, color: '#D0D0D0', category: 'tools', 
    funFact: 'Adobe paid $20B for it!', 
    tagline: 'Design Playground 🎪' },
  { name: 'HTML5', icon: FaHtml5, color: '#B0B0B0', category: 'frontend', 
    funFact: 'Skeleton of every website!', 
    tagline: "Web's Backbone 🦴" },
];

const categories = [
  { id: 'all', name: 'All Skills', color: '#FFFFFF' },
  { id: 'frontend', name: 'Frontend', color: '#E0E0E0' },
  { id: 'styling', name: 'Styling', color: '#C0C0C0' },
  { id: 'tools', name: 'Tools', color: '#A0A0A0' },
];

const SkillCard = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = skill.icon;

  return (
    <motion.div
      className="relative h-[180px] group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{ 
          background: `linear-gradient(135deg, ${skill.color}15, transparent)`,
          border: `1px solid ${skill.color}25`,
        }}
        whileHover={{ 
          scale: 1.02,
          border: `1px solid ${skill.color}60`,
          boxShadow: `0 0 30px ${skill.color}25`
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Content container */}
        <div className="h-full flex flex-col items-center justify-center p-4 relative overflow-hidden">
          
          {/* Animated background orb */}
          <motion.div 
            className="absolute w-20 h-20 rounded-full blur-2xl"
            style={{ backgroundColor: skill.color }}
            animate={{ 
              opacity: isHovered ? 0.3 : 0.1,
              scale: isHovered ? 1.5 : 1
            }}
            transition={{ duration: 0.4 }}
          />
          
          {/* Icon */}
          <motion.div 
            className="relative z-10 mb-3"
            animate={{ 
              y: isHovered ? -5 : 0,
              scale: isHovered ? 1.15 : 1
            }}
            transition={{ duration: 0.3 }}
          >
            <Icon className="text-4xl" style={{ color: skill.color }} />
          </motion.div>
          
          {/* Name */}
          <motion.span 
            className="text-white font-semibold text-sm relative z-10"
            animate={{ y: isHovered ? -3 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {skill.name}
          </motion.span>
          
          {/* Tagline - always visible */}
          <motion.span 
            className="text-[11px] mt-2 px-3 py-1 rounded-full relative z-10"
            style={{ 
              backgroundColor: `${skill.color}20`, 
              color: skill.color 
            }}
            animate={{ 
              opacity: isHovered ? 0 : 1,
              y: isHovered ? 10 : 0
            }}
            transition={{ duration: 0.2 }}
          >
            {skill.tagline}
          </motion.span>
          
          {/* Fun fact - shows on hover */}
          <motion.div
            className="absolute bottom-4 left-0 right-0 px-3 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 10
            }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-[10px] text-white/80 leading-relaxed">
              ✨ {skill.funFact}
            </span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="relative max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-20 text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-[100px]"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div className="absolute bottom-20 right-10 w-72 h-72 bg-gray-500/10 rounded-full blur-[100px]"
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <motion.div className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          viewport={{ once: true }}
        >
          <motion.span className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-white/5 border border-white/20">
            <motion.span 
              className="w-2 h-2 bg-white rounded-full" 
              animate={{ scale: [1, 1.3, 1] }} 
              transition={{ duration: 1.5, repeat: Infinity }} 
            />
            <span className="text-sm font-medium text-white">Tech Arsenal</span>
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
            <span className="text-white">Skills & </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
              Expertise
            </span>
          </h2>
          <p className="text-white/50 max-w-md mx-auto text-sm">
            Hover over any skill to learn more
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2 }} 
          viewport={{ once: true }}
        >
          {categories.map((cat) => (
            <motion.button 
              key={cat.id}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id ? 'text-white' : 'text-white/50 hover:text-white/70'
              }`}
              style={{ 
                backgroundColor: activeCategory === cat.id ? `${cat.color}20` : 'rgba(255,255,255,0.05)',
                border: `1px solid ${activeCategory === cat.id ? cat.color : 'rgba(255,255,255,0.1)'}`,
                boxShadow: activeCategory === cat.id ? `0 0 20px ${cat.color}30` : 'none'
              }}
              onClick={() => setActiveCategory(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.name}
              <span className="ml-2 text-xs opacity-60">
                ({cat.id === 'all' ? skillsData.length : skillsData.filter(s => s.category === cat.id).length})
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <SkillCard skill={skill} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
