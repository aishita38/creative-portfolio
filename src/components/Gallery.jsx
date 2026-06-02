import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../constants/projects';
import ProjectCard from './ProjectCard';
import { Folder, FolderOpen, Stars, Archive } from 'lucide-react';

const Gallery = () => {
    const categories = [
        { id: 'ALL', label: 'All Projects', color: 'bg-[#93C5FD]', light: 'bg-[#EFF6FF]' },
        { id: 'GDG', label: 'GDG (Google Developer Groups)', color: 'bg-[#6B7FD7]', light: 'bg-[#F0F2FC]' },
        { id: 'Imagination', label: 'Imagination', color: 'bg-[#D36135]', light: 'bg-[#FCF4F1]' },
        { id: 'Plinth', label: 'Plinth', color: 'bg-[#2E6B4F]', light: 'bg-[#F1F7F4]' },
        { id: 'CCell', label: 'CCell', color: 'bg-[#F2A359]', light: 'bg-[#FEF8F2]' },
        { id: 'Department', label: 'CSE Department', color: 'bg-[#3B82F6]', light: 'bg-[#EFF6FF]' }
    ];

    const [activeTab, setActiveTab] = useState('ALL');

    const activeCategory = categories.find(c => c.id === activeTab);
    const filteredProjects = activeTab === 'ALL'
        ? projects
        : projects.filter(p => {
            if (activeTab === 'Imagination') return p.category === 'Imagination';
            return p.category === activeTab;
        });

    return (
        <section id="work" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4"
                    >
                        <span className="text-xs font-bold font-mono tracking-[0.3em] text-pink">Designer Archives</span>
                        <motion.h2 className="text-6xl md:text-8xl font-bold font-outfit uppercase tracking-normal leading-tight mt-2 text-dark">
                            Selected <span className="sketchy-text block md:inline">Works</span>
                        </motion.h2>
                    </motion.div>

                    <p className="text-dark/80 font-mono text-xs font-bold uppercase tracking-[0.2em] max-w-xl mx-auto mt-2">
                        "Curated collections of my design journey, categorized by chapters."
                    </p>
                </div>

                {/* Categories Navigation */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-16 relative z-20">
                    {categories.map((cat) => {
                        const isActive = activeTab === cat.id;
                        return (
                            <button
                                key={cat.id}
                                onClick={() => setActiveTab(cat.id)}
                                className={`
                                    px-6 py-3 rounded-full text-xs font-bold font-mono uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer
                                    ${isActive
                                        ? 'bg-sky text-white border border-sky shadow-[0_0_15px_rgba(143,242,159,0.35)] scale-105'
                                        : 'bg-white text-dark/80 hover:text-sky hover:bg-white/90 border border-sky/15 shadow-sm'
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
                    className="min-h-[600px] w-full border border-sky/20 rounded-[2rem] relative overflow-hidden bg-white/70 backdrop-blur-md shadow-md transition-all duration-500"
                >
                    <div className="p-6 md:p-16 relative z-10">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-sky/15 pb-8 gap-6">
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <Archive className="w-4 h-4 text-sky/70" />
                                    <span className="text-xs font-bold font-mono tracking-[0.25em] text-sky/80">SERIES // 002</span>
                                </div>
                                <h3 className="text-4xl md:text-6xl font-bold font-outfit uppercase tracking-normal text-dark leading-none">
                                    {activeCategory.id === 'ALL' ? (
                                        <>All <span className="text-pink italic font-normal font-playfair lowercase">archives</span></>
                                    ) : activeCategory.id === 'GDG' ? (
                                        <>GDG <span className="text-pink italic font-normal font-playfair lowercase">on campus</span></>
                                    ) : activeCategory.id === 'Plinth' ? (
                                        <>Plinth <span className="text-pink italic font-normal font-playfair lowercase">Techfest</span></>
                                    ) : (
                                        <>{activeCategory.label.split(' ')[0]} <span className="text-pink italic font-normal font-playfair lowercase">{activeCategory.label.split(' ')[1] || 'Chapter'}</span></>
                                    )}
                                </h3>
                                <p className="font-mono text-sm font-semibold text-dark/75">
                                    Showing {filteredProjects.length} selected works in this category
                                </p>
                            </div>
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
                            >
                                {filteredProjects.map((project, idx) => (
                                    <ProjectCard key={project.id} project={project} index={idx} />
                                ))}
                            </motion.div>
                        </AnimatePresence>

                        {filteredProjects.length === 0 && (
                            <div className="h-96 flex flex-col items-center justify-center text-dark/20 space-y-4">
                                <Archive className="w-12 h-12 opacity-35" />
                                <p className="font-syne text-[10px] font-bold uppercase tracking-widest text-dark/40">No projects found in this archive</p>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Gallery;
