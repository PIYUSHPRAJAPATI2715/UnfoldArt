"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Instagram, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Art Gallery", href: "/#gallery" },
    { name: "About Yashvasi", href: "/#about" },
    { name: "Contact", href: "/#contact" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass transition-all border-b border-black/5 dark:border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <Link href="/" className="font-playfair text-2xl font-bold tracking-tight text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-hover)]">
                        UnfoldArt
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-[var(--color-accent)]",
                                    pathname === link.href ? "text-[var(--color-accent)]" : "text-foreground/80"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="https://www.instagram.com/unfolded_art_2"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground/80 hover:text-[var(--color-accent)] transition-colors"
                            aria-label="Instagram"
                        >
                            <Instagram className="w-5 h-5" />
                        </a>
                    </div>

                    {/* Mobile Nav Toggle */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-foreground focus:outline-none"
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav Menu */}
            {isOpen && (
                <div className="md:hidden glass border-t border-black/5 dark:border-white/5">
                    <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "block px-3 py-2 rounded-md text-base font-medium",
                                    pathname === link.href ? "text-[var(--color-accent)] bg-black/5" : "text-foreground/80 hover:text-[var(--color-accent)] hover:bg-black/5"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="https://www.instagram.com/unfolded_art_2"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-[var(--color-accent)] hover:bg-black/5"
                            onClick={() => setIsOpen(false)}
                        >
                            <Instagram className="w-5 h-5" />
                            <span>Instagram</span>
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
