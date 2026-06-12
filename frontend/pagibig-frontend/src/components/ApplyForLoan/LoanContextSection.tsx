"use client";
import React from "react";

interface LoanContextProps {
  isReviewMode: boolean;
  formData: any;
  handleInputChange: (key: string, value: string) => void;
  purposes: any[];
  modes: any[];
}

export const LoanContextSection: React.FC<LoanContextProps> = ({
  isReviewMode,
  formData,
  handleInputChange,
  purposes,
  modes,
}) => {
  return (
    <div className="border-t border-gray-100 pt-5 flex flex-col gap-4">
      <h3 className="text-xl font-extrabold text-[#112C44]">
        Loan Context and Setup
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* 1. PURPOSE OF LOAN DROPDOWN */}
        <div className="flex flex-col gap-1">
          <label className="text-[13px] font-bold text-[#112C44]">
            Purpose of Loan
          </label>
          <select
            value={formData.purposeId || ""}
            onChange={(e) => handleInputChange("purposeId", e.target.value)}
            disabled={isReviewMode}
            className="w-full h-10 px-3 bg-gray-50 disabled:bg-gray-100 disabled:opacity-80 text-gray-800 rounded-md border border-gray-200 outline-none focus:border-[#112C44] cursor-pointer"
          >
            <option value="">Select Purpose</option>
            {purposes.map((purpose) => (
              <option key={purpose.purposeId} value={purpose.purposeId}>
                {purpose.purpose_description}
              </option>
            ))}
          </select>
        </div>

        {/* 2. MODE OF PAYMENT DROPDOWN */}
        <div className="flex flex-col gap-1">
          <label className="text-[13px] font-bold text-[#112C44]">
            Mode of Payment
          </label>
          <select
            value={formData.modeId || ""}
            onChange={(e) => handleInputChange("modeId", e.target.value)}
            disabled={isReviewMode}
            className="w-full h-10 px-3 bg-gray-50 disabled:bg-gray-100 disabled:opacity-80 text-gray-800 rounded-md border border-gray-200 outline-none focus:border-[#112C44] cursor-pointer"
          >
            <option value="">Select Mode</option>
            {modes.map((mode) => (
              <option key={mode.modeId} value={mode.modeId}>
                {mode.paymentModeDescription}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
