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

const CONTRIBUTORS = [
  {
    name: "Cortas, Mark Jenel",
    github: "https://github.com/Jenel-web",
  },
  {
    name: "Aran, Justin Jhon",
    github: "https://github.com/justin-aran",
  },
  {
    name: "Gonzaga, Mark Andrew",
    github: "https://github.com/Menard0412",
  },
  {
    name: "Magtira, Johnmar Bartolome",
    github: "https://github.com/Johnmarmagtira",
  },
  {
    name: "Sabio, John Gabriel",
    github: "https://github.com/John-Gabriel-Sabio?fbclid=IwY2xjawScPDRleHRuA2FlbQIxMABicmlkETFITkFqdDcwNkYwTUJ4N0Izc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHsYhYoyUS86UetfG3ZM48yQFGkcLMk_Lop9mP8K8SoP-0gA3LlxzSKrD4evH_aem_ndojr2cWeF0baswd5MaT8A",
  },
];

export default function Contact() {
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
            <span className="text-[#112C44] font-semibold">Project Contributors</span>
          </div>

          <div style={{ filter: "drop-shadow(4px 5px 9px rgba(0,0,0,0.12))" }}>
            
            {/* Main Content Box */}
            <div className="bg-white w-full p-10 md:p-16 overflow-hidden rounded-md flex flex-col gap-8">
              
              {/* Header block - Aligned exactly like LearnMore page titles */}
              <div className="text-center md:text-left">
                <h1 className="font-sans font-extrabold text-[#112C44] text-[24px] leading-none tracking-tight">
                  Project Contributors
                </h1>
              </div>

              {/* Grid block for profile cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {CONTRIBUTORS.map((contributor, index) => (
                  <div
                    key={index}
                    className="group border border-transparent rounded-xl p-5 hover:shadow-[0_12px_30px_rgba(17,44,68,0.12)] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-4"
                    style={{
                      background: "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)",
                      boxShadow: "0px 8px 20px rgba(17, 44, 68, 0.08)",
                    }}
                  >
                    {/* Smaller human profile icon on dark background */}
                    <div className="w-10 h-10 rounded-full bg-[#112C44] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-200">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </div>

                    {/* Contributor detail block (Name and GitHub side-by-side as a single link) */}
                    <div className="min-w-0 flex-1">
                      <a
                        href={contributor.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link flex items-center justify-between gap-2 pr-1"
                        title={`View ${contributor.name}'s GitHub Profile`}
                      >
                        {/* Name in bold - Wrap-friendly */}
                        <span className="font-bold text-[#112C44] text-[16px] md:text-[18px] font-sans block leading-tight group-hover/link:text-[#006FFF] transition-colors duration-200 pr-1">
                          {contributor.name}
                        </span>

                        {/* GitHub Link Icon beside name - Icon Only! */}
                        <span className="text-[#506375] group-hover/link:text-[#006FFF] hover:bg-[#112C44]/5 p-1.5 rounded-full transition-all duration-200 flex items-center shrink-0">
                          <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                            />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons Row */}
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
