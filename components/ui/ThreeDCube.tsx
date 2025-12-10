export function ThreeDCube() {
  return (
    <div className="perspective-1000 w-full h-full flex items-center justify-center">
      <div className="preserve-3d animate-spin-slow">
        <div className="relative w-64 h-64">
          <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/30 to-[#FFEB3B]/30 backdrop-blur-sm border border-[#D4AF37]/50 rounded-2xl rotate-x-45 rotate-y-45"></div>
          <div className="absolute inset-4 bg-gradient-to-tl from-[#FFEB3B]/20 to-[#D4AF37]/20 backdrop-blur-sm border border-[#D4AF37]/30 rounded-2xl rotate-x-30 rotate-y-60"></div>
          <div className="absolute inset-8 bg-gradient-to-br from-[#D4AF37]/40 to-[#FFEB3B]/40 backdrop-blur-sm border border-[#FFEB3B]/50 rounded-2xl rotate-x-60 rotate-y-30"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-[#D4AF37] rounded-lg blur-xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
