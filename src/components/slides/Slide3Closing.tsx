import PolyULogo from "@/components/PolyULogo";

export default function Slide3Closing() {
  const bgUrl = "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Hong+Kong+Polytechnic+University+campus+red+brick+building+modern+architecture+sunny+day&image_size=landscape_16_9";
  
  return (
    <div className="relative flex flex-col items-center justify-center h-full w-full bg-slate-50 text-slate-800 overflow-hidden">
      {/* Subtle background texture */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.06] mix-blend-multiply"
        style={{
          backgroundImage: `url('${bgUrl}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl p-16 bg-white/90 backdrop-blur-sm rounded-md shadow-sm border border-slate-200">
        {/* PolyU Emblem with Text */}
        <PolyULogo layout="horizontal" knotSize={104} className="mb-10 justify-center" />
        
        <h1 className="text-6xl font-extrabold text-red-900 mb-6 tracking-tight leading-tight">
          Thank You & Q&A
        </h1>
        <h2 className="text-2xl text-slate-700 font-medium mb-4 tracking-wide">
          Open for Discussion
        </h2>
        
        <div className="w-24 h-1 bg-red-900/60 my-8 rounded-full"></div>
        
        <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
          We welcome any questions regarding our CSE 548 group project and the proposed solutions.
        </p>
      </div>
    </div>
  );
}
