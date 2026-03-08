import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const BreathingBackground = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-[#E0EBE8]">
        {/* Simple, Performant Background Shapes without heavy blurs or mix-blend modes */}
        <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#0A4D44] to-transparent opacity-30 blur-[60px]"
        />
        <motion.div
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-bl from-[#2C7A70] to-transparent opacity-20 blur-[80px]"
        />
        <motion.div
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 5 }}
            className="absolute bottom-[-20%] left-[20%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-t from-[#84B0A5] to-transparent opacity-30 blur-[60px]"
        />
    </div>
);

export const AnimatedCounter = ({ target }) => {
    const [count, setCount] = useState(0);
    const nodeRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                let start = 0;
                const timer = setInterval(() => {
                    start += target / 60;
                    if (start >= target) { setCount(target); clearInterval(timer); }
                    else { setCount(Math.ceil(start)); }
                }, 16);
                observer.disconnect();
            }
        }, { threshold: 0.5 });
        if (nodeRef.current) observer.observe(nodeRef.current);
        return () => observer.disconnect();
    }, [target]);

    return <span ref={nodeRef}>{count}</span>;
};

export const SectionHeader = ({ title }) => (
    <div className="mb-12 relative z-10 flex items-center gap-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#2A3B38]">{title}</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-[#84B0A5] to-transparent opacity-30" />
    </div>
);
