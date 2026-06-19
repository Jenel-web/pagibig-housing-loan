"use client";
import React from "react";
import { LogoutButton } from "./LogoutButton";
import { WelcomeMessage } from "./WelcomeMessage";
import { ActionGrid } from "./ActionGrid";
import { NavigationMenu } from "./NavigationMenu";
import { Footer } from "./Footer";
import { Navbar } from "../Navbar"; // 🛠️ Integrated path to import your global frozen Navbar

export const Dashboard: React.FC = () => {
  return (
    /* 🛠️ MASTER APPLICATION LAYOUT CONTAINER:
      - 'min-h-screen flex flex-col' guarantees that the viewport spans the full height of the monitor
        and ensures the footer layer is physically pushed to the absolute bottom of the browser page window.
      - Changed bg-gray-200 to your clean system color 'bg-[#E5E9EC]' to maintain visual brand harmony.
    */
    <div className="min-h-screen bg-[#E5E9EC] flex flex-col font-sans overflow-x-hidden antialiased">
      {/* 🛠️ FIXED: Replaced old local <DashboardHeader /> with your shared frozen navbar layout */}
      <Navbar />

      {/* 🛠️ CORE MIDDLE CONTENT AREA:
        - Added `mt-[90px]` to shift the body content cleanly down past the fixed navigation bar coordinates.
        - Centers the dashboard cards on wide desktop displays automatically via 'mx-auto'.
      */}
      <main className="flex-1 w-full max-w-[1020px] mx-auto px-6 md:px-10 pt-8 pb-12 mt-[90px] flex flex-col">
        {/* 2. GREETING & DESTRUCTION LAYER:
          - Places your "Hello, User!" greetings panel directly alongside your "LOG OUT" button action block.
          - Leverages a flexbox row configuration to keep them balanced across screen sizes.
        */}
        <div className="w-full flex items-center justify-between mb-6">
          <WelcomeMessage />
          <LogoutButton />
        </div>

        {/* 3. NAVIGATION PILL BAR FRAME & SUB-GRID:
          - Encloses the menu and the action shortcuts into a single white rounded dashboard card container.
          - Forces layout overflow-visible settings to ensure nothing clips out of boundaries.
        */}
        <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 flex flex-col gap-6 overflow-visible">
          {/* Renders your stylized dashboard baseline timeline tab tracking element anchor */}
          <NavigationMenu />

          {/* Displays your functional 4-column matrix row block shortcuts */}
          <ActionGrid />
        </div>
      </main>

      {/* 4. Corporate System System Footer Block Component */}
      <Footer />
    </div>
  );
};

export default Dashboard;
