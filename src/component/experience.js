import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const experiences = [
  {
    company: "Masters' Union",
    role: "Frontend Developer",
    period: "2024 - Present",
    description: "Leading the frontend architecture for scalable educational platforms. Implemented micro-frontends and improved core web vitals by 40%.",
    tech: ["React", "Next.js", "TypeScript", "Performance"]
  },
  {
    company: "Tif Labs",
    role: "Frontend Developer",
    period: "2022 - 2024",
    description: "Developed and maintained client-facing applications for diverse industries. Collaborated with designers to implement pixel-perfect user interfaces.",
    tech: ["React", "Redux", "Tailwind", "Figma"]
  },
  {
    company: "Hyperverge",
    role: "Frontend Developer Intern",
    period: "2021 - 2022",
    description: "Contributed to AI-powered identity verification interfaces. Built reusable component libraries used across multiple products.",
    tech: ["Javascript", "React", "CSS Modules"]
  },
];

const ExperienceCard = ({ exp, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative pl-8 md:pl-0"
    >
      {/* Timeline Dot (Mobile: Left, Desktop: Center) */}
      <div className="absolute left-[-5px] md:left-1/2 top-0 md:-ml-[5px] w-2.5 h-2.5 bg-accent rounded-full z-10 box-content border-4 border-background" />

      <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-0' : 'md:pl-12 md:ml-auto'}`}>
        <div className="bg-surface hover:bg-surface-hover border border-white/5 p-6 rounded-2xl transition-colors duration-300 group">
          <span className="text-accent text-xs font-mono tracking-wider uppercase mb-2 inline-block">
            {exp.period}
          </span>
          <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-1">
            {exp.company}
          </h3>
          <p className="text-primary/60 text-sm font-medium mb-4">
            {exp.role}
          </p>
          <p className="text-primary/70 text-sm leading-relaxed mb-6">
            {exp.description}
          </p>
          <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
            {exp.tech.map((t, i) => (
              <span key={i} className="px-2 py-1 bg-white/5 text-xs text-primary/50 rounded font-mono border border-white/5">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden">
      <div className="mb-16 md:mb-24 px-4 md:px-0 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display font-semibold mb-4"
        >
          3+ Years of Experience
        </motion.h2>
        <p className="text-primary/50 text-sm md:text-base max-w-xl mx-auto">
          A timeline of my professional journey and growth in the tech industry.
        </p>
      </div>

      <div ref={ref} className="relative max-w-5xl mx-auto px-4 md:px-0">
        {/* Vertical Line */}
        <div className="absolute left-0.5 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 md:-ml-[0.5px]">
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute top-0 left-0 w-full h-full bg-accent"
          />
        </div>

        <div className="space-y-12 md:space-y-24">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
