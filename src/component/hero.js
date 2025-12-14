import React from 'react';
import { motion } from 'framer-motion';
import {
  SiReact, SiNextdotjs, SiJavascript, SiTailwindcss,
  SiTypescript, SiBootstrap, SiMui
} from 'react-icons/si';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import '../App.css';
import ScrollingTags from './scrollingTags';

const HeroSection = () => {
  return (
    <div>

      <div id="home" className="m-0 -mt-10 min-h-screen flex items-center justify-center bg-[#0b0b0b] text-white px-4 sm:px-6 lg:px-10">

        <div className=" mx-auto flex flex-col md:flex-row items-center justify-between gap-16">

          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            {/* <div className="mb-5">
            <span className="bg-white/10 border border-white/20 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm">
              Frontend Developer
            </span>
          </div> */}

            <div className="mb-5 sm:mt-0 mt-32">
              <span className="inline-block max-w-full bg-white/10 border border-white/20 text-white px-4 sm:px-6 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm break-words text-center">
                <Typewriter
                  words={[
                    'Frontend Developer',
                    'Software Engineer',
                    'React Developer',
                    'Next.js Specialist',
                    'UI/UX Enthusiast',
                    'Web Performance Expert',
                    'JavaScript Lover'
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </div>


            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Hi, I'm <span className="text-[#cccccc]">Akshara Mishra</span>
            </h1>

            <p className="text-lg text-[#aaaaaa] mb-10 leading-relaxed shiny-text">
              Crafting stunning web experiences using cutting-edge technologies.
              Specialized in React.js & Next.js with 3+ years experience.
            </p>


            <div className="flex justify-center md:justify-start gap-6 mb-5">
              <a
                href="https://www.linkedin.com/in/aksharamishra/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <FaLinkedin className="text-white transition-all duration-300 text-2xl group-hover:scale-125 group-hover:drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]" />
              </a>

              <a
                href="https://github.com/Akshara2820"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <FaGithub className="text-white transition-all duration-300 text-2xl group-hover:scale-125 group-hover:drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]" />
              </a>

              <a
                href="https://www.instagram.com/akshara.mishra0603/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <FaInstagram className="text-white transition-all duration-300 text-2xl group-hover:scale-125 group-hover:drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-6">
              <a
                href="https://drive.google.com/uc?export=download&id=1hKqInTjNzM1UHWdfZyX0XrH9IZro_Gka"
                rel="noopener noreferrer"
                className="relative overflow-hidden text-[14px] border border-white/20 text-white px-6 py-2 rounded-full font-semibold shadow-lg backdrop-blur-sm transition-transform hover:scale-105 group"
              >
                <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                  Download CV
                </span>
                <span
                  className="absolute inset-0 z-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"
                  style={{ transitionTimingFunction: 'cubic-bezier(0.45, 0, 0.55, 1)' }}
                ></span>
              </a>


              <button className="text-[14px] border border-white/20 text-white px-6 py-2 rounded-full font-semibold hover:bg-white/10 backdrop-blur-sm transition">
                View Projects
              </button>
            </div>

          </div>

          {/* Right Content - Circular Profile */}
          <div className="flex-1 flex justify-center items-center">
            <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[420px] lg:h-[420px] flex items-center justify-center">

              {/* Solid Circle */}
              <div className="absolute w-[70%] h-[70%] rounded-full border-[3px] border-[#333333]"></div>

              {/* Dashed rotating circle */}
              <motion.div
                className="absolute w-[80%] h-[80%] rounded-full border-[3px] border-dashed border-[#444444]"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: [0.42, 0, 0.58, 1] }}
              />

              {/* Profile Circle */}
              <div className="w-[60%] h-[60%] bg-[#1a1a1a] rounded-full flex items-center justify-center z-10 shadow-lg">
                <motion.div
                  className="w-full h-full rounded-full p-1 bg-[#1a1a1a] shadow-lg"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 5 }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <img src="/pic3.jpg" alt="profile" className="w-full h-full object-cover" />
                  </div>
                </motion.div>
              </div>

              {/* Tech Icons */}
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 2 }}
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0b0b0b] p-2 rounded-full shadow-md">
                <SiReact size={26} className="text-[#61DBFB]" />
              </motion.div>

              <motion.div animate={{ x: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 2 }}
                className="absolute top-[20%] left-[10%] bg-[#0b0b0b] p-2 rounded-full shadow-md">
                <SiTailwindcss size={26} className="text-[#38BDF8]" />
              </motion.div>

              <motion.div animate={{ x: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}
                className="absolute top-[20%] right-[10%] bg-[#0b0b0b] p-2 rounded-full shadow-md">
                <SiJavascript size={26} className="text-[#F7DF1E]" />
              </motion.div>

              <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-[#0b0b0b] p-2 rounded-full shadow-md">
                <SiNextdotjs size={26} className="text-white" />
              </motion.div>

              <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 2 }}
                className="absolute top-[15%] right-[30%] bg-[#0b0b0b] p-2 rounded-full shadow-md">
                <SiTypescript size={26} className="text-[#007ACC]" />
              </motion.div>

              <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-[15%] right-[20%] bg-[#0b0b0b] p-2 rounded-full shadow-md">
                <SiBootstrap size={26} className="text-[#7952B3]" />
              </motion.div>

              <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-[20%] left-[20%] bg-[#0b0b0b] p-2 rounded-full shadow-md">
                <SiMui size={26} className="text-[#007FFF]" />
              </motion.div>

            </div>
          </div>
        </div>
      </div>
      <ScrollingTags />
    </div>
  );
};

export default HeroSection;
