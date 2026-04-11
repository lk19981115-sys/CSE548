"use client";

import React from 'react';
import PolyULogo from '@/components/PolyULogo';
import { motion } from 'framer-motion';
import { Settings, ShieldCheck, Map, Banknote } from 'lucide-react';

export default function Slide_6_3_ResponseMeasures() {
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
            SECTION 6.3
          </div>
          <h1 className="text-6xl font-black text-slate-800 tracking-tighter uppercase">
            Response Measures
          </h1>
        </div>
        <PolyULogo layout="horizontal" knotSize={64} className="opacity-90" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-between px-20 py-8 w-full max-w-[1600px] mx-auto min-h-0 overflow-hidden">
        
        {/* Intro Sentence */}
        <motion.div 
          className="mb-4 flex justify-center w-full shrink-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="bg-white px-10 py-6 rounded-3xl border border-slate-200 shadow-sm w-full relative overflow-hidden">
            <motion.div 
              className="absolute left-0 top-0 bottom-0 w-2 bg-slate-800"
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            ></motion.div>
            <p className="text-xl text-slate-700 font-medium text-left leading-relaxed">
              Given the financial implications outlined above, responses are required at both the <span className="font-bold text-slate-900">firm</span> and <span className="font-bold text-slate-900">government</span> levels. The following measures are intended to reduce cost pressures, manage asset-related risks and support a more resilient and financially feasible transition in Hong Kong&apos;s building sector.
            </p>
          </div>
        </motion.div>

        {/* Two Columns: Firm Level vs Government Level */}
        <motion.div 
          className="flex gap-8 mb-4 flex-1 min-h-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column: Firm Level */}
          <div className="flex-1 flex flex-col min-h-0">
            <div className="flex items-center gap-4 mb-4 shrink-0">
              <div className="w-12 h-1 bg-slate-800 rounded-full"></div>
              <h2 className="text-3xl font-black text-slate-800 uppercase tracking-wider">Firm Level</h2>
            </div>
            
            <div className="flex flex-col gap-4 flex-1 min-h-0">
              {/* Card 1 */}
              <motion.div variants={itemVariants} className="flex-1 bg-white rounded-3xl p-5 border border-slate-200 shadow-md hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex items-start gap-4 group overflow-hidden">
                <div className="w-12 h-12 bg-slate-100 text-slate-800 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-slate-800 group-hover:text-white transition-all duration-300">
                  <Settings className="w-6 h-6" />
                </div>
                <div className="flex flex-col justify-center h-full">
                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-slate-700 transition-colors">
                    Deep Retrofitting
                  </h3>
                  <p className="text-[1.05rem] text-slate-600 font-medium leading-snug">
                    Upgrade HVAC systems, drainage, facades and backup power to reduce operating costs while improving resilience to heat, flood and wind risk.
                  </p>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div variants={itemVariants} className="flex-1 bg-white rounded-3xl p-5 border border-slate-200 shadow-md hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex items-start gap-4 group overflow-hidden">
                <div className="w-12 h-12 bg-slate-100 text-slate-800 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-slate-800 group-hover:text-white transition-all duration-300">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="flex flex-col justify-center h-full">
                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-slate-700 transition-colors">
                    Early Climate Screening
                  </h3>
                  <p className="text-[1.05rem] text-slate-600 font-medium leading-snug">
                    Introduce climate-risk screening and scenario-based resilience testing at the design, acquisition and project-planning stages.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Government Level */}
          <div className="flex-1 flex flex-col min-h-0">
            <div className="flex items-center gap-4 mb-4 shrink-0">
              <div className="w-12 h-1 bg-red-800 rounded-full"></div>
              <h2 className="text-3xl font-black text-red-900 uppercase tracking-wider">Government Level</h2>
            </div>
            
            <div className="flex flex-col gap-4 flex-1 min-h-0">
              {/* Card 3 */}
              <motion.div variants={itemVariants} className="flex-1 bg-white rounded-3xl p-5 border-l-8 border-l-red-800 border-y border-r border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex items-start gap-4 group overflow-hidden">
                <div className="w-12 h-12 bg-red-50 text-red-800 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-red-800 group-hover:text-white transition-all duration-300">
                  <Map className="w-6 h-6" />
                </div>
                <div className="flex flex-col justify-center h-full">
                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-red-900 transition-colors">
                    Clearer Transition Roadmaps
                  </h3>
                  <p className="text-[1.05rem] text-slate-600 font-medium leading-snug">
                    Continue tightening energy-efficiency and disclosure standards with predictable implementation timelines.
                  </p>
                </div>
              </motion.div>

              {/* Card 4 */}
              <motion.div variants={itemVariants} className="flex-1 bg-white rounded-3xl p-5 border-l-8 border-l-red-800 border-y border-r border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex items-start gap-4 group overflow-hidden">
                <div className="w-12 h-12 bg-red-50 text-red-800 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-red-800 group-hover:text-white transition-all duration-300">
                  <Banknote className="w-6 h-6" />
                </div>
                <div className="flex flex-col justify-center h-full">
                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-red-900 transition-colors">
                    Financial and Policy Support
                  </h3>
                  <p className="text-[1.05rem] text-slate-600 font-medium leading-snug">
                    Expand tax incentives, climate-risk data access and green or transition finance support for building-sector adaptation and decarbonisation.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Closing Message */}
        <motion.div 
          className="w-full mt-4 flex justify-center shrink-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="inline-block px-10 py-5 bg-slate-200/50 rounded-2xl border border-slate-300 relative overflow-hidden w-full">
            <motion.div 
              className="absolute left-0 top-0 bottom-0 w-2 bg-red-600"
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 0.6, delay: 1 }}
            ></motion.div>
            <p className="text-xl font-bold text-slate-800 text-left">
              The transition to a more climate-resilient building sector depends not only on stricter standards, but also on <span className="text-red-800">financially feasible pathways</span> for implementation.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}