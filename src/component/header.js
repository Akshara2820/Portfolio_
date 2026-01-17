import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'About', href: '#about' },
    ];

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'
                }`}
        >
            <div className={`max-w-[1600px] mx-auto flex items-center justify-between p-4 rounded-full transition-all duration-300 ${scrolled ? 'bg-surface/60 backdrop-blur-xl border border-white/5 shadow-lg' : 'bg-transparent'
                }`}>
                <div className="flex items-center gap-2">
                    <a href="/" className="text-xl font-display font-bold tracking-tight text-white pl-2">
                        Am.
                    </a>
                </div>

                <nav className="hidden md:flex items-center gap-8 bg-surface/40 px-8 py-3 rounded-full border border-white/5 backdrop-blur-md">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-primary/60 hover:text-white transition-colors duration-300"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <a
                    href="#contact"
                    className="px-6 py-2.5 text-sm font-medium bg-white text-black rounded-full hover:scale-105 transition-transform duration-300"
                >
                    Let's Talk
                </a>
            </div>
        </motion.header>
    );
};

export default Header;
