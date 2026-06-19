"use client";
import * as React from "react";

// Extended interface to accept standard HTML properties like 'name', 'required', and 'min' passed from parent forms
interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
  ...props // Dynamically forwards props like name, required, etc.
}) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {/* Label synced with your Navy brand color and given slightly sharper tracking */}
      <label className="text-sm font-semibold text-[#112C44] tracking-wide">
        {label}
      </label>

      {/* 
        Input Field Styling Polish:
        - Swapped plain bg-gray-100 out for a subtle, modern bg-gray-50 tint block
        - Injected a clean default border to prevent field washing on white containers
        - Refined focus ring colors to match your signature color scheme exactly
      */}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full h-11 px-4 text-base bg-gray-50 text-gray-800 placeholder-gray-400 rounded-lg border border-gray-200 focus:outline-none focus:border-[#112C44] focus:bg-white focus:ring-2 focus:ring-[#112C44]/10 transition-all duration-150 ${className}`}
        {...props}
      />
    </div>
  );
};
