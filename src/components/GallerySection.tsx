"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

// Placeholder for the 11 images
const galleryItems = Array.from({ length: 9 }).map((_, i) => ({
    id: i + 1,
    // We offset by 1 because art-0 doesn't exist. e.g. art-1 to art-9
    src: `/gallery/art-${i + 1}.jpg`,
    title: `Creative Artwork ${i + 1}`,
    category: i % 2 === 0 ? "Sketch" : "Handicraft"
}));

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function GallerySection() {
    return (
        <section id="gallery" className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-[var(--color-accent)] font-semibold tracking-wider uppercase text-sm">
                        The Collection
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-playfair font-bold text-foreground">
                        Featured Artworks
                    </h3>
                    <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
                        A curated selection of sketches, crafts, and creative pieces. Each piece tells a unique story.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
                >
                    {galleryItems.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="group relative aspect-[4/5] sm:aspect-square rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                        >
                            <Image
                                src={item.src}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                                <motion.span 
                                    initial={{ opacity: 0, x: -10 }}
                                    whileHover={{ opacity: 1, x: 0 }}
                                    className="text-[var(--color-accent)] text-xs font-bold tracking-[0.2em] uppercase mb-2"
                                >
                                    {item.category}
                                </motion.span>
                                <h4 className="text-white font-playfair text-2xl font-bold">
                                    {item.title}
                                </h4>
                                <div className="h-1 w-0 group-hover:w-12 bg-[var(--color-accent)] mt-4 transition-all duration-500"></div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-20 text-center">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://www.instagram.com/unfolded_art_2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-transparent border-2 border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300 font-bold tracking-wide uppercase text-sm group"
                    >
                        View Full Gallery
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                </div>
            </div>
        </section>
    );
}
