"use client";

import { motion } from "framer-motion";
import PolyULogo from "@/components/PolyULogo";

const agendaItems = [
  {
    num: "01",
    title: "Climate Challenges",
  },
  {
    num: "02",
    title: "Risk Analysis & Economic Impact",
  },
  {
    num: "03",
    title: "Physical Risk Assessment",
  },
  {
    num: "04",
    title: "Policy and Legal Risk",
  },
  {
    num: "05",
    title: "Transition Risks",
  },
  {
    num: "06",
    title: "Financial Impacts & Response Measures",
  }
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each card's animation
      delayChildren: 0.2     // Initial delay before starting
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 260,
      damping: 20
    }
  }
};

export default function Slide2Agenda() {
  return (
    <div className="flex flex-col h-full w-full bg-slate-50 p-12 text-slate-800 relative overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-start mb-16">
        <div className="flex items-center gap-6">
          <div className="w-16 h-1.5 bg-red-900 rounded-full"></div>
          <h2 className="text-6xl font-black text-slate-800 tracking-[0.15em] uppercase">
            CONTENTS
          </h2>
          <div className="w-16 h-1.5 bg-red-900 rounded-full"></div>
        </div>
        {/* Top-Right Logo */}
        <PolyULogo layout="horizontal" knotSize={48} className="drop-shadow-sm opacity-90" />
      </div>

      {/* Main Grid Content */}
      <div className="flex-1 flex items-center justify-center pb-12">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {agendaItems.map((item, index) => (
            <motion.div 
              key={item.num}
              variants={itemVariants}
              className="group relative bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-red-900/20 transition-all duration-300 flex flex-col justify-center min-h-[180px] overflow-hidden cursor-default"
            >
              {/* Decorative Red Accent Line */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-red-900/0 group-hover:bg-red-900/80 transition-colors duration-300"></div>

              {/* Giant Background Number */}
              <div className="absolute -top-6 -right-4 text-[12rem] font-black text-slate-50 group-hover:text-red-50/80 transition-colors duration-500 pointer-events-none select-none z-0 leading-none">
                {item.num}
              </div>

              {/* Content */}
              <div className="relative z-10 pl-2">
                <div className="text-red-900 font-bold text-base mb-3 tracking-[0.25em] uppercase opacity-80 flex items-center gap-3">
                  <div className="w-6 h-px bg-red-900/50"></div>
                  SECTION {item.num}
                </div>
                <h3 className="text-3xl font-extrabold text-slate-800 leading-tight group-hover:text-red-900 transition-colors max-w-[85%]">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
