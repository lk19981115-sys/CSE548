"use client";

import React from 'react';
import PolyULogo from '@/components/PolyULogo';
import { motion } from 'framer-motion';
import { CloudLightning, Wind, TrendingDown } from 'lucide-react';

export default function Slide_2_2_Saola() {
  // Animation variants
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <div className="flex flex-col h-full w-full bg-slate-50 relative overflow-hidden font-sans">
      
      {/* Header - Applying the strict typography rule from memory */}
      <div className="bg-white h-40 w-full flex items-center justify-between px-20 shadow-sm border-b border-slate-100 z-10 shrink-0">
        <div className="flex flex-col justify-center">
          <div className="text-xl text-red-900 font-semibold tracking-wide flex items-center gap-4 mb-2">
            <span className="w-8 h-1 bg-red-900 rounded-full"></span>
            SECTION 2.2
          </div>
          <h1 className="text-6xl font-black text-slate-800 tracking-tighter uppercase">
            Major Climate Events: Saola & Century Rainstorm
          </h1>
        </div>
        <PolyULogo layout="horizontal" knotSize={64} className="opacity-90" />
      </div>

      {/* Main Content Area */}
      <motion.div 
        className="flex-1 w-full max-w-[1600px] mx-auto px-20 py-10 flex gap-12 min-h-0 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Left Column: Key Impacts & Consequences */}
        <motion.div variants={itemVariants} className="w-1/2 flex flex-col h-full justify-center">
          <div className="bg-white rounded-3xl p-10 border border-slate-200/60 shadow-xl flex flex-col gap-8">
            
            {/* Top Red Header Card */}
            <div className="bg-red-800 rounded-2xl p-8 shadow-md relative overflow-hidden group hover:shadow-lg transition-all duration-300 hover:bg-red-900">
              <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-500">
                <CloudLightning className="w-48 h-48 text-white" />
              </div>
              <div className="flex items-center gap-6 relative z-10">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/30 shrink-0">
                  <CloudLightning className="w-10 h-10" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="text-4xl font-extrabold text-white tracking-tight mb-2">Typhoon Saola</h2>
                  <p className="text-red-100 text-xl font-medium tracking-wide">Severe Tropical Cyclone (Sept 2023)</p>
                </div>
              </div>
            </div>

            {/* Impacts Section */}
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-extrabold text-red-900 tracking-tight flex items-center gap-3">
                <span className="w-1.5 h-6 bg-red-900 rounded-full"></span>
                Key Impacts & Consequences
              </h3>
              
              {/* Meteorological Impact */}
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-md transition-shadow group flex items-start gap-6">
                <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center shrink-0 border border-slate-100 group-hover:scale-110 transition-transform">
                  <Wind className="w-6 h-6 text-slate-600 group-hover:text-red-800 transition-colors" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-red-900 transition-colors">Meteorological Impact</h4>
                  <p className="text-slate-600 text-lg leading-relaxed font-medium">
                    Issued the Hurricane Signal No. 10, with maximum gusts reaching <span className="font-bold text-slate-900">198 km/h</span>.
                  </p>
                </div>
              </div>

              {/* Economic Consequences */}
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-md transition-shadow group flex items-start gap-6">
                <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center shrink-0 border border-slate-100 group-hover:scale-110 transition-transform">
                  <TrendingDown className="w-6 h-6 text-slate-600 group-hover:text-red-800 transition-colors" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-red-900 transition-colors">Economic Consequences</h4>
                  <p className="text-slate-600 text-lg leading-relaxed font-medium">
                    Caused an estimated <span className="font-bold text-red-800 text-xl mx-1">HK$2.4 billion</span> in direct economic losses to infrastructure and businesses.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div variants={itemVariants} className="w-1/2 flex flex-col items-center justify-center h-full py-4">
          <div className="w-full h-full bg-slate-100 rounded-3xl border border-slate-200 shadow-inner relative overflow-hidden group">
            <img 
              src="https://raw.githubusercontent.com/lk19981115-sys/CSE548/main/public/images/2.2.png" 
              alt="Typhoon Saola Damage" 
              className="absolute inset-0 w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500" 
            />
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}