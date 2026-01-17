import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import MagneticButton from './MagneticButton';

const HeroSection = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const particleOptions = {
    background: {
      color: { value: "transparent" },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
        resize: true,
      },
      modes: {
        push: { quantity: 3 },
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      color: { value: "#ffffff" },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.15,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: false,
        speed: 0.8,
        straight: false,
      },
      number: {
        density: { enable: true, area: 800 },
        value: 60,
      },
      opacity: {
        value: 0.3,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 2 },
      },
    },
    detectRetina: true,
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center max-w-7xl mx-auto px-4 md:px-0">
      {/* Particles Background */}
      <div className="absolute inset-0 -z-10">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particleOptions}
          className="h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="space-y-6 md:space-y-10 relative z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3"
        >
          <div className="w-12 h-[1px] bg-accent/50" />
          <span className="text-accent/80 font-mono text-sm tracking-wider uppercase">
            Akshara Mishra
          </span>
        </motion.div>

        <div className="space-y-[-0.5rem] md:space-y-[-1.5rem]">
          {["Frontend", "Developer", "& Designer"].map((text, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.2 + (i * 0.1),
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="text-6xl md:text-9xl font-display font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 pb-2 md:pb-4"
              >
                {text}
              </motion.h1>
            </div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-primary/60 text-lg md:text-xl max-w-xl leading-relaxed font-light"
        >
          Crafting digital experiences where <span className="text-white font-medium">design meets engineering</span>.
          Focused on creating polished, accessible, and performant web applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="pt-8 flex flex-wrap gap-6 items-center pointer-events-auto"
        >
          <MagneticButton>
            <a href="#projects" className="px-8 py-4 bg-white text-black font-medium text-lg rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 group">
              View Work
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </MagneticButton>

          <MagneticButton>
            <a href="#contact" className="px-8 py-4 text-white border border-white/10 rounded-full hover:bg-white/5 transition-colors backdrop-blur-sm">
              Contact Me
            </a>
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-12 right-4 md:right-0 text-xs font-mono text-primary/30 flex flex-col items-end gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="flex items-center gap-2 -rotate-90 origin-right">
          <span>SCROLL</span>
          <div className="w-8 h-[1px] bg-primary/30" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;