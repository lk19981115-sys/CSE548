"use client";

import React from 'react';
import PolyULogo from '@/components/PolyULogo';
import { motion } from 'framer-motion';
import { CloudLightning, Construction, AlertTriangle, Droplets, Waves, Pickaxe, HardHat, TrendingDown, ArrowDown } from 'lucide-react';

export default function Slide_2_4_RiskImpact() {
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
            SECTION 2.4
          </div>
          <h1 className="text-6xl font-black text-slate-800 tracking-tighter uppercase">
            Risk Impact Scenarios: From Construction to Operation
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
        
        {/* Left Column: Risk Categories */}
        <div className="w-[55%] flex flex-col gap-8 h-full">
          
          {/* Card 1: Elevated Risks */}
          <motion.div variants={itemVariants} className="bg-white rounded-3xl p-8 border-l-8 border-l-blue-600 border-y border-r border-slate-200 shadow-md hover:shadow-xl transition-shadow group flex-1 flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold text-blue-700 mb-6 tracking-tight flex items-center gap-3">
              <Construction className="w-8 h-8" />
              Elevated Risks
            </h2>
            
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-1">
                  <span className="font-bold text-sm">×</span>
                </div>
                <p className="text-slate-600 text-lg leading-relaxed">
                  <span className="font-bold text-slate-900">Tower Cranes:</span> Under strong winds such as Saola, extreme wind loads threaten the structural stability of cranes, easily causing boom breakage or collapse.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-1">
                  <span className="font-bold text-sm">×</span>
                </div>
                <p className="text-slate-600 text-lg leading-relaxed">
                  <span className="font-bold text-slate-900">Scaffolding:</span> Widely used bamboo scaffolds face risks of full or partial detachment, leading to significant secondary cleanup costs and third-party public liability risks.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Flooding of Deep Foundations */}
          <motion.div variants={itemVariants} className="bg-white rounded-3xl p-8 border-l-8 border-l-purple-600 border-y border-r border-slate-200 shadow-md hover:shadow-xl transition-shadow group flex-1 flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold text-purple-700 mb-6 tracking-tight flex items-center gap-3">
              <Waves className="w-8 h-8" />
              Flooding of Deep Foundations
            </h2>
            
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 mt-1">
                  <Droplets className="w-5 h-5" />
                </div>
                <p className="text-slate-600 text-lg leading-relaxed">
                  <span className="font-bold text-slate-900">Pump Capacity Overwhelmed:</span> Extreme rainfall exceeds the limits of temporary dewatering systems.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 mt-1">
                  <Waves className="w-5 h-5" />
                </div>
                <p className="text-slate-600 text-lg leading-relaxed">
                  <span className="font-bold text-slate-900">Excavation Flooding:</span> Flooded deep pits damage machinery and cause costly project delays.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 mt-1">
                  <Pickaxe className="w-5 h-5" />
                </div>
                <p className="text-slate-600 text-lg leading-relaxed">
                  <span className="font-bold text-slate-900">Increased Desilting Costs:</span> Sediment carried by floodwaters requires extensive post-event cleanup.
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Right Column: Transmission Chain */}
        <motion.div variants={itemVariants} className="w-[45%] flex flex-col h-full">
          <div className="bg-white rounded-3xl p-10 border border-slate-200 shadow-xl h-full flex flex-col items-center justify-center relative">
            
            {/* Step 1: Trigger */}
            <motion.div 
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="w-full bg-blue-50/50 rounded-2xl p-6 border border-blue-100 flex items-center gap-6 group hover:shadow-xl hover:border-blue-300 transition-all duration-300 cursor-default relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/5 group-hover:to-blue-500/10 transition-colors duration-300"></div>
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center shrink-0 group-hover:bg-blue-200 transition-colors duration-300 relative z-10">
                <CloudLightning className="w-10 h-10 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-extrabold text-slate-900 mb-2 group-hover:text-blue-800 transition-colors duration-300">
                  Trigger: Extreme Weather
                </h3>
                <p className="text-slate-600 text-lg font-medium">Typhoon Saola + Heavy Rainstorm</p>
                <p className="text-slate-500 text-base">Sept 2023, Hong Kong</p>
              </div>
            </motion.div>

            {/* Arrow */}
            <div className="py-4">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <ArrowDown className="w-8 h-8 text-slate-300" />
              </motion.div>
            </div>

            {/* Step 2: Impact */}
            <motion.div 
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="w-full bg-orange-50/50 rounded-2xl p-6 border border-orange-100 flex items-center gap-6 group hover:shadow-xl hover:border-orange-300 transition-all duration-300 cursor-default relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/0 to-orange-500/5 group-hover:to-orange-500/10 transition-colors duration-300"></div>
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center shrink-0 group-hover:bg-orange-200 transition-colors duration-300 relative z-10">
                <HardHat className="w-10 h-10 text-orange-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-extrabold text-slate-900 mb-2 group-hover:text-orange-800 transition-colors duration-300">
                  Impact: Site Suspension
                </h3>
                <p className="text-slate-600 text-lg font-medium">10-day full construction halt</p>
                <p className="text-slate-500 text-base">Critical path progress delayed</p>
              </div>
            </motion.div>

            {/* Arrow */}
            <div className="py-4">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.3 }}
              >
                <ArrowDown className="w-8 h-8 text-slate-300" />
              </motion.div>
            </div>

            {/* Step 3: Consequence */}
            <motion.div 
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="w-full bg-red-50/50 rounded-2xl p-6 border border-red-100 flex items-center gap-6 group hover:shadow-xl hover:border-red-300 transition-all duration-300 cursor-default relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/0 to-red-500/5 group-hover:to-red-500/10 transition-colors duration-300"></div>
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center shrink-0 group-hover:bg-red-200 transition-colors duration-300 relative z-10">
                <TrendingDown className="w-10 h-10 text-red-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-extrabold text-red-800 mb-2 group-hover:text-red-900 transition-colors duration-300">
                  Consequence: Liability
                </h3>
                <p className="text-slate-600 text-lg font-medium">Insufficient EOT + Daily LDs (0.1%)</p>
                <p className="text-slate-500 text-base">Severe financial burden</p>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}