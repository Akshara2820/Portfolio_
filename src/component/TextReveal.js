import React from 'react';
import { motion } from 'framer-motion';

const TextReveal = ({ children, className = '', delay = 0, staggerDelay = 0.03 }) => {
  const words = children.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: staggerDelay, delayChildren: delay },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { type: 'spring', damping: 12, stiffness: 100 },
    },
  };

  return (
    <motion.span className={className} variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
      {words.map((word, index) => (
        <motion.span key={index} variants={child} className="inline-block mr-[0.25em]" style={{ perspective: '1000px' }}>
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default TextReveal;
