"use client";

import React from 'react';
import PolyULogo from '@/components/PolyULogo';
import { motion } from 'framer-motion';

export default function Slide_6_2_FinancialMatrix() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <div className="flex flex-col h-full w-full bg-slate-50 relative overflow-hidden font-sans">
      {/* Header */}
      <div className="bg-white h-40 w-full flex items-center justify-between px-20 shadow-sm border-b border-slate-100 z-10 shrink-0">
        <div className="flex flex-col justify-center">
          <div className="text-xl text-red-900 font-semibold tracking-wide flex items-center gap-4 mb-2">
            <span className="w-8 h-1 bg-red-900 rounded-full"></span>
            SECTION 6.2
          </div>
          <h1 className="text-6xl font-black text-slate-800 tracking-tighter uppercase">
            Climate Risk-Financial Impact Matrix
          </h1>
        </div>
        <PolyULogo layout="horizontal" knotSize={64} className="opacity-90" />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col justify-center px-20 py-8 w-full max-w-[1600px] mx-auto min-h-0">
        
        {/* Matrix Table */}
        <motion.div 
          className="w-full bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-slate-800 text-white border-b border-slate-700">
            <div className="col-span-3 p-4 text-lg font-bold uppercase tracking-wider flex items-center border-r border-slate-700/50">
              Risk Category
            </div>
            <div className="col-span-4 p-4 text-lg font-bold uppercase tracking-wider flex items-center bg-blue-900/40 border-r border-slate-700/50">
              Income Statement Impacts
            </div>
            <div className="col-span-5 p-4 text-lg font-bold uppercase tracking-wider flex items-center bg-emerald-900/40">
              Balance Sheet / Financing Impacts
            </div>
          </div>

          {/* Table Body */}
          <div className="flex flex-col">
            
            {/* Row 1: Acute */}
            <motion.div 
              variants={rowVariants} 
              whileHover={{ scale: 1.01, backgroundColor: '#f8fafc', transition: { duration: 0.2 } }}
              className="grid grid-cols-12 border-b border-slate-100 group cursor-pointer"
            >
              <div className="col-span-3 p-4 border-r border-slate-100 flex flex-col justify-center">
                <span className="text-xl font-black text-slate-800 leading-tight">Acute physical risks</span>
                <span className="text-xs font-bold text-red-600 mt-1 tracking-wide uppercase">Part 2: typhoons, rainstorms, flooding</span>
              </div>
              <div className="col-span-4 p-4 border-r border-slate-100 flex items-center bg-blue-50/30 group-hover:bg-blue-50/50 transition-colors">
                <p className="text-lg text-slate-700 font-medium leading-snug">Repair and reinstatement expenses; business interruption; project delay cost; higher insurance premiums</p>
              </div>
              <div className="col-span-5 p-4 flex items-center bg-emerald-50/30 group-hover:bg-emerald-50/50 transition-colors">
                <p className="text-lg text-slate-700 font-medium leading-snug">Damage to building systems and temporary works; higher replacement and resilience capex; short-term cash flow stress</p>
              </div>
            </motion.div>

            {/* Row 2: Chronic */}
            <motion.div 
              variants={rowVariants} 
              whileHover={{ scale: 1.01, backgroundColor: '#f8fafc', transition: { duration: 0.2 } }}
              className="grid grid-cols-12 border-b border-slate-100 group cursor-pointer"
            >
              <div className="col-span-3 p-4 border-r border-slate-100 flex flex-col justify-center">
                <span className="text-xl font-black text-slate-800 leading-tight">Chronic physical risks</span>
                <span className="text-xs font-bold text-orange-600 mt-1 tracking-wide uppercase">Part 3: heat stress, sea-level rise</span>
              </div>
              <div className="col-span-4 p-4 border-r border-slate-100 flex items-center bg-blue-50/30 group-hover:bg-blue-50/50 transition-colors">
                <p className="text-lg text-slate-700 font-medium leading-snug">Higher electricity and maintenance costs; lower labour productivity during extreme heat; rising operating expenditure over time</p>
              </div>
              <div className="col-span-5 p-4 flex items-center bg-emerald-50/30 group-hover:bg-emerald-50/50 transition-colors">
                <p className="text-lg text-slate-700 font-medium leading-snug">Accelerated depreciation; earlier retrofit and capital replacement needs; higher impairment risk for exposed assets</p>
              </div>
            </motion.div>

            {/* Row 3: Policy */}
            <motion.div 
              variants={rowVariants} 
              whileHover={{ scale: 1.01, backgroundColor: '#f8fafc', transition: { duration: 0.2 } }}
              className="grid grid-cols-12 border-b border-slate-100 group cursor-pointer"
            >
              <div className="col-span-3 p-4 border-r border-slate-100 flex flex-col justify-center">
                <span className="text-xl font-black text-slate-800 leading-tight">Policy and legal transition risks</span>
                <span className="text-xs font-bold text-indigo-600 mt-1 tracking-wide uppercase">Part 4</span>
              </div>
              <div className="col-span-4 p-4 border-r border-slate-100 flex items-center bg-blue-50/30 group-hover:bg-blue-50/50 transition-colors">
                <p className="text-lg text-slate-700 font-medium leading-snug">Higher compliance, audit and reporting costs; possible remediation and penalty costs</p>
              </div>
              <div className="col-span-5 p-4 flex items-center bg-emerald-50/30 group-hover:bg-emerald-50/50 transition-colors">
                <p className="text-lg text-slate-700 font-medium leading-snug">Recurring audit obligations; retrofit capex to meet tighter standards; lower value of outdated building stock</p>
              </div>
            </motion.div>

            {/* Row 4: Market */}
            <motion.div 
              variants={rowVariants} 
              whileHover={{ scale: 1.01, backgroundColor: '#f8fafc', transition: { duration: 0.2 } }}
              className="grid grid-cols-12 group cursor-pointer"
            >
              <div className="col-span-3 p-4 border-r border-slate-100 flex flex-col justify-center">
                <span className="text-xl font-black text-slate-800 leading-tight">Market, technology & reputation</span>
                <span className="text-xs font-bold text-fuchsia-600 mt-1 tracking-wide uppercase">Part 5</span>
              </div>
              <div className="col-span-4 p-4 border-r border-slate-100 flex items-center bg-blue-50/30 group-hover:bg-blue-50/50 transition-colors">
                <p className="text-lg text-slate-700 font-medium leading-snug">Rental discounts, vacancy pressure and weaker demand for brown assets; upfront low-carbon technology costs</p>
              </div>
              <div className="col-span-5 p-4 flex items-center bg-emerald-50/30 group-hover:bg-emerald-50/50 transition-colors">
                <p className="text-lg text-slate-700 font-medium leading-snug">Valuation discounts on inefficient assets; higher cost of capital; tighter access to green or transition finance; stranded asset risk</p>
              </div>
            </motion.div>

          </div>
        </motion.div>

        {/* Closing Sentence */}
        <motion.div 
          className="mt-6 flex items-start gap-4 bg-slate-800 text-white p-5 rounded-2xl shadow-lg relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div 
            className="absolute left-0 top-0 bottom-0 w-2 bg-red-600"
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 0.6, delay: 1 }}
          ></motion.div>
          <div className="flex-1">
            <p className="text-lg font-bold leading-relaxed">
              The matrix shows that acute physical risks mainly affect repair, interruption and insurance costs, while chronic and transition risks increasingly influence operating pressure, asset quality and financing conditions.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}