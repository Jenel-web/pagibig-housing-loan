"use client";
import React from "react";

interface FormSectionProps {
  title: string;
  children: React.ReactNode;
}

export const FormSection: React.FC<FormSectionProps> = ({
  title,
  children,
}) => {
  return (
    /* 
      FORCE VISIBILITY FIX:
      - Added 'relative z-10' as a base layer positioning setting.
      - Added 'overflow-visible' to guarantee that elements are never clipped or cropped!
    */
    <section className="mb-4 relative z-10 overflow-visible">
      <h2 className="mb-3 text-lg font-bold text-[#112C44] tracking-tight">
        {title}
      </h2>

      {/* Forced overflow-visible here as well to kill any inherited layout cropping boxes */}
      <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-100 overflow-visible">
        {children}
      </div>
    </section>
  );
};
