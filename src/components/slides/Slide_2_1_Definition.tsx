"use client";

import React from 'react';
import PolyULogo from '@/components/PolyULogo';
import { motion } from 'framer-motion';
import { CloudLightning, CloudRain, Building2 } from 'lucide-react';

export default function Slide_2_1_Definition() {
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
            SECTION 2.1
          </div>
          <h1 className="text-6xl font-black text-slate-800 tracking-tighter uppercase">
            Definition & 2023 Loss Overview
          </h1>
        </div>
        <PolyULogo layout="horizontal" knotSize={64} className="opacity-90" />
      </div>

      {/* Main Content Area */}
      <motion.div 
        className="flex-1 w-full max-w-[1600px] mx-auto px-20 py-10 flex gap-10 min-h-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Left Column: Definition */}
        <motion.div variants={itemVariants} className="w-[40%] flex flex-col h-full">
          <div className="bg-slate-100/80 rounded-3xl p-8 border border-slate-200/60 shadow-sm flex flex-col gap-6 h-full">
            <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight mb-2">
              Defining the Climate Risks
            </h2>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
              <p className="text-slate-600 text-xl leading-relaxed">
                <span className="font-bold text-slate-900 group-hover:text-red-800 transition-colors">Acute Physical Risks: </span> 
                driven by sudden events such as super typhoons and extreme rainfall.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow group flex-1">
              <p className="text-slate-600 text-xl leading-relaxed">
                <span className="font-bold text-slate-900 group-hover:text-red-800 transition-colors">Asset Sensitivity: </span> 
                they not only cause direct asset write-offs through physical damage but also trigger industry-wide business interruption, turning weather stress into deep financial risks.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Loss Overview */}
        <div className="w-[60%] flex flex-col gap-6 h-full">
          
          {/* Top Big Card */}
          <motion.div variants={itemVariants} className="bg-slate-900 rounded-3xl p-12 shadow-xl relative overflow-hidden flex flex-col items-center justify-center text-center shrink-0 group">
            {/* Subtle background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-red-600/20 blur-3xl rounded-full pointer-events-none"></div>
            
            <h3 className="text-red-400 font-bold tracking-widest text-lg uppercase mb-6 relative z-10">
              2023 Direct Economic Loss
            </h3>
            
            <div className="text-[7rem] font-black text-white leading-none tracking-tighter mb-8 relative z-10 drop-shadow-2xl group-hover:scale-105 transition-transform duration-500">
              HK$9.4 <span className="text-slate-300 ml-1">B</span>
            </div>
            
            <p className="text-slate-300 text-xl font-medium relative z-10 tracking-wide">
              Impact of Typhoon Saola & Century Rainstorm
            </p>
          </motion.div>

          {/* Bottom 3 Cards */}
          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 flex-1">
            
            {/* Card 1 */}
            <motion.div 
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col items-center text-center justify-center hover:shadow-2xl hover:border-blue-300 transition-all duration-300 group cursor-default"
            >
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
                <CloudLightning className="w-10 h-10 text-blue-600" strokeWidth={1.5} />
              </div>
              <h4 className="font-extrabold text-2xl text-slate-900 mb-3 tracking-tight group-hover:text-blue-900 transition-colors">Typhoon Saola</h4>
              <p className="text-slate-500 text-base font-medium">Severe Wind & Storm Surge</p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col items-center text-center justify-center hover:shadow-2xl hover:border-sky-300 transition-all duration-300 group cursor-default"
            >
              <div className="w-20 h-20 bg-sky-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-sky-100 group-hover:scale-110 transition-all duration-300">
                <CloudRain className="w-10 h-10 text-sky-500" strokeWidth={1.5} />
              </div>
              <h4 className="font-extrabold text-2xl text-slate-900 mb-3 tracking-tight group-hover:text-sky-900 transition-colors">Century Rainstorm</h4>
              <p className="text-slate-500 text-base font-medium">Unprecedented Heavy Rainfall</p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col items-center text-center justify-center hover:shadow-2xl hover:border-red-300 transition-all duration-300 group cursor-default"
            >
              <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-100 group-hover:scale-110 transition-all duration-300">
                <Building2 className="w-10 h-10 text-red-700" strokeWidth={1.5} />
              </div>
              <h4 className="font-extrabold text-2xl text-slate-900 mb-3 tracking-tight group-hover:text-red-900 transition-colors">Construction Loss</h4>
              <p className="text-slate-500 text-base font-medium">Site Damage & Delays</p>
            </motion.div>

          </motion.div>
        </div>

      </motion.div>
    </div>
  );
}