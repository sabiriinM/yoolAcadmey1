import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import imag from "../assets/screen.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Academy", path: "/academy" },
    { name: "Programs", path: "/programs" },
    { name: "Consultancy", path: "/consultancy" },
    { name: "Events", path: "/events" },
    { name: "Blog", path: "/blog" },
  ];

  const linkClass = ({ isActive }) =>
    `relative px-1 py-2 text-[15px] font-semibold tracking-wide transition-all duration-300
    ${
      isActive
        ? "text-blue-600 dark:text-blue-400"
        : "text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
    }
    after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:rounded-full 
    after:bg-gradient-to-r after:from-blue-600 after:to-emerald-500 
    after:transition-all after:duration-300 hover:after:w-full
    ${isActive ? "after:w-full" : ""}`;

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-200/70 bg-white/90 font-display shadow-sm backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-emerald-50 p-1 shadow-sm dark:from-slate-800 dark:to-slate-900">
            <img
              src={imag}
              alt="Yool Academy Logo"
              className="h-full w-full rounded-xl object-contain"
            />
          </div>

          <div className="leading-tight">
            <h1 className="text-xl font-black tracking-tight text-slate-900 dark:text-white md:text-2xl">
              <span className="bg-gradient-to-r from-blue-700 to-emerald-600 bg-clip-text text-transparent">
                Yool
              </span>{" "}
              Academy
            </h1>
            <p className="hidden text-xs font-medium text-slate-500 dark:text-slate-400 sm:block">
              Skills • Training • Consultancy
            </p>
          </div>
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.name} to={link.path} className={linkClass}>
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-600 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-500"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? (
              <FaSun className="text-lg text-yellow-400" />
            ) : (
              <FaMoon className="text-lg" />
            )}
          </button>

          <NavLink
            to="/apply"
            className="rounded-full bg-gradient-to-r from-blue-700 to-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-600/25"
          >
            Apply Now
          </NavLink>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon />
            )}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white transition hover:bg-blue-700 dark:bg-white dark:text-slate-900"
            aria-label="Open menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 pb-5 pt-3 shadow-xl dark:border-slate-800 dark:bg-slate-950 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-base font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-blue-50 text-blue-700 dark:bg-slate-800 dark:text-blue-400"
                      : "text-slate-700 hover:bg-slate-100 hover:text-blue-700 dark:text-slate-200 dark:hover:bg-slate-800"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <NavLink
              to="/apply"
              onClick={() => setIsMenuOpen(false)}
              className="mt-3 rounded-xl bg-gradient-to-r from-blue-700 to-emerald-600 px-4 py-3 text-center text-base font-bold text-white shadow-lg"
            >
              Apply Now
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}