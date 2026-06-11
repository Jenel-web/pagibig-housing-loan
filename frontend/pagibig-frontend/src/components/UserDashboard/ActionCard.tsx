"use client";
import React from "react";

interface ActionCardProps {
  imageSrc: string;
  title: string;
  shadowClass?: string; // Made optional since we can bake a beautiful uniform shadow style right here
  onClick?: () => void; // Added an optional click handler to make them functional routes
}

export const ActionCard: React.FC<ActionCardProps> = ({
  imageSrc,
  title,
  shadowClass = "shadow-md hover:shadow-lg",
  onClick,
}) => {
  return (
    /* 🛠️ TACTILE BUTTON WRAPPER:
      - Swapped <article> to an interactive <button> element for better accessibility.
      - Fixed width to full distribution scaling so it behaves in a responsive grid.
      - Added smooth hover lift effect (hover:-translate-y-1) and crisp mechanical click resistance (active:scale-[0.97]).
    */
    <button
      onClick={onClick}
      type="button"
      className={`group w-full bg-white rounded-2xl border border-gray-100 p-5 ${shadowClass} flex flex-col items-center justify-between text-center transition-all duration-200 transform hover:-translate-y-1 active:scale-[0.97] cursor-pointer outline-none focus:ring-2 focus:ring-[#112C44]/20`}
    >
      {/* ICON CONTAINER:
        - Perfectly centers the icon graphic asset.
        - Added a subtle hover scale bounce animation to the image file icon.
      */}
      <div className="flex items-center justify-center h-24 w-full mb-3">
        <img
          src={imageSrc}
          alt={title}
          className="object-contain max-h-full max-w-[110px] opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200"
        />
      </div>

      {/* CARD TYPOGRAPHY:
        - Downsized text parameter from text-2xl (which overflows easily) to a solid, bold text-[15px].
        - Locked text color to your signature corporate navy hex style (#112C44).
        - Balanced vertical tracking and line heights.
      */}
      <h3 className="text-[15px] font-bold text-[#112C44] leading-tight tracking-tight w-full mt-auto">
        {title}
      </h3>
    </button>
  );
};
