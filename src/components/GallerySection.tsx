"use client";

import { motion } from "framer-motion";
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
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {galleryItems.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={itemVariants}
                            className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
                        >
                            <Image
                                src={item.src}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-[var(--color-accent)] text-sm font-medium mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {item.category}
                                </span>
                                <h4 className="text-white font-playfair text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    {item.title}
                                </h4>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-16 text-center">
                    <a
                        href="https://www.instagram.com/unfolded_art_2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white transition-all font-medium"
                    >
                        View More on Instagram
                    </a>
                </div>
            </div>
        </section>
    );
}
