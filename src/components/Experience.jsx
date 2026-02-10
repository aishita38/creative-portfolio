import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

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
        <section id="experience" className="py-24 bg-slate-900/10">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 font-outfit text-center">
                    Work <span className="text-indigo-500">Experience</span>
                </h2>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass p-8 rounded-[32px] hover:border-indigo-500/30 transition-all group"
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-white font-outfit group-hover:text-indigo-400 transition-colors">
                                        {exp.company}
                                    </h3>
                                </div>
                                <span className="px-4 py-1.5 rounded-full glass-dark text-indigo-400 text-sm font-semibold border border-indigo-500/20">
                                    {exp.period}
                                </span>
                            </div>
                            <ul className="space-y-4">
                                {exp.roles.map((role, rIndex) => (
                                    <li key={rIndex} className="flex gap-4 text-slate-400 leading-relaxed">
                                        <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                                        {role}
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
