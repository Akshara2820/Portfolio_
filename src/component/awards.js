import React from 'react';
import { motion } from 'framer-motion';

const Awards = () => {
  return (
    <section id="awards" className="py-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-12 border-b border-white/10 pb-4 flex justify-between items-end"
      >
        <h2 className="text-3xl font-display font-medium">Honors</h2>
      </motion.div>

      <div className="group border border-white/5 bg-surface p-8 rounded-sm hover:border-white/10 transition-colors">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h3 className="text-2xl font-display font-medium text-white">Director's Award</h3>
            <p className="text-primary/60 mt-1">Master's Union · Jul 2025</p>
          </div>
          <span className="px-3 py-1 bg-white/5 text-xs font-mono text-primary/60 rounded-full">Winner</span>
        </div>

        <p className="text-primary/70 leading-relaxed max-w-2xl mb-8">
          Received for exceptional teamwork and collaboration. Recognized for commitment to building great products
          and contributing to a positive work environment.
        </p>

        <div className="flex gap-4 overflow-x-auto pb-2">
          {[1, 2, 3].map((item) => (
            <div key={item} className="w-24 h-24 bg-white/5 rounded-sm overflow-hidden flex-shrink-0">
              <img src={`/award${item}.jpg`} alt="Award" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" onError={(e) => e.target.style.display = 'none'} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
