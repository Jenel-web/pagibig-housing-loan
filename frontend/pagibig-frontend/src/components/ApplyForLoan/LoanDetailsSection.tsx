"use client";
import * as React from "react";
import { FormSection } from "./FormSection";
import { InputField } from "./InputField";

interface LoanDetailsSectionProps {}

export const LoanDetailsSection: React.FC<LoanDetailsSectionProps> = () => {
  return (
    <FormSection title="Loans Details">
      {/* Desired Loan Amount: Numeric type config with a realistic default placeholder */}
      <InputField
        label="Desired Loan Amount (PHP)"
        name="desiredLoanAmount"
        type="number"
        placeholder="e.g., 2500000"
        min="0"
        required
      />

      {/* Desired Loan Term: Marked for Months so it matches standard Pag-IBIG tenure calculations */}
      <InputField
        label="Desired Loan Term (Months)"
        name="desiredLoanTerm"
        type="number"
        placeholder="e.g., 120, 240, 360"
        min="1"
        required
      />

      {/* Downpayment Amount: Clean currency tracker layout field */}
      <InputField
        label="Downpayment Amount (PHP)"
        name="downpaymentAmount"
        type="number"
        placeholder="e.g., 500000"
        min="0"
        required
      />

      {/* Estimated Installment Amount: Set as a standard numeric tracker value */}
      <InputField
        label="Estimated Installment Amount (PHP)"
        name="estimatedInstallmentAmount"
        type="number"
        placeholder="e.g., 18500"
        min="0"
        required
      />
    </FormSection>
  );
};
