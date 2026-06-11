"use client";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NAV_LOGO =
  "https://api.builder.io/api/v1/image/assets/TEMP/a70227e5fc32d52a308aec751b2c1153ecb64655?width=154";

export const DashboardHeader: React.FC = () => {
  const navigate = useNavigate();

  return (
    /* 🛠️ NAVIGATION HEADER BANNER:
       - Fills the full horizontal browser track seamlessly ('w-full').
       - Set to your exact premium brand navy theme color background ('bg-[#112C44]').
       - Flexible row distribution places logo on the left and links on the right automatically.
    */
    <header className="w-full bg-[#112C44] text-white px-6 md:px-12 py-4 flex items-center justify-between shadow-md">
      {/* LEFT ASPECT: Interactive Logo Node Wrapper */}
      <button
        onClick={() => navigate("/dashboard")}
        type="button"
        className="flex items-center gap-3 group focus:outline-none cursor-pointer"
      >
        {/* Logo Asset: Utilizing your official Pag-IBIG circle mascot graphic logo shell 
          from the application assets tree
        */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/a70227e5fc32d52a308aec751b2c1153ecb64655?width=154"
          alt="Pag-IBIG Fund Logo"
          className="w-12 h-12 object-contain group-hover:scale-105 transition-transform duration-200"
        />
        {/* Hidden system title text label available for screen readers */}
        <span className="sr-only">Pag-IBIG Dashboard</span>
      </button>

      {/* RIGHT ASPECT: Clean Content Link Menu Navigation List */}
      <nav className="flex items-center gap-6 lg:gap-10">
        {/* Specialized Pill Button Match Link */}
        <Link
          to="/apply"
          className="border border-white/80 rounded-md px-4 py-2 text-[13px] font-bold tracking-wide uppercase hover:bg-white hover:text-[#112C44] transform active:scale-[0.98] transition-all duration-150"
        >
          Apply for a Loan
        </Link>

        <Link
          to="#"
          className="text-[13px] font-bold tracking-wide uppercase text-white/90 hover:text-white hover:underline decoration-2 underline-offset-4 transition-all"
        >
          Learn More
        </Link>

        <Link
          to="#"
          className="text-[13px] font-bold tracking-wide uppercase text-white/90 hover:text-white hover:underline decoration-2 underline-offset-4 transition-all"
        >
          Contact Us
        </Link>
      </nav>
    </header>
  );
};
