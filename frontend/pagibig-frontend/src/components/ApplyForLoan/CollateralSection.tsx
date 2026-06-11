"use client";
import React from "react";

interface CollateralProps {
  isReviewMode: boolean;
  formData: any;
  handleInputChange: (key: string, value: string) => void;
}

export const CollateralSection: React.FC<CollateralProps> = ({
  isReviewMode,
  formData,
  handleInputChange,
}) => {
  return (
    <div className="border-t border-gray-100 pt-5 flex flex-col gap-4">
      <h3 className="text-xl font-extrabold text-[#112C44]">
        Collateral / Property Details
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-[13px] font-bold text-[#112C44]">
            Property Location
          </label>
          <input
            type="text"
            value={formData.location || ""}
            onChange={(e) => handleInputChange("location", e.target.value)}
            disabled={isReviewMode}
            className="w-full h-10 px-3 bg-gray-50 disabled:bg-gray-100 disabled:opacity-80 text-gray-800 rounded-md border border-gray-200 outline-none focus:border-[#112C44]"
            placeholder="Enter property location"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-[13px] font-bold text-[#112C44]">
            Title Holder Name
          </label>
          <input
            type="text"
            value={formData.titleHolder || ""}
            onChange={(e) => handleInputChange("titleHolder", e.target.value)}
            disabled={isReviewMode}
            className="w-full h-10 px-3 bg-gray-50 disabled:bg-gray-100 disabled:opacity-80 text-gray-800 rounded-md border border-gray-200 outline-none focus:border-[#112C44]"
            placeholder="Enter title holder name"
          />
        </div>

        <div className="flex flex-col gap-1 md:col-span-2">
          <label className="text-[13px] font-bold text-[#112C44]">
            Estimated Collateral Value
          </label>
          <input
            type="text"
            value={formData.CollateralValue || ""}
            onChange={(e) =>
              handleInputChange("CollateralValue", e.target.value)
            }
            disabled={isReviewMode}
            className="w-full h-10 px-3 bg-gray-50 disabled:bg-gray-100 disabled:opacity-80 text-gray-800 rounded-md border border-gray-200 outline-none focus:border-[#112C44]"
            placeholder="Enter estimated collateral value"
          />
        </div>
      </div>
    </div>
  );
};
