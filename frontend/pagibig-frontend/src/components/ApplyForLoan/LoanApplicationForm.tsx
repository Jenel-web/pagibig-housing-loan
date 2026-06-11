"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "./Footer";
import { FormSection } from "./FormSection";
import { LoanContextSection } from "./LoanContextSection";
import { CollateralSection } from "./CollateralSection";
import { Navbar } from "../Navbar";

export default function LoanApplicationForm() {
  const navigate = useNavigate();
  const [step, setStep] = useState<"edit" | "review">("edit");

  // 🛠️ FRONTEND ADJUSTMENT: Binago ang tracking keys para mag-match sa Java DTO variables nila
  const [formData, setFormData] = useState({
    purposeId: "", // Idadala sa dropdown option selection ID
    modeId: "", // Idadala sa dropdown option selection ID
    desiredLoanTerm: "", // Input string na ikoconvert sa Integer bago isubmit
    desiredLoanAmount: "", // Input string na ikoconvert sa Double
    downpaymentAmount: "", // Input string na ikoconvert sa Double
    propertyId: "PROP-001", // Temporary default value para hindi mag-null sa database nila habang wala pang location map
    CollateralValue: "", // Naka-capital 'C' para sumunod sa IntelliJ field rule niyo
  });

  const handleInputChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const isReviewMode = step === "review";

  const handleSaveDraft = () => {
    console.log("Saving draft context...", formData);
    alert("Draft successfully backed up to application cache!");
  };

  const handleConfirmSubmission = async () => {
    try {
      // 🛠️ DATA TYPE CONVERSION: Sinasalin ang text inputs sa native primitives ng Java bago ipadala
      const finalPayload = {
        purposeId: formData.purposeId,
        modeId: formData.modeId,
        desiredLoanTerm: parseInt(formData.desiredLoanTerm) || 0,
        desiredLoanAmount: parseFloat(formData.desiredLoanAmount) || 0.0,
        downpaymentAmount: parseFloat(formData.downpaymentAmount) || 0.0,
        propertyId: formData.propertyId,
        CollateralValue: parseFloat(formData.CollateralValue) || 0.0,
      };

      console.log(
        "Submitting final direct backend schema payload:",
        finalPayload,
      );

      // PANSAMANTALA: Naka-localhost muna. Kapag binigay na nila yung Ngrok link, palitan mo na lang itong URL sa ibaba.
      const response = await fetch("http://localhost:8080/api/loans/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalPayload),
      });

      if (response.ok) {
        alert(
          "Success! Your application traveled to the Java backend and saved to MySQL!",
        );
        navigate("/dashboard");
      } else {
        alert(
          "Connected to Java, but the backend encountered an error processing the data.",
        );
      }
    } catch (error) {
      console.error("Connection failed:", error);
      alert(
        "Could not reach the backend. Check if your classmate's Ngrok tunnel is running!",
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#E5E9EC] flex flex-col font-sans antialiased">
      <Navbar />

      <div className="w-full max-w-[960px] mx-auto px-6 pt-6 mt-[90px] flex items-center justify-start">
        <button
          onClick={() => navigate("/")} // 🛠️ Binago mula "/dashboard" patungong "/" para bumalik sa pinaka-landing page
          type="button"
          className="flex items-center gap-2 text-[15px] font-bold text-[#112C44] hover:underline cursor-pointer tracking-wide"
        >
          <span>❮</span> Go back to home
        </button>
      </div>

      <main className="flex-1 w-full max-w-[960px] mx-auto px-6 pb-16 mt-4 flex flex-col gap-6">
        <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10 flex flex-col gap-8">
          <FormSection
            isReviewMode={isReviewMode}
            formData={formData}
            handleInputChange={handleInputChange}
          />

          <LoanContextSection
            isReviewMode={isReviewMode}
            formData={formData}
            handleInputChange={handleInputChange}
          />

          <CollateralSection
            isReviewMode={isReviewMode}
            formData={formData}
            handleInputChange={handleInputChange}
          />
        </div>

        <div className="w-full flex justify-center items-center mt-4">
          {step === "edit" ? (
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={handleSaveDraft}
                className="px-6 h-10 border-2 border-[#112C44] text-[#112C44] text-xs font-bold uppercase tracking-wider rounded-md bg-white hover:bg-gray-50 transition-all cursor-pointer"
              >
                Save as Draft
              </button>
              <button
                type="button"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setStep("review");
                }}
                className="px-8 h-10 bg-[#112C44] text-white text-xs font-bold uppercase tracking-wider rounded-md hover:bg-opacity-90 transition-all cursor-pointer shadow-sm"
              >
                Next Step
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setStep("edit");
                }}
                className="px-6 h-11 border-2 border-[#112C44] text-[#112C44] text-[13px] font-bold uppercase tracking-wider rounded-md bg-white hover:bg-gray-50 transition-all cursor-pointer shadow-sm"
              >
                Edit Information
              </button>
              <button
                type="button"
                onClick={handleConfirmSubmission}
                className="px-8 h-11 bg-[#112C44] text-white text-[13px] font-bold uppercase tracking-wider rounded-md hover:bg-opacity-95 transition-all cursor-pointer shadow-md transform active:scale-[0.99]"
              >
                Confirm Submission
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
