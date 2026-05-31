"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AgeCalculator() {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState<any>(null);

  const calculateAge = () => {
    if (!dob) return;

    const birthDate = new Date(dob);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      days += 30;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    // 🎯 Bonus feature: next birthday
    const nextBirthday = new Date(
      today.getFullYear(),
      birthDate.getMonth(),
      birthDate.getDate()
    );

    if (nextBirthday < today) {
      nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    const diffTime = nextBirthday.getTime() - today.getTime();
    const daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    setAge({ years, months, days, daysLeft });
  };

  return (
    <main className="min-h-screen bg-gray-50">

      <Navbar />

      {/* TOOL SECTION */}
      <section className="max-w-4xl mx-auto px-4 py-10 md:py-16">

        {/* TITLE */}
        <h1 className="text-3xl md:text-5xl font-bold text-center text-black">
          Free Age Calculator Online
        </h1>

        <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto leading-7">
          Calculate your exact age in years, months, and days instantly.
          Also find days left for your next birthday.
        </p>

        {/* TOOL BOX */}
        <div className="bg-white p-5 md:p-8 rounded-xl shadow mt-8">

          <label className="font-medium text-black">
            Select Your Date of Birth
          </label>

          <input
            type="date"
            className="w-full mt-2 p-3 border rounded-lg text-black focus:ring-2 focus:ring-black"
            onChange={(e) => setDob(e.target.value)}
          />

          <button
            onClick={calculateAge}
            className="w-full mt-4 bg-black text-white py-3 rounded-lg hover:opacity-90"
          >
            Calculate Age
          </button>

          {/* RESULT */}
          {age && (
            <div className="mt-6 bg-gray-100 p-5 rounded-lg text-black space-y-2">

              <p className="text-lg font-semibold">
                🎉 Age: {age.years} Years, {age.months} Months, {age.days} Days
              </p>

              <p>
                🎂 Days left for next birthday: <b>{age.daysLeft} days</b>
              </p>

            </div>
          )}

        </div>

        {/* SEO CONTENT */}
        <div className="mt-12 text-gray-800 space-y-10">

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              What is an Age Calculator?
            </h2>

            <p className="text-gray-700 leading-7 mt-2">
              An Age Calculator is a free online tool that calculates your exact age
              based on your date of birth. It shows age in years, months, and days
              with accurate time calculation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              Why use an Online Age Calculator?
            </h2>

            <ul className="list-disc pl-5 text-gray-700 space-y-2 leading-7 mt-2">
              <li>Instant age calculation in seconds</li>
              <li>Accurate results without manual errors</li>
              <li>Useful for exams, jobs, and forms</li>
              <li>Works on mobile and desktop</li>
              <li>No login or signup required</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              Where is Age Calculator used?
            </h2>

            <p className="text-gray-700 leading-7 mt-2">
              Age calculators are widely used in government applications,
              job eligibility checks, insurance forms, school admissions,
              and competitive exams where exact age matters.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              Key Features
            </h2>

            <ul className="list-disc pl-5 text-gray-700 space-y-2 leading-7 mt-2">
              <li>Exact age in years, months, days</li>
              <li>Next birthday countdown</li>
              <li>Fast and lightweight tool</li>
              <li>100% free forever</li>
              <li>Mobile responsive design</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4 text-gray-700 mt-2 leading-7">

              <p>
                <strong>Is this Age Calculator free?</strong><br />
                Yes, it is completely free to use.
              </p>

              <p>
                <strong>Does it show exact age?</strong><br />
                Yes, it calculates years, months, and days accurately.
              </p>

              <p>
                <strong>Can I use it on mobile?</strong><br />
                Yes, it is fully responsive.
              </p>

            </div>
          </section>

          <section>
            {/* <h2 className="text-2xl md:text-3xl font-bold text-black">
              SEO Keywords
            </h2> */}

            <p className="text-gray-700 leading-7 mt-2">
              age calculator online, free age calculator, calculate age from date of birth,
              exact age calculator, DOB calculator online, age finder tool
            </p>
          </section>

        </div>

      </section>

      <Footer />

    </main>
  );
}