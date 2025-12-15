import React from 'react';
import { motion } from 'framer-motion';

const ScrollingTags = () => {
  const tags = [
    { text: 'Frontend', color: '#06B6D4' },
    { text: 'React.js', color: '#61DAFB' },
    { text: 'Next.js', color: '#ffffff' },
    { text: 'JavaScript', color: '#F7DF1E' },
    { text: 'TypeScript', color: '#3178C6' },
    { text: 'UI/UX', color: '#EC4899' },
    { text: 'Clean Code', color: '#10B981' },
    { text: 'Performance', color: '#F59E0B' },
    { text: 'Web Apps', color: '#8B5CF6' },
    { text: 'Tailwind', color: '#38BDF8' },
    { text: 'MUI', color: '#007FFF' },
    { text: 'Bootstrap', color: '#7952B3' },
    { text: 'API Integration', color: '#00D084' },
    { text: 'Git', color: '#F05032' },
    { text: 'CI/CD', color: '#06B6D4' },
    { text: 'Mentor', color: '#EC4899' },
    { text: 'Community', color: '#8B5CF6' },
    { text: 'Learning', color: '#F59E0B' },
  ];

  const duplicatedTags = [...tags, ...tags, ...tags];

  return (
    <div className="relative w-full overflow-hidden py-6 bg-gradient-to-r from-[#080808] via-[#0f0f0f] to-[#080808] border-y border-white/5 mt-0 lg:-mt-[80px] -rotate-[3deg]">
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />

      {/* Animated marquee */}
      <motion.div
        className="flex items-center gap-8 whitespace-nowrap"
        animate={{ x: [0, -33.33 * tags.length * 8] }}
        transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 40, ease: 'linear' } }}
      >
        {duplicatedTags.map((tag, idx) => (
          <React.Fragment key={idx}>
            <motion.span
              className="text-base sm:text-lg font-medium cursor-default transition-all duration-300"
              style={{ color: `${tag.color}80` }}
              whileHover={{ scale: 1.2, color: tag.color }}
            >
              {tag.text}
            </motion.span>
            <motion.span
              className="text-lg"
              style={{ color: `${tags[idx % tags.length].color}40` }}
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity, delay: idx * 0.1 }}
            >
              ✦
            </motion.span>
          </React.Fragment>
        ))}
      </motion.div>

      {/* Subtle glow line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </div>
  );
};

export default ScrollingTags;