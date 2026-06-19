"use client";
import * as React from "react";

// Pointing to your global configuration constant asset string variable
const NAV_LOGO =
  "https://api.builder.io/api/v1/image/assets/TEMP/a70227e5fc32d52a308aec751b2c1153ecb64655?width=154";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    // Pushed background down to matching branding hex base with a min-height standard boundary
    <footer className="w-full bg-[#112C44] h-[100px] flex items-center justify-center mt-auto">
      <img
        src={NAV_LOGO}
        alt="Pag-IBIG Logo"
        className="h-[60px] w-auto object-contain"
        // Injected your customized pixel-accurate neon aura glow effect
        style={{ filter: "drop-shadow(0 0 6px #A3E7FF)" }}
      />
    </footer>
  );
};
