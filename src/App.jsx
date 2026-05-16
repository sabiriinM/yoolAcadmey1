import { Routes, Route } from "react-router-dom";

import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Courses from "./Pages/Courses";
import Consultancy from "./Pages/Consultancy";
import Gallery from "./Pages/Gallery";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contect"; // hubi magaca file-ka

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/consultancy" element={<Consultancy />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}