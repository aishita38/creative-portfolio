import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative h-[450px] w-full rounded-3xl overflow-hidden glass transition-all"
            style={project.cardBg ? {
                backgroundImage: `url(${project.cardBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            } : {}}
        >
            {!project.cardBg && (
                <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            )}

            <div className="absolute inset-0 z-20 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

            <div className="absolute inset-0 z-30 p-8 flex flex-col justify-end">
                <div className="mb-4">
                    <span className={`px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white rounded-full bg-gradient-to-r ${project.color}`}>
                        {project.category}
                    </span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2 font-outfit">
                    {project.title}
                </h3>
                <p className="text-slate-300 mb-6 line-clamp-2">
                    {project.description}
                </p>
                <div className="flex items-center gap-4">
                    {project.gallery ? (
                        <Link
                            to={`/project/${project.slug}`}
                            className="p-3 bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors flex items-center gap-2 group/btn"
                        >
                            <Eye className="w-5 h-5 text-white" />
                            <span className="text-white text-xs font-bold pr-2 overflow-hidden w-0 group-hover/btn:w-20 transition-all">View Gallery</span>
                        </Link>
                    ) : (
                        <a
                            href={project.link || project.image}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                            title={project.link ? "View Project" : "View Image"}
                        >
                            <ExternalLink className="w-5 h-5 text-white" />
                        </a>
                    )}
                </div>
            </div>

            <div className="absolute top-0 right-0 p-8 z-30 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full animate-ping" />
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
