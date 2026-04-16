"use client";

import React from 'react';
import PolyULogo from '@/components/PolyULogo';
import { motion } from 'framer-motion';
import { Building, ServerCrash, TrendingUp, ShieldAlert } from 'lucide-react';

export default function Slide_2_5_PostCompletion() {
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
            SECTION 2.5
          </div>
          <h1 className="text-6xl font-black text-slate-800 tracking-tighter uppercase">
            Post-Completion Crises
          </h1>
        </div>
        <PolyULogo layout="horizontal" knotSize={64} className="opacity-90" />
      </div>

      {/* Main Content Area */}
      <motion.div 
        className="flex-1 w-full max-w-[1600px] mx-auto px-20 py-10 flex gap-12 min-h-0 items-stretch"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Left Column: Image Placeholder (No text) */}
        <motion.div variants={itemVariants} className="w-[45%] flex flex-col items-center justify-center h-full py-4">
          <div className="w-full h-full bg-slate-100 rounded-3xl border border-slate-200 shadow-inner relative overflow-hidden group">
            {/* The Image (Once you add it to public/images) */}
            <img 
              src="https://raw.githubusercontent.com/lk19981115-sys/CSE548/main/public/images/2.5.png" 
              alt="Post Completion Damage" 
              className="absolute inset-0 w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500" 
              onError={(e) => {
                // Fallback if image not yet uploaded
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.querySelector('.placeholder-svg')?.classList.remove('hidden');
              }}
            />
            
            {/* Fallback Placeholder (Hidden by default, shown if image fails to load) */}
            <div className="placeholder-svg hidden absolute inset-0 flex items-center justify-center text-slate-300">
              <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Content Cards */}
        <div className="w-[55%] flex flex-col gap-8 h-full justify-center py-4">
          
          {/* Card 1: Damage to Completed Assets */}
          <motion.div variants={itemVariants} className="bg-slate-100/80 rounded-3xl p-8 border-l-8 border-l-blue-600 border-y border-r border-slate-200 shadow-md hover:shadow-xl transition-shadow group flex-1 flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold text-blue-800 mb-6 tracking-tight">
              Damage to Completed Assets
            </h2>
            
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-1">
                  <Building className="w-4 h-4" />
                </div>
                <p className="text-slate-600 text-lg leading-relaxed">
                  <span className="font-bold text-slate-900">Building Envelopes: </span> 
                  High winds and flying debris often lead to catastrophic damage of modern glass curtain wall systems, compromising building integrity.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center shrink-0 mt-1">
                  <ServerCrash className="w-4 h-4" />
                </div>
                <p className="text-slate-600 text-lg leading-relaxed">
                  <span className="font-bold text-slate-900">Critical Systems Failure: </span> 
                  Flooding (e.g., <span className="font-bold text-red-700">Wong Tai Sin Centre</span> incident) damages M&E rooms, leading to prolonged operational shutdowns and massive repair costs.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Industry Impact & The Way Forward */}
          <motion.div variants={itemVariants} className="bg-emerald-50/50 rounded-3xl p-8 border-l-8 border-l-emerald-600 border-y border-r border-emerald-100 shadow-md hover:shadow-xl transition-shadow group flex-1 flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold text-emerald-800 mb-6 tracking-tight">
              Industry Impact & The Way Forward
            </h2>
            
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-1">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <p className="text-slate-600 text-lg leading-relaxed">
                  <span className="font-bold text-slate-900">Rising Insurance Premiums: </span> 
                  Substantial climate-related losses have driven up insurance costs significantly for future construction projects.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 mt-1">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <p className="text-slate-600 text-lg leading-relaxed">
                  <span className="font-bold text-slate-900">Urgent Call to Action: </span> 
                  Need for robust risk assessment, improved building resilience, and tailored climate warning systems to mitigate future crises.
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </motion.div>
    </div>
  );
}