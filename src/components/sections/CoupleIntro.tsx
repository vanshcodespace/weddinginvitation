"use client";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { weddingConfig } from "@/config/wedding";

export default function CoupleIntro() {
  return (
    <SectionWrapper id="welcome" className="py-20 px-8 text-center relative">
      <div className="absolute inset-0 bg-white/40 shadow-inner rounded-3xl -z-10 m-4"></div>
      <div className="heart-divider"><span>❦</span></div>
      
      <p className="font-italic text-[1.4rem] leading-relaxed text-[#3F4F35] max-w-sm mx-auto my-10 relative z-10">
        "We are honored to welcome you to the wedding ceremony of <span className="font-display font-semibold text-[#5b6d4b]">{weddingConfig.couple.groomName} & {weddingConfig.couple.brideName}</span> as they begin their journey together in faith and love. We thank you for being part of this blessed occasion."
      </p>

      <div className="heart-divider"><span>❦</span></div>
    </SectionWrapper>
  );
}
