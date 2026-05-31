"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (includeNumbers) chars += "0123456789";
    if (includeSymbols) chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let result = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      result += chars[randomIndex];
    }

    setPassword(result);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied!");
  };

  return (
    <main className="min-h-screen bg-gray-50">

      <Navbar />

      {/* TOOL SECTION */}
      <section className="max-w-4xl mx-auto px-4 py-10 md:py-16">

        <h1 className="text-3xl md:text-4xl font-bold text-center text-black">
          Password Generator
        </h1>

        <p className="text-center text-gray-600 mt-3">
          Generate strong and secure passwords instantly
        </p>

        {/* TOOL BOX */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow mt-8 space-y-6">

          {/* LENGTH */}
          <div>
            <label className="font-medium text-black">
              Password Length: {length}
            </label>

            <input
              type="range"
              min="6"
              max="32"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full mt-3"
            />
          </div>

          {/* OPTIONS */}
          <div className="flex flex-col gap-3 text-black">

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={() => setIncludeNumbers(!includeNumbers)}
              />
              Include Numbers
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={() => setIncludeSymbols(!includeSymbols)}
              />
              Include Symbols
            </label>

          </div>

          {/* BUTTON */}
          <button
            onClick={generatePassword}
            className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90 transition"
          >
            Generate Password
          </button>

          {/* OUTPUT */}
          {password && (
            <div className="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
              <span className="break-all text-black">{password}</span>

              <button
                onClick={copyToClipboard}
                className="ml-3 text-sm bg-black text-white px-3 py-1 rounded"
              >
                Copy
              </button>
            </div>
          )}

        </div>

        {/* SEO CONTENT */}
        <div className="mt-12 text-gray-800">

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            What is Password Generator?
          </h2>

          <p className="text-gray-700 leading-7 mb-6">
            A Password Generator is a free online tool that creates strong and secure passwords
            using random characters, numbers, and symbols. It helps protect accounts from hacking.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Why use a strong password?
          </h2>

          <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6">
            <li>Protects your online accounts</li>
            <li>Prevents hacking and data theft</li>
            <li>Improves digital security</li>
            <li>Recommended for banking and emails</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Features of this tool
          </h2>

          <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6">
            <li>Custom password length</li>
            <li>Include numbers and symbols</li>
            <li>Instant password generation</li>
            <li>One-click copy option</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            SEO Keywords
          </h2>

          <p className="text-gray-700 leading-7">
            password generator, strong password generator, random password generator online,
            free password maker, secure password creator, password generator tool free
          </p>

        </div>

      </section>

      <Footer />

    </main>
  );
}