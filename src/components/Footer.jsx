import React from 'react';
import { Mail, Linkedin, ArrowUp, Scissors } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="pt-20 pb-20 border-t border-sky/15 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute -bottom-10 left-[10%] opacity-[0.02] font-mono text-[8rem] md:text-[10rem] font-bold tracking-widest pointer-events-none select-none">
                THE END
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
                    <div className="text-center md:text-left">
                        <div className="flex flex-col items-center md:items-start">
                            <div className="relative inline-block py-2">
                                <span className="text-2xl font-bold font-mono tracking-[0.15em] text-dark uppercase">
                                    ISHITA <span className="text-pink font-vt323 font-normal normal-case tracking-normal text-3xl align-middle">Agarwal</span>
                                </span>
                            </div>
                            <div className="mt-2">
                                <span className="text-[11px] font-bold font-mono tracking-[0.2em] text-sky/80 uppercase bg-sky/10 border border-sky/20 rounded-full px-3 py-1">
                                    GRAPHIC DESIGNER
                                </span>
                            </div>
                        </div>
                        <p className="mt-6 text-dark/85 max-w-xs font-sans font-medium text-lg">
                            Designing and building digital experiences that matter.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <a href="mailto:aishita38@gmail.com" className="w-12 h-12 bg-white border border-sky/20 rounded-full flex items-center justify-center text-dark hover:text-white hover:bg-sky hover:border-sky transition-all duration-300 shadow-sm cursor-pointer">
                            <Mail className="w-5 h-5" />
                        </a>
                        <a href="https://www.linkedin.com/in/ishita-agarwal-a06791322/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white border border-sky/20 rounded-full flex items-center justify-center text-dark hover:text-white hover:bg-sky hover:border-sky transition-all duration-300 shadow-sm cursor-pointer">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="w-12 h-12 bg-white border border-sky/20 rounded-full flex items-center justify-center text-dark hover:text-white hover:bg-sky hover:border-sky transition-all duration-300 shadow-sm group cursor-pointer"
                        >
                            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                        </button>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-sky/15 text-xs font-bold font-mono tracking-wider text-dark/80">
                    <p>© {new Date().getFullYear()} ISHITA AGARWAL. ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
