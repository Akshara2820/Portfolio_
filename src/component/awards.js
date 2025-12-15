import { motion, AnimatePresence } from 'framer-motion';
import { FaTrophy, FaTimes, FaStar, FaMedal } from 'react-icons/fa';
import { useState } from 'react';

const awards = [
  {
    title: "Director's Award",
    issuer: "Master's Union",
    date: 'Jul 2025',
    description: 'Honored to receive the Director\'s Award for exceptional teamwork and collaboration. This recognition reflects my commitment to building great products together with my team, supporting colleagues, and contributing to a positive work environment.',
    images: [
      { thumbnail: '/1.png', full: '/award2.JPG' },
      { thumbnail: '/award3.jpg', full: '/award3.jpg' },
      { thumbnail: '/award1.jpeg', full: '/award1.jpeg' },
    ],
  },
];

const ImageModal = ({ image, onClose }) => {
  if (!image) return null;
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <motion.div className="absolute inset-0 bg-black/95 backdrop-blur-xl" />
      <motion.div
        initial={{ opacity: 0, scale: 0.7, rotateY: -30 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }} exit={{ opacity: 0, scale: 0.7 }}
        transition={{ type: 'spring', damping: 25 }}
        className="relative z-10 max-w-4xl max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <motion.button onClick={onClose}
          className="absolute -top-14 right-0 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }}
        >
          <FaTimes className="text-white text-lg" />
        </motion.button>
        <motion.img src={image} alt="Award" className="max-w-full max-h-[85vh] rounded-2xl object-contain"
          style={{ boxShadow: '0 0 100px rgba(234, 179, 8, 0.3)' }}
          layoutId={image}
        />
      </motion.div>
    </motion.div>
  );
};

const AwardCard = ({ award, index }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <motion.div className="relative flex flex-col lg:flex-row items-stretch gap-0 rounded-3xl overflow-hidden"
        initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.2 }} viewport={{ once: false, amount: 0.3 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Confetti effect on hover */}
        <AnimatePresence>
          {isHovered && (
            <>
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-xl pointer-events-none z-30"
                  style={{ left: `${20 + Math.random() * 60}%`, top: '50%' }}
                  initial={{ opacity: 0, y: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0], 
                    y: -100 - Math.random() * 50, 
                    x: (Math.random() - 0.5) * 100,
                    scale: [0, 1, 0.5],
                    rotate: Math.random() * 360
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                >
                  {['🏆', '⭐', '🎉', '✨', '🥇', '🌟', '💫', '🎊'][i]}
                </motion.div>
              ))}
            </>
          )}
        </AnimatePresence>

        {/* Left - Content */}
        <motion.div className="lg:w-[45%] p-8 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10 lg:border-r-0 lg:rounded-l-3xl lg:rounded-r-none rounded-t-3xl lg:rounded-t-none flex flex-col justify-center relative overflow-hidden group"
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.1 }} viewport={{ once: false }}
          whileHover={{ borderColor: 'rgba(234, 179, 8, 0.3)' }}
        >
          {/* Glow effect */}
          <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: 'radial-gradient(circle at 0% 50%, rgba(234, 179, 8, 0.1), transparent 60%)' }}
          />

          {/* Trophy icon */}
          <div className="flex items-start gap-4 mb-6 relative z-10">
            <motion.div className="relative"
              initial={{ scale: 0, rotate: -180 }} whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 + 0.2, type: 'spring' }} viewport={{ once: false }}
            >
              <motion.div className="absolute inset-0 rounded-2xl bg-yellow-500/30 blur-xl"
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div 
                className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500/30 to-yellow-600/10 border border-yellow-500/40 flex items-center justify-center"
                animate={isHovered ? { rotate: [0, -10, 10, 0], scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 0.5 }}
              >
                <FaTrophy className="text-yellow-500 text-2xl" />
              </motion.div>
              <motion.div className="absolute -top-1 -right-1"
                animate={{ rotate: [0, 20, 0], scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}
              >
                <FaStar className="text-yellow-400 text-sm" />
              </motion.div>
            </motion.div>

            <div>
              <motion.h3 className="text-2xl font-bold text-white mb-1 flex items-center gap-2"
                initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 + 0.3 }} viewport={{ once: false }}
              >
                {award.title}
                <motion.span 
                  className="text-lg"
                  animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🏆
                </motion.span>
              </motion.h3>
              <motion.p className="text-yellow-500/80 text-sm"
                initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 + 0.4 }} viewport={{ once: false }}
              >
                <FaMedal className="inline mr-2" />
                {award.issuer} · {award.date}
              </motion.p>
            </div>
          </div>

          <motion.p className="text-white/60 leading-relaxed relative z-10"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.2 + 0.5 }} viewport={{ once: false }}
          >
            {award.description}
          </motion.p>

          {/* Achievement badge */}
          <motion.div 
            className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 w-fit"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 + 0.6 }}
            viewport={{ once: false }}
          >
            <motion.span 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ✨
            </motion.span>
            <span className="text-xs text-yellow-400">Proud Achievement</span>
          </motion.div>
        </motion.div>

        {/* Right - Images */}
        {award.images && award.images.length > 0 && (
          <motion.div className="lg:w-[55%] p-4 bg-gradient-to-br from-[#151515] to-[#0a0a0a] border border-white/10 lg:border-l-0 lg:rounded-r-3xl lg:rounded-l-none rounded-b-3xl lg:rounded-b-none grid grid-cols-2 gap-3"
            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }} viewport={{ once: false }}
          >
            {award.images.map((img, imgIndex) => (
              <motion.div key={imgIndex}
                className={`relative overflow-hidden cursor-pointer rounded-xl group ${imgIndex === 0 ? 'col-span-1 row-span-2' : 'aspect-square'}`}
                initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.4 + imgIndex * 0.1 }} viewport={{ once: false }}
                whileHover={{ scale: 1.03 }}
                onHoverStart={() => setHoveredImage(imgIndex)}
                onHoverEnd={() => setHoveredImage(null)}
                onClick={() => setSelectedImage(img.full)}
              >
                <img src={img.thumbnail} alt={`${award.title} ${imgIndex + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <motion.div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
                  animate={{ opacity: hoveredImage === imgIndex ? 1 : 0 }}
                />
                <motion.div className="absolute inset-0 flex items-center justify-center"
                  animate={{ opacity: hoveredImage === imgIndex ? 1 : 0 }}
                >
                  <motion.div className="w-12 h-12 rounded-full bg-yellow-500/80 flex items-center justify-center"
                    initial={{ scale: 0 }} animate={{ scale: hoveredImage === imgIndex ? 1 : 0 }}
                  >
                    <FaTrophy className="text-white" />
                  </motion.div>
                </motion.div>
                <motion.div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-500"
                  initial={{ scaleX: 0 }} animate={{ scaleX: hoveredImage === imgIndex ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>

      <AnimatePresence>
        {selectedImage && <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />}
      </AnimatePresence>
    </>
  );
};

const Awards = () => {
  return (
    <section id="awards" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-24 text-white">
      {/* Header */}
      <motion.div className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false }}
      >
        <motion.div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20"
          initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} viewport={{ once: false }}
        >
          <FaTrophy className="text-yellow-400" />
          <span className="text-sm font-medium text-yellow-400">Recognition</span>
        </motion.div>
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Honors &</span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Awards</span>
        </h2>
        <motion.p className="text-white/50 max-w-2xl mx-auto"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} viewport={{ once: false }}
        >
          Achievements and recognitions throughout my career journey
        </motion.p>
      </motion.div>

      {/* Awards */}
      <div className="space-y-8">
        {awards.map((award, index) => (
          <AwardCard key={index} award={award} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Awards;