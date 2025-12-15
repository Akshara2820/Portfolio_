import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiRedux, SiBootstrap, SiMui, SiGraphql, SiFigma, SiVercel, SiNetlify } from 'react-icons/si';

const skillsData = [
  { name: 'React.js', icon: FaReact, color: '#61DAFB', category: 'frontend', 
    funFact: '🎮 Powers Facebook, Instagram, Netflix & Airbnb!', 
    tagline: 'The UI King 👑' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff', category: 'frontend', 
    funFact: '🚀 Used by TikTok, Twitch, Nike & Hulu!', 
    tagline: 'React on Steroids 💪' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', category: 'frontend', 
    funFact: '🛡️ Microsoft made it, Google loves it!', 
    tagline: 'JavaScript but Safer 🔒' },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', category: 'frontend', 
    funFact: '🌍 95% of websites use it! Created in 10 days!', 
    tagline: 'The Web\'s Language 🗣️' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4', category: 'styling', 
    funFact: '⚡ Used by Shopify, OpenAI & NASA!', 
    tagline: 'CSS but Fun 🎨' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', category: 'styling', 
    funFact: '✨ Can create art without JavaScript!', 
    tagline: 'Making Web Pretty 💅' },
  { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3', category: 'styling', 
    funFact: '🐦 Born at Twitter, used by millions!', 
    tagline: 'OG Framework 🏆' },
  { name: 'MUI', icon: SiMui, color: '#007FFF', category: 'styling', 
    funFact: '📱 Google\'s Material Design for React!', 
    tagline: 'Beautiful by Default ✨' },
  { name: 'Redux', icon: SiRedux, color: '#764ABC', category: 'tools', 
    funFact: '🧠 One state to rule them all!', 
    tagline: 'State Wizard 🧙‍♂️' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032', category: 'tools', 
    funFact: '💾 Created by Linus Torvalds (Linux guy)!', 
    tagline: 'Time Machine ⏰' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E', category: 'tools', 
    funFact: '🎨 Adobe paid $20 BILLION for it!', 
    tagline: 'Design Playground 🎪' },
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26', category: 'frontend', 
    funFact: '🏗️ The skeleton of every website ever!', 
    tagline: 'Web\'s Backbone 🦴' },
];

const categories = [
  { id: 'all', name: 'All Skills', color: '#06B6D4' },
  { id: 'frontend', name: 'Frontend', color: '#8B5CF6' },
  { id: 'styling', name: 'Styling', color: '#EC4899' },
  { id: 'tools', name: 'Tools', color: '#F59E0B' },
];

const SkillCard = ({ skill, index, isSelected, onSelect }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = skill.icon;

  return (
    <motion.div
      className="relative h-[200px] cursor-pointer perspective-1000"
      initial={{ opacity: 0, y: 50, rotateX: -30 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      onClick={() => { setIsFlipped(!isFlipped); onSelect(skill); }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <motion.div
        className="absolute inset-0 w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front of card */}
        <div className="absolute inset-0 w-full h-full rounded-2xl p-4 flex flex-col items-center justify-center backface-hidden group"
          style={{ 
            background: `linear-gradient(135deg, ${skill.color}15, transparent)`,
            border: `1px solid ${skill.color}30`,
            backfaceVisibility: 'hidden'
          }}
        >
          {/* Animated glow */}
          <motion.div className="absolute inset-0 rounded-2xl"
            style={{ boxShadow: `0 0 40px ${skill.color}20` }}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Icon with pulse */}
          <motion.div className="relative mb-2"
            whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <Icon className="text-3xl" style={{ color: skill.color }} />
            <motion.div className="absolute inset-0 rounded-full blur-xl"
              style={{ backgroundColor: skill.color }}
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          
          <span className="text-white font-semibold text-sm mb-1">{skill.name}</span>
          
          {/* Tagline instead of progress bar */}
          <motion.span 
            className="text-[11px] text-center px-2 py-1 rounded-full mb-2"
            style={{ backgroundColor: `${skill.color}15`, color: skill.color }}
          >
            {skill.tagline}
          </motion.span>
          
          {/* Click hint */}
          <motion.span className="absolute bottom-2 text-[9px] text-white/30 flex items-center gap-1"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span>Tap for fun fact</span>
            <motion.span animate={{ rotate: [0, 20, 0] }} transition={{ duration: 1, repeat: Infinity }}>✨</motion.span>
          </motion.span>
        </div>

        {/* Back of card - Fun Facts */}
        <div className="absolute inset-0 w-full h-full rounded-2xl p-4 flex flex-col items-center justify-center"
          style={{ 
            background: `linear-gradient(135deg, ${skill.color}25, ${skill.color}10)`,
            border: `1px solid ${skill.color}50`,
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          {/* Fun emoji */}
          <motion.div 
            className="text-2xl mb-2"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {skill.funFact.split(' ')[0]}
          </motion.div>
          
          <span className="text-white font-bold text-sm mb-2">{skill.name}</span>
          
          {/* Fun fact text */}
          <span className="text-white/80 text-[10px] text-center leading-relaxed px-1">
            {skill.funFact.substring(skill.funFact.indexOf(' ') + 1)}
          </span>
          
          {/* Tap to flip back hint */}
          <motion.span className="absolute bottom-2 text-[9px] text-white/40"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Tap to flip back
          </motion.span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedSkill, setSelectedSkill] = useState(null);

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="relative max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-20 text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-[100px]"
          animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px]"
          animate={{ x: [0, -50, 0], y: [0, -30, 0], scale: [1.2, 1, 1.2] }}
          transition={{ duration: 18, repeat: Infinity }}
        />
        <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <motion.div className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false }}
        >
          <motion.span className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10">
            <motion.span className="w-2 h-2 bg-cyan-400 rounded-full" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
            <span className="text-sm font-medium text-cyan-400">Tech Arsenal</span>
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
            <span className="text-white">Skills & </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">Expertise</span>
          </h2>
          <p className="text-white/50 max-w-md mx-auto">Click on any skill card to see more details</p>
        </motion.div>

        {/* Category filters */}
        <motion.div className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: false }}
        >
          {categories.map((cat) => (
            <motion.button key={cat.id}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${activeCategory === cat.id ? 'text-white' : 'text-white/50'}`}
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

        {/* Skills grid with animation */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <SkillCard skill={skill} index={index} isSelected={selectedSkill?.name === skill.name} onSelect={setSelectedSkill} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Selected skill detail panel - Enhanced with fun content */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div className="mt-8 p-6 rounded-2xl border bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-sm overflow-hidden relative"
              style={{ borderColor: `${selectedSkill.color}30` }}
              initial={{ opacity: 0, y: 20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: 20, height: 0 }}
            >
              {/* Background glow */}
              <motion.div 
                className="absolute inset-0 opacity-20"
                style={{ background: `radial-gradient(circle at 0% 50%, ${selectedSkill.color}, transparent 50%)` }}
              />
              
              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <motion.div className="p-4 rounded-xl relative" style={{ backgroundColor: `${selectedSkill.color}20` }}
                  animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 2, repeat: Infinity }}
                >
                  {React.createElement(selectedSkill.icon, { className: 'text-3xl', style: { color: selectedSkill.color } })}
                  <motion.div 
                    className="absolute -top-1 -right-1 text-lg"
                    animate={{ scale: [1, 1.3, 1], rotate: [0, 20, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ✨
                  </motion.div>
                </motion.div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-white">{selectedSkill.name}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: `${selectedSkill.color}20`, color: selectedSkill.color }}>
                      {selectedSkill.tagline}
                    </span>
                  </div>
                  <p className="text-white/70 text-sm">{selectedSkill.funFact}</p>
                </div>
                
                <motion.button className="p-2 rounded-full bg-white/10 hover:bg-white/20 absolute top-4 right-4 sm:relative sm:top-0 sm:right-0"
                  onClick={() => setSelectedSkill(null)}
                  whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }}
                >
                  ✕
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}