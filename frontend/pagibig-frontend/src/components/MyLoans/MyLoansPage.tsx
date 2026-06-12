"use client";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../Navbar";
import { Footer } from "../UserDashboard/Footer";

export default function MyLoansPage() {
  const navigate = useNavigate();
  const [loans, setLoans] = useState<any[]>([]);
  const [expandedLoanId, setExpandedLoanId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const pagIbigRtn = localStorage.getItem("pagIbigRtn");
        if (!pagIbigRtn) {
          navigate("/login");
          return;
        }

        const response = await fetch(
          `http://localhost:8080/loans/get?userId=${pagIbigRtn}`
        );
        if (response.ok) {
          const data = await response.json();
          setLoans(data);
        } else {
          console.error("Failed to fetch loans:", await response.text());
        }
      } catch (error) {
        console.error("Error connecting to backend:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLoans();
  }, [navigate]);

  const toggleRow = (loanId: string) => {
    if (expandedLoanId === loanId) {
      setExpandedLoanId(null);
    } else {
      setExpandedLoanId(loanId);
    }
  };

  // Utility formatter for currency
  const formatPHP = (amount: number) => {
    return new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
    }).format(amount || 0);
  };

  return (
    <div className="min-h-screen bg-[#E5E9EC] flex flex-col font-sans antialiased">
      <Navbar />

      <div className="w-full max-w-[960px] mx-auto px-6 pt-6 mt-[90px] flex items-center justify-start">
        <button
          onClick={() => navigate("/dashboard")}
          type="button"
          className="flex items-center gap-2 text-[15px] font-bold text-[#112C44] hover:underline cursor-pointer tracking-wide"
        >
          <span>❮</span> Back to Dashboard
        </button>
      </div>

      <main className="flex-1 w-full max-w-[960px] mx-auto px-6 pb-16 mt-4 flex flex-col gap-6">
        <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-extrabold text-[#112C44]">My Loans</h3>
            <p className="text-sm text-gray-500 font-medium">
              View your loan application history and track their details.
            </p>
          </div>

          {loading ? (
            <div className="py-10 text-center text-gray-500 font-medium">
              Loading your loans...
            </div>
          ) : loans.length === 0 ? (
            <div className="py-10 text-center text-gray-500 font-medium bg-gray-50 rounded-xl border border-gray-100">
              You haven't applied for any loans yet.
            </div>
          ) : (
            <div className="overflow-hidden rounded-xl border border-gray-200">
              <table className="w-full text-left text-sm text-gray-700">
                <thead className="bg-gray-50 border-b border-gray-200 text-[#112C44] uppercase text-xs font-bold tracking-wider">
                  <tr>
                    <th className="px-6 py-4">Loan ID</th>
                    <th className="px-6 py-4">Purpose</th>
                    <th className="px-6 py-4 text-right">Loan Amount</th>
                    <th className="px-6 py-4 text-right">Amortization</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  {loans.map((loan) => (
                    <React.Fragment key={loan.loanId}>
                      {/* Interactive Master Row */}
                      <tr
                        onClick={() => toggleRow(loan.loanId)}
                        className={`cursor-pointer transition-colors duration-150 ease-in-out ${
                          expandedLoanId === loan.loanId
                            ? "bg-blue-50/50"
                            : "hover:bg-gray-50"
                        }`}
                      >
                        <td className="px-6 py-4 font-semibold text-[#112C44]">
                          #{loan.loanId}
                        </td>
                        <td className="px-6 py-4 font-medium">
                          {loan.purposeDescription || "Housing Loan"}
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-gray-900">
                          {formatPHP(loan.desiredLoanAmount)}
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-[#112C44]">
                          {formatPHP(loan.installmentAmount)}
                        </td>
                      </tr>

                      {/* Expanded Details Card */}
                      {expandedLoanId === loan.loanId && (
                        <tr>
                          <td colSpan={4} className="p-0 border-0">
                            <div className="bg-blue-50/30 px-6 py-6 border-b border-gray-200 shadow-inner">
                              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 flex flex-col gap-5">
                                {/* Header */}
                                <div className="border-b border-gray-100 pb-3">
                                  <h4 className="text-[15px] font-extrabold text-[#112C44]">
                                    {loan.purposeDescription || "Housing Loan"} &mdash; #{loan.loanId}
                                  </h4>
                                </div>

                                {/* Financial Breakdown */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                  <div className="flex flex-col gap-1">
                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                                      Total Loan
                                    </span>
                                    <span className="text-sm font-semibold text-gray-900">
                                      {formatPHP(loan.desiredLoanAmount)}
                                    </span>
                                  </div>
                                  <div className="flex flex-col gap-1">
                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                                      Term
                                    </span>
                                    <span className="text-sm font-semibold text-gray-900">
                                      {loan.desiredLoanTerm} Months
                                    </span>
                                  </div>
                                  <div className="flex flex-col gap-1">
                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                                      Amortization
                                    </span>
                                    <span className="text-sm font-semibold text-[#112C44]">
                                      {formatPHP(loan.installmentAmount)} /{" "}
                                      <span className="text-gray-600 font-medium">
                                        {loan.paymentModeDescription || "Month"}
                                      </span>
                                    </span>
                                  </div>
                                </div>

                                {/* Collateral Details Box */}
                                <div className="mt-2 bg-gray-50 rounded-md p-4 border border-gray-200">
                                  <details className="group cursor-pointer">
                                    <summary className="flex items-center gap-2 text-[13px] font-bold text-[#112C44] outline-none select-none">
                                      <span className="transition-transform duration-200 group-open:rotate-90">
                                        ▶
                                      </span>
                                      View Asset &amp; Collateral Details
                                    </summary>
                                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 pl-5">
                                      <div className="flex flex-col gap-1">
                                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                                          Property Location
                                        </span>
                                        <span className="text-sm font-semibold text-gray-800">
                                          {loan.propertyLocation || "N/A"}
                                        </span>
                                      </div>
                                      <div className="flex flex-col gap-1">
                                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                                          System Property Ref
                                        </span>
                                        <span className="text-sm font-semibold text-gray-800">
                                          {loan.propertyId || "N/A"}
                                        </span>
                                      </div>
                                      <div className="flex flex-col gap-1">
                                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                                          Collateral Evaluation
                                        </span>
                                        <span className="text-sm font-semibold text-gray-800">
                                          {formatPHP(loan.collateralValue)}
                                        </span>
                                      </div>
                                      <div className="flex flex-col gap-1">
                                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                                          Downpayment Paid
                                        </span>
                                        <span className="text-sm font-semibold text-gray-800">
                                          {formatPHP(loan.downpaymentAmount)}
                                        </span>
                                      </div>
                                    </div>
                                  </details>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
