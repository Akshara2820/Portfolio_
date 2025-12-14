import { motion, AnimatePresence } from 'framer-motion';
import { FaTrophy, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const awards = [
  {
    title: "Director's Award",
    issuer: "Master's Union",
    date: "Jul 2025",
    description: "Honored to receive the Director's Award for exceptional teamwork and collaboration. This recognition reflects my commitment to building great products together with my team, supporting colleagues, and contributing to a positive work environment.",
    images: [
      { thumbnail: "/1.png", full: "/award2.JPG" },
      { thumbnail: "/award3.jpg", full: "/award3.jpg" },
      { thumbnail: "/award1.jpeg", full: "/award1.jpeg" },
    ],
  },
];

const ImageModal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative z-10 max-w-4xl max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <FaTimes className="text-white" />
        </button>
        <img
          src={image}
          alt="Award"
          className="max-w-full max-h-[85vh] rounded-xl object-contain"
        />
      </motion.div>
    </motion.div>
  );
};

const AwardCard = ({ award, index }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <motion.div
        className="relative flex flex-col lg:flex-row items-stretch gap-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Left Side - Content */}
        <motion.div
          className="lg:w-[40%] p-6 rounded-xl lg:rounded-r-none bg-gradient-to-br from-[#1e1e1e] to-[#111] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.1, ease: 'easeOut' }}
          viewport={{ once: false }}
        >
          {/* Header */}
          <div className="flex items-start gap-4 mb-4">
            <motion.div
              className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 border border-yellow-500/30 flex items-center justify-center flex-shrink-0"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.2, type: 'spring' }}
              viewport={{ once: false }}
            >
              <FaTrophy className="text-yellow-500 text-xl" />
            </motion.div>
            <div>
              <motion.h3
                className="text-xl font-bold text-white"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                viewport={{ once: false }}
              >
                {award.title}
              </motion.h3>
              <motion.p
                className="text-[#888] text-sm"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.4 }}
                viewport={{ once: false }}
              >
                Issued by {award.issuer} · {award.date}
              </motion.p>
            </div>
          </div>

          {/* Description */}
          {award.description && (
            <motion.p
              className="text-[#bbbbbb] text-sm leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.45 }}
              viewport={{ once: false }}
            >
              {award.description}
            </motion.p>
          )}
        </motion.div>

        {/* Center Branch Line */}
        <div className="hidden lg:flex flex-col items-center justify-center relative">
          <div className="w-[2px] h-full bg-gradient-to-b from-yellow-500/30 via-white/20 to-yellow-500/30" />
          <motion.div
            className="absolute w-4 h-4 rounded-full bg-yellow-500/30 border-2 border-yellow-500/50"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.2 + 0.3, type: 'spring' }}
            viewport={{ once: false }}
          />
        </div>

        {/* Right Side - Images in Square Grid */}
        {award.images && award.images.length > 0 && (
          <motion.div
            className="lg:w-[60%] p-4 rounded-xl lg:rounded-l-none bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10 grid grid-cols-2 gap-3 content-start"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.2, ease: 'easeOut' }}
            viewport={{ once: false }}
          >
            {award.images.map((img, imgIndex) => (
              <motion.div
                key={imgIndex}
                className={`relative overflow-hidden cursor-pointer border border-white/10 hover:border-yellow-500/30 transition-all rounded-lg ${
                  imgIndex === 0 ? 'col-span-1 row-span-2 h-full' : 'aspect-square'
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.4 + imgIndex * 0.1 }}
                viewport={{ once: false }}
                whileHover={{ scale: 1.03 }}
                onClick={() => setSelectedImage(img.full)}
              >
                <img
                  src={img.thumbnail}
                  alt={`${award.title} ${imgIndex + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>

      <AnimatePresence>
        {selectedImage && (
          <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
        )}
      </AnimatePresence>
    </>
  );
};

const Awards = () => {
  return (
    <section id="awards" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-20 text-white">
      <motion.h2
        className="text-3xl sm:text-4xl font-extrabold mb-16 text-center text-[#f5f5f5]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: false }}
      >
        Honors & Awards
      </motion.h2>

      <div className="space-y-6">
        {awards.map((award, index) => (
          <AwardCard key={index} award={award} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Awards;
