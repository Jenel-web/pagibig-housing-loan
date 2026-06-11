"use client";
import React from "react";
import { useNavigate } from "react-router-dom";

export const LogoutButton: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("User session cleared successfully.");

    /* 🛠️ SESSION WIPE:
       Removes the display name from the browser cache so the greeting 
       resets cleanly back to "User" for the next login session.
    */
    localStorage.removeItem("display_name");

    /* 🛠️ NAVIGATION REDIRECT ROUTE:
       Instantly snaps the browser viewport back to your /login landing frame view.
    */
    navigate("/login");
  };

  return (
    <button
      onClick={handleLogout}
      type="button"
      className="px-5 h-9 text-[13px] font-bold uppercase tracking-wider text-white rounded-md bg-[#112C44] hover:bg-opacity-90 transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] transition-all duration-150 shadow-sm cursor-pointer outline-none focus:ring-2 focus:ring-[#112C44]/20"
    >
      LOG OUT
    </button>
  );
};
