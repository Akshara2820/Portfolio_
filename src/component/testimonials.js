import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaQuoteLeft, FaStar } from 'react-icons/fa';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Akash Sharma',
    role: "Assistant Product Manager @ Masters' Union",
    date: 'August 2025',
    text: "I had the pleasure of working with Akshara Mishra, and I can confidently say she is an exceptional Front-End Developer with a keen eye for detail and a deep understanding of modern web technologies. Her ability to transform complex designs into seamless, interactive, and user-friendly experiences is truly impressive.",
    avatar: 'AS',
  },
  {
    name: 'Jasmeen Kaur',
    role: 'UI/UX Designer',
    date: 'October 2024',
    text: "Working with Akshara Mishra has been an absolute pleasure. Her attention to detail and commitment to delivering high-quality work make her a valuable asset to any project. She's a great communicator, always open to feedback, and ensures that design and functionality align perfectly.",
    avatar: 'JK',
  },
  {
    name: 'Saurabh Mishra',
    role: "Software Engineer at Masters' Union",
    date: 'June 2024',
    text: "Working alongside Akshara has been truly inspiring. Her dedication to crafting seamless user experiences in React is unparalleled. With her keen eye for detail and passion for innovation, she consistently raises the bar, delivering exceptional results.",
    avatar: 'SM',
  },
];

const colors = ['#FFFFFF', '#E0E0E0', '#A0A0A0'];

const TestimonialCard = ({ testimonial, index }) => {
  const color = colors[index % colors.length];
  const [isHovered, setIsHovered] = useState(false);

  // Fun reactions for each testimonial
  const reactions = ['🔥', '💯', '🚀'];

  return (
    <motion.div
      className="group relative p-6 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10 overflow-hidden"
      initial={{ opacity: 0, y: 50, rotateX: -10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.7, delay: index * 0.15, type: 'spring' }}
      viewport={{ once: true, amount: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -10, scale: 1.02, borderColor: `${color}40` }}
      style={{ perspective: 1000 }}
    >
      {/* Background glow */}
      <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at 50% 0%, ${color}15, transparent 60%)` }}
      />

      {/* Floating emoji on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute top-1/2 left-1/2 text-4xl pointer-events-none z-20"
            initial={{ opacity: 0, scale: 0, y: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5], y: -80 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {reactions[index % reactions.length]}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quote icon */}
      <motion.div className="absolute -top-3 -left-3 w-14 h-14 rounded-2xl flex items-center justify-center border"
        style={{ backgroundColor: `${color}15`, borderColor: `${color}30` }}
        initial={{ scale: 0, rotate: -180 }} whileInView={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.5, delay: index * 0.15 + 0.3, type: 'spring' }} viewport={{ once: true }}
        whileHover={{ scale: 1.1, rotate: 10 }}
      >
        <FaQuoteLeft style={{ color }} className="text-xl" />
      </motion.div>

      {/* LinkedIn badge */}
      <motion.a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
        className="absolute -top-3 -right-3 w-12 h-12 rounded-xl bg-[#0A66C2] flex items-center justify-center shadow-lg"
        initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.4, delay: index * 0.15 + 0.4, type: 'spring' }} viewport={{ once: true }}
        whileHover={{ scale: 1.15, rotate: 5 }}
      >
        <FaLinkedin className="text-white text-xl" />
      </motion.a>

      {/* Stars with sparkle effect */}
      <div className="flex gap-1 mb-4 mt-4">
        {[...Array(5)].map((_, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, scale: 0, rotate: -180 }} 
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: index * 0.15 + 0.5 + i * 0.1, type: 'spring' }} 
            viewport={{ once: true }}
            whileHover={{ scale: 1.3, rotate: 20 }}
          >
            <FaStar className="text-yellow-400 text-sm" />
          </motion.div>
        ))}
        <motion.span 
          className="text-xs text-yellow-400/60 ml-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.15 + 1 }}
        >
          5.0
        </motion.span>
      </div>

      {/* Text with highlight effect */}
      <motion.p className="text-white/60 text-sm leading-relaxed mb-6 relative z-10"
        animate={{ color: isHovered ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.6)' }}
      >
        "{testimonial.text}"
      </motion.p>

      {/* Author with enhanced styling */}
      <div className="flex items-center gap-4 pt-4 border-t border-white/10 relative z-10">
        <motion.div className="relative w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${color}40, ${color}20)` }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          {testimonial.avatar}
          {/* Online indicator */}
          <motion.div 
            className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full border-2 border-[#1a1a1a]"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
        <div className="flex-1">
          <h4 className="text-white font-semibold flex items-center gap-2">
            {testimonial.name}
            <motion.span 
              className="text-blue-400 text-xs"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✓
            </motion.span>
          </h4>
          <p className="text-white/50 text-xs">{testimonial.role}</p>
        </div>
        <span className="text-xs px-3 py-1.5 rounded-full" style={{ backgroundColor: `${color}15`, color }}>{testimonial.date}</span>
      </div>

      {/* Bottom accent */}
      <motion.div className="absolute bottom-0 left-0 h-1 rounded-full"
        style={{ backgroundColor: color }}
        initial={{ width: 0 }} animate={{ width: isHovered ? '100%' : '0%' }} transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-24 text-white">
      {/* Header */}
      <motion.div className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
      >
        <motion.div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-white/10 to-gray-400/10 border border-white/10"
          initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} viewport={{ once: true }}
        >
          <FaStar className="text-yellow-400" />
          <span className="text-sm font-medium text-white">What People Say</span>
        </motion.div>
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Client</span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Testimonials</span>
        </h2>
        <motion.p className="text-white/50 max-w-2xl mx-auto"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} viewport={{ once: true }}
        >
          Feedback from colleagues and collaborators I've had the pleasure to work with
        </motion.p>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
