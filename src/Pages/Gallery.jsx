// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// export default function Gallery() {
//   return (
//     <>
//       <Navbar/>
    
//     <section className="py-24 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6">
//         <h2 className="text-5xl font-display text-primary text-center mb-14">
//           Inside The Academy
//         </h2>

//         <div className="grid md:grid-cols-2 gap-6">
//           <img
//             src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
//             className="rounded-3xl h-full object-cover"
//           />

//           <div className="grid grid-cols-2 gap-6">
//             <img
//               src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
//               className="rounded-3xl object-cover h-full"
//             />

//             {/* <img
//               src="https://images.unsplash.com/photo-1516321310764-8d15c3dfb1c5"
//               className="rounded-3xl object-cover h-full"
//             /> */}

//             <img
//               src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
//               className="rounded-3xl object-cover h-full col-span-2"
//             />
//           </div>
//         </div>
//       </div>
//     </section>

//     <Footer/>
//     </>
//   );
// }




// GallerySection.jsx

import { FaSearch } from "react-icons/fa";
 import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const galleryImages = [
  "https://i1-c.pinimg.com/1200x/28/5a/31/285a31ee0fbd58dcc2e7b7ad99c0fdf7.jpg",
  "https://i1-c.pinimg.com/1200x/b1/45/32/b145326dbd1d628ff2f551cb79d55849.jpg",
  "https://i1-c.pinimg.com/736x/0f/d9/b5/0fd9b520e6b149973fbcbe7c9e36a947.jpg",
  "https://i.pinimg.com/736x/32/21/39/32213931101976e91f09205027f84e5c.jpg",
  "/images/presentation.jpg",
  "/images/smartboard.jpg",
];

const categories = [
  "All Moments",
  "Computer Labs",
  "Creative Workspaces",
  "Presentations",
  "Students",
];

export default function GallerySection() {
  return (
    <>
    <Navbar/>
    <section className="bg-gray-100 min-h-screen py-16 px-5 md:px-12">

      {/* Hero Text */}
      <div className="max-w-4xl">
        <p className="text-base uppercase tracking-widest text-xs font-semibold mb-4">
          Visual Excellence
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
          Our Creative <br />
          Ecosystem.
        </h1>

        <p className="mt-6 text-gray-600 max-w-2xl leading-8 font-display">
          Explore the heartbeat of Yool Academy. From our
          state-of-the-art computer labs to collaborative
          creative workspaces, witness the transformation of
          students into industry leaders.
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-4 mt-12">

        {categories.map((item, index) => (
          <button
            key={index}
            className={`px-5 py-2 rounded-full text-sm transition
            ${
              index === 0
                ? "bg-base text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {item}
          </button>
        ))}

      </div>

      {/* Gallery Grid */}

      <div className="relative mt-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-md group cursor-pointer"
            >
              <img
                src={image}
                alt=""
                className="w-full h-70 object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition"></div>
            </div>
          ))}

        </div>

        {/* Floating Search Button */}

        <button
          className="absolute right-0 top-1/2
          translate-x-4 bg-base
          text-white w-14 h-14 rounded-full
          flex items-center justify-center
          shadow-lg hover:scale-110 transition font-display"
        >
          <FaSearch />
        </button>

      </div>

      {/* CTA Section */}

      <div
        className="mt-24 bg-base rounded-[40px]
        text-center py-20 px-6 text-white"
      >

        <h2 className="text-3xl md:text-5xl font-bold">
          Experience it firsthand.
        </h2>

        <p className="mt-6 max-w-xl mx-auto text-blue-100">
          Schedule a campus tour to see our facilities and
          meet the innovators of tomorrow.
        </p>

        <button
          className="mt-10 bg-white text-base
          px-10 py-4 rounded-full
          font-medium hover:scale-105 transition"
        >
          Book a Campus Tour
        </button>

      </div>

    </section>
    <Footer/>
    </>
  );
}