import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Paperclip } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-32 pb-12 overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-1/4 right-[10%] w-96 h-96 rounded-full bg-pink/5 blur-3xl -z-10 animate-pulse-slow" />
            
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:gap-20 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative p-0"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-xs font-bold font-mono uppercase tracking-[0.25em] bg-pink/15 text-pink border border-pink/30 rounded-full">
                        <span className="w-1.5 h-1.5 bg-pink rounded-full animate-pulse" /> Available for freelance
                    </span>

                    <h1 className="text-6xl sm:text-8xl md:text-7xl lg:text-[7.5rem] font-bold leading-[0.95] mb-8 font-outfit uppercase tracking-normal text-dark">
                        Crafting <br />
                        <span className="sketchy-text text-pink block py-2">Digital</span>
                        <span className="block">Experiences</span>
                    </h1>

                    <p className="text-xl text-dark/85 max-w-lg mb-10 leading-relaxed font-sans font-medium">
                        Creative and detail-oriented Graphic Designer with hands-on experience designing social media content, banners, and UI/UX for college-level tech and cultural organizations.
                    </p>

                    <div className="flex flex-wrap gap-4 items-center">
                        <a href="#work" className="btn-premium">
                            View My Work
                        </a>
                        <a href="#contact" className="btn-secondary">
                            Get in Touch
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative"
                >
                    <div className="relative group">
                        <div className="absolute inset-0 bg-pink/5 rounded-[2rem] translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2 -z-10" />
                        <div className="overflow-hidden rounded-[2rem] border border-sky/25 bg-white p-4 shadow-lg transition-all duration-500">
                            <img
                                src="/hero-main.jpg"
                                alt="Ishita's Illustration"
                                className="w-full aspect-square object-cover rounded-[1.5rem]"
                            />
                            <div className="mt-4 flex justify-between items-center border-t border-sky/15 pt-4 px-2">
                                <span className="text-xs font-bold font-mono tracking-[0.2em] text-dark/85 uppercase">COLLECTION</span>
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-pink" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-dark/20" />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
