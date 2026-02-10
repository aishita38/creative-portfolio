import React from 'react';
import { Mail, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="py-12 bg-slate-950 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                    <div>
                        <a href="#" className="text-2xl font-bold font-outfit tracking-tighter text-white">
                            CREATIVE<span className="text-indigo-500">.</span>
                        </a>
                        <p className="mt-4 text-slate-500 max-w-xs">
                            Designing and building digital experiences that matter.
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <a href="mailto:aishita38@gmail.com" className="w-12 h-12 glass rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/50 transition-all">
                            <Mail className="w-5 h-5" />
                        </a>
                        <a href="https://www.linkedin.com/in/ishita-agarwal-a06791322/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/50 transition-all">
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="w-12 h-12 glass rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/50 transition-all group"
                    >
                        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-sm text-slate-600">
                    <p>© {new Date().getFullYear()} Creative Portfolio. All rights reserved.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
