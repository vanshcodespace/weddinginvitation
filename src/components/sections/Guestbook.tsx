"use client";

import { useState, useEffect } from "react";
import SectionWrapper from "../ui/SectionWrapper";
import { submitWish } from "@/lib/dataClient";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function Guestbook() {
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [wishes, setWishes] = useState<any[]>([]);

  useEffect(() => {
    // Fetch initial wishes
    fetch("/api/wishes")
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setWishes(data.wishes);
        }
      })
      .catch(console.error);
  }, [status]); // re-fetch when status changes (like after a new submission)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await submitWish(formData);
      setStatus("success");
      setFormData({ name: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <SectionWrapper id="guestbook" className="bg-cream overflow-hidden">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-maroon-deep mb-4">Guestbook</h2>
          <p className="font-script text-2xl text-gold-muted">Leave your wishes for the couple</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gold-muted/20"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold uppercase tracking-wider text-wine mb-2">Your Name</label>
                <input
                  required
                  type="text"
                  className="w-full bg-cream/50 border border-gold-muted/30 rounded-lg px-4 py-3 focus:outline-none focus:border-maroon-deep"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold uppercase tracking-wider text-wine mb-2">Message</label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-cream/50 border border-gold-muted/30 rounded-lg px-4 py-3 focus:outline-none focus:border-maroon-deep resize-none"
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="w-full bg-maroon-deep text-ivory py-3 rounded-lg font-semibold uppercase tracking-widest hover:bg-wine transition-colors disabled:opacity-70 flex justify-center items-center gap-2"
              >
                {status === "loading" && <Loader2 size={18} className="animate-spin" />}
                {status === "success" ? "Sent!" : "Send Wish"}
              </button>
            </form>
          </motion.div>

          {/* Wall */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[400px] overflow-y-auto pr-2 space-y-4 custom-scrollbar"
          >
            <AnimatePresence>
              {wishes.length === 0 ? (
                <div className="h-full flex items-center justify-center text-brown-dark/50 italic font-body">
                  Be the first to leave a wish!
                </div>
              ) : (
                [...wishes].reverse().map((wish, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white p-6 rounded-xl border border-gold-muted/20 shadow-sm"
                  >
                    <p className="font-body text-brown-dark mb-4 leading-relaxed">"{wish.message}"</p>
                    <p className="text-sm font-semibold uppercase tracking-wider text-wine text-right">- {wish.name}</p>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
