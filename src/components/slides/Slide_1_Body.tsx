import { ShieldAlert, TrendingDown, Factory, Leaf } from "lucide-react";
import PolyULogo from "@/components/PolyULogo";

export default function Slide_1_Body() {
  return (
    <div className="flex flex-col h-full w-full bg-slate-50 p-12 text-slate-800 relative">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <h2 className="text-3xl font-bold text-red-900 tracking-tight flex items-center gap-4">
          <span className="bg-red-900 text-white w-8 h-8 flex items-center justify-center text-xl font-bold rounded-sm shadow-sm">
            1.1
          </span>
          Project Topic Introduction
        </h2>
        {/* Top-Right Logo PolyU Emblem with Text */}
        <PolyULogo layout="horizontal" knotSize={48} className="drop-shadow-sm opacity-90 hover:opacity-100 transition-opacity" />
      </div>
      
      {/* Content Card */}
      <div className="flex-1 bg-white p-8 rounded-md shadow-sm border border-slate-200 flex flex-col relative overflow-hidden">
        {/* Decorative thin red line inside card */}
        <div className="absolute top-0 left-0 bottom-0 w-1 bg-red-900/10"></div>
        
        <h3 className="text-2xl font-bold text-slate-800 mb-6 pb-4 border-b border-slate-100 pl-4">
          Overview
          <span className="text-slate-500 text-lg font-normal ml-3 tracking-wide">
            (Subtitle placeholder)
          </span>
        </h3>
        
        <div className="flex-1 flex flex-col gap-4 pl-4 pr-2">
          {/* Row 1 */}
          <div className="flex items-stretch rounded-md overflow-hidden border border-slate-100 hover:shadow-md transition-shadow">
            <div className="bg-red-900 text-white w-1/3 p-4 flex items-center gap-4 font-bold text-xl tracking-wide">
              <TrendingDown className="w-6 h-6 text-red-200" />
              Point 1
            </div>
            <div className="bg-red-50/60 w-2/3 p-4 flex items-center text-slate-700 text-lg font-medium">
              Detailed description for point 1 goes here.
            </div>
          </div>
          
          {/* Row 2 */}
          <div className="flex items-stretch rounded-md overflow-hidden border border-slate-100 hover:shadow-md transition-shadow">
            <div className="bg-red-900 text-white w-1/3 p-4 flex items-center gap-4 font-bold text-xl tracking-wide">
              <ShieldAlert className="w-6 h-6 text-red-200" />
              Point 2
            </div>
            <div className="bg-white w-2/3 p-4 flex items-center text-slate-700 text-lg font-medium">
              Detailed description for point 2 goes here.
            </div>
          </div>
          
          {/* Row 3 */}
          <div className="flex items-stretch rounded-md overflow-hidden border border-slate-100 hover:shadow-md transition-shadow">
            <div className="bg-red-900 text-white w-1/3 p-4 flex items-center gap-4 font-bold text-xl tracking-wide">
              <Factory className="w-6 h-6 text-red-200" />
              Point 3
            </div>
            <div className="bg-red-50/60 w-2/3 p-4 flex items-center text-slate-700 text-lg font-medium">
              Detailed description for point 3 goes here.
            </div>
          </div>

          {/* Row 4 */}
          <div className="flex items-stretch rounded-md overflow-hidden border border-slate-100 hover:shadow-md transition-shadow">
            <div className="bg-red-900 text-white w-1/3 p-4 flex items-center gap-4 font-bold text-xl tracking-wide">
              <Leaf className="w-6 h-6 text-red-200" />
              Point 4
            </div>
            <div className="bg-white w-2/3 p-4 flex items-center text-slate-700 text-lg font-medium">
              Detailed description for point 4 goes here.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
