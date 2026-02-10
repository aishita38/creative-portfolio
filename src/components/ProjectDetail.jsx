import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { projects } from '../constants/projects';

const ProjectDetail = () => {
    const { slug } = useParams();
    const project = projects.find(p => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) return <div>Project not found</div>;

    const isCarousel = project.gallery && project.gallery.length > 0;

    return (
        <div className="min-h-screen bg-slate-950 text-white pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-12 transition-colors group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    Back to Portfolio
                </Link>

                <div className="grid md:grid-cols-2 gap-16 mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                    >
                        <div>
                            <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${project.color} text-white`}>
                                {project.category}
                            </span>
                            <h1 className="text-5xl md:text-7xl font-bold mt-6 mb-8 font-outfit">
                                {project.title}
                            </h1>
                            <p className="text-xl text-slate-400 leading-relaxed max-w-xl">
                                {project.description}
                            </p>
                        </div>

                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-bold transition-all hover:scale-105"
                            >
                                View Project <ExternalLink className="w-5 h-5" />
                            </a>
                        )}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="glass p-4 rounded-3xl"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover rounded-2xl shadow-2xl"
                        />
                    </motion.div>
                </div>

                {isCarousel && (
                    <div className="space-y-12">
                        <div className="flex items-center gap-6">
                            <h2 className="text-3xl font-bold font-outfit">Project <span className="text-indigo-500">Gallery</span></h2>
                            <div className="h-[1px] flex-1 bg-white/10" />
                        </div>

                        <div className="columns-1 md:columns-2 gap-8 space-y-8">
                            {project.gallery.map((img, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="break-inside-avoid glass p-3 rounded-2xl relative overflow-hidden group/card"
                                    style={project.cardBg ? {
                                        backgroundImage: `url(${project.cardBg})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    } : {}}
                                >
                                    <div className={`absolute inset-0 bg-transparent transition-colors duration-500 ${project.cardBg ? 'block' : 'hidden'}`} />
                                    <img
                                        src={img}
                                        alt={`${project.title} ${idx + 1}`}
                                        className="w-full h-auto rounded-xl relative z-10 hover:scale-[1.02] transition-transform duration-500"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectDetail;
