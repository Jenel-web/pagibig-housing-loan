"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../Navbar";
import { Footer } from "../UserDashboard/Footer";

export default function AddPropertyForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    propertyId: "",
    propertyLocation: "",
    titleHolderName: "",
  });

  const handleInputChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleConfirmSubmission = async () => {
    try {
      const pagIbigRtn = localStorage.getItem("pagIbigRtn");
      if (!pagIbigRtn) {
        alert("Session expired. Please log in again.");
        navigate("/login");
        return;
      }

      if (!formData.propertyId || !formData.propertyLocation || !formData.titleHolderName) {
        alert("Please fill in all required fields.");
        return;
      }

      const finalPayload = {
        propertyId: formData.propertyId,
        pagIbigRtn: pagIbigRtn,
        propertyLocation: formData.propertyLocation,
        titleHolderName: formData.titleHolderName,
      };

      console.log("Submitting property:", finalPayload);

      const response = await fetch("http://localhost:8080/property/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalPayload),
      });

      if (response.ok) {
        alert("Success! Property added successfully.");
        navigate("/dashboard");
      } else {
        const err = await response.text();
        alert("Error from backend: " + err);
      }
    } catch (error) {
      console.error("Connection failed:", error);
      alert("Could not reach the backend. Check if your backend server is running!");
    }
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
        <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10 flex flex-col gap-8">
          
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-extrabold text-[#112C44]">Add New Property</h3>
            <p className="text-sm text-gray-500 font-medium">Please enter the exact details of the property you wish to register as collateral.</p>
            
            <div className="grid grid-cols-1 gap-6 mt-2">
              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-bold text-[#112C44]">Property Unique ID</label>
                <input
                  type="text"
                  value={formData.propertyId}
                  onChange={(e) => handleInputChange("propertyId", e.target.value)}
                  className="w-full h-11 px-3 bg-gray-50 text-gray-800 rounded-md border border-gray-200 outline-none focus:border-[#112C44]"
                  placeholder="e.g., PROP-12345"
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-bold text-[#112C44]">Property Location / Address</label>
                <input
                  type="text"
                  value={formData.propertyLocation}
                  onChange={(e) => handleInputChange("propertyLocation", e.target.value)}
                  className="w-full h-11 px-3 bg-gray-50 text-gray-800 rounded-md border border-gray-200 outline-none focus:border-[#112C44]"
                  placeholder="Enter full address of the property"
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-bold text-[#112C44]">Title Holder Name</label>
                <input
                  type="text"
                  value={formData.titleHolderName}
                  onChange={(e) => handleInputChange("titleHolderName", e.target.value)}
                  className="w-full h-11 px-3 bg-gray-50 text-gray-800 rounded-md border border-gray-200 outline-none focus:border-[#112C44]"
                  placeholder="Name of the registered owner on the title"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center items-center mt-4">
          <button
            type="button"
            onClick={handleConfirmSubmission}
            className="px-8 h-11 bg-[#112C44] text-white text-[13px] font-bold uppercase tracking-wider rounded-md hover:bg-opacity-95 transition-all cursor-pointer shadow-md transform active:scale-[0.99]"
          >
            Save Property
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
