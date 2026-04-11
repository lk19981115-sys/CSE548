"use client";

import React from 'react';
import PolyULogo from '@/components/PolyULogo';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, ArrowRight, Building, Leaf, AlertCircle } from 'lucide-react';

export default function Slide_5_1_MarketShifts() {
  return (
    <div className="flex flex-col h-full w-full bg-slate-50 relative overflow-hidden font-sans">
      {/* Header */}
      <div className="bg-white h-36 w-full flex items-center justify-between px-20 shadow-sm border-b border-slate-100 z-10 shrink-0">
        <div className="flex flex-col gap-2">
          <div className="font-medium uppercase tracking-widest text-red-900 text-lg flex items-center gap-3">
            <span className="w-8 h-px bg-red-900/40"></span>
            SECTION 5.1
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900">
            Market Shifts: From <span className="text-red-800">Green Premium</span> to <span className="text-red-800">Brown Discount</span>
          </h1>
        </div>
        <PolyULogo layout="horizontal" knotSize={64} className="opacity-90" />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 w-full max-w-[1600px] mx-auto px-20 py-8 flex flex-col justify-center min-h-0">
        
        {/* Top/Center Comparison */}
        <div className="flex-1 flex items-center justify-between gap-12 relative w-full mb-6">
          
          {/* Background Gradient Arrow (Subtle) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-[800px] h-32 bg-gradient-to-r from-emerald-100 via-slate-100 to-amber-100 blur-3xl opacity-60 rounded-full"
            />
          </div>

          {/* Left Card: Green Premium */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="flex-1 bg-white rounded-3xl p-10 border border-slate-200 shadow-lg relative z-10 hover:-translate-y-2 transition-transform duration-300 hover:shadow-2xl group overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>
            
            <div className="flex items-center gap-5 mb-10">
              <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm border border-emerald-100">
                <Leaf strokeWidth={1.5} className="w-10 h-10" />
              </div>
              <div>
                <h2 className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-1">Past & Present</h2>
                <h3 className="text-3xl font-extrabold text-slate-900">Green Premium</h3>
              </div>
            </div>

            <div className="mb-10">
              <div className="text-[5rem] font-black text-emerald-600 tracking-tighter mb-2 flex items-baseline gap-3 leading-none">
                <TrendingUp strokeWidth={4} className="w-14 h-14 text-emerald-500 shrink-0" />
                Up to +17.1%
              </div>
              <p className="text-2xl font-medium text-slate-500 mt-4">Value addition for certified buildings</p>
            </div>

            <div className="bg-emerald-50/80 rounded-2xl p-6 border border-emerald-200/50 mt-auto">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-200 text-emerald-700 flex items-center justify-center shrink-0">
                  <span className="font-black text-lg">!</span>
                </div>
                <p className="text-xl text-emerald-900 leading-relaxed font-medium">
                  <span className="font-bold">Penetration &gt; 50%</span> 
                  <span className="mx-3 text-emerald-600/50">→</span> 
                  Premium Stabilizing
                </p>
              </div>
            </div>
          </motion.div>

          {/* Center Arrow */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" as const }}
            className="flex flex-col items-center justify-center shrink-0 z-10"
          >
            <div className="w-28 h-28 bg-white rounded-full shadow-xl flex items-center justify-center border border-slate-100 relative z-10 group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 to-amber-500 opacity-20 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
              <ArrowRight strokeWidth={2.5} className="w-12 h-12 text-slate-400 group-hover:text-slate-800 transition-colors" />
            </div>
          </motion.div>

          {/* Right Card: Brown Discount */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" as const }}
            className="flex-1 bg-white rounded-3xl p-10 border border-slate-200 shadow-xl relative z-10 hover:-translate-y-2 transition-transform duration-300 hover:shadow-2xl group overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-500 to-red-600"></div>
            
            <div className="flex items-center gap-5 mb-10">
              <div className="w-20 h-20 bg-amber-50 text-amber-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm border border-amber-100">
                <AlertCircle strokeWidth={1.5} className="w-10 h-10" />
              </div>
              <div>
                <h2 className="text-sm font-bold tracking-widest text-amber-700 uppercase mb-1">Future Trend</h2>
                <h3 className="text-3xl font-extrabold text-slate-900">Brown Discount</h3>
              </div>
            </div>

            <div className="mb-10">
              <div className="text-[5rem] font-black text-amber-700 tracking-tighter mb-2 flex items-baseline gap-3 leading-none">
                <TrendingDown strokeWidth={4} className="w-14 h-14 text-amber-600 shrink-0" />
                Up to -20%
              </div>
              <p className="text-2xl font-medium text-slate-500 mt-4">Rent Reduction</p>
            </div>

            <div className="bg-amber-50/80 rounded-2xl p-6 border border-amber-200/50 mt-auto">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-200 text-amber-800 flex items-center justify-center shrink-0">
                  <Building strokeWidth={2} className="w-5 h-5" />
                </div>
                <p className="text-xl text-amber-900 leading-relaxed font-medium">
                  Severe financial impact for <span className="font-bold text-red-700">Non-compliant assets</span> lacking green certification.
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* References / Sources */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-full flex justify-start shrink-0 mb-3 pl-2"
        >
          <p className="text-base text-slate-500 font-semibold">
            Sources: Knight Frank (2024); CapitaLand (2025)
          </p>
        </motion.div>

        {/* Bottom Speaker Note / Key Insight */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" as const }}
          className="w-full bg-slate-900 rounded-3xl p-6 shadow-2xl relative overflow-hidden shrink-0 border border-slate-800 mb-4"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600"></div>
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-slate-800 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-red-900/20 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 flex items-start gap-8">
            <div className="bg-white/10 rounded-xl px-5 py-2 text-red-400 font-bold tracking-widest text-sm uppercase shrink-0 mt-1 shadow-inner border border-white/5">
              Speaker Note
            </div>
            <div>
              <p className="text-2xl text-slate-300 leading-relaxed">
                The fundamental market shift is moving from <span className="text-emerald-400 font-semibold">seeking green premiums</span> to <span className="text-amber-400 font-semibold">avoiding brown discounts</span>. As ESG compliance becomes a <span className="text-white font-bold">hard constraint (Scope 3 requirements)</span> for multinational tenants, non-compliant older buildings face severe pressure.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
