import React, { useState , useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars , FaMoon, FaSun } from "react-icons/fa";
import imag from "../assets/screen.png"
export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(true);

  const toggleDarkMode = () => {
    setTheme(!theme); 
  };

  useEffect(() => {
    const element = document.documentElement;
    if (theme) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, [theme]);

  

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50 font-display">
      
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
        <img src={imag} alt="" className="w-16 h-14 ml-6" />

        <h1 className="text-2xl font-bold text-primary">
          <span className="text-secondary">Yool</span> Academy
        </h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-4 text-sm font-medium forced-colors:text-primary">
          <NavLink to="/"className={({ isActive }) =>isActive? "text-secondary border-b-2 border-secondary text-xl"
              : "text-primary hover:text-secondary text-xl"}>Home</NavLink>         
          <NavLink to="/about" className={({ isActive }) =>isActive? "text-secondary border-b-2 border-secondary text-xl"
              : "text-primary hover:text-secondary text-xl"}>About</NavLink>

          <NavLink to="/courses"className={({ isActive }) => isActive? "text-secondary border-b-2 border-secondary text-xl"
             : "text-primary hover:text-secondary text-xl"}>Courses</NavLink>
          <NavLink to="/consultancy" className={({ isActive }) =>isActive? "text-secondary border-b-2 border-secondary text-xl"
              : "text-primary hover:text-secondary text-xl"}>Consultancy</NavLink>
          <NavLink to="/gallery" className={({ isActive }) =>isActive? "text-secondary border-b-2 border-secondary text-xl"
              : "text-primary hover:text-secondary text-xl"}>Gallery</NavLink>
          <NavLink to="/blog" className={({ isActive }) =>isActive? "text-secondary border-b-2 border-secondary text-xl"
              : "text-primary hover:text-secondary text-xl"}>Blog</NavLink>
        </nav>

        {/* Desktop Buttons */}
        <div className="flex items-center gap-4"> 
         <NavLink to="/contact"> <button className="hidden md:flex bg-base hover:bg-secondary transition text-white px-5 py-2 rounded-full text-sm">
            Contact Us
          </button> </NavLink>  

         <div className="flex items-center">
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      >
        {theme === "dark" ? (
          <FaSun className="size-6 text-yellow-400 transition-all duration-300" />
        ) : (
          <FaMoon className="size-6 text-base transition-all duration-300" />
        )}
      </button>
     </div>
        </div>
        {/* Mobile Icon */}
        <FaBars
          onClick={() => setIsMenuOpen(!isMenuOpen)} className="absolute left-4.5 text-2xl  cursor-pointer md:hidden"/>

      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">

          <nav className="flex flex-col py-4">
            <a href="/" className="px-6 py-2 hover:text-secondary text-primary">Home</a>
            <a href="/courses" className="px-6 py-2 hover:text-secondary text-primary">Courses</a>
            <a href="/about" className="px-6 py-2 hover:text-secondary text-primary">About</a>
            <a href="/consultancy" className="px-6 py-2 hover:text-secondary text-primary">Consultancy</a>
            <a href="/gallery" className="px-6 py-2 hover:text-secondary text-primary">Gallery</a>
            <a href="/blog" className="px-6 pt-2 hover:text-secondary text-primary">Blog</a>
          </nav>

          {/* Buttons inside same panel */}
            <button className="bg-primary hover:bg-secondary transition text-white px-2 py-1 ml-4 mb-4 rounded-full ">
              Contact Us</button>

        </div>
      )}

     

    </header>
  );
}