"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AppContextType {
  isEnvelopeOpened: boolean;
  setIsEnvelopeOpened: (value: boolean) => void;
  isMusicPlaying: boolean;
  setIsMusicPlaying: (value: boolean) => void;
  activeSection: string;
  setActiveSection: (value: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [isEnvelopeOpened, setIsEnvelopeOpened] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Lock body scroll when envelope is not opened
  useEffect(() => {
    if (!isEnvelopeOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isEnvelopeOpened]);

  return (
    <AppContext.Provider
      value={{
        isEnvelopeOpened,
        setIsEnvelopeOpened,
        isMusicPlaying,
        setIsMusicPlaying,
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
