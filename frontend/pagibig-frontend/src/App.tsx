import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import LearnMore from "./components/LearnMore";
import Contact from "./components/Contact";
import { AccountCreationForm } from "./components/AccountCreation/AccountCreationForm";
import ApplyLoan from "./components/ApplyForLoan/LoanApplicationForm";
import AddPropertyForm from "./components/AddProperty/AddPropertyForm";
import MyLoansPage from "./components/MyLoans/MyLoansPage";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import LogIn from "./components/LogIn/LoginPage";
import Dashboard from "./components/UserDashboard/Dashboard"; // 🛠️ FIXED: Pointed directly to Dashboard.tsx
import { ProtectedRoute } from "./components/ProtectedRoute";

// Redirects already-logged-in users away from public-only pages (e.g. landing, login)
const AuthRedirect = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem("pagIbigRtn");
  return token ? <Navigate to="/dashboard" replace /> : <>{children}</>;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthRedirect><Home /></AuthRedirect>} />
        <Route path="/learn" element={<LearnMore />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<AccountCreationForm />} />
        <Route
          path="/apply"
          element={
            <ProtectedRoute>
              <ApplyLoan />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<AuthRedirect><LogIn /></AuthRedirect>} />

        <Route
          path="/add-property"
          element={
            <ProtectedRoute>
              <AddPropertyForm />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-loans"
          element={
            <ProtectedRoute>
              <MyLoansPage />
            </ProtectedRoute>
          }
        />

        {/* 🛠️ FIXED: Render the <Dashboard /> component on this path */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
