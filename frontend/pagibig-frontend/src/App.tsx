import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { AccountCreationForm } from "./components/AccountCreation/AccountCreationForm";
import ApplyLoan from "./components/ApplyForLoan/LoanApplicationForm";
import LogIn from "./components/LogIn/LoginPage";
import Dashboard from "./components/UserDashboard/Dashboard"; // 🛠️ FIXED: Pointed directly to Dashboard.tsx
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<AccountCreationForm />} />
        <Route
          path="/apply"
          element={
            <ProtectedRoute>
              <ApplyLoan />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<LogIn />} />

        {/* 🛠️ FIXED: Render the <Dashboard /> component on this path */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
