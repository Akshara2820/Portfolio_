import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer id="contact" className="py-24 border-t border-white/10 mt-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-primary tracking-tighter">
            Let's work <br /> together.
          </h2>
          <a href="mailto:akshara@example.com" className="text-xl text-primary/60 hover:text-white transition-colors border-b border-white/20 pb-1 inline-block">
            akshara2820@gmail.com
          </a>
        </div>

        <div className="flex gap-8">
          <a href="https://github.com/Akshara2820" target="_blank" rel="noopener noreferrer" className="text-primary/60 hover:text-white transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/aksharamishra" target="_blank" rel="noopener noreferrer" className="text-primary/60 hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="text-primary/60 hover:text-white transition-colors">Twitter</a>
        </div>
      </div>

      <div className="mt-24 text-sm text-primary/20 flex justify-between">
        <span>© 2026 Akshara Mishra</span>
        <span>Local time: {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}</span>
      </div>
    </footer>
  );
};

export default Footer;
