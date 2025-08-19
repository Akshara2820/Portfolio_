import React from 'react';
import { FaLightbulb, FaPencilRuler, FaCode, FaCheckCircle, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';

const steps = [
  { icon: <FaLightbulb className="text-3xl text-[#dddddd]" />, label: 'Ideation' },
  { icon: <FaPencilRuler className="text-3xl text-[#dddddd]" />, label: 'Design' },
  { icon: <FaCode className="text-3xl text-[#dddddd]" />, label: 'Development' },
  { icon: <FaCheckCircle className="text-3xl text-[#dddddd]" />, label: 'Testing' },
  { icon: <FaRocket className="text-3xl text-[#dddddd]" />, label: 'Deployment' },
];

function DevelopmentProcess() {
  return (
    <section id="process" className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-20 text-white">
      <motion.h2 
        className="text-3xl sm:text-4xl font-extrabold mb-16 text-center text-[#f5f5f5]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: false }}
      >
        Development Process
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-16">
        {steps.map((step, index) => (
          <motion.div 
            key={index} 
            className="flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.2 }}
            viewport={{ once: false }}
          >
            <div className="w-20 h-20 border border-white/20 rounded-full flex items-center justify-center shadow-lg bg-white/5 backdrop-blur-sm">
              {step.icon}
            </div>
            <div className="text-lg font-semibold text-[#dddddd]">{step.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default DevelopmentProcess;
