"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<string | null>(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (!height || !weight) return;

    const h = Number(height) / 100; // cm → meters
    const w = Number(weight);

    const result = w / (h * h);
    const value = result.toFixed(2);

    setBmi(value);

    if (result < 18.5) setCategory("Underweight");
    else if (result < 24.9) setCategory("Normal weight");
    else if (result < 29.9) setCategory("Overweight");
    else setCategory("Obese");
  };

  return (
    <main className="min-h-screen bg-gray-50">

      <Navbar />

      {/* TOOL SECTION */}
      <section className="max-w-3xl mx-auto px-4 py-10 md:py-16">

        <h1 className="text-3xl md:text-4xl font-bold text-center text-black">
          BMI Calculator
        </h1>

        <p className="text-center text-gray-600 mt-3 text-sm sm:text-base">
          Calculate your Body Mass Index instantly for free
        </p>

        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow mt-8">

          {/* HEIGHT */}
          <label className="text-sm text-gray-700 font-medium">
            Height (cm)
          </label>

          <input
            type="number"
            className="w-full mt-2 p-3 border rounded-lg text-black focus:ring-2 focus:ring-black"
            placeholder="e.g. 170"
            onChange={(e) => setHeight(e.target.value)}
          />

          {/* WEIGHT */}
          <label className="text-sm text-gray-700 font-medium mt-4 block">
            Weight (kg)
          </label>

          <input
            type="number"
            className="w-full mt-2 p-3 border rounded-lg text-black focus:ring-2 focus:ring-black"
            placeholder="e.g. 65"
            onChange={(e) => setWeight(e.target.value)}
          />

          {/* BUTTON */}
          <button
            onClick={calculateBMI}
            className="w-full mt-4 bg-black text-white py-3 rounded-lg hover:opacity-90 transition"
          >
            Calculate BMI
          </button>

          {/* RESULT */}
          {bmi && (
            <div className="mt-6 text-center text-black">
              <p className="text-lg font-semibold">
                Your BMI: {bmi}
              </p>

              <p className="text-gray-700 mt-2">
                Category: <span className="font-bold">{category}</span>
              </p>
            </div>
          )}

        </div>

        {/* SEO CONTENT */}
        <div className="mt-12 text-gray-800">

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            What is BMI Calculator?
          </h2>

          <p className="text-gray-700 leading-7 text-sm sm:text-base mb-6">
            BMI (Body Mass Index) Calculator is a free online tool that helps you
            check whether your body weight is healthy according to your height.
            It is widely used in health, fitness, and medical fields.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            BMI Formula
          </h2>

          <p className="text-gray-700 leading-7 mb-6">
            BMI = weight (kg) ÷ height (m²)
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            BMI Categories
          </h2>

          <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6">
            <li>Below 18.5 → Underweight</li>
            <li>18.5 – 24.9 → Normal weight</li>
            <li>25 – 29.9 → Overweight</li>
            <li>30+ → Obese</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Why use BMI Calculator?
          </h2>

          <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6">
            <li>Track your fitness level</li>
            <li>Useful for health checkups</li>
            <li>Helps in weight management</li>
            <li>Quick and free calculation</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            FAQ
          </h2>

          <div className="space-y-4 text-gray-700">

            <p>
              <strong>Is BMI accurate?</strong><br />
              It is a general health indicator, not a medical diagnosis.
            </p>

            <p>
              <strong>Is this tool free?</strong><br />
              Yes, 100% free.
            </p>

            <p>
              <strong>Can I use it on mobile?</strong><br />
              Yes, fully responsive.
            </p>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}