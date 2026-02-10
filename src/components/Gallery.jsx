import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../constants/projects';
import ProjectCard from './ProjectCard';

const Gallery = () => {
    const categories = ['GDG', 'Imagination', 'Plinth', 'CCell'];

    return (
        <section id="work" className="py-24 bg-slate-950">
            <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-2xl mb-20 text-center mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-outfit">
                        My Featured <span className="text-indigo-500">Works</span>
                    </h2>
                    <p className="text-xl text-slate-400">
                        Explore a collection of my projects across various organizations, showcasing my journey in design and creativity.
                    </p>
                </div>

                <div className="space-y-32">
                    {categories.map((cat) => {
                        const catProjects = projects.filter(p => p.category === cat);
                        if (catProjects.length === 0) return null;

                        return (
                            <div key={cat} className="space-y-10">
                                <div className="flex items-center gap-6">
                                    <h3 className="text-3xl font-bold font-outfit text-white whitespace-nowrap">
                                        {cat === 'Imagination' ? 'Imagination Club' : cat === 'CCell' ? 'Counselling & Guidance Cell' : cat}
                                    </h3>
                                    <div className="h-[1px] w-full bg-gradient-to-r from-indigo-500/50 to-transparent" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {catProjects.map((project) => (
                                        <ProjectCard key={project.id} project={project} />
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
