import React from 'react'
import Navbar from '../components/Navbar'
import { FaPhone, FaWhatsapp , FaCommentDots} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export default function Contact() {
  return (
    <div>
        <Navbar/>
            {/* Left Side Content */}
         <section className="max-w-3xl mt-20  px-6 py-6 font-display">
          <p className="uppercase tracking-[4px] text-base text-sm">
             Get In Touch
           </p>

           <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Let&apos;s start your tech journey.
            </h1>

            <p className="text-gray-600 leading-8 text-lg">
              Whether you have questions about our curriculum, need corporate
              consultancy, or just want to say hello, our team of experts is ready
              to assist you.
           </p>
        </section>

        {/* {center section} */}
     <div className="flex gab-6 justify-around">

         <div className="flex  flex-col md:grid-cols-2 gap-8 mx-12 my-15">
            
            <div className="bg-white w-72 rounded-2xl p-6 shadow-2xl hover:shadow-md transition font-display">
            
                <div className="flex gap-4 p-4">
                   <div className="w-14 h-14 rounded-xl bg-blue-100 text-base flex items-center justify-center ">
                      <FaPhone className="text-xl" />
                   </div>
                   <h2 className="text-2xl font-display font-bold mt-3">Call Us</h2>
                </div>
                   <p className="text-gray-500 text-sm mb-4 ml-4">Speak with our admissions team.</p>
                   <a href="#"className="text-secondary ml-4 font-semibold hover:underline" >0617527288</a>
           
            </div>

            <div className="bg-white w-72 rounded-2xl p-6 shadow-2xl hover:shadow-md transition font-display">
            
                <div className="flex gap-4 p-4">
                   <div className="w-14 h-14 rounded-xl bg-blue-100 text-base flex items-center justify-center ">
                      <FaCommentDots className="text-xl" />
                   </div>
                   <h2 className="text-2xl font-display font-bold mt-3">Email Us</h2>
                </div>
                   <p className="text-gray-500 text-sm mb-4 ml-4">For general inquiries and support.</p>
                   <a href="#"className="text-secondary ml-4 font-semibold hover:underline" >0617527288</a>
           
            </div>

            <div className="bg-base text-white w-72 rounded-2xl p-6 shadow-2xl hover:shadow-md transition font-display">
            
                <div className="flex gap-4 p-4">
                   
                   <h2 className="text-2xl font-display font-bold mt-3">Quick Chat?</h2>
                </div>
                   <p className=" text-sm mb-4 ml-4">Message us on WhatsApp for instant support regarding our latest programs.</p>
                   <div className="w-8 h-8 rounded-xl absolute left-22 sm:top-288 top-304 bg-blue-100 text-base flex items-center justify-center ">
                       <a href="https://wa.me/252617527288"target="_blank"rel="noopener noreferrer"><FaWhatsapp className="text-xl"/></a>
                   </div>
                    <a href="https://wa.me/252617527288"target="_blank"rel="noopener noreferrer">
                      <button className='bg-white text-base w-45 h-10 rounded-xl font-display pl-9'>
                          WhatsApp Us
                       </button>
                    </a>      
            </div>
                 
       </div>

         {/* Right Side Form */}
        <div className="w-full md:w-full shadow-2xl hover:shadow-sm transition  px-6 my-10">
            <div className="bg-white rounded-3xl my-10 p-10 md:p-10 shadow-sm">
              <h2 className="text-4xl font-bold mb-10">Send a Message</h2>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-3 uppercase">
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-gray-100 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-3 uppercase">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-gray-100 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-600"
                    />
                     </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3 uppercase">
                    Subject
                  </label>

                  <select className="w-full bg-gray-100 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-600">
                    <option>Data Analysis</option>
                    <option>Web Development</option>
                    <option>Graphic Design</option>
                    <option>Video Editing</option>
                    <option>Digital Marketing</option>
                    <option>Contect Creater</option>
                    <option>Project Manegment</option>
                    <option>Reseaach Methodology</option>
                    <option>Enterpreurship &Business</option>
                    <option>Monitoring &Evaluation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3 uppercase">
                    Message
                  </label>

                  <textarea
                    rows="6"
                    placeholder="Tell us about your goals..."
                    className="w-full bg-gray-100 rounded-xl px-5 py-4 outline-none resize-none focus:ring-2 focus:ring-blue-600"
                  ></textarea>
                </div>

                <button className="bg-base text-white px-8 py-4 rounded-xl hover:bg-secondary transition font-medium">
                  Send Message
                </button>
                 </form>
            </div>
        </div>
     </div>  

         {/* Map Section */}
        <section className="mt-20 relative overflow-hidden rounded-3xl">
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1400&auto=format&fit=crop"
            alt="Map"
            className="w-full h-125 object-cover"
          />

          <div className="absolute bottom-10 left-10 bg-white p-8 rounded-2xl max-w-sm shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Our Campus</h3>

            <p className="text-gray-600 leading-7 mb-5">
              mugdisho somalia
            </p>

            <button className="text-blue-700 font-semibold hover:underline">
              Get Directions →
            </button>
          </div>
        </section>
    </div>
  )
}
