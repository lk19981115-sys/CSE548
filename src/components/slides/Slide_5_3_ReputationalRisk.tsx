"use client";

import React from 'react';
import PolyULogo from '@/components/PolyULogo';
import { motion } from 'framer-motion';
import { Leaf, AlertTriangle, Skull, ArrowRight } from 'lucide-react';

export default function Slide_5_3_ReputationalRisk() {
  
  // Animation variants for the cascading domino effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4, // Delays each step
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50, y: -20, rotate: -5 },
    visible: { 
      opacity: 1, 
      x: 0, 
      y: 0, 
      rotate: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <div className="flex flex-col h-full w-full bg-slate-50 relative overflow-hidden font-sans">
      {/* Background Decorative Gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-slate-200/50 to-transparent pointer-events-none"></div>

      {/* Header */}
      <div className="bg-white h-36 w-full flex items-center justify-between px-20 shadow-sm border-b border-slate-100 z-10 shrink-0">
        <div className="flex flex-col gap-2">
          <div className="font-medium uppercase tracking-widest text-red-900 text-lg flex items-center gap-3">
            <span className="w-8 h-px bg-red-900/40"></span>
            SECTION 5.3
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900">
            Reputational Risk: The Domino Effect of <span className="text-red-800 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-900">Greenwashing</span>
          </h1>
        </div>
        <PolyULogo layout="horizontal" knotSize={64} className="opacity-90" />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 w-full max-w-[1600px] mx-auto px-20 py-12 flex flex-col justify-center min-h-0 relative z-10">
        
        <motion.div 
          className="flex-1 w-full relative flex items-center justify-center pt-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Central Connecting Line (The Domino Path) */}
          <div className="absolute top-1/2 left-20 right-20 h-1 bg-gradient-to-r from-emerald-200 via-amber-300 to-slate-800 -translate-y-1/2 rounded-full hidden lg:block opacity-30 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full relative z-10">
            
            {/* Step 1: Symbolic ESG (Greenwashing) */}
            <motion.div variants={itemVariants} className="flex flex-col relative group">
              {/* Connector Arrow to next step */}
              <div className="hidden lg:flex absolute top-1/2 -right-8 -translate-y-1/2 z-20 w-16 h-16 items-center justify-center">
                <motion.div 
                  animate={{ x: [0, 10, 0] }} 
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-8 h-8 text-slate-300 group-hover:text-emerald-500 transition-colors" />
                </motion.div>
              </div>

              {/* Card */}
              <div className="bg-white rounded-3xl p-10 border border-emerald-100 shadow-lg relative overflow-hidden h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-900/10">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-300 to-emerald-500"></div>
                
                {/* Step Number & Icon */}
                <div className="flex items-start justify-between mb-8">
                  <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 border border-emerald-100 group-hover:scale-110 transition-transform shadow-sm">
                    <Leaf className="w-8 h-8" />
                  </div>
                  <div className="text-6xl font-black text-slate-100 group-hover:text-emerald-50 transition-colors pointer-events-none select-none">
                    01
                  </div>
                </div>

                <div className="mb-6">
                  <h2 className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-2">The False Start</h2>
                  <h3 className="text-3xl font-extrabold text-slate-900 leading-tight">Symbolic ESG</h3>
                  <div className="text-lg font-bold text-emerald-700/70 mt-1">(Greenwashing)</div>
                </div>

                <div className="bg-emerald-50/50 rounded-xl p-5 border border-emerald-100/50 mt-auto">
                  <p className="text-lg text-slate-700 leading-relaxed font-medium">
                    <span className="font-bold text-emerald-900">Textual claims</span> completely detached from actual performance data.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Step 2: Capital Penalty */}
            <motion.div variants={itemVariants} className="flex flex-col relative group mt-0 lg:mt-16">
              {/* Connector Arrow to next step */}
              <div className="hidden lg:flex absolute top-1/2 -right-8 -translate-y-1/2 z-20 w-16 h-16 items-center justify-center">
                <motion.div 
                  animate={{ x: [0, 10, 0] }} 
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                >
                  <ArrowRight className="w-8 h-8 text-slate-300 group-hover:text-amber-500 transition-colors" />
                </motion.div>
              </div>

              {/* Card */}
              <div className="bg-white rounded-3xl p-10 border border-amber-200 shadow-xl relative overflow-hidden h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-900/10">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 to-orange-500"></div>
                
                {/* Step Number & Icon */}
                <div className="flex items-start justify-between mb-8">
                  <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 border border-amber-100 group-hover:scale-110 transition-transform shadow-sm">
                    <AlertTriangle className="w-8 h-8" />
                  </div>
                  <div className="text-6xl font-black text-slate-100 group-hover:text-amber-50 transition-colors pointer-events-none select-none">
                    02
                  </div>
                </div>

                <div className="mb-6">
                  <h2 className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-2">The Market Reaction</h2>
                  <h3 className="text-3xl font-extrabold text-slate-900 leading-tight">Capital Penalty</h3>
                </div>

                <div className="bg-amber-50/50 rounded-xl p-5 border border-amber-100/50 mt-auto flex flex-col gap-3">
                  <p className="text-lg text-slate-700 leading-relaxed font-medium flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0 mt-2"></span>
                    <span>Surging <span className="font-bold text-amber-900">WACC</span> (Weighted Average Cost of Capital).</span>
                  </p>
                  <p className="text-lg text-slate-700 leading-relaxed font-medium flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0 mt-2"></span>
                    <span><span className="font-bold text-amber-900">Exclusion</span> from Green Finance channels.</span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Step 3: Obsolescence Risk */}
            <motion.div variants={itemVariants} className="flex flex-col relative group mt-0 lg:mt-32">
              {/* Card */}
              <div className="bg-slate-900 rounded-3xl p-10 border border-slate-800 shadow-2xl relative overflow-hidden h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-900/30">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 to-red-800"></div>
                <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-red-900/20 blur-3xl rounded-full pointer-events-none group-hover:bg-red-900/40 transition-colors"></div>
                
                {/* Step Number & Icon */}
                <div className="flex items-start justify-between mb-8 relative z-10">
                  <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center text-red-500 border border-slate-700 group-hover:scale-110 transition-transform shadow-inner">
                    <Skull className="w-8 h-8" />
                  </div>
                  <div className="text-6xl font-black text-slate-800 group-hover:text-slate-700 transition-colors pointer-events-none select-none">
                    03
                  </div>
                </div>

                <div className="mb-6 relative z-10">
                  <h2 className="text-sm font-bold tracking-widest text-red-500 uppercase mb-2">The Fatal Blow</h2>
                  <h3 className="text-[2.5rem] font-black text-white leading-tight tracking-tight">Obsolescence Risk</h3>
                </div>

                <div className="bg-slate-800/80 rounded-xl p-5 border border-slate-700 mt-auto relative z-10 flex flex-col gap-3">
                  <p className="text-lg text-slate-300 leading-relaxed font-medium flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-500 shrink-0 mt-2"></span>
                    <span>Massive <span className="font-bold text-white">tenant boycott</span> from premium corporations.</span>
                  </p>
                  <p className="text-lg text-slate-300 leading-relaxed font-medium flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-500 shrink-0 mt-2"></span>
                    <span>Complete <span className="font-bold text-white">liquidity drain</span> for the asset.</span>
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>

        {/* References / Sources */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="w-full flex justify-start shrink-0 mt-8 pl-2"
        >
          <p className="text-base text-slate-500 font-semibold">
            Sources: Xu (2025); PwC (2025)
          </p>
        </motion.div>

      </div>
    </div>
  );
}