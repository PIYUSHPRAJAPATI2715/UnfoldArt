"use client";

import { motion } from "framer-motion";
import { Send, Instagram } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleInstagramSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Instagram handle
        const igHandle = "unfolded_art_2";
        
        // Open Instagram Direct Message in a new tab
        // Note: ig.me is a short link for Instagram profiles/messages
        window.open(`https://ig.me/m/${igHandle}`, '_blank');

        // Optional: clear the form
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
    };

    return (
        <section id="contact" className="py-24 bg-background relative border-t border-black/5 dark:border-white/5">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden"
                >
                    {/* Decorative background element for the card */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent)] opacity-5 blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                    <div className="text-center mb-10 space-y-4 relative z-10">
                        <h2 className="text-[var(--color-accent)] font-semibold tracking-wider uppercase text-sm">
                            Let's Connect
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-playfair font-bold text-foreground">
                            Interested in a piece?
                        </h3>
                        <p className="text-foreground/70 text-base md:text-lg max-w-xl mx-auto text-balance">
                            Reach out to discuss commissions, purchase inquiries, or simply to say hello. Messages will be directed to my Instagram!
                        </p>
                    </div>

                    <form className="space-y-6 relative z-10" onSubmit={handleInstagramSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl bg-background border border-foreground/10 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 outline-none transition-all placeholder:text-foreground/30"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl bg-background border border-foreground/10 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 outline-none transition-all placeholder:text-foreground/30"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject (Optional)</label>
                            <input
                                type="text"
                                id="subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl bg-background border border-foreground/10 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 outline-none transition-all placeholder:text-foreground/30"
                                placeholder="E.g., Commission Inquiry"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                            <textarea
                                id="message"
                                rows={5}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl bg-background border border-foreground/10 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 outline-none transition-all resize-none placeholder:text-foreground/30"
                                placeholder="How can I help you?"
                                required
                            ></textarea>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-90 text-white px-8 py-4 rounded-xl font-medium transition-all group hover:shadow-xl shadow-red-500/20"
                        >
                            <Instagram className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                            Send Message on Instagram
                        </motion.button>
                    </form>

                </motion.div>
            </div>
        </section>
    );
}
