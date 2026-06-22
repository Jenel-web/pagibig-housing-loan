import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";

const FOOTER_LOGO =
  "https://api.builder.io/api/v1/image/assets/TEMP/fe299647152d9fe730f21cfc5f6981db340c1477?width=154";

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

// Custom icons for objectives
const LotIcon = () => (
  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3M5.3 5.3l13.4 13.4m0-13.4L5.3 19.3" />
  </svg>
);

const HouseLotIcon = () => (
  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
);

const CondominiumIcon = () => (
  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6h1.5m-1.5 3h1.5m-1.5 3h1.5m-1.5 3h1.5m-1.5 3h1.5m4.5-12H15m-1.5 3H15m-1.5 3H15m-1.5 3H15m-1.5 3H15" />
  </svg>
);

const ConstructionIcon = () => (
  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A1.5 1.5 0 0019.37 21l1.88-1.88a1.5 1.5 0 000-2.12l-5.83-5.83m-3.5 3.5v-3.5M11.42 15.17l-5.83-5.83A1.5 1.5 0 015 7.22l1.88-1.88a1.5 1.5 0 012.12 0l5.83 5.83m-3.5 3.5h3.5m-3.5 0l-1.88-1.88M9.5 15.5H6a2 2 0 01-2-2V9a2 2 0 012-2h3.5m6.5 6.5h3.5A2 2 0 0020 11.5V9a2 2 0 00-2-2h-3.5" />
  </svg>
);

const ImprovementIcon = () => (
  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122l9.37-9.445a3.25 3.25 0 014.596 4.597l-9.37 9.446a3.25 3.25 0 01-4.596-4.597zM16.244 8.766l1.006-1.015m-1.006 1.015l-1.007 1.014m2.013-2.029a1 1 0 00-1.414 0l-1.007 1.015m3.428-1.015a1 1 0 010 1.414l-1.007 1.015M6.75 12H3m3 0c0-1.35.5-2.53 1.35-3.4M6.75 12c0 1.35.5 2.53 1.35 3.4M12 6.75V3m0 3.75c1.35 0 2.53.5 3.4 1.35M12 6.75c-1.35 0-2.53.5-3.4 1.35M12 17.25V21m0-3.75c-1.35 0-2.53-.5-3.4-1.35" />
  </svg>
);

const RefinancingIcon = () => (
  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.656 48.656 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7C4.547 9.547 4.5 10.768 4.5 12s.047 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.092-1.209.138-2.43.138-3.662z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 10.5l3 3 3-3" />
  </svg>
);

const OBJECTIVES = [
  {
    title: "Residential Lot",
    description: "Purchase of a fully developed residential lot within an approved subdivision.",
    icon: LotIcon,
  },
  {
    title: "House & Lot Package",
    description: "Acquisition of a brand new or pre-owned house and lot package, or townhouse.",
    icon: HouseLotIcon,
  },
  {
    title: "Condominium Unit",
    description: "Purchase of a residential condominium unit, including parking slots if applicable.",
    icon: CondominiumIcon,
  },
  {
    title: "Construction / Completion",
    description: "Construction of a new house, or completion of an unfinished residential structure.",
    icon: ConstructionIcon,
  },
  {
    title: "Home Improvements",
    description: "Major renovations, expansions, or alterations to existing residential property.",
    icon: ImprovementIcon,
  },
  {
    title: "Loan Refinancing",
    description: "Refinancing of an active housing loan with another financial institution.",
    icon: RefinancingIcon,
  },
];

export default function LearnMore() {
  return (
    <div className="min-h-screen flex flex-col bg-[#E5E9EC] font-sans overflow-x-hidden antialiased">
      <Navbar />

      <main className="flex-1 relative pb-16 pt-[110px]">
        {/* Animated blurred bubble shapes */}
        <BubbleBackground />

        <div className="relative z-10 max-w-[1140px] mx-auto px-12 pt-6">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 mb-6 text-sm text-[#506375] font-medium">
            <Link to="/" className="hover:text-[#112C44] transition-colors duration-150">Home</Link>
            <span>/</span>
            <span className="text-[#112C44] font-semibold">Overview of the Project</span>
          </div>

          <div style={{ filter: "drop-shadow(4px 5px 9px rgba(0,0,0,0.12))" }}>
            
            {/* Main Content Box - Increased padding (space from border to text) and smaller gap */}
            <div className="bg-white w-full p-10 md:p-16 overflow-hidden rounded-md flex flex-col gap-8">
              
              {/* Header block - Matched with Objectives Title */}
              <div className="text-center md:text-left">
                <h1 className="font-sans font-extrabold text-[#112C44] text-[24px] leading-none tracking-tight">
                  Overview of the Project
                </h1>
              </div>

              {/* Core Description */}
              <div className="w-full flex flex-col gap-6 text-gray-700 leading-relaxed text-[15px] md:text-[16px] font-light text-left">
                <p>
                  The <strong>Home Development Mutual Fund (HDMF)</strong>, more commonly known as the{" "}
                  <strong className="text-[#006FFF] font-semibold">Pag-IBIG Fund</strong>, is a Philippine government-owned and
                  controlled corporation responsible for providing national savings programs and affordable shelter financing to Filipinos.
                </p>
                
                <p>
                  At the core of its housing program is the <strong>Housing Loan Application</strong> process, which utilizes the official physical form <strong className="font-mono bg-gray-100 border border-gray-200 px-1.5 py-0.5 rounded text-[15px] text-[#112C44] font-semibold">HQP-HLF-068</strong>. This form is widely used by eligible Pag-IBIG members across the country to formally request financial assistance for various real estate objectives.
                </p>

                <p>
                  These objectives include the purchase of fully developed residential lots, house and lot packages, condominiums, construction or completion of a residential unit, home improvements, and the refinancing of existing housing loans. The form serves as the primary data collection tool used by the agency to evaluate an applicant's financial capacity, intended loan particulars, and the viability of the collateral being offered.
                </p>
              </div>

              {/* Objectives Grid Section - Removed excess top margin */}
              <div className="flex flex-col gap-6">
                <div className="text-center md:text-left">
                  <h2 className="font-sans font-extrabold text-[#112C44] text-[24px] leading-none tracking-tight">
                    Supported Real Estate Objectives
                  </h2>
                  <p className="text-gray-500 text-[14px] mt-2">
                    Members can request financial assistance for several different real estate purposes:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {OBJECTIVES.map((item, index) => (
                    <div
                      key={index}
                      className="group border border-gray-100 rounded-xl p-8 hover:border-blue-100 transition-all duration-300 flex flex-col justify-between"
                      style={{
                        background: "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)",
                        boxShadow: "0px 4px 12px rgba(0,0,0,0.02)",
                      }}
                    >
                      <div>
                        {/* Icon holder with gradient glow */}
                        <div className="w-12 h-12 rounded-lg bg-[#112C44] flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform duration-200">
                          <item.icon />
                        </div>

                        <h3 className="font-bold text-[#112C44] text-[16px] mb-2 font-sans group-hover:text-[#006FFF] transition-colors duration-200">
                          {item.title}
                        </h3>

                        <p className="text-gray-500 font-light text-[13px] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons Row - Decreased top margin, shortened buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center border-t border-gray-100 pt-6 mt-2">
                <Link
                  to="/"
                  className="w-full sm:w-48 border border-[#112C44] text-[#112C44] font-sans font-bold text-sm tracking-wider rounded-[4px] py-2.5 text-center hover:bg-gray-50 active:scale-95 transition-all duration-200 shadow-sm"
                >
                  BACK TO HOME
                </Link>
                <Link
                  to="/apply"
                  className="w-full sm:w-48 bg-[#112C44] text-white font-sans font-bold text-sm tracking-wider rounded-[4px] py-2.5 text-center transform hover:bg-opacity-90 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-[0.98] transition-all duration-200 shadow-md"
                >
                  APPLY FOR LOAN
                </Link>
              </div>

            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
