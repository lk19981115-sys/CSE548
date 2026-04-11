"use client";

import React from 'react';
import PolyULogo from '@/components/PolyULogo';
import { motion } from 'framer-motion';
import { AlertTriangle, CloudRain, Zap, Landmark, TrendingUp } from 'lucide-react';

export default function Slide_6_1_FinancialImpacts() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <div className="flex flex-col h-full w-full bg-slate-50 relative overflow-hidden font-sans">
      {/* Header */}
      <div className="bg-white h-40 w-full flex items-center justify-between px-20 shadow-sm border-b border-slate-100 z-10 shrink-0">
        <div className="flex flex-col justify-center">
          <div className="text-xl text-red-900 font-semibold tracking-wide flex items-center gap-4 mb-2">
            <span className="w-8 h-1 bg-red-900 rounded-full"></span>
            SECTION 6.1
          </div>
          <h1 className="text-6xl font-black text-slate-800 tracking-tighter uppercase">
            Financial Impacts
          </h1>
        </div>
        <PolyULogo layout="horizontal" knotSize={64} className="opacity-90" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center px-20 py-10 w-full max-w-[1600px] mx-auto min-h-0">
        
        {/* Top Info Area */}
        <motion.div 
          className="mb-16 flex justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="bg-white px-12 py-8 rounded-3xl border border-slate-200 shadow-sm max-w-5xl relative overflow-hidden">
            <motion.div 
              className="absolute left-0 top-0 bottom-0 w-3 bg-red-800"
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            ></motion.div>
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
              Climate-related risks in Hong Kong&apos;s building sector are already affecting <span className="text-red-800">costs, cash flow, asset value</span> and <span className="text-red-800">financing conditions</span>.
            </h2>
          </div>
        </motion.div>

        {/* 4 Evidence Cards */}
        <motion.div 
          className="grid grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Card 1 */}
          <motion.div variants={itemVariants} className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-lg hover:shadow-2xl hover:border-red-200 hover:-translate-y-2 transition-all duration-300 group flex flex-col relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-32 h-32 bg-red-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="w-14 h-14 bg-red-100 text-red-800 rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-inner">
              <AlertTriangle className="w-7 h-7" />
            </div>
            <div className="mb-4 relative z-10">
              <h3 className="text-4xl font-black text-slate-900 tracking-tighter group-hover:text-red-800 transition-colors leading-none">
                HK$241.7m
              </h3>
            </div>
            <p className="text-lg text-slate-600 font-medium leading-snug relative z-10">
              <span className="font-bold text-slate-800">Saola</span> property damage, business interruption and contractors&apos; all risks claims
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={itemVariants} className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-lg hover:shadow-2xl hover:border-blue-200 hover:-translate-y-2 transition-all duration-300 group flex flex-col relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-32 h-32 bg-blue-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="w-14 h-14 bg-blue-100 text-blue-800 rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-inner">
              <CloudRain className="w-7 h-7" />
            </div>
            <div className="mb-4 relative z-10">
              <h3 className="text-4xl font-black text-slate-900 tracking-tighter group-hover:text-blue-800 transition-colors leading-none">
                HK$1.60bn
              </h3>
            </div>
            <p className="text-lg text-slate-600 font-medium leading-snug relative z-10">
              Estimated total claims from the <span className="font-bold text-slate-800">Haikui-associated September 2023 rainstorm</span>
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={itemVariants} className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-lg hover:shadow-2xl hover:border-emerald-200 hover:-translate-y-2 transition-all duration-300 group flex flex-col relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-32 h-32 bg-emerald-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-inner">
              <Zap className="w-7 h-7" />
            </div>
            <div className="mb-4 relative z-10 flex items-center gap-3">
              <div className="bg-emerald-100 text-emerald-700 p-2 rounded-full shadow-sm">
                <TrendingUp className="w-6 h-6" strokeWidth={3} />
              </div>
              <h3 className="text-5xl font-black text-slate-900 tracking-tighter group-hover:text-emerald-800 transition-colors leading-none">
                23%
              </h3>
            </div>
            <p className="text-lg text-slate-600 font-medium leading-snug relative z-10">
              <span className="font-bold text-slate-800">Energy savings</span> from retrofit to the latest Building Energy Code
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div variants={itemVariants} className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-lg hover:shadow-2xl hover:border-amber-200 hover:-translate-y-2 transition-all duration-300 group flex flex-col relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-32 h-32 bg-amber-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="w-14 h-14 bg-amber-100 text-amber-800 rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-inner">
              <Landmark className="w-7 h-7" />
            </div>
            <div className="mb-4 relative z-10 flex items-center gap-3">
              <div className="bg-amber-100 text-amber-700 p-2 rounded-full shadow-sm">
                <TrendingUp className="w-6 h-6" strokeWidth={3} />
              </div>
              <h3 className="text-4xl font-black text-slate-900 tracking-tighter group-hover:text-amber-600 transition-colors leading-none">
                HK$2.5m
              </h3>
            </div>
            <p className="text-lg text-slate-600 font-medium leading-snug relative z-10">
              Eligible issuance subsidy under the <span className="font-bold text-slate-800">HKMA Green and Sustainable Finance Grant Scheme</span>
            </p>
          </motion.div>

        </motion.div>

      </div>
    </div>
  );
}