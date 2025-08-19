import React from 'react';
import { FaCode, FaMobileAlt, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';
import CodeSnippetCard from './code';
import TiltedCodeCard from './code';
import ScrollReveal from './aboutText';

function About() {

    const paragraphLines = [
        `I'm a passionate Frontend Developer with over 3 years of experience building modern, responsive web applications.
        I specialize in React.js and Next.js, creating intuitive user interfaces that deliver exceptional user experiences.
        My journey in web development started with a strong foundation in HTML, CSS, and JavaScript, and has evolved to embrace modern frameworks and tools.
        I enjoy solving complex problems and turning ideas into reality through clean, efficient code.
        When I'm not coding, I'm constantly learning new technologies and staying updated with the latest trends in frontend development.
        I believe in writing maintainable code and creating accessible web experiences for all users.`
    ];


    const textVariant = {
        hidden: {
            opacity: 0,
            y: 30,
            color: "#888888", // initial dull color
        },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            color: "#ffffff", // revealed brighter color
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: i * 0.3,
            },
        }),
    };

    const iconVariant = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: (i) => ({
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: 'easeOut', delay: i * 0.2 }
        })
    };

    return (
        <section id="about" className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-20 text-white">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">

                {/* Left - Code Card */}
                <motion.div
                    className="w-full lg:w-1/2"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ amount: 0.3 }}
                >
                    <TiltedCodeCard />
                </motion.div>

                {/* Right - About Content */}
                <motion.div
                    className="w-full lg:w-1/2 bg-white/5 rounded-xl p-6 sm:p-8 backdrop-blur-sm shadow-lg border border-white/10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.3 }}
                >
                    <motion.div
                        className="mb-4"
                        variants={textVariant}
                        custom={0}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.3 }}
                    >
                        <span className="bg-white/10 text-sm px-4 py-1 rounded-full font-semibold border border-white/20">
                            About Me
                        </span>
                    </motion.div>

                    <motion.h2
                        className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-6 leading-tight text-[#f5f5f5]"
                        variants={textVariant}
                        custom={1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.3 }}
                    >
                        Passionate Frontend Developer <br />
                        with <span className='text-[#cccccc]'>Modern Tech Stack</span>
                    </motion.h2>

                    <motion.div
                        className="scroll-reveal-text"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        {
                            "I'm a passionate Frontend Developer with over 3 years of experience building modern, responsive web applications. I specialize in React.js and Next.js, creating intuitive user interfaces that deliver exceptional user experiences. My journey in web development started with a strong foundation in HTML, CSS, and JavaScript, and has evolved to embrace modern frameworks and tools. I enjoy solving complex problems and turning ideas into reality through clean, efficient code. When I'm not coding, I'm constantly learning new technologies and staying updated with the latest trends in frontend development. I believe in writing maintainable code and creating accessible web experiences for all users."
                                .split(" ")
                                .map((word, index) => (
                                    <motion.span
                                        key={index}
                                        className="word"
                                        initial={{ opacity: 0, y: 10, color: "#666666" }}
                                        whileInView={{ opacity: 1, y: 0, color: "#cccccc " }}
                                        transition={{ delay: index * 0.04, duration: 0.3 }}
                                        viewport={{ once: false, amount: 0.4 }}
                                    >
                                        {word}&nbsp;
                                    </motion.span>
                                ))
                        }
                    </motion.div>


                    {/* Skills */}
                    <div className="flex flex-wrap gap-6 mt-8">
                        {[
                            { icon: <FaCode className="text-xl text-[#aaaaaa]" />, title: "Clean Code", desc: "Maintainable & efficient" },
                            { icon: <FaMobileAlt className="text-xl text-[#aaaaaa]" />, title: "Responsive Design", desc: "Works on all devices" },
                            { icon: <FaRocket className="text-xl text-[#aaaaaa]" />, title: "Performance", desc: "Fast & optimized apps" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className="flex items-center gap-3"
                                variants={iconVariant}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.3 }}
                            >
                                {item.icon}
                                <div>
                                    <div className="font-semibold text-[#eeeeee]">{item.title}</div>
                                    <div className="text-sm text-[#aaaaaa]">{item.desc}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>

    );
}

export default About;
