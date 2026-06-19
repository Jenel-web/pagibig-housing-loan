import * as React from "react";

interface FormFieldProps {
  label: string;
  placeholder: string;
  type?: string;
}

export function FormField({
  label,
  placeholder,
  type = "text",
}: FormFieldProps) {
  return (
    <div className="w-full flex flex-col gap-2">
      {/* Label styled with your clean Navy branding theme color */}
      <label className="text-sm font-semibold text-[#112C44] tracking-wide">
        {label}
      </label>

      {/* Input background changed to a light gray tint block so it pops off the white card background */}
      <div className="flex items-center w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus-within:border-blue-500 focus-within:bg-white transition-all min-h-[48px]">
        <input
          type={type}
          placeholder={placeholder}
          className="w-full bg-transparent border-none outline-none text-base text-gray-800 placeholder-gray-400"
        />
      </div>
    </div>
  );
}
