"use client";
import React from "react";

export const Footer: React.FC = () => {
  return (
    /* 🛠️ COHESIVE SYSTEM FOOTER FRAME:
       - Spans the full horizontal width of the viewport track seamlessly ('w-full').
       - Uses your brand navy color code background ('bg-[#112C44]') instead of generic dark tones.
       - Centered layout orientation keeps your logo shield balanced on all screens.
    */
    <footer className="w-full bg-[#112C44] py-6 flex items-center justify-center border-t border-white/5 mt-auto">
      <div className="flex flex-col items-center justify-center">
        {/* Company Logo Aspect Shield Node */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/df787f17e018bdfaf895bed542e769157ed7e5ef?placeholderIfAbsent=true&apiKey=3fa53aa5a1cc472db90f2682b3fad13a"
          alt="Pag-IBIG Fund Mascot Logo"
          className="object-contain w-14 h-14 opacity-90 hover:opacity-100 transition-opacity duration-200 filter drop-shadow-[0_0_8px_rgba(163,231,255,0.4)]"
        />

        {/* Subtle decorative baseline indicator token or copy tag text can be added here if needed */}
      </div>
    </footer>
  );
};
