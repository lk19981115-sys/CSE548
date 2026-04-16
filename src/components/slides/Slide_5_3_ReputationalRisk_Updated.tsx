"use client";

import React from 'react';
import PolyULogo from '@/components/PolyULogo';
import { motion } from 'framer-motion';
import { AlertTriangle, ArrowRight, Landmark, Leaf, TrendingDown } from 'lucide-react';
import Image from 'next/image';

export default function Slide_5_3_ReputationalRisk_Updated() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -40, y: -16, rotate: -3 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      transition: { duration: 0.55, ease: "easeOut" as const },
    },
  };

  return (
    <div className="flex flex-col h-full w-full bg-slate-50 relative overflow-hidden font-sans">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-slate-200/40 to-transparent pointer-events-none"></div>

      <div className="bg-white h-36 w-full flex items-center justify-between px-20 shadow-sm border-b border-slate-100 z-10 shrink-0">
        <div className="flex flex-col gap-2">
          <div className="font-medium uppercase tracking-widest text-red-900 text-lg flex items-center gap-3">
            <span className="w-8 h-px bg-red-900/40"></span>
            SECTION 5.3
          </div>
          <h1 className="text-[2.65rem] font-extrabold tracking-tight text-slate-900 leading-tight">
            Reputational &amp; Financing Risk: <span className="text-red-800">When Claims Outrun Performance</span>
          </h1>
        </div>
        <PolyULogo layout="horizontal" knotSize={64} className="opacity-90" />
      </div>

      <div className="flex-1 w-full max-w-[1600px] mx-auto px-20 py-4 flex flex-col justify-start min-h-0 relative z-10">
        <div className="grid grid-rows-[0.64fr_0.56fr] gap-4 h-full">
        <motion.div
          className="w-full relative flex items-start justify-center pt-2 min-h-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="absolute top-[42%] left-20 right-20 h-1 bg-gradient-to-r from-amber-200 via-red-300 to-slate-500 -translate-y-1/2 rounded-full hidden lg:block opacity-30 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full relative z-10">
            <motion.div variants={itemVariants} className="flex flex-col relative group">
              <div className="hidden lg:flex absolute top-[42%] -right-8 -translate-y-1/2 z-20 w-16 h-16 items-center justify-center">
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-8 h-8 text-slate-300 group-hover:text-amber-500 transition-colors" />
                </motion.div>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-amber-200 shadow-lg relative overflow-hidden h-full">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-300 to-amber-500"></div>

                <div className="flex items-start justify-between mb-3">
                  <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-700 border border-amber-100 shadow-sm">
                    <Leaf className="w-6 h-6" />
                  </div>
                  <div className="text-6xl font-black text-slate-100 pointer-events-none select-none">01</div>
                </div>

                <div className="absolute top-10 left-1/2 -translate-x-1/2 z-10 text-center">
                  <div className="text-sm font-bold tracking-[0.18em] text-amber-700 uppercase whitespace-nowrap">
                    Claims exceed evidence
                  </div>
                  <div className="text-sm font-bold tracking-widest text-amber-700 uppercase mt-2 whitespace-nowrap">
                    The First Problem
                  </div>
                </div>

                <div className="mb-2 pt-5">
                  <h3 className="text-[1.72rem] font-extrabold text-slate-900 leading-tight">Credibility Gap</h3>
                </div>

                <div className="bg-amber-50/55 rounded-2xl p-4 border border-amber-100/70 flex flex-col gap-2 mt-auto">
                  <p className="text-[0.95rem] text-slate-700 leading-snug font-medium">
                    Labels and ESG claims do not always match real operating performance.
                  </p>
                  <p className="text-[0.82rem] font-bold tracking-wide uppercase text-amber-700/80">
                    Sources: Bowen &amp; Aragon-Correa (2014); Liang et al. (2019)
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col relative group">
              <div className="hidden lg:flex absolute top-[42%] -right-8 -translate-y-1/2 z-20 w-16 h-16 items-center justify-center">
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                >
                  <ArrowRight className="w-8 h-8 text-slate-300 group-hover:text-red-500 transition-colors" />
                </motion.div>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-red-200 shadow-xl relative overflow-hidden h-full">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-400 to-red-600"></div>

                <div className="flex items-start justify-between mb-3">
                  <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 border border-red-100 shadow-sm">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <div className="text-6xl font-black text-slate-100 pointer-events-none select-none">02</div>
                </div>

                <div className="absolute top-10 left-1/2 -translate-x-1/2 z-10 text-center">
                  <div className="text-sm font-bold tracking-[0.18em] text-red-700 uppercase whitespace-nowrap">
                    Capital starts asking
                  </div>
                  <div className="text-sm font-bold tracking-widest text-red-700 uppercase mt-2 whitespace-nowrap">
                    The Market Response
                  </div>
                </div>

                <div className="mb-2 pt-5">
                  <h3 className="text-[1.78rem] font-extrabold text-slate-900 leading-tight">Investor and Lender Scrutiny</h3>
                </div>

                <div className="bg-red-50/55 rounded-2xl p-4 border border-red-100/70 flex flex-col gap-3 mt-auto">
                  <p className="text-[0.97rem] text-slate-700 leading-snug font-medium">
                    When performance is unclear, capital providers start asking harder questions about credibility and follow-through.
                  </p>
                  <p className="text-sm font-bold tracking-wide uppercase text-red-700/80">
                    Source: Kerry Properties (2024); Henderson Land (2024)
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col relative group">
              <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800 shadow-2xl relative overflow-hidden h-full">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 to-red-800"></div>
                <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-red-900/25 blur-3xl rounded-full pointer-events-none"></div>

                <div className="flex items-start justify-between mb-3 relative z-10">
                  <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-red-500 border border-slate-700 shadow-inner">
                    <Landmark className="w-6 h-6" />
                  </div>
                  <div className="text-6xl font-black text-slate-800 pointer-events-none select-none">03</div>
                </div>

                <div className="absolute top-10 left-1/2 -translate-x-1/2 z-10 text-center">
                  <div className="text-sm font-bold tracking-[0.18em] text-red-500 uppercase whitespace-nowrap">
                    Financing terms worsen
                  </div>
                  <div className="text-sm font-bold tracking-widest text-red-500 uppercase mt-2 whitespace-nowrap">
                    The Financing Result
                  </div>
                </div>

                <div className="mb-2 pt-5 relative z-10">
                  <h3 className="text-[1.78rem] font-extrabold text-white leading-tight">Financing Consequences</h3>
                </div>

                <div className="bg-slate-800/82 rounded-2xl p-4 border border-slate-700 mt-auto relative z-10 flex flex-col gap-3">
                  <p className="text-[0.97rem] text-slate-300 leading-snug font-medium flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-500 shrink-0 mt-2"></span>
                    <span>Weaker access to <span className="font-bold text-white">green finance</span>.</span>
                  </p>
                  <p className="text-[0.97rem] text-slate-300 leading-snug font-medium flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-500 shrink-0 mt-2"></span>
                    <span>Higher <span className="font-bold text-white">cost of capital</span>.</span>
                  </p>
                  <p className="text-sm font-bold tracking-wide uppercase text-red-400/90 pt-1">
                    Source: Kerry Properties (2024); Henderson Land (2024)
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.55, ease: "easeOut" as const }}
          className="grid grid-cols-2 gap-5 min-h-0"
        >
          <div className="bg-white rounded-3xl border border-emerald-200 shadow-lg overflow-hidden min-h-0">
            <div className="px-5 py-3 border-b border-emerald-100 bg-gradient-to-r from-emerald-50 to-white">
              <div className="text-sm font-black tracking-widest text-emerald-700 uppercase">Positive Example</div>
              <h3 className="text-[1.45rem] font-extrabold text-slate-900 leading-tight mt-1">Henderson Land</h3>
            </div>
            <div className="px-5 py-4 grid grid-cols-[0.94fr_1.06fr] gap-4 items-start">
              <div className="relative rounded-2xl overflow-hidden border border-emerald-100 h-[190px] shadow-sm">
                <Image
                  src="/images/slide53/the-henderson.jpg"
                  alt="The Henderson by Henderson Land"
                  fill
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-transparent px-3 py-2.5">
                  <div className="text-xs font-black tracking-widest text-emerald-300 uppercase">The Henderson</div>
                  <div className="text-[1rem] font-extrabold text-white leading-tight">Pricing already links to ESG performance</div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="rounded-2xl bg-emerald-50/70 border border-emerald-100 p-3">
                  <div className="text-xs font-bold tracking-widest text-emerald-700 uppercase mb-2">Financing Signal</div>
                  <div className="text-[2.1rem] font-black text-emerald-700 leading-none">HK$1bn</div>
                  <div className="text-[1.75rem] font-black text-emerald-700 leading-none mt-1">+ HK$1.6bn</div>
                </div>
                <div className="rounded-2xl border border-emerald-100 bg-white p-3">
                  <p className="text-[0.9rem] text-slate-700 leading-snug">
                    Henderson disclosed sustainability-linked loans with pricing linked to green building certification and ESG performance metrics.
                  </p>
                  <p className="text-xs font-bold tracking-wide uppercase text-emerald-700/80 mt-2">
                    Source: Henderson Land (2024)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-red-200 shadow-lg overflow-hidden min-h-0">
            <div className="px-5 py-3 border-b border-red-100 bg-gradient-to-r from-red-50 to-white">
              <div className="text-sm font-black tracking-widest text-red-700 uppercase">Negative Market Evidence</div>
              <h3 className="text-[1.45rem] font-extrabold text-slate-900 leading-tight mt-1">HKMA 2022 Research</h3>
            </div>
            <div className="px-5 py-4 grid grid-cols-[0.92fr_1.08fr] gap-4 items-start">
              <div className="rounded-2xl bg-gradient-to-br from-red-50 via-white to-rose-50 border border-red-100 p-4 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-2xl bg-red-100 flex items-center justify-center">
                    <TrendingDown className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="text-xs font-black tracking-[0.2em] text-red-700 uppercase">Market Penalty</div>
                </div>
                <div className="text-[3.2rem] font-black text-red-700 leading-none">1/3</div>
                <div className="text-sm font-extrabold tracking-widest text-red-700 uppercase mt-1">of issuers</div>
                <p className="text-[0.88rem] text-slate-700 leading-snug mt-2">
                  later showed worse environmental performance after green bond issuance.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="rounded-2xl border border-red-100 bg-red-50/55 p-3">
                  <div className="text-xs font-bold tracking-widest text-red-700 uppercase mb-1">Observed consequence</div>
                  <div className="text-[1.02rem] font-extrabold text-slate-900 leading-tight">Weaker repeat issuance prospects</div>
                </div>
                <div className="rounded-2xl border border-rose-100 bg-rose-50/55 p-3">
                  <div className="text-xs font-bold tracking-widest text-rose-700 uppercase mb-1">Observed consequence</div>
                  <div className="text-[1.02rem] font-extrabold text-slate-900 leading-tight">Higher issuance costs</div>
                </div>
                <p className="text-xs font-bold tracking-wide uppercase text-red-700/80 pt-1">
                  Source: HKMA Research Memorandum (2022)
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </div>
  );
}
