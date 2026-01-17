import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    // Subtle blur effect based on scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
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
            className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 transition-all duration-500 ${scrolled ? 'backdrop-blur-md bg-background/50 border-b border-white/5' : 'bg-transparent'
                }`}
        >
            <div className="flex items-center gap-2 mix-blend-difference">
                <a href="#" className="text-xl font-display font-medium tracking-tight text-primary">
                    Am.
                </a>
            </div>

            <nav className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="text-sm font-medium text-primary/60 hover:text-primary transition-colors duration-300 relative group"
                    >
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
                    </a>
                ))}
            </nav>

            <a
                href="#contact"
                className="px-5 py-2 text-sm font-medium border border-white/10 rounded-full hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
            >
                Let's Talk
            </a>
        </motion.header>
    );
};

export default Header;
