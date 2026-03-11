import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL("https://unfoldart.com"),
  title: "UnfoldArt | Creative Handicrafts & Sketches by Yashvasi",
  description: "Explore the amazing artwork, sketches, and creative crafts by Yashvasi on UnfoldArt. Discover unique crafted items for promotion and business growth.",
  keywords: ["Art", "Craft", "Sketches", "Yashvasi", "Handicrafts", "UnfoldArt", "Creative"],
  openGraph: {
    title: "UnfoldArt by Yashvasi",
    description: "Creative Handicrafts & Sketches",
    url: "https://unfoldart.com",
    siteName: "UnfoldArt",
    images: [
      {
        url: "/gallery/art-1.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-sans bg-background text-foreground flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
