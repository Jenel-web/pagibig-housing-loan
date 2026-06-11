"use client";
import React from "react";

const NAV_LOGO =
  "https://api.builder.io/api/v1/image/assets/TEMP/a70227e5fc32d52a308aec751b2c1153ecb64655?width=154";

interface FooterProps {
  logoSrc?: string;
  logoAlt?: string;
}

export const Footer: React.FC<FooterProps> = ({
  logoSrc = NAV_LOGO, // Pointed default parameter to your pre-defined global string constant
  logoAlt = "Pag-IBIG Logo Footer",
}) => {
  return (
    /* 
      Shifted background over to your matching brand navy hex color tone.
      Set the structural height boundary to h-[100px] to match your standard landing pages.
    */
    <footer className="w-full bg-[#112C44] h-[100px] flex items-center justify-center mt-auto">
      <img
        src={logoSrc}
        alt={logoAlt}
        /* 
          Swapped out 'w-[60px] h-[60px] rounded-full' for proportional heights 
          so the layout asset renders crisp and un-warped!
        */
        className="h-[60px] w-auto object-contain"
        // Re-applied your customized cyan aura glow effect
        style={{ filter: "drop-shadow(0 0 6px #A3E7FF)" }}
      />
    </footer>
  );
};
