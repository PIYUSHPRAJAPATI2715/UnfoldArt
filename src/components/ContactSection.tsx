"use client";

import { motion } from "framer-motion";
import { Send, MessageCircle } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleWhatsAppSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Format the message for WhatsApp
        const waNumber = "917877172266";
        const formattedMessage = `*New Inquiry from UnfoldArt Website*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Subject:* ${subject || "N/A"}%0A*Message:* ${message}`;

        // Open WhatsApp in a new tab
        window.open(`https://wa.me/${waNumber}?text=${formattedMessage}`, '_blank');

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
                    className="glass rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl"
                >
                    <div className="text-center mb-10 space-y-4">
                        <h2 className="text-[var(--color-accent)] font-semibold tracking-wider uppercase text-sm">
                            Let's Connect
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-playfair font-bold text-foreground">
                            Interested in a piece?
                        </h3>
                        <p className="text-foreground/70 text-base md:text-lg max-w-xl mx-auto text-balance">
                            Reach out to discuss commissions, purchase inquiries, or simply to say hello. Messages will be sent directly to my WhatsApp!
                        </p>
                    </div>

                    <form className="space-y-6" onSubmit={handleWhatsAppSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl bg-background border border-foreground/10 focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] outline-none transition-all placeholder:text-foreground/30"
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
                                    className="w-full px-4 py-3 rounded-xl bg-background border border-foreground/10 focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] outline-none transition-all placeholder:text-foreground/30"
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
                                className="w-full px-4 py-3 rounded-xl bg-background border border-foreground/10 focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] outline-none transition-all placeholder:text-foreground/30"
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
                                className="w-full px-4 py-3 rounded-xl bg-background border border-foreground/10 focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] outline-none transition-all resize-none placeholder:text-foreground/30"
                                placeholder="How can I help you?"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-xl font-medium transition-all group hover:shadow-lg shadow-[#25D366]/20"
                        >
                            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            Send Message on WhatsApp
                        </button>
                    </form>

                </motion.div>
            </div>
        </section>
    );
}
