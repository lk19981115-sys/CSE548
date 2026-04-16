"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PresentationDeckProps {
  slides: React.ReactNode[];
}

export default function PresentationDeck({ slides }: PresentationDeckProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback((newDirection: number) => {
    setCurrentSlide((prev) => {
      const nextSlide = prev + newDirection;
      if (nextSlide >= 0 && nextSlide < slides.length) {
        setDirection(newDirection);
        return nextSlide;
      }
      return prev;
    });
  }, [slides.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        paginate(1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        paginate(-1);
      }
    };

    const handleGoToSlide = (e: CustomEvent) => {
      const index = e.detail?.slideIndex;
      if (typeof index === 'number' && index >= 0 && index < slides.length) {
        setDirection(index > currentSlide ? 1 : -1);
        setCurrentSlide(index);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("goToSlide" as any, handleGoToSlide);
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("goToSlide" as any, handleGoToSlide);
    };
  }, [paginate, currentSlide, slides.length]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      zIndex: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
      zIndex: 0,
    }),
  };

  return (
    <div className="fixed inset-0 w-screen h-screen bg-[#111827] flex items-center justify-center overflow-hidden">
      {/* 16:9 Presentation Container */}
      <div className="relative w-full max-w-[calc(100vh*(16/9))] aspect-video max-h-screen bg-white shadow-2xl overflow-hidden ring-1 ring-white/10">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
              scale: { duration: 0.3 }
            }}
            className="absolute inset-0 w-full h-full"
          >
            {slides[currentSlide]}
          </motion.div>
        </AnimatePresence>
        
        {/* Slide indicators - PolyU Red Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-slate-200/30 z-50 pointer-events-none">
          <div 
            className="h-full bg-red-900 transition-all duration-500 ease-out"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>
      </div>
      
      {/* Touch / Mouse zones for prev / next */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-16 cursor-pointer z-50 flex items-center justify-center text-white/0 hover:text-white/50 transition-colors"
        onClick={() => paginate(-1)}
      >
        <span className="text-4xl select-none">‹</span>
      </div>
      <div 
        className="absolute right-0 top-0 bottom-0 w-16 cursor-pointer z-50 flex items-center justify-center text-white/0 hover:text-white/50 transition-colors"
        onClick={() => paginate(1)}
      >
        <span className="text-4xl select-none">›</span>
      </div>
    </div>
  );
}
