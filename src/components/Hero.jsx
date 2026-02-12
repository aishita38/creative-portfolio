import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Paperclip } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, rotate: -2 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative p-8 scrapbook-card bg-white rotate-[-1deg]"
                >
                    <div className="tape tape-pink -top-4 left-1/4" />
                    <Paperclip className="absolute -top-4 -right-2 w-10 h-10 text-dark/20 rotate-12" />

                    <span className="inline-block px-4 py-1 mb-6 text-sm font-black uppercase tracking-widest bg-pink/20 text-pink border-2 border-pink/20 marker-text">
                        Available for freelance
                    </span>

                    <h1 className="text-6xl md:text-7xl font-black leading-none mb-8 font-outfit uppercase tracking-tighter">
                        Crafting <br />
                        <span className="sketchy-text text-pink block mt-2 text-7xl md:text-8xl">Digital</span>
                        Experiences
                    </h1>

                    <p className="text-xl text-dark/70 max-w-lg mb-10 leading-relaxed hand-text font-medium">
                        Creative and detail-oriented Graphic Designer with hands-on experience designing social media content, banners, and UI/UX for college-level tech and cultural organizations.
                    </p>

                    <div className="flex flex-wrap gap-6">
                        <a href="#work" className="px-8 py-4 bg-pink text-dark font-black uppercase tracking-widest text-xs transition-all hover:scale-105 hover:bg-dark hover:text-white shadow-[4px_4px_0px_rgba(0,0,0,0.1)] active:translate-x-1 active:translate-y-1 active:shadow-none">
                            View My Work
                        </a>
                        <a href="#contact" className="px-8 py-4 border-2 border-pink text-pink font-black uppercase tracking-widest text-xs transition-all hover:scale-105 hover:bg-pink hover:text-dark">
                            Get in Touch
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, rotate: 3 }}
                    animate={{ opacity: 1, rotate: 2 }}
                    transition={{ duration: 1 }}
                    className="relative"
                >
                    <div className="scrapbook-card p-4 bg-white rotate-[2deg] relative">
                        <div className="tape tape-pink -top-6 right-1/4" />
                        <img
                            src="/hero-main.jpg"
                            alt="Ishita's Illustration"
                            className="w-full aspect-square object-cover"
                        />
                        <div className="mt-4 flex justify-between items-center border-t-2 border-dashed border-dark/10 pt-4">
                            <span className="hand-text text-sm font-bold text-dark/40 italic">#DesignLife2025</span>
                            <div className="flex gap-1">
                                <div className="w-3 h-3 rounded-full bg-pink" />
                                <div className="w-3 h-3 rounded-full bg-peach" />
                                <div className="w-3 h-3 rounded-full bg-pink" />
                            </div>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
