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
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 text-center md:text-left space-y-8"
                    >
                        <div className="space-y-4">
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-[var(--color-accent)] font-semibold tracking-wider uppercase text-sm"
                            >
                                Welcome to UnfoldArt
                            </motion.span>
                            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-foreground leading-tight text-balance">
                                Where Imagination <br /> <span className="italic text-[var(--color-accent)]">Unfolds.</span>
                            </h1>
                            <p className="text-lg md:text-xl text-foreground/70 max-w-xl mx-auto md:mx-0 text-balance">
                                Discover the breathtaking sketches, creative handicrafts, and unique artwork meticulously crafted by Yashvasi.
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4"
                        >
                            <Link href="/#gallery" className="px-8 py-4 rounded-full bg-foreground text-background hover:bg-[var(--color-accent)] hover:text-white transition-all font-medium flex items-center gap-2 group">
                                Explore Gallery
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/#contact" className="px-8 py-4 rounded-full border border-foreground/20 hover:border-foreground transition-all font-medium text-foreground">
                                Commission Work
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Featured Image Collage / Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        className="flex-1 relative w-full max-w-lg mx-auto md:max-w-none aspect-square md:aspect-auto md:h-[600px] mt-8 md:mt-0"
                    >
                        <div className="absolute inset-0 grid grid-cols-2 gap-3 sm:gap-4 p-2 sm:p-4">
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="relative rounded-2xl overflow-hidden shadow-2xl mt-4 sm:mt-8"
                            >
                                <div className="group h-full w-full">
                                    <Image
                                        src="/gallery/art-1.jpg"
                                        alt="Featured Sketch"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 768px) 50vw, 25vw"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                </div>
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="relative rounded-2xl overflow-hidden shadow-2xl mb-4 sm:mb-8"
                            >
                                <div className="group h-full w-full">
                                    <Image
                                        src="/gallery/art-2.jpg"
                                        alt="Creative Craft"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 768px) 50vw, 25vw"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
