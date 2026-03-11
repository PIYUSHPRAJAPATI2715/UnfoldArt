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
                        <div className="flex items-center justify-center md:justify-start space-x-4">
                            <a
                                href="https://www.instagram.com/unfolded_art_2"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-foreground/5 hover:bg-[var(--color-accent)] hover:text-white transition-all text-foreground/80"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:contact@unfoldart.com"
                                className="p-2 rounded-full bg-foreground/5 hover:bg-[var(--color-accent)] hover:text-white transition-all text-foreground/80"
                                aria-label="Email"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-black/10 dark:border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-foreground/60">
                    <p>© {currentYear} UnfoldArt by Yashvasi. All rights reserved.</p>
                    <p className="flex items-center mt-2 md:mt-0">
                        Crafted with <Heart className="w-3 h-3 mx-1 text-red-500" /> for art lovers.
                    </p>
                </div>
            </div>
        </footer>
    );
}
