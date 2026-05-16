import React from 'react'
import {FaCode} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Stats from '../components/Stats'
import Features from '../components/Features'
import Testimonial from '../components/Testimonials'
import CampusSection from '../components/CampusSection'

export default function () {
  return (
    <>
    <Navbar />
    <section className="relative min-h-screen flex items-center m-4 ">

     <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-base font-display sm:mt-1 mt-20 mb-4">
            ELEVATING TECH EXCELLENCE
          </p>

          <h2 className="text-6xl font-bold mb-6 font-display text-primary">
               Learn Skills That Build Your Future</h2>

          <p className="text-primary leading-relaxed mb-8 font-display">
            Master the most in-demand technologies with industry experts. Join Africa's 
            premier digital academy and transform your career path today
          </p>

          <div className="flex gap-8 font-display">
           <NavLink to="courses"> <button className="bg-base hover:bg-primary transition  text-white px-6 py-3 rounded-xl">
              Explore Courses</button> </NavLink>
           
            <NavLink to="/contact"><button className="bg-gray-100 text-black hover:bg-primary hover:text-white shadow-2xl  px-6 py-3 rounded-xl">
              Contact Us </button>  </NavLink>
          </div>
        </div>

        <div className="relative">

           <div className="w-14 h-14 rounded-xl bg-blue-100 text-base flex items-center justify-center absolute right-7.5 top-10">       
            <FaCode className="text-2xl"/>
          </div>


          <div className="bg-primary/10 rounded-3xl p-4">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
              alt=""
              className="rounded-2xl w-full"
            />
          </div>


          <div className="absolute left-8 bottom-10 bg-white text-primary shadow-xl px-2 py-4 rounded-2xl">
            
            <h3 className="text-2xl font-bold text-base">
              98%
            </h3>

            <p className="text-primary text-sm">
              Placement Rate
            </p>
            
          </div>

        </div>
      </div>

      </section>

        <Stats />
        <Features/>
        <Testimonial />

      <Footer />
    </>
  )
}
