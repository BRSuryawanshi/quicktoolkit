import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">

      <Navbar />

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-4 py-10 md:py-16 text-center">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Free Online Tools for Everyday Use 🚀
        </h1>

        <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-7">
          QuickToolKit helps you calculate, convert, generate and optimize daily tasks — free forever.
        </p>

        {/* SEARCH BAR */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 max-w-xl mx-auto">

          <input
            type="text"
            placeholder="Search tools (e.g. age calculator)"
            className="w-full px-4 py-3 border rounded-xl sm:rounded-r-none focus:outline-none text-black"
          />

          <button className="px-6 py-3 bg-black text-white rounded-xl sm:rounded-l-none hover:opacity-90 transition">
            Search
          </button>

        </div>

      </section>

      {/* POPULAR TOOLS */}
      <section id="tools" className="max-w-6xl mx-auto px-4 py-10">

        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Popular Free Tools
        </h2>

        <p className="text-gray-600 mb-6 text-sm sm:text-base">
          Most used calculators and generators on QuickToolKit
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {[
            {
              title: "Age Calculator",
              desc: "Calculate your exact age in years, months and days.",
              link: "/tools/age-calculator",
            },
            {
              title: "Percentage Calculator",
              desc: "Quickly calculate percentages online for free.",
              link: "/tools/percentage-calculator",
            },
            {
              title: "Word Counter",
              desc: "Count words, characters, sentences instantly.",
              link: "/tools/word-counter",
            },
            {
              title: "BMI Calculator",
              desc: "Check your Body Mass Index instantly.",
              link: "/tools/bmi-calculator",
            },
            {
              title: "EMI Calculator",
              desc: "Calculate monthly loan EMI easily.",
              link: "/tools/emi-calculator",
            },
            {
              title: "QR Code Generator",
              desc: "Generate QR codes for links and text.",
              link: "/tools/qr-generator",
            },
            {
              title: "Password Generator",
              desc: "Generate strong secure passwords instantly.",
              link: "/tools/password-generator",
            },
            {
              title: "GST Calculator",
              desc: "Calculate GST amount and final price easily.",
              link: "/tools/gst-calculator",
            },
          ].map((tool, i) => (
            <a key={i} href={tool.link}>
              <div className="bg-white p-5 md:p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer h-full">
                <h3 className="font-semibold text-lg text-black">
                  {tool.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-6">
                  {tool.desc}
                </p>
              </div>
            </a>
          ))}

        </div>
      </section>

      {/* CATEGORIES */}
      <section id="categories" className="max-w-6xl mx-auto px-4 py-10">

        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Browse by Categories
        </h2>

        <p className="text-gray-600 mb-6 text-sm sm:text-base">
          Explore tools based on your needs
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <a href="/categories/student-tools">
            <div className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition">
              📚 Student Tools
            </div>
          </a>

          <a href="/categories/finance-tools">
            <div className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition">
              💰 Finance Tools
            </div>
          </a>

          <a href="/categories/text-tools">
            <div className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition">
              ✍️ Text Tools
            </div>
          </a>

          <a href="/categories/developer-tools">
            <div className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition">
              🧑‍💻 Developer Tools
            </div>
          </a>

        </div>

      </section>

      {/* ABOUT SEO SECTION */}
      <section id="about" className="max-w-4xl mx-auto px-4 py-10 md:py-16">

        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          About QuickToolKit
        </h2>

        <div className="text-gray-600 space-y-4 text-sm sm:text-base leading-7">
          <p>
            QuickToolKit is a comprehensive, free online utility ecosystem built for developers, 
            content creators, students, and digital professionals. We remove the barriers of signup requirements, 
            intrusive pop-up ads, and subscription fees to offer an instantaneous, distraction-free workflow.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 pt-2">
            Why Our Platform Prioritises Performance & SEO
          </h3>

          <p>
            We believe that technical execution dictates user satisfaction. Every utility in our toolkit is engineered 
            with a deep focus on search engine optimization (SEO) standards and core web vitals. This ensures that you 
            discover, access, and execute your tasks faster than anywhere else on the web.
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              <strong className="text-gray-900">Blazing Fast Core Web Vitals:</strong> Optimized layouts eliminate cumulative layout shifts (CLS) and ensure a fast Largest Contentful Paint (LCP) for instant page readiness.
            </li>
            <li>
              <strong className="text-gray-900">Client-Side Privacy & Speed:</strong> Complex executions like word counting and password generation run entirely inside your browser to protect your data privacy and eliminate network latency.
            </li>
            <li>
              <strong className="text-gray-900">Semantic & Structured Architecture:</strong> Every page uses proper schema markups, microdata, and clean HTML heirarchies to allow seamless search engine crawling and discovery.
            </li>
            <li>
              <strong className="text-gray-900">100% Mobile Responsive Ecosystem:</strong> Perfectly scaled codebases adapt dynamically across mobile viewports, tablets, and high-resolution desktops alike.
            </li>
          </ul>

          <p className="pt-2">
            By avoiding bloated frameworks and tracking scripts, QuickToolKit maintains clean, highly performant web pages. 
            This technical baseline allows us to provide reliable data tools that rank efficiently and load immediately whenever you need them.
          </p>
        </div>

      </section>

      <Footer />

    </main>
  );
}
