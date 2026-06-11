"use client";
import React from "react";

export const NavigationMenu: React.FC = () => {
  return (
    /* 🛠️ SYSTEM TIMELINE TAB CONTAINER:
       - Uses layout relative placement settings to align baseline anchors cleanly.
       - Full horizontal width distribution with zero margin clips.
    */
    <div className="w-full relative flex items-center pt-2 pb-4 overflow-visible select-none">
      {/* 1. ACTIVE PILL ACCENT TOGGLE ELEMENT:
         - Displays your clean rounded-full corporate branding navy button pill.
         - Styled to stand out on the tracking layer exactly like your system mockup frame.
      */}
      <div className="z-10 bg-white pr-4">
        <div className="px-6 py-2 rounded-full border-2 border-[#112C44] bg-white flex items-center justify-center">
          <span className="text-[15px] font-bold text-[#112C44] tracking-wide">
            Dashboard
          </span>
        </div>
      </div>

      {/* 2. STYLIZED HORIZONTAL GRAPHIC BASELINE TRACK:
         - Renders that crisp structural separator line layer directly behind the toggle pill.
         - Spans across the rest of the white card layout dashboard workspace container seamlessly.
      */}
      <div className="absolute left-0 right-0 top-[50%] -translate-y-[50%] h-[2px] bg-[#112C44] z-0" />
    </div>
  );
};
