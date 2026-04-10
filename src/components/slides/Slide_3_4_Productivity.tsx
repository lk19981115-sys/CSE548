"use client";

import React from 'react';
import { motion } from 'framer-motion';
import PolyULogo from '@/components/PolyULogo';

export default function Slide_3_4_Productivity() {
  return (
    <div className="flex flex-col h-full w-full bg-slate-50 relative overflow-hidden font-sans">
      {/* Header */}
      <div className="bg-white h-36 w-full flex items-center justify-between px-20 shadow-sm border-b border-slate-100 z-10 shrink-0">
        <div className="flex flex-col gap-2">
          <div className="font-medium uppercase tracking-widest text-red-900 text-lg flex items-center gap-3">
            <span className="w-8 h-px bg-red-900/40"></span>
            SECTION 3.4
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900">
            Productivity Loss & CAPEX Inflation
          </h1>
        </div>
        <PolyULogo layout="horizontal" knotSize={64} className="opacity-90" />
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full max-w-[1600px] mx-auto flex flex-col px-20 py-6 gap-6 min-h-0">
        
        {/* Intro Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.1 }}
          className="shrink-0"
        >
          <p className="text-xl text-slate-600 italic leading-relaxed tracking-wide px-4 border-l-4 border-slate-300 font-medium">
            Rebar fixing — a 'Very Heavy Labor' task on the construction critical path (Labour Department, 2024) — is heavily disrupted under Amber Heat Stress Warnings, propagating delays into financial cost.
          </p>
        </motion.div>

        {/* Top Half: Table and Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-12 gap-8 shrink-0"
        >
          {/* Modern Info Cards instead of Table */}
          <div className="col-span-8 flex flex-col gap-4">
            {/* Header Row */}
            <div className="flex w-full px-6 text-sm font-bold text-slate-400 uppercase tracking-widest">
              <div className="flex-1">Work Environment</div>
              <div className="flex-[1.5]">Mandatory Rest</div>
              <div className="w-48 text-right">Productivity Loss</div>
            </div>

            {/* Row 1 - Outdoor */}
            <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 flex items-center hover:-translate-y-1 hover:shadow-md transition-all duration-300 relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#8b181b] scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom"></div>
              <div className="flex-1 font-bold text-xl text-slate-800">
                Outdoor
              </div>
              <div className="flex-[1.5] flex items-center gap-3">
                <span className="inline-flex items-center justify-center bg-red-50 text-[#8b181b] font-medium px-4 py-1.5 rounded-full text-lg">
                  45-min rest
                </span>
                <span className="text-slate-500 font-medium">/ hour</span>
              </div>
              <div className="w-48 text-right font-extrabold text-4xl text-[#8b181b]">
                75%
              </div>
            </div>

            {/* Row 2 - Indoor */}
            <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 flex items-center hover:-translate-y-1 hover:shadow-md transition-all duration-300 relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-orange-500 scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom"></div>
              <div className="flex-1 font-bold text-xl text-slate-800">
                Indoor <span className="text-slate-400 font-medium text-base ml-2">(no AC)</span>
              </div>
              <div className="flex-[1.5] flex items-center gap-3">
                <span className="inline-flex items-center justify-center bg-orange-50 text-orange-700 font-medium px-4 py-1.5 rounded-full text-lg">
                  30-min rest
                </span>
                <span className="text-slate-500 font-medium">/ hour</span>
              </div>
              <div className="w-48 text-right font-extrabold text-4xl text-orange-600">
                50%
              </div>
            </div>
          </div>

          {/* Right 2 Cards */}
          <div className="col-span-4 flex flex-col gap-4">
            <div className="flex-1 bg-gradient-to-br from-[#fdfbfb] to-white border border-[#8b181b]/30 hover:border-[#8b181b]/70 rounded-2xl flex flex-col items-center justify-center p-4 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-default">
              <h3 className="text-4xl font-extrabold text-[#8b181b] mb-2 tracking-tight group-hover:scale-105 transition-transform duration-300">Critical Path</h3>
              <p className="text-slate-600 font-medium text-lg">Rebar fixing — 'Very Heavy Labor'</p>
            </div>
            <div className="flex-1 bg-gradient-to-br from-[#fdfbfb] to-white border border-[#8b181b]/30 hover:border-[#8b181b]/70 rounded-2xl flex flex-col items-center justify-center p-4 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-default">
              <h3 className="text-4xl font-extrabold text-[#8b181b] mb-2 tracking-tight group-hover:scale-105 transition-transform duration-300">Amber Warning</h3>
              <p className="text-slate-600 font-medium text-lg">Mandatory work interruptions in force</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Half: Image and List */}
        <div className="flex-1 grid grid-cols-12 gap-8 min-h-0 pt-2">
          
          {/* Left: Warning Chart Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-span-5 flex flex-col min-h-0"
          >
            <div className="flex-1 relative border border-slate-300 shadow-sm bg-white overflow-hidden flex items-center justify-center">
              <img 
                src="/images/slide_3_4_warning.png" 
                alt="HK Heat Stress Warning Levels" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = 'https://placehold.co/800x600/f8fafc/94a3b8?text=Please+crop+the+warning+chart%0Aand+save+as+slide_3_4_warning.png+in+public/images/';
                }}
              />
            </div>
            <p className="text-sm text-slate-500 italic mt-2 shrink-0">
              HK Heat Stress at Work Warning levels (Labour Department, 2024)
            </p>
          </motion.div>

          {/* Right: Vertical List */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5, delay: 0.4 }}
            className="col-span-7 flex flex-col min-h-0"
          >
            <h3 className="text-xl font-bold text-[#8b181b] mb-4 shrink-0">
              Financial Transmission Chain → <span className="text-slate-800">CAPEX Inflation</span>
            </h3>
            
            <div className="flex-1 flex flex-col bg-white border border-slate-200 shadow-sm rounded-xl overflow-hidden min-h-0">
              {/* List Item 1 */}
              <div className="flex-1 flex items-center px-6 border-b border-slate-100 hover:bg-slate-50 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-[#8b181b] text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-sm group-hover:scale-105 transition-transform">1</div>
                <div className="ml-6">
                  <span className="font-bold text-lg text-[#8b181b] mr-3">Heat Stress Interruptions</span>
                  <span className="text-slate-600 font-medium">Mandatory rest cycles cut productive labour hours.</span>
                </div>
              </div>
              
              {/* List Item 2 */}
              <div className="flex-1 flex items-center px-6 border-b border-slate-100 hover:bg-slate-50 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-[#8b181b] text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-sm group-hover:scale-105 transition-transform">2</div>
                <div className="ml-6">
                  <span className="font-bold text-lg text-[#8b181b] mr-3">Schedule Overrun</span>
                  <span className="text-slate-600 font-medium">Critical-path tasks slip; non-linear duration extension.</span>
                </div>
              </div>

              {/* List Item 3 */}
              <div className="flex-1 flex items-center px-6 border-b border-slate-100 hover:bg-slate-50 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-[#8b181b] text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-sm group-hover:scale-105 transition-transform">3</div>
                <div className="ml-6">
                  <span className="font-bold text-lg text-[#8b181b] mr-3">IDC Increase</span>
                  <span className="text-slate-600 font-medium">Interest During Construction balloons with delay.</span>
                </div>
              </div>

              {/* List Item 4 */}
              <div className="flex-1 flex items-center px-6 border-b border-slate-100 hover:bg-slate-50 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-[#8b181b] text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-sm group-hover:scale-105 transition-transform">4</div>
                <div className="ml-6">
                  <span className="font-bold text-lg text-[#8b181b] mr-3">Site Mgmt Fee Inflation</span>
                  <span className="text-slate-600 font-medium">Prolonged supervision and overhead costs.</span>
                </div>
              </div>

              {/* List Item 5 */}
              <div className="flex-1 flex items-center px-6 hover:bg-slate-50 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-[#8b181b] text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-sm group-hover:scale-105 transition-transform">5</div>
                <div className="ml-6">
                  <span className="font-bold text-lg text-[#8b181b] mr-3">CAPEX Inflation</span>
                  <span className="text-slate-600 font-medium">Investment risk in HK high-turnover model rises.</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Footer */}
        <div className="shrink-0 pt-2 mt-auto">
          <p className="text-sm text-slate-500 italic text-left">
            Source: Labour Department (2024), Guidance Notes on Prevention of Heat Stroke at Work.
          </p>
        </div>

      </div>
    </div>
  );
}