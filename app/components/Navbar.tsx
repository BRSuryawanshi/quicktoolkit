export default function Navbar() {
  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">

        {/* LOGO */}
        <a href="/" className="flex items-center gap-2">
          <img
            src="/Logo.png"
            alt="QuickToolKit Logo"
            className="w-8 h-8 object-contain"
          />
          <h1 className="text-lg sm:text-xl font-bold text-black">
            QuickToolKit
          </h1>
        </a>

        {/* NAV LINKS */}
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-gray-600">
          <a href="/categories" className="hover:text-black transition">
            Tools
          </a>

          <a href="#categories" className="hover:text-black transition">
            Categories
          </a>

          <a href="#about" className="hover:text-black transition">
            About
          </a>
        </nav>

      </div>
    </header>
  );
}