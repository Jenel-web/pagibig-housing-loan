import React from "react";
import { LoginForm } from "./LoginForm";
import { Navbar } from "../Navbar"; // 🛠️ Changed this line to use your new shared Navbar
import { Footer } from "../UserDashboard/Footer"; // 🛠️ Points to your clean dashboard footer layout

export default function LoginPage() {
  return (
    /* Unified Interface Frame:
      - Flex container spreads header and footer to absolute viewport constraints.
      - Restores design engine theme typography.
    */
    <div className="min-h-screen bg-[#E5E9EC] flex flex-col font-sans">
      {/* Global Navigation Layout Frame Header */}
      <Navbar />

      {/* Perfectly Centered Interactive Login Node Workspace */}
      <div className="flex-1 flex items-center justify-center p-6">
        <LoginForm />
      </div>

      {/* Corporate System Footer Block Element */}
      <Footer />
    </div>
  );
}
