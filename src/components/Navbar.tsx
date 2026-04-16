"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Instagram, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Art Gallery", href: "/#gallery" },
    { name: "About Yashvasi", href: "/#about" },
    { name: "Contact", href: "/#contact" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
            scrolled ? "h-16 glass border-b border-black/5 dark:border-white/5" : "h-20 bg-transparent"
        )}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex justify-between items-center h-full">
                    <Link href="/" className="font-playfair text-2xl font-bold tracking-tight text-[var(--color-accent)] transition-all hover:scale-105 active:scale-95">
                        UnfoldArt
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-all hover:text-[var(--color-accent)] relative group",
                                    pathname === link.href ? "text-[var(--color-accent)]" : "text-foreground/80"
                                )}
                            >
                                {link.name}
                                <span className={cn(
                                    "absolute -bottom-1 left-0 h-0.5 bg-[var(--color-accent)] transition-all duration-300",
                                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                                )}></span>
                            </Link>
                        ))}
                        <a
                            href="https://www.instagram.com/unfolded_art_2"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[var(--color-accent)] text-white p-2.5 rounded-full hover:scale-110 active:scale-90 transition-all shadow-lg shadow-[var(--color-accent)]/20"
                            aria-label="Instagram"
                        >
                            <Instagram className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Mobile Nav Toggle */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-foreground p-2 focus:outline-none"
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden glass border-t border-black/5 dark:border-white/5 overflow-hidden"
                    >
                        <div className="px-4 pt-4 pb-8 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "block px-4 py-3 rounded-xl text-lg font-medium transition-all",
                                        pathname === link.href 
                                            ? "text-[var(--color-accent)] bg-[var(--color-accent)]/10" 
                                            : "text-foreground/80 hover:text-[var(--color-accent)] hover:bg-foreground/5"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 mt-4 border-t border-foreground/10">
                                <a
                                    href="https://www.instagram.com/unfolded_art_2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-3 px-4 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Instagram className="w-5 h-5" />
                                    <span>Follow on Instagram</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
