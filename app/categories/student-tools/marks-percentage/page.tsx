"use client";

import { useState } from "react";

export default function MarksPercentage() {
  const [obtained, setObtained] = useState("");
  const [total, setTotal] = useState("");
  const [percentage, setPercentage] = useState<number | null>(null);

  const calculate = () => {
    const o = Number(obtained);
    const t = Number(total);

    if (!o || !t) return;

    const result = (o / t) * 100;
    setPercentage(Number(result.toFixed(2)));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 to-orange-100 p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6">

        <h1 className="text-2xl font-bold text-center mb-4">
          Marks Percentage Calculator
        </h1>

        <input
          type="number"
          placeholder="Marks Obtained"
          value={obtained}
          onChange={(e) => setObtained(e.target.value)}
          className="w-full border p-3 rounded-lg mb-3"
        />

        <input
          type="number"
          placeholder="Total Marks"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <button
          onClick={calculate}
          className="w-full mt-4 bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700"
        >
          Calculate
        </button>

        {percentage !== null && (
          <div className="mt-5 text-center text-xl font-semibold text-orange-600">
            {percentage}%
          </div>
        )}
      </div>
    </div>
  );
}