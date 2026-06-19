"use client";
import React, { useEffect, useState } from "react";

export const WelcomeMessage: React.FC = () => {
  // State initialization defaults to 'User' until the browser fetches the saved name
  const [currentName, setCurrentName] = useState("User");

  useEffect(() => {
    /* 🛠️ FETCH DATA RUNTIME HOOK:
       - Checks the browser storage cache for the key 'display_name'
       - Replaces "User" with the custom login/registration name instantly!
    */
    const savedName = localStorage.getItem("display_name");
    if (savedName) {
      setCurrentName(savedName);
    }
  }, []);

  return (
    <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-[#112C44] select-none m-0">
      Hello, {currentName}! 👋
    </h2>
  );
};
