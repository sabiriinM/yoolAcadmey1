import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTiktok,FaWhatsapp ,FaEnvelope, FaCommentDots } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-secondary/30 py-16 ">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 font-display">
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Yool Academy
          </h2>

          <p className="text-black text-sm">
           Empowering the next generation of tech leaders through 
           precision-driven education and innovative learning frameworks..
          </p>

          <div className="flex gap-4 mt-4">
            <a href="https://www.facebook.com/share/p/1DY1KccYhb/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-black hover:text-primary transition-colors duration-300" />
            </a>
            <a href="https://www.tiktok.com/@yoolacademy10" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="text-black hover:text-primary transition-colors duration-300" />
            </a>
            <a href="https://wa.me/252617527288" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-black hover:text-primary transition-colors duration-300" />
            </a>
           <a 
  href="https://mail.google.com/mail/?view=cm&fs=1&to=yoolacademy4@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaEnvelope className="text-black hover:text-primary transition-colors duration-300" />
</a>
             <a href=''>
              <FaCommentDots className="text-black hover:text-primary transition-colors duration-300"/>
            </a>

           
          </div>

        </div>

        <div>
          <h3 className="font-semibold mb-4">
            Explore
          </h3>

          <ul className="space-y-2 text-black">
            <li>Mission</li>
            <li>Values</li>
            <li>Curriculum</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">
            Support
          </h3>

          <ul className="space-y-2 text-black">
            <li>Privacy Policy</li>
            <li>Terms</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">
            Newsletter
          </h3>

            <p className="text-gray-500 text-sm mb-4">
              Stay updated with the latest tech news and course intakes.
            </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-white px-4 py-3 rounded-l-xl text-primary outline-none"
            />

            <button className="bg-secondary text-black tx px-5 rounded-r-xl">
              →
            </button>
          </div>
        </div>
      </div>
        <div className="text-center text-gray-500 mt-10 text-sm">
          &copy; {new Date().getFullYear()} Yool Academy. All rights reserved.
        </div>
      </footer>
  );
}