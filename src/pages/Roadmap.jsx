import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink, Sparkles, RotateCcw, ArrowRight, ArrowLeft } from 'lucide-react';
import { PATHS, getPath } from '../roadmapData';
import { SectionHeader } from '../components/Shared';

const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -20 } };

// Progress bar dots
const ProgressBar = ({ step }) => (
    <div className="flex gap-2 mb-10">
        {[0, 1, 2].map(i => (
            <div key={i} className={`h-1 flex-1 rounded-full transition-all duration-500 ${i < step ? 'bg-[#0A4D44]' : i === step ? 'bg-[#0A4D44]/40' : 'bg-[#0A4D44]/10'}`} />
        ))}
    </div>
);

// Option button for quiz
const OptionBtn = ({ icon, label, desc, selected, onClick }) => (
    <motion.button
        whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}
        onClick={onClick}
        className={`flex items-center gap-4 p-4 md:p-5 w-full text-left rounded-[16px] md:rounded-[20px] transition-all duration-300 border ${selected
            ? 'bg-[#0A4D44]/10 border-[#0A4D44] shadow-md'
            : 'glass-card border-white/60 hover:border-[#0A4D44]/30 hover:bg-white/70'
            }`}
    >
        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-[12px] md:rounded-[14px] flex items-center justify-center text-xl md:text-2xl shrink-0 ${selected ? 'bg-[#0A4D44]/15' : 'bg-white/60'}`}>
            {icon}
        </div>
        <div className="flex-1 min-w-0">
            <div className={`font-bold text-sm md:text-base ${selected ? 'text-[#0A4D44]' : 'text-[#0A4D44]/80'}`}>{label}</div>
            <div className="text-xs md:text-sm text-[#2C7A70]/70 mt-0.5">{desc}</div>
        </div>
    </motion.button>
);

// Resource type badge
const ResTypeBadge = ({ type }) => {
    const colors = {
        free: 'bg-[#29b899]/12 text-[#29b899]',
        tool: 'bg-[#4b90d8]/12 text-[#4b90d8]',
        course: 'bg-[#0A4D44]/12 text-[#0A4D44]',
        book: 'bg-[#e05540]/10 text-[#e05540]'
    };
    return <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${colors[type] || colors.free}`}>{type}</span>;
};

// Phase tag
const PhaseTag = ({ tag, tc }) => {
    const colors = { tf: 'bg-[#4b90d8]/12 text-[#4b90d8]', tb: 'bg-[#29b899]/12 text-[#29b899]', tm: 'bg-[#0A4D44]/12 text-[#0A4D44]', td: 'bg-[#e05540]/10 text-[#e05540]' };
    return <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${colors[tc] || colors.tf}`}>{tag}</span>;
};

// Week card (expandable)
const WeekCard = ({ week, index }) => {
    const [open, setOpen] = useState(false);
    return (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.04 }}
            className={`glass-card rounded-[16px] md:rounded-[20px] overflow-hidden transition-all duration-300 ${open ? 'shadow-lg' : ''}`}
        >
            <button onClick={() => setOpen(!open)} className="flex items-center gap-3 md:gap-4 p-4 md:p-5 w-full text-left hover:bg-white/40 transition-colors">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-[10px] bg-[#0A4D44]/8 border border-[#0A4D44]/15 flex items-center justify-center text-xs font-bold text-[#0A4D44] shrink-0">{week.num}</div>
                <div className="flex-1 font-bold text-sm md:text-base text-[#0A4D44] min-w-0 truncate">{week.title}</div>
                <PhaseTag tag={week.tag} tc={week.tc} />
                <ChevronDown className={`w-4 h-4 text-[#2C7A70]/50 transition-transform duration-200 shrink-0 ${open ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
                {open && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                    >
                        <div className="px-4 md:px-5 pb-5 border-t border-[#0A4D44]/8">
                            <p className="text-sm text-[#2C7A70]/80 leading-relaxed mt-4 mb-5">{week.what}</p>
                            {/* Resources */}
                            <div className="space-y-2 mb-4">
                                {week.res.map((r, i) => (
                                    <a key={i} href={r.u} target="_blank" rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-3 rounded-[12px] bg-white/50 border border-white/70 hover:bg-white/80 hover:border-[#0A4D44]/20 transition-all group"
                                    >
                                        <ResTypeBadge type={r.t} />
                                        <div className="flex-1 min-w-0">
                                            <div className="font-bold text-xs md:text-sm text-[#0A4D44] truncate">{r.n}</div>
                                            <div className="text-[11px] text-[#2C7A70]/60 truncate">{r.d}</div>
                                        </div>
                                        <ExternalLink className="w-3.5 h-3.5 text-[#2C7A70]/40 group-hover:text-[#0A4D44] transition-colors shrink-0" />
                                    </a>
                                ))}
                            </div>
                            {/* Tool pills */}
                            <div className="flex flex-wrap gap-2 mb-3">
                                {week.tools.map((t, i) => (
                                    <span key={i} className="text-[11px] font-semibold px-3 py-1 rounded-full bg-[#0A4D44]/6 border border-[#0A4D44]/10 text-[#2C7A70]">{t}</span>
                                ))}
                            </div>
                            {/* Daily practice */}
                            <div className="p-3 rounded-[12px] bg-[#0A4D44]/6 border border-[#0A4D44]/12 text-sm text-[#2C7A70]/80">
                                <strong className="text-[#0A4D44]">Daily Practice:</strong> {week.daily}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

// Tool card for tools tab
const ToolCard = ({ tool }) => (
    <a href={tool.u} target="_blank" rel="noopener noreferrer"
        className="glass-card rounded-[16px] p-4 md:p-5 block hover:bg-white/70 hover:border-[#0A4D44]/20 hover:-translate-y-1 transition-all duration-300"
    >
        <div className="text-2xl mb-2">{tool.ico}</div>
        <div className="font-bold text-sm text-[#0A4D44] mb-1">{tool.n}</div>
        <div className="text-xs text-[#2C7A70]/70 leading-relaxed mb-2">{tool.d}</div>
        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#0A4D44]/8 border border-[#0A4D44]/12 text-[#2C7A70]">{tool.b}</span>
    </a>
);

// ─── MAIN COMPONENT ──────────────────────────────────────────
export const RoadmapPage = () => {
    const [screen, setScreen] = useState('intro'); // intro, q0, q1, q2, result
    const [answers, setAnswers] = useState({ age: null, role: null, goal: null });
    const [activeTab, setActiveTab] = useState('roadmap');
    const [result, setResult] = useState(null);

    const goScreen = (s) => { setScreen(s); window.scrollTo(0, 0); };

    const pick = (key, val) => {
        setAnswers(prev => ({ ...prev, [key]: val }));
    };

    const generate = () => {
        const key = getPath(answers);
        setResult(PATHS[key]);
        setActiveTab('roadmap');
        goScreen('result');
    };

    const restart = () => {
        setAnswers({ age: null, role: null, goal: null });
        setResult(null);
        goScreen('intro');
    };

    const progressStep = screen === 'q0' ? 0 : screen === 'q1' ? 1 : screen === 'q2' ? 2 : -1;

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="min-h-screen pt-32 md:pt-48 pb-24 px-4 md:px-6 relative z-10 w-full max-w-3xl mx-auto"
        >
            {/* Logo header */}
            <div className="flex items-center gap-2 mb-8">
                <div className="w-2.5 h-2.5 bg-[#0A4D44] rounded-full" />
                <span className="text-xs uppercase tracking-[0.14em] font-bold text-[#2C7A70]">AI Learning Roadmap</span>
            </div>

            {progressStep >= 0 && <ProgressBar step={progressStep} />}

            <AnimatePresence mode="wait">
                {/* ─── INTRO ─── */}
                {screen === 'intro' && (
                    <motion.div key="intro" {...fadeIn} transition={{ duration: 0.5 }}>
                        <div className="text-xs uppercase tracking-[0.16em] font-bold text-[#0A4D44] mb-4">Universal · Personalized · Practical</div>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#0A4D44] mb-5 leading-[1.1]">
                            Your <em className="italic text-[#2C7A70]">AI journey</em>,<br />built for you.
                        </h1>
                        <p className="text-base md:text-lg text-[#2C7A70]/80 max-w-lg mb-8 leading-relaxed font-medium">
                            A dynamic 12-week roadmap that adapts to your age, goals, and daily life — from 5 to 75, beginner to expert.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-10">
                            {['🧒 Ages 5–75', '🛤 4 Learning Paths', '📦 Real Resources', '⏱ 12-Week Plan', '🔧 Actual Tools'].map((p, i) => (
                                <span key={i} className="text-xs font-semibold px-3.5 py-1.5 rounded-full glass-card text-[#2C7A70]">{p}</span>
                            ))}
                        </div>
                        <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                            onClick={() => goScreen('q0')}
                            className="flex items-center gap-2 px-8 py-4 rounded-[20px] bg-[#0A4D44] text-white font-bold text-base hover:bg-[#135B52] transition-all shadow-lg hover:shadow-xl"
                        >
                            Build My Roadmap <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </motion.div>
                )}

                {/* ─── Q1: AGE ─── */}
                {screen === 'q0' && (
                    <motion.div key="q0" {...fadeIn} transition={{ duration: 0.4 }}>
                        <div className="text-xs uppercase tracking-wider font-bold text-[#2C7A70]/50 mb-3">Question 1 of 3</div>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#0A4D44] mb-2">How old are you?</h2>
                        <p className="text-sm text-[#2C7A70]/70 mb-7">This shapes how we teach — the concepts stay sharp, the style adapts.</p>
                        <div className="space-y-3">
                            {[
                                { v: 'child', ico: '🧸', lbl: '5 – 12 years', dsc: 'Young learner — playful, visual, story-based' },
                                { v: 'teen', ico: '🎮', lbl: '13 – 18 years', dsc: 'Teen builder — projects, portfolios, creativity' },
                                { v: 'young', ico: '🚀', lbl: '19 – 35 years', dsc: 'Early career — fast-track, ambitious, technical' },
                                { v: 'mid', ico: '💼', lbl: '36 – 60 years', dsc: 'Mid-career — practical, ROI-focused, efficient' },
                                { v: 'senior', ico: '🌿', lbl: '61 – 75+ years', dsc: 'Life-stage — accessible, rewarding, legacy-focused' }
                            ].map(o => (
                                <OptionBtn key={o.v} icon={o.ico} label={o.lbl} desc={o.dsc} selected={answers.age === o.v} onClick={() => pick('age', o.v)} />
                            ))}
                        </div>
                        <div className="flex gap-3 mt-8">
                            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                                disabled={!answers.age} onClick={() => goScreen('q1')}
                                className="flex items-center gap-2 px-8 py-3.5 rounded-[18px] bg-[#0A4D44] text-white font-bold text-sm hover:bg-[#135B52] transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-md"
                            >
                                Continue <ArrowRight className="w-4 h-4" />
                            </motion.button>
                        </div>
                    </motion.div>
                )}

                {/* ─── Q2: ROLE ─── */}
                {screen === 'q1' && (
                    <motion.div key="q1" {...fadeIn} transition={{ duration: 0.4 }}>
                        <div className="text-xs uppercase tracking-wider font-bold text-[#2C7A70]/50 mb-3">Question 2 of 3</div>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#0A4D44] mb-2">What describes you best?</h2>
                        <p className="text-sm text-[#2C7A70]/70 mb-7">Your daily context determines which AI skills give you the most leverage.</p>
                        <div className="space-y-3">
                            {[
                                { v: 'student', ico: '📚', lbl: 'Student / Learner', dsc: 'School, college, or self-study mode' },
                                { v: 'creative', ico: '🎨', lbl: 'Creative / Designer / Marketer', dsc: 'Content, visuals, campaigns, storytelling' },
                                { v: 'professional', ico: '🏢', lbl: 'Business / Manager / Professional', dsc: 'Operations, leadership, client-facing work' },
                                { v: 'developer', ico: '💻', lbl: 'Software Developer / Engineer', dsc: 'Code daily — Python, JS, APIs, systems' },
                                { v: 'entrepreneur', ico: '⚡', lbl: 'Entrepreneur / Founder / Freelancer', dsc: 'Building products or services independently' },
                                { v: 'healthcare', ico: '🏥', lbl: 'Healthcare / Teacher / Social Worker', dsc: 'Service professions — people, not screens' },
                                { v: 'retiree', ico: '🌻', lbl: 'Retired / Hobbyist', dsc: 'Curiosity-driven, leisure and life enrichment' }
                            ].map(o => (
                                <OptionBtn key={o.v} icon={o.ico} label={o.lbl} desc={o.dsc} selected={answers.role === o.v} onClick={() => pick('role', o.v)} />
                            ))}
                        </div>
                        <div className="flex gap-3 mt-8">
                            <button onClick={() => goScreen('q0')} className="flex items-center gap-2 px-6 py-3.5 rounded-[18px] bg-transparent border border-[#0A4D44]/20 text-[#2C7A70] font-bold text-sm hover:border-[#0A4D44]/40 transition-all">
                                <ArrowLeft className="w-4 h-4" /> Back
                            </button>
                            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                                disabled={!answers.role} onClick={() => goScreen('q2')}
                                className="flex items-center gap-2 px-8 py-3.5 rounded-[18px] bg-[#0A4D44] text-white font-bold text-sm hover:bg-[#135B52] transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-md"
                            >
                                Continue <ArrowRight className="w-4 h-4" />
                            </motion.button>
                        </div>
                    </motion.div>
                )}

                {/* ─── Q3: GOAL ─── */}
                {screen === 'q2' && (
                    <motion.div key="q2" {...fadeIn} transition={{ duration: 0.4 }}>
                        <div className="text-xs uppercase tracking-wider font-bold text-[#2C7A70]/50 mb-3">Question 3 of 3</div>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#0A4D44] mb-2">What is your primary goal?</h2>
                        <p className="text-sm text-[#2C7A70]/70 mb-7">This determines your roadmap milestone structure.</p>
                        <div className="space-y-3">
                            {[
                                { v: 'automate', ico: '⚙️', lbl: 'Save time and automate tasks', dsc: 'Stop doing repetitive work — let AI handle it' },
                                { v: 'career', ico: '📈', lbl: 'Advance my career', dsc: 'Add AI skills to get promoted, hired, or paid more' },
                                { v: 'build', ico: '🛠', lbl: 'Build apps or products', dsc: 'Ship something real — an app, a tool, an MVP' },
                                { v: 'understand', ico: '🔬', lbl: 'Understand AI deeply', dsc: 'Go beyond the surface — math, models, research' },
                                { v: 'explore', ico: '🌍', lbl: 'Explore and stay current', dsc: 'Keep up, experiment, satisfy curiosity' }
                            ].map(o => (
                                <OptionBtn key={o.v} icon={o.ico} label={o.lbl} desc={o.dsc} selected={answers.goal === o.v} onClick={() => pick('goal', o.v)} />
                            ))}
                        </div>
                        <div className="flex gap-3 mt-8">
                            <button onClick={() => goScreen('q1')} className="flex items-center gap-2 px-6 py-3.5 rounded-[18px] bg-transparent border border-[#0A4D44]/20 text-[#2C7A70] font-bold text-sm hover:border-[#0A4D44]/40 transition-all">
                                <ArrowLeft className="w-4 h-4" /> Back
                            </button>
                            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                                disabled={!answers.goal} onClick={generate}
                                className="flex items-center gap-2 px-8 py-3.5 rounded-[18px] bg-[#0A4D44] text-white font-bold text-sm hover:bg-[#135B52] transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-md"
                            >
                                Generate My Roadmap <Sparkles className="w-4 h-4" />
                            </motion.button>
                        </div>
                    </motion.div>
                )}

                {/* ─── RESULTS ─── */}
                {screen === 'result' && result && (
                    <motion.div key="result" {...fadeIn} transition={{ duration: 0.5 }}>
                        {/* Header */}
                        <div className="glass-card rounded-[20px] md:rounded-[28px] p-6 md:p-8 mb-6">
                            <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#0A4D44]/10 border border-[#0A4D44]/20 text-[#0A4D44] mb-4">{result.badge}</span>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0A4D44] mb-1">{result.name} <span className="font-light text-[#2C7A70]">— {result.sub}</span></h2>
                            <p className="text-sm text-[#2C7A70]/70 leading-relaxed max-w-lg mb-5">{result.desc}</p>
                            <div className="flex gap-6 flex-wrap">
                                {[{ v: '12', k: 'Weeks' }, { v: result.hours, k: 'Per Week' }, { v: result.outcome, k: 'Goal' }].map((s, i) => (
                                    <div key={i}><div className="text-xl font-extrabold text-[#0A4D44]">{s.v}</div><div className="text-[10px] uppercase tracking-wider font-bold text-[#2C7A70]/50">{s.k}</div></div>
                                ))}
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="flex gap-1 p-1 glass-card rounded-[14px] mb-6">
                            {[{ id: 'roadmap', lbl: '12-Week Roadmap' }, { id: 'tools', lbl: 'Tools & Stack' }, { id: 'habits', lbl: 'Daily Habits' }].map(tab => (
                                <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                                    className={`flex-1 py-2.5 text-center text-xs md:text-sm font-bold rounded-[10px] transition-all ${activeTab === tab.id
                                        ? 'bg-[#0A4D44] text-white shadow-md'
                                        : 'text-[#2C7A70]/60 hover:text-[#0A4D44]'
                                        }`}
                                >{tab.lbl}</button>
                            ))}
                        </div>

                        {/* Tab: Roadmap */}
                        {activeTab === 'roadmap' && (
                            <div className="space-y-3">
                                {result.weeks.map((w, i) => <WeekCard key={i} week={w} index={i} />)}
                            </div>
                        )}

                        {/* Tab: Tools */}
                        {activeTab === 'tools' && (
                            <div className="space-y-6">
                                {result.tools.map((sec, i) => (
                                    <div key={i}>
                                        <div className="text-xs uppercase tracking-wider font-bold text-[#2C7A70]/50 mb-3">{sec.sec}</div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                            {sec.items.map((t, j) => <ToolCard key={j} tool={t} />)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Tab: Habits */}
                        {activeTab === 'habits' && (
                            <div className="space-y-4">
                                {result.habits.map((h, i) => (
                                    <div key={i} className="glass-card rounded-[20px] p-6">
                                        <h3 className="text-lg font-bold text-[#0A4D44] mb-4">{h.time} Routine</h3>
                                        <div className="space-y-0 divide-y divide-[#0A4D44]/8">
                                            {h.items.map((item, j) => (
                                                <div key={j} className="flex gap-4 py-3">
                                                    <div className="text-[11px] font-bold text-[#0A4D44] uppercase tracking-wider min-w-[56px] pt-0.5">{h.time}</div>
                                                    <div className="text-sm text-[#2C7A70]/80 leading-relaxed" dangerouslySetInnerHTML={{ __html: item }} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                                {/* Universal Principles */}
                                <div className="glass-card rounded-[20px] p-6">
                                    <h3 className="text-lg font-bold text-[#0A4D44] mb-4">Universal Principles</h3>
                                    <div className="space-y-0 divide-y divide-[#0A4D44]/8">
                                        {[
                                            { t: 'Always', txt: '<strong>Build real things.</strong> Tutorials give you comfort. Projects give you skills. The gap between knowing and doing collapses only when you ship.' },
                                            { t: 'Always', txt: '<strong>Teach someone else.</strong> You have not truly understood something until you can explain it simply. Find one person each week to share what you learned.' },
                                            { t: 'Always', txt: '<strong>Be in the room.</strong> Join communities and attend meetups. AI moves fast — the best information lives in Discord servers and forum threads before it hits blog posts.' }
                                        ].map((p, i) => (
                                            <div key={i} className="flex gap-4 py-3">
                                                <div className="text-[11px] font-bold text-[#0A4D44] uppercase tracking-wider min-w-[56px] pt-0.5">{p.t}</div>
                                                <div className="text-sm text-[#2C7A70]/80 leading-relaxed" dangerouslySetInnerHTML={{ __html: p.txt }} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Restart */}
                        <div className="flex items-center justify-between flex-wrap gap-3 mt-10 pt-6 border-t border-[#0A4D44]/10">
                            <span className="text-sm text-[#2C7A70]/50 font-medium">Want a different path? Start over.</span>
                            <button onClick={restart} className="flex items-center gap-2 px-5 py-2.5 rounded-[14px] bg-transparent border border-[#0A4D44]/20 text-[#2C7A70] font-bold text-sm hover:border-[#0A4D44]/40 transition-all">
                                <RotateCcw className="w-4 h-4" /> Start Over
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};
