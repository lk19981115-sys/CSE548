"use client";

import React from 'react';
import { motion } from 'framer-motion';
import PolyULogo from '@/components/PolyULogo';

export default function Slide_4_3_Detail() {
  return (
    <div className="relative h-full w-full bg-slate-950 overflow-hidden font-sans">
      {/* Background Image - Full Screen */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/图片3.png"
          alt="3D Curved Glass Façade"
          className="w-full h-full object-cover"
          onError={(e) => {
            if (e.currentTarget.src.includes('.png')) {
              e.currentTarget.src = '/images/图片3.jpg';
            }
          }}
        />
      </div>

      {/* Top Right Logo */}
      <div className="absolute top-10 right-16 z-20">
        <PolyULogo layout="horizontal" knotSize={64} textColor="#ffffff" knotColor="#ffffff" className="opacity-90 drop-shadow-md" />
      </div>

      {/* Centered Transparent Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl px-16 py-10 flex flex-col items-center justify-center shadow-2xl"
        >
          <div className="font-medium uppercase tracking-widest text-white/80 text-2xl flex items-center gap-3 mb-4">
            <span className="w-10 h-px bg-white/60"></span>
            SECTION 4.3
            <span className="w-10 h-px bg-white/60"></span>
          </div>
          <h1 className="text-6xl font-extrabold tracking-tight text-white drop-shadow-lg text-center">
            3D Curved Glass Façade
          </h1>
        </motion.div>
      </div>
    </div>
  );
}