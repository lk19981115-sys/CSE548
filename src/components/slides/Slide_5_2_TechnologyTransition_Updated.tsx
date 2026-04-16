"use client";

import React from 'react';
import PolyULogo from '@/components/PolyULogo';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Building, ClipboardCheck, TrendingUp } from 'lucide-react';

const retrofitTags = [
  'Limited floor height',
  'Limited plant space',
  'Legacy service routes',
  'Complex commissioning',
];

const pressureNodes = [
  {
    label: 'System upgrades',
    note: 'HVAC, metering, envelope',
    className: 'bg-gradient-to-br from-amber-50 to-white border-amber-200',
    textClassName: 'text-amber-800',
  },
  {
    label: 'Multi-party coordination',
    note: 'owners, managers, tenants',
    className: 'bg-gradient-to-br from-slate-100 to-white border-slate-300',
    textClassName: 'text-blue-900',
  },
  {
    label: 'Operational disruption',
    note: 'timing, access, operations',
    className: 'bg-gradient-to-br from-red-50 to-white border-red-200',
    textClassName: 'text-red-800',
  },
];

export default function Slide_5_2_TechnologyTransition_Updated() {
  return (
    <div className="flex flex-col h-full w-full bg-slate-50 relative overflow-hidden font-sans">
      <div className="bg-white h-36 w-full flex items-center justify-between px-20 shadow-sm border-b border-slate-100 z-10 shrink-0">
        <div className="flex flex-col gap-2">
          <div className="font-medium uppercase tracking-widest text-red-900 text-lg flex items-center gap-3">
            <span className="w-8 h-px bg-red-900/40"></span>
            SECTION 5.2
          </div>
          <h1 className="text-[2.7rem] font-extrabold tracking-tight text-slate-900 leading-tight">
            Technology Risk: <span className="text-red-800">Cost, Incentives &amp; Retrofit</span>
          </h1>
        </div>
        <PolyULogo layout="horizontal" knotSize={64} className="opacity-90" />
      </div>

      <div className="flex-1 w-full max-w-[1600px] mx-auto px-20 py-5 flex flex-col justify-start min-h-0">
        <div className="grid grid-cols-2 gap-8 w-full flex-1 min-h-0">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' as const }}
            className="bg-white rounded-3xl p-5 border border-slate-200 shadow-lg relative overflow-hidden flex flex-col"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-slate-700 to-red-700"></div>

            <div className="flex items-center gap-4 mb-4 shrink-0">
              <div className="w-14 h-14 bg-slate-100 text-slate-800 rounded-2xl flex items-center justify-center shadow-sm border border-slate-200">
                <TrendingUp strokeWidth={1.8} className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-1">Barrier 1</h2>
                <h3 className="text-[2rem] font-extrabold text-slate-900 leading-tight">Cost and Incentive Mismatch</h3>
              </div>
            </div>

            <div className="grid grid-rows-[0.95fr_0.58fr] gap-3 flex-1 min-h-0">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1, ease: 'easeOut' as const }}
                className="rounded-3xl bg-gradient-to-br from-red-50 via-white to-slate-100 border border-red-100 p-4 grid grid-cols-[1.18fr_0.82fr] gap-4 min-h-0"
              >
                <div className="flex flex-col justify-between min-w-0">
                  <div>
                    <div className="text-sm font-bold tracking-widest text-red-700 uppercase mb-2">BEAM Plus Cost Case</div>
                    <div className="text-[4rem] leading-none font-black tracking-tight text-red-700">HK$3,350</div>
                    <div className="text-[1.55rem] leading-none font-bold text-slate-800 mt-1">/m²/credit</div>
                    <p className="mt-3 text-lg leading-snug text-slate-700 max-w-[26rem]">
                      Some Energy Use credits can add a large upfront premium in Hong Kong.
                    </p>
                  </div>
                  <p className="mt-3 text-sm font-bold tracking-wide uppercase text-red-700/80">
                    Source: Chau et al. (2023)
                  </p>
                </div>

                <div className="rounded-2xl overflow-hidden border border-slate-200 relative h-[256px] max-w-[386px] w-full justify-self-end self-start bg-slate-200">
                  <Image
                    src="/images/slide52/mic-installation.jpg"
                    alt="MiC installation in Hong Kong"
                    fill
                    sizes="(max-width: 1600px) 40vw, 520px"
                    className="object-cover"
                    draggable={false}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-slate-950/75 p-3">
                    <p className="text-[0.86rem] leading-snug text-white">
                      <span className="font-bold text-amber-300">MiC:</span> lower-carbon, but still exposed to
                      transport, lifting and damage risk.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.18, ease: 'easeOut' as const }}
                className="rounded-3xl bg-slate-50 border border-slate-200 p-4 flex flex-col"
              >
                <div className="text-sm font-black tracking-widest text-slate-900 uppercase mb-3">Literature in Brief</div>
                <div className="flex flex-col gap-3 flex-1 min-h-0">
                  <div className="relative rounded-2xl bg-gradient-to-r from-red-50/80 to-white border border-red-100 border-l-[3px] border-l-red-400 px-4 py-3 pr-40 flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white text-red-700 flex items-center justify-center shrink-0 border border-red-100">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[1.02rem] font-semibold text-red-800 leading-snug">Upfront cost still leads</p>
                      <p className="absolute top-4 right-4 w-fit text-[0.68rem] font-bold tracking-wide uppercase text-red-700/80 bg-white/90 border border-red-100 rounded-full px-2 py-1">
                          Yeung et al. (2022)
                      </p>
                      <p className="mt-1 text-[0.93rem] text-slate-600 leading-snug">
                        Initial CAPEX remains the main barrier to wider BEAM Plus adoption.
                      </p>
                    </div>
                  </div>

                  <div className="relative rounded-2xl bg-gradient-to-r from-amber-50/70 to-white border border-amber-100 border-l-[3px] border-l-amber-400 px-4 py-3 pr-40 flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white text-amber-700 flex items-center justify-center shrink-0 border border-amber-100">
                      <ClipboardCheck className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[1.02rem] font-semibold text-amber-800 leading-snug">Incentives do not ensure depth</p>
                      <p className="absolute top-4 right-4 text-[0.68rem] font-bold tracking-wide uppercase text-amber-700/80 shrink-0 bg-white/90 border border-amber-100 rounded-full px-2 py-1">
                          Fan et al. (2018)
                      </p>
                      <p className="mt-1 text-[0.93rem] text-slate-600 leading-snug">
                        GFA concessions attract projects, but not necessarily deeper performance.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' as const }}
            className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xl relative overflow-hidden flex flex-col"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-500 to-red-600"></div>

            <div className="flex items-center gap-4 mb-4 shrink-0">
              <div className="w-14 h-14 bg-amber-50 text-amber-700 rounded-2xl flex items-center justify-center shadow-sm border border-amber-100">
                <Building strokeWidth={1.8} className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-sm font-bold tracking-widest text-amber-700 uppercase mb-1">Barrier 2</h2>
                <h3 className="text-[2rem] font-extrabold text-slate-900 leading-tight">Existing-Building Retrofit Constraint</h3>
              </div>
            </div>

            <div className="grid grid-rows-[0.95fr_0.55fr] gap-3 flex-1 min-h-0">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.16, ease: 'easeOut' as const }}
                className="rounded-3xl bg-amber-50/70 border border-amber-100 p-4 grid grid-cols-[0.9fr_1.1fr] gap-4 min-h-0"
              >
                <div className="rounded-2xl overflow-hidden border border-slate-200 relative min-h-[205px] bg-slate-200">
                  <Image
                    src="/images/slide52/atal-tower.jpg"
                    alt="ATAL Tower in Hong Kong"
                    fill
                    sizes="(max-width: 1600px) 40vw, 520px"
                    className="object-cover"
                    draggable={false}
                  />
                  <div className="absolute top-3 left-3 rounded-full bg-white/92 px-3 py-1 text-sm font-bold tracking-wide text-slate-900 shadow-sm">
                    ATAL Tower
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-slate-950/75 p-3">
                    <p className="text-sm leading-snug text-white">Low-carbon office retrofit case in Hong Kong</p>
                    <p className="mt-2 text-[0.72rem] font-bold tracking-wide uppercase text-white/70">
                      Source: CIBSE Journal (2026)
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-between min-w-0">
                  <div>
                    <div className="text-sm font-bold tracking-widest text-amber-700 uppercase mb-2">Case Takeaway</div>
                    <h4 className="text-[1.55rem] font-black text-slate-900 leading-tight">
                      Retrofit is constrained by the host building
                    </h4>
                    <p className="mt-2 text-[1rem] leading-snug text-slate-600">
                      Even a low-carbon retrofit can be constrained by the host building.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-3">
                    {retrofitTags.map((tag) => (
                      <div
                        key={tag}
                        className="rounded-2xl bg-white/90 border border-amber-200 px-3 py-3 text-sm font-bold leading-snug text-slate-800 shadow-sm"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.24, ease: 'easeOut' as const }}
                className="rounded-3xl bg-gradient-to-br from-white via-slate-50 to-red-50/70 border border-slate-200 p-4 flex flex-col justify-between"
              >
                <div>
                  <div className="text-sm font-black tracking-widest text-slate-900 uppercase mb-2">Where the Difficulty Appears</div>
                  <h4 className="text-lg font-black text-orange-700 leading-tight">Retrofit pressure usually appears as</h4>
                </div>

                <div className="grid grid-cols-3 gap-3 my-4">
                  {pressureNodes.map((node) => (
                    <div
                      key={node.label}
                      className={`rounded-2xl border px-3 py-4 text-left shadow-sm ${node.className}`}
                    >
                      <p className="text-[0.66rem] font-bold tracking-[0.18em] uppercase text-slate-500 mb-1">Pressure</p>
                      <p className={`text-[0.98rem] font-black leading-snug ${node.textClassName}`}>
                        {node.label}
                      </p>
                      <p className="mt-1 text-[0.85rem] leading-snug text-slate-500">{node.note}</p>
                    </div>
                  ))}
                </div>

                <p className="text-[0.98rem] leading-snug text-slate-600">
                  Once these pressures combine, low-carbon retrofit becomes slower, costlier and less flexible.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
