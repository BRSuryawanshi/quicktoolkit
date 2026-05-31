"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function GSTCalculator() {
  const [amount, setAmount] = useState("");
  const [gstRate, setGstRate] = useState(18);
  const [mode, setMode] = useState("add");

  const [gstAmount, setGstAmount] = useState<number | null>(null);
  const [finalPrice, setFinalPrice] = useState<number | null>(null);
  const [originalPrice, setOriginalPrice] = useState<number | null>(null);

  const calculateGST = () => {
    const value = Number(amount);
    if (!value) return;

    const rate = gstRate;

    // ✅ ADD GST (Exclusive)
    if (mode === "add") {
      const gst = (value * rate) / 100;
      const total = value + gst;

      setGstAmount(gst);
      setFinalPrice(total);
      setOriginalPrice(null);
    }

    // ✅ REMOVE GST (Inclusive)
    if (mode === "remove") {
      const original = value * (100 / (100 + rate));
      const gst = value - original;

      setOriginalPrice(original);
      setGstAmount(gst);
      setFinalPrice(value);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">

      <Navbar />

      {/* TOOL SECTION */}
      <section className="max-w-4xl mx-auto px-4 py-10 md:py-16">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-black">
          GST Calculator India
        </h1>

        <p className="text-center text-gray-600 mt-3">
          Calculate GST (Add or Remove) using standard Indian tax formulas
        </p>

        {/* TOOL BOX */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow mt-8 space-y-6">

          {/* MODE SWITCH */}
          <div className="flex gap-4 justify-center">

            <button
              onClick={() => setMode("add")}
              className={`px-4 py-2 rounded-lg border ${
                mode === "add" ? "bg-black text-white" : "bg-white text-black"
              }`}
            >
              Add GST
            </button>

            <button
              onClick={() => setMode("remove")}
              className={`px-4 py-2 rounded-lg border ${
                mode === "remove" ? "bg-black text-white" : "bg-white text-black"
              }`}
            >
              Remove GST
            </button>

          </div>

          {/* INPUT */}
          <div>
            <label className="font-medium text-black">
              {mode === "add" ? "Base Price (₹)" : "Total Price (₹)"}
            </label>

            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full mt-2 p-3 border rounded-lg text-black"
              placeholder="e.g. 1000"
            />
          </div>

          {/* GST SLIDER */}
          <div>
            <label className="font-medium text-black">
              GST Rate: {gstRate}%
            </label>

            <input
              type="range"
              min="0"
              max="28"
              step="1"
              value={gstRate}
              onChange={(e) => setGstRate(Number(e.target.value))}
              className="w-full mt-3"
            />
          </div>

          {/* BUTTON */}
          <button
            onClick={calculateGST}
            className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90 transition"
          >
            Calculate GST
          </button>

          {/* RESULT */}
          {(gstAmount !== null) && (
            <div className="bg-gray-100 p-4 rounded-lg text-black space-y-2">

              <p>GST Amount: <b>₹{gstAmount.toFixed(2)}</b></p>

              {mode === "add" && finalPrice && (
                <p>Total Price: <b>₹{finalPrice.toFixed(2)}</b></p>
              )}

              {mode === "remove" && originalPrice && (
                <p>Original Price: <b>₹{originalPrice.toFixed(2)}</b></p>
              )}

            </div>
          )}

        </div>

        {/* SEO CONTENT (FROM YOUR FORMULA) */}
        <div className="mt-12 text-gray-800">

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            How GST Calculation Works
          </h2>

          <p className="text-gray-700 leading-7 mb-6">
            GST calculation depends on whether tax is included or excluded from the price.
            In India, GST rates are usually 5%, 12%, 18%, and 28%.
          </p>

          <h3 className="text-xl font-bold mb-2">1. Add GST (Exclusive)</h3>
          <p className="mb-4">
            GST Amount = (Original Cost × GST%) ÷ 100 <br />
            Total Price = Original Cost + GST Amount
          </p>

          <h3 className="text-xl font-bold mb-2">2. Remove GST (Inclusive)</h3>
          <p className="mb-4">
            Original Price = Total Price × (100 / (100 + GST%)) <br />
            GST Amount = Total Price - Original Price
          </p>

          <h3 className="text-xl font-bold mb-2">3. GST Types in India</h3>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>CGST + SGST: For intra-state transactions</li>
            <li>IGST: For inter-state transactions</li>
            <li>Common GST rates: 5%, 12%, 18%, 28%</li>
          </ul>

          <h2 className="text-xl font-bold mb-2">Use Cases</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Online shopping bills</li>
            <li>Business invoicing</li>
            <li>Tax planning</li>
            <li>Retail pricing</li>
          </ul>

        </div>

      </section>

      <Footer />

    </main>
  );
}