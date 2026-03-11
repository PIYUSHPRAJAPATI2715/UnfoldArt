"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutSection() {
    return (
        <section id="about" className="py-24 bg-foreground/5 dark:bg-foreground/10 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-16">

                    {/* Portrait Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <div className="relative aspect-[4/5] max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl">
                            {/* Portrait image updated to user provided one */}
                            <Image
                                src="/gallery/yashvasi-portrait.jpg"
                                alt="Yashvasi - The Artist"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl"></div>
                        </div>
                    </motion.div>

                    {/* About Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full md:w-1/2 space-y-6"
                    >
                        <h2 className="text-[var(--color-accent)] font-semibold tracking-wider uppercase text-sm">
                            Meet The Artist
                        </h2>
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-foreground leading-tight text-balance">
                            Hi, I'm Yashvasi
                        </h3>
                        <div className="space-y-4 text-foreground/80 text-base md:text-lg leading-relaxed text-balance">
                            <p>
                                A creative mind passionate about turning blank canvases into vibrant realities.
                                My journey with art and crafts has always been driven by the desire to create
                                something unique, beautiful, and meaningful.
                            </p>
                            <p>
                                From detailed sketches to innovative handicrafts, I pour my heart and soul into
                                every piece. I love experimenting with different mediums and techniques to bring
                                imagination to life.
                            </p>
                            <p>
                                UnfoldArt is my canvas to share this passion with the world. Join me as we
                                explore the endless canvas of creativity together.
                            </p>
                        </div>

                        <div className="pt-4 sm:pt-6">
                            {/* Optional Signature or additional creative touch */}
                            <span className="font-playfair text-3xl md:text-4xl text-[var(--color-accent)] italic opacity-80">
                                Yashvasi
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
