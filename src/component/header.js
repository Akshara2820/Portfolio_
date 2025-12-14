import React, { useState } from 'react';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#0b0b0b]/90 border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">

                {/* Logo */}
                <div className='flex gap-3 items-center group cursor-pointer'>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                        <svg
                            className="relative w-9 h-9 text-white"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                        </svg>
                    </div>

                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 tracking-tight">
                        AM
                    </div>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-1">
                    <a href="#home" className="relative px-4 py-2 text-sm font-medium text-white rounded-full hover:bg-white/10 transition-all duration-300">
                        Home
                    </a>
                    <a href="#about" className="relative px-4 py-2 text-sm font-medium text-gray-400 hover:text-white rounded-full hover:bg-white/10 transition-all duration-300">
                        About
                    </a>
                    <a href="#skills" className="relative px-4 py-2 text-sm font-medium text-gray-400 hover:text-white rounded-full hover:bg-white/10 transition-all duration-300">
                        Skills
                    </a>
                    <a href="#projects" className="relative px-4 py-2 text-sm font-medium text-gray-400 hover:text-white rounded-full hover:bg-white/10 transition-all duration-300">
                        Projects
                    </a>
                    <a href="#contact" className="ml-2 px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full hover:from-cyan-600 hover:to-blue-700 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                        Contact
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="relative p-2 text-white rounded-lg hover:bg-white/10 transition-all duration-300 focus:outline-none">
                        {menuOpen ? <HiOutlineX className="w-6 h-6" /> : <HiOutlineMenuAlt3 className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-[#0b0b0b]/95 backdrop-blur-lg border-b border-white/5 px-6 py-6 space-y-2">
                    <a href="#home" className="block px-4 py-3 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300" onClick={toggleMenu}>
                        Home
                    </a>
                    <a href="#about" className="block px-4 py-3 text-gray-400 font-medium rounded-lg hover:bg-white/10 hover:text-white transition-all duration-300" onClick={toggleMenu}>
                        About
                    </a>
                    <a href="#skills" className="block px-4 py-3 text-gray-400 font-medium rounded-lg hover:bg-white/10 hover:text-white transition-all duration-300" onClick={toggleMenu}>
                        Skills
                    </a>
                    <a href="#projects" className="block px-4 py-3 text-gray-400 font-medium rounded-lg hover:bg-white/10 hover:text-white transition-all duration-300" onClick={toggleMenu}>
                        Projects
                    </a>
                    <a href="#contact" className="block mt-4 px-4 py-3 text-center text-white font-medium bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300" onClick={toggleMenu}>
                        Contact
                    </a>
                </div>
            )}
           
        </header>
    )
}

export default Header;
