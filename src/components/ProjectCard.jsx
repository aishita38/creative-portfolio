import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Eye, Bookmark } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project, index }) => {
    // Alternate tilt for scrapbook feel
    const tilt = index % 2 === 0 ? 'rotate-2' : '-rotate-1';
    const tapeColor = index % 3 === 0 ? 'tape-pink' : index % 3 === 1 ? 'tape-green' : 'tape-pink';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 0 : 1 }}
            className={`group relative sketchbook-card p-4 bg-white transition-all duration-300 ${tilt}`}
        >
            {/* Paper Tape */}
            <div className={`tape ${tapeColor} -top-4 left-1/2 -ml-12`} />

            <div className="relative aspect-[4/3] w-full overflow-hidden border-2 border-dark/5 bg-paper">
                {project.cardBg ? (
                    <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${project.cardBg})` }}
                    />
                ) : (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                )}

                {/* Category Badge as a "Sticker" */}
                <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white bg-dark rotate-[-10deg] inline-block shadow-lg">
                        {project.category}
                    </span>
                </div>
            </div>

            <div className="pt-6 pb-2 px-2 relative">
                <Bookmark className="absolute -top-3 right-0 w-8 h-8 text-peach/40 rotate-12" />

                <h3 className="text-2xl font-black text-dark mb-2 font-outfit uppercase tracking-tighter leading-none group-hover:text-pink transition-colors">
                    {project.title}
                </h3>

                <p className="text-dark/60 text-sm mb-6 line-clamp-2 hand-text font-semibold italic">
                    "{project.description}"
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t-2 border-dashed border-dark/5">
                    <div className="flex items-center gap-3">
                        {project.gallery ? (
                            <Link
                                to={`/project/${project.slug}`}
                                className="flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:text-pink transition-colors group/btn"
                            >
                                <Eye className="w-4 h-4" />
                                <span className="underline decoration-2 underline-offset-4">Open Folder</span>
                            </Link>
                        ) : (
                            <a
                                href={project.link || project.image}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:text-pink transition-colors"
                            >
                                <ExternalLink className="w-4 h-4" />
                                <span className="underline decoration-2 underline-offset-4">View File</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
