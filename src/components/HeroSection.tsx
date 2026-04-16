"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
            {/* Abstract Background Shapes */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.1, scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-[var(--color-accent)] blur-[100px]"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.05, scale: 1 }}
                    transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                    className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-foreground blur-[120px]"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="flex-1 text-center md:text-left space-y-8"
                    >
                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="flex items-center justify-center md:justify-start gap-3"
                            >
                                <div className="h-px w-8 bg-[var(--color-accent)]"></div>
                                <span className="text-[var(--color-accent)] font-semibold tracking-widest uppercase text-xs sm:text-sm">
                                    Welcome to UnfoldArt
                                </span>
                            </motion.div>
                            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-playfair font-bold text-foreground leading-[1.1] text-balance">
                                Where Imagination <br /> <span className="italic text-gradient-accent">Unfolds.</span>
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-xl mx-auto md:mx-0 text-balance leading-relaxed">
                                Discover the breathtaking sketches, creative handicrafts, and unique artwork meticulously crafted by <span className="font-semibold text-foreground">Yashvasi</span>.
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4"
                        >
                            <Link href="/#gallery" className="w-full sm:w-auto px-8 py-4 rounded-full bg-foreground text-background hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300 font-medium flex items-center justify-center gap-2 group hover-shine">
                                Explore Gallery
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/#contact" className="w-full sm:w-auto px-8 py-4 rounded-full border border-foreground/20 hover:border-foreground transition-all duration-300 font-medium text-foreground flex items-center justify-center">
                                Commission Work
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Featured Image Collage / Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="flex-1 relative w-full mt-12 md:mt-0"
                    >
                        <div className="relative aspect-square sm:aspect-video md:aspect-square lg:aspect-[4/5] w-full max-w-2xl mx-auto">
                            {/* Main Background Image */}
                            <motion.div 
                                animate={{ 
                                    y: [0, -15, 0],
                                    rotate: [0, 1, 0] 
                                }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-[10%] left-[5%] w-[60%] h-[70%] rounded-2xl overflow-hidden shadow-2xl z-20 border border-white/10"
                            >
                                <Image
                                    src="/gallery/art-1.jpg"
                                    alt="Featured Sketch"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 60vw, 30vw"
                                    priority
                                />
                            </motion.div>

                            {/* Secondary Floating Image */}
                            <motion.div 
                                animate={{ 
                                    y: [0, 20, 0],
                                    rotate: [0, -2, 0]
                                }}
                                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-[5%] right-[5%] w-[55%] h-[65%] rounded-2xl overflow-hidden shadow-2xl z-10 border border-white/10"
                            >
                                <Image
                                    src="/gallery/art-2.jpg"
                                    alt="Creative Craft"
                                    fill
                                    className="object-cover opacity-90 transition-opacity hover:opacity-100"
                                    sizes="(max-width: 768px) 55vw, 25vw"
                                    priority
                                />
                                <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors duration-500"></div>
                            </motion.div>

                            {/* Accent Circle */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border-2 border-[var(--color-accent)]/20 rounded-full -z-10 animate-pulse"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
