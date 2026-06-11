"use client";
import React from "react";
import { useNavigate } from "react-router-dom"; // Integrated routing navigation
import { ActionCard } from "./ActionCard";

export const ActionGrid: React.FC = () => {
  const navigate = useNavigate();

  const actions = [
    {
      imageSrc:
        "https://api.builder.io/api/v1/image/assets/TEMP/db9db065e41d337348185eae42f45c860f8dcb02?placeholderIfAbsent=true&apiKey=3fa53aa5a1cc472db90f2682b3fad13a",
      title: "Apply for New Loan",
      // Modernized to clear, crisp design system shadow values
      shadowClass:
        "shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)]",
      path: "/apply", // Destination path for the loan form routing pipeline
    },
    {
      imageSrc:
        "https://api.builder.io/api/v1/image/assets/TEMP/93bbd80c1382290ecbe24b605bb68c2f7c86e3c8?placeholderIfAbsent=true&apiKey=3fa53aa5a1cc472db90f2682b3fad13a",
      title: "View Loan Status",
      shadowClass:
        "shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)]",
      path: "#",
    },
    {
      imageSrc:
        "https://api.builder.io/api/v1/image/assets/TEMP/eae499cadec4c22dd9e5a13e6076c6756e07e477?placeholderIfAbsent=true&apiKey=3fa53aa5a1cc472db90f2682b3fad13a",
      title: "Update Profile",
      shadowClass:
        "shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)]",
      path: "#",
    },
    {
      imageSrc:
        "https://api.builder.io/api/v1/image/assets/TEMP/fe3f99e4339da69d2e6d6a40efd9e524439304a8?placeholderIfAbsent=true&apiKey=3fa53aa5a1cc472db90f2682b3fad13a",
      title: "Upload Document",
      shadowClass:
        "shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)]",
      path: "#",
    },
  ];

  return (
    /* 🛠️ RESPONSIVE FLEX/GRID ENGINE:
       - Stripped out volatile template absolute positions (absolute z-0 bottom left etc.)
       - Uses a clean grid layout that automatically tiles 4 columns wide on desktops
       - Added an explicit max-w constraint and centered it to keep alignment inside the main body container perfect
    */
    <section className="w-full max-w-[960px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-4 py-8">
      {actions.map((action, index) => (
        <ActionCard
          key={index}
          imageSrc={action.imageSrc}
          title={action.title}
          shadowClass={action.shadowClass}
          onClick={() => {
            if (action.path !== "#") {
              navigate(action.path); // Smoothly transitions page states dynamically
            } else {
              console.log(`${action.title} link clicked.`);
            }
          }}
        />
      ))}
    </section>
  );
};
