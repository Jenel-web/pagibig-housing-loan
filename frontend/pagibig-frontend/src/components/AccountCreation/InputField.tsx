"use client";
import React from "react";

// Extended interface to dynamically pass native HTML features (like placeholder, name, required)
interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  value,
  onChange,
  className = "",
  ...props // Automatically captures any other props passed down from a parent form
}) => {
  return (
    /* 
      Layout Tuning:
      - Swapped out flex-1 as a default string to prevent inputs from stretching unevenly.
      - Tightened down tracking spacing parameters.
    */
    <div className={`flex flex-col gap-1 w-full ${className}`}>
      {/* 
        Sized label text tracking down slightly from text-sm to text-[13px] 
        and shifted it to your exact brand Navy color code.
      */}
      <label className="text-[13px] font-bold text-[#112C44] tracking-wide">
        {label}
      </label>

      {/* 
        Input Sizing and Spacing Compression:
        - Reduced block frame height from h-11 to h-9 and dropped font parameters to text-sm.
        - Exchanged raw bg-slate-200 for a crisp bg-gray-50 tint block to prevent layout wash out.
        - Scrubbed out the invalid border-[nonepx] syntax.
        - Loaded interactive, smooth focus animation ring responses.
      */}
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full h-9 px-3 text-sm bg-gray-50 text-gray-800 placeholder-gray-400 rounded-md border border-gray-200 focus:outline-none focus:border-[#112C44] focus:bg-white focus:ring-2 focus:ring-[#112C44]/5 transition-all duration-150"
        {...props}
      />
    </div>
  );
};
