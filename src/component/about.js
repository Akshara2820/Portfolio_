import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Completed", value: "20+" },
  { label: "Happy Clients", value: "10+" },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-accent text-sm font-mono tracking-wider uppercase mb-4 block">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-medium mb-8 leading-tight">
            Merging technical precision with <span className="text-primary/40">artistic design</span>.
          </h2>

          <div className="space-y-6 text-lg text-primary/70 font-light leading-relaxed mb-12">
            <p>
              I'm Akshara Mishra, a frontend developer based in Gurugram, India.
              I specialize in building performant, accessible, and beautiful web applications.
            </p>
            <p>
              Currently, I'm building scalable applications at Masters' Union. My approach mixes technical precision
              with a keen eye for design, ensuring that every pixel serves a purpose.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <div key={i}>
                <h4 className="text-3xl md:text-4xl font-display font-bold text-white mb-1">
                  {stat.value}
                </h4>
                <span className="text-xs text-primary/40 font-mono uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-[350px] mx-auto md:ml-auto"
        >
          <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full mix-blend-screen" />
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            <img
              src="/pic3.jpg"
              alt="Portrait"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
