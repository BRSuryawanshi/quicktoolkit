// // "use client";

// // import { useState } from "react";

// // export default function CGPACalculator() {
// //   const [grades, setGrades] = useState<string>("");
// //   const [cgpa, setCgpa] = useState<number | null>(null);

// //   const calculateCGPA = () => {
// //     const arr = grades.split(",").map(Number);
// //     const valid = arr.filter((n) => !isNaN(n));

// //     if (valid.length === 0) return;

// //     const sum = valid.reduce((a, b) => a + b, 0);
// //     setCgpa(Number((sum / valid.length).toFixed(2)));
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
// //       <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6">
        
// //         <h1 className="text-2xl font-bold text-center mb-2">
// //           CGPA Calculator
// //         </h1>
// //         <p className="text-sm text-gray-500 text-center mb-6">
// //           Enter grades separated by commas (e.g. 8,7,9,6)
// //         </p>

// //         <input
// //           type="text"
// //           value={grades}
// //           onChange={(e) => setGrades(e.target.value)}
// //           placeholder="Enter grades"
// //           className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
// //         />

// //         <button
// //           onClick={calculateCGPA}
// //           className="w-full mt-4 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
// //         >
// //           Calculate CGPA
// //         </button>

// //         {cgpa !== null && (
// //           <div className="mt-5 text-center text-xl font-semibold text-green-600">
// //             CGPA: {cgpa}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }


// "use client";

// import { useEffect, useState } from "react";

// type Semester = {
//   sgpa: string;
//   credits: string;
// };

// export default function CGPACalculator() {
//   const [semesters, setSemesters] = useState<Semester[]>([
//     { sgpa: "", credits: "" },
//   ]);

//   const [cgpa, setCgpa] = useState<number | null>(null);
//   const [percentage, setPercentage] = useState<number | null>(null);

//   // Load saved data
//   useEffect(() => {
//     const saved = localStorage.getItem("cgpa-data");
//     if (saved) {
//       setSemesters(JSON.parse(saved));
//     }
//   }, []);

//   // Save data
//   useEffect(() => {
//     localStorage.setItem("cgpa-data", JSON.stringify(semesters));
//   }, [semesters]);

//   const addSemester = () => {
//     setSemesters([...semesters, { sgpa: "", credits: "" }]);
//   };

//   const removeSemester = (index: number) => {
//     const updated = semesters.filter((_, i) => i !== index);
//     setSemesters(updated);
//   };

//   const updateSemester = (
//     index: number,
//     field: keyof Semester,
//     value: string
//   ) => {
//     const updated = [...semesters];
//     updated[index][field] = value;
//     setSemesters(updated);
//   };

//   const resetAll = () => {
//     setSemesters([{ sgpa: "", credits: "" }]);
//     setCgpa(null);
//     setPercentage(null);
//     localStorage.removeItem("cgpa-data");
//   };

//   const calculateCGPA = () => {
//     let totalCredits = 0;
//     let weightedSum = 0;

//     semesters.forEach((sem) => {
//       const sgpa = Number(sem.sgpa);
//       const credits = Number(sem.credits);

//       if (!isNaN(sgpa) && !isNaN(credits)) {
//         weightedSum += sgpa * credits;
//         totalCredits += credits;
//       }
//     });

//     if (totalCredits === 0) return;

//     const result = weightedSum / totalCredits;
//     setCgpa(Number(result.toFixed(2)));

//     calculatePercentage(result);
//   };

//   const calculatePercentage = (cgpaValue: number) => {
//     let percent = 0;

//     if (cgpaValue >= 9.5) {
//       percent = 20 * cgpaValue - 100;
//     } else if (cgpaValue >= 8.25) {
//       percent = 12 * cgpaValue - 25;
//     } else if (cgpaValue >= 6.75) {
//       percent = 10 * cgpaValue - 7.5;
//     } else if (cgpaValue >= 5.75) {
//       percent = 5 * cgpaValue + 26.25;
//     } else {
//       percent = (cgpaValue - 0.75) * 10;
//     }

//     setPercentage(Number(percent.toFixed(2)));
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 flex items-center justify-center">

//       <div className="w-full max-w-2xl bg-white shadow-2xl rounded-2xl p-6">

//         {/* HEADER */}
//         <h1 className="text-3xl font-bold text-center text-indigo-700">
//           CGPA Calculator Pro
//         </h1>

//         <p className="text-center text-gray-500 mt-1 mb-6">
//           Weighted CGPA + SPPU Percentage Converter
//         </p>

//         {/* INPUT TABLE */}
//         <div className="space-y-3">

//           {semesters.map((sem, index) => (
//             <div
//               key={index}
//               className="flex gap-2 items-center bg-gray-50 p-2 rounded-lg"
//             >

//               <input
//                 type="number"
//                 placeholder="SGPA"
//                 value={sem.sgpa}
//                 onChange={(e) =>
//                   updateSemester(index, "sgpa", e.target.value)
//                 }
//                 className="w-1/3 border p-2 rounded-md"
//               />

//               <input
//                 type="number"
//                 placeholder="Credits"
//                 value={sem.credits}
//                 onChange={(e) =>
//                   updateSemester(index, "credits", e.target.value)
//                 }
//                 className="w-1/3 border p-2 rounded-md"
//               />

//               <button
//                 onClick={() => removeSemester(index)}
//                 className="w-1/3 bg-red-100 text-red-600 py-2 rounded-md hover:bg-red-200"
//               >
//                 Remove
//               </button>

//             </div>
//           ))}

//         </div>

//         {/* BUTTONS */}
//         <div className="grid grid-cols-3 gap-3 mt-5">

//           <button
//             onClick={addSemester}
//             className="bg-gray-200 py-2 rounded-lg hover:bg-gray-300"
//           >
//             + Add
//           </button>

//           <button
//             onClick={calculateCGPA}
//             className="bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
//           >
//             Calculate
//           </button>

//           <button
//             onClick={resetAll}
//             className="bg-black text-white py-2 rounded-lg hover:bg-gray-800"
//           >
//             Reset
//           </button>

//         </div>

//         {/* RESULT CARD */}
//         {cgpa !== null && (
//           <div className="mt-8 bg-gradient-to-r from-indigo-50 to-blue-50 p-5 rounded-xl text-center">

//             <h2 className="text-lg font-semibold text-gray-700">
//               Your Result
//             </h2>

//             <p className="text-2xl font-bold text-indigo-700 mt-2">
//               CGPA: {cgpa}
//             </p>

//             <p className="text-xl font-semibold text-green-600 mt-1">
//               Percentage: {percentage}%
//             </p>

//             {/* PROGRESS BAR */}
//             <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
//               <div
//                 className="bg-indigo-600 h-3 rounded-full"
//                 style={{ width: `${(cgpa! / 10) * 100}%` }}
//               ></div>
//             </div>

//           </div>
//         )}

//       </div>
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";

type Semester = {
  sgpa: string;
  credits: string;
};

export default function CGPACalculator() {
  const [semesters, setSemesters] = useState<Semester[]>([
    { sgpa: "", credits: "" },
  ]);

  const [cgpa, setCgpa] = useState<number | null>(null);
  const [percentage, setPercentage] = useState<number | null>(null);

  // Load saved data
  useEffect(() => {
    const saved = localStorage.getItem("cgpa-data");
    if (saved) setSemesters(JSON.parse(saved));
  }, []);

  // Save data
  useEffect(() => {
    localStorage.setItem("cgpa-data", JSON.stringify(semesters));
  }, [semesters]);

  const addSemester = () => {
    setSemesters([...semesters, { sgpa: "", credits: "" }]);
  };

  const removeSemester = (index: number) => {
    const updated = semesters.filter((_, i) => i !== index);
    setSemesters(updated);
  };

  const updateSemester = (
    index: number,
    field: keyof Semester,
    value: string
  ) => {
    const updated = [...semesters];
    updated[index][field] = value;
    setSemesters(updated);
  };

  const resetAll = () => {
    setSemesters([{ sgpa: "", credits: "" }]);
    setCgpa(null);
    setPercentage(null);
    localStorage.removeItem("cgpa-data");
  };

  const calculateCGPA = () => {
    let totalCredits = 0;
    let weightedSum = 0;

    semesters.forEach((sem) => {
      const sgpa = Number(sem.sgpa);
      const credits = Number(sem.credits);

      if (!isNaN(sgpa) && !isNaN(credits)) {
        weightedSum += sgpa * credits;
        totalCredits += credits;
      }
    });

    if (totalCredits === 0) return;

    const result = weightedSum / totalCredits;
    setCgpa(Number(result.toFixed(2)));

    calculatePercentage(result);
  };

  const calculatePercentage = (cgpaValue: number) => {
    let percent = 0;

    if (cgpaValue >= 9.5) {
      percent = 20 * cgpaValue - 100;
    } else if (cgpaValue >= 8.25) {
      percent = 12 * cgpaValue - 25;
    } else if (cgpaValue >= 6.75) {
      percent = 10 * cgpaValue - 7.5;
    } else if (cgpaValue >= 5.75) {
      percent = 5 * cgpaValue + 26.25;
    } else {
      percent = (cgpaValue - 0.75) * 10;
    }

    setPercentage(Number(percent.toFixed(2)));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">

      {/* ================= FORMULAS SECTION ================= */}
      <div className="max-w-4xl mx-auto space-y-6 mb-10">

        {/* CGPA FORMULA */}
        <div className="bg-white rounded-xl shadow p-5">
          <h2 className="text-xl font-bold text-indigo-700 mb-2">
            1. CGPA Calculation Formula
          </h2>

          <div className="bg-gray-100 p-3 rounded text-center font-mono text-sm">
            CGPA = Σ(SGPAᵢ × Cᵢ) / Σ(Cᵢ)
          </div>

          <p className="text-sm text-gray-600 mt-3">
            Weighted average of SGPA using semester credits.
          </p>
        </div>

        {/* OFFICIAL SPPU */}
        <div className="bg-white rounded-xl shadow p-5">
          <h2 className="text-xl font-bold text-green-700 mb-2">
            2. CGPA to Percentage (SPPU Official)
          </h2>

          <div className="space-y-2 text-sm">

            <div className="bg-gray-50 p-2 rounded">
              CGPA ≥ 9.50 → <b>20 × CGPA - 100</b>
            </div>

            <div className="bg-gray-50 p-2 rounded">
              8.25 ≤ CGPA &lt; 9.50 → <b>12 × CGPA - 25</b>
            </div>

            <div className="bg-gray-50 p-2 rounded">
              6.75 ≤ CGPA &lt; 8.25 → <b>10 × CGPA - 7.5</b>
            </div>

            <div className="bg-gray-50 p-2 rounded">
              5.75 ≤ CGPA &lt; 6.75 → <b>5 × CGPA + 26.25</b>
            </div>

          </div>
        </div>

        {/* SIMPLIFIED */}
        <div className="bg-white rounded-xl shadow p-5">
          <h2 className="text-xl font-bold text-orange-600 mb-2">
            3. Simplified Method
          </h2>

          <div className="bg-gray-100 p-3 rounded text-center font-mono text-sm">
            Percentage = (CGPA - 0.75) × 10
          </div>

          <p className="text-xs text-gray-500 mt-2">
            Quick estimate used by many online tools.
          </p>
        </div>

      </div>

      {/* ================= CALCULATOR ================= */}
      <div className="max-w-2xl mx-auto bg-white shadow-2xl rounded-2xl p-6">

        <h1 className="text-3xl font-bold text-center text-indigo-700">
          CGPA Calculator Pro
        </h1>

        <p className="text-center text-gray-500 mt-1 mb-6">
          Enter SGPA & Credits for each semester
        </p>

        {/* INPUTS */}
        <div className="space-y-3">

          {semesters.map((sem, index) => (
            <div
              key={index}
              className="flex gap-2 items-center bg-gray-50 p-2 rounded-lg"
            >

              <input
                type="number"
                placeholder="SGPA"
                value={sem.sgpa}
                onChange={(e) =>
                  updateSemester(index, "sgpa", e.target.value)
                }
                className="w-1/3 border p-2 rounded-md"
              />

              <input
                type="number"
                placeholder="Credits"
                value={sem.credits}
                onChange={(e) =>
                  updateSemester(index, "credits", e.target.value)
                }
                className="w-1/3 border p-2 rounded-md"
              />

              <button
                onClick={() => removeSemester(index)}
                className="w-1/3 bg-red-100 text-red-600 py-2 rounded-md hover:bg-red-200"
              >
                Remove
              </button>

            </div>
          ))}

        </div>

        {/* BUTTONS */}
        <div className="grid grid-cols-3 gap-3 mt-5">

          <button
            onClick={addSemester}
            className="bg-gray-200 py-2 rounded-lg hover:bg-gray-300"
          >
            + Add
          </button>

          <button
            onClick={calculateCGPA}
            className="bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
          >
            Calculate
          </button>

          <button
            onClick={resetAll}
            className="bg-black text-white py-2 rounded-lg hover:bg-gray-800"
          >
            Reset
          </button>

        </div>

        {/* RESULT */}
        {cgpa !== null && (
          <div className="mt-8 bg-gradient-to-r from-indigo-50 to-blue-50 p-5 rounded-xl text-center">

            <h2 className="text-lg font-semibold text-gray-700">
              Result
            </h2>

            <p className="text-2xl font-bold text-indigo-700 mt-2">
              CGPA: {cgpa}
            </p>

            <p className="text-xl font-semibold text-green-600 mt-1">
              Percentage: {percentage}%
            </p>

            {/* PROGRESS BAR */}
            <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
              <div
                className="bg-indigo-600 h-3 rounded-full"
                style={{ width: `${(cgpa! / 10) * 100}%` }}
              ></div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}