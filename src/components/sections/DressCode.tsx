"use client";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function DressCode() {
  return (
    <SectionWrapper id="dresscode" className="py-16 px-6 text-center">
      <div className="text-3xl text-sage mb-2">👔</div>
      <h2 className="font-script text-4xl text-dark-olive mb-2">Dress Code</h2>
      <div className="heart-divider w-full"><span>❦</span></div>

      <div className="space-y-8 mt-6 max-w-[320px] mx-auto">
        <div>
          <h4 className="font-display font-semibold text-xl text-sage mb-2 tracking-wide uppercase">Women</h4>
          <p className="font-italic text-lg text-dark-olive">Elegant formal attire in pastel or jewel tones</p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-xl text-sage mb-2 tracking-wide uppercase">Men</h4>
          <p className="font-italic text-lg text-dark-olive">Suit or traditional formal wear</p>
        </div>
      </div>
    </SectionWrapper>
  );
}
