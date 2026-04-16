"use client";

import React from 'react';
import PolyULogo from '@/components/PolyULogo';

export default function Slide_4_5_Cover() {
  return (
    <div className="relative flex items-center justify-center h-full w-full bg-slate-900 overflow-hidden">
      <img
        src="/images/图片6.jpg"
        alt="Full Screen Image"
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => { e.currentTarget.src = '/images/图片6.png'; }}
      />
      {/* Top Right Logo */}
      <div className="absolute top-10 right-16 z-20">
        <PolyULogo layout="horizontal" knotSize={64} textColor="#ffffff" knotColor="#ffffff" className="opacity-90 drop-shadow-md" />
      </div>
    </div>
  );
}