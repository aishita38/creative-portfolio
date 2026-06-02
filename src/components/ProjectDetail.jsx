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
        <div className="min-h-screen pt-32 pb-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <Link
                    to="/"
                    className="inline-flex items-center gap-3 text-dark/60 hover:text-pink mb-16 transition-all font-bold font-syne tracking-wider text-[10px] group cursor-pointer"
                >
                    <div className="p-3 bg-white border border-dark/[0.06] rounded-full shadow-sm group-hover:-translate-x-1 transition-transform">
                        <ArrowLeft className="w-4 h-4" />
                    </div>
                    <span>Back to Archives</span>
                </Link>

                <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-24 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white border border-dark/[0.06] rounded-[2rem] p-8 md:p-12 space-y-8 shadow-sm"
                    >
                        <div>
                            <h1 className="text-4xl sm:text-6xl font-bold mt-4 mb-6 font-outfit uppercase tracking-tight leading-none text-dark">
                                {project.title}
                            </h1>
                            <p className="text-lg text-dark/60 leading-relaxed font-sans font-medium">
                                {project.description}
                            </p>
                        </div>

                        {project.link && (
                            <div className="pt-4">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-premium inline-flex items-center gap-3"
                                >
                                    Explore Original <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        )}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative"
                    >
                        <div className="relative group">
                            <div className="absolute inset-0 bg-pink/5 rounded-[2rem] translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2 -z-10" />
                            <div className="overflow-hidden rounded-[2rem] border border-dark/10 bg-white p-4 shadow-lg transition-all duration-500">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-auto rounded-[1.5rem]"
                                />
                                <div className="mt-4 flex justify-between items-center border-t border-dark/5 pt-4 px-2">
                                    <span className="text-[10px] font-bold font-syne tracking-[0.15em] text-dark/40 uppercase">Featured Artwork</span>
                                    <div className="flex gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-pink" />
                                        <div className="w-2 h-2 rounded-full bg-dark/10" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {isCarousel && (
                    <div className="space-y-12">
                        <div className="flex items-center gap-8">
                            <div>
                                <span className="text-[10px] font-bold font-syne uppercase tracking-[0.3em] text-pink">Overview</span>
                                <h2 className="text-3xl md:text-5xl font-bold font-outfit uppercase tracking-tight text-dark mt-2">
                                    Project <span className="sketchy-text">Showcase</span>
                                </h2>
                            </div>
                            <div className="h-px flex-1 bg-dark/[0.08]" />
                        </div>

                        <div className="columns-1 md:columns-2 gap-8 space-y-8">
                            {project.gallery.map((img, idx) => {
                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="break-inside-avoid overflow-hidden rounded-[2rem] border border-dark/10 bg-white p-4 shadow-sm hover:shadow-md transition-all duration-500"
                                    >
                                        <img
                                            src={img}
                                            alt={`${project.title} ${idx + 1}`}
                                            className="w-full h-auto rounded-[1.5rem] hover:scale-[1.02] transition-transform duration-700 ease-out"
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
