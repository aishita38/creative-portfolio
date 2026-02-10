import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Linkedin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Work', href: '/#work' },
        { name: 'Experience', href: '/#experience' },
        { name: 'About', href: '/#about' },
        { name: 'Contact', href: '/#contact' },
    ];

    const isHome = location.pathname === '/';

    const handleLinkClick = (e, href) => {
        if (isHome && href.startsWith('/#')) {
            e.preventDefault();
            const targetId = href.replace('/#', '');
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            setIsOpen(false);
        }
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold font-outfit tracking-tighter text-white">
                    CREATIVE<span className="text-indigo-500">.</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleLinkClick(e, link.href)}
                            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex items-center space-x-4 ml-4">
                        <a href="mailto:aishita38@gmail.com" className="text-slate-400 hover:text-white transition-colors">
                            <Mail className="w-5 h-5" />
                        </a>
                        <a href="https://www.linkedin.com/in/ishita-agarwal-a06791322/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Links */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full glass-dark border-t border-white/10 animate-in slide-in-from-top duration-300">
                    <div className="px-6 py-8 flex flex-col space-y-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleLinkClick(e, link.href)}
                                className="text-xl font-medium text-slate-300 hover:text-white"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
