import React, { useState } from 'react'
import { FaSearch, FaCalendar, FaClock } from "react-icons/fa";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const courses = [
  {
    id: 1,
    title: "Web Development",
    category: "Programming",
    duration: "8 Weeks",
    date: "May 20",
    image:
      "https://i.pinimg.com/1200x/79/c6/2d/79c62d94154fb332afb84191a996e66f.jpg",
  },

 {
    id: 2,
    title: "Graphic Design",
    category: "Design",
    duration: "12 Weeks",
    date: "June 15",
    image:
      "https://i.pinimg.com/1200x/bd/dd/2a/bddd2a086b0f4fedaf5fb5353aa70dd8.jpg",
  },
  {
    id: 3,
    title: "Data Analytics",
    category: "",
    duration: "10 Weeks",
    date: "July 10",
    image:
      "https://i.pinimg.com/736x/98/cf/c6/98cfc6d00332ee28072d98c747f8234f.jpg",
  },
  {
    id: 4,
    title: "Digital Marketing",
    category: "Marketing",
    duration: "8 Weeks",
    date: "May 20",
    image:
      "https://i.pinimg.com/736x/0b/c7/4d/0bc74d001508dff9b1c1eab79df9ea84.jpg",
  },
]

const allCourses = [
  {
    id: 1,
    title: "Web Development",
    category: "Programming",
    duration: "12 Weeks",
    date: "June 15",
    image:
      "https://i.pinimg.com/1200x/bd/dd/2a/bddd2a086b0f4fedaf5fb5353aa70dd8.jpg",
  },

  {
    id: 2,
    title: "Data Analysis",
    category: "Programming",
    duration: "12 Weeks",
    date: "June 15",
    image:
      "https://i.pinimg.com/1200x/bd/dd/2a/bddd2a086b0f4fedaf5fb5353aa70dd8.jpg",
  },

  {
    id: 3,
    title: "Graphic Design",
    category: "Design",
    duration: "10 Weeks",
    date: "July 10",
    image:
      "https://i.pinimg.com/736x/98/cf/c6/98cfc6d00332ee28072d98c747f8234f.jpg",
  },
  {
    id: 4,
    title: "Digital Marketing",
    category: "Marketing",
    duration: "12 Weeks",
    date: "June 15",
    image:
      "https://i.pinimg.com/1200x/bd/dd/2a/bddd2a086b0f4fedaf5fb5353aa70dd8.jpg",
  },
  {
    id: 5,
    title: "Monitoring &Evaluation",
    category: "",
    duration: "10 Weeks",
    date: "July 10",
    image:
      "https://i.pinimg.com/736x/98/cf/c6/98cfc6d00332ee28072d98c747f8234f.jpg",
  },
  {
    id: 6,
    title: "Enterpreurship &Business",
    category: "Marketing",
    duration: "8 Weeks",
    date: "May 20",
    image:
      "https://i.pinimg.com/736x/0b/c7/4d/0bc74d001508dff9b1c1eab79df9ea84.jpg",
  },
  {
    id: 7,
    title: "Reseaach Methodology",
    category: "Design",
    duration: "12 Weeks",
    date: "June 15",
    image:
      "https://i.pinimg.com/1200x/bd/dd/2a/bddd2a086b0f4fedaf5fb5353aa70dd8.jpg",
  },
  {
    id: 8,
    title: "Video Editing",
    category: "",
    duration: "10 Weeks",
    date: "July 10",
    image:
      "https://i.pinimg.com/736x/98/cf/c6/98cfc6d00332ee28072d98c747f8234f.jpg",
  },
  {
    id: 9,
    title: "Project Manegment",
    category: "Manegment",
    duration: "8 Weeks",
    date: "May 20",
    image:
      "https://i.pinimg.com/736x/0b/c7/4d/0bc74d001508dff9b1c1eab79df9ea84.jpg",
  },
    {
    id: 10,
    title: "Contect Creater",
    category: "Marketing",
    duration: "8 Weeks",
    date: "May 20",
    image:
      "https://i.pinimg.com/736x/0b/c7/4d/0bc74d001508dff9b1c1eab79df9ea84.jpg",
  },
]

export default function Courses() {

  // courses-ka hadda muuqanaya
  const [displayCourses, setDisplayCourses] = useState(courses)
  const [activeButton, setActiveButton] = useState("featured")

  return (
    <div>

      <Navbar />

      <section className="py-20 px-6 m-10 font-display">

        <div className="max-w-3xl">

          <h1 className="text-5xl md:text-7xl leading-tight text-primary">
            Master the Skills of
            <span className="text-base block">
              Tomorrow.
            </span>
          </h1>

          <p className="text-primary text-lg mt-8 leading-relaxed ">
            Explore our industry-standard curriculum
          </p>

          {/* Search */}
          <div className="mt-10 bg-white rounded-2xl px-5 py-4 flex items-center gap-4 shadow-xl">

            <FaSearch size={20} />

            <input
              type="text"
              placeholder="Search course..."
              className="w-full outline-none bg-transparent "
            />

          </div>

        </div>

      </section>

      {/* Buttons */}
      <div className='flex flex-wrap gap-4 ml-12 my-8 font-display'>

         <button onClick={() => { 
            setDisplayCourses(courses)
            setActiveButton("featured") }}className={`py-2 px-10 rounded-full font-bold transition 
              ${activeButton === "featured" ? "bg-secondary text-white" :"bg-gray-100 text-black hover:bg-secondary hover:text-white"
               }`}> Featured Courses 
          </button>

        {/* All Courses */}
       <button onClick={() => {
           setDisplayCourses(allCourses)
           setActiveButton("all")
          }} className={`py-2 px-10 rounded-full font-bold transition 
            ${activeButton === "all" ? "bg-secondary text-white" : "bg-gray-100 text-black hover:bg-secondary hover:text-white"
            } `}> All Courses
         </button>
      
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">

        {displayCourses.map((course) => (

          <div
            key={course.id}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition"
          >

            <img
              src={course.image}
              alt={course.title}
              className="h-56 w-full object-cover hover:scale-110 transition"
            />

            <div className="p-5">

              <p className="text-xs font-bold text-base uppercase tracking-widest">
                {course.category}
              </p>

              <h3 className="text-2xl font-semibold mt-3">
                {course.title}
              </h3>

              <div className="flex items-center gap-5 mt-6 text-sm text-gray-500">

                <div className="flex items-center gap-2">
                  <FaClock className='text-base' size={16} />
                  {course.duration}
                </div>

                <div className="flex items-center gap-2">
                  <FaCalendar className='text-base' size={16} />
                  {course.date}
                </div>

              </div>

              <button className="mt-4 px-5 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
                Enroll Now →
              </button>

            </div>

          </div>

        ))}

      </div>

      <Footer />

    </div>
  )
}