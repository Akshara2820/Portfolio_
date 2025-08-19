import React, { useState } from 'react';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="px-14 fixed top-0 left-0 w-full z-50 bg-[#0b0b0b] shadow-md transition duration-300">
            <div className="mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <div className='flex gap-2 items-center'>
                    <svg
                        className="w-10 h-10 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                    </svg>

                    <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-100 to-white">
                        AM
                    </div>

                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-8 text-lg font-medium">
                    <a href="#home" className="text-white hover:text-pink-400 transition duration-300">Home</a>
                    <a href="#about" className="text-[#cccccc] hover:text-pink-400 transition duration-300">About</a>
                    <a href="#skills" className="text-[#cccccc] hover:text-pink-400 transition duration-300">Skills</a>
                    <a href="#projects" className="text-[#cccccc] hover:text-pink-400 transition duration-300">Projects</a>
                    <a href="#contact" className="text-[#cccccc] hover:text-pink-400 transition duration-300">Contact</a>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white text-3xl focus:outline-none">
                        {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-[#0b0b0b] px-6 py-4 space-y-4 text-lg text-white font-medium transition">
                    <a href="#home" className="block hover:text-pink-400" onClick={toggleMenu}>Home</a>
                    <a href="#about" className="block hover:text-pink-400" onClick={toggleMenu}>About</a>
                    <a href="#skills" className="block hover:text-pink-400" onClick={toggleMenu}>Skills</a>
                    <a href="#projects" className="block hover:text-pink-400" onClick={toggleMenu}>Projects</a>
                    <a href="#contact" className="block hover:text-pink-400" onClick={toggleMenu}>Contact</a>
                </div>
            )}
           
        </header>
    )
}

export default Header;
