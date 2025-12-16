import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { SiReact, SiNextdotjs, SiJavascript, SiTailwindcss, SiTypescript, SiBootstrap, SiMui } from 'react-icons/si';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import '../App.css';
import ScrollingTags from './scrollingTags';
import MagneticButton from './MagneticButton';

// Morphing Blob Background - Grayscale theme
const MorphingBlobs = () => (
  <>
    <div
      className="absolute top-1/4 -left-20 w-[400px] h-[400px] rounded-full opacity-15"
      style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)' }}
    />
    <div
      className="absolute bottom-1/4 -right-20 w-[350px] h-[350px] rounded-full opacity-15"
      style={{ background: 'radial-gradient(circle, rgba(160,160,160,0.2) 0%, transparent 70%)' }}
    />
  </>
);

// Floating Particles - Grayscale theme
const FloatingParticles = () => {
  const particles = React.useMemo(() => Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
    color: ['#FFFFFF', '#A0A0A0', '#606060'][Math.floor(Math.random() * 3)],
  })), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%`, backgroundColor: p.color }}
          animate={{ y: [0, -150, 0], opacity: [0, 0.7, 0] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
};

// Removed AnimatedLines and GlowingOrbs for performance

const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const springY = useSpring(y, { stiffness: 300, damping: 40, mass: 0.5 });

  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/aksharamishra/', color: '#FFFFFF' },
    { icon: FaGithub, href: 'https://github.com/Akshara2820', color: '#FFFFFF' },
    { icon: FaInstagram, href: 'https://www.instagram.com/akshara.mishra0603/', color: '#FFFFFF' },
  ];

  return (
    <div ref={containerRef} className="relative">
      <motion.div
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-background text-text-primary overflow-hidden"
        style={{ y: springY, opacity, scale }}
      >
        <MorphingBlobs />
        <FloatingParticles />

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#000000_70%)]" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 py-20 px-4 sm:px-8 lg:px-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left lg:max-w-[55%]">
            <motion.div
              className="mb-6 sm:mt-0 mt-24"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 bg-white/5 border border-white/20 text-white px-5 py-2.5 rounded-full text-sm font-medium backdrop-blur-xl"
                whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.4)' }}
                animate={{ boxShadow: ['0 0 20px rgba(255,255,255,0)', '0 0 20px rgba(255,255,255,0.15)', '0 0 20px rgba(255,255,255,0)'] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <motion.span className="w-2 h-2 bg-white rounded-full" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1, repeat: Infinity }} />
                <Typewriter words={['Frontend Developer', 'Software Engineer', 'React Developer', 'Next.js Specialist', 'UI/UX Enthusiast']} loop={0} cursor cursorStyle="_" typeSpeed={70} deleteSpeed={50} delaySpeed={1500} />
              </motion.div>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="block text-text-primary/90">Hi, I'm</span>
              <motion.span
                className="relative inline-block mt-2"
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500 animate-gradient">
                  Akshara Mishra
                </span>
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-white via-gray-400 to-gray-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
                />
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-white/10 via-gray-400/10 to-gray-600/10 rounded-2xl blur-2xl -z-10"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-text-muted mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Crafting stunning web experiences using cutting-edge technologies.
              <span className="text-white"> Specialized in React.js & Next.js</span> with 3+ years experience.
            </motion.p>

            {/* Social Links */}
            <motion.div
              className="flex justify-center lg:justify-start gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {socialLinks.map((social, index) => (
                <MagneticButton key={index} strength={0.4}>
                  <motion.a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group overflow-hidden"
                    whileHover={{ borderColor: `${social.color}50` }}
                    whileTap={{ scale: 0.95 }}
                    data-cursor="pointer"
                  >
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: `radial-gradient(circle at center, ${social.color}30, transparent)` }}
                    />
                    <social.icon className="text-xl text-white/70 group-hover:text-white transition-colors relative z-10" />
                  </motion.a>
                </MagneticButton>
              ))}
            </motion.div>

            {/* CTA Buttons - Smaller size */}
            <motion.div
              className="flex flex-row gap-3 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.a
                href="https://drive.google.com/uc?export=download&id=1hKqInTjNzM1UHWdfZyX0XrH9IZro_Gka"
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-black bg-gradient-to-r from-white to-gray-300 overflow-hidden"
                whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(255,255,255,0.3)' }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <motion.span className="relative z-10" animate={{ y: [0, -2, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>↓</motion.span>
                <span className="relative z-10">Download CV</span>
              </motion.a>

              <motion.a
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-white/5 border border-white/20 text-white backdrop-blur-sm overflow-hidden"
                whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.5)', boxShadow: '0 0 15px rgba(255,255,255,0.15)' }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">View Projects</span>
                <motion.span className="relative z-10" animate={{ x: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
              </motion.a>
            </motion.div>
          </div>

          {/* Right Content - Circular Profile */}
          <div className="flex-1 flex justify-center items-center">
            <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[420px] lg:h-[420px] flex items-center justify-center">
              {/* Solid Circle */}
              <div className="absolute w-[70%] h-[70%] rounded-full border-[3px] border-[#333333]"></div>
              
              {/* Dashed rotating circle */}
              <motion.div
                className="absolute w-[80%] h-[80%] rounded-full border-[3px] border-dashed border-[#444444]"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: [0.42, 0, 0.58, 1] }}
              />
              
              {/* Profile Circle */}
              <div className="w-[60%] h-[60%] bg-[#1a1a1a] rounded-full flex items-center justify-center z-10 shadow-lg">
                <motion.div
                  className="w-full h-full rounded-full p-1 bg-[#1a1a1a] shadow-lg"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 5 }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <img src="/pic3.jpg" alt="profile" className="w-full h-full object-cover" />
                  </div>
                </motion.div>
              </div>
              
              {/* Tech Icons */}
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 2 }}
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0b0b0b] p-2 rounded-full shadow-md">
                <SiReact size={26} className="text-[#61DBFB]" />
              </motion.div>
              
              <motion.div animate={{ x: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 2 }}
                className="absolute top-[20%] left-[10%] bg-[#0b0b0b] p-2 rounded-full shadow-md">
                <SiTailwindcss size={26} className="text-[#38BDF8]" />
              </motion.div>
              
              <motion.div animate={{ x: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}
                className="absolute top-[20%] right-[10%] bg-[#0b0b0b] p-2 rounded-full shadow-md">
                <SiJavascript size={26} className="text-[#F7DF1E]" />
              </motion.div>
              
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-[#0b0b0b] p-2 rounded-full shadow-md">
                <SiNextdotjs size={26} className="text-white" />
              </motion.div>
              
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 2 }}
                className="absolute top-[15%] right-[30%] bg-[#0b0b0b] p-2 rounded-full shadow-md">
                <SiTypescript size={26} className="text-[#007ACC]" />
              </motion.div>
              
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-[15%] right-[20%] bg-[#0b0b0b] p-2 rounded-full shadow-md">
                <SiBootstrap size={26} className="text-[#7952B3]" />
              </motion.div>
              
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-[20%] left-[20%] bg-[#0b0b0b] p-2 rounded-full shadow-md">
                <SiMui size={26} className="text-[#007FFF]" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
      
      <ScrollingTags />
    </div>
  );
};

export default HeroSection;