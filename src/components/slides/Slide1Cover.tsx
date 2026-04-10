import PolyULogo from "@/components/PolyULogo";

export default function Slide1Cover() {
  // --- 背景图片替换说明 ---
  // 1. 请在项目的 public 文件夹下新建一个 images 文件夹 (public/images)。
  // 2. 找一张高质量的香港理工大学建筑图片（例如：The Hong Kong Polytechnic University Jockey Club Innovation Tower, PolyU architecture panorama）。
  // 3. 将图片重命名为 poly-u-landmark.jpg 并放入该文件夹。
  // 4. 将下方的 bgUrl 修改为 '/images/poly-u-landmark.jpg' 即可。
  const bgUrl = "/images/C0143 (2).jpg";
  
  return (
    <div className="relative flex items-center h-full w-full bg-white text-slate-800 overflow-hidden font-sans">
      
      {/* Background Image - Right half with fade mask */}
      <div className="absolute inset-0 z-0 flex justify-end pointer-events-none">
        <div className="w-2/3 h-full relative">
          <div 
            className="absolute inset-0 grayscale opacity-40 mix-blend-multiply"
            style={{
              backgroundImage: `url('${bgUrl}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center right',
            }}
          />
          {/* Gradient mask to blend with the solid left side (white -> transparent) */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        </div>
      </div>

      {/* Main Content Container - Strong Left Alignment */}
      <div className="relative z-10 flex flex-col justify-center w-full max-w-6xl pl-20 h-full">
        
        {/* Content Group with uniform left padding */}
        <div className="flex flex-col items-start w-full">
          
          {/* Top Logo - Aligned with the rest of the content, appropriately scaled */}
          <div className="mb-16">
            <PolyULogo layout="horizontal" knotSize={56} className="opacity-90" />
          </div>

          {/* Project Info Badge - Refined minimalist style */}
          <div className="border-l-2 border-red-800 pl-3 text-red-800 font-semibold text-sm tracking-widest uppercase mb-6">
            CSE548 · GROUP PROJECT
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6 max-w-4xl">
            Climate-Related Risks in <br />
            Hong Kong’s Building Sector
          </h1>
          
          {/* Subtitle - Unified deep gray color, no awkward wrapping */}
          <h2 className="text-xl md:text-2xl text-slate-600 tracking-wide max-w-max leading-relaxed mb-12 whitespace-nowrap">
            <span className="font-semibold text-slate-800">Physical Risks, Transition Risks,</span> Financial Impacts and Strategic Responses
          </h2>
          
          {/* Decorative separator - Thin subtle line */}
          <div className="w-full max-w-2xl border-t border-slate-200 mb-10"></div>

          {/* Team Members List - Tighter gap, distinct hierarchy, unified font */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-left w-full max-w-2xl font-sans">
            <div className="flex justify-between items-center">
              <span className="font-bold text-slate-800 text-lg">ZHU Haotian</span>
              <span className="text-slate-500 text-sm font-medium tracking-wide">25110696g</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold text-slate-800 text-lg">ZHOU Jingya</span>
              <span className="text-slate-500 text-sm font-medium tracking-wide">25042867g</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold text-slate-800 text-lg">ZHU Yan</span>
              <span className="text-slate-500 text-sm font-medium tracking-wide">25047877g</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold text-slate-800 text-lg">Cao Zhirui</span>
              <span className="text-slate-500 text-sm font-medium tracking-wide">25062119g</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold text-slate-800 text-lg">ZHANG Yuyu</span>
              <span className="text-slate-500 text-sm font-medium tracking-wide">25041847g</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold text-slate-800 text-lg">LUO Kai</span>
              <span className="text-slate-500 text-sm font-medium tracking-wide">25108173g</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
