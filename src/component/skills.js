import React from 'react';
import { motion } from 'framer-motion';
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt,
} from 'react-icons/fa';
import {
    SiNextdotjs, SiTailwindcss, SiTypescript, SiRedux, SiBootstrap, SiMui,
    SiStyledcomponents, SiGraphql, SiWebpack, SiBabel, SiFigma, SiVercel, SiNetlify, SiJsonwebtokens
} from 'react-icons/si';

const Skill = [
    { name: 'HTML5', icon: <FaHtml5 className="text-4xl text-orange-400" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-4xl text-blue-400" /> },
    { name: 'JavaScript', icon: <FaJs className="text-4xl text-yellow-300" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-4xl text-blue-500" /> },
    { name: 'React.js', icon: <FaReact className="text-4xl text-cyan-400" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-4xl text-white" /> },
    { name: 'Redux', icon: <SiRedux className="text-4xl text-purple-500" /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss className="text-4xl text-cyan-500" /> },
    { name: 'Bootstrap', icon: <SiBootstrap className="text-4xl text-purple-400" /> },
    { name: 'Material UI', icon: <SiMui className="text-4xl text-blue-400" /> },
    { name: 'Styled Components', icon: <SiStyledcomponents className="text-4xl text-pink-300" /> },
    { name: 'GraphQL', icon: <SiGraphql className="text-4xl text-pink-400" /> },
    { name: 'REST APIs', icon: <SiJsonwebtokens className="text-4xl text-green-300" /> },
    { name: 'Webpack', icon: <SiWebpack className="text-4xl text-blue-300" /> },
    { name: 'Babel', icon: <SiBabel className="text-4xl text-yellow-400" /> },
    { name: 'Git', icon: <FaGitAlt className="text-4xl text-red-500" /> },
    { name: 'Figma', icon: <SiFigma className="text-4xl text-pink-500" /> },
    { name: 'Vercel', icon: <SiVercel className="text-4xl text-white" /> },
    { name: 'Netlify', icon: <SiNetlify className="text-4xl text-teal-300" /> },
];

const groupedSkills = {
    'Core': [
        { name: 'HTML5', icon: <FaHtml5 className="text-4xl text-orange-400" /> },
        { name: 'CSS3', icon: <FaCss3Alt className="text-4xl text-blue-400" /> },
        { name: 'JavaScript', icon: <FaJs className="text-4xl text-yellow-300" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-4xl text-blue-500" /> },
    ],
    'Libraries & Frameworks': [
        { name: 'React.js', icon: <FaReact className="text-4xl text-cyan-400" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="text-4xl text-white" /> },
        { name: 'Redux', icon: <SiRedux className="text-4xl text-purple-500" /> },
        { name: 'TailwindCSS', icon: <SiTailwindcss className="text-4xl text-cyan-500" /> },
        { name: 'Bootstrap', icon: <SiBootstrap className="text-4xl text-purple-400" /> },
        { name: 'Material UI', icon: <SiMui className="text-4xl text-blue-400" /> },
        { name: 'Styled Components', icon: <SiStyledcomponents className="text-4xl text-pink-300" /> },
    ],
    'Dev Tools': [
        { name: 'Webpack', icon: <SiWebpack className="text-4xl text-blue-300" /> },
        { name: 'Babel', icon: <SiBabel className="text-4xl text-yellow-400" /> },
        { name: 'Git', icon: <FaGitAlt className="text-4xl text-red-500" /> },
        { name: 'Vercel', icon: <SiVercel className="text-4xl text-white" /> },
        { name: 'Netlify', icon: <SiNetlify className="text-4xl text-teal-300" /> },
    ],
    'API & Data': [
        { name: 'GraphQL', icon: <SiGraphql className="text-4xl text-pink-400" /> },
        { name: 'REST APIs', icon: <SiJsonwebtokens className="text-4xl text-green-300" /> },
    ],
    'Design': [
        { name: 'Figma', icon: <SiFigma className="text-4xl text-pink-500" /> },
    ],
};


export default function Skills() {
    return (
        <section id="skills" className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-24 text-white">

            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:24px_24px] z-0"></div>

            <motion.h2
                className="text-4xl sm:text-5xl font-extrabold mb-16 leading-tight text-center z-10 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.4 }}
            >
                Web Development Skills
            </motion.h2>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-5">
                {Skill.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="relative group rounded-xl bg-gradient-to-br from-[#1e1e1e] to-[#111] p-4 flex flex-col items-center justify-center cursor-pointer shadow-lg hover:shadow-cyan-500/20 transition-all"
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ rotateX: 5, rotateY: -5, scale: 1.05 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: index * 0.04,
                        }}
                        viewport={{ once: true }}
                    >
                        <div className="text-3xl sm:text-4xl transition-transform duration-300 group-hover:scale-125">
                            {skill.icon}
                        </div>

                        <div className="absolute -z-10 w-16 h-16 blur-2xl bg-cyan-500/20 rounded-full top-3 group-hover:opacity-70 opacity-0 transition-all duration-500" />

                        <span className="text-xs sm:text-sm mt-2 font-medium text-white/80 group-hover:text-white transition-opacity">
                            {skill.name}
                        </span>
                    </motion.div>
                ))}
            </div>

        </section>
    );
}
