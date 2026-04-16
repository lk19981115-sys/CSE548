"use client";

import React from 'react';
import PolyULogo from '@/components/PolyULogo';
import { motion } from 'framer-motion';
import { FileText, TrendingDown } from 'lucide-react';

export default function Slide_6_4_Appendix() {
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
    <div className="flex flex-col h-full w-full bg-slate-900 relative overflow-hidden font-sans">
      {/* Dark theme for Appendix */}
      
      {/* Header */}
      <div className="bg-slate-800/50 h-40 w-full flex items-center justify-between px-20 shadow-sm border-b border-slate-700 z-10 shrink-0">
        <div className="flex flex-col justify-center">
          <div className="text-xl text-slate-400 font-semibold tracking-wide flex items-center gap-4 mb-2">
            <span className="w-8 h-1 bg-slate-500 rounded-full"></span>
            APPENDIX
          </div>
          <h1 className="text-6xl font-black text-white tracking-tighter uppercase">
            Selected Financial Evidence
          </h1>
        </div>
        {/* Optional: Add a light/dark mode logo or just keep text for dark mode if PolyULogo doesn't support dark mode well, using invert for now */}
        <div className="invert grayscale brightness-200">
          <PolyULogo layout="horizontal" knotSize={64} className="opacity-90" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center px-20 py-8 w-full max-w-[1600px] mx-auto min-h-0">
        
        <motion.div 
          className="flex gap-8 h-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column: Image Case */}
          <motion.div 
            variants={itemVariants} 
            className="flex-1 bg-slate-800 rounded-3xl p-8 border border-slate-700 shadow-xl flex flex-col group overflow-hidden relative"
            whileHover={{ y: -5 }}
          >
            <motion.div 
              className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            ></motion.div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center font-bold">1</div>
              <h3 className="text-2xl font-bold text-white">Haikui-associated Sept 2023 Rainstorm</h3>
            </div>
            
            <div className="flex-1 bg-slate-900 rounded-2xl border border-slate-700 mb-6 overflow-hidden flex items-center justify-center relative">
              <img src="https://www.weather.gov.hk/tc/education/friends_hko/e-newsletter/res/vol94/images/new_milestones_94_1.png" alt="Wong Tai Sin flood" className="w-full h-full object-cover opacity-80 mix-blend-luminosity" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-xs text-slate-400">Source: Hong Kong Observatory, Wong Tai Sin flood image</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
                <p className="text-sm text-slate-400 mb-1">Estimated Total Claims</p>
                <p className="text-2xl font-black text-blue-400">HK$1.60bn</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
                <p className="text-sm text-slate-400 mb-1">Direct Economic Losses</p>
                <p className="text-2xl font-black text-red-400">~HK$1.7bn</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Other Cases Grid */}
          <div className="flex-1 flex flex-col gap-6">
            
            {/* Saola */}
            <motion.div 
              variants={itemVariants} 
              className="bg-slate-800 rounded-3xl p-8 border border-slate-700 shadow-xl flex flex-col justify-center relative overflow-hidden group"
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              ></motion.div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-red-500/20 text-red-400 rounded-xl flex items-center justify-center font-bold">2</div>
                <h3 className="text-2xl font-bold text-white">Typhoon Saola 2023</h3>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-slate-400 mb-1">Estimated Total Claims</p>
                  <p className="text-3xl font-black text-red-400">HK$410.5m</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-400 mb-1">Direct Economic Losses</p>
                  <p className="text-3xl font-black text-orange-400">~HK$480m</p>
                </div>
              </div>
            </motion.div>

            {/* Retrofit & Financing (Side by side) */}
            <div className="flex gap-6 flex-1">
              <motion.div 
                variants={itemVariants} 
                className="flex-1 bg-slate-800 rounded-3xl p-6 border border-slate-700 shadow-xl flex flex-col justify-center text-center group overflow-hidden relative"
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                ></motion.div>
                <h3 className="text-xl font-bold text-white mb-2 relative z-10">Retrofit Economics</h3>
                <p className="text-4xl font-black text-emerald-400 mb-2 relative z-10">Up to 23%</p>
                <p className="text-sm text-slate-400 relative z-10">Energy savings from retrofitting central building services equipment to the latest Building Energy Code.</p>
              </motion.div>

              <motion.div 
                variants={itemVariants} 
                className="flex-1 bg-slate-800 rounded-3xl p-6 border border-slate-700 shadow-xl flex flex-col justify-center text-center group overflow-hidden relative"
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                ></motion.div>
                <h3 className="text-xl font-bold text-white mb-2 relative z-10">Financing Support</h3>
                <p className="text-4xl font-black text-amber-400 mb-2 relative z-10">HK$2.5m</p>
                <p className="text-sm text-slate-400 relative z-10">Issuance subsidy under the HKMA Green and Sustainable Finance Grant Scheme.</p>
              </motion.div>
            </div>

            {/* Disclosure quote */}
            <motion.div 
              variants={itemVariants} 
              className="bg-slate-800 rounded-3xl p-6 border-l-8 border-l-purple-500 border-y border-r border-slate-700 shadow-xl flex items-start gap-6 group hover:border-slate-600 transition-all duration-300 relative overflow-hidden"
              whileHover={{ y: -5 }}
            >
               <motion.div 
                 className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
               ></motion.div>
               <div className="w-14 h-14 bg-purple-500/20 text-purple-400 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 relative z-10">
                 <FileText className="w-7 h-7" />
               </div>
               <div className="flex-1 relative z-10">
                 <div className="flex justify-between items-start mb-2">
                   <h3 className="text-xl font-bold text-white">Balance-sheet Disclosure</h3>
                   <span className="text-sm font-semibold bg-slate-700 text-slate-300 px-3 py-1 rounded-full">Hongkong Land</span>
                 </div>
                 <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50 mt-3 flex gap-4 items-center">
                   <TrendingDown className="w-8 h-8 text-slate-500 shrink-0" />
                   <p className="text-slate-400 font-medium leading-relaxed">
                     &quot;Climate risks may affect carrying amounts, insurability and impairment.&quot;
                   </p>
                 </div>
               </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}