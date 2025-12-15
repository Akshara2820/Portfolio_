import React, { useState } from 'react';
import { FaLightbulb, FaPencilRuler, FaCode, FaCheckCircle, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';

const steps = [
  { icon: FaLightbulb, label: 'Ideation', color: '#FBBF24', desc: 'Research & brainstorm innovative solutions', details: 'Understanding requirements, market research, and conceptualizing the best approach.' },
  { icon: FaPencilRuler, label: 'Design', color: '#F472B6', desc: 'Create intuitive UI/UX designs', details: 'Wireframing, prototyping, and creating pixel-perfect designs.' },
  { icon: FaCode, label: 'Development', color: '#60A5FA', desc: 'Write clean, efficient code', details: 'Building scalable applications with modern technologies.' },
  { icon: FaCheckCircle, label: 'Testing', color: '#34D399', desc: 'Ensure quality & performance', details: 'Unit testing, integration testing, and performance optimization.' },
  { icon: FaRocket, label: 'Deployment', color: '#A78BFA', desc: 'Launch & monitor', details: 'CI/CD pipelines, monitoring, and continuous improvement.' },
];

const ProcessStep = ({ step, index, isActive, onClick }) => {
  const Icon = step.icon;
  
  // Fun emojis for each step
  const stepEmojis = ['💡', '🎨', '⚡', '🔍', '🚀'];

  return (
    <motion.div
      className="relative flex flex-col items-center cursor-pointer group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: false }}
      onClick={() => onClick(index)}
    >
      {/* Step number with emoji */}
      <motion.div className="absolute -top-10 flex items-center gap-1"
        animate={{ scale: isActive ? 1.2 : 1 }}
      >
        <span className="text-xs font-bold" style={{ color: isActive ? step.color : 'rgba(255,255,255,0.3)' }}>
          0{index + 1}
        </span>
        <motion.span 
          className="text-sm"
          animate={isActive ? { rotate: [0, 20, -20, 0], scale: [1, 1.3, 1] } : {}}
          transition={{ duration: 0.5 }}
        >
          {stepEmojis[index]}
        </motion.span>
      </motion.div>

      {/* Icon container */}
      <motion.div className="relative z-10"
        whileHover={{ scale: 1.1 }}
        animate={{ scale: isActive ? 1.15 : 1 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {/* Glow */}
        <motion.div className="absolute inset-0 rounded-full blur-xl"
          style={{ backgroundColor: step.color }}
          animate={{ opacity: isActive ? 0.4 : 0, scale: isActive ? 1.5 : 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Pulse ring */}
        <motion.div className="absolute inset-0 rounded-full border-2"
          style={{ borderColor: step.color }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
        />

        {/* Main circle */}
        <motion.div
          className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center border-2 backdrop-blur-sm"
          style={{
            backgroundColor: isActive ? `${step.color}20` : 'rgba(17,17,17,0.8)',
            borderColor: isActive ? step.color : 'rgba(255,255,255,0.1)',
            boxShadow: isActive ? `0 0 30px ${step.color}40` : 'none',
          }}
          animate={{ rotate: isActive ? [0, 5, -5, 0] : 0 }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="text-2xl lg:text-3xl" style={{ color: isActive ? step.color : 'rgba(255,255,255,0.5)' }} />
        </motion.div>

        {/* Active indicator */}
        {isActive && (
          <motion.div 
            className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-xs"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
          >
            👆
          </motion.div>
        )}
      </motion.div>

      {/* Label */}
      <motion.div className="text-center mt-6"
        animate={{ y: isActive ? -5 : 0 }}
      >
        <div className="text-base lg:text-lg font-semibold" style={{ color: isActive ? step.color : 'rgba(255,255,255,0.7)' }}>
          {step.label}
        </div>
        <motion.div className="text-xs text-white/40 mt-1 max-w-[120px]"
          animate={{ opacity: isActive ? 1 : 0.5 }}
        >
          {step.desc}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

function DevelopmentProcess() {
  const [activeStep, setActiveStep] = useState(2);

  return (
    <section id="process" className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-24 text-white overflow-hidden">
      {/* Header */}
      <motion.div className="text-center mb-20"
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false }}
      >
        <motion.div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-white/10"
          initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} viewport={{ once: false }}
        >
          <FaCode className="text-purple-400" />
          <span className="text-sm font-medium text-purple-400">How I Work</span>
        </motion.div>
        <h2 className="text-4xl sm:text-5xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Development</span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Process</span>
        </h2>
      </motion.div>

      {/* Desktop Timeline */}
      <div className="hidden md:block relative">
        {/* Connection line */}
        <div className="absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-white/10" />
        <motion.div className="absolute top-[60px] left-[10%] h-[2px] bg-gradient-to-r from-yellow-400 via-pink-400 via-blue-400 via-green-400 to-purple-400"
          initial={{ width: 0 }} whileInView={{ width: '80%' }} transition={{ duration: 2, ease: 'easeOut', delay: 0.5 }} viewport={{ once: false }}
        />

        <div className="flex justify-between items-start px-[5%]">
          {steps.map((step, index) => (
            <ProcessStep key={index} step={step} index={index} isActive={activeStep === index} onClick={setActiveStep} />
          ))}
        </div>
      </div>

      {/* Active step details */}
      <motion.div className="mt-16 max-w-2xl mx-auto"
        key={activeStep}
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
      >
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center relative overflow-hidden"
          style={{ borderColor: `${steps[activeStep].color}30` }}
        >
          {/* Background glow */}
          <motion.div 
            className="absolute inset-0 opacity-20"
            style={{ background: `radial-gradient(circle at 50% 0%, ${steps[activeStep].color}, transparent 70%)` }}
          />
          
          <div className="relative z-10">
            <motion.div 
              className="text-3xl mb-3"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {['💡', '🎨', '⚡', '🔍', '🚀'][activeStep]}
            </motion.div>
            <h3 className="text-xl font-bold mb-2" style={{ color: steps[activeStep].color }}>{steps[activeStep].label}</h3>
            <p className="text-white/60 mb-4">{steps[activeStep].details}</p>
            
            {/* Fun tagline */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-xs text-white/50">
                {['Where ideas are born ✨', 'Making it beautiful 🎨', 'Code magic happens here 🪄', 'Quality is key 🔑', 'Ready for the world 🌍'][activeStep]}
              </span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Mobile view */}
      <div className="md:hidden space-y-6">
        {steps.map((step, index) => (
          <motion.div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: false }}
            style={{ borderColor: `${step.color}30` }}
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: `${step.color}20` }}>
              <step.icon style={{ color: step.color }} className="text-xl" />
            </div>
            <div>
              <div className="font-semibold" style={{ color: step.color }}>{step.label}</div>
              <div className="text-xs text-white/50">{step.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default DevelopmentProcess;