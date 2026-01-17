import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { useState } from 'react';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/mblnbkrw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="text-xl" />,
      url: 'https://www.linkedin.com/in/aksharamishra',
    },
    {
      name: 'GitHub',
      icon: <FaGithub className="text-xl" />,
      url: 'https://github.com/Akshara2820',
    },
    {
      name: 'Email',
      icon: <FaEnvelope className="text-xl" />,
      url: 'mailto:aksharamishra028@gmail.com',
    },
  ];

  const inputClasses = "w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-all duration-300 hover:bg-white/10 text-sm";

  return (
    <footer id="contact" className="relative pt-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col h-full"
          >
            <div>
              <span className="text-xs font-bold tracking-widest text-primary/40 uppercase mb-4 block">Contact</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-6">
                Let's work together
              </h2>

              <p className="text-base text-primary/60 leading-relaxed max-w-md mb-8">
                I'm currently available for freelance projects and open to full-time opportunities. If you have a project that needs some creative touch, let's chat.
              </p>

              <div className="flex flex-col gap-4">
                <a href="mailto:aksharamishra028@gmail.com" className="text-lg text-white hover:text-white/80 transition-colors font-medium flex items-center gap-2">
                  <FaEnvelope className="text-primary/60 text-sm" />
                  aksharamishra028@gmail.com
                </a>

                <div className="flex gap-3 mt-2">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary/60 hover:text-white hover:bg-white/10 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#161617] p-6 md:p-8 rounded-[2rem] border border-white/5"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-primary/60 ml-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-primary/60 ml-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-primary/60 ml-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className={inputClasses + " resize-none"}
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 rounded-xl bg-white text-black font-semibold text-sm hover:bg-gray-100 transition-all flex items-center justify-center gap-2 disabled:opacity-80 mt-2"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {status === 'sending' ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    <span>Sending...</span>
                  </div>
                ) : (
                  <>
                    Send Message <FaPaperPlane className="text-xs" />
                  </>
                )}
              </motion.button>

              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center justify-center gap-2 p-3 rounded-lg bg-green-500/10 text-green-400 text-sm font-medium border border-green-500/20"
                  >
                    <FaCheckCircle />
                    Message sent successfully!
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center justify-center gap-2 p-3 rounded-lg bg-red-500/10 text-red-400 text-sm font-medium border border-red-500/20"
                  >
                    <FaExclamationCircle />
                    Something went wrong. Please try again.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>

        <div className="mt-12 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary/40">
          <p>© {new Date().getFullYear()} Akshara Mishra. All rights reserved.</p>
          <p>Designed & Built with ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
