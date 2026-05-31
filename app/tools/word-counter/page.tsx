"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function WordCounter() {
  const [text, setText] = useState("");

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const characters = text.length;
  const sentences = text.trim()
    ? text.split(/[.!?]+/).filter(Boolean).length
    : 0;
  const paragraphs = text.trim()
    ? text.split(/\n+/).filter(Boolean).length
    : 0;

  const readingTime = Math.ceil(words / 200); // avg reading speed

  return (
    <main className="min-h-screen bg-gray-50">

      <Navbar />

      {/* TOOL SECTION */}
      <section className="max-w-5xl mx-auto px-4 py-10 md:py-16">

        {/* TITLE */}
        <h1 className="text-3xl md:text-5xl font-bold text-center text-black">
          Free Word Counter Tool Online
        </h1>

        <p className="text-center text-gray-600 mt-3 text-sm md:text-base max-w-2xl mx-auto leading-7">
          Instantly count words, characters, sentences, and paragraphs online.
          Perfect for students, bloggers, SEO writers, and professionals.
        </p>

        {/* TEXT AREA */}
        <div className="bg-white rounded-xl shadow p-5 md:p-8 mt-8">

          <textarea
            rows={10}
            placeholder="Start typing or paste your content here..."
            className="w-full border rounded-xl p-4 text-black resize-none focus:outline-none focus:ring-2 focus:ring-black leading-7"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          {/* STATS GRID */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">

            <StatCard label="Words" value={words} />
            <StatCard label="Characters" value={characters} />
            <StatCard label="Sentences" value={sentences} />
            <StatCard label="Paragraphs" value={paragraphs} />
            <StatCard label="Reading Time" value={`${readingTime} min`} />

          </div>

          {/* CLEAR BUTTON */}
          <button
            onClick={() => setText("")}
            className="mt-6 w-full bg-black text-white py-3 rounded-lg hover:opacity-90 transition"
          >
            Clear Text
          </button>

        </div>

        {/* SEO CONTENT */}
        <div className="mt-12 text-gray-800 space-y-10">

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-black">
              What is a Word Counter Tool?
            </h2>

            <p className="text-gray-700 leading-7">
              A Word Counter is an online text analysis tool that helps you
              instantly calculate the number of words, characters, sentences,
              and paragraphs in your content. It is widely used in blogging,
              academic writing, SEO content creation, and professional editing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-black">
              Why Use Online Word Counter?
            </h2>

            <ul className="list-disc pl-5 text-gray-700 space-y-2 leading-7">
              <li>Improve writing quality and structure</li>
              <li>Track SEO content length for Google ranking</li>
              <li>Save time compared to manual counting</li>
              <li>Analyze readability and writing performance</li>
              <li>Works instantly on mobile and desktop</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-black">
              Who Should Use This Tool?
            </h2>

            <p className="text-gray-700 leading-7">
              This tool is useful for students writing assignments, bloggers
              creating SEO articles, content writers optimizing readability,
              social media managers, and developers handling documentation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-black">
              SEO Benefits of Word Counter
            </h2>

            <ul className="list-disc pl-5 text-gray-700 space-y-2 leading-7">
              <li>Helps maintain ideal blog length (800–2000 words)</li>
              <li>Improves keyword density control</li>
              <li>Enhances content readability score</li>
              <li>Optimizes content for Google ranking</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-black">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4 text-gray-700 leading-7">

              <p>
                <strong>Is this Word Counter free?</strong><br />
                Yes, 100% free forever.
              </p>

              <p>
                <strong>Is my text saved?</strong><br />
                No, everything runs in your browser only.
              </p>

              <p>
                <strong>Can I use it for SEO writing?</strong><br />
                Yes, it is perfect for SEO content optimization.
              </p>

            </div>
          </section>

        </div>

      </section>

      <Footer />

    </main>
  );
}

/* SMALL COMPONENT */
function StatCard({ label, value }: { label: string; value: any }) {
  return (
    <div className="bg-gray-100 rounded-xl p-4 text-center">
      <h3 className="text-xl font-bold text-black">{value}</h3>
      <p className="text-sm text-gray-600 mt-1">{label}</p>
    </div>
  );
}