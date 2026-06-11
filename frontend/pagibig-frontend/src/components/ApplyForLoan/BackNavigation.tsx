"use client";
import * as React from "react";
import { Link } from "react-router-dom"; // Imported Link for routing

interface BackNavigationProps {}

export const BackNavigation: React.FC<BackNavigationProps> = () => {
  return (
    // Converted to Link pointing back to the root "/" path
    <Link
      to="/"
      className="inline-flex gap-2 items-center mb-6 cursor-pointer transform hover:-translate-x-0.5 active:scale-95 transition-all duration-200 w-fit group"
    >
      <i className="ti ti-chevron-left text-xl font-bold text-[#112C44]" />
      <span className="text-base font-semibold text-[#112C44] group-hover:underline">
        Go back to home
      </span>
    </Link>
  );
};
