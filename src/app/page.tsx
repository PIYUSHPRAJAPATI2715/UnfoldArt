import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { GallerySection } from "@/components/GallerySection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Yashvasi",
    "url": "https://unfoldart.com",
    "jobTitle": "Creative Artist",
    "description": "A creative mind passionate about turning blank canvases into vibrant realities through sketches, crafts, and breathtaking artwork.",
    "worksFor": {
      "@type": "Organization",
      "name": "UnfoldArt"
    },
    "sameAs": [
      "https://www.instagram.com/unfolded_art_2"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col w-full">
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <ContactSection />
      </div>
    </>
  );
}
