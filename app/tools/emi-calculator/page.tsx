"use client";

import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function EMICalculator() {
  const [principal, setPrincipal] = useState(500000);
  const [rate, setRate] = useState(8.5);
  const [years, setYears] = useState(5);
  const [emi, setEmi] = useState(0);

  useEffect(() => {
    calculateEMI();
  }, [principal, rate, years]);

  const calculateEMI = () => {
    const P = principal;
    const R = rate / 12 / 100;
    const N = years * 12;

    const emiValue =
      (P * R * Math.pow(1 + R, N)) /
      (Math.pow(1 + R, N) - 1);

    setEmi(emiValue);
  };

  return (
    <main className="min-h-screen bg-gray-50">

      <Navbar />

      <section className="max-w-5xl mx-auto px-4 py-10 md:py-16">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-black">
          Modern EMI Calculator
        </h1>

        <p className="text-center text-gray-600 mt-3">
          Adjust sliders to calculate EMI instantly like a finance app
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8 mt-10">

          {/* LEFT - CONTROLS */}
          <div className="bg-white p-6 rounded-xl shadow space-y-8">

            {/* LOAN */}
            <div>
              <label className="font-medium text-black">
                Loan Amount: ₹{principal.toLocaleString()}
              </label>

              <input
                type="range"
                min="50000"
                max="5000000"
                step="50000"
                value={principal}
                onChange={(e) => setPrincipal(Number(e.target.value))}
                className="w-full mt-3"
              />
            </div>

            {/* RATE */}
            <div>
              <label className="font-medium text-black">
                Interest Rate: {rate}%
              </label>

              <input
                type="range"
                min="1"
                max="20"
                step="0.1"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full mt-3"
              />
            </div>

            {/* YEARS */}
            <div>
              <label className="font-medium text-black">
                Loan Tenure: {years} Years
              </label>

              <input
                type="range"
                min="1"
                max="30"
                step="1"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full mt-3"
              />
            </div>

          </div>

          {/* RIGHT - RESULT */}
          <div className="bg-black text-white p-8 rounded-xl shadow flex flex-col justify-center">

            <h2 className="text-lg text-gray-300">
              Monthly EMI
            </h2>

            <p className="text-4xl font-bold mt-2">
              ₹{emi.toFixed(0)}
            </p>

            <div className="mt-6 text-gray-300 text-sm space-y-2">
              <p>Loan: ₹{principal.toLocaleString()}</p>
              <p>Rate: {rate}%</p>
              <p>Tenure: {years} years</p>
            </div>

          </div>

        </div>

        {/* SEO CONTENT */}
        <div className="mt-14 text-gray-800">

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            What is EMI Calculator?
          </h2>

          <p className="text-gray-700 leading-7 mb-6">
            EMI Calculator helps you calculate monthly loan payments instantly.
            This modern version lets you adjust sliders for loan amount, interest rate,
            and tenure for real-time calculation.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Why use slider EMI calculator?
          </h2>

          <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6">
            <li>Real-time calculation</li>
            <li>Modern app-like UI</li>
            <li>No manual input needed</li>
            <li>Better user experience</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Where it is used?
          </h2>

          <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6">
            <li>Home loans</li>
            <li>Car loans</li>
            <li>Personal loans</li>
            <li>Bank planning</li>
          </ul>

        </div>

      </section>

      <Footer />

    </main>
  );
}