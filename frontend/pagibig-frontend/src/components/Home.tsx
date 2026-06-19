import { Link } from "react-router-dom";
import { useState } from "react";

const NAV_LOGO =
  "https://api.builder.io/api/v1/image/assets/TEMP/a70227e5fc32d52a308aec751b2c1153ecb64655?width=154";
const FOOTER_LOGO =
  "https://api.builder.io/api/v1/image/assets/TEMP/fe299647152d9fe730f21cfc5f6981db340c1477?width=154";
const BUILDING_IMG =
  "https://api.builder.io/api/v1/image/assets/TEMP/286efc0813c81d407b76629886b4085f8419b853?width=1022";

const STEP_ICONS = [
  "https://api.builder.io/api/v1/image/assets/TEMP/d49cb921136c53e4f033b436709e8edc6a829704?width=160",
  "https://api.builder.io/api/v1/image/assets/TEMP/1cc718ec0212869c446db160e9b35b4ac4a13426?width=160",
  "https://api.builder.io/api/v1/image/assets/TEMP/65ffc9c03973d3c6e03d6f9d8d7c251d361e257f?width=160",
  "https://api.builder.io/api/v1/image/assets/TEMP/5c4cf8b79c2b0d0593125beb1caadd2b750266c2?width=160",
];

const STEPS = [
  { label: "STEP 1", title: "Create an account" },
  { label: "STEP 2", title: "Check your eligibility" },
  { label: "STEP 3", title: "Secure with collateral" },
  { label: "STEP 4", title: "Get approved!" },
];

function BubbleBackground() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 w-full h-full opacity-40"
      viewBox="0 0 1280 900"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="blur-a" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="80" />
        </filter>
        <filter id="blur-b" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="80" />
        </filter>
      </defs>
      <ellipse
        cx="1100"
        cy="300"
        rx="260"
        ry="210"
        transform="rotate(-42)"
        fill="#A3E7FF"
        filter="url(#blur-a)"
      />
      <ellipse
        cx="1300"
        cy="200"
        rx="260"
        ry="210"
        transform="rotate(-42)"
        fill="#006FFF"
        filter="url(#blur-b)"
      />
      <ellipse
        cx="150"
        cy="600"
        rx="260"
        ry="210"
        transform="rotate(-57)"
        fill="#A3E7FF"
        filter="url(#blur-a)"
      />
      <ellipse
        cx="300"
        cy="450"
        rx="260"
        ry="210"
        transform="rotate(-57)"
        fill="#006FFF"
        filter="url(#blur-b)"
      />
    </svg>
  );
}

function Navbar() {
  return (
    // 🛠️ ADDED: 'sticky top-0 z-50' to safely freeze the header layout over scrolling content
    <nav className="fixed top-0 left-0 right-0 w-full bg-[#112C44] shadow-md z-50 h-[90px]">
      <div className="max-w-[1200px] mx-auto px-12 flex items-center justify-between h-[90px]">
        <Link to="/" className="shrink-0">
          <img
            src={NAV_LOGO}
            alt="PAG-IBIG Fund"
            className="h-[60px] w-auto animate-pulse-slow"
            style={{ filter: "drop-shadow(0 0 6px #A3E7FF)" }}
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

function Footer() {
  return (
    <footer className="w-full bg-[#112C44] h-[100px] flex items-center justify-center mt-auto">
      <img
        src={FOOTER_LOGO}
        alt="PAG-IBIG Fund"
        className="h-[60px] w-auto"
        style={{ filter: "drop-shadow(0 0 6px #A3E7FF)" }}
      />
    </footer>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-[#E5E9EC] font-sans overflow-x-hidden antialiased">
      <Navbar />

      <main className="flex-1 relative pb-16 pt-[90px]">
        <BubbleBackground />

        <div className="relative z-10 max-w-[1140px] mx-auto px-12 pt-10">
          <div style={{ filter: "drop-shadow(4px 5px 9px rgba(0,0,0,0.18))" }}>
            {/* 🛠️ FIX 1: Swapped `h-[320px]` out for automatic containment padding (`py-9`).
                This instantly pulls your buttons up away from the bottom edge safely!
            */}
            <div className="relative bg-white w-full py-9 overflow-hidden rounded-sm flex flex-col lg:flex-row items-stretch">
              {/* Left text body block */}
              <div className="w-[50%] pl-8 pr-6 flex flex-col z-20 bg-white justify-center">
                <div className="border border-[#737373] px-1.5 py-0.5 self-start mb-3">
                  <span className="text-[#737373] text-[9px] font-sans tracking-wide block leading-none uppercase font-medium">
                    Home Development Mutual Fund
                  </span>
                </div>

                <h1 className="font-sans font-extrabold text-[#112C44] text-[32px] leading-[1.15] tracking-tight mb-2">
                  Enjoy PAG-IBIG Housing Loan Services anytime!
                </h1>

                <p className="font-sans font-light text-gray-600 text-[14px] leading-relaxed mb-5">
                  The Home Development Mutual Fund (HDMF), more commonly known
                  as the Pag-IBIG Fund, is a Philippine government-owned and
                  controlled corporation responsible for providing national
                  savings programs and affordable shelter financing to
                  Filipinos.
                </p>

                {/* 🛠️ FIX 2: Added dynamic micro-interactions to the anchor layouts!
                    - `hover:bg-opacity-90 hover:-translate-y-0.5 hover:shadow-lg` -> smoothly lifts the box on hover
                    - `active:translate-y-0 active:scale-[0.98]` -> satisfying physical click push-down feedback
                */}
                <div className="flex flex-row gap-5">
                  <Link
                    to="/register"
                    className="bg-[#112C44] text-white font-sans font-bold text-[16px] tracking-wider rounded-[4px] px-6 py-2.5 text-center transform hover:bg-opacity-90 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-[0.98] transition-all duration-200 shadow-md whitespace-nowrap"
                  >
                    REGISTER
                  </Link>
                  <Link
                    to="/login"
                    className="bg-[#112C44] text-white font-sans font-bold text-[16px] tracking-wider rounded-[4px] px-6 py-2.5 text-center transform hover:bg-opacity-90 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-[0.98] transition-all duration-200 shadow-md whitespace-nowrap"
                  >
                    LOG IN
                  </Link>
                </div>
              </div>

              {/* Proportioned right side building background image panel */}
              <div className="absolute top-0 right-0 bottom-0 w-[52%] z-10">
                <img
                  src={BUILDING_IMG}
                  alt="PAG-IBIG Building"
                  className="w-full h-full object-cover object-center"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to right, #ffffff 0%, rgba(255,255,255,1) 6%, rgba(255,255,255,0.8) 18%, rgba(255,255,255,0) 55%)",
                  }}
                />
              </div>
            </div>

            {/* Subtitle section line */}
            <div className="pt-12 text-center w-full">
              <h2 className="font-sans font-extrabold text-[#112C44] text-[30px] leading-none tracking-tight">
                What are the processes?
              </h2>
            </div>
          </div>

          {/* Cards dynamic row block layout */}
          <div className="mt-6 w-full grid grid-cols-4 gap-5">
            {STEPS.map((step, i) => (
              <div
                key={i}
                className="rounded-[18px] overflow-hidden flex flex-col items-center pt-4 pb-4 px-4 justify-between transform hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(180deg, #FFFFFF 0%, #788795 75.48%, #506375 90.87%, #112C44 100%)",
                  height: "190px",
                  boxShadow: "0px 4px 10px rgba(0,0,0,0.06)",
                }}
              >
                <span className="font-sans font-extrabold text-[#112C44] text-[24px] tracking-tight leading-none uppercase opacity-85">
                  {step.label}
                </span>

                <p className="font-sans font-bold italic text-[#112C44] text-center text-[16px] leading-tight px-1 flex-1 flex items-center justify-center my-2">
                  {step.title}
                </p>

                <img
                  src={STEP_ICONS[i]}
                  alt={step.title}
                  className="w-[60px] h-[60px] object-contain object-bottom shrink-0"
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
