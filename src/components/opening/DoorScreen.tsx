"use client";

import { useApp } from "../ui/AppContext";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function DoorScreen() {
  const { isEnvelopeOpened, setIsEnvelopeOpened } = useApp();
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    if (isEnvelopeOpened) {
      const timer = setTimeout(() => {
        setShowContent(false);
      }, 2000); 
      return () => clearTimeout(timer);
    }
  }, [isEnvelopeOpened]);

  const handleOpen = () => {
    setIsEnvelopeOpened(true);
  };

  if (!showContent) return null;

  const PlaqueShape = () => (
    <svg width="260" height="340" viewBox="0 0 260 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]">
      {/* Outer Fill */}
      <path d="M130 5 C 160 5, 170 30, 200 30 C 230 30, 255 55, 255 85 C 255 110, 245 125, 245 170 C 245 215, 255 230, 255 255 C 255 285, 230 310, 200 310 C 170 310, 160 335, 130 335 C 100 335, 90 310, 60 310 C 30 310, 5 285, 5 255 C 5 230, 15 215, 15 170 C 15 125, 5 110, 5 85 C 5 55, 30 30, 60 30 C 90 30, 100 5, 130 5 Z" fill="var(--cream)" stroke="var(--gold)" strokeWidth="4"/>
      {/* Inner Decorative Line */}
      <path d="M130 15 C 155 15, 165 38, 192 38 C 218 38, 241 61, 241 88 C 241 108, 233 122, 233 170 C 233 218, 241 232, 241 252 C 241 279, 218 302, 192 302 C 165 302, 155 325, 130 325 C 105 325, 95 302, 68 302 C 42 302, 19 279, 19 252 C 19 232, 27 218, 27 170 C 27 122, 19 108, 19 88 C 19 61, 42 38, 68 38 C 95 38, 105 15, 130 15 Z" stroke="var(--gold)" strokeWidth="1.5"/>
      {/* Top Pearls */}
      <circle cx="130" cy="5" r="4" fill="#ffffff" stroke="var(--gold)" strokeWidth="1"/>
      <circle cx="115" cy="10" r="3" fill="#ffffff" stroke="var(--gold)" strokeWidth="1"/>
      <circle cx="145" cy="10" r="3" fill="#ffffff" stroke="var(--gold)" strokeWidth="1"/>
      {/* Bottom Pearls */}
      <circle cx="130" cy="335" r="4" fill="#ffffff" stroke="var(--gold)" strokeWidth="1"/>
      <circle cx="115" cy="330" r="3" fill="#ffffff" stroke="var(--gold)" strokeWidth="1"/>
      <circle cx="145" cy="330" r="3" fill="#ffffff" stroke="var(--gold)" strokeWidth="1"/>
    </svg>
  );

  const FloralIcon = ({ className }: { className?: string }) => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M20 5C20 5 23 15 30 18C23 21 20 31 20 31C20 31 17 21 10 18C17 15 20 5 20 5Z" fill="var(--gold)"/>
      <path d="M20 12C20 12 22 16 26 18C22 20 20 24 20 24C20 24 18 20 14 18C18 16 20 12 20 12Z" fill="var(--cream)"/>
    </svg>
  );

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none bg-sage">
      {/* Botanical Background Texture overlay */}
      <div className="absolute inset-0 opacity-40 pointer-events-none" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1.5' stroke-opacity='0.15'%3E%3Cpath d='M10 110 C 20 90, 40 80, 60 60 C 80 40, 90 20, 110 10' /%3E%3Cpath d='M60 60 C 50 50, 40 40, 30 50 C 40 60, 50 60, 60 60' fill='%23ffffff' fill-opacity='0.1'/%3E%3Cpath d='M60 60 C 70 70, 80 80, 90 70 C 80 60, 70 60, 60 60' fill='%23ffffff' fill-opacity='0.1'/%3E%3Cpath d='M85 35 C 75 35, 65 30, 65 20 C 75 20, 85 25, 85 35' fill='%23ffffff' fill-opacity='0.1'/%3E%3Cpath d='M35 85 C 35 75, 30 65, 20 65 C 20 75, 25 85, 35 85' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
             backgroundSize: "120px 120px"
           }}
      />
      
      {/* Subtle vignette for depth */}
      <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.5)] pointer-events-none" />

      {/* Left Door Container */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isEnvelopeOpened ? "-100%" : 0 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 w-1/2 h-full overflow-hidden pointer-events-auto"
      >
        {/* Top split line */}
        <div className="absolute top-0 right-0 w-[2px] h-[calc(50%-170px)] bg-gradient-to-b from-transparent to-gold/80 z-10" />
        {/* Bottom split line */}
        <div className="absolute bottom-0 right-0 w-[2px] h-[calc(50%-170px)] bg-gradient-to-t from-transparent to-gold/80 z-10" />
        
        {/* Plaque container (Clipped to left half) */}
        <div className="absolute inset-0 flex items-center justify-center w-[200%] max-w-[200vw] z-20" style={{ clipPath: "inset(0 50% 0 0)" }}>
          <button 
            onClick={handleOpen}
            className="relative w-[260px] h-[340px] cursor-pointer outline-none transition-transform hover:scale-[1.02] active:scale-[0.98] flex flex-col items-center justify-center"
          >
            <PlaqueShape />
            <div className="relative z-10 flex flex-col items-center justify-center space-y-6">
              <FloralIcon />
              <div className="flex flex-col items-center">
                <div className="w-1 h-1 bg-gold rounded-full mb-2" />
                <span className="font-display text-xl text-forest uppercase tracking-[0.2em] font-medium px-4 whitespace-nowrap">
                  Tap to Open
                </span>
                <div className="w-1 h-1 bg-gold rounded-full mt-2" />
              </div>
              <FloralIcon className="rotate-180" />
            </div>
          </button>
        </div>
      </motion.div>

      {/* Right Door Container */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isEnvelopeOpened ? "100%" : 0 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 right-0 w-1/2 h-full overflow-hidden pointer-events-auto"
      >
        {/* Top split line */}
        <div className="absolute top-0 left-0 w-[2px] h-[calc(50%-170px)] bg-gradient-to-b from-gold-muted/10 to-gold-soft/80 z-10" />
        {/* Bottom split line */}
        <div className="absolute bottom-0 left-0 w-[2px] h-[calc(50%-170px)] bg-gradient-to-t from-gold-muted/10 to-gold-soft/80 z-10" />
        
        {/* Plaque container (Clipped to right half) */}
        <div className="absolute inset-0 flex items-center justify-center w-[200%] -ml-[100%] max-w-[200vw] z-20" style={{ clipPath: "inset(0 0 0 50%)" }}>
          <button 
            onClick={handleOpen}
            className="relative w-[260px] h-[340px] cursor-pointer outline-none transition-transform hover:scale-[1.02] active:scale-[0.98] flex flex-col items-center justify-center"
          >
            <PlaqueShape />
            <div className="relative z-10 flex flex-col items-center justify-center space-y-6">
              <FloralIcon />
              <div className="flex flex-col items-center">
                <div className="w-1 h-1 bg-gold-muted rounded-full mb-2" />
                <span className="font-display text-xl text-[#8E795D] uppercase tracking-[0.2em] font-medium px-4 whitespace-nowrap">
                  Tap to Open
                </span>
                <div className="w-1 h-1 bg-gold-muted rounded-full mt-2" />
              </div>
              <FloralIcon className="rotate-180" />
            </div>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
