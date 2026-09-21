"use client";

import { useEffect, useRef, ReactNode } from "react";
import { useApp } from "./AppContext";
import { motion, useInView } from "framer-motion";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper({ id, children, className = "" }: SectionWrapperProps) {
  const { setActiveSection } = useApp();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { amount: 0.3, margin: "-10% 0px -40% 0px" });
  const isVisible = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  useEffect(() => {
    if (isInView) {
      setActiveSection(id);
    }
  }, [isInView, id, setActiveSection]);

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`min-h-screen py-20 flex flex-col items-center justify-center px-6 relative ${className}`}
    >
      {children}
    </motion.section>
  );
}
