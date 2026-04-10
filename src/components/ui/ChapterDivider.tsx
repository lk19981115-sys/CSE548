"use client";

import { motion } from "framer-motion";
import PolyULogo from "@/components/PolyULogo";
import { ReactNode } from "react";

interface ChapterDividerProps {
  chapterNumber: string;
  title: string | ReactNode;
}

// Animation Variants for staggering text reveal
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const textRevealVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 25
    }
  }
};

const lineVariants = {
  hidden: { width: 0, opacity: 0 },
  visible: {
    width: "4rem", // equivalent to w-16
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const
    }
  }
};

export default function ChapterDivider({ chapterNumber, title }: ChapterDividerProps) {
  // Handle both string (multiline via \n) and ReactNode cases
  const isString = typeof title === 'string';
  const titleLines = isString ? (title as string).split("\n").map(line => line.trim()) : [];

  return (
    <div className="relative flex items-center h-full w-full bg-slate-50 overflow-hidden px-24">
      {/* Top-Right Logo */}
      <div className="absolute top-12 right-12">
        <PolyULogo layout="horizontal" knotSize={48} className="drop-shadow-sm opacity-90" />
      </div>

      {/* Giant Background Number Watermark */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute -left-20 top-1/2 -translate-y-1/2 text-[30rem] font-black text-slate-200/50 pointer-events-none select-none leading-none tracking-tighter z-0"
      >
        {chapterNumber}
      </motion.div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 ml-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Chapter Subtitle & Red Line */}
        <div className="flex items-center gap-6 mb-8 overflow-hidden">
          <motion.div variants={lineVariants} className="h-1.5 bg-red-900 rounded-full" />
          <motion.div variants={textRevealVariants}>
            <span className="text-red-900 font-bold tracking-[0.25em] text-xl uppercase">
              CHAPTER {chapterNumber}
            </span>
          </motion.div>
        </div>

        {/* Main Giant Title */}
        <div className="flex flex-col gap-2">
          {isString ? (
            titleLines.map((line, index) => (
              <div key={index} className="overflow-hidden py-1">
                <motion.h2
                  variants={textRevealVariants}
                  className="text-7xl md:text-8xl font-black uppercase tracking-tighter text-slate-800 leading-[0.95]"
                >
                  {line}
                </motion.h2>
              </div>
            ))
          ) : (
            <div className="overflow-hidden py-1">
              <motion.div
                variants={textRevealVariants}
                className="text-7xl md:text-8xl font-black uppercase tracking-tighter text-slate-800 leading-[0.95]"
              >
                {title}
              </motion.div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
