import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// Components
import Header from './component/header';
import HeroSection from './component/hero';
import About from './component/about';
import Skills from './component/skills';
import Experience from './component/experience';
import Awards from './component/awards';
import Testimonials from './component/testimonials';
import Projects from './component/projects';
import Contact from './component/footer';
import CustomCursor from './component/CustomCursor';

// Minimal Loading Screen
const LoadingScreen = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 1500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-background flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="relative overflow-hidden">
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="text-4xl md:text-6xl font-display font-medium text-primary tracking-tight"
        >
          Akshara Mishra
        </motion.div>
      </div>
    </motion.div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <CustomCursor />

      {/* Global Background Elements */}
      <div className="fixed inset-0 bg-background -z-50" />
      <div className="fixed inset-0 bg-noise opacity-[0.03] pointer-events-none z-[-40]" />
      <div className="fixed top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none z-[-40]" />

      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <main className="min-h-screen selection:bg-accent selection:text-white">
          <Header />
          <div className="pt-24 px-4 md:px-12 lg:px-24 max-w-[1600px] mx-auto space-y-32 pb-24 relative">
            <HeroSection />
            <Projects />
            <Skills />
            <Experience />
            <Awards />
            <Testimonials />
            <About />
            <Contact />
          </div>
        </main>
      )}
    </>
  );
}

export default App;