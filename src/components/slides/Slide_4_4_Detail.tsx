"use client";

import React from 'react';
import PolyULogo from '@/components/PolyULogo';
import { motion } from 'framer-motion';

export default function Slide_4_4_Detail() {
  return (
    <div className="flex flex-col h-full w-full bg-slate-50 relative overflow-hidden font-sans">
      
      {/* Header */}
      <div className="bg-white h-36 w-full flex items-center justify-between px-20 shadow-sm border-b border-slate-100 z-10 shrink-0">
        <div className="flex flex-col gap-2">
          <div className="font-medium uppercase tracking-widest text-red-900 text-lg flex items-center gap-3">
            <span className="w-8 h-px bg-red-900/40"></span>
            SECTION 4.4
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900">
            Kai Tak District Cooling System
          </h1>
        </div>
        <PolyULogo layout="horizontal" knotSize={64} className="opacity-90" />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 w-full max-w-[1200px] mx-auto px-20 py-12 flex flex-col items-center justify-center min-h-0">
        
        {/* Image Container - Scaled down with Interactive Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.03 }}
          className="flex-1 w-full min-h-0 flex items-center justify-center cursor-default group"
        >
          <img 
            src="/images/图片5.png" 
            alt="Kai Tak District Cooling System" 
            className="max-w-full max-h-full object-contain mix-blend-multiply opacity-90 drop-shadow-md group-hover:drop-shadow-2xl group-hover:opacity-100 transition-all duration-500"
            onError={(e) => {
              if (e.currentTarget.src.includes('.png')) {
                e.currentTarget.src = '/images/图片5.jpg';
              }
            }}
          />
        </motion.div>

      </div>
    </div>
  );
}