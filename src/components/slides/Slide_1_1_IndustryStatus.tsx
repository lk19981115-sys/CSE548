"use client";

import React from 'react';
import PolyULogo from '@/components/PolyULogo';
import { motion } from 'framer-motion';
import { Building2, Factory, AlertTriangle, Zap, CloudCog } from 'lucide-react';

export default function Slide_1_1_IndustryStatus() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
      
      {/* Header */}
      <div className="bg-white h-40 w-full flex items-center justify-between px-20 shadow-sm border-b border-slate-100 z-10 shrink-0">
        <div className="flex flex-col justify-center">
          <div className="text-xl text-red-900 font-semibold tracking-wide flex items-center gap-4 mb-2">
            <span className="w-8 h-1 bg-red-900 rounded-full"></span>
            SECTION 1.1
          </div>
          <h1 className="text-6xl font-black text-slate-800 tracking-tighter uppercase">
            Hong Kong Construction Industry: Climate Challenges
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
        
        {/* Left Column: Data & Text (Takes up more space to accommodate the cards) */}
        <div className="w-[55%] flex flex-col gap-6 h-full justify-center">
          
          {/* Card 1: Industry Status */}
          <motion.div variants={itemVariants} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex items-start gap-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-600"></div>
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-blue-100 transition-all">
              <Building2 className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-3 tracking-tight group-hover:text-blue-800 transition-colors">
                Industry Status
              </h2>
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-3 text-slate-600 text-lg font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                  Core pillar of Hong Kong's urban development
                </li>
                <li className="flex items-center gap-3 text-slate-600 text-lg font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                  World's highest high-rise density
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Card 2: Carbon Footprint (Highlight) */}
          <motion.div variants={itemVariants} className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
            {/* Background elements for the dark card */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-red-600/20 blur-3xl rounded-full pointer-events-none"></div>
            
            <div className="relative z-10 flex items-start gap-6">
              <div className="w-14 h-14 bg-red-500/20 text-red-400 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-all border border-red-500/30">
                <Factory className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-extrabold text-white mb-6 tracking-tight flex items-center gap-3">
                  Carbon Footprint
                  <span className="text-xs font-bold bg-red-500 text-white px-3 py-1 rounded-full uppercase tracking-widest">Critical</span>
                </h2>
                
                {/* Highlighted Data Grid */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-slate-800/80 rounded-2xl p-5 border border-slate-700/50 backdrop-blur-sm group-hover:border-red-500/30 transition-colors">
                    <div className="flex items-center gap-2 text-red-400 mb-1">
                      <Zap className="w-4 h-4" />
                      <span className="text-sm font-bold uppercase tracking-wider">Electricity</span>
                    </div>
                    <div className="text-[3rem] font-black text-white leading-none tracking-tighter mb-1">
                      90<span className="text-3xl text-slate-400">%</span>
                    </div>
                    <p className="text-slate-400 text-sm font-medium">of HK's total electricity use</p>
                  </div>

                  <div className="bg-slate-800/80 rounded-2xl p-5 border border-slate-700/50 backdrop-blur-sm group-hover:border-red-500/30 transition-colors">
                    <div className="flex items-center gap-2 text-red-400 mb-1">
                      <CloudCog className="w-4 h-4" />
                      <span className="text-sm font-bold uppercase tracking-wider">Emissions</span>
                    </div>
                    <div className="text-[3rem] font-black text-white leading-none tracking-tighter mb-1">
                      &gt;60<span className="text-3xl text-slate-400">%</span>
                    </div>
                    <p className="text-slate-400 text-sm font-medium">of local carbon emissions</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Key Pressures */}
          <motion.div variants={itemVariants} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex items-start gap-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-amber-500"></div>
            <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-amber-100 transition-all">
              <AlertTriangle className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-3 tracking-tight group-hover:text-amber-700 transition-colors">
                Key Pressures
              </h2>
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-3 text-slate-600 text-lg font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                  2050 Climate Action Blueprint
                </li>
                <li className="flex items-center gap-3 text-slate-600 text-lg font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                  <span className="font-bold text-slate-800">Stricter rules</span> + extreme weather risks
                </li>
              </ul>
            </div>
          </motion.div>

        </div>

        {/* Right Column: Image */}
        <motion.div variants={itemVariants} className="w-[45%] h-full py-4 flex flex-col">
          <div className="w-full h-full bg-slate-200 rounded-3xl border border-slate-300 shadow-inner relative overflow-hidden group">
            {/* The Image */}
            <img 
              src="/images/1.1.png" 
              alt="Hong Kong Skyline in Smog" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              onError={(e) => {
                // Fallback if image not yet uploaded
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.querySelector('.placeholder-text')?.classList.remove('hidden');
              }}
            />
            
            {/* Dark gradient overlay to make it look more cinematic/dramatic */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent mix-blend-multiply"></div>

            {/* Fallback Placeholder (Hidden by default, shown if image fails to load) */}
            <div className="placeholder-text hidden absolute inset-0 flex items-center justify-center text-slate-500 font-medium">
              Please add 1.1.png to public/images
            </div>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}