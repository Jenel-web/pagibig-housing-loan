import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="w-full bg-[#112C44]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 flex items-center justify-between h-[90px] lg:h-[126px]">
        {/* Logo redirecting back to home page */}
        <Link to="/" className="shrink-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/a70227e5fc32d52a308aec751b2c1153ecb64655?width=154"
            alt="PAG-IBIG Fund"
            className="h-14 lg:h-[83px] w-auto"
            style={{ filter: "drop-shadow(0 0 8.7px #A3E7FF)" }}
          />
        </Link>

        {/* Navigation Items container staying horizontal */}
        <div className="flex items-center gap-6 lg:gap-[69px]">
          <Link
            to="/apply"
            className="border border-white text-white font-sans font-semibold text-xs lg:text-[23px] leading-none px-3 lg:px-[18px] py-2 lg:py-3 rounded-[5px] hover:bg-white/10 transition-colors whitespace-nowrap"
          >
            APPLY FOR A LOAN
          </Link>
          <Link
            to="/learn"
            className="text-white font-sans font-semibold text-xs lg:text-[23px] leading-none hover:text-[#A3E7FF] transition-colors whitespace-nowrap"
          >
            LEARN MORE
          </Link>
          <Link
            to="/contact"
            className="text-white font-sans font-semibold text-xs lg:text-[23px] leading-none hover:text-[#A3E7FF] transition-colors whitespace-nowrap"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </nav>
  );
}
