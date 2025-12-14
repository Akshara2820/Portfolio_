import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
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
      icon: <FaLinkedin className="text-2xl" />,
      url: 'https://www.linkedin.com/in/aksharamishra',
    },
    {
      name: 'GitHub',
      icon: <FaGithub className="text-2xl" />,
      url: 'https://github.com/Akshara2820',
    },
    {
      name: 'Email',
      icon: <FaEnvelope className="text-2xl" />,
      url: 'mailto:aksharamishra028@gmail.com',
    },
  ];

  return (
    <footer id="contact" className="bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-[#f5f5f5]">
              Let's Connect
            </h2>
            <p className="text-[#888] mb-8 leading-relaxed">
              Have a project in mind or just want to say hi? Feel free to reach out. 
              I'm always open to discussing new opportunities and ideas.
            </p>

            <div className="space-y-4 mb-8">
              <a
                href="mailto:aksharamishra028@gmail.com"
                className="flex items-center gap-3 text-[#aaa] hover:text-white transition-colors"
              >
                <FaEnvelope className="text-lg" />
                <span>aksharamishra028@gmail.com</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#aaa] hover:text-white transition-all hover:border-white/20 hover:scale-110"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: false }}
                  whileHover={{ y: -3 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-[#666] focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-[#666] focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-[#666] focus:outline-none focus:border-white/30 transition-colors resize-none"
                />
              </div>
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3 rounded-lg bg-white/10 border border-white/20 text-white font-semibold flex items-center justify-center gap-2 hover:bg-white/20 transition-all disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {status === 'sending' ? (
                  'Sending...'
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </motion.button>

              {status === 'success' && (
                <p className="text-green-400 text-sm text-center">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
              )}
            </form>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          className="mt-16 pt-8 border-t border-white/10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false }}
        >
          <p className="text-[#666] text-sm">
            © {new Date().getFullYear()} Akshara Mishra. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
