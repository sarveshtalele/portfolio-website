import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, PenTool, Briefcase, Award, FileText, Sparkles, Code2, Github, Coffee } from 'lucide-react';
import { callGemini } from '../api';
import { MOCK_CMS } from '../data';
import { SectionHeader, AnimatedCounter } from '../components/Shared';

export const HomePage = ({ navigate }) => {
    const [companyName, setCompanyName] = useState('');
    const [pitch, setPitch] = useState('');
    const [generatingPitch, setGeneratingPitch] = useState(false);

    const generatePitch = async () => {
        if (!companyName.trim()) return;
        setGeneratingPitch(true);
        const prompt = `As Sarvesh Talele (AI Engineer), write a highly professional, 2-sentence pitch on why I would be an exceptional addition to the team at "${companyName}" with companyname in Bold letters. First, independently consider ${companyName}'s current company vision, their recent public AI investments, and AI strategy. Then, explicitly match my skills to their specific AI vision in the pitch. Keep the final output to just the 2 confident, tailored sentences.`;
        const result = await callGemini(prompt);
        setPitch(result.replace(/["*]/g, ''));
        setGeneratingPitch(false);
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen pt-48 pb-24 px-6 relative z-10 w-full max-w-6xl mx-auto flex flex-col gap-24">

            {/* --- HERO SECTION --- */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-12 w-full">

                {/* Left: Profile Picture */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
                    className="shrink-0 relative w-48 h-48 md:w-64 md:h-64 rounded-[40px] p-2 glass-card"
                >
                    <img
                        src="/profilepic.jpeg"
                        alt="Sarvesh Talele"
                        className="w-full h-full object-cover rounded-[32px] bg-[#E0ECE9]"
                        onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" }}
                    />
                </motion.div>

                {/* Right: Typography Setup */}
                <div className="flex flex-col justify-center text-center md:text-left flex-1 py-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 1, ease: "easeOut" }}
                        className="text-5xl md:text-7xl font-bold tracking-tight text-[#0A4D44] mb-3"
                    >
                        Sarvesh Talele
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
                        className="text-xl md:text-2xl text-[#2C7A70] font-semibold tracking-tight mb-4"
                    >
                        AI Engineer | Claude Certified Architect | I Design & Solve AI Puzzles | HarvardX AI Certified | Guinness World Record Participant in Python
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                        className="text-lg md:text-xl text-[#0A4D44] font-medium max-w-3xl leading-relaxed mb-8 opacity-80"
                    >
                        I burn tokens so you don't have to!!!
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
                        className="flex flex-wrap justify-center md:justify-start gap-4"
                    >
                        {/* Hiring? Primary CTA */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById('hiring-section')?.scrollIntoView({ behavior: 'smooth' })}
                            className="flex items-center gap-2 px-6 py-3 rounded-[20px] bg-[#0A4D44] text-white hover:bg-[#135B52] transition-all duration-300 shadow-md group border border-[#0A4D44]"
                        >
                            <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                            <span className="text-sm md:text-base font-bold">Hiring?</span>
                        </motion.button>

                        <a
                            href="https://github.com/sarveshtalele"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 rounded-[20px] bg-white/40 border border-white/60 text-[#0A4D44] hover:bg-white/80 hover:text-[#135B52] transition-all duration-300 shadow-sm backdrop-blur-md group"
                        >
                            <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            <span className="text-sm md:text-base font-bold">GitHub</span>
                        </a>

                        {[
                            { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/sarveshtalele' },
                            { icon: PenTool, label: 'Medium', url: 'https://medium.com/@sarveshtalele' }
                        ].map((link, i) => (
                            <a
                                key={i} href={link.url} target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-1.5 md:gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-[16px] md:rounded-[20px] bg-white/40 border border-white/60 text-[#0A4D44] hover:bg-white/80 hover:text-[#135B52] transition-all duration-500 shadow-sm backdrop-blur-md group"
                            >
                                <link.icon className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform duration-500 ease-out" />
                                <span className="text-xs md:text-sm font-bold">{link.label}</span>
                            </a>
                        ))}

                        <a
                            href="https://buymeacoffee.com/sarveshtalele" target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-1.5 md:gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-[16px] md:rounded-[20px] bg-[#FFDD00]/20 border border-[#FFDD00]/40 text-[#0A4D44] hover:bg-[#FFDD00]/40 hover:text-[#135B52] transition-all duration-500 shadow-sm backdrop-blur-md group"
                        >
                            <Coffee className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform duration-500 ease-out" />
                            <span className="text-xs md:text-sm font-bold">Buy Me a Coffee</span>
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* --- DASHBOARD: Consistent Formatted Squares --- */}
            <div className="w-full">
                <SectionHeader title="My Dashboard" />

                {/* Top Row: 4 Metric Squares */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
                    {[
                        { label: 'AI Projects', val: MOCK_CMS.stats.aiProjects, icon: Briefcase, color: 'text-[#0A4D44]', url: 'https://github.com/sarveshtalele' },
                        { label: 'Awards & Honors', val: MOCK_CMS.stats.awards, icon: Award, color: 'text-[#135B52]', url: 'https://www.linkedin.com/in/sarveshtalele' },
                        { label: 'Published Blogs', val: MOCK_CMS.stats.blogs, icon: PenTool, color: 'text-[#2C7A70]', url: 'https://medium.com/@sarveshtalele' },
                        { label: 'Research Papers', val: MOCK_CMS.stats.researchPapers, icon: FileText, color: 'text-[#4A8B82]', url: 'https://scholar.google.com/citations?user=-4Vyig8AAAAJ&hl=en&authuser=2' }
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.8, ease: "easeOut" }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => window.open(stat.url, '_blank')}
                            className="glass-card p-4 md:p-8 rounded-[24px] md:rounded-[32px] aspect-square flex flex-col items-center justify-center text-center group hover:bg-white/60 transition-all duration-700 relative cursor-pointer"
                        >
                            {/* BIG Number in Middle */}
                            <div className="text-4xl md:text-7xl font-black tracking-tight text-[#0A4D44] my-auto">
                                <AnimatedCounter target={stat.val} />+
                            </div>

                            {/* Icon Bottom Left, Text Beside Icon */}
                            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 md:gap-3 w-full mt-auto pt-2 md:pt-4 group-hover:-translate-y-1 transition-transform duration-500">
                                <div className={`w-8 h-8 md:w-12 md:h-12 rounded-[10px] md:rounded-[18px] bg-white/50 backdrop-blur-md border border-white/60 flex items-center justify-center ${stat.color} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-700 ease-out shadow-sm shrink-0`}>
                                    <stat.icon className="w-4 h-4 md:w-6 md:h-6" />
                                </div>
                                <div className="text-[10px] md:text-base text-[#2C7A70] font-bold tracking-wider uppercase text-center md:text-left leading-tight">
                                    {stat.label}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Row: Skills Word Cloud spanning full width for consistency */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}
                    className="glass-card p-8 md:p-10 rounded-[32px] min-h-[400px] flex flex-col w-full hover:bg-white/50 transition-colors duration-700 relative overflow-hidden"
                >
                    <div className="flex items-center gap-4 mb-4 md:mb-8 relative z-10">
                        <div className="w-12 h-12 rounded-[16px] bg-white/50 backdrop-blur-md border border-white/60 flex items-center justify-center shadow-sm shrink-0">
                            <Code2 className="w-6 h-6 text-[#0A4D44]" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#0A4D44]">Core Expertise & Stack</h3>
                    </div>

                    <div className="flex-1 w-full flex flex-wrap items-center justify-center gap-3 md:gap-4 relative z-10 py-4">
                        {MOCK_CMS.skillsWordCloud.map((skill, index) => {
                            // Calculate properties based on weight
                            const isHighValue = skill.value > 85;
                            const isMidValue = skill.value > 75 && skill.value <= 85;

                            let sizeClass = "text-lg md:text-2xl font-bold px-3 py-1";
                            let colorClass = "text-[#4A8B82]"; // Lightest teal

                            if (isHighValue) {
                                sizeClass = "text-3xl md:text-6xl font-black tracking-tight px-4 py-2";
                                colorClass = "text-[#0A4D44]"; // Darkest
                            } else if (isMidValue) {
                                sizeClass = "text-xl md:text-4xl font-extrabold tracking-tight px-3 py-1.5";
                                colorClass = "text-[#2C7A70]"; // Mid
                            }

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05, duration: 0.5, type: "spring" }}
                                    whileHover={{ scale: 1.1, rotate: Math.random() > 0.5 ? 2 : -2 }}
                                    className={`cursor-default transition-all flex items-center justify-center rounded-2xl ${sizeClass} ${colorClass}`}
                                    style={{
                                        // Slight random vertical offset for organic cloud feel
                                        transform: `translateY(${(index % 3) * 10 - 10}px)`
                                    }}
                                >
                                    {skill.text}
                                </motion.div>
                            )
                        })}
                    </div>
                </motion.div>
            </div>

            {/* --- AI PITCH GENERATOR --- */}
            <div id="hiring-section" className="w-full mt-6 scroll-mt-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}
                    className="glass-card p-10 md:p-14 rounded-[32px] flex flex-col lg:flex-row items-center gap-10 lg:gap-16 hover:bg-white/50 transition-colors duration-700"
                >
                    <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start">
                        <div className="w-16 h-16 rounded-[24px] bg-white/50 backdrop-blur-md border border-white/60 flex items-center justify-center mb-6">
                            <Sparkles className="w-8 h-8 text-[#0A4D44]" />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A4D44] mb-4">Hiring? Let AI write the pitch.</h3>
                        <p className="text-[#2C7A70] text-lg font-medium leading-relaxed max-w-xl">Enter your company name to see a dynamically generated insight on how my full-stack and AI expertise aligns with your mission.</p>
                    </div>

                    <div className="flex-1 w-full flex flex-col gap-4 md:gap-5">
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                            <input
                                type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)}
                                placeholder="e.g., Apple, OpenAI, Vercel"
                                className="flex-1 bg-white/60 backdrop-blur-md border border-white/80 rounded-[20px] md:rounded-[24px] px-6 md:px-8 py-4 md:py-5 text-base md:text-lg text-[#0A4D44] focus:outline-none focus:ring-4 focus:ring-[#0A4D44]/20 font-bold placeholder-[#84B0A5] shadow-sm transition-all"
                            />
                            <button
                                onClick={generatePitch} disabled={generatingPitch || !companyName.trim()}
                                className="px-8 md:px-10 py-4 md:py-5 rounded-[20px] md:rounded-[24px] bg-[#0A4D44] text-white text-base md:text-lg font-bold flex items-center justify-center gap-2 md:gap-3 hover:bg-[#135B52] transition-all disabled:opacity-50 hover:shadow-xl hover:-translate-y-1"
                            >
                                {generatingPitch ? <Sparkles className="w-5 h-5 md:w-6 md:h-6 animate-spin" /> : "Generate"}
                            </button>
                        </div>
                        <AnimatePresence>
                            {pitch && (
                                <motion.div initial={{ opacity: 0, y: -10, height: 0 }} animate={{ opacity: 1, y: 0, height: 'auto' }} className="w-full">
                                    <div className="p-8 mt-2 rounded-[24px] bg-white/80 backdrop-blur-xl border border-white border-t-white/40 text-[#0A4D44] text-lg leading-relaxed font-medium shadow-lg italic">
                                        "{pitch}"
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>

        </motion.div>
    );
};
