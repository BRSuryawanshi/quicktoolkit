"use client";

import { useState } from "react";

export default function StudyTimePlanner() {
  const [hours, setHours] = useState("");
  const [subjects, setSubjects] = useState("");
  const [plan, setPlan] = useState<string[]>([]);

  const generatePlan = () => {
    const h = Number(hours);
    const subs = subjects.split(",").map((s) => s.trim()).filter(Boolean);

    if (!h || subs.length === 0) return;

    const perSubject = (h / subs.length).toFixed(1);

    const result = subs.map(
      (sub) => `${sub} → ${perSubject} hrs/day`
    );

    setPlan(result);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-100 p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6">

        <h1 className="text-2xl font-bold text-center mb-4">
          Study Time Planner
        </h1>

        <input
          type="number"
          placeholder="Total Study Hours"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          className="w-full border p-3 rounded-lg mb-3"
        />

        <input
          type="text"
          placeholder="Subjects (comma separated)"
          value={subjects}
          onChange={(e) => setSubjects(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <button
          onClick={generatePlan}
          className="w-full mt-4 bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700"
        >
          Generate Plan
        </button>

        <div className="mt-5 space-y-2">
          {plan.map((p, i) => (
            <div key={i} className="bg-pink-50 p-2 rounded-lg text-center">
              {p}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}