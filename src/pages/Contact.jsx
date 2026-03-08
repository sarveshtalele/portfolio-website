import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import { callGemini } from '../api';

export const ContactPage = () => {
    const formRef = useRef();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isPolishing, setIsPolishing] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState(null); // null, 'success', 'error'

    const handlePolishMessage = async () => {
        if (!message.trim()) return;
        setIsPolishing(true);
        const prompt = `Polish the following draft to make it highly professional, polite, and warmly authentic. Return ONLY the polished text.\n\nDraft: "${message}"`;
        const result = await callGemini(prompt);
        setMessage(result.replace(/["*]/g, ''));
        setIsPolishing(false);
    };

    const sendEmail = async (e) => {
        e.preventDefault();

        if (!name || !email || !message) {
            setStatus('error');
            setTimeout(() => setStatus(null), 3000);
            return;
        }

        setIsSending(true);
        setStatus(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message })
            });

            if (response.ok) {
                setStatus('success');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                console.error("Failed to send message:", await response.text());
                setStatus('error');
            }
        } catch (error) {
            console.error("Network error:", error);
            setStatus('error');
        } finally {
            setIsSending(false);
            setTimeout(() => setStatus(null), 5000);
        }
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen pt-48 pb-24 px-6 relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center">

            {/* Breathing Animation Icon */}
            <div className="relative w-48 h-48 mb-16 flex items-center justify-center">
                {[1, 2, 3].map((i) => (
                    <motion.div
                        key={i}
                        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                        transition={{ duration: 12, repeat: Infinity, delay: i * 3, ease: "easeInOut" }}
                        className="absolute inset-0 rounded-full border-[3px] border-[#0A4D44] opacity-20"
                    />
                ))}
                <div className="w-24 h-24 rounded-full bg-white/60 backdrop-blur-md flex items-center justify-center shadow-lg relative z-10 border border-white/80">
                    <Mail className="w-10 h-10 text-[#0A4D44]" />
                </div>
            </div>

            {/* Contact Form */}
            <div className="w-full glass-card p-6 md:p-14 rounded-[32px] md:rounded-[40px] shadow-xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0A4D44] mb-8 md:mb-10">Start a Conversation</h2>
                <form ref={formRef} className="space-y-6 md:space-y-8" onSubmit={sendEmail}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                        <input
                            type="text"
                            name="user_name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-white/60 backdrop-blur-sm border border-white/80 rounded-[16px] md:rounded-[20px] px-6 md:px-8 py-4 md:py-5 text-base md:text-lg text-[#0A4D44] focus:outline-none focus:ring-4 focus:ring-[#0A4D44]/20 focus:bg-white/90 font-bold placeholder-[#84B0A5] transition-all"
                            placeholder="Name"
                            required
                        />
                        <input
                            type="email"
                            name="user_email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-white/60 backdrop-blur-sm border border-white/80 rounded-[16px] md:rounded-[20px] px-6 md:px-8 py-4 md:py-5 text-base md:text-lg text-[#0A4D44] focus:outline-none focus:ring-4 focus:ring-[#0A4D44]/20 focus:bg-white/90 font-bold placeholder-[#84B0A5] transition-all"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="space-y-3">
                        <div className="flex justify-between items-end">
                            {status === 'success' && (
                                <motion.span initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-xs md:text-sm font-bold text-[#2C7A70] flex items-center gap-1.5 md:gap-2">
                                    <CheckCircle2 className="w-4 h-4" /> Sent!
                                </motion.span>
                            )}
                            {status === 'error' && (
                                <motion.span initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-xs md:text-sm font-bold text-red-500">
                                    Failed to send.
                                </motion.span>
                            )}
                            <div className="flex-1" />
                            <button
                                type="button"
                                onClick={handlePolishMessage}
                                disabled={isPolishing || !message.trim()}
                                className="text-xs md:text-sm font-bold text-[#0A4D44] hover:text-[#135B52] disabled:opacity-50 flex items-center gap-2 transition-colors bg-white/60 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/80 shadow-sm hover:bg-white/90"
                            >
                                {isPolishing ? <Sparkles className="w-3 h-3 md:w-4 md:h-4 animate-spin" /> : <Sparkles className="w-3 h-3 md:w-4 md:h-4" />}
                                {isPolishing ? 'Polishing...' : 'AI Polish'}
                            </button>
                        </div>
                        <textarea
                            name="message"
                            rows="5"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full bg-white/60 backdrop-blur-sm border border-white/80 rounded-[20px] md:rounded-[24px] px-6 md:px-8 py-5 md:py-6 text-base md:text-lg text-[#0A4D44] focus:outline-none focus:ring-4 focus:ring-[#0A4D44]/20 focus:bg-white/90 font-bold placeholder-[#84B0A5] resize-none transition-all"
                            placeholder="How can we build something together?"
                            required
                        />
                    </div>
                    <button
                        disabled={isSending}
                        className="w-full py-4 md:py-5 rounded-[20px] md:rounded-[24px] bg-[#0A4D44] text-white font-bold text-lg md:text-xl flex items-center justify-center gap-3 md:gap-4 hover:bg-[#135B52] transition-all group mt-2 md:mt-4 hover:shadow-xl hover:-translate-y-1 disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none"
                    >
                        {isSending ? 'Sending...' : 'Send Message'}
                        {!isSending && <Send className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />}
                    </button>
                </form>
            </div>
        </motion.div>
    );
};
