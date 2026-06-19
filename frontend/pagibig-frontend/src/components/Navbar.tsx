import { Link } from "react-router-dom";

const NAV_LOGO =
  "https://api.builder.io/api/v1/image/assets/TEMP/a70227e5fc32d52a308aec751b2c1153ecb64655?width=154";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-[#112C44] shadow-md z-50 h-[90px]">
      <div className="max-w-[1200px] mx-auto px-12 flex items-center justify-between h-[90px]">
        <Link to="/" className="shrink-0">
          <img
            src={NAV_LOGO}
            alt="PAG-IBIG Fund"
            // 🛠️ FIXED: Replaced 'animate-pulse-slow' with standard 'animate-pulse'
            // and added a clean inline style rule to safely customize the glowing transition rate!
            className="h-[60px] w-auto animate-pulse"
            style={{
              filter: "drop-shadow(0 0 6px #A3E7FF)",
              animationDuration: "3s", // Controls your smooth slow-pulse speed without breaking Tailwind!
            }}
          />
        </Link>
        <div className="flex items-center gap-10">
          <Link
            to="/apply"
            className="border border-white text-white font-sans font-semibold text-[15px] tracking-wide px-4 py-2 rounded-[4px] hover:bg-white hover:text-[#112C44] active:scale-95 transition-all duration-200 whitespace-nowrap"
          >
            APPLY FOR A LOAN
          </Link>
          <Link
            to="/learn"
            className="text-white font-sans font-semibold text-[16px] hover:text-[#A3E7FF] active:scale-95 transition-all duration-200"
          >
            LEARN MORE
          </Link>
          <Link
            to="/contact"
            className="text-white font-sans font-semibold text-[16px] hover:text-[#A3E7FF] active:scale-95 transition-all duration-200"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </nav>
  );
}
