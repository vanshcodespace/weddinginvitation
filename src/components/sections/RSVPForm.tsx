"use client";

import { useState } from "react";
import SectionWrapper from "../ui/SectionWrapper";
import { weddingConfig } from "@/config/wedding";
import { submitRSVP } from "@/lib/dataClient";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";

export default function RSVPForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    guests: "1",
    attending: "yes",
    functions: [] as string[],
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCheckboxChange = (eventId: string) => {
    setFormData(prev => ({
      ...prev,
      functions: prev.functions.includes(eventId)
        ? prev.functions.filter(id => id !== eventId)
        : [...prev.functions, eventId]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    if (formData.attending === "yes" && formData.functions.length === 0 && weddingConfig.events.length > 0) {
      setErrorMessage("Please select at least one function to attend.");
      setStatus("error");
      return;
    }

    try {
      await submitRSVP(formData);
      setStatus("success");
    } catch (error) {
      console.error(error);
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <SectionWrapper id="rsvp" className="bg-ivory relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blush/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-soft/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

      <div className="max-w-2xl mx-auto w-full relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-maroon-deep mb-4">RSVP</h2>
          <p className="font-script text-2xl text-gold-muted">Kindly respond by Jan 1st, 2027</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-6 md:p-10 rounded-2xl shadow-xl shadow-brown-dark/5 border border-gold-muted/20"
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle2 size={64} className="text-green-600 mx-auto mb-6" />
                <h3 className="font-display text-3xl text-wine mb-2">Thank You!</h3>
                <p className="text-brown-dark/80">Your response has been recorded.</p>
                <button
                  onClick={() => {
                    setStatus("idle");
                    setFormData({ ...formData, message: "" });
                  }}
                  className="mt-8 text-sm text-gold-muted hover:text-wine uppercase tracking-widest font-semibold transition-colors"
                >
                  Submit Another
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold uppercase tracking-wider text-wine mb-2">Name</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-cream/50 border border-gold-muted/30 rounded-lg px-4 py-3 focus:outline-none focus:border-maroon-deep transition-colors"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold uppercase tracking-wider text-wine mb-2">Phone</label>
                    <input
                      required
                      type="tel"
                      className="w-full bg-cream/50 border border-gold-muted/30 rounded-lg px-4 py-3 focus:outline-none focus:border-maroon-deep transition-colors"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold uppercase tracking-wider text-wine mb-2">Will you be attending?</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="attending"
                        value="yes"
                        checked={formData.attending === "yes"}
                        onChange={e => setFormData({ ...formData, attending: e.target.value })}
                        className="accent-maroon-deep w-4 h-4"
                      />
                      <span className="text-brown-dark">Joyfully Accepts</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="attending"
                        value="no"
                        checked={formData.attending === "no"}
                        onChange={e => setFormData({ ...formData, attending: e.target.value })}
                        className="accent-maroon-deep w-4 h-4"
                      />
                      <span className="text-brown-dark">Regretfully Declines</span>
                    </label>
                  </div>
                </div>

                <AnimatePresence>
                  {formData.attending === "yes" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-6 overflow-hidden"
                    >
                      <div>
                        <label className="block text-sm font-semibold uppercase tracking-wider text-wine mb-2">Number of Guests</label>
                        <select
                          className="w-full bg-cream/50 border border-gold-muted/30 rounded-lg px-4 py-3 focus:outline-none focus:border-maroon-deep transition-colors"
                          value={formData.guests}
                          onChange={e => setFormData({ ...formData, guests: e.target.value })}
                        >
                          {[1, 2, 3, 4, 5].map(num => (
                            <option key={num} value={num}>{num}</option>
                          ))}
                        </select>
                      </div>

                      {weddingConfig.events.length > 0 && (
                        <div>
                          <label className="block text-sm font-semibold uppercase tracking-wider text-wine mb-2">Which events will you attend?</label>
                          <div className="space-y-2">
                            {weddingConfig.events.map(event => (
                              <label key={event.id} className="flex items-center gap-3 cursor-pointer p-2 rounded hover:bg-cream/50 transition-colors">
                                <input
                                  type="checkbox"
                                  checked={formData.functions.includes(event.id)}
                                  onChange={() => handleCheckboxChange(event.id)}
                                  className="accent-maroon-deep w-4 h-4 rounded border-gold-muted"
                                />
                                <span className="text-brown-dark">{event.name}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                <div>
                  <label className="block text-sm font-semibold uppercase tracking-wider text-wine mb-2">Message for the Couple (Optional)</label>
                  <textarea
                    rows={3}
                    className="w-full bg-cream/50 border border-gold-muted/30 rounded-lg px-4 py-3 focus:outline-none focus:border-maroon-deep transition-colors resize-none"
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-sm">{errorMessage}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-maroon-deep text-ivory py-4 rounded-lg font-semibold uppercase tracking-widest hover:bg-wine transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {status === "loading" && <Loader2 size={18} className="animate-spin" />}
                  Send RSVP
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
