"use client";

import React from 'react';
import { motion } from 'framer-motion';
import PolyULogo from '@/components/PolyULogo';
import { ArrowRight } from 'lucide-react';

export default function Slide_3_2_Structural() {
  return (
    <div className="flex flex-col h-full w-full bg-slate-50 relative overflow-hidden font-sans">
      {/* Header - Consistent with Chapter 4 */}
      <div className="bg-white h-36 w-full flex items-center justify-between px-20 shadow-sm border-b border-slate-100 z-10 shrink-0">
        <div className="flex flex-col gap-2">
          <div className="font-medium uppercase tracking-widest text-red-900 text-lg flex items-center gap-3">
            <span className="w-8 h-px bg-red-900/40"></span>
            SECTION 3.2
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900">
            Structural Integrity & Financial Implications
          </h1>
        </div>
        <PolyULogo layout="horizontal" knotSize={64} className="opacity-90" />
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full max-w-[1600px] mx-auto flex flex-col px-20 py-8 gap-8 min-h-0">
        
        {/* Intro Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.1 }}
          className="shrink-0"
        >
          <p className="text-xl text-slate-600 italic leading-relaxed tracking-wide px-4 border-l-4 border-slate-300 font-medium">
            Rising sea levels elevate saline groundwater in reclaimed areas (e.g., West Kowloon). Per Code of Practice for Foundations §2.6.2 (Buildings Department, 2017), prolonged chloride exposure accelerates concrete erosion, undermining reinforced foundation durability.
          </p>
        </motion.div>

        {/* 3 Top Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-3 gap-8 shrink-0"
        >
          {/* Card 1 */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col h-full relative hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group cursor-default">
            <div className="h-2 w-full bg-[#8b181b] absolute top-0 left-0 group-hover:bg-red-600 transition-colors"></div>
            <div className="p-8">
              <h3 className="text-3xl font-bold text-[#8b181b] mb-1">Asset Depreciation</h3>
              <p className="text-lg text-slate-400 italic mb-6 group-hover:text-[#8b181b] transition-colors">NPV Erosion</p>
              <p className="text-lg text-slate-700 leading-relaxed font-medium">
                Accelerated structural ageing forces premature capital renewal and shortens building lifespan, directly reducing Net Present Value.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col h-full relative hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group cursor-default">
            <div className="h-2 w-full bg-[#8b181b] absolute top-0 left-0 group-hover:bg-red-600 transition-colors"></div>
            <div className="p-8">
              <h3 className="text-3xl font-bold text-[#8b181b] mb-1">Operational Drag</h3>
              <p className="text-lg text-slate-400 italic mb-6 group-hover:text-[#8b181b] transition-colors">Cash Flow Pressure</p>
              <p className="text-lg text-slate-700 leading-relaxed font-medium">
                Higher maintenance frequency in high-risk areas and soaring insurance premiums severely erode project cash flows.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col h-full relative hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group cursor-default">
            <div className="h-2 w-full bg-[#8b181b] absolute top-0 left-0 group-hover:bg-red-600 transition-colors"></div>
            <div className="p-8">
              <h3 className="text-3xl font-bold text-[#8b181b] mb-1">Stranded Asset Risk</h3>
              <p className="text-lg text-slate-400 italic mb-6 group-hover:text-[#8b181b] transition-colors">Permanent Valuation Loss</p>
              <p className="text-lg text-slate-700 leading-relaxed font-medium">
                Properties failing the latest disaster-resistance standards face permanent valuation loss — effectively becoming Stranded Assets.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Financial Transmission Chain - Redesigned as an overlapping modern progress bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col mt-4"
        >
          <h2 className="text-2xl font-bold text-[#8b181b] mb-4">Financial Transmission Chain</h2>
          
          <div className="relative flex items-stretch w-full rounded-2xl overflow-hidden shadow-sm border border-slate-200/60 bg-white">
            
            {/* Step 1 */}
            <div className="flex-1 relative p-6 bg-slate-50 border-r border-slate-200 group hover:bg-[#8b181b]/5 transition-colors">
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white border-r border-t border-slate-200 rotate-45 z-10 group-hover:bg-red-50 transition-colors hidden md:block"></div>
              <div className="relative z-20">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#8b181b] text-white text-sm font-bold">1</span>
                  <h4 className="text-[#8b181b] font-bold text-xl leading-tight">Chloride Ingress</h4>
                </div>
                <p className="text-base text-slate-700 font-medium pl-11 leading-relaxed">Saline groundwater attacks reinforced concrete foundations.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex-1 relative p-6 bg-white border-r border-slate-200 group hover:bg-[#8b181b]/5 transition-colors">
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white border-r border-t border-slate-200 rotate-45 z-10 group-hover:bg-red-50 transition-colors hidden md:block"></div>
              <div className="relative z-20 pl-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#8b181b] text-white text-sm font-bold">2</span>
                  <h4 className="text-[#8b181b] font-bold text-xl leading-tight">Maintenance Surge</h4>
                </div>
                <p className="text-base text-slate-700 font-medium pl-11 leading-relaxed">Inspection & repair frequency rises sharply.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex-1 relative p-6 bg-slate-50 border-r border-slate-200 group hover:bg-[#8b181b]/5 transition-colors">
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white border-r border-t border-slate-200 rotate-45 z-10 group-hover:bg-red-50 transition-colors hidden md:block"></div>
              <div className="relative z-20 pl-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#8b181b] text-white text-sm font-bold">3</span>
                  <h4 className="text-[#8b181b] font-bold text-xl leading-tight">Insurance & OPEX</h4>
                </div>
                <p className="text-base text-slate-700 font-medium pl-11 leading-relaxed">Premiums and operating costs escalate.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex-1 relative p-6 bg-white border-r border-slate-200 group hover:bg-[#8b181b]/5 transition-colors">
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white border-r border-t border-slate-200 rotate-45 z-10 group-hover:bg-red-50 transition-colors hidden md:block"></div>
              <div className="relative z-20 pl-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#8b181b] text-white text-sm font-bold">4</span>
                  <h4 className="text-[#8b181b] font-bold text-xl leading-tight">NPV / Cash Flow</h4>
                </div>
                <p className="text-base text-slate-700 font-medium pl-11 leading-relaxed">Project economics deteriorate materially.</p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex-1 relative p-6 bg-[#8b181b] group">
              <div className="relative z-20 pl-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-[#8b181b] text-sm font-bold">5</span>
                  <h4 className="text-white font-bold text-xl leading-tight">Stranded Asset</h4>
                </div>
                <p className="text-base text-red-100 font-medium pl-11 leading-relaxed">Permanent valuation loss; non-compliant property.</p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Footer */}
        <div className="shrink-0 pt-2">
          <p className="text-sm text-slate-500 italic text-right">
            Source: Buildings Department (2017), Code of Practice for Foundations §2.6.2; TCFD Framework.
          </p>
        </div>

      </div>
    </div>
  );
}