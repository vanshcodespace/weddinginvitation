"use client";

import { useState } from "react";
import SectionWrapper from "../ui/SectionWrapper";
import { weddingConfig } from "@/config/wedding";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("all");

  if ((weddingConfig.gallery.images as readonly any[]).length === 0) return null;

  const categories = ["all", ...Array.from(new Set(weddingConfig.gallery.images.map(img => img.category)))];
  const filteredImages = filter === "all" 
    ? weddingConfig.gallery.images 
    : weddingConfig.gallery.images.filter(img => img.category === filter);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <SectionWrapper id="gallery" className="bg-ivory">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-maroon-deep mb-6">Moments</h2>
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-sm uppercase tracking-wider transition-colors ${
                  filter === cat 
                    ? "bg-maroon-deep text-ivory" 
                    : "border border-gold-muted/40 text-brown-dark hover:border-maroon-deep hover:text-maroon-deep"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          <AnimatePresence>
            {filteredImages.map((img, idx) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-xl cursor-pointer group break-inside-avoid shadow-md"
                onClick={() => setSelectedImage(idx)}
              >
                <div className="aspect-[3/4] relative bg-cream">
                  {/* Fallback pattern if image is missing */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-10">
                    <span className="font-display text-4xl text-maroon-deep">&</span>
                  </div>
                  {/* We use unoptimized for the placeholder so it doesn't fail on missing local files during dev */}
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 relative z-10"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-maroon-deep/0 group-hover:bg-maroon-deep/20 transition-colors z-20" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          >
            <button className="absolute top-6 right-6 text-white/70 hover:text-white p-2">
              <X size={32} />
            </button>
            
            <button onClick={handlePrev} className="absolute left-4 md:left-8 text-white/50 hover:text-white p-2">
              <ChevronLeft size={48} />
            </button>
            
            <button onClick={handleNext} className="absolute right-4 md:right-8 text-white/50 hover:text-white p-2">
              <ChevronRight size={48} />
            </button>

            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl aspect-[3/4] md:aspect-video"
              onClick={e => e.stopPropagation()}
            >
              <Image
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                fill
                className="object-contain"
                unoptimized
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
