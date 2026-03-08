import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/Shared';
import { MOCK_CMS } from '../data';

export const JourneyPage = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen pt-48 pb-24 px-6 relative z-10 max-w-4xl mx-auto">
        <SectionHeader title="Professional Journey" />
        <div className="relative mt-12 md:mt-16">
            {/* Timeline Line (Adjusted for mobile) */}
            <div className="absolute left-[20px] md:left-[39px] top-6 bottom-6 w-[3px] bg-gradient-to-b from-[#0A4D44]/40 via-[#2C7A70]/20 to-transparent rounded-full" />

            {MOCK_CMS.journey.map((node, i) => (
                <motion.div key={node.id} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.15 }} className="relative pl-14 md:pl-28 pb-12 md:pb-16 last:pb-0">
                    {/* Timeline Node */}
                    <div className="absolute left-[11px] md:left-[30px] top-8 w-5 h-5 rounded-full bg-[#0A4D44] ring-8 ring-[#0A4D44]/10 z-10 shadow-sm" />

                    {/* Content Card */}
                    <div className="glass-card p-6 md:p-12 rounded-[24px] md:rounded-[32px] hover:bg-white/50 transition-colors duration-700">
                        <span className="inline-block px-4 py-1.5 bg-[#0A4D44]/10 text-[#0A4D44] font-bold text-xs md:text-sm mb-4 tracking-widest uppercase rounded-full shadow-sm">
                            {node.year}
                        </span>
                        <h3 className="text-2xl md:text-4xl font-bold text-[#0A4D44] mb-3 md:mb-5">{node.title}</h3>
                        <p className="text-[#2C7A70] mb-6 md:mb-8 leading-relaxed text-base md:text-lg font-medium">{node.description}</p>

                        {/* Tech Tags */}
                        <div className="flex flex-wrap gap-2 md:gap-3">
                            {node.tech.map((t, j) => (
                                <span key={j} className="bg-white/60 backdrop-blur-sm border border-white/80 text-[#0A4D44] px-4 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold shadow-sm hover:bg-white/90 transition-colors cursor-default">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    </motion.div>
);
