"use client";

import { useState } from "react";

export default function GPAConverter() {
  const [percentage, setPercentage] = useState("");
  const [gpa, setGpa] = useState<number | null>(null);

  const convert = () => {
    const p = Number(percentage);
    if (isNaN(p)) return;

    // Simple formula (you can adjust later)
    const result = p / 10;
    setGpa(Number(result.toFixed(2)));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6">

        <h1 className="text-2xl font-bold text-center mb-2">
          GPA Converter
        </h1>

        <p className="text-sm text-gray-500 text-center mb-6">
          Convert Percentage to GPA
        </p>

        <input
          type="number"
          value={percentage}
          onChange={(e) => setPercentage(e.target.value)}
          placeholder="Enter percentage"
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <button
          onClick={convert}
          className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          Convert
        </button>

        {gpa !== null && (
          <div className="mt-5 text-center text-xl font-semibold text-green-600">
            GPA: {gpa}
          </div>
        )}
      </div>
    </div>
  );
}