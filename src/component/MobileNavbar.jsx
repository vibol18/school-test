import { useState } from "react";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

  const menus = [
    "International Schools",
    "Centers",
    "Schools",
    "Preschools",
    "Special Needs",
    "News",
    "Add Listing",
  ];

  return (
    <>
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b bg-white">
        {/* Logo */}
        <h1 className="text-orange-500 font-bold text-lg">
          Education Cambodia
        </h1>

        {/* Desktop Navbar */}
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

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(true)}
          className="text-2xl md:hidden"
        >
          ☰
        </button>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close */}
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
              className="py-4 border-b text-blue-900 text-lg"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
