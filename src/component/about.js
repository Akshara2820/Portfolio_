import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-12 border-b border-white/10 pb-4 flex justify-between items-end"
      >
        <h2 className="text-3xl font-display font-medium">About</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 text-lg text-primary/80 font-light leading-relaxed"
        >
          <p>
            I'm Akshara Mishra, a frontend developer based in Gurugram, India.
            I have a deep passion for creating interfaces that feel natural and intuitive.
          </p>
          <p>
            Currently, I'm building scalable applications at Masters' Union. My approach mixes technical precision
            with a keen eye for design, ensuring that every pixel serves a purpose.
          </p>
          <p>
            When I'm not coding, I'm exploring new design trends or optimizing performance metrics.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-surface aspect-square md:aspect-[4/3] overflow-hidden rounded-sm"
        >
          <img src="/pic3.jpg" alt="Portrait" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
