"use client";

import React from 'react';
import PolyULogo from '@/components/PolyULogo';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Zap, ThermometerSun } from 'lucide-react';

export default function Slide_4_1_PolicyRisk_2() {
  
  // Animation variants for staggered card entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <div className="flex flex-col h-full w-full bg-slate-50 relative overflow-hidden font-sans">
      
      {/* Header - Consistent with Slide 4.1.1 */}
      <div className="bg-white h-36 w-full flex items-center justify-between px-20 shadow-sm border-b border-slate-100 z-10 shrink-0">
        <div className="flex flex-col gap-2">
          <div className="font-medium uppercase tracking-widest text-red-900 text-lg flex items-center gap-3">
            <span className="w-8 h-px bg-red-900/40"></span>
            SECTION 4.1
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900">
            Policy Risk in Building Efficiency and Decarbonisation
          </h1>
        </div>
        <PolyULogo layout="horizontal" knotSize={64} className="opacity-90" />
      </div>

      {/* Main Content Area - 2x2 Grid */}
      <div className="flex-1 w-full max-w-[1500px] mx-auto px-20 py-8 flex flex-col justify-center min-h-0">
        
        {/* Subtle Section Description */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 pl-4 border-l-4 border-red-800/30 shrink-0"
        >
          <p className="text-xl text-slate-600 font-medium max-w-4xl leading-relaxed">
            Hong Kong's Local Policy Landscape: <span className="font-semibold text-slate-800">Four key regulatory frameworks</span> shaping building efficiency and environmental compliance.
          </p>
        </motion.div>

        {/* The Grid */}
        <motion.div 
          className="grid grid-cols-2 gap-6 flex-1 min-h-0 pb-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* Card 1: BEEO */}
          <motion.div variants={itemVariants} className="group relative bg-white rounded-3xl p-8 border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-red-200 flex flex-col overflow-hidden">
            {/* Top-left Number Indicator */}
            <div className="absolute top-0 left-0 bg-red-800 text-white w-12 h-12 flex items-center justify-center text-2xl font-black rounded-br-2xl shadow-sm z-20">
              1
            </div>
            <div className="absolute -right-6 -bottom-10 text-[10rem] font-black text-slate-50 leading-none select-none pointer-events-none group-hover:text-red-50/50 transition-colors duration-500 z-0">
              1
            </div>
            
            <div className="relative z-10 flex flex-col h-full pl-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-3">
                    Implemented in 2012
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">BEEO</h3>
                  <div className="text-xs font-semibold text-slate-500 mt-1">Buildings Energy Efficiency Ordinance</div>
                </div>
                <div className="w-12 h-12 bg-red-50 text-red-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm border border-red-100 shrink-0">
                  <ShieldCheck strokeWidth={1.5} className="w-6 h-6" />
                </div>
              </div>
              
              <div className="flex gap-1.5 mb-4 shrink-0">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-red-800 transition-colors duration-300" style={{ transitionDelay: `${i * 50}ms` }}></div>
                ))}
              </div>

              <p className="text-slate-600 text-base leading-relaxed mt-auto">
                Regulates energy efficiency standards of building services. The <span className="font-bold text-red-800">2025 amendment</span> sets an aggressive target by extending scope, shortening audit intervals, and mandating technical disclosures.
              </p>
            </div>
          </motion.div>

          {/* Card 2: OTTV/RTTV (Cap. 123M) */}
          <motion.div variants={itemVariants} className="group relative bg-white rounded-3xl p-8 border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-red-200 flex flex-col overflow-hidden">
            {/* Top-left Number Indicator */}
            <div className="absolute top-0 left-0 bg-red-800 text-white w-12 h-12 flex items-center justify-center text-2xl font-black rounded-br-2xl shadow-sm z-20">
              2
            </div>
            <div className="absolute -right-6 -bottom-10 text-[10rem] font-black text-slate-50 leading-none select-none pointer-events-none group-hover:text-red-50/50 transition-colors duration-500 z-0">
              2
            </div>
            
            <div className="relative z-10 flex flex-col h-full pl-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-3">
                    Cap. 123M
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">OTTV & RTTV</h3>
                  <div className="text-xs font-semibold text-slate-500 mt-1">Building (Energy Efficiency) Regulation</div>
                </div>
                <div className="w-12 h-12 bg-red-50 text-red-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm border border-red-100 shrink-0">
                  <ThermometerSun strokeWidth={1.5} className="w-6 h-6" />
                </div>
              </div>
              
              <div className="flex gap-1.5 mb-4 shrink-0">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-red-800 transition-colors duration-300" style={{ transitionDelay: `${i * 50}ms` }}></div>
                ))}
              </div>

              <p className="text-slate-600 text-base leading-relaxed mt-auto">
                Mandates suitable Overall Thermal Transfer Value (<span className="font-bold text-red-800">OTTV</span>) and Residential Thermal Transfer Value (<span className="font-bold text-red-800">RTTV</span>) for envelopes. Both standards were rigorously <span className="font-bold text-red-800">tightened in 2019 and 2022</span>.
              </p>
            </div>
          </motion.div>

          {/* Card 3: MEELS */}
          <motion.div variants={itemVariants} className="group relative bg-white rounded-3xl p-8 border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-red-200 flex flex-col overflow-hidden">
            {/* Top-left Number Indicator */}
            <div className="absolute top-0 left-0 bg-red-800 text-white w-12 h-12 flex items-center justify-center text-2xl font-black rounded-br-2xl shadow-sm z-20">
              3
            </div>
            <div className="absolute -right-6 -bottom-10 text-[10rem] font-black text-slate-50 leading-none select-none pointer-events-none group-hover:text-red-50/50 transition-colors duration-500 z-0">
              3
            </div>
            
            <div className="relative z-10 flex flex-col h-full pl-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-3">
                    Implemented in 2009
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">MEELS</h3>
                  <div className="text-xs font-semibold text-slate-500 mt-1">Mandatory Energy Efficiency Labelling Scheme</div>
                </div>
                <div className="w-12 h-12 bg-red-50 text-red-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm border border-red-100 shrink-0">
                  <Zap strokeWidth={1.5} className="w-6 h-6" />
                </div>
              </div>
              
              <div className="flex gap-1.5 mb-4 shrink-0">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-red-800 transition-colors duration-300" style={{ transitionDelay: `${i * 50}ms` }}></div>
                ))}
              </div>

              <p className="text-slate-600 text-base leading-relaxed mt-auto">
                Provides a five-grade system currently covering 11 types of electrical products. This expanded scope accounts for about <span className="font-bold text-red-800">80% of total energy consumption</span> in the residential sector.
              </p>
            </div>
          </motion.div>

          {/* Card 4: BEAM Plus */}
          <motion.div variants={itemVariants} className="group relative bg-white rounded-3xl p-8 border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-red-200 flex flex-col overflow-hidden">
            {/* Top-left Number Indicator (Like original PPT) */}
            <div className="absolute top-0 left-0 bg-red-800 text-white w-12 h-12 flex items-center justify-center text-2xl font-black rounded-br-2xl shadow-sm z-20">
              4
            </div>
            {/* Giant Watermark Number */}
            <div className="absolute -right-6 -bottom-10 text-[10rem] font-black text-slate-50 leading-none select-none pointer-events-none group-hover:text-red-50/50 transition-colors duration-500 z-0">
              4
            </div>
            
            <div className="relative z-10 flex flex-col h-full pl-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-3">
                    Launched in 2010
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">BEAM Plus</h3>
                </div>
                <div className="w-12 h-12 bg-red-50 text-red-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm border border-red-100 shrink-0">
                  <Award strokeWidth={1.5} className="w-6 h-6" />
                </div>
              </div>
              
              {/* 5 Dots Indicator */}
              <div className="flex gap-1.5 mb-4 shrink-0">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-red-800 transition-colors duration-300" style={{ transitionDelay: `${i * 50}ms` }}></div>
                ))}
              </div>

              <p className="text-slate-600 text-base leading-relaxed mt-auto">
                A leading assessment tool covering <span className="font-bold text-red-800">energy use and carbon emissions</span>, climate adaptation, and smart innovations. It has been widely applied across New Buildings, Existing Buildings, and Neighbourhoods.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}