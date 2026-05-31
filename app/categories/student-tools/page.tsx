
// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";
// import Link from "next/link";

// export default function StudentTools() {
//   return (
//     <main className="min-h-screen bg-gray-50">

//       <Navbar />

//       {/* HERO */}
//       <section className="max-w-6xl mx-auto px-4 py-12 text-center">
//         <h1 className="text-3xl md:text-4xl font-bold text-black">
//           Student Tools
//         </h1>

//         <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
//           Free calculators and study tools for students.
//         </p>
//       </section>

//       {/* TOOLS GRID */}
//       <section className="max-w-6xl mx-auto px-4 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">

//         <Link href="/categories/cgpa-calculator">
//           <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
//             <h2 className="text-lg font-bold">CGPA Calculator</h2>
//             <p className="text-gray-600 text-sm mt-2">
//               Calculate your CGPA easily
//             </p>
//           </div>
//         </Link>

//         <Link href="/categories/gpa-converter">
//           <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
//             <h2 className="text-lg font-bold">GPA Converter</h2>
//             <p className="text-gray-600 text-sm mt-2">
//               Convert percentage to GPA
//             </p>
//           </div>
//         </Link>

//         <Link href="/categories/marks-percentage">
//           <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
//             <h2 className="text-lg font-bold">Marks Percentage</h2>
//             <p className="text-gray-600 text-sm mt-2">
//               Convert marks into percentage
//             </p>
//           </div>
//         </Link>

//         <Link href="/categories/study-time-planner">
//           <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
//             <h2 className="text-lg font-bold">Study Planner</h2>
//             <p className="text-gray-600 text-sm mt-2">
//               Plan your daily study schedule
//             </p>
//           </div>
//         </Link>

//       </section>

//       <Footer />

//     </main>
//   );
// }


export default function ComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-8 text-center">

        <div className="text-6xl mb-4">🚀</div>

        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Coming Soon
        </h1>

        <p className="text-gray-600 mb-6">
          We're working hard to bring this tool to you.
          Stay tuned for updates and exciting new features.
        </p>

        <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full font-medium">
          Under Development
        </div>

      </div>
    </div>
  );
}