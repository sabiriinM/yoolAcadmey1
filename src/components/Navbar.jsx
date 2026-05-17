import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaGlobe,
  FaChevronDown,
  FaCheck,
} from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import logo from "../assets/logoY.jpg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "English"
  );
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

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
    { name: "Contact", path: "/contact" },
  ];

  const languages = ["English", "Somali"];

  const handleLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
    setIsLangOpen(false);
  };

  const linkClass = ({ isActive }) =>
    `relative whitespace-nowrap px-1 py-2 text-[13px] xl:text-[14px] font-extrabold tracking-wide transition-all duration-300
    ${
      isActive
        ? "text-white"
        : "text-blue-100 hover:text-white"
    }
    after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 after:rounded-full 
    after:bg-white after:transition-all after:duration-300 hover:after:w-full
    ${isActive ? "after:w-full" : ""}`;

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-[#063B63] shadow-xl shadow-blue-950/20">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-4 py-3 lg:px-6 xl:px-8">
        {/* Logo */}
        <NavLink to="/" className="flex shrink-0 items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white p-1 shadow-lg">
            <img
              src={logo}
              alt="Yool Academy Logo"
              className="h-full w-full rounded-xl object-contain"
            />
          </div>

          <div className="leading-tight">
            <h1 className="text-lg font-black tracking-tight text-white xl:text-xl">
              Yool Academy
            </h1>
            <p className="hidden text-[11px] font-semibold text-blue-100 xl:block">
              Skills • Training • Consultancy
            </p>
          </div>
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden flex-1 items-center justify-center gap-4 lg:flex xl:gap-6">
          {navLinks.map((link) => (
            <NavLink key={link.name} to={link.path} className={linkClass}>
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          {/* Language */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white hover:text-[#063B63]"
            >
              <FaGlobe />
              {language}
              <FaChevronDown className="text-xs" />
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-3 w-44 overflow-hidden rounded-2xl bg-white p-2 shadow-2xl">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => handleLanguage(lang)}
                    className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-bold text-slate-700 transition hover:bg-blue-50 hover:text-[#063B63]"
                  >
                    {lang}
                    {language === lang && <FaCheck className="text-blue-600" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Dark Mode */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl text-white transition hover:bg-white hover:text-[#063B63]"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
          </button>

          <NavLink
            to="/apply"
            className="whitespace-nowrap rounded-full bg-white px-5 py-2.5 text-sm font-black text-[#063B63] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-xl"
          >
            Apply Now
          </NavLink>
        </div>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl text-white"
          >
            {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#063B63]"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-white/10 bg-[#063B63] px-4 pb-5 pt-4 shadow-2xl lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-base font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-white text-[#063B63]"
                      : "text-blue-100 hover:bg-white/10 hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Mobile Language */}
            <div className="mt-3 rounded-2xl bg-white/10 p-2">
              <p className="mb-2 px-3 text-xs font-bold uppercase tracking-wider text-blue-100">
                Language
              </p>

              <div className="grid grid-cols-2 gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => handleLanguage(lang)}
                    className={`rounded-xl px-4 py-3 text-sm font-black transition ${
                      language === lang
                        ? "bg-white text-[#063B63]"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            <NavLink
              to="/apply"
              onClick={() => setIsMenuOpen(false)}
              className="mt-3 rounded-xl bg-white px-4 py-3 text-center text-base font-black text-[#063B63] shadow-lg"
            >
              Apply Now
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}