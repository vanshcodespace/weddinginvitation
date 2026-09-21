"use client";
import SectionWrapper from "../ui/SectionWrapper";
import { weddingConfig } from "@/config/wedding";
import { motion } from "framer-motion";

export default function OurStory() {
  if (!weddingConfig.ourStory.enabled || (weddingConfig.ourStory.milestones as readonly any[]).length === 0) return null;

  return (
    <SectionWrapper id="story" className="bg-ivory relative">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-maroon-deep mb-4">Our Story</h2>
          <div className="w-24 h-px bg-gold-muted mx-auto" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gold-muted/30 md:-translate-x-1/2" />

          <div className="space-y-12">
            {weddingConfig.ourStory.milestones.map((milestone, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`relative flex items-center md:justify-between w-full ${isEven ? "md:flex-row-reverse" : ""}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-gold-soft border-4 border-ivory -translate-x-1/2 flex items-center justify-center z-10" />

                  {/* Empty space for desktop alignment */}
                  <div className="hidden md:block w-5/12" />

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="w-full md:w-5/12 pl-16 md:pl-0 text-left md:text-center"
                  >
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gold-muted/20">
                      <span className="text-gold-muted font-semibold text-sm uppercase tracking-widest block mb-2">{milestone.date}</span>
                      <h3 className="font-display text-2xl text-wine mb-2">{milestone.title}</h3>
                      <p className="font-body text-brown-dark/80">{milestone.description}</p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
