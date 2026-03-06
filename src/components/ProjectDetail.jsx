import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Paperclip, StickyNote } from 'lucide-react';
import { projects } from '../constants/projects';

const ProjectDetail = () => {
    const { slug } = useParams();
    const project = projects.find(p => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) return <div className="min-h-screen bg-paper text-dark flex items-center justify-center marker-text text-2xl">Project not found!</div>;

    const isCarousel = project.gallery && project.gallery.length > 0;

    return (
        <div className="min-h-screen bg-paper text-dark pt-32 pb-24 relative">
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <Link
                    to="/"
                    className="inline-flex items-center gap-3 text-dark/60 hover:text-pink mb-16 transition-all font-black uppercase tracking-widest text-xs group"
                >
                    <div className="p-2 bg-white scrapbook-card rotate-[-10deg] group-hover:rotate-0 transition-transform">
                        <ArrowLeft className="w-5 h-5" />
                    </div>
                    <span className="hand-text font-bold text-lg underline decoration-dashed underline-offset-4">Back to Archives</span>
                </Link>

                <div className="grid md:grid-cols-2 gap-16 mb-32 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="relative p-8 scrapbook-card bg-white rotate-[-1deg] space-y-8"
                    >
                        <div className="tape tape-pink -top-4 left-1/4" />
                        <Paperclip className="absolute -top-4 -right-2 w-10 h-10 text-dark/20 rotate-12" />

                        <div>
                            <h1 className="text-5xl md:text-7xl font-black mt-8 mb-6 font-outfit uppercase tracking-tighter leading-tight">
                                {project.title}
                            </h1>
                            <p className="text-xl text-dark/70 leading-relaxed font-medium hand-text italic">
                                "{project.description}"
                            </p>
                        </div>

                        {project.link && (
                            <div className="pt-4">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-4 px-10 py-5 bg-dark text-white font-black uppercase tracking-widest text-xs transition-all hover:bg-pink hover:text-dark hover:scale-105 shadow-[6px_6px_0px_rgba(255,122,175,0.4)]"
                                >
                                    Explore Original <ExternalLink className="w-5 h-5" />
                                </a>
                            </div>
                        )}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                        animate={{ opacity: 1, scale: 1, rotate: 2 }}
                        className="relative"
                    >
                        <div className="p-4 bg-white scrapbook-card shadow-2xl">
                            <div className="tape tape-pink -top-6 right-1/4" />
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-auto border-2 border-dark/5 shadow-inner"
                            />
                            <div className="mt-4 flex items-center gap-2 border-t-2 border-dashed border-dark/10 pt-4">
                                <StickyNote className="w-4 h-4 text-peach" />
                                <span className="hand-text text-sm font-bold text-dark/40 italic">Pinned on 2025 Edition</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {isCarousel && (
                    <div className="space-y-16">
                        <div className="flex items-center gap-8">
                            <div className="relative">
                                <h2 className="text-3xl md:text-5xl font-black font-outfit uppercase tracking-tighter text-dark bg-white scrapbook-card px-6 py-2 rotate-[-1deg]">
                                    Project <span className="sketchy-text text-pink">Showcase</span>
                                </h2>
                                <div className="absolute -bottom-1 -right-1 w-full h-full border-2 border-dark/5 rotate-1 pointer-events-none" />
                            </div>
                            <div className="h-2 flex-1 border-b-4 border-dashed border-dark/10" />
                        </div>

                        <div className="columns-1 md:columns-2 gap-12 space-y-12">
                            {project.gallery.map((img, idx) => {
                                const tilt = idx % 2 === 0 ? 'rotate-1' : 'rotate-[-1.5deg]';
                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className={`break-inside-avoid p-4 bg-white scrapbook-card relative overflow-hidden group/card ${tilt}`}
                                        style={project.cardBg ? {
                                            backgroundImage: `url(${project.cardBg})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'
                                        } : {}}
                                    >
                                        <div className={`tape tape-pink -top-2 left-1/3 w-20 h-6 opacity-60`} />
                                        <div className={`absolute inset-0 bg-transparent transition-colors duration-500 ${project.cardBg ? 'block' : 'hidden'}`} />
                                        <img
                                            src={img}
                                            alt={`${project.title} ${idx + 1}`}
                                            className="w-full h-auto border-2 border-dark/5 relative z-10 hover:scale-[1.02] transition-transform duration-500 shadow-sm"
                                        />
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectDetail;
