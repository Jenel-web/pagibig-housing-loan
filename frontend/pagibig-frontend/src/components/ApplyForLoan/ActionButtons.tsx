"use client";
import * as React from "react";
import { useNavigate } from "react-router-dom"; // Added navigate for functionality

interface ActionButtonsProps {}

export const ActionButtons: React.FC<ActionButtonsProps> = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Next Step Control Bar */}
      <div className="flex justify-end mb-6">
        <button
          type="button"
          className="px-7 py-2.5 text-sm font-semibold bg-white rounded-3xl border-2 cursor-pointer border-[#112C44] text-[#112C44] transform hover:bg-gray-50 active:scale-95 transition-all duration-150"
        >
          Next
        </button>
      </div>

      {/* Primary Action Controls */}
      <div className="flex flex-col gap-3 items-center pb-10">
        <button
          type="submit"
          className="py-3.5 text-sm font-bold tracking-wide text-white rounded-lg cursor-pointer bg-[#112C44] w-[220px] transform hover:bg-opacity-95 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:scale-[0.98] transition-all duration-150"
        >
          SAVE DRAFT
        </button>

        <button
          type="button"
          onClick={() => navigate("/")} // Redirects back home on cancel click
          className="text-sm font-semibold tracking-normal text-red-500 underline cursor-pointer hover:text-red-600 transition-colors py-1"
        >
          CANCEL
        </button>
      </div>
    </>
  );
};
