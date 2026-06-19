import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem("pagIbigRtn");

  if (!token) {
    // If not logged in, redirect to login page.
    return <Navigate to="/login" replace />;
  }

  // If logged in, render the protected component.
  return <>{children}</>;
};
