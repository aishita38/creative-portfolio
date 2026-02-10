import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Blobs */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-700" />

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider uppercase bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/20">
                        Available for freelance
                    </span>
                    <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8">
                        Crafting <br />
                        <span className="text-gradient">Digital</span> <br />
                        Experiences
                    </h1>
                    <p className="text-xl text-slate-400 max-w-lg mb-10 leading-relaxed">
                        Creative and detail-oriented Graphic Designer with hands-on experience designing social media content, banners, and UI/UX for college-level tech and cultural organizations.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a href="#work" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
                            View My Work <ArrowDownRight className="w-5 h-5" />
                        </a>
                        <a href="#contact" className="px-8 py-4 glass text-white rounded-xl font-semibold transition-all hover:bg-white/10 hover:scale-105 active:scale-95">
                            Get in Touch
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative hidden md:block"
                >
                    <div className="relative z-10 w-full aspect-square glass rounded-3xl overflow-hidden shadow-2xl">
                        <img
                            src="/projects/project-1.png"
                            alt="Hero Work"
                            className="w-full h-full object-cover opacity-80"
                        />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-6 -right-6 w-24 h-24 glass rounded-2xl flex items-center justify-center animate-bounce duration-[3000ms]">
                        <div className="w-12 h-12 rounded-full border-2 border-dashed border-indigo-500 animate-slow-spin" />
                    </div>
                    <div className="absolute -bottom-10 -left-10 w-48 h-48 glass rounded-3xl p-6 shadow-xl backdrop-blur-2xl">
                        <div className="space-y-3">
                            <div className="h-2 w-full bg-indigo-500/20 rounded" />
                            <div className="h-2 w-2/3 bg-indigo-500/20 rounded" />
                            <div className="h-2 w-1/2 bg-indigo-500/20 rounded" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
