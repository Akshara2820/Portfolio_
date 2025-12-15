import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import About from './component/about';
import Awards from './component/awards';
import DevelopmentProcess from './component/development';
import Experience from './component/experience';
import Footer from './component/footer';
import Header from './component/header';
import HeroSection from './component/hero';
import Projects from './component/projects';
import Skills from './component/skills';
import Testimonials from './component/testimonials';
import CustomCursor from './component/CustomCursor';

// Loading Screen Component - Enhanced with dramatic reveal
const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0); // 0: loading, 1: reveal

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setPhase(1);
          setTimeout(onComplete, 1200);
          return 100;
        }
        return prev + 2;
      });
    }, 25);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#0b0b0b] flex flex-col items-center justify-center overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Dramatic reveal curtains */}
      <motion.div
        className="absolute inset-y-0 left-0 w-1/2 bg-[#0b0b0b] z-50"
        initial={{ x: 0 }}
        animate={{ x: phase === 1 ? '-100%' : 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div
        className="absolute inset-y-0 right-0 w-1/2 bg-[#0b0b0b] z-50"
        initial={{ x: 0 }}
        animate={{ x: phase === 1 ? '100%' : 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      />

      {/* Animated grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <motion.div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(circle at 50% 50%, rgba(6,182,212,0.1) 0%, transparent 50%)' }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>

      {/* Central logo with 3D effect */}
      <motion.div
        initial={{ scale: 0, rotateY: -180 }}
        animate={{ scale: 1, rotateY: 0 }}
        transition={{ duration: 1, type: 'spring', stiffness: 100 }}
        className="mb-12 relative"
        style={{ perspective: 1000 }}
      >
        <div className="relative">
          {/* Multiple glow layers */}
          <motion.div
            className="absolute -inset-8 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3], rotate: [0, 180, 360] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur-xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Logo container */}
          <motion.div
            className="relative px-8 py-6 rounded-2xl border border-white/20 backdrop-blur-sm"
            style={{ background: 'linear-gradient(135deg, rgba(6,182,212,0.1), rgba(139,92,246,0.1))' }}
            animate={{ borderColor: ['rgba(6,182,212,0.3)', 'rgba(139,92,246,0.3)', 'rgba(6,182,212,0.3)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ backgroundSize: '200% 200%' }}
            >
              AM
            </motion.div>
          </motion.div>

          {/* Orbiting particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: ['#06B6D4', '#8B5CF6', '#EC4899', '#F59E0B', '#10B981', '#ffffff'][i],
                boxShadow: `0 0 10px ${['#06B6D4', '#8B5CF6', '#EC4899', '#F59E0B', '#10B981', '#ffffff'][i]}`,
              }}
              animate={{
                rotate: 360,
                x: [0, Math.cos(i * 60 * Math.PI / 180) * 80],
                y: [0, Math.sin(i * 60 * Math.PI / 180) * 80],
              }}
              transition={{
                rotate: { duration: 3, repeat: Infinity, ease: 'linear' },
                x: { duration: 0.5 },
                y: { duration: 0.5 },
              }}
              initial={{ x: 0, y: 0 }}
            />
          ))}
        </div>
      </motion.div>

      {/* Progress bar with glow */}
      <div className="relative w-72">
        <motion.div
          className="absolute -inset-2 bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-lg"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <div className="relative h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-white/10">
          <motion.div
            className="h-full rounded-full relative overflow-hidden"
            style={{ background: 'linear-gradient(90deg, #06B6D4, #8B5CF6, #EC4899)' }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)' }}
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>

      {/* Loading text with typewriter effect */}
      <motion.div className="mt-6 flex items-center gap-2">
        <motion.span
          className="text-white/60 text-sm font-mono"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          {progress < 100 ? 'Crafting experience' : 'Ready!'}
        </motion.span>
        <motion.span
          className="text-cyan-400 font-mono font-bold"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        >
          {progress}%
        </motion.span>
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: ['#06B6D4', '#8B5CF6', '#EC4899'][Math.floor(Math.random() * 3)],
              boxShadow: `0 0 ${Math.random() * 10 + 5}px currentColor`,
            }}
            animate={{
              y: [0, -200],
              x: [0, (Math.random() - 0.5) * 100],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeOut',
            }}
          />
        ))}
      </div>

      {/* Corner decorations */}
      <motion.div
        className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-cyan-500/30 rounded-tl-3xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
      />
      <motion.div
        className="absolute top-8 right-8 w-20 h-20 border-r-2 border-t-2 border-purple-500/30 rounded-tr-3xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
      />
      <motion.div
        className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-purple-500/30 rounded-bl-3xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-cyan-500/30 rounded-br-3xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
      />
    </motion.div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <CustomCursor />
          <Header />
          <HeroSection />
          <About />
          <Skills />
          <Experience />
          <DevelopmentProcess />
          <Projects />
          <Testimonials />
          <Awards />
          <Footer />
        </motion.div>
      )}
    </>
  );
}

export default App;