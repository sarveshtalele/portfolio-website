import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/Shared';
import { MOCK_CMS } from '../data';

export const KnowledgePage = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen pt-48 pb-24 px-6 relative z-10 max-w-5xl mx-auto">
            <SectionHeader title="Research & Publications" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                {MOCK_CMS.knowledge.map((item, i) => (
                    <motion.div key={item.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.8, ease: "easeOut" }} className="glass-card p-6 md:p-10 rounded-[24px] md:rounded-[32px] flex flex-col hover:-translate-y-2 hover:bg-white/50 transition-colors duration-700">
                        <div className="flex justify-between items-center mb-6 md:mb-8">
                            <span className="text-[10px] md:text-xs font-bold text-[#0A4D44] bg-[#0A4D44]/10 px-3 md:px-5 py-1.5 md:py-2 rounded-full uppercase tracking-widest shadow-sm">{item.type}</span>
                            <span className="text-xs md:text-sm font-bold text-[#2C7A70] bg-white/60 backdrop-blur-sm border border-white/80 px-3 md:px-4 py-1 md:py-1.5 rounded-full shadow-sm">{item.date}</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-[#0A4D44] mb-6 md:mb-8 leading-snug">{item.title}</h3>
                        <div className="mt-auto flex flex-col gap-6 pt-6 md:pt-8 border-t border-white/40">
                            <div className="flex gap-2 md:gap-3 flex-wrap">
                                {item.tags.map(tag => (
                                    <span key={tag} className="text-xs md:text-sm font-bold text-[#2C7A70] bg-white/60 backdrop-blur-sm border border-white/80 px-3 md:px-4 py-1 md:py-1.5 rounded-full shadow-sm hover:bg-white/90 transition-colors">#{tag}</span>
                                ))}
                            </div>

                            <div className="flex justify-end">
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-2.5 bg-[#0A4D44] text-white rounded-full font-bold text-xs md:text-sm transition-all shadow-md hover:scale-105 active:scale-95 border border-[#0A4D44]"
                                >
                                    Read Paper
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};
