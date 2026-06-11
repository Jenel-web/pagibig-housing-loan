import * as React from "react";

export function Footer() {
  return (
    <footer className="w-full bg-[#112C44] mt-auto py-8 flex justify-center items-center min-h-[120px]">
      {/* Centered Logo matching your branding */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/a70227e5fc32d52a308aec751b2c1153ecb64655?width=154"
        alt="PAG-IBIG Fund Logo"
        className="h-12 lg:h-14 w-auto object-contain"
        style={{ filter: "drop-shadow(0 0 8.7px #A3E7FF)" }}
      />
    </footer>
  );
}
