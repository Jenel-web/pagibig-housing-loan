"use client";
import React from "react";
import { Link } from "react-router-dom"; // Imported Link to handle the home redirect properly

interface BackNavigationProps {
  onClick?: () => void;
}

export const BackNavigation: React.FC<BackNavigationProps> = ({ onClick }) => {
  return (
    // Converted to Link pointing to "/" so it safely returns you home when clicked
    <Link
      to="/"
      onClick={onClick}
      className="inline-flex gap-1.5 items-center mb-4 cursor-pointer transform hover:-translate-x-0.5 active:scale-95 transition-all duration-200 w-fit group select-none"
    >
      {/* Crisp, compact icon matching your theme */}
      <i className="ti ti-chevron-left text-lg font-bold text-[#112C44]" />

      {/* Forced the phrase to "Back to home" with crisp typography sizing */}
      <span className="text-sm font-semibold text-[#112C44] group-hover:underline decoration-1 underline-offset-2">
        Back to home
      </span>
    </Link>
  );
};
