import React from 'react';
import './scrollingTags.css';

const ScrollingTags = () => {
  const tags = [
    { text: 'Frontend', color: '#FFFFFF' },
    { text: 'React.js', color: '#E0E0E0' },
    { text: 'Next.js', color: '#FFFFFF' },
    { text: 'JavaScript', color: '#C0C0C0' },
    { text: 'TypeScript', color: '#A0A0A0' },
    { text: 'UI/UX', color: '#D0D0D0' },
    { text: 'Clean Code', color: '#B0B0B0' },
    { text: 'Performance', color: '#E0E0E0' },
    { text: 'Web Apps', color: '#909090' },
    { text: 'Tailwind', color: '#C0C0C0' },
    { text: 'MUI', color: '#A0A0A0' },
    { text: 'Bootstrap', color: '#808080' },
  ];

  // Only duplicate twice for seamless loop
  const duplicatedTags = [...tags, ...tags];

  return (
    <div className="relative w-full overflow-hidden py-6 bg-gradient-to-r from-black via-[#0a0a0a] to-black border-y border-white/10 mt-0 lg:-mt-[80px] -rotate-[3deg]">
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      {/* CSS-only marquee for better performance */}
      <div className="scrolling-tags-marquee">
        {duplicatedTags.map((tag, idx) => (
          <React.Fragment key={idx}>
            <span
              className="text-base sm:text-lg font-medium cursor-default transition-colors duration-300 hover:scale-110"
              style={{ color: `${tag.color}80` }}
            >
              {tag.text}
            </span>
            <span className="text-lg" style={{ color: `${tags[idx % tags.length].color}40` }}>
              ✦
            </span>
          </React.Fragment>
        ))}
      </div>

      {/* Static glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />
    </div>
  );
};

export default ScrollingTags;