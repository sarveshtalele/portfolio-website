import React from 'react';
import { motion } from 'framer-motion';
import { Github, Briefcase } from 'lucide-react';
import { SectionHeader } from '../components/Shared';
import { MOCK_CMS } from '../data';

export const ProjectsPage = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen pt-48 pb-24 px-6 relative z-10 max-w-6xl mx-auto">
            <SectionHeader title="AI Systems & Architecture" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
                {MOCK_CMS.projects.map((project, i) => (
                    <motion.div key={project.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.8, ease: "easeOut" }} className="glass-card rounded-[24px] md:rounded-[32px] p-6 md:p-10 flex flex-col h-full group hover:-translate-y-2 hover:bg-white/50 transition-colors duration-700">
                        <div className="flex justify-between items-start mb-6 md:mb-8">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-[16px] md:rounded-[24px] bg-white/50 backdrop-blur-md border border-white/60 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-700 ease-out shadow-sm shrink-0">
                                <Briefcase className="w-6 h-6 md:w-8 md:h-8 text-[#0A4D44]" />
                            </div>
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 md:p-4 bg-white/40 rounded-full hover:bg-white/80 text-[#2C7A70] hover:text-[#0A4D44] transition-colors shadow-sm group/link backdrop-blur-sm border border-white/50 shrink-0 ml-4">
                                    <Github className="w-5 h-5 md:w-6 md:h-6 group-hover/link:scale-110 transition-transform duration-500" />
                                </a>
                            )}
                        </div>

                        <span className="inline-block bg-[#0A4D44]/10 px-3 md:px-4 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs font-bold text-[#0A4D44] uppercase tracking-widest mb-3 md:mb-4 w-fit shadow-sm">{project.type}</span>
                        <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-[#0A4D44]">{project.name}</h3>
                        <p className="text-[#2C7A70] mb-8 md:mb-10 text-base md:text-lg font-medium leading-relaxed flex-1">{project.desc}</p>

                        <div className="flex flex-wrap gap-2 md:gap-3 mt-auto pt-6 md:pt-8 border-t border-white/40">
                            {project.tech.map((t, j) => (
                                <span key={j} className="text-xs md:text-sm font-bold text-[#0A4D44] bg-white/60 backdrop-blur-sm border border-white/80 px-4 md:px-5 py-1.5 md:py-2 rounded-full cursor-default shadow-sm hover:bg-white/90 transition-colors">{t}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};
