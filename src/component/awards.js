import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTrophy, FaTimes } from 'react-icons/fa';

const Awards = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/award2.JPG",
    "/award3.jpg", // Using existing image as placeholder if specific award images aren't there
    "/award1.jpeg"
  ];
  // 
  return (
    <section id="awards" className="py-24 md:py-32 relative">
      <div className="text-center mb-16 md:mb-24">
        <h2 className="text-4xl md:text-5xl font-display font-semibold mb-4 text-white">
          Honors & Awards
        </h2>
        {/* <div className="h-1 w-24 rounded-full mx-auto" style={{ backgroundColor: 'var(--color-accent)' }} /> */}
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="bg-[#121212] border border-white/10 rounded-3xl overflow-hidden flex flex-col md:flex-row relative">
          {/* Accent Line */}
          <div className="absolute left-0 top-0 bottom-0 w-1" />

          {/* Left Content */}
          <div className="w-full md:w-5/12 p-8 md:p-12 flex flex-col justify-center relative z-10">
            <div className="mb-8">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 
                bg-blue-500/10 border border-blue-500">
                <FaTrophy className="text-2xl text-accent" />
              </div>

              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                Director's Award
              </h3>
              <p className="text-accent font-mono text-sm uppercase tracking-wider mb-6">
                Issued by Master's Union • Jul 2025
              </p>
              <p className="text-primary/70 leading-relaxed text-lg">
                Honored to receive the Director's Award for exceptional teamwork and collaboration.
                This recognition reflects my commitment to building great products together with my team,
                supporting colleagues, and contributing to a positive work environment.
              </p>
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div className="w-full md:w-7/12 bg-[#0A0A0A] p-4 md:p-4 grid grid-cols-2 gap-4">
            {/* Large Main Image */}
            <div
              className="row-span-2 relative overflow-hidden rounded-2xl cursor-zoom-in group"
              onClick={() => setSelectedImage(images[0])}
            >
              <img
                src={images[0]}
                alt="Award Ceremony Main"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
            </div>

            {/* Smaller Stacked Images */}
            <div
              className="relative overflow-hidden rounded-2xl cursor-zoom-in group h-48 md:h-auto"
              onClick={() => setSelectedImage(images[1])}
            >
              <img
                src={images[1]}
                alt="Award Detail 1"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div
              className="relative overflow-hidden rounded-2xl cursor-zoom-in group h-48 md:h-auto"
              onClick={() => setSelectedImage(images[2])}
            >
              <img
                src={images[2]}
                alt="Award Detail 2"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
            >
              <FaTimes size={32} />
            </button>
            <motion.img
              layoutId={selectedImage}
              src={selectedImage}
              alt="Full Screen View"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Awards;
