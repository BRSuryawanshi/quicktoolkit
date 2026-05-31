"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function PercentageCalculator() {
  const [value, setValue] = useState("");
  const [percentage, setPercentage] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    if (!value || !percentage) return;

    const v = Number(value);
    const p = Number(percentage);

    const res = (v * p) / 100;

    setResult(`${res}`);
  };

  return (
    <main className="min-h-screen bg-gray-50">

      <Navbar />

      {/* TOOL SECTION */}
      <section className="max-w-3xl mx-auto px-4 py-10 md:py-16">

        {/* PAGE TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-black leading-tight">
          Percentage Calculator
        </h1>

        <p className="text-center text-gray-600 mt-3 text-sm sm:text-base leading-6">
          Calculate percentages instantly online for free
        </p>

        {/* TOOL BOX */}
        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow mt-8 overflow-hidden">

          {/* VALUE INPUT */}
          <label className="text-sm text-gray-700 font-medium">
            Enter Value
          </label>

          <input
            type="number"
            className="w-full mt-2 p-3 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="e.g. 500"
            onChange={(e) => setValue(e.target.value)}
          />

          {/* PERCENTAGE INPUT */}
          <label className="text-sm text-gray-700 font-medium mt-4 block">
            Enter Percentage
          </label>

          <input
            type="number"
            className="w-full mt-2 p-3 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="e.g. 20"
            onChange={(e) => setPercentage(e.target.value)}
          />

          {/* BUTTON */}
          <button
            onClick={calculate}
            className="w-full mt-4 bg-black text-white py-3 rounded-lg hover:opacity-90 transition"
          >
            Calculate
          </button>

          {/* RESULT */}
          {result && (
            <div className="mt-6 text-center text-base sm:text-lg font-semibold text-black break-words leading-7">
              🎯 Result: {result}
            </div>
          )}

        </div>

        {/* SEO CONTENT */}
        <div className="mt-12 text-gray-800">

          <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
            What is Percentage Calculator?
          </h2>

          <p className="text-gray-700 leading-7 text-sm sm:text-base mb-6">
            A Percentage Calculator is a free online tool that helps you calculate percentages quickly.
            It is useful for exams, finance calculations, discounts, marks, and daily mathematical needs.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
            How to use this tool?
          </h2>

          <ul className="list-disc pl-5 text-gray-700 mb-6 space-y-2 text-sm sm:text-base leading-7">
            <li>Enter the main value</li>
            <li>Enter the percentage value</li>
            <li>Click calculate</li>
            <li>Get instant result</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
            Where is it used?
          </h2>

          <ul className="list-disc pl-5 text-gray-700 mb-6 space-y-2 text-sm sm:text-base leading-7">
            <li>Discount calculations in shopping</li>
            <li>Exam marks percentage</li>
            <li>Bank interest calculations</li>
            <li>Business profit/loss analysis</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
            Benefits
          </h2>

          <p className="text-gray-700 leading-7 text-sm sm:text-base mb-10">
            This tool saves time, avoids manual calculation errors, and provides instant accurate results on any device.
          </p>

        </div>

        {/* EXTRA SEO CONTENT */}
        <div className="mt-12 text-gray-800">

          <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
            What is a Percentage Calculator?
          </h2>

          <p className="text-gray-700 leading-7 text-sm sm:text-base mb-6">
            A percentage calculator is a tool that helps you find a percentage of a number quickly.
            Instead of doing manual calculations, this tool gives instant and accurate results.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
            Formula Used
          </h2>

          <p className="text-gray-700 leading-7 text-sm sm:text-base mb-6 break-words">
            Percentage = (Value × Percentage) ÷ 100
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
            Example Calculations
          </h2>

          <ul className="list-disc pl-5 text-gray-700 mb-6 space-y-2 text-sm sm:text-base leading-7">
            <li>20% of 500 = 100</li>
            <li>10% of 1000 = 100</li>
            <li>5% of 200 = 10</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
            Where is it used?
          </h2>

          <ul className="list-disc pl-5 text-gray-700 mb-6 space-y-2 text-sm sm:text-base leading-7">
            <li>Discount calculations in shopping</li>
            <li>Exam score percentage</li>
            <li>Bank interest calculations</li>
            <li>Business profit analysis</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
            Why use QuickToolKit?
          </h2>

          <p className="text-gray-700 leading-7 text-sm sm:text-base mb-6">
            QuickToolKit provides fast, free, and accurate tools without signup.
            It is mobile-friendly and works instantly in your browser.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
            FAQ
          </h2>

          <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-7">

            <p>
              <strong>Is this tool free?</strong>
              <br />
              Yes, 100% free.
            </p>

            <p>
              <strong>Do I need login?</strong>
              <br />
              No login required.
            </p>

            <p>
              <strong>Can I use it on mobile?</strong>
              <br />
              Yes, fully responsive.
            </p>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}