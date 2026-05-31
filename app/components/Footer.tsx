export default function Footer() {
  return (
    <footer className="bg-white border-t mt-10">
      <div className="max-w-6xl mx-auto px-4 py-5 md:py-6 text-center text-xs sm:text-sm text-gray-500">
        © {new Date().getFullYear()} QuickToolKit. All rights reserved.
      </div>
    </footer>
  );
}