import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Pin } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            company: "Google Developer Groups on Campus - LNMIIT",
            period: "2025 - May 2026",
            roles: [
                "Designed engaging social media creatives to promote technical events, workshops, and sessions",
                "Worked closely with organizers to align designs with GDG brand guidelines",
                "Contributed to the UI/UX design of the Plinth TechFest website, focusing on layout, visual hierarchy, and user flow"
            ]
        },
        {
            company: "Counselling & Guidance Cell, LNMIIT",
            period: "2024 - May 2026",
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
            period: "2024 - May 2026",
            roles: [
                "Designed social media posts, stories, and event banners for Instagram and promotional campaigns",
                "Collaborated with the core organizing team to maintain consistent branding across digital platforms"
            ]
        }
    ];

    return (
        <section id="experience" className="py-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col items-center mb-12">
                    <div className="relative inline-block text-center">
                        <h2 className="text-6xl md:text-8xl font-bold font-outfit text-dark uppercase tracking-normal mt-2">
                            Work <span className="sketchy-text block md:inline py-1">Experience</span>
                        </h2>
                    </div>
                </div>

                <div className="space-y-10 max-w-4xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8 md:p-10 bg-white border border-sky/20 rounded-[2rem] relative group transition-all duration-500 hover:border-sky/50 hover:shadow-[0_0_20px_rgba(143,242,159,0.15)]"
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                                <h3 className="text-xl md:text-2xl font-bold text-dark font-mono tracking-tight group-hover:text-pink transition-colors">
                                    {exp.company}
                                </h3>
                                <span className="px-4 py-1.5 bg-sky text-white text-[11px] font-bold font-mono uppercase tracking-[0.2em] rounded-full flex-shrink-0">
                                    {exp.period}
                                </span>
                            </div>

                            <ul className="space-y-4">
                                {exp.roles.map((role, rIndex) => (
                                    <li key={rIndex} className="flex gap-4 text-dark/85 leading-relaxed font-sans font-medium text-base md:text-lg">
                                        <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-pink flex-shrink-0" />
                                        <span className="text-dark/85 font-sans font-medium text-base md:text-lg leading-relaxed">{role}</span>
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
