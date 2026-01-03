import { useState } from "react";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

  const menus = [
    "Home",
    "About",
    "Contact",
    "Blog",
    "Developer",
    "News",
    "Add Listing",
  ];

  return (
    <>
      {/* ===== FIXED HEADER ===== */}
      <header className="fixed top-0 left-0 w-full z-50
        flex items-center justify-between px-6 py-4
        shadow-lg bg-white"
      >
        {/* Logo */}
        <h1 className="text-orange-500 font-bold text-lg">
          Bol Coding
        </h1>
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {menus.map((item) => (
            <a
              key={item}
              href="#"
              className="text-blue-900 hover:text-orange-500 font-medium"
            >
              {item}
            </a>
          ))}
        </nav>
        <button
          onClick={() => setOpen(true)}
          className="text-2xl md:hidden"
        >
         Menu ☰
        </button>
      </header>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-50
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-5 text-2xl"
        >
          ✕
        </button>

        <nav className="mt-20 flex flex-col text-center">
          {menus.map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => setOpen(false)}
              className="py-4 border-b text-blue-900 text-lg hover:text-orange-500"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
      <div className="pt-20 px-6">
      </div>
    </>
  );
}
