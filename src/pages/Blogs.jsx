import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/Shared';
import { MOCK_CMS } from '../data';
import { ArrowUpRight } from 'lucide-react';

export const BlogsPage = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen pt-48 pb-24 px-6 relative z-10 max-w-5xl mx-auto">
            <SectionHeader title="Popular Blogs" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                {MOCK_CMS.blogs.map((blog, i) => (
                    <motion.div
                        key={blog.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15, duration: 0.8, ease: "easeOut" }}
                        className="glass-card rounded-[24px] md:rounded-[32px] flex flex-col hover:-translate-y-2 hover:bg-white/50 transition-colors duration-700 overflow-hidden group"
                    >
                        {/* Blog Image */}
                        <div className="w-full h-48 md:h-56 overflow-hidden relative">
                            <img
                                src={blog.img}
                                alt={blog.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A4D44]/40 to-transparent"></div>
                        </div>

                        {/* Blog Content */}
                        <div className="p-6 md:p-8 flex flex-col flex-1">
                            <h3 className="text-xl md:text-2xl font-bold text-[#0A4D44] mb-3 leading-snug line-clamp-2">
                                {blog.title}
                            </h3>
                            <p className="text-sm md:text-base text-[#2C7A70] font-medium mb-6 line-clamp-2 leading-relaxed">
                                {blog.desc}
                            </p>

                            {/* Read Blog Button */}
                            <div className="mt-auto pt-4 border-t border-white/40 flex justify-end">
                                <a
                                    href={blog.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-5 py-2.5 bg-white/60 hover:bg-[#0A4D44] text-[#0A4D44] hover:text-white rounded-full font-bold text-sm transition-all shadow-sm border border-white/80 hover:border-[#0A4D44]"
                                >
                                    Read Article <ArrowUpRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};
