import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Linkedin, Notebook } from 'lucide-react';
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
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-white/90 backdrop-blur-xl border-b border-dark/5 shadow-sm' : 'py-8'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-4 relative group">
                    <div className="relative">
                        <span className="text-2xl font-black font-outfit tracking-tighter text-dark uppercase transition-all group-hover:tracking-normal">
                            ISHITA<span className="text-pink">AGARWAL</span>
                        </span>
                    </div>

                    <div className="relative hidden lg:block">
                        <div className="px-3 py-1 bg-dark/5 rounded-full border border-dark/5 flex items-center gap-2">
                            <Notebook className="w-3 h-3 text-dark/40" />
                            <span className="text-[10px] font-bold font-sans tracking-widest text-dark/40 uppercase">
                                GRAPHIC DESIGNER
                            </span>
                        </div>
                    </div>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-1">
                    {navLinks.map((link, idx) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleLinkClick(e, link.href)}
                            className={`px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-dark/60 hover:text-dark transition-all relative group`}
                        >
                            {link.name}
                            <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-pink scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                        </a>
                    ))}
                    <div className="flex items-center space-x-6 ml-12">
                        <a href="mailto:aishita38@gmail.com" className="text-dark/60 hover:text-pink transition-colors relative group">
                            <Mail className="w-5 h-5" />
                        </a>
                        <a href="https://www.linkedin.com/in/ishita-agarwal-a06791322/" target="_blank" rel="noopener noreferrer" className="text-dark/60 hover:text-pink transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden relative">
                    <button className="relative z-10 p-2 bg-white scrapbook-card border-2 border-dark text-dark" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                    <div className="absolute -top-1 -right-1 w-full h-full border-2 border-dark/10 rotate-2 pointer-events-none" />
                </div>
            </div>

            {/* Mobile Links */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full px-6 py-4 animate-in fade-in slide-in-from-top-4 duration-300">
                    <div className="bg-white scrapbook-card p-8 flex flex-col space-y-8 border-4 border-dark/10 rotate-1 shadow-2xl">
                        <div className="tape tape-pink -top-4 left-1/4" />
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleLinkClick(e, link.href)}
                                className="text-2xl font-black text-dark uppercase tracking-tighter marker-text hover:text-pink transition-colors"
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
