import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaPaperPlane, FaHeart, FaMapMarkerAlt } from 'react-icons/fa';
import { useState } from 'react';
import MagneticButton from './MagneticButton';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch('https://formspree.io/f/mblnbkrw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
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
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/in/aksharamishra', color: '#FFFFFF' },
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com/Akshara2820', color: '#FFFFFF' },
    { name: 'Email', icon: FaEnvelope, url: 'mailto:aksharamishra028@gmail.com', color: '#FFFFFF' },
  ];

  const inputClasses = "w-full px-5 py-4 rounded-xl bg-surface border border-white/10 text-text-primary placeholder-text-muted focus:outline-none focus:border-white/30 transition-all duration-300";

  return (
    <footer id="contact" className="relative bg-gradient-to-b from-background to-[#050505] border-t border-white/10 overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gray-500/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-20">
        {/* Header */}
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
        >
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 border border-white/20"
            initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} viewport={{ once: true }}
          >
            <FaEnvelope className="text-white" />
            <span className="text-sm font-medium text-white">Get In Touch</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">Let's</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Connect</span>
          </h2>
          <motion.p className="text-text-muted max-w-2xl mx-auto"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} viewport={{ once: true }}
          >
            Have a project in mind or just want to say hi? I'm always open to new opportunities
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Contact Info */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <div className="space-y-6 mb-10">
              <motion.a href="mailto:aksharamishra028@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-white/10 hover:border-white/30 transition-all group"
                whileHover={{ x: 10 }}
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <FaEnvelope className="text-white text-xl" />
                </div>
                <div>
                  <div className="text-text-muted text-sm">Email</div>
                  <div className="text-text-primary font-medium">aksharamishra028@gmail.com</div>
                </div>
              </motion.a>

              <motion.div className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-white/10"
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
                <div>
                  <div className="text-text-muted text-sm">Location</div>
                  <div className="text-text-primary font-medium">Gurugram, India</div>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <MagneticButton key={index} strength={0.4}>
                  <motion.a href={link.url} target="_blank" rel="noopener noreferrer"
                    className="relative w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group overflow-hidden"
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }}
                    whileHover={{ borderColor: `${link.color}50` }}
                  >
                    <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: `radial-gradient(circle at center, ${link.color}20, transparent)` }}
                    />
                    <link.icon className="text-2xl text-white/70 group-hover:text-white transition-colors relative z-10" />
                  </motion.a>
                </MagneticButton>
              ))}
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <form onSubmit={handleSubmit} className="space-y-4">
              {['name', 'email'].map((field, index) => (
                <motion.div key={field} className="relative"
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }} viewport={{ once: true }}
                >
                  <input type={field === 'email' ? 'email' : 'text'} name={field}
                    placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                    value={formData[field]} onChange={handleChange} required
                    onFocus={() => setFocusedField(field)} onBlur={() => setFocusedField(null)}
                    className={inputClasses}
                  />
                  {focusedField === field && (
                    <motion.div className="absolute inset-0 rounded-xl pointer-events-none"
                      style={{ boxShadow: '0 0 30px rgba(255, 255, 255, 0.1)' }}
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    />
                  )}
                </motion.div>
              ))}

              <motion.div className="relative"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }} viewport={{ once: true }}
              >
                <textarea name="message" placeholder="Your Message" value={formData.message}
                  onChange={handleChange} required rows={5}
                  onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField(null)}
                  className={`${inputClasses} resize-none`}
                />
              </motion.div>

              <MagneticButton strength={0.2} className="w-full">
                <motion.button type="submit" disabled={status === 'sending'}
                  className="relative w-full py-4 rounded-xl font-semibold overflow-hidden group bg-white"
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                >
                  <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: 'linear-gradient(45deg, transparent 30%, rgba(0,0,0,0.1) 50%, transparent 70%)', backgroundSize: '200% 200%' }}
                    animate={{ backgroundPosition: ['-200% 0', '200% 0'] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="relative z-10 text-black flex items-center justify-center gap-2">
                    {status === 'sending' ? 'Sending...' : (<><FaPaperPlane /> Send Message</>)}
                  </span>
                </motion.button>
              </MagneticButton>

              {status === 'success' && (
                <motion.p className="text-green-400 text-sm text-center" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  ✓ Message sent successfully!
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p className="text-red-400 text-sm text-center" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  Something went wrong. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div className="mt-20 pt-8 border-t border-white/10 text-center"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}
        >
          <p className="text-white/40 text-sm flex items-center justify-center gap-2">
            © {new Date().getFullYear()} Akshara Mishra. Crafted with
            <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }}>
              <FaHeart className="text-red-500" />
            </motion.span>
            using React & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
