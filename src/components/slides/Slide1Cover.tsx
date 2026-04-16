"use client";

import PolyULogo from "@/components/PolyULogo";
import { motion } from "framer-motion";

export default function Slide1Cover() {
  // --- 背景图片替换说明 ---
  // 1. 请在项目的 public 文件夹下新建一个 images 文件夹 (public/images)。
  // 2. 找一张高质量的香港理工大学建筑图片（例如：The Hong Kong Polytechnic University Jockey Club Innovation Tower, PolyU architecture panorama）。
  // 3. 将图片重命名为 poly-u-landmark.jpg 并放入该文件夹。
  // 4. 将下方的 bgUrl 修改为 '/images/poly-u-landmark.jpg' 即可。
  const bgUrl = "/images/C0143 (2).jpg";
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const handleMemberClick = (slideIndex: number) => {
    window.dispatchEvent(new CustomEvent("goToSlide", { detail: { slideIndex } }));
  };

  return (
    <div className="relative flex items-center h-full w-full bg-slate-50 text-slate-800 overflow-hidden font-sans">
      
      {/* Background Image - Right half with fade mask */}
      <div className="absolute inset-0 z-0 flex justify-end pointer-events-none">
        <div className="w-2/3 h-full relative">
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 grayscale mix-blend-multiply"
            style={{
              backgroundImage: `url('${bgUrl}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center right',
            }}
          />
          {/* Gradient mask to blend with the solid left side (slate-50 -> transparent) */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent"></div>
        </div>
      </div>

      {/* Decorative Floating Elements */}
      <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-red-900/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[20%] w-[30%] h-[30%] bg-blue-900/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Content Container - Strong Left Alignment */}
      <div className="relative z-10 flex flex-col justify-center w-full max-w-6xl pl-24 h-full">
        
        {/* Content Group with uniform left padding */}
        <motion.div 
          className="flex flex-col items-start w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* Top Logo - Aligned with the rest of the content, appropriately scaled */}
          <motion.div variants={itemVariants} className="mb-10">
            <PolyULogo layout="horizontal" knotSize={64} className="opacity-90" />
          </motion.div>

          {/* Project Info Badge - Refined minimalist style */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
            <div className="w-12 h-1.5 bg-red-800 rounded-full"></div>
            <div className="text-red-800 font-black text-xl tracking-[0.2em] uppercase">
              CSE548 · GROUP PROJECT
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.div variants={itemVariants}>
            <h1 className="text-[3.5rem] md:text-[4.5rem] font-black text-slate-900 leading-[1.1] tracking-tighter mb-4 max-w-5xl drop-shadow-sm">
              Climate-Related Risks in <br />
              <span className="text-red-900">Hong Kong’s Building Sector</span>
            </h1>
          </motion.div>
          
          {/* Subtitle - Unified deep gray color, no awkward wrapping */}
          <motion.div variants={itemVariants}>
            <h2 className="text-lg md:text-xl text-slate-600 tracking-wide max-w-max leading-relaxed mb-8 whitespace-nowrap bg-white/60 px-5 py-2 rounded-xl backdrop-blur-sm border border-slate-200/50 shadow-sm">
              <span className="font-bold text-slate-800">Physical Risks, Transition Risks,</span> Financial Impacts and Strategic Responses
            </h2>
          </motion.div>
          
          {/* Decorative separator - Thin subtle line */}
          <motion.div variants={itemVariants} className="w-full max-w-3xl border-t-2 border-slate-200 mb-6"></motion.div>

          {/* Team Members List - Tighter gap, distinct hierarchy, unified font */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-x-12 gap-y-3 text-left w-full max-w-3xl font-sans relative z-20">
            <div 
              onClick={() => handleMemberClick(2)}
              className="flex items-center gap-3 bg-white/40 px-4 py-2.5 rounded-2xl border border-white/50 backdrop-blur-sm shadow-sm hover:shadow-md hover:bg-white/80 cursor-pointer hover:-translate-y-1 transition-all"
            >
              <div className="w-8 h-8 rounded-full bg-red-900/10 flex items-center justify-center text-red-900 font-bold text-lg shrink-0">C</div>
              <div className="flex flex-col">
                <span className="font-black text-slate-800 text-lg tracking-wide leading-tight">Cao Zhirui</span>
                <span className="text-slate-500 text-sm font-bold font-mono tracking-wider">25062119g (Part 1)</span>
              </div>
            </div>
            <div 
              onClick={() => handleMemberClick(5)}
              className="flex items-center gap-3 bg-white/40 px-4 py-2.5 rounded-2xl border border-white/50 backdrop-blur-sm shadow-sm hover:shadow-md hover:bg-white/80 cursor-pointer hover:-translate-y-1 transition-all"
            >
              <div className="w-8 h-8 rounded-full bg-red-900/10 flex items-center justify-center text-red-900 font-bold text-lg shrink-0">Z</div>
              <div className="flex flex-col">
                <span className="font-black text-slate-800 text-lg tracking-wide leading-tight">ZHANG Yuyu</span>
                <span className="text-slate-500 text-sm font-bold font-mono tracking-wider">25041847g (Part 2)</span>
              </div>
            </div>
            <div 
              onClick={() => handleMemberClick(11)}
              className="flex items-center gap-3 bg-white/40 px-4 py-2.5 rounded-2xl border border-white/50 backdrop-blur-sm shadow-sm hover:shadow-md hover:bg-white/80 cursor-pointer hover:-translate-y-1 transition-all"
            >
              <div className="w-8 h-8 rounded-full bg-red-900/10 flex items-center justify-center text-red-900 font-bold text-lg shrink-0">Z</div>
              <div className="flex flex-col">
                <span className="font-black text-slate-800 text-lg tracking-wide leading-tight">ZHOU Jingya</span>
                <span className="text-slate-500 text-sm font-bold font-mono tracking-wider">25042867g (Part 3)</span>
              </div>
            </div>
            <div 
              onClick={() => handleMemberClick(16)}
              className="flex items-center gap-3 bg-white/40 px-4 py-2.5 rounded-2xl border border-white/50 backdrop-blur-sm shadow-sm hover:shadow-md hover:bg-white/80 cursor-pointer hover:-translate-y-1 transition-all"
            >
              <div className="w-8 h-8 rounded-full bg-red-900/10 flex items-center justify-center text-red-900 font-bold text-lg shrink-0">Z</div>
              <div className="flex flex-col">
                <span className="font-black text-slate-800 text-lg tracking-wide leading-tight">ZHU Yan</span>
                <span className="text-slate-500 text-sm font-bold font-mono tracking-wider">25047877g (Part 4)</span>
              </div>
            </div>
            <div 
              onClick={() => handleMemberClick(26)}
              className="flex items-center gap-3 bg-white/40 px-4 py-2.5 rounded-2xl border border-white/50 backdrop-blur-sm shadow-sm hover:shadow-md hover:bg-white/80 cursor-pointer hover:-translate-y-1 transition-all"
            >
              <div className="w-8 h-8 rounded-full bg-red-900/10 flex items-center justify-center text-red-900 font-bold text-lg shrink-0">L</div>
              <div className="flex flex-col">
                <span className="font-black text-slate-800 text-lg tracking-wide leading-tight">LUO Kai</span>
                <span className="text-slate-500 text-sm font-bold font-mono tracking-wider">25108173g (Part 5)</span>
              </div>
            </div>
            <div 
              onClick={() => handleMemberClick(30)}
              className="flex items-center gap-3 bg-white/40 px-4 py-2.5 rounded-2xl border border-white/50 backdrop-blur-sm shadow-sm hover:shadow-md hover:bg-white/80 cursor-pointer hover:-translate-y-1 transition-all"
            >
              <div className="w-8 h-8 rounded-full bg-red-900/10 flex items-center justify-center text-red-900 font-bold text-lg shrink-0">Z</div>
              <div className="flex flex-col">
                <span className="font-black text-slate-800 text-lg tracking-wide leading-tight">ZHU Haotian</span>
                <span className="text-slate-500 text-sm font-bold font-mono tracking-wider">25110696g (Part 6)</span>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
