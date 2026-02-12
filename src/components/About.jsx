import ishitaimg from '../assets/ishita.jpg';
import { motion } from 'framer-motion';
import { Heart, Stars } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-paper relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, rotate: -5 }}
                        whileInView={{ opacity: 1, rotate: -3 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="p-4 bg-white scrapbook-card rotate-[-3deg] relative z-10">
                            <div className="tape tape-pink -top-4 -left-4" />
                            <img
                                src={ishitaimg}
                                alt="Ishita Agarwal"
                                className="w-full aspect-[4/5] object-cover grayscale-[10%] sepia-[5%]"
                            />
                            <div className="mt-4 flex justify-center border-t border-dashed border-dark/10 pt-4">
                                <span className="hand-text font-bold italic text-dark/40">Ishita Agarwal / 2025</span>
                            </div>
                        </div>
                        {/* Decorative layers */}
                        <div className="absolute top-0 left-0 w-full h-full bg-pink/20 scrapbook-card rotate-[2deg] -z-10" />

                    </motion.div>

                    <div className="space-y-10">
                        <div className="relative inline-block">
                            <h2 className="text-5xl md:text-6xl font-black font-outfit text-dark uppercase tracking-tighter relative z-10 px-8 py-3 bg-pink/30 rotate-[-1deg]">
                                About <span className="sketchy-text text-dark underline decoration-pink decoration-4 underline-offset-8">Me</span>
                            </h2>
                            <Stars className="absolute -top-6 -right-8 w-12 h-12 text-pink rotate-12" />
                        </div>

                        <div className="space-y-6">
                            <p className="text-xl text-dark/80 leading-relaxed hand-text font-bold italic">
                                "Creative and detail-oriented Graphic Designer with hands-on experience designing social media content, banners, and UI/UX for college-level tech and cultural organizations."
                            </p>
                            <p className="text-xl text-dark/80 leading-relaxed hand-text font-bold italic">
                                "Skilled in visual storytelling, branding, and collaborative design workflows. Passionate about creating clean, engaging designs that communicate ideas effectively."
                            </p>
                        </div>

                        <div className="pt-8">
                            <h3 className="marker-text text-2xl text-dark mb-6 uppercase tracking-widest bg-dark text-white px-6 py-1 inline-block rotate-1 shadow-lg">
                                My Toolkit
                            </h3>
                            <div className="flex flex-wrap gap-4 pt-2">
                                {['Figma', 'Canva', 'UI/UX Design', 'Social Media Design', 'Teamwork', 'Time Management', 'Effective Communication'].map((skill, idx) => (
                                    <span
                                        key={skill}
                                        className={`px-6 py-2 bg-white scrapbook-card text-dark text-xs font-black uppercase tracking-widest ${idx % 2 === 0 ? 'rotate-[-2deg]' : 'rotate-[2deg]'} hover:scale-110 transition-transform cursor-default`}
                                    >
                                        #{skill}
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
