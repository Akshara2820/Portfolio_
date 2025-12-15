import React, { useState, useRef, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const TiltedCodeCard = () => {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isTyping, setIsTyping] = useState(true);
  const [currentLine, setCurrentLine] = useState(0);

  const springConfig = { stiffness: 150, damping: 15 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateXVal = (e.clientY - centerY) / 15;
    const rotateYVal = (centerX - e.clientX) / 15;
    setRotateX(rotateXVal);
    setRotateY(rotateYVal);
    setGlarePosition({ x: ((e.clientX - rect.left) / rect.width) * 100, y: ((e.clientY - rect.top) / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePosition({ x: 50, y: 50 });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev < 10 ? prev + 1 : prev));
    }, 200);
    const timeout = setTimeout(() => setIsTyping(false), 2500);
    return () => { clearInterval(interval); clearTimeout(timeout); };
  }, []);

  const codeLines = [
    { content: "import React from 'react';", delay: 0 },
    { content: '', delay: 0.1 },
    { content: 'const Portfolio = () => {', delay: 0.2 },
    { content: '  return (', delay: 0.3 },
    { content: '    <div className="app">', delay: 0.4 },
    { content: "      <h1>Hello, I'm Akshara!</h1>", delay: 0.5 },
    { content: '      <p>Frontend Developer</p>', delay: 0.6 },
    { content: '    </div>', delay: 0.7 },
    { content: '  );', delay: 0.8 },
    { content: '};', delay: 0.9 },
    { content: 'export default Portfolio;', delay: 1 },
  ];

  const highlightCode = (line) => {
    return line
      .replace(/(import|from|const|return|export|default)/g, '<span class="text-purple-400">$1</span>')
      .replace(/('.*?')/g, '<span class="text-yellow-300">$1</span>')
      .replace(/(React|Portfolio)/g, '<span class="text-cyan-400">$1</span>')
      .replace(/(<\/?[a-z]+)/gi, '<span class="text-green-400">$1</span>')
      .replace(/(className)=/g, '<span class="text-orange-300">$1</span>=')
      .replace(/(Hello, I'm )(Akshara)/g, '$1<span class="text-pink-400">$2</span>')
      .replace(/(Frontend Developer)/g, '<span class="text-blue-300">$1</span>');
  };

  return (
    <div className="relative w-full max-w-lg mx-auto px-4">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX: rotateXSpring, rotateY: rotateYSpring, transformStyle: 'preserve-3d', perspective: 1000 }}
        className="relative"
      >
        {/* Glow effect */}
        <motion.div className="absolute -inset-4 rounded-3xl blur-2xl opacity-50"
          style={{ background: 'linear-gradient(135deg, rgba(6,182,212,0.3), rgba(139,92,246,0.3))' }}
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [0.95, 1, 0.95] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Main card */}
        <motion.div
          className="relative rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] p-5 font-mono text-sm shadow-2xl border border-white/10 overflow-hidden"
          initial={{ rotate: 6 }}
          whileHover={{ rotate: 0, scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          {/* Glare effect */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl"
            style={{ background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.1) 0%, transparent 50%)` }}
          />

          {/* Header */}
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
            <motion.div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer" whileHover={{ scale: 1.3 }} />
            <motion.div className="w-3 h-3 rounded-full bg-yellow-500 cursor-pointer" whileHover={{ scale: 1.3 }} />
            <motion.div className="w-3 h-3 rounded-full bg-green-500 cursor-pointer" whileHover={{ scale: 1.3 }} />
            <div className="flex-1 flex items-center justify-center gap-2">
              <motion.span className="w-2 h-2 bg-cyan-400 rounded-full" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }} />
              <span className="text-white/40 text-xs">App.jsx</span>
            </div>
          </div>

          {/* Code content */}
          <div className="flex text-[13px] leading-6">
            <div className="pr-4 text-white/20 select-none text-right">
              {codeLines.map((_, i) => (<div key={i}>{i + 1}</div>))}
            </div>
            <div className="flex-1 overflow-hidden">
              {codeLines.map((line, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: i <= currentLine ? 1 : 0.3, x: i <= currentLine ? 0 : -20 }}
                  transition={{ duration: 0.3, delay: line.delay }}
                  className="whitespace-pre"
                  dangerouslySetInnerHTML={{ __html: highlightCode(line.content) || '&nbsp;' }}
                />
              ))}
            </div>
          </div>

          {/* Typing cursor */}
          {isTyping && (
            <motion.div className="absolute bottom-5 right-5 w-2 h-5 bg-cyan-400 rounded-sm"
              animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.8, repeat: Infinity }}
            />
          )}
        </motion.div>

        {/* Decorative elements */}
        <motion.div className="absolute -top-8 -left-8 w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-transparent rotate-12"
          animate={{ rotate: [12, 20, 12], scale: [1, 1.1, 1] }} transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div className="absolute -bottom-8 -right-8 w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/20 to-transparent -rotate-12"
          animate={{ rotate: [-12, -20, -12], scale: [1, 1.1, 1] }} transition={{ duration: 6, repeat: Infinity }}
        />
      </motion.div>
    </div>
  );
};

export default TiltedCodeCard;