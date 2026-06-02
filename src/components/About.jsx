import ishitaimg from '../assets/ishita.jpg';
import { motion } from 'framer-motion';
import { Heart, Stars } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative group">
                            <div className="absolute inset-0 bg-pink/5 rounded-[2rem] translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2 -z-10" />
                            <div className="overflow-hidden rounded-[2rem] border border-sky/25 bg-white p-4 shadow-lg transition-all duration-500">
                                <img
                                    src={ishitaimg}
                                    alt="Ishita Agarwal"
                                    className="w-full aspect-[4/5] object-cover rounded-[1.5rem] transition-transform duration-700 hover:scale-105"
                                />
                                <div className="mt-4 flex justify-between items-center border-t border-sky/15 pt-4 px-2">
                                    <span className="text-xs font-bold font-mono tracking-[0.15em] text-dark/85 uppercase">Ishita Agarwal</span>
                                    <div className="flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-pink" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-dark/20" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="space-y-10">
                        <div className="space-y-2">
                            <h2 className="text-6xl md:text-8xl font-bold font-outfit text-dark uppercase tracking-normal">
                                About <span className="sketchy-text block md:inline py-1">Me</span>
                            </h2>
                        </div>

                        <div className="space-y-6 text-dark/85">
                            <p className="text-xl leading-relaxed font-sans font-medium border-l-2 border-pink pl-6">
                                Creative and detail-oriented Graphic Designer with hands-on experience designing social media content, banners, and UI/UX for college-level tech and cultural organizations.
                            </p>
                            <p className="text-lg leading-relaxed font-sans font-medium">
                                Skilled in visual storytelling, branding, and collaborative design workflows. Passionate about creating clean, engaging designs that communicate ideas effectively.
                            </p>
                        </div>

                        <div className="pt-6">
                            <h3 className="text-sm font-bold text-sky/80 mb-6 uppercase tracking-[0.2em] flex items-center gap-4 font-mono">
                                My Toolkit
                                <div className="h-px flex-1 bg-sky/20" />
                            </h3>
                            <div className="flex flex-wrap gap-2.5">
                                {['Figma', 'Canva', 'UI/UX Design', 'Social Media Design', 'Visual Branding', 'Illustration'].map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 bg-white hover:bg-sky hover:text-white border border-sky/20 rounded-full text-dark text-sm font-bold font-mono tracking-wider transition-all duration-300 shadow-sm cursor-default"
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
