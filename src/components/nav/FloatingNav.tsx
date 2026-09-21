"use client";

import { useState } from "react";
import { useApp } from "../ui/AppContext";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { weddingConfig } from "@/config/wedding";

export default function FloatingNav() {
  const { isEnvelopeOpened, activeSection } = useApp();
  const [isOpen, setIsOpen] = useState(false);

  if (!isEnvelopeOpened) return null;

  const navItems = [
    { id: "home", label: "Home" },
    ...(weddingConfig.ourStory.enabled ? [{ id: "story", label: "Our Story" }] : []),
    ...(weddingConfig.events.length > 0 ? [{ id: "events", label: "Events" }] : []),
    ...(weddingConfig.gallery.images.length > 0 ? [{ id: "gallery", label: "Gallery" }] : []),
    { id: "venue", label: "Venue" },
    { id: "rsvp", label: "RSVP" },
  ];

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 md:top-6 md:bottom-auto md:right-8 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-maroon-deep/90 text-ivory shadow-lg backdrop-blur-sm border border-gold-muted/30 hover:bg-maroon-deep transition-colors"
        aria-label="Toggle Navigation"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-ivory/80 backdrop-blur-md z-40"
            />
            <motion.nav
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="fixed bottom-24 right-6 md:top-24 md:bottom-auto md:right-8 z-50 w-64 bg-white rounded-2xl shadow-2xl border border-gold-muted/20 overflow-hidden"
            >
              <div className="p-4 flex flex-col gap-2">
                <div className="text-center font-display text-maroon-deep border-b border-gold-muted/20 pb-3 mb-2">
                  <span className="text-xl">Menu</span>
                </div>
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`text-left px-4 py-3 rounded-xl transition-all duration-300 font-body ${
                      activeSection === item.id
                        ? "bg-blush text-maroon-deep font-medium"
                        : "text-brown-dark hover:bg-cream/50"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
