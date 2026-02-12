import React from 'react';
import { Mail, Linkedin, ArrowUp, Scissors } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="pt-24 pb-32 bg-paper border-t-4 border-dashed border-dark/10 relative overflow-hidden">
            {/* Background Doodle */}
            <div className="absolute -bottom-6 left-[10%] opacity-5 marker-text text-8xl md:text-9xl rotate-[5deg] pointer-events-none select-none">
                THE END
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
                    <div className="text-center md:text-left">
                        <div className="flex flex-col items-center md:items-start gap-3">
                            <div className="relative inline-block px-6 py-2 bg-white scrapbook-card rotate-[-1deg]">
                                <span className="text-2xl font-black font-outfit tracking-tighter text-dark uppercase">
                                    ISHITA<span className="text-pink">AGARWAL</span>
                                </span>
                            </div>
                            <div className="bg-white/40 border-2 border-dashed border-pink/20 scrapbook-card px-4 py-1 rotate-[2deg] inline-block">
                                <span className="text-sm font-black font-outfit tracking-tighter text-dark/40 uppercase">
                                    GRAPHIC DESIGNER
                                </span>
                            </div>
                        </div>
                        <p className="mt-6 text-dark/50 max-w-xs hand-text font-bold italic text-xl">
                            "Designing and building digital experiences that matter."
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <a href="mailto:aishita38@gmail.com" className="w-14 h-14 bg-white scrapbook-card flex items-center justify-center text-dark hover:text-pink transition-all hover:-translate-y-2 hover:rotate-12">
                            <Mail className="w-6 h-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/ishita-agarwal-a06791322/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white scrapbook-card flex items-center justify-center text-dark hover:text-pink transition-all hover:-translate-y-2 hover:rotate-[-12deg]">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="w-14 h-14 bg-white scrapbook-card flex items-center justify-center text-dark hover:text-pink transition-all hover:-translate-y-2 hover:rotate-6 group"
                        >
                            <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t-2 border-dashed border-dark/10 text-xs font-black uppercase tracking-widest text-dark/30">
                    <p>© {new Date().getFullYear()} Graphic Designer Portfolio. 2025 Edition.</p>
                    <div className="flex gap-8 mt-4 md:mt-0 marker-text">
                        <span className="cursor-default">Thanks for stopping by!</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
