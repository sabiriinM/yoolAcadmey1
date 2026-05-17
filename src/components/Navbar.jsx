import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaEnvelope,
  FaMapMarkerAlt,
 
  FaSearch,
  FaChevronDown,
} from "react-icons/fa";

import logo from "../assets/logoY.jpg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

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

  const linkClass = ({ isActive }) =>
    `flex items-center gap-1 whitespace-nowrap text-[15px] font-black transition-all duration-300 xl:text-[16px] ${
      isActive ? "text-[#063B63]" : "text-black hover:text-[#063B63]"
    }`;

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-white">
      {/* TOP BAR */}
      <div className="bg-[#31378F] text-white">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-4 py-2 text-[10px] font-black sm:text-xs md:text-sm lg:px-10">
          <div className="flex items-center gap-3 sm:gap-5">
            <a
              href="mailto:yoolacademy4@gmail.com"
              className="flex items-center gap-1.5 transition hover:text-blue-100"
            >
              <FaEnvelope />
              <span className="hidden sm:inline">yoolacademy4@gmail.com</span>
              <span className="sm:hidden">Email</span>
            </a>

            <span className="flex items-center gap-1.5">
              <FaMapMarkerAlt />
              <span>Mogadishu, Somalia</span>
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-5">
           

           

            
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="border-b border-slate-100 bg-white shadow-sm">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-4 py-4 lg:px-10">
          {/* LOGO */}
          <NavLink to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Yool Academy Logo"
              className="h-14 w-14 object-contain sm:h-16 sm:w-16"
            />

            <div className="hidden sm:block">
              <h1 className="text-xl font-black leading-none text-[#063B63] lg:text-2xl">
                Yool Academy
              </h1>
              <p className="mt-1 text-xs font-bold text-[#2196F3]">
                Skills • Training • Consultancy
              </p>
            </div>
          </NavLink>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.path} className={linkClass}>
                {link.name}
                <FaChevronDown className="text-[10px]" />
              </NavLink>
            ))}
          </nav>

          {/* DESKTOP RIGHT */}
          <div className="hidden items-center gap-5 lg:flex">
            <button
              type="button"
              className="text-lg text-black transition hover:text-[#063B63]"
              aria-label="Search"
            >
              <FaSearch />
            </button>

            <NavLink
              to="/apply"
              className="rounded-full bg-[#063B63] px-6 py-3 text-sm font-black text-white transition hover:bg-[#2196F3]"
            >
              Apply Now
            </NavLink>
          </div>

          {/* MOBILE RIGHT */}
          <div className="flex items-center gap-5 lg:hidden">
            <button
              type="button"
              className="text-lg text-black"
              aria-label="Search"
            >
              <FaSearch />
            </button>

            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="text-xl text-black"
              aria-label="Open menu"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE SIDE MENU */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[999] bg-black/55 lg:hidden">
          <div className="h-full w-[82%] max-w-[340px] bg-white shadow-2xl">
            {/* MOBILE MENU HEADER */}
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-5">
              <div className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="Yool Academy Logo"
                  className="h-12 w-12 object-contain"
                />

                <div>
                  <h2 className="text-lg font-black text-[#063B63]">
                    Yool Academy
                  </h2>
                  <p className="text-[11px] font-bold text-[#2196F3]">
                    Skills • Training • Consultancy
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-[#063B63]"
                aria-label="Close menu"
              >
                <FaTimes />
              </button>
            </div>

            {/* MOBILE LINKS */}
            <nav className="px-5 py-5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between border-b border-slate-100 px-1 py-4 text-[15px] font-bold transition ${
                      isActive
                        ? "text-[#063B63]"
                        : "text-slate-600 hover:text-[#063B63]"
                    }`
                  }
                >
                  {link.name}
                  <FaChevronDown className="text-[10px] text-slate-400" />
                </NavLink>
              ))}

              <NavLink
                to="/apply"
                onClick={() => setIsMenuOpen(false)}
                className="mt-6 flex items-center justify-center rounded-xl bg-[#063B63] py-4 font-black text-white"
              >
                Apply Now
              </NavLink>

              <NavLink
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-3 flex items-center justify-center rounded-xl border border-[#063B63] py-4 font-black text-[#063B63]"
              >
                Contact Us
              </NavLink>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}