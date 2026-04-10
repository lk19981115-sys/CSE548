"use client";

import React from 'react';
import PolyULogo from '@/components/PolyULogo';
import { motion } from 'framer-motion';
import { ShieldCheck, Image as ImageIcon } from 'lucide-react';

export default function Slide_4_3_Cover() {
  return (
    <div className="flex flex-col h-full w-full bg-slate-50 relative overflow-hidden font-sans">
      
      {/* Header */}
      <div className="bg-white h-36 w-full flex items-center justify-between px-20 shadow-sm border-b border-slate-100 z-10 shrink-0">
        <div className="flex flex-col gap-2">
          <div className="font-medium uppercase tracking-widest text-red-900 text-lg flex items-center gap-3">
            <span className="w-8 h-px bg-red-900/40"></span>
            SECTION 4.2
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900">
            Solar Responsive Ventilator
          </h1>
        </div>
        <PolyULogo layout="horizontal" knotSize={64} className="opacity-90" />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 w-full max-w-[1400px] mx-auto px-20 py-8 flex flex-col justify-center min-h-0">
        
        {/* Top Callout / Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-end mb-6 shrink-0"
        >
          <div className="bg-sky-50 border border-sky-200 text-sky-800 px-6 py-3 rounded-full flex items-center gap-3 shadow-sm">
            <ShieldCheck className="w-5 h-5 text-sky-600" />
            <span className="font-bold text-lg tracking-wide">Reduce heat</span>
          </div>
        </motion.div>

        {/* Image Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl p-4 border border-slate-200 shadow-md flex-1 flex flex-col items-center justify-center relative overflow-hidden group min-h-0"
        >
          {/* 
            Fallback UI + Image Loader 
            Load "图片2.png" or "图片2.jpg" from public/images/
          */}
          <div className="w-full h-full relative flex items-center justify-center rounded-2xl overflow-hidden bg-slate-50/50">
             
             <img 
                src="/images/图片2.png" 
                alt="3D Curved Glass Façade Diagram" 
                className="w-full h-full object-contain group-hover:scale-[1.01] transition-transform duration-500 z-10"
                onError={(e) => {
                  if (e.currentTarget.src.includes('.png')) {
                    e.currentTarget.src = '/images/图片2.jpg';
                  } else {
                    e.currentTarget.style.display = 'none';
                    const placeholder = document.getElementById('image-placeholder-2');
                    if (placeholder) placeholder.style.display = 'flex';
                  }
                }}
             />
             
             {/* Placeholder UI if image is missing */}
             <div id="image-placeholder-2" className="hidden absolute inset-0 flex-col items-center justify-center text-slate-400 border-2 border-dashed border-slate-200 rounded-2xl m-4 bg-white z-0">
                <ImageIcon className="w-16 h-16 mb-4 opacity-50 text-slate-300" />
                <p className="text-xl font-bold text-slate-600 mb-2">Image Not Found</p>
                <p className="text-base font-medium text-slate-500">
                  Please save your image as <code className="bg-slate-100 text-red-800 px-2 py-1 rounded">图片2.png</code> or <code className="bg-slate-100 text-red-800 px-2 py-1 rounded">图片2.jpg</code>
                </p>
                <p className="text-sm text-slate-400 mt-1">and place it in the <code className="bg-slate-100 px-1 rounded">public/images/</code> folder.</p>
             </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}