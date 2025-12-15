import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { SiReact, SiNextdotjs, SiJavascript, SiTailwindcss, SiTypescript, SiBootstrap, SiMui } from 'react-icons/si';
import { FaLinkedin, FaGithub, FaInstagram, FaArrowDown } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import '../App.css';
import ScrollingTags from './scrollingTags';
import MagneticButton from './MagneticButton';

// 3D Floating Card Component
const FloatingCard = ({ children, className = '', delay = 0 }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateXVal = (e.clientY - centerY) / 10;
    const rotateYVal = (centerX - e.clientX) / 10;
    setRotateX(rotateXVal);
    setRotateY(rotateYVal);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15, delay }}
      style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Animated Background Grid
const AnimatedGrid = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black_40%,transparent_100%)]" />
    <motion.div
      className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"
      animate={{ x: [0, 60], y: [0, 60] }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
    />
  </div>
);

// Morphing Blob Background
const MorphingBlobs = () => (
  <>
    <motion.div
      className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full opacity-30"
      style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.4) 0%, transparent 70%)', filter: 'blur(60px)' }}
      animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0], borderRadius: ['50%', '40%', '50%'] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] rounded-full opacity-30"
      style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)', filter: 'blur(60px)' }}
      animate={{ scale: [1.2, 1, 1.2], x: [0, -50, 0], y: [0, -30, 0], borderRadius: ['40%', '50%', '40%'] }}
      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
      style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.3) 0%, transparent 70%)', filter: 'blur(80px)' }}
      animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
    />
  </>
);

// Floating Particles with trails - Enhanced
const FloatingParticles = () => {
  const particles = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
    color: ['#06B6D4', '#8B5CF6', '#EC4899', '#F59E0B', '#10B981'][Math.floor(Math.random() * 5)],
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%`, backgroundColor: p.color, boxShadow: `0 0 ${p.size * 3}px ${p.color}` }}
          animate={{ y: [0, -200, 0], x: [0, Math.random() * 150 - 75, 0], opacity: [0, 0.9, 0], scale: [0, 1.2, 0] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
};

// Animated Lines Background
const AnimatedLines = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
        style={{ top: `${10 + i * 12}%`, left: 0, right: 0 }}
        animate={{ x: ['-100%', '100%'], opacity: [0, 1, 0] }}
        transition={{ duration: 4 + i * 0.5, repeat: Infinity, delay: i * 0.3, ease: 'linear' }}
      />
    ))}
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={`v-${i}`}
        className="absolute w-[1px] bg-gradient-to-b from-transparent via-purple-500 to-transparent"
        style={{ left: `${15 + i * 15}%`, top: 0, bottom: 0 }}
        animate={{ y: ['-100%', '100%'], opacity: [0, 1, 0] }}
        transition={{ duration: 5 + i * 0.5, repeat: Infinity, delay: i * 0.4, ease: 'linear' }}
      />
    ))}
  </div>
);

// Glowing Orbs
const GlowingOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      className="absolute w-4 h-4 rounded-full bg-cyan-400"
      style={{ top: '20%', left: '10%', boxShadow: '0 0 30px 10px rgba(6,182,212,0.4)' }}
      animate={{ y: [0, -30, 0], x: [0, 20, 0], scale: [1, 1.3, 1] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute w-3 h-3 rounded-full bg-purple-400"
      style={{ top: '60%', right: '15%', boxShadow: '0 0 25px 8px rgba(139,92,246,0.4)' }}
      animate={{ y: [0, 25, 0], x: [0, -15, 0], scale: [1, 1.2, 1] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
    />
    <motion.div
      className="absolute w-2 h-2 rounded-full bg-pink-400"
      style={{ top: '40%', left: '80%', boxShadow: '0 0 20px 6px rgba(236,72,153,0.4)' }}
      animate={{ y: [0, -20, 0], x: [0, 10, 0], scale: [1, 1.4, 1] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
    />
    <motion.div
      className="absolute w-3 h-3 rounded-full bg-yellow-400"
      style={{ bottom: '30%', left: '25%', boxShadow: '0 0 25px 8px rgba(250,204,21,0.4)' }}
      animate={{ y: [0, 15, 0], x: [0, -10, 0], scale: [1, 1.2, 1] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
    />
  </div>
);

const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: (e.clientX / window.innerWidth - 0.5) * 30, y: (e.clientY / window.innerHeight - 0.5) * 30 });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const techIcons = [
    { Icon: SiReact, color: '#61DBFB', pos: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2' },
    { Icon: SiTailwindcss, color: '#38BDF8', pos: 'top-[15%] left-[5%]' },
    { Icon: SiJavascript, color: '#F7DF1E', pos: 'top-[15%] right-[5%]' },
    { Icon: SiNextdotjs, color: '#ffffff', pos: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2' },
    { Icon: SiTypescript, color: '#007ACC', pos: 'top-[40%] right-[0%]' },
    { Icon: SiBootstrap, color: '#7952B3', pos: 'bottom-[15%] right-[10%]' },
    { Icon: SiMui, color: '#007FFF', pos: 'bottom-[15%] left-[10%]' },
  ];

  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/aksharamishra/', color: '#0A66C2' },
    { icon: FaGithub, href: 'https://github.com/Akshara2820', color: '#ffffff' },
    { icon: FaInstagram, href: 'https://www.instagram.com/akshara.mishra0603/', color: '#E4405F' },
  ];

  return (
    <div ref={containerRef} className="relative">
      <motion.div
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-[#0b0b0b] text-white overflow-hidden"
        style={{ y: springY, opacity, scale }}
      >
        <AnimatedGrid />
        <MorphingBlobs />
        <FloatingParticles />
        <AnimatedLines />
        <GlowingOrbs />

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0b0b0b_70%)]" />

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
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 text-white px-5 py-2.5 rounded-full text-sm font-medium backdrop-blur-xl"
                whileHover={{ scale: 1.05, borderColor: 'rgba(6,182,212,0.5)' }}
                animate={{ boxShadow: ['0 0 20px rgba(6,182,212,0)', '0 0 20px rgba(6,182,212,0.3)', '0 0 20px rgba(6,182,212,0)'] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <motion.span className="w-2 h-2 bg-green-400 rounded-full" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1, repeat: Infinity }} />
                <Typewriter words={['Frontend Developer', 'Software Engineer', 'React Developer', 'Next.js Specialist', 'UI/UX Enthusiast']} loop={0} cursor cursorStyle="_" typeSpeed={70} deleteSpeed={50} delaySpeed={1500} />
              </motion.div>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="block text-white/90">Hi, I'm</span>
              <motion.span
                className="relative inline-block mt-2"
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient">
                  Akshara Mishra
                </span>
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
                />
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-2xl -z-10"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-white/60 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Crafting stunning web experiences using cutting-edge technologies.
              <span className="text-cyan-400"> Specialized in React.js & Next.js</span> with 3+ years experience.
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
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-purple-500 overflow-hidden"
                whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(6,182,212,0.4)' }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <motion.span className="relative z-10" animate={{ y: [0, -2, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>↓</motion.span>
                <span className="relative z-10">Download CV</span>
              </motion.a>

              <motion.a
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-white/5 border border-white/20 text-white backdrop-blur-sm overflow-hidden"
                whileHover={{ scale: 1.05, borderColor: 'rgba(6,182,212,0.5)', boxShadow: '0 0 15px rgba(6,182,212,0.2)' }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">View Projects</span>
                <motion.span className="relative z-10" animate={{ x: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
              </motion.a>
            </motion.div>
          </div>

          {/* Right Content - Creative Profile Design */}
          <motion.div
            className="flex-1 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative w-[320px] h-[400px] sm:w-[380px] sm:h-[480px] lg:w-[420px] lg:h-[520px]">
              {/* Background glow */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)' }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Main card container */}
              <motion.div
                className="relative w-full h-full"
                style={{ transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)` }}
              >
                {/* Decorative corner brackets */}
                <motion.div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-cyan-500/50 rounded-tl-3xl"
                  initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 }}
                />
                <motion.div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-purple-500/50 rounded-tr-3xl"
                  initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9 }}
                />
                <motion.div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-purple-500/50 rounded-bl-3xl"
                  initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1 }}
                />
                <motion.div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-cyan-500/50 rounded-br-3xl"
                  initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.1 }}
                />

                {/* Profile image with creative frame */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  {/* Outer rotating gradient ring */}
                  <motion.div
                    className="absolute -inset-4 rounded-[2rem]"
                    style={{ background: 'linear-gradient(135deg, #06B6D4 0%, #8B5CF6 50%, #EC4899 100%)', padding: '2px' }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  >
                    <div className="w-full h-full rounded-[2rem] bg-[#0b0b0b]" />
                  </motion.div>

                  {/* Profile image */}
                  <motion.div
                    className="relative w-[200px] h-[260px] sm:w-[240px] sm:h-[300px] rounded-[1.5rem] overflow-hidden border-2 border-white/10"
                    whileHover={{ scale: 1.03, borderColor: 'rgba(6,182,212,0.5)' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <img src="/pic3.jpg" alt="Akshara Mishra" className="w-full h-full object-cover" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-transparent to-transparent"
                      animate={{ opacity: [0.6, 0.4, 0.6] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    {/* Name overlay at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                      <motion.p className="text-white/80 text-sm font-medium"
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}
                      >
                        Frontend Developer
                      </motion.p>
                    </div>
                  </motion.div>
                </div>

                {/* Floating tech icons around the profile */}
                {techIcons.slice(0, 5).map((tech, index) => {
                  const positions = [
                    { top: '5%', left: '10%' },
                    { top: '5%', right: '10%' },
                    { top: '45%', left: '-5%' },
                    { top: '45%', right: '-5%' },
                    { bottom: '10%', left: '50%', transform: 'translateX(-50%)' },
                  ];
                  return (
                    <motion.div
                      key={index}
                      className="absolute group cursor-pointer"
                      style={positions[index]}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
                      transition={{ delay: 1 + index * 0.1, duration: 3, repeat: Infinity, repeatDelay: 0 }}
                      whileHover={{ scale: 1.3, zIndex: 20 }}
                    >
                      <motion.div
                        className="relative p-2.5 rounded-xl bg-[#111]/90 backdrop-blur-md border border-white/10"
                        whileHover={{ borderColor: `${tech.color}60`, boxShadow: `0 0 25px ${tech.color}50` }}
                      >
                        <tech.Icon size={20} style={{ color: tech.color }} />
                      </motion.div>
                    </motion.div>
                  );
                })}

                {/* Decorative dots */}
                <motion.div className="absolute top-[15%] left-[30%] w-2 h-2 rounded-full bg-cyan-400"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div className="absolute top-[25%] right-[25%] w-1.5 h-1.5 rounded-full bg-purple-400"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                />
                <motion.div className="absolute bottom-[20%] left-[25%] w-1.5 h-1.5 rounded-full bg-pink-400"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />

                {/* Status indicator */}
                <motion.div
                  className="absolute top-[8%] left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111]/80 border border-white/10 backdrop-blur-sm"
                  initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }}
                >
                  <motion.span className="w-2 h-2 rounded-full bg-green-400"
                    animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }}
                  />
                  <span className="text-[10px] text-white/60 font-medium">Available for work</span>
                </motion.div>

                {/* Experience badge */}
                <motion.div
                  className="absolute bottom-[5%] left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-white/10 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }}
                >
                  <span className="text-xs text-white/80 font-medium">3+ Years Experience</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

      </motion.div>
      
      {/* Scroll Indicator - positioned above scrolling tags */}
      <motion.div
        className="absolute bottom-28 lg:bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.span
          className="text-white/40 text-[10px] tracking-[0.2em] uppercase font-medium"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll
        </motion.span>
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2 bg-black/20 backdrop-blur-sm"
          animate={{ borderColor: ['rgba(255,255,255,0.3)', 'rgba(6,182,212,0.6)', 'rgba(255,255,255,0.3)'] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
      
      <ScrollingTags />
    </div>
  );
};

export default HeroSection;