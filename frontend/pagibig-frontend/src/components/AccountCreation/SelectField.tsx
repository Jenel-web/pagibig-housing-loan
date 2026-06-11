"use client";
import React from "react";

interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: string[]; // Changed from SelectOption[] to standard string[]
  placeholder?: string;
}

export const SelectField: React.FC<SelectFieldProps> = ({
  label,
  options,
  value,
  onChange,
  placeholder = "Select an option",
  className = "",
  ...props
}) => {
  return (
    <div className={`flex flex-col gap-1 w-full ${className}`}>
      <label className="text-[13px] font-bold text-[#112C44] tracking-wide">
        {label}
      </label>

      <div className="relative w-full">
        <select
          value={value}
          onChange={onChange}
          {...props}
          className="w-full h-9 px-3 pr-8 text-sm bg-gray-50 text-gray-800 rounded-md border border-gray-200 focus:outline-none focus:border-[#112C44] focus:bg-white focus:ring-2 focus:ring-[#112C44]/5 transition-all duration-150 appearance-none cursor-pointer"
        >
          {placeholder && (
            <option value="" className="text-gray-400">
              {placeholder}
            </option>
          )}

          {/* 🛠️ THE FIX: 
            Since 'option' is now a straight string, we use it directly 
            for the key, value, and display text!
          */}
          {options.map((option) => (
            <option
              key={option}
              value={option}
              className="text-gray-900 bg-white"
            >
              {option}
            </option>
          ))}
        </select>

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#112C44]">
          <i className="ti ti-chevron-down text-base font-bold" />
        </div>
      </div>
    </div>
  );
};
