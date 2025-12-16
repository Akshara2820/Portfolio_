import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            const sections = ['home', 'about', 'skills', 'projects', 'contact'];
            for (const section of sections.reverse()) {
                const element = document.getElementById(section);
                if (element && window.scrollY >= element.offsetTop - 200) {
                    setActiveSection(section);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
    ];

    return (
        <motion.header 
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
                scrolled 
                    ? 'backdrop-blur-xl bg-background/80 border-b border-white/10 shadow-lg shadow-black/20' 
                    : 'backdrop-blur-md bg-transparent border-b border-transparent'
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
                <motion.div className='flex gap-3 items-center group cursor-pointer' whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <div className="relative">
                        <div className="absolute inset-0 bg-white/20 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300" />
                        <svg className="relative w-9 h-9 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                        </svg>
                    </div>
                    <div className="text-2xl font-bold text-white tracking-tight">AM</div>
                </motion.div>

                <nav className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-sm rounded-full p-1.5 border border-white/10">
                    {navItems.map((item, index) => (
                        <motion.a key={item.name} href={item.href}
                            className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${activeSection === item.href.slice(1) ? 'text-white' : 'text-text-muted hover:text-white'}`}
                            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                        >
                            {activeSection === item.href.slice(1) && (
                                <motion.div className="absolute inset-0 bg-white/10 rounded-full" layoutId="activeNav" transition={{ type: "spring", stiffness: 380, damping: 30 }} />
                            )}
                            <span className="relative z-10">{item.name}</span>
                        </motion.a>
                    ))}
                    <motion.a href="#contact" className="relative ml-2 px-5 py-2 text-sm font-medium text-black rounded-full overflow-hidden group"
                        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    >
                        <div className="absolute inset-0 bg-white" />
                        <span className="relative z-10">Contact</span>
                    </motion.a>
                </nav>

                <motion.div className="md:hidden" whileTap={{ scale: 0.9 }}>
                    <button onClick={toggleMenu} className="relative p-2 text-white rounded-lg hover:bg-white/10 transition-all duration-300 focus:outline-none">
                        <AnimatePresence mode="wait">
                            {menuOpen ? (
                                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                    <HiOutlineX className="w-6 h-6" />
                                </motion.div>
                            ) : (
                                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                    <HiOutlineMenuAlt3 className="w-6 h-6" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </motion.div>
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 space-y-2"
                        initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        {navItems.map((item, index) => (
                            <motion.a key={item.name} href={item.href}
                                className={`block px-4 py-3 font-medium rounded-lg transition-all duration-300 ${activeSection === item.href.slice(1) ? 'text-white bg-white/10' : 'text-text-muted hover:bg-white/10 hover:text-white'}`}
                                onClick={toggleMenu} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}
                            >
                                {item.name}
                            </motion.a>
                        ))}
                        <motion.a href="#contact" className="block mt-4 px-4 py-3 text-center text-black font-medium bg-white rounded-lg" onClick={toggleMenu}
                            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
                        >
                            Contact
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}

export default Header;
