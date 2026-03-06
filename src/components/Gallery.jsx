import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../constants/projects';
import ProjectCard from './ProjectCard';
import { Folder, FolderOpen, Stars, Archive } from 'lucide-react';

const Gallery = () => {
    const categories = [
        { id: 'GDG', label: 'GDG (Google Developer Groups)', color: 'bg-[#6B7FD7]', light: 'bg-[#F0F2FC]' },
        { id: 'Imagination', label: 'Imagination', color: 'bg-[#D36135]', light: 'bg-[#FCF4F1]' },
        { id: 'Plinth', label: 'Plinth', color: 'bg-[#2E6B4F]', light: 'bg-[#F1F7F4]' },
        { id: 'CCell', label: 'CCell', color: 'bg-[#F2A359]', light: 'bg-[#FEF8F2]' }
    ];

    const [activeTab, setActiveTab] = useState(categories[0].id);

    const activeCategory = categories.find(c => c.id === activeTab);
    const filteredProjects = projects.filter(p => {
        if (activeTab === 'Imagination') return p.category === 'Imagination';
        return p.category === activeTab;
    });

    return (
        <section id="work" className="py-24 relative bg-paper">
            {/* Main Background Grid */}
            <div className="absolute inset-0 opacity-[0.4] bg-grid pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-block relative px-12 py-8 bg-white scrapbook-card rotate-[-1deg] mb-8"
                    >
                        <motion.h2 className="text-6xl md:text-8xl font-black font-outfit uppercase tracking-tighter leading-tight mb-2">
                            Designer <span className="sketchy-text text-pink block md:inline py-2">Archives</span>
                        </motion.h2>
                        <div className="tape tape-pink -top-6 -left-6" />
                        <div className="tape tape-peach -bottom-6 -right-6 rotate-12" />
                    </motion.div>

                    <p className="text-xl text-dark/70 font-sans font-medium max-w-lg mx-auto leading-relaxed mt-4 uppercase tracking-[0.2em] text-xs">
                        "Curated collections of my design journey, categorized by chapters."
                    </p>
                </div>

                {/* Categories Navigation */}
                <div className="flex flex-wrap items-center justify-center gap-4 mb-16 relative z-20">
                    {categories.map((cat) => {
                        const isActive = activeTab === cat.id;
                        return (
                            <button
                                key={cat.id}
                                onClick={() => setActiveTab(cat.id)}
                                className={`
                                    px-10 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500
                                    ${isActive
                                        ? `bg-dark text-white shadow-xl scale-110`
                                        : 'bg-white text-dark/70 hover:text-dark hover:bg-dark/5 border border-dark/10'
                                    }
                                `}
                            >
                                {cat.label.split(' (')[0]}
                            </button>
                        );
                    })}
                </div>

                {/* Expanded Folder Content Area */}
                <motion.div
                    layout
                    className={`
                        min-h-[700px] w-full border border-dark/5 shadow-[20px_20px_0px_rgba(0,0,0,0.02)] relative overflow-hidden
                        transition-all duration-500 rounded-b-3xl md:rounded-tr-3xl
                    `}
                    style={{ backgroundColor: activeCategory.light }}
                >
                    {/* Interior Folder Grid Pattern */}
                    <div className="absolute inset-0 opacity-[0.2] bg-grid pointer-events-none" />

                    <div className="p-5 md:p-16 relative z-10">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 border-b-4 border-dashed border-dark/10 pb-6 md:pb-10 gap-6">
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <Archive className="w-8 h-8 text-dark/50" />
                                    <span className="marker-text text-xl text-dark/60 uppercase tracking-[0.3em]">SERIES #002</span>
                                </div>
                                <h3 className="text-3xl md:text-6xl font-black font-outfit uppercase tracking-tighter text-dark leading-none">
                                    {activeCategory.id === 'GDG' ? (
                                        <>GDG <span className="sketchy-text text-pink">Developer Groups</span></>
                                    ) : activeCategory.id === 'Plinth' ? (
                                        <>Plinth <span className="sketchy-text text-pink">Techfest</span></>
                                    ) : (
                                        <>{activeCategory.label.split(' ')[0]} <span className="sketchy-text text-pink">{activeCategory.label.split(' ')[1] || 'Chapter'}</span></>
                                    )}
                                </h3>
                                <p className="font-sans text-sm font-bold uppercase tracking-[0.1em] text-dark/60">
                                    "{filteredProjects.length} records retrieved from the database"
                                </p>
                            </div>
                            <div className="flex items-center gap-4 rotate-3">
                                <Stars className="w-12 h-12 text-peach animate-pulse" />
                            </div>
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14"
                            >
                                {filteredProjects.map((project, idx) => (
                                    <ProjectCard key={project.id} project={project} index={idx} />
                                ))}
                            </motion.div>
                        </AnimatePresence>

                        {filteredProjects.length === 0 && (
                            <div className="h-96 flex flex-col items-center justify-center text-dark/20 space-y-6">
                                <div className="relative">
                                    <Folder className="w-24 h-24 opacity-10" />
                                    <Archive className="absolute bottom-0 right-0 w-10 h-10 opacity-20" />
                                </div>
                                <p className="marker-text text-3xl uppercase tracking-[0.2em]">Access Denied: Empty Folder</p>
                            </div>
                        )}
                    </div>


                </motion.div>
            </div>
        </section>
    );
};

export default Gallery;
