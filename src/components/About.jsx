import ishitaimg from '../assets/ishita.jpg';
import { motion } from 'framer-motion';
import { Heart, Stars } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-paper relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="p-4 bg-white shadow-xl relative z-10">
                            <img
                                src={ishitaimg}
                                alt="Ishita Agarwal"
                                className="w-full aspect-[4/5] object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="mt-4 flex justify-between items-center border-t border-dark/5 pt-4">
                                <span className="font-sans font-bold text-xs uppercase tracking-widest text-dark/40 italic">Ishita Agarwal / 2025</span>
                                <div className="flex gap-1">
                                    <div className="w-2 h-2 rounded-full bg-pink" />
                                    <div className="w-2 h-2 rounded-full bg-peach" />
                                </div>
                            </div>
                        </div>
                        {/* Subtle accent border */}
                        <div className="absolute top-4 left-4 w-full h-full border border-dark/5 -z-10" />
                    </motion.div>

                    <div className="space-y-10">
                        <div className="relative inline-block">
                            <h2 className="text-5xl md:text-6xl font-black font-outfit text-dark uppercase tracking-tighter relative z-10 px-8 py-3 bg-pink/30 rotate-[-1deg]">
                                About <span className="sketchy-text text-dark underline decoration-pink decoration-4 underline-offset-8">Me</span>
                            </h2>
                            <Stars className="absolute -top-6 -right-8 w-12 h-12 text-pink rotate-12" />
                        </div>

                        <div className="space-y-6">
                            <p className="text-xl text-dark/60 leading-relaxed font-sans font-medium italic border-l-4 border-pink pl-6">
                                "Creative and detail-oriented Graphic Designer with hands-on experience designing social media content, banners, and UI/UX for college-level tech and cultural organizations."
                            </p>
                            <p className="text-xl text-dark/60 leading-relaxed font-sans font-medium">
                                "Skilled in visual storytelling, branding, and collaborative design workflows. Passionate about creating clean, engaging designs that communicate ideas effectively."
                            </p>
                        </div>

                        <div className="pt-8">
                            <h3 className="text-xs font-bold text-dark/40 mb-6 uppercase tracking-[0.3em] flex items-center gap-4">
                                <div className="h-px flex-1 bg-dark/10" />
                                My Toolkit
                                <div className="h-px flex-1 bg-dark/10" />
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {['Figma', 'Canva', 'UI/UX Design', 'Social Media Design', 'Visual Branding', 'Illustration'].map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-5 py-2 bg-dark/5 hover:bg-dark hover:text-white border border-dark/5 rounded-full text-dark text-[10px] font-bold uppercase tracking-widest transition-all cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
