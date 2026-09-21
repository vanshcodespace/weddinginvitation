"use client";

import { useEffect, useRef, useState } from "react";
import { useApp } from "../ui/AppContext";
import { weddingConfig } from "@/config/wedding";
import { Music, Music2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MusicControl() {
  const { isEnvelopeOpened, isMusicPlaying, setIsMusicPlaying } = useApp();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!weddingConfig.music.enabled) return;
    
    audioRef.current = new Audio(weddingConfig.music.src);
    audioRef.current.loop = true;
    
    audioRef.current.addEventListener('error', () => {
      setHasError(true);
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.remove();
      }
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current || hasError) return;

    if (isMusicPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.warn("Audio play failed:", error);
          setIsMusicPlaying(false);
        });
      }
    } else {
      audioRef.current.pause();
    }
  }, [isMusicPlaying, hasError, setIsMusicPlaying]);

  if (!isEnvelopeOpened || !weddingConfig.music.enabled || hasError) {
    return null;
  }

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      onClick={() => setIsMusicPlaying(!isMusicPlaying)}
      className="fixed bottom-6 left-6 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-maroon-deep/90 text-ivory shadow-lg backdrop-blur-sm border border-gold-muted/30 hover:bg-maroon-deep transition-colors"
      aria-label={isMusicPlaying ? "Pause music" : "Play music"}
    >
      <AnimatePresence mode="wait">
        {isMusicPlaying ? (
          <motion.div
            key="playing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-center relative"
          >
            {/* Equalizer animation effect */}
            <div className="absolute inset-0 rounded-full animate-ping bg-gold-soft/20 opacity-75"></div>
            <Music2 size={20} className="animate-pulse" />
          </motion.div>
        ) : (
          <motion.div
            key="paused"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <VolumeX size={20} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
