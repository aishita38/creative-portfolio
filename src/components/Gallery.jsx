import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../constants/projects';
import ProjectCard from './ProjectCard';
import { Folder, FolderOpen, Stars, Archive } from 'lucide-react';

const Gallery = () => {
    const categories = [
        { id: 'GDG', label: 'GDG (Google Developer Groups)', color: 'bg-pink-400', light: 'bg-pink-50' },
        { id: 'Imagination', label: 'Imagination', color: 'bg-orange-300', light: 'bg-orange-50' },
        { id: 'Plinth', label: 'Plinth', color: 'bg-lime', light: 'bg-lime-50' },
        { id: 'CCell', label: 'CCell', color: 'bg-sky', light: 'bg-sky-50' }
    ];

    const [activeTab, setActiveTab] = useState(categories[0].id);

    const activeCategory = categories.find(c => c.id === activeTab);
    const filteredProjects = projects.filter(p => {
        if (activeTab === 'Imagination') return p.category === 'Imagination';
        return p.category === activeTab;
    });

    return (
        <section id="work" className="py-24 relative overflow-hidden bg-paper">
            {/* Main Background Grid */}
            <div className="absolute inset-0 opacity-[0.4] bg-grid pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-block relative px-12 py-8 bg-white scrapbook-card rotate-[-1deg] mb-8"
                    >
                        <motion.h2 className="text-6xl md:text-8xl font-black font-outfit uppercase tracking-tighter leading-none mb-2">
                            Designer <span className="sketchy-text text-pink block md:inline">Archives</span>
                        </motion.h2>
                        <div className="tape tape-pink -top-6 -left-6" />
                        <div className="tape tape-peach -bottom-6 -right-6 rotate-12" />
                    </motion.div>

                    <p className="text-2xl text-dark/70 hand-text font-bold italic max-w-lg mx-auto leading-relaxed mt-4">
                        "Curated collections of my design journey, categorized by chapters."
                    </p>
                </div>

                {/* Folder Navigation Tabs */}
                <div className="relative z-20 flex flex-wrap items-end justify-center md:justify-start gap-1 mb-[-4px] px-2 overflow-x-auto scrollbar-hide">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={`
                                folder-tab min-w-[140px] md:min-w-[180px] py-4
                                ${activeTab === cat.id
                                    ? `${cat.color} text-dark z-30 scale-105 shadow-[-8px_-8px_20px_rgba(0,0,0,0.1)]`
                                    : 'bg-white/80 text-dark/40 hover:bg-white transition-all scale-95 border-b-0 opacity-70'
                                }
                            `}
                        >
                            <span className="flex items-center justify-center gap-3 font-black text-xs md:text-sm tracking-widest">
                                {activeTab === cat.id ? <FolderOpen className="w-4 h-4" /> : <Folder className="w-4 h-4" />}
                                {cat.label}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Expanded Folder Content Area */}
                <motion.div
                    layout
                    className={`
                        min-h-[700px] w-full border-4 border-dark/10 shadow-[20px_20px_0px_rgba(0,0,0,0.05)] relative overflow-hidden
                        transition-all duration-500 rounded-b-3xl md:rounded-tr-3xl
                        ${activeCategory.id === 'GDG' ? 'bg-[#fff0f5]' :
                            activeCategory.id === 'Imagination' ? 'bg-[#fff8ee]' :
                                activeCategory.id === 'Plinth' ? '#f5fff5' :
                                    'bg-[#f0f8ff]'}
                    `}
                    style={{ backgroundColor: activeCategory.id === 'GDG' ? '#fff0f5' : activeCategory.id === 'Imagination' ? '#fff9f0' : activeCategory.id === 'Plinth' ? '#f8fff8' : '#f4fcff' }}
                >
                    {/* Interior Folder Grid Pattern */}
                    <div className="absolute inset-0 opacity-[0.2] bg-grid pointer-events-none" />

                    <div className="p-8 md:p-16 relative z-10">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b-4 border-dashed border-dark/10 pb-10 gap-6">
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <Archive className="w-8 h-8 text-dark/30" />
                                    <span className="marker-text text-xl text-dark/40 uppercase tracking-[0.3em]">SERIES #002</span>
                                </div>
                                <h3 className="text-4xl md:text-6xl font-black font-outfit uppercase tracking-tighter text-dark leading-none">
                                    {activeCategory.id === 'GDG' ? (
                                        <>GDG <span className="sketchy-text text-pink">Developer Groups</span></>
                                    ) : activeCategory.id === 'Plinth' ? (
                                        <>Plinth <span className="sketchy-text text-pink">Techfest</span></>
                                    ) : (
                                        <>{activeCategory.label.split(' ')[0]} <span className="sketchy-text text-pink">{activeCategory.label.split(' ')[1] || 'Chapter'}</span></>
                                    )}
                                </h3>
                                <p className="hand-text text-2xl font-bold italic text-dark/50">
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

                    {/* Fun Decorative Elements */}
                    <div className="absolute bottom-10 right-10 flex flex-col items-end opacity-20 transform rotate-[-5deg] pointer-events-none">
                        <span className="marker-text text-5xl text-dark leading-none">CONFIDENTIAL</span>
                        <span className="hand-text text-xl font-bold italic">Top Secret Designs Only</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Gallery;
