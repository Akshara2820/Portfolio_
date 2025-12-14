import { motion } from 'framer-motion';
import { FaLinkedin, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: "Akash Sharma",
    role: "Assistant Product Manager @ Masters' Union",
    date: "August 2025",
    text: "I had the pleasure of working with Akshara Mishra, and I can confidently say she is an exceptional Front-End Developer with a keen eye for detail and a deep understanding of modern web technologies. Her ability to transform complex designs into seamless, interactive, and user-friendly experiences is truly impressive.",
  },
  {
    name: "Jasmeen Kaur",
    role: "UI/UX Designer",
    date: "October 2024",
    text: "Working with Akshara Mishra has been an absolute pleasure. Her attention to detail and commitment to delivering high-quality work make her a valuable asset to any project. She's a great communicator, always open to feedback, and ensures that design and functionality align perfectly. I highly recommend Akshara for any front-end development role—she's a talented and reliable team player.",
  },
  {
    name: "Saurabh Mishra",
    role: "Software Engineer at Masters' Union",
    date: "June 2024",
    text: "Working alongside Akshara has been truly inspiring. Her dedication to crafting seamless user experiences in React is unparalleled. With her keen eye for detail and passion for innovation, she consistently raises the bar, delivering exceptional results. Akshara's collaborative spirit and proactive approach make her an invaluable asset to any team.",
  },
];

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      className="group relative p-6 rounded-xl bg-gradient-to-br from-[#1e1e1e] to-[#111] border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.3 }}
      whileHover={{ y: -5 }}
    >
      {/* Quote icon */}
      <motion.div
        className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center"
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.3, type: 'spring' }}
        viewport={{ once: false }}
      >
        <FaQuoteLeft className="text-white/40 text-sm" />
      </motion.div>

      {/* LinkedIn badge */}
      <motion.div
        className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-[#0A66C2] flex items-center justify-center shadow-lg"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.4, delay: index * 0.2 + 0.4, type: 'spring' }}
        viewport={{ once: false }}
        whileHover={{ scale: 1.1 }}
      >
        <FaLinkedin className="text-white text-lg" />
      </motion.div>

      {/* Content */}
      <motion.p
        className="text-[#bbbbbb] text-sm leading-relaxed mb-6 mt-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
        viewport={{ once: false }}
      >
        "{testimonial.text}"
      </motion.p>

      {/* Author info */}
      <div className="flex items-center gap-3 pt-4 border-t border-white/10">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center text-white font-bold text-sm">
          {testimonial.name.split(' ').map(n => n[0]).join('')}
        </div>
        <div className="flex-1">
          <motion.h4
            className="text-white font-semibold text-sm"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 + 0.5 }}
            viewport={{ once: false }}
          >
            {testimonial.name}
          </motion.h4>
          <motion.p
            className="text-[#888] text-xs"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 + 0.6 }}
            viewport={{ once: false }}
          >
            {testimonial.role}
          </motion.p>
        </div>
        <span className="text-[#666] text-xs">{testimonial.date}</span>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-20 text-white">
      <motion.h2
        className="text-3xl sm:text-4xl font-extrabold mb-16 text-center text-[#f5f5f5]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: false }}
      >
        Recommendations
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
