"use client";
import SectionWrapper from "../ui/SectionWrapper";
import { weddingConfig } from "@/config/wedding";
import { motion } from "framer-motion";

export default function FamilySection() {
  if (!weddingConfig.family.enabled) return null;

  return (
    <SectionWrapper id="family" className="bg-cream">
      <div className="max-w-4xl mx-auto w-full text-center">
        <h2 className="font-script text-3xl md:text-4xl text-gold-muted mb-4">With the blessings of</h2>
        <h3 className="font-display text-4xl md:text-5xl text-maroon-deep mb-16">Our Families</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gold-muted/20"
          >
            <h4 className="font-display text-3xl text-wine mb-6 pb-4 border-b border-gold-muted/20">
              {weddingConfig.family.groomFamily.heading}
            </h4>
            <ul className="space-y-4">
              {weddingConfig.family.groomFamily.members.map((member, idx) => (
                <li key={idx} className="font-body text-brown-dark text-lg">{member}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gold-muted/20"
          >
            <h4 className="font-display text-3xl text-wine mb-6 pb-4 border-b border-gold-muted/20">
              {weddingConfig.family.brideFamily.heading}
            </h4>
            <ul className="space-y-4">
              {weddingConfig.family.brideFamily.members.map((member, idx) => (
                <li key={idx} className="font-body text-brown-dark text-lg">{member}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
