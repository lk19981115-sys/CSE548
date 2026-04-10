"use client";

import React from 'react';
import PolyULogo from '@/components/PolyULogo';
import { motion } from 'framer-motion';
import { ShieldAlert, LineChart, Building2, Coins } from 'lucide-react';

export default function Slide_4_1_PolicyRisk() {
  return (
    <div className="flex flex-col h-full w-full bg-slate-50 relative overflow-hidden font-sans">
      
      {/* Header - Modern Typography Hierarchy with PolyU Red */}
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

      {/* Main Content Area - Split Layout */}
      <div className="flex-1 w-full max-w-[1400px] mx-auto px-20 py-12 flex items-center gap-16">
        
        {/* Left Panel - Core Theme (approx 35%) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-[35%] flex flex-col justify-center"
        >
          <div className="border-l-4 border-red-800 pl-8 py-2">
            <h2 className="text-4xl font-extrabold text-slate-900 leading-tight tracking-tight mb-4">
              Decarbonisation <br />
              Strategies & Actions
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed font-medium">
              Key policy shifts and regulatory frameworks impacting the building sector's transition towards net-zero emissions.
            </p>
          </div>
        </motion.div>

        {/* Right Panel - 2x2 Bento Grid (approx 65%) */}
        <div className="w-[65%] grid grid-cols-2 gap-6">
          
          {/* Card 1: Regulation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-red-100 flex flex-col h-full"
          >
            <div className="w-12 h-12 bg-red-50 text-red-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-800 group-hover:text-white transition-colors duration-300">
              <ShieldAlert strokeWidth={2} className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Tighten Regulation</h3>
            <p className="text-slate-600 leading-relaxed">
              Strengthen the regulation of <span className="font-semibold text-slate-800">energy saving</span> and <span className="font-semibold text-slate-800">green building</span> standards across the industry.
            </p>
          </motion.div>

          {/* Card 2: Transparency */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-red-100 flex flex-col h-full"
          >
            <div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors duration-300">
              <Building2 strokeWidth={2} className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Data Transparency</h3>
            <p className="text-slate-600 leading-relaxed">
              Facilitate the comparison of building energy consumption performance by releasing <span className="font-semibold text-slate-800">energy data</span> for public transparency.
            </p>
          </motion.div>

          {/* Card 3: Carbon Tax */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-red-100 flex flex-col h-full"
          >
            <div className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-700 group-hover:text-white transition-colors duration-300">
              <Coins strokeWidth={2} className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Carbon Tax</h3>
            <p className="text-slate-600 leading-relaxed">
              Introduce a <span className="font-semibold text-slate-800">carbon tax</span> framework based on the rigorous simulation of the <span className="font-semibold text-slate-800">Social Cost of Carbon (SCC)</span>.
            </p>
          </motion.div>

          {/* Card 4: Cap and Trade */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-red-100 flex flex-col h-full"
          >
            <div className="w-12 h-12 bg-purple-50 text-purple-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-700 group-hover:text-white transition-colors duration-300">
              <LineChart strokeWidth={2} className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Cap and Trade</h3>
            <p className="text-slate-600 leading-relaxed">
              Launch a cap and trade carbon pricing scheme with a <span className="font-bold text-slate-900">decreasing</span> trend of Certified Emission Reductions (CER).
            </p>
          </motion.div>

        </div>
      </div>
    </div>
  );
}