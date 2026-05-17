import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";

import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Academy from "./Pages/Academy";
import Programs from "./Pages/Programs";
import Consultancy from "./Pages/Consultancy";
import Events from "./Pages/Events";
import Blog from "./Pages/Blog";
import ApplyNow from "./Pages/ApplyNow";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/consultancy" element={<Consultancy />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/apply" element={<ApplyNow />} />
        </Routes>
      </main>
    </>
  );
}