"use client";

import React from 'react';
import PolyULogo from '@/components/PolyULogo';
import { motion } from 'framer-motion';
import { PackageOpen, Clock, Truck, Lock, ArrowLeftRight, ClipboardCheck, TrendingUp, Zap, ArrowRight } from 'lucide-react';

export default function Slide_5_2_TechnologyTransition() {
  return (
    <div className="flex flex-col h-full w-full bg-slate-50 relative overflow-hidden font-sans">
      {/* Header */}
      <div className="bg-white h-36 w-full flex items-center justify-between px-20 shadow-sm border-b border-slate-100 z-10 shrink-0">
        <div className="flex flex-col gap-2">
          <div className="font-medium uppercase tracking-widest text-red-900 text-lg flex items-center gap-3">
            <span className="w-8 h-px bg-red-900/40"></span>
            SECTION 5.2
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900">
            Technology Transition: <span className="text-red-800">CAPEX & Model Mismatch</span>
          </h1>
        </div>
        <PolyULogo layout="horizontal" knotSize={64} className="opacity-90" />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 w-full max-w-[1600px] mx-auto px-20 py-12 flex flex-col justify-center min-h-0">
        
        {/* Two Column Layout */}
        <div className="flex-1 flex items-stretch gap-10 w-full mb-8">
          
          {/* Left Card: MiC Technology */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="flex-1 bg-white rounded-3xl border border-slate-200 shadow-lg relative overflow-hidden flex flex-col group hover:shadow-xl transition-shadow duration-300"
          >
            {/* Top Color Bar */}
            <div className="h-3 w-full bg-slate-800"></div>
            
            <div className="p-10 flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center gap-5 mb-8">
                <div className="w-16 h-16 bg-slate-100 text-slate-800 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <PackageOpen strokeWidth={1.5} className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-1">Pain Point 1</h2>
                  <h3 className="text-3xl font-extrabold text-slate-900">MiC (Modular Construction)</h3>
                </div>
              </div>

              {/* Core Data */}
              <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-8 border border-red-100 mb-10 flex items-center justify-center relative overflow-hidden group/data shadow-inner flex-1 flex flex-col justify-center">
                <div className="absolute -right-4 -top-4 opacity-5 group-hover/data:opacity-10 group-hover/data:scale-110 transition-all duration-500">
                  <TrendingUp className="w-48 h-48 text-red-900" />
                </div>
                <div className="absolute left-0 top-0 w-1 h-full bg-red-600"></div>
                <div className="text-center relative z-10 py-4">
                  <div className="text-2xl font-bold tracking-widest text-slate-500 uppercase mb-4 flex items-center justify-center gap-2">
                    <TrendingUp className="w-6 h-6 text-red-600" />
                    CAPEX Initial Cost Increase
                  </div>
                  <div className="text-[5rem] font-black tracking-tighter leading-none flex items-center justify-center gap-4 group-hover/data:scale-105 transition-transform duration-300 whitespace-nowrap">
                    <span className="text-slate-400 font-extrabold">+10%</span>
                    <div className="w-16 h-16 bg-white rounded-full shadow-sm border border-red-100 flex items-center justify-center shrink-0 mx-2 group-hover/data:translate-x-1 transition-transform">
                      <ArrowRight className="w-8 h-8 text-red-600/80" strokeWidth={3} />
                    </div>
                    <span className="text-red-800 bg-clip-text text-transparent bg-gradient-to-br from-red-700 to-red-900">+15%</span>
                  </div>
                </div>
              </div>

              {/* Bullet Points */}
              <div className="flex flex-col gap-5 mt-auto">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 mt-1">
                    <Truck className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-slate-800 mb-1">Cross-border supply chain reliance</p>
                    <p className="text-slate-500 font-medium">Highly dependent on Greater Bay Area manufacturing and logistics.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 mt-1">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-slate-800 mb-1">100% Design Freeze</p>
                    <p className="text-slate-500 font-medium">Loss of development flexibility; changes cannot be made during construction.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Card: Low-Carbon Materials */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" as const }}
            className="flex-1 bg-white rounded-3xl border border-slate-200 shadow-lg relative overflow-hidden flex flex-col group hover:shadow-xl transition-shadow duration-300"
          >
            {/* Top Color Bar */}
            <div className="h-3 w-full bg-red-800"></div>
            
            <div className="p-10 flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center gap-5 mb-8">
                <div className="w-16 h-16 bg-red-50 text-red-800 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Clock strokeWidth={1.5} className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-sm font-bold tracking-widest text-red-800 uppercase mb-1">Pain Point 2</h2>
                  <h3 className="text-3xl font-extrabold text-slate-900">Low-Carbon Materials</h3>
                </div>
              </div>

              {/* Core Conflict */}
              <div className="bg-gradient-to-bl from-slate-50 to-white rounded-2xl p-8 border border-slate-200 mb-10 relative overflow-hidden group/conflict shadow-inner flex-1 flex flex-col justify-center">
                {/* Background decorative elements */}
                <div className="absolute -left-10 -bottom-10 opacity-[0.03] group-hover/conflict:opacity-[0.08] group-hover/conflict:-rotate-12 transition-all duration-500">
                  <Clock className="w-48 h-48 text-slate-900" />
                </div>
                <div className="absolute -right-10 -top-10 opacity-[0.03] group-hover/conflict:opacity-[0.08] group-hover/conflict:rotate-12 transition-all duration-500">
                  <Truck className="w-48 h-48 text-red-900" />
                </div>
                
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center z-20 text-amber-500 group-hover/conflict:scale-110 group-hover/conflict:shadow-amber-500/20 transition-all duration-300">
                  <Zap className="w-7 h-7 fill-amber-500" />
                </div>
                
                <div className="flex items-stretch justify-between gap-8 relative z-10 py-4">
                  <div className="flex-1 text-center flex flex-col justify-center bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-slate-100 group-hover/conflict:-translate-x-2 transition-transform duration-500 shadow-sm">
                    <div className="text-2xl font-black text-slate-800 leading-tight">Extended Curing Time</div>
                    <div className="text-sm font-bold tracking-widest text-slate-400 mt-3 uppercase">Green Concrete</div>
                  </div>
                  <div className="flex-1 text-center flex flex-col justify-center bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-red-50 group-hover/conflict:translate-x-2 transition-transform duration-500 shadow-sm">
                    <div className="text-2xl font-black text-red-800 leading-tight">HK &quot;Fast-Turnover&quot;</div>
                    <div className="text-sm font-bold tracking-widest text-red-400 mt-3 uppercase">Business Model</div>
                  </div>
                </div>
              </div>

              {/* Bullet Points */}
              <div className="flex flex-col gap-5 mt-auto">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-50 text-red-800 flex items-center justify-center shrink-0 mt-1">
                    <ArrowLeftRight className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-slate-800 mb-1">Fundamental Mismatch</p>
                    <p className="text-slate-500 font-medium">Slower construction speed directly impacts developer financing and pre-sales.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-50 text-red-800 flex items-center justify-center shrink-0 mt-1">
                    <ClipboardCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-slate-800 mb-1">Stringent BD compliance & testing</p>
                    <p className="text-slate-500 font-medium">New materials face long approval cycles from the Buildings Department.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* References / Sources */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full flex justify-start shrink-0 pl-2"
        >
          <p className="text-base text-slate-500 font-semibold">
            Sources: Pan & Hon (2020); Hossain et al. (2018)
          </p>
        </motion.div>

      </div>
    </div>
  );
}