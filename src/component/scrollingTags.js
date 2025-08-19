import React from "react";

const ScrollingTags = () => {
  const tags = [
    "Frontend",
    "React.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "UI/UX",
    "Clean Code",
    "Performance",
    "Web Apps",
    "Tailwind",
    "MUI",
    "Bootstrap",
    "API Integration",
    "Git",
    "CI/CD",
    "Mentor",
    "Community",
    "Learning",
  ];

  return (
    <div className="relative w-full overflow-hidden py-4 bg-[#0f0f0f] border-y border-white/10 mt-0 lg:-mt-[80px]  -rotate-[4deg]">
      {/* Scroll animation wrapper */}
      <div className="animate-marquee whitespace-nowrap  flex items-center justify-center gap-6">
        {tags.map((tag, idx) => (
          <React.Fragment key={idx}>
            <span className="text-[#666666] text-base sm:text-lg font-medium">{tag}</span>
            <span className="text-[#333333] text-lg">✦</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ScrollingTags;
