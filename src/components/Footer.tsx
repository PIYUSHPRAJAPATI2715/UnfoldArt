import Link from "next/link";
import { Instagram, Mail, Heart } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black/5 dark:bg-white/5 border-t border-black/10 dark:border-white/10 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="font-playfair text-2xl font-bold text-[var(--color-accent)]">UnfoldArt</h3>
                        <p className="text-foreground/70 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                            Creative crafts, sketches, and breathtaking artwork carefully created by Yashvasi.
                            Adding imagination to reality.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">Explore</h4>
                        <ul className="space-y-2 text-sm text-foreground/70">
                            <li>
                                <Link href="/#gallery" className="hover:text-[var(--color-accent)] transition-colors">Art Gallery</Link>
                            </li>
                            <li>
                                <Link href="/#about" className="hover:text-[var(--color-accent)] transition-colors">About Yashvasi</Link>
                            </li>
                            <li>
                                <Link href="/#contact" className="hover:text-[var(--color-accent)] transition-colors">Commission an Art</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">Connect</h4>
                        <div className="flex items-center justify-center md:justify-start space-x-6">
                            <a
                                href="https://www.instagram.com/unfolded_art_2"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col items-center md:items-start"
                                aria-label="Instagram"
                            >
                                <div className="p-3 rounded-full bg-foreground/5 group-hover:bg-gradient-to-tr group-hover:from-[#833ab4] group-hover:via-[#fd1d1d] group-hover:to-[#fcb045] group-hover:text-white transition-all duration-300 text-foreground/80 shadow-sm">
                                    <Instagram className="w-5 h-5" />
                                </div>
                                <span className="text-[10px] uppercase tracking-widest mt-2 opacity-0 group-hover:opacity-100 transition-opacity font-bold">Instagram</span>
                            </a>
                            <a
                                href="mailto:contact@unfoldart.com"
                                className="group flex flex-col items-center md:items-start"
                                aria-label="Email"
                            >
                                <div className="p-3 rounded-full bg-foreground/5 group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all duration-300 text-foreground/80 shadow-sm">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <span className="text-[10px] uppercase tracking-widest mt-2 opacity-0 group-hover:opacity-100 transition-opacity font-bold">Email</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row items-center justify-between text-[10px] sm:text-xs text-foreground/40 font-medium tracking-wide transition-opacity">
                    <p>© {currentYear} UnfoldArt by Yashvasi. All rights reserved.</p>
                    <p className="flex items-center mt-2 md:mt-0">
                        Crafted with <Heart className="w-3 h-3 mx-1 text-red-500" /> for art lovers.
                    </p>
                </div>
            </div>
        </footer>
    );
}
