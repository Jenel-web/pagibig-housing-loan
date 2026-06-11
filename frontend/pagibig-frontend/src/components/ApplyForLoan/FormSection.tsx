"use client";
import React from "react";

interface FormSectionProps {
  title?: string;
  isReviewMode: boolean;
  formData: any;
  handleInputChange: (key: string, value: string) => void;
  children?: React.ReactNode; // Pinapayagan pa rin si TypeScript children para sa ibang fields
}

export const FormSection: React.FC<FormSectionProps> = ({
  isReviewMode,
  formData,
  handleInputChange,
  title,
  children,
}) => {
  // KUNG may ipinasang children (gaya ng ginagawa ng LoanDetailsSection), iyon ang ire-render natin
  if (children) {
    return (
      <div className="flex flex-col gap-4">
        {title && (
          <h3 className="text-xl font-extrabold text-[#112C44]">{title}</h3>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
      </div>
    );
  }

  // KUNG WALA namang children, ire-render natin yung orihinal mong fixed fields para sa Loan Details
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-extrabold text-[#112C44]">Loans Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-[13px] font-bold text-[#112C44]">
            Desired Loan Amount
          </label>
          <input
            type="text"
            value={formData.desiredLoanAmount || ""}
            onChange={(e) =>
              handleInputChange("desiredLoanAmount", e.target.value)
            }
            disabled={isReviewMode}
            className="w-full h-10 px-3 bg-gray-50 disabled:bg-gray-100 disabled:opacity-80 text-gray-800 rounded-md border border-gray-200 outline-none focus:border-[#112C44]"
            placeholder="Enter desired loan amount"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-[13px] font-bold text-[#112C44]">
            Desired Loan Term
          </label>
          <input
            type="text"
            value={formData.desiredLoanTerm || ""}
            onChange={(e) =>
              handleInputChange("desiredLoanTerm", e.target.value)
            }
            disabled={isReviewMode}
            className="w-full h-10 px-3 bg-gray-50 disabled:bg-gray-100 disabled:opacity-80 text-gray-800 rounded-md border border-gray-200 outline-none focus:border-[#112C44]"
            placeholder="Enter desired loan term"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-[13px] font-bold text-[#112C44]">
            Downpayment Amount
          </label>
          <input
            type="text"
            value={formData.downpaymentAmount || ""}
            onChange={(e) =>
              handleInputChange("downpaymentAmount", e.target.value)
            }
            disabled={isReviewMode}
            className="w-full h-10 px-3 bg-gray-50 disabled:bg-gray-100 disabled:opacity-80 text-gray-800 rounded-md border border-gray-200 outline-none focus:border-[#112C44]"
            placeholder="Enter downpayment amount"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-[13px] font-bold text-[#112C44]">
            Estimated Installment Amount
          </label>
          <input
            type="text"
            value={formData.installment || ""}
            onChange={(e) => handleInputChange("installment", e.target.value)}
            disabled={isReviewMode}
            className="w-full h-10 px-3 bg-gray-50 disabled:bg-gray-100 disabled:opacity-80 text-gray-800 rounded-md border border-gray-200 outline-none focus:border-[#112C44]"
            placeholder="Estimated installment amount"
          />
        </div>
      </div>
    </div>
  );
};
