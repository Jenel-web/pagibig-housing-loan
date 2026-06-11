"use client";
import * as React from "react";
import { useState } from "react"; // 🛠️ Added state to track what the user types
import { Link } from "react-router-dom";
import { Navbar } from "../Navbar";

export function LoginForm() {
  // Local state to capture the user's name input string
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 🛠️ THE CORE CHANGE: If they typed a name, save it to the browser storage.
    // If they left it blank, default to "User".
    const greetingName = name.trim() ? name.trim() : "User";
    localStorage.setItem("display_name", greetingName);

    console.log(`Saving user name: ${greetingName}. Moving to dashboard...`);
    window.location.href = "/dashboard";
  };

  return (
    <>
      {/* Main Canvas */}
      <div className="min-h-screen bg-[#E5E9EC] font-sans antialiased flex flex-col">
        <Navbar />

        {/* Content Section Wrapper */}
        <div className="flex-1 flex justify-center px-4 pt-[100px] pb-16">
          {/* 🛠️ WIDENED & DEEPENED CONTAINER: 
              Max width is stepped up to 560px, and inner padding is increased to p-10/lg:p-12 
          */}
          <main className="w-full sm:max-w-[500px] md:max-w-[560px] h-fit bg-white rounded-2xl p-10 lg:p-12 shadow-md border border-gray-100 flex flex-col z-40">
            {/* Header Text Scale Up */}
            <div className="mb-8">
              <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-[#112C44]">
                Welcome back! 👋
              </h1>
              <p className="text-gray-500 font-medium mt-2 text-sm lg:text-base">
                It's nice to have you back.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 w-full"
            >
              {/* Name Field */}
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-bold text-[#112C44] tracking-wide">
                  Your Name
                </label>
                {/* 🛠️ BUMPED HEIGHT (h-12), TEXT SIZE (text-base), and PADDING (px-4) */}
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full h-12 px-4 text-base bg-gray-50 text-gray-800 rounded-lg border border-gray-200 focus:outline-none focus:border-[#112C44] focus:bg-white transition-all"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-bold text-[#112C44] tracking-wide">
                  Email Address
                </label>
                {/* 🛠️ BUMPED HEIGHT (h-12), TEXT SIZE (text-base), and PADDING (px-4) */}
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full h-12 px-4 text-base bg-gray-50 text-gray-800 rounded-lg border border-gray-200 focus:outline-none focus:border-[#112C44] focus:bg-white transition-all"
                />
              </div>

              {/* Password Field */}
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-bold text-[#112C44] tracking-wide">
                  Password
                </label>
                {/* 🛠️ BUMPED HEIGHT (h-12), TEXT SIZE (text-base), and PADDING (px-4) */}
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full h-12 px-4 text-base bg-gray-50 text-gray-800 rounded-lg border border-gray-200 focus:outline-none focus:border-[#112C44] focus:bg-white transition-all"
                />
                <button
                  type="button"
                  className="text-left text-sm font-bold text-[#112C44]/80 hover:text-[#112C44] hover:underline w-fit mt-1 transition-all"
                >
                  Forgot Password?
                </button>
              </div>

              {/* 🛠️ ENLARGED BUTTON: Increased to h-12 with text-base tracking */}
              <button
                type="submit"
                className="w-full bg-[#112C44] text-white h-12 rounded-lg font-bold text-base tracking-wide hover:bg-opacity-95 active:scale-[0.99] transition-all shadow-sm mt-2 cursor-pointer"
              >
                LOG IN
              </button>
            </form>

            {/* Footer Links Sizing */}
            <p className="mt-6 text-center text-sm lg:text-base text-gray-500 font-medium">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-[#112C44] font-bold underline hover:text-opacity-80 transition-colors ml-0.5"
              >
                Register here
              </Link>
            </p>
          </main>
        </div>
      </div>
    </>
  );
}
