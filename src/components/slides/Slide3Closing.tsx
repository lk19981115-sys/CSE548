"use client";

import PolyULogo from "@/components/PolyULogo";
import { motion } from "framer-motion";
import { MessageCircle, Mail } from "lucide-react";

export default function Slide3Closing() {
  const bgUrl = "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Hong+Kong+Polytechnic+University+campus+red+brick+building+modern+architecture+sunny+day&image_size=landscape_16_9";
  
  return (
    <div className="relative flex flex-col items-center justify-center h-full w-full bg-slate-50 text-slate-800 overflow-hidden font-sans">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-red-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Subtle background texture */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.06] mix-blend-multiply"
        style={{
          backgroundImage: `url('${bgUrl}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <motion.div 
        className="relative z-10 flex flex-col items-center text-center max-w-4xl p-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* PolyU Emblem with Text */}
        <div className="mb-12 opacity-90 hover:opacity-100 transition-opacity">
          <PolyULogo layout="horizontal" knotSize={104} className="justify-center" />
        </div>
        
        <h1 className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-700 to-slate-500 mb-6 tracking-tighter leading-tight drop-shadow-sm">
          Thank You
        </h1>
        
        <div className="flex items-center gap-6 my-8">
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent to-red-600"></div>
          <h2 className="text-3xl md:text-4xl text-red-600 font-extrabold tracking-widest uppercase">
            Q & A
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-l from-transparent to-red-600"></div>
        </div>
        
        <p className="text-slate-600 text-xl md:text-2xl leading-relaxed max-w-2xl font-medium mb-12">
          We welcome any questions regarding our CSE 548 group project and the proposed solutions.
        </p>

        {/* Interactive Buttons / Badges */}
        <div className="flex gap-6">
          <motion.div 
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex items-center gap-3 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm px-6 py-3 rounded-full backdrop-blur-md cursor-pointer transition-colors"
          >
            <MessageCircle className="w-6 h-6 text-red-600" />
            <span className="font-semibold text-slate-700">Open for Discussion</span>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex items-center gap-3 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm px-6 py-3 rounded-full backdrop-blur-md cursor-pointer transition-colors"
          >
            <Mail className="w-6 h-6 text-blue-600" />
            <span className="font-semibold text-slate-700">Contact Team</span>
          </motion.div>
        </div>

      </motion.div>
    </div>
  );
}
