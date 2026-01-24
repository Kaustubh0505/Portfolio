import React, { useState, useEffect } from "react";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-slate-200 z-50 transition-all duration-300 ${scrolled ? 'shadow-sm' : ''}`}>
            <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
                <a href="#home" className="text-xl md:text-2xl font-bold text-slate-900 no-underline hover:text-primary transition-colors duration-300 tracking-tight">KH</a>
                <ul className="flex list-none gap-4 md:gap-6 lg:gap-10 items-center text-xs md:text-sm">
                    <li><a href="#home" className="text-slate-600 no-underline font-medium hover:text-slate-900 transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Home</a></li>
                    <li><a href="#about" className="text-slate-600 no-underline font-medium hover:text-slate-900 transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">About</a></li>
                    <li><a href="#skills" className="text-slate-600 no-underline font-medium hover:text-slate-900 transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Skills</a></li>
                    <li><a href="#projects" className="text-slate-600 no-underline font-medium hover:text-slate-900 transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Projects</a></li>
                    <li><a href="#experience" className="text-slate-600 no-underline font-medium hover:text-slate-900 transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Experience</a></li>
                    <li><a href="#contact" className="text-slate-600 no-underline font-medium hover:text-slate-900 transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;