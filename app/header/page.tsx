export default function Header() {
  return (
    <header className="flex items-center justify-between w-full px-4 md:px-6 py-4 bg-white">
      {/* Left */}
      <div className="flex items-center">
        {/* Hamburger - mobile only */}
        <button className="text-gray-700 text-2xl md:hidden">
          ☰
        </button>

        {/* ChatGPT text/logo - desktop only */}
        <span className="hidden md:inline text-gray-900 font-semibold text-lg md:text-xl">
          ChatGPT
        </span>
      </div>

      {/* Center - Upgrade button */}
      <div className="flex-1 flex justify-center">
        <button className="px-3 py-1.5 rounded-full bg-purple-100 text-purple-700 font-medium hover:bg-purple-200 text-sm md:text-base">
          Upgrade to Go
        </button>
      </div>

      {/* Right - Temporary Chat SVG logo */}
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 md:w-8 md:h-8 text-black"
        >
          <path d="M10.1 2.182a10 10 0 0 1 3.8 0" />
          <path d="M13.9 21.818a10 10 0 0 1-3.8 0" />
          <path d="M17.609 3.721a10 10 0 0 1 2.69 2.7" />
          <path d="M2.182 13.9a10 10 0 0 1 0-3.8" />
          <path d="M20.279 17.609a10 10 0 0 1-2.7 2.69" />
          <path d="M21.818 10.1a10 10 0 0 1 0 3.8" />
          <path d="M3.721 6.391a10 10 0 0 1 2.7-2.69" />
          <path d="M6.391 20.279a10 10 0 0 1-2.69-2.7" />
        </svg>
      </div>
    </header>
  );
}
