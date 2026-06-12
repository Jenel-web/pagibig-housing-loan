"use client";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../Navbar";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [loans, setLoans] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchLoans = async () => {
    try {
      const response = await fetch("http://localhost:8080/loans/all");
      if (response.ok) {
        const data = await response.json();
        setLoans(data);
      } else {
        console.error("Failed to fetch all loans");
      }
    } catch (error) {
      console.error("Error connecting to backend:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const role = localStorage.getItem("userRole");
    if (role !== "ADMIN") {
      navigate("/dashboard");
      return;
    }
    fetchLoans();
  }, [navigate]);

  const handleUpdateStatus = async (loanId: string, newStatus: string) => {
    try {
      const response = await fetch(`http://localhost:8080/loans/${loanId}/status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newStatus),
      });

      if (response.ok) {
        // Optimistically update the UI
        setLoans((prev) =>
          prev.map((loan) =>
            loan.loanId === loanId ? { ...loan, status: newStatus } : loan
          )
        );
      } else {
        alert("Failed to update status");
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/", { replace: true });
  };

  const formatPHP = (amount: number) => {
    return new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
    }).format(amount || 0);
  };

  return (
    <div className="min-h-screen bg-[#E5E9EC] flex flex-col font-sans antialiased">
      <Navbar />

      <div className="w-full max-w-[1200px] mx-auto px-6 pt-6 mt-[90px] flex items-center justify-between">
        <h2 className="text-2xl font-extrabold text-[#112C44]">Admin Dashboard</h2>
        <button
          onClick={handleLogout}
          type="button"
          className="px-6 py-2 bg-red-50 text-red-600 font-bold text-sm rounded-md border border-red-100 hover:bg-red-100 transition-colors"
        >
          Logout Admin
        </button>
      </div>

      <main className="flex-1 w-full max-w-[1200px] mx-auto px-6 pb-16 mt-6 flex flex-col gap-6">
        <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-extrabold text-[#112C44]">Master Loan Applications</h3>
            <p className="text-sm text-gray-500 font-medium">
              Review and manage all loan applications submitted across the system.
            </p>
          </div>

          {loading ? (
            <div className="py-10 text-center text-gray-500 font-medium">
              Loading system loans...
            </div>
          ) : loans.length === 0 ? (
            <div className="py-10 text-center text-gray-500 font-medium bg-gray-50 rounded-xl border border-gray-100">
              No loan applications found.
            </div>
          ) : (
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-left text-sm text-gray-700 whitespace-nowrap">
                <thead className="bg-gray-50 border-b border-gray-200 text-[#112C44] uppercase text-xs font-bold tracking-wider">
                  <tr>
                    <th className="px-6 py-4">Loan ID</th>
                    <th className="px-6 py-4">User RTN</th>
                    <th className="px-6 py-4">Purpose</th>
                    <th className="px-6 py-4 text-right">Amount</th>
                    <th className="px-6 py-4 text-center">Status</th>
                    <th className="px-6 py-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  {loans.map((loan) => (
                    <tr key={loan.loanId} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-[#112C44]">
                        #{loan.loanId}
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-600">
                        {loan.pagIbigRtn || "N/A"}
                      </td>
                      <td className="px-6 py-4 font-medium">
                        {loan.purposeDescription || "Housing Loan"}
                      </td>
                      <td className="px-6 py-4 text-right font-semibold text-gray-900">
                        {formatPHP(loan.desiredLoanAmount)}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span
                          className={`px-3 py-1 text-xs font-bold rounded-full ${
                            loan.status === "APPROVED"
                              ? "bg-green-100 text-green-700"
                              : loan.status === "REJECTED"
                              ? "bg-red-100 text-red-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {loan.status || "PENDING"}
                        </span>
                      </td>
                      <td className="px-6 py-4 flex gap-2 justify-center">
                        <button
                          onClick={() => handleUpdateStatus(loan.loanId, "APPROVED")}
                          disabled={loan.status === "APPROVED"}
                          className="px-4 py-1.5 bg-[#112C44] text-white text-xs font-bold rounded hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleUpdateStatus(loan.loanId, "REJECTED")}
                          disabled={loan.status === "REJECTED"}
                          className="px-4 py-1.5 bg-gray-200 text-gray-700 text-xs font-bold rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                          Reject
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
