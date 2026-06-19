"use client";
import * as React from "react";

interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: string[];
  placeholder?: string;
}

export const SelectField: React.FC<SelectFieldProps> = ({
  label,
  options,
  placeholder,
  value,
  onChange,
  className = "",
  ...props
}) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {/* Label styled with your signature branding tone */}
      <label className="text-sm font-semibold text-[#112C44] tracking-wide">
        {label}
      </label>

      <div className="relative w-full">
        <select
          value={value}
          onChange={onChange}
          {...props}
          /* 
            CRITICAL FIXES: 
            - Added 'text-gray-800' to force the input text to show up dark.
            - Added 'pr-10' to prevent long selection text from crashing into the arrow icon.
          */
          className={`w-full h-11 px-4 pr-10 text-base bg-gray-50 text-gray-800 rounded-lg border border-gray-200 focus:outline-none focus:border-[#112C44] focus:bg-white focus:ring-2 focus:ring-[#112C44]/10 transition-all duration-150 appearance-none cursor-pointer ${className}`}
        >
          {placeholder && (
            <option value="" className="text-gray-400">
              {placeholder}
            </option>
          )}

          {/* 
            CRITICAL FIX: Forced 'text-gray-900 bg-white' directly on the option tag loops 
            so that the dropdown text options contrast perfectly against the list popup card!
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

        {/* Custom arrow indicator asset */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#112C44]">
          <svg
            className="w-4 h-4 fill-none stroke-current stroke-2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
