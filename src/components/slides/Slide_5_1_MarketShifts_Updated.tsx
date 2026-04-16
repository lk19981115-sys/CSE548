"use client";

import React from 'react';
import PolyULogo from '@/components/PolyULogo';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowRight, AlertCircle, Users, Landmark, Wrench } from 'lucide-react';

export default function Slide_5_1_MarketShifts_Updated() {
  return (
    <div className="flex flex-col h-full w-full bg-slate-50 relative overflow-hidden font-sans">
      <div className="bg-white h-36 w-full flex items-center justify-between px-20 shadow-sm border-b border-slate-100 z-10 shrink-0">
        <div className="flex flex-col gap-2">
          <div className="font-medium uppercase tracking-widest text-red-900 text-lg flex items-center gap-3">
            <span className="w-8 h-px bg-red-900/40"></span>
            SECTION 5.1
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Market Risk: <span className="text-red-800">Green as the Baseline</span>
          </h1>
        </div>
        <PolyULogo layout="horizontal" knotSize={64} className="opacity-90" />
      </div>

      <div className="flex-1 w-full max-w-[1600px] mx-auto px-20 py-4 flex flex-col justify-start min-h-0">
        <div className="flex items-start justify-between gap-8 relative w-full mb-4 shrink-0">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="flex-1 bg-white rounded-3xl p-6 border border-slate-200 shadow-lg relative overflow-hidden flex flex-col"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>

            <div className="flex items-center gap-4 mb-5">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shadow-sm border border-emerald-100">
                <TrendingUp strokeWidth={1.8} className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-1">Local Evidence</h2>
                <h3 className="text-3xl font-extrabold text-slate-900 leading-tight">
                  <span className="text-emerald-800 text-[1.12em] font-black">Green</span> Premium Exists
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="rounded-2xl bg-emerald-50/80 border border-emerald-100 p-4">
                <div className="text-7xl font-black text-emerald-700 tracking-tight leading-none mb-3">+4.4%</div>
                <p className="text-lg text-emerald-950 font-medium leading-snug">
                  BEAM Plus-certified flats sold above comparable non-registered buildings
                </p>
                <p className="mt-3 text-sm font-bold tracking-wide uppercase text-emerald-700/80">
                  Source: Hui et al. (2017)
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
                <div className="text-7xl font-black text-slate-900 tracking-tight leading-none mb-3">+10.9%</div>
                <p className="text-lg text-slate-700 font-medium leading-snug">
                  Rental premium found in Hong Kong&apos;s prime office market
                </p>
                <p className="mt-3 text-sm font-bold tracking-wide uppercase text-slate-500">
                  Source: Mesthrige &amp; Chan (2019)
                </p>
              </div>
            </div>

            <div className="bg-emerald-50/70 rounded-2xl p-5 border border-emerald-200/60 mt-5">
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-full bg-emerald-200 text-emerald-800 flex items-center justify-center shrink-0">
                  <span className="font-black text-base">!</span>
                </div>
                <p className="text-xl text-emerald-950 leading-relaxed font-medium">
                  In Hong Kong, green labels already carry <span className="font-bold">pricing and leasing value</span>.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" as const }}
            className="flex flex-col items-center justify-center shrink-0 self-center"
          >
            <div className="w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center border border-slate-100">
              <ArrowRight strokeWidth={2.5} className="w-8 h-8 text-slate-400" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" as const }}
            className="flex-1 bg-white rounded-3xl p-6 border border-slate-200 shadow-xl relative overflow-hidden flex flex-col"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-500 to-red-600"></div>

            <div className="flex items-center gap-4 mb-5">
              <div className="w-16 h-16 bg-amber-50 text-amber-700 rounded-2xl flex items-center justify-center shadow-sm border border-amber-100">
                <AlertCircle strokeWidth={1.8} className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-sm font-bold tracking-widest text-amber-700 uppercase mb-1">Current Risk</h2>
                <h3 className="text-3xl font-extrabold text-slate-900 leading-tight">
                  <span className="text-amber-800 text-[1.12em] font-black">Brown</span> Discount Pressure
                </h3>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="rounded-2xl bg-amber-50/80 border border-amber-100 p-4">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-slate-900 mb-1">Weaker tenant demand</p>
                    <p className="text-lg text-slate-600 leading-snug">
                      Larger occupiers increasingly expect energy efficiency, certification and climate disclosure.
                    </p>
                    <p className="mt-2 text-sm font-bold tracking-wide uppercase text-amber-700/80">
                      Source: Knight Frank (2024)
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                    <Landmark className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-slate-900 mb-1">Valuation pressure on older stock</p>
                    <p className="text-lg text-slate-600 leading-snug">
                      Buildings that are not upgraded may lose competitiveness as green performance becomes a normal market expectation.
                    </p>
                    <p className="mt-2 text-sm font-bold tracking-wide uppercase text-slate-500">
                      Source: Sino Land (2024); Hang Lung (2024)
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-red-50/70 border border-red-100 p-4">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-red-100 text-red-700 flex items-center justify-center shrink-0">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-slate-900 mb-1">Future retrofit cost</p>
                    <p className="text-lg text-slate-600 leading-snug">
                      Brown discount is not only about rent. It also reflects the cost of catching up later.
                    </p>
                    <p className="mt-2 text-sm font-bold tracking-wide uppercase text-red-700/80">
                      Source: Sino Land (2024); Hang Lung (2024)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" as const }}
          className="w-full bg-slate-900 rounded-3xl p-5 shadow-2xl relative overflow-hidden shrink-0 border border-slate-800"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600"></div>
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-slate-800 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-red-900/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex items-start gap-5">
            <div className="bg-white/10 rounded-xl px-4 py-2 text-red-400 font-bold tracking-widest text-[0.74rem] uppercase shrink-0 mt-1 shadow-inner border border-white/5">
              Key Takeaway
            </div>
            <div>
              <p className="text-xl text-slate-300 leading-relaxed">
                The market is gradually moving from <span className="text-emerald-400 font-semibold">rewarding green</span> to
                <span className="text-amber-400 font-semibold"> penalising inefficient assets</span>. In Hong Kong, transition risk increasingly
                appears as <span className="text-white font-bold">tenant pressure, valuation pressure and future retrofit pressure</span>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
