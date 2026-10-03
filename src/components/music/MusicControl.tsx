"use client";
import { useState, useRef, useEffect } from "react";
import { useApp } from "@/components/ui/AppContext";

export default function MusicControl() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { isEnvelopeOpened } = useApp();

  useEffect(() => {
    // Create audio on mount to avoid SSR issues
    audioRef.current = new Audio("/music/leberch-invitation-wedding-375839.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  // Play music when the user taps to open the door screen
  useEffect(() => {
    if (isEnvelopeOpened && !isPlaying && audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.error("Auto-play prevented", err);
      });
    }
  }, [isEnvelopeOpened]);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Only show the button after the invitation is opened
  if (!isEnvelopeOpened) return null;

  return (
    <button 
      onClick={toggleMusic}
      className="fixed top-6 right-6 z-50 w-11 h-11 bg-sage text-white rounded-full flex items-center justify-center shadow-lg hover:bg-dark-olive transition-colors md:absolute"
      aria-label={isPlaying ? "Pause music" : "Play music"}
    >
      <span className="text-xl leading-none">
        {isPlaying ? "🔊" : "🔈"}
      </span>
    </button>
  );
}
