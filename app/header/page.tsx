export default function Header() {
  return (
    <header className="flex justify-between items-center w-full px-6 py-4">
      {/* Left - Logo + Dropdown */}
      <div className="flex items-center gap-2">
        <span className="font-semibold text-lg">ChatGPT</span>
        <span className="text-gray-500 text-sm">▼</span>
      </div>

      {/* Right - Upgrade button */}
      <button className="px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 font-medium hover:bg-purple-200 transition">
        Upgrade to Go
      </button>
    </header>
  );
}