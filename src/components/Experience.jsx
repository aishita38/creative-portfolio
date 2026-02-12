import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Pin } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            company: "Google Developer Groups on Campus - LNMIIT",
            period: "2025 - Present",
            roles: [
                "Designed engaging social media creatives to promote technical events, workshops, and sessions",
                "Worked closely with organizers to align designs with GDG brand guidelines",
                "Contributed to the UI/UX design of the Plinth TechFest website, focusing on layout, visual hierarchy, and user flow"
            ]
        },
        {
            company: "Counselling & Guidance Cell, LNMIIT",
            period: "2024 - Present",
            roles: [
                "Designed social media posts and stories to promote events, and student initiatives",
                "Collaborated with the core team to maintain consistent visual identity across platforms"
            ]
        },
        {
            company: "Imagination Photography Club, LNMIIT",
            period: "2024 - 2025",
            roles: [
                "Created posters and digital graphics for events, exhibitions, and social media",
                "Assisted in visual branding and creative direction for club activities"
            ]
        },
        {
            company: "Plinth - The TechFest of LNMIIT",
            period: "2024 - Present",
            roles: [
                "Designed social media posts, stories, and event banners for Instagram and promotional campaigns",
                "Collaborated with the core organizing team to maintain consistent branding across digital platforms"
            ]
        }
    ];

    return (
        <section id="experience" className="py-24 bg-paper relative overflow-hidden">
            {/* Background Scribble */}
            <div className="absolute top-10 left-[5%] opacity-5 marker-text text-8xl rotate-[-10deg] pointer-events-none select-none">
                TIMELINE
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col items-center mb-20">
                    <div className="relative inline-block px-12 py-4 bg-white scrapbook-card rotate-[1deg]">
                        <Pin className="absolute -top-4 left-1/2 -ml-3 w-8 h-8 text-peach rotate-[-20deg]" />
                        <h2 className="text-4xl md:text-5xl font-black font-outfit text-dark uppercase tracking-tighter text-center">
                            Work <span className="sketchy-text text-pink block text-4xl md:text-5xl mt-1">Experience</span>
                        </h2>
                    </div>
                </div>

                <div className="space-y-16 max-w-4xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={`p-8 bg-white scrapbook-card relative group transition-all duration-300 ${index % 2 === 0 ? 'rotate-[-0.5deg]' : 'rotate-[0.5deg]'}`}
                        >
                            <div className={`tape tape-pink -top-2 ${index % 2 === 0 ? 'left-10' : 'right-10'} w-24`} />

                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                                <h3 className="text-2xl font-black text-dark font-outfit uppercase tracking-tight leading-none group-hover:text-pink transition-colors">
                                    {exp.company}
                                </h3>
                                <span className="px-6 py-1 bg-pink/10 text-pink border-2 border-pink/10 text-xs font-black uppercase tracking-widest marker-text rotate-1">
                                    {exp.period}
                                </span>
                            </div>

                            <ul className="space-y-4">
                                {exp.roles.map((role, rIndex) => (
                                    <li key={rIndex} className="flex gap-4 text-dark/70 leading-relaxed hand-text font-bold italic">
                                        <div className="mt-2 w-2 h-2 rounded-full bg-peach flex-shrink-0" />
                                        <span>"{role}"</span>
                                    </li>
                                ))}
                            </ul>


                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
