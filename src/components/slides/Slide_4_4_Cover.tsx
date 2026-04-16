"use client";

import React from 'react';
import PolyULogo from '@/components/PolyULogo';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';

export default function Slide_4_4_Cover() {
  return (
    <div className="flex flex-col h-full w-full bg-slate-50 relative overflow-hidden font-sans">

      {/* Header - Consistent with previous slides */}
      <div className="bg-white h-36 w-full flex items-center justify-between px-20 shadow-sm border-b border-slate-100 z-10 shrink-0">
        <div className="flex flex-col gap-2">
          <div className="font-medium uppercase tracking-widest text-red-900 text-lg flex items-center gap-3">
            <span className="w-8 h-px bg-red-900/40"></span>
            SECTION 4.3
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900">
            3D Curved Glass Façade
          </h1>
        </div>
        <PolyULogo layout="horizontal" knotSize={64} className="opacity-90" />  
      </div>

      {/* Main Content Area */}
      <div className="flex-1 w-full max-w-[1200px] mx-auto px-20 py-12 flex flex-col items-center justify-center min-h-0">

        {/* Image Container - Scaled down */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 w-full min-h-0 flex items-center justify-center mb-10"
        >
          <img
            src="/images/图片4.png"
            alt="Curved Glass Diagram"
            className="max-w-full max-h-full object-contain mix-blend-multiply opacity-90 drop-shadow-sm"
            onError={(e) => {
              if (e.currentTarget.src.includes('.png')) {
                e.currentTarget.src = '/images/图片4.jpg';
              }
            }}
          />
        </motion.div>

        {/* Bottom Text Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white border border-slate-200 shadow-xl shadow-slate-200/50 rounded-3xl p-8 max-w-4xl w-full flex items-center gap-6 shrink-0"
        >
          <div className="w-16 h-16 bg-sky-50 text-sky-700 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-sky-100">
            <Layers strokeWidth={1.5} className="w-8 h-8" />
          </div>
          <p className="text-2xl text-slate-700 leading-relaxed font-medium">   
            Over <span className="font-bold text-sky-800 text-3xl mx-1">4,000</span> panels of 4-7 ply, double-laminated, curved insulated glass units with <span className="font-bold text-slate-900 border-b-2 border-sky-300 pb-0.5">zero UV penetration</span>.
          </p>
        </motion.div>

      </div>
    </div>
  );
}