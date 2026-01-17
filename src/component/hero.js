import React from 'react';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';

const HeroSection = () => {
  const lineVariants = {
    hidden: { y: "100%" },
    visible: { y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center max-w-7xl mx-auto px-4 md:px-0">
      {/* Dynamic Background Mesh */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none -z-10 mix-blend-soft-light animate-pulse" />

      <div className="space-y-4 md:space-y-8">
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-primary/60 font-mono text-sm md:text-base tracking-widest pl-1"
          >
            AKSHARA MISHRA
          </motion.p>
        </div>

        <div className="space-y-[-1rem] md:space-y-[-2rem] z-10">
          {["Frontend", "Developer", "& Designer"].map((text, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h1
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                custom={i}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="text-6xl md:text-9xl font-display font-medium tracking-tighter text-primary"
              >
                {text}
              </motion.h1>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="pt-8 md:pt-12 flex flex-wrap gap-6 items-center"
        >
          <MagneticButton>
            <a href="#projects" className="px-8 py-4 bg-white text-black font-medium text-lg rounded-full hover:bg-gray-200 transition-colors inline-block">
              View Work
            </a>
          </MagneticButton>

          <MagneticButton>
            <a href="#contact" className="px-8 py-4 text-white border border-white/20 rounded-full hover:bg-white/5 transition-colors inline-block">
              Contact Me
            </a>
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-12 right-4 md:right-0 text-xs font-mono text-primary/20 flex flex-col items-end gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span>SCROLL TO EXPLORE</span>
        <div className="w-[1px] h-12 bg-white/20" />
      </motion.div>
    </section>
  );
};

export default HeroSection;