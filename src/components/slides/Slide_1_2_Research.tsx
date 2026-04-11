"use client";

import React from 'react';
import PolyULogo from '@/components/PolyULogo';
import { motion } from 'framer-motion';
import { Search, ThermometerSun, Target, ArrowRight, ShieldCheck, Factory, Sprout, CloudLightning, TrendingDown } from 'lucide-react';

export default function Slide_1_2_Research() {
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
            SECTION 1.2
          </div>
          <h1 className="text-6xl font-black text-slate-800 tracking-tighter uppercase">
            Our Research: TCFD Framework & Focus
          </h1>
        </div>
        <PolyULogo layout="horizontal" knotSize={64} className="opacity-90" />
      </div>

      {/* Main Content Area */}
      <motion.div 
        className="flex-1 w-full max-w-[1600px] mx-auto px-20 py-10 flex flex-col justify-center min-h-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Top Two Cards (Method & Risk Types) */}
        <div className="flex gap-8 mb-8">
          
          {/* Research Method Card */}
          <motion.div variants={itemVariants} className="flex-1 bg-white rounded-3xl p-8 border-l-8 border-l-blue-600 border-y border-r border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-110 transition-all duration-500">
              <Search className="w-48 h-48 text-blue-900" />
            </div>
            
            <div className="flex items-center gap-5 mb-6 relative z-10">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-blue-100 transition-transform">
                <Search className="w-8 h-8" />
              </div>
              <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight group-hover:text-blue-800 transition-colors">
                Research Method
              </h2>
            </div>
            
            <div className="flex flex-col gap-4 relative z-10">
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 flex items-start gap-4 group/item hover:border-blue-200 hover:bg-blue-50/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-white text-blue-600 flex items-center justify-center shrink-0 shadow-sm border border-slate-200 mt-0.5">
                  <span className="font-bold text-lg">01</span>
                </div>
                <div>
                  <p className="text-slate-800 text-2xl font-bold mb-1 group-hover/item:text-blue-900 transition-colors">TCFD Framework</p>
                  <p className="text-slate-500 text-xl font-medium">Global climate risk standard</p>
                </div>
              </div>
              
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 flex items-start gap-4 group/item hover:border-blue-200 hover:bg-blue-50/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-white text-blue-600 flex items-center justify-center shrink-0 shadow-sm border border-slate-200 mt-0.5">
                  <span className="font-bold text-lg">02</span>
                </div>
                <div>
                  <p className="text-slate-800 text-2xl font-bold mb-1 group-hover/item:text-blue-900 transition-colors">Core Focus</p>
                  <p className="text-slate-500 text-xl font-medium">Strategy & Risk Management</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Climate Risk Types Card */}
          <motion.div variants={itemVariants} className="flex-1 bg-white rounded-3xl p-8 border-l-8 border-l-red-800 border-y border-r border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-110 transition-all duration-500">
              <ThermometerSun className="w-48 h-48 text-red-900" />
            </div>

            <div className="flex items-center gap-5 mb-6 relative z-10">
              <div className="w-16 h-16 bg-red-50 text-red-800 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-red-100 transition-transform">
                <ThermometerSun className="w-8 h-8" />
              </div>
              <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight group-hover:text-red-900 transition-colors">
                Climate Risk Types
              </h2>
            </div>
            
            <div className="flex flex-col gap-4 relative z-10">
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 flex items-center justify-between group/item hover:border-red-200 hover:bg-red-50/30 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-white text-red-600 flex items-center justify-center shrink-0 shadow-sm border border-slate-200">
                    <CloudLightning className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-slate-800 text-2xl font-bold group-hover/item:text-red-900 transition-colors">Physical Risks</p>
                    <p className="text-slate-500 text-lg font-medium uppercase tracking-wider">e.g. Typhoons</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 flex items-center justify-between group/item hover:border-red-200 hover:bg-red-50/30 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-white text-emerald-600 flex items-center justify-center shrink-0 shadow-sm border border-slate-200">
                    <Factory className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-slate-800 text-2xl font-bold group-hover/item:text-emerald-900 transition-colors">Transition Risks</p>
                    <p className="text-slate-500 text-lg font-medium uppercase tracking-wider">e.g. New low-carbon rules</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Banner Card (Research Goal) */}
        <motion.div variants={itemVariants} className="w-full bg-slate-900 rounded-3xl p-10 border border-slate-800 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-2 h-full bg-amber-500"></div>
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-amber-500/10 blur-3xl rounded-full pointer-events-none group-hover:bg-amber-500/20 transition-colors duration-500"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            
            {/* Goal Title */}
            <div className="flex flex-col items-center justify-center shrink-0 border-r border-slate-700/50 pr-12">
              <div className="w-20 h-20 bg-slate-800 rounded-2xl flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 group-hover:text-amber-300 transition-all shadow-inner border border-slate-700">
                <Target className="w-10 h-10" />
              </div>
              <h2 className="text-4xl font-extrabold text-white tracking-tight">
                Research Goal
              </h2>
            </div>

            {/* Goal Steps (Horizontal flow) */}
            <div className="flex-1 flex items-center justify-between w-full">
              
              <div className="flex flex-col items-center text-center gap-3 flex-1 group/step">
                <div className="w-14 h-14 rounded-full bg-slate-800 border border-slate-700 text-slate-300 flex items-center justify-center group-hover/step:bg-amber-500/20 group-hover/step:text-amber-400 group-hover/step:border-amber-500/30 transition-all">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <p className="text-slate-300 text-2xl font-medium max-w-[280px] group-hover/step:text-white transition-colors">
                  Full building lifecycle analysis
                </p>
              </div>

              <ArrowRight className="w-10 h-10 text-slate-700 shrink-0 mx-4" />

              <div className="flex flex-col items-center text-center gap-3 flex-1 group/step">
                <div className="w-14 h-14 rounded-full bg-slate-800 border border-slate-700 text-slate-300 flex items-center justify-center group-hover/step:bg-amber-500/20 group-hover/step:text-amber-400 group-hover/step:border-amber-500/30 transition-all">
                  <TrendingDown className="w-8 h-8" />
                </div>
                <p className="text-slate-300 text-2xl font-medium max-w-[280px] group-hover/step:text-white transition-colors">
                  Quantify climate risk impacts
                </p>
              </div>

              <ArrowRight className="w-10 h-10 text-slate-700 shrink-0 mx-4" />

              <div className="flex flex-col items-center text-center gap-3 flex-1 group/step">
                <div className="w-14 h-14 rounded-full bg-slate-800 border border-slate-700 text-slate-300 flex items-center justify-center group-hover/step:bg-amber-500/20 group-hover/step:text-amber-400 group-hover/step:border-amber-500/30 transition-all">
                  <Sprout className="w-8 h-8" />
                </div>
                <p className="text-slate-300 text-2xl font-medium max-w-[320px] group-hover/step:text-white transition-colors">
                  Build low-carbon, climate-resilient buildings
                </p>
              </div>

            </div>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}