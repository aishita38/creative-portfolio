import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Eye, Bookmark } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative bg-white border border-sky/20 rounded-[1.5rem] p-4 transition-all duration-500 hover:border-sky/50 hover:shadow-[0_0_20px_rgba(143,242,159,0.15)]"
        >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1rem] bg-paper border border-sky/10">
                {project.cardBg ? (
                    <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                        style={{ backgroundImage: `url(${project.cardBg})` }}
                    />
                ) : (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                )}
                {/* Subtle glass overlay tag for category */}
                <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full border border-sky/20 text-[10px] font-bold font-mono tracking-[0.2em] text-dark">
                    {project.category}
                </div>
            </div>

            <div className="pt-5 pb-1 px-1 relative">
                <h3 className="text-xl font-bold text-dark mb-2 font-mono tracking-tight group-hover:text-pink transition-colors">
                    {project.title}
                </h3>

                <p className="text-dark/80 text-sm leading-relaxed mb-6 line-clamp-2 font-sans font-medium">
                    {project.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-sky/15">
                    <div className="flex items-center gap-3">
                        {project.gallery ? (
                            <Link
                                to={`/project/${project.slug}`}
                                className="inline-flex items-center gap-2 text-xs font-bold font-mono tracking-wider text-dark/85 hover:text-pink transition-colors cursor-pointer"
                            >
                                <Eye className="w-4 h-4" />
                                <span>Open Project</span>
                            </Link>
                        ) : (
                            <a
                                href={project.link || project.image}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-xs font-bold font-mono tracking-wider text-dark/85 hover:text-pink transition-colors cursor-pointer"
                            >
                                <ExternalLink className="w-4 h-4" />
                                <span>View Artwork</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
