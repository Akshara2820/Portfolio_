import React, { useState } from 'react';
import { FaCode, FaMobileAlt, FaRocket, FaLightbulb, FaHeart, FaCoffee, FaMedal } from 'react-icons/fa';
import { motion } from 'framer-motion';
import TiltedCodeCard from './code';

const highlights = [
  { number: '3+', label: 'Years Experience', color: '#FFFFFF' },
  { number: '50+', label: 'Projects Completed', color: '#E0E0E0' },
  { number: '20+', label: 'Happy Clients', color: '#C0C0C0' },
  { number: '99%', label: 'Client Satisfaction', color: '#A0A0A0' },
];

const whatIDo = [
  { 
    icon: FaCode, 
    title: 'Web Development', 
    desc: 'Building modern, scalable web apps',
    details: 'I specialize in building robust web applications using React.js, Next.js, and modern JavaScript. From single-page apps to complex enterprise solutions, I focus on writing clean, maintainable code that scales.',
    skills: ['React.js', 'Next.js', 'TypeScript', 'Redux'],
    color: '#FFFFFF' 
  },
  { 
    icon: FaMobileAlt, 
    title: 'Responsive Design', 
    desc: 'Pixel-perfect on all devices',
    details: 'Every website I build looks stunning on any screen size. I use mobile-first approach with Tailwind CSS and modern CSS techniques to ensure seamless experiences across desktop, tablet, and mobile.',
    skills: ['Tailwind CSS', 'CSS Grid', 'Flexbox', 'Mobile-First'],
    color: '#E0E0E0' 
  },
  { 
    icon: FaRocket, 
    title: 'Performance', 
    desc: 'Lightning-fast load times',
    details: 'Speed matters! I optimize every aspect of web performance - from code splitting and lazy loading to image optimization and caching strategies. Your users deserve fast, smooth experiences.',
    skills: ['Code Splitting', 'Lazy Loading', 'SEO', 'Core Web Vitals'],
    color: '#C0C0C0' 
  },
  { 
    icon: FaLightbulb, 
    title: 'Problem Solving', 
    desc: 'Creative technical solutions',
    details: 'Complex problems excite me! I love diving deep into challenging requirements and finding elegant solutions. Whether it\'s debugging tricky issues or architecting new features, I bring creativity and logic together.',
    skills: ['Debugging', 'Architecture', 'API Integration', 'Testing'],
    color: '#A0A0A0' 
  },
];

const funFacts = [
  { icon: FaCoffee, text: '500+ cups of coffee consumed', color: '#FFFFFF' },
  { icon: FaHeart, text: 'Love creating smooth animations', color: '#C0C0C0' },
  { icon: FaMedal, text: 'National medal in 100m sprint', color: '#A0A0A0' },
];

function About() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="about" className="relative max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-20 text-white">
      {/* Background effects */}
      <motion.div className="absolute top-1/4 -right-32 w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }} transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div className="absolute bottom-1/4 -left-32 w-[300px] h-[300px] bg-gray-500/10 rounded-full blur-[120px]"
        animate={{ scale: [1.2, 1, 1.2] }} transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="relative z-10">
        {/* Header */}
        <motion.div className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
        >
          <motion.span className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-white/5 border border-white/20"
            initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} viewport={{ once: true }}
          >
            <motion.span className="w-2 h-2 bg-white rounded-full" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
            <span className="text-sm font-medium text-white">Get To Know Me</span>
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            <span className="text-white">About </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Me</span>
          </h2>
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left - Profile Card */}
          <motion.div className="lg:col-span-4"
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
          >
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10 overflow-hidden">
              {/* Profile image */}
              <div className="relative w-32 h-32 mx-auto mb-4">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-white/30 to-gray-500/30" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20">
                  <img src="/pic3.jpg" alt="Akshara" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-white">Akshara Mishra</h3>
                <p className="text-gray-400 text-sm">Frontend Developer</p>
              </div>

              {/* Quick bio */}
              <p className="text-white/50 text-sm text-center mb-6 leading-relaxed">
                Passionate about creating beautiful, functional web experiences that users love.
              </p>

              {/* Fun facts */}
              <div className="space-y-3">
                {funFacts.map((fact, index) => (
                  <motion.div key={index} className="flex items-center gap-3 p-2 rounded-lg bg-white/5"
                    initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }} viewport={{ once: true }}
                    whileHover={{ x: 5, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  >
                    <fact.icon className="text-sm" style={{ color: fact.color }} />
                    <span className="text-xs text-white/60">{fact.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Code Preview Card */}
            <motion.div 
              className="mt-6"
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.3 }} 
              viewport={{ once: true }}
            >
              <TiltedCodeCard />
            </motion.div>
          </motion.div>

          {/* Right - Stats & What I Do */}
          <div className="lg:col-span-8 space-y-6">
            {/* Stats row */}
            <motion.div className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
            >
              {highlights.map((stat, index) => (
                <motion.div key={index}
                  className="relative p-4 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10 text-center group overflow-hidden"
                  whileHover={{ scale: 1.05, borderColor: `${stat.color}50` }}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }} viewport={{ once: true }}
                >
                  <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: `radial-gradient(circle at center, ${stat.color}15, transparent)` }}
                  />
                  <motion.div className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: stat.color }}
                    initial={{ scale: 0 }} whileInView={{ scale: 1 }}
                    transition={{ type: 'spring', delay: index * 0.1 + 0.3 }} viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-xs text-white/50">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* What I Do - Interactive cards */}
            <motion.div className="p-6 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-gradient-to-r from-white to-gray-500 rounded-full" />
                What I Do
              </h3>

              {/* Tab buttons */}
              <div className="flex flex-wrap gap-2 mb-4">
                {whatIDo.map((item, index) => (
                  <motion.button key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === index ? 'text-white' : 'text-white/50 hover:text-white/80'}`}
                    style={{ backgroundColor: activeTab === index ? `${item.color}20` : 'transparent', borderColor: activeTab === index ? `${item.color}50` : 'transparent', border: '1px solid' }}
                    onClick={() => setActiveTab(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <item.icon className="inline mr-2" style={{ color: activeTab === index ? item.color : 'inherit' }} />
                    {item.title}
                  </motion.button>
                ))}
              </div>

              {/* Active tab content - Enhanced */}
              <motion.div key={activeTab}
                className="p-5 rounded-xl bg-white/5 border border-white/10"
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  {/* Icon */}
                  <motion.div className="p-4 rounded-xl shrink-0" style={{ backgroundColor: `${whatIDo[activeTab].color}20` }}
                    animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 2, repeat: Infinity }}
                  >
                    {React.createElement(whatIDo[activeTab].icon, { className: 'text-3xl', style: { color: whatIDo[activeTab].color } })}
                  </motion.div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="text-white font-bold text-lg mb-2">{whatIDo[activeTab].title}</h4>
                    <p className="text-white/70 text-sm leading-relaxed mb-4">{whatIDo[activeTab].details}</p>
                    
                    {/* Skills tags */}
                    <div className="flex flex-wrap gap-2">
                      {whatIDo[activeTab].skills.map((skill, idx) => (
                        <motion.span key={idx}
                          className="px-3 py-1 rounded-full text-xs font-medium"
                          style={{ backgroundColor: `${whatIDo[activeTab].color}15`, color: whatIDo[activeTab].color, border: `1px solid ${whatIDo[activeTab].color}30` }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Journey timeline - improved */}
            <motion.div className="p-6 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full" />
                My Journey
              </h3>

              <div className="relative px-4">
                {/* Timeline line */}
                <div className="absolute top-3 left-4 right-4 h-0.5 bg-gradient-to-r from-white via-gray-400 to-gray-600" />
                
                {/* Timeline items */}
                <div className="flex justify-between">
                  {[
                    { year: '2021', event: 'Started Journey', color: '#FFFFFF' },
                    { year: '2022', event: 'First Job', color: '#E0E0E0' },
                    { year: '2024', event: 'Current Role', color: '#C0C0C0' },
                    { year: 'Now', event: 'Growing', color: '#A0A0A0' },
                  ].map((item, index) => (
                    <motion.div key={index} className="relative text-center flex flex-col items-center"
                      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.15 }} viewport={{ once: true }}
                    >
                      {/* Dot */}
                      <motion.div 
                        className="w-6 h-6 rounded-full flex items-center justify-center mb-3"
                        style={{ backgroundColor: `${item.color}20`, border: `2px solid ${item.color}` }}
                        whileHover={{ scale: 1.3, boxShadow: `0 0 15px ${item.color}` }}
                      >
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                      </motion.div>
                      
                      {/* Year */}
                      <div className="text-sm font-bold mb-1" style={{ color: item.color }}>{item.year}</div>
                      
                      {/* Event */}
                      <div className="text-[11px] text-white/60 whitespace-nowrap">{item.event}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
