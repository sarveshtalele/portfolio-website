import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Leaf } from 'lucide-react';
import { BreathingBackground } from './components/Shared';

const NatureOverlay = ({ isVisible }) => {
    // Generate 20 random leaves
    const leaves = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100, // percentage across screen
        duration: Math.random() * 3 + 2, // 2-5 seconds falling
        delay: Math.random() * 1,
        rotation: Math.random() * 360,
        scale: Math.random() * 0.5 + 0.5
    }));

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 pointer-events-none z-[100] overflow-hidden"
                >
                    {leaves.map((leaf) => (
                        <motion.div
                            key={leaf.id}
                            initial={{ y: -100, x: `${leaf.x}vw`, rotate: 0, scale: leaf.scale, opacity: 0 }}
                            animate={{
                                y: '120vh',
                                rotate: leaf.rotation + 360,
                                opacity: [0, 1, 1, 0],
                                x: [`${leaf.x}vw`, `${leaf.x + (Math.random() * 10 - 5)}vw`]
                            }}
                            transition={{
                                duration: leaf.duration,
                                delay: leaf.delay,
                                ease: "linear"
                            }}
                            className="absolute text-[#0A4D44] drop-shadow-lg"
                        >
                            <Leaf className="w-8 h-8 md:w-12 md:h-12 opacity-80" />
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

// Pages
import { HomePage } from './pages/Home';
import { JourneyPage } from './pages/Journey';
import { ProjectsPage } from './pages/Projects';
import { KnowledgePage } from './pages/Knowledge';
import { BlogsPage } from './pages/Blogs';
import { ContactPage } from './pages/Contact';

export default function App() {
    const [currentRoute, setCurrentRoute] = useState('home');
    const [isNatureMode, setIsNatureMode] = useState(false);

    const triggerNatureMode = () => {
        if (isNatureMode) return;
        setIsNatureMode(true);
        setTimeout(() => setIsNatureMode(false), 5000);
    };
    const navItems = [
        { id: 'home', label: 'Overview' },
        { id: 'journey', label: 'Journey' },
        { id: 'projects', label: 'Projects' },
        { id: 'knowledge', label: 'Publications' },
        { id: 'blogs', label: 'Blogs' },
        { id: 'contact', label: 'Contact' }
    ];

    return (
        <>
            <NatureOverlay isVisible={isNatureMode} />
            <BreathingBackground />

            {/* Floating Navigation - Mobile Optimized with Tailwind */}
            <nav className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-50 px-2 md:px-3 py-2 md:py-3 glass-card rounded-full flex items-center gap-1 md:gap-2 overflow-x-auto w-[90vw] md:w-auto max-w-full shadow-lg scrollbar-hide">
                <div
                    className="p-2 md:p-3 mr-1 md:mr-2 cursor-pointer rounded-full hover:bg-white/50 transition-colors shrink-0"
                    onClick={() => { setCurrentRoute('home'); triggerNatureMode(); }}
                >
                    <Leaf className="w-5 h-5 md:w-6 md:h-6 text-[#0A4D44]" />
                </div>
                {navItems.map(item => (
                    <button
                        key={item.id}
                        onClick={() => setCurrentRoute(item.id)}
                        className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm lg:text-base font-bold transition-all whitespace-nowrap shrink-0 ${currentRoute === item.id
                            ? 'bg-[#0A4D44] text-white shadow-md scale-105'
                            : 'text-[#0A4D44]/70 hover:text-[#0A4D44] hover:bg-white/50'
                            }`}
                    >
                        {item.label}
                    </button>
                ))}
            </nav>

            {/* Main Routing Container */}
            <main className="min-h-screen flex flex-col relative z-10 w-full overflow-hidden">
                <AnimatePresence mode="wait">
                    {currentRoute === 'home' && <HomePage key="home" navigate={setCurrentRoute} />}
                    {currentRoute === 'journey' && <JourneyPage key="journey" />}
                    {currentRoute === 'projects' && <ProjectsPage key="projects" />}
                    {currentRoute === 'knowledge' && <KnowledgePage key="knowledge" />}
                    {currentRoute === 'blogs' && <BlogsPage key="blogs" />}
                    {currentRoute === 'contact' && <ContactPage key="contact" />}
                </AnimatePresence>
            </main>

            {/* Professional Footer */}
            <footer className="relative z-10 bg-white/20 backdrop-blur-xl border-t border-white/40 pt-16 pb-8 mt-auto">
                <div className="max-w-6xl mx-auto px-6 md:px-12">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                        <div className="text-center md:text-left">
                            <h3
                                className="text-2xl font-bold text-[#0A4D44] flex items-center gap-2 justify-center md:justify-start cursor-pointer group"
                                onClick={triggerNatureMode}
                            >
                                <Leaf className="w-6 h-6 group-hover:scale-110 transition-transform" /> Sarvesh Talele
                            </h3>
                            <p className="text-[#2C7A70] font-medium mt-2 max-w-sm">
                                Designing and solving complex enterprise puzzles into autonomous, measurable AI solutions.
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                            {[
                                { label: 'LinkedIn', url: 'https://www.linkedin.com/in/sarveshtalele' },
                                { label: 'Medium', url: 'https://medium.com/@sarveshtalele' },
                                { label: 'GitHub', url: 'https://github.com/sarveshtalele' }
                            ].map((link, i) => (
                                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="text-[#0A4D44] hover:text-[#135B52] font-bold text-xs md:text-sm bg-white/40 px-5 py-2.5 rounded-full hover:bg-white/80 transition-all shadow-sm border border-white/60">
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-[#0A4D44]/10 text-xs md:text-sm font-bold text-[#0A4D44]/60">
                        <p>© {new Date().getFullYear()} Sarvesh Talele. All rights reserved.</p>
                        <p className="flex items-center gap-1 opacity-80">Built with <span className="text-[#135B52]">Grit and determination</span></p>
                    </div>
                </div>
            </footer>
        </>
    );
}
