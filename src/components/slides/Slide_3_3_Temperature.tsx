"use client";

import React from 'react';
import { motion } from 'framer-motion';
import PolyULogo from '@/components/PolyULogo';

export default function Slide_3_3_Temperature() {
  return (
    <div className="flex flex-col h-full w-full bg-slate-50 relative overflow-hidden font-sans">
      {/* Header - Consistent with Chapter 4 */}
      <div className="bg-white h-36 w-full flex items-center justify-between px-20 shadow-sm border-b border-slate-100 z-10 shrink-0">
        <div className="flex flex-col gap-2">
          <div className="font-medium uppercase tracking-widest text-red-900 text-lg flex items-center gap-3">
            <span className="w-8 h-px bg-red-900/40"></span>
            SECTION 3.3
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900">
            Extreme Temperature & Energy Consumption (OPEX)
          </h1>
        </div>
        <PolyULogo layout="horizontal" knotSize={64} className="opacity-90" />
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full max-w-[1600px] mx-auto flex flex-col px-20 py-6 gap-4 min-h-0">
        
        {/* Top Split Area */}
        <div className="flex-1 grid grid-cols-12 gap-12 min-h-0">
          
          {/* Left: Text Content */}
          <div className="col-span-5 flex flex-col justify-center gap-8">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <h3 className="text-2xl font-bold text-[#8b181b] flex items-center">
                <span className="text-[#8b181b] text-xl mr-3">▶</span> 
                Air-conditioning Dominates (EMSD, 2025)
              </h3>
              <p className="text-xl text-slate-700 leading-relaxed mt-2 pl-7 font-medium">
                Air conditioning accounts for ~24% of total commercial-sector energy consumption in Hong Kong.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <h3 className="text-2xl font-bold text-[#8b181b] flex items-center">
                <span className="text-[#8b181b] text-xl mr-3">▶</span> 
                Hot Nights Surge ~9× by 2100 (HKO, 2024)
              </h3>
              <p className="text-xl text-slate-700 leading-relaxed mt-2 pl-7 font-medium">
                Under SSP5-8.5, annual 'Hot Nights' rise from 18 days (1995–2014) to over 160 days by 2100.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <h3 className="text-2xl font-bold text-[#8b181b] flex items-center">
                <span className="text-[#8b181b] text-xl mr-3">▶</span> 
                COP Decline → OPEX Compression
              </h3>
              <p className="text-xl text-slate-700 leading-relaxed mt-2 pl-7 font-medium">
                Sustained nighttime heat overloads AC systems, lowering Coefficient of Performance (COP). Electricity-cost spikes severely compress operating margins.
              </p>
            </motion.div>
          </div>

          {/* Right: Chart Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5, delay: 0.4 }}
            className="col-span-7 flex flex-col items-center justify-center min-h-0"
          >
            <div className="w-full flex-1 relative border border-slate-300 shadow-sm bg-white flex items-center justify-center overflow-hidden">
              <img 
                src="/images/slide_3_3_chart.png" 
                alt="Projected annual Hot Nights in Hong Kong" 
                className="w-full h-full object-contain p-2"
                onError={(e) => {
                  e.currentTarget.src = 'https://placehold.co/800x400/f8fafc/94a3b8?text=Please+crop+the+chart+from+the+original+image%0Aand+save+as+slide_3_3_chart.png+in+public/images/';
                }}
              />
            </div>
            <p className="text-sm text-slate-500 italic mt-2 text-center shrink-0">
              Projected annual Hot Nights & Very Hot Days, SSP5-8.5 (HKO, 2024)
            </p>
          </motion.div>
        </div>

        {/* Bottom: 3 Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-3 gap-6 shrink-0 mt-2"
        >
          {/* Card 1 */}
          <div className="bg-gradient-to-b from-[#fdfbfb] to-white border border-[#8b181b]/20 hover:border-[#8b181b]/60 rounded-2xl py-6 px-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-default">
            <div className="text-5xl font-extrabold text-[#8b181b] mb-3 tracking-tight group-hover:scale-105 transition-transform duration-300">24%</div>
            <div className="text-lg text-slate-700 font-medium">Share of commercial energy from AC</div>
          </div>
          
          {/* Card 2 */}
          <div className="bg-gradient-to-b from-[#fdfbfb] to-white border border-[#8b181b]/20 hover:border-[#8b181b]/60 rounded-2xl py-6 px-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-default">
            <div className="text-5xl font-extrabold text-[#8b181b] mb-3 tracking-tight group-hover:scale-105 transition-transform duration-300">18 → 160+</div>
            <div className="text-lg text-slate-700 font-medium">Annual Hot Nights (baseline → 2100)</div>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-b from-[#fdfbfb] to-white border border-[#8b181b]/20 hover:border-[#8b181b]/60 rounded-2xl py-6 px-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-default">
            <div className="text-5xl font-extrabold text-[#8b181b] mb-3 tracking-tight group-hover:scale-105 transition-transform duration-300">~9×</div>
            <div className="text-lg text-slate-700 font-medium">Increase in nighttime heat pressure</div>
          </div>
        </motion.div>
        
        {/* Footer */}
        <div className="shrink-0 pt-1">
          <p className="text-sm text-slate-500 italic text-left">
            Source: EMSD (2025), HK Energy End-use Data; Hong Kong Observatory (2024).
          </p>
        </div>

      </div>
    </div>
  );
}