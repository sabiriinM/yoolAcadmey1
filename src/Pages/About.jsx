// AboutContent.jsx
import {FaGraduationCap,FaUsers,FaRocket,FaBriefcase,FaCertificate,FaLaptopCode, FaCheckCircle} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const features = [
  {
    icon: <FaGraduationCap />,
    title: "Practical Learning",
    desc: "Dive deep into hands-on labs and real-world simulations.",
  },
  {
    icon: <FaUsers />,
    title: "Expert Trainers",
    desc: "Learn from seasoned architects and industry experts.",
  },
  {
    icon: <FaRocket />,
    title: "Real Projects",
    desc: "Build professional portfolio projects with clients.",
  },
  {
    icon: <FaBriefcase />,
    title: "Career-Focused Skills",
    desc: "Gain practical skills demanded by employers.",
  },
  {
    icon: <FaCertificate />,
    title: "Certification",
    desc: "Receive globally recognized certifications.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Tech-Driven Education",
    desc: "Modern infrastructure for digital learning.",
  },
];

export default function AboutContent() {
  return (
    <div>
      <Navbar/>

      {/* Hero */}

      <section className="bg-[#eef3fb] py-16 px-6 lg:px-20 mt-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="bg-blue-100 text-base px-4 py-1 rounded-full text-sm font-display">
              ABOUT OUR ACADEMY
            </span>

            <h1 className="text-5xl font-bold mt-6 leading-tight font-display">
              Redefining Tech Education.
            </h1>

            <p className="text-gray-600 mt-6 font-display">
              Yool Academy is a premier institution at the intersection
              of innovation and education.
            </p>

            <div className="flex gap-4 mt-8">
              <button className="bg-base hover:bg-secondary text-white px-6 py-3 rounded-lg font-display">
                Explore Curriculum
              </button>

              <button className="border border-base px-6 py-3 rounded-lg font-display">
                Our Story
              </button>
            </div>
          </div>

          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              className="rounded-3xl w-full h-[350px] object-cover"
            />

            <div className="absolute bottom-5 left-5 bg-white p-4 rounded-2xl shadow-lg">
              <h2 className="font-bold text-2xl text-blue-600">
                500+
              </h2>
              <p className="text-sm text-gray-500">
                Graduates
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* Mission + Vision */}

      <section className="py-20 px-6 lg:px-20">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

          <div>

            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Our Mission
              </h2>

              <p className="text-gray-600">
                To bridge the gap between traditional learning and modern technology.
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-4">
                Our Vision
              </h2>

              <p className="text-gray-600">
                To become a global benchmark for technical excellence.
              </p>
            </div>

          </div>


          <div className="flex grid-cols-2 gap-5">

            <div className="grid gap-4">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
              className="rounded-2xl h-70 object-cover w-80"
            />
            <div className="bg-base font-display h-40 rounded-2xl p-6 text-white">
              <h2 className="text-3xl font-bold">
                100%
              </h2>

              <p>Practical Approach</p>
            </div>

           
            </div>

            <div className="grid gap-4">

               <div className="bg-blue-100 rounded-2xl p-6 h-40 flex flex-col justify-center">
              <h2 className="font-bold text-2xl">
                Elite
              </h2>

              <p className="text-gray-600">
                Industry Mentors
              </p>
            </div>
          
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
              className="rounded-2xl w-80 h-70 "
            />
          </div>
          </div>

        </div>

      </section>


      {/* Features */}

      <section className="bg-gray-100 py-20 px-6 lg:px-20">

        <div className="max-w-7xl mx-auto">

          <p className="text-center text-blue-600 text-sm mb-3">
            WHY CHOOSE US
          </p>

          <h2 className="text-center text-4xl font-bold mb-14">
            Education Designed for the Future
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {features.map((item,index)=>(

              <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-sm hover:-translate-y-2 transition duration-300"
              >

                <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center text-blue-600 mb-5">
                  {item.icon}
                </div>

                <h3 className="font-bold text-xl mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* Core Values */}

      <section className="py-20 px-6 lg:px-20">

        <div className="bg-[#021a35] rounded-[35px] p-10">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            <div>

              <h2 className="text-white text-4xl font-bold mb-8">
                Our Core Values
              </h2>

              <div className="space-y-6">

                <div className="flex gap-3">
                  <FaCheckCircle className="text-white mt-1"/>
                  <div>
                    <h3 className="font-bold text-white">
                      Excellence In Execution
                    </h3>

                    <p className="text-gray-400">
                      Delivering perfection in every project.
                    </p>
                  </div>
                </div>


                <div className="flex gap-3">
                  <FaCheckCircle className="text-white mt-1"/>
                  <div>
                    <h3 className="font-bold text-white">
                      Continuous Innovation
                    </h3>

                    <p className="text-gray-400">
                      Constant improvement and creativity.
                    </p>
                  </div>
                </div>


                <div className="flex gap-3">
                  <FaCheckCircle className="text-white mt-1"/>
                  <div>
                    <h3 className="font-bold text-white">
                      Student Success First
                    </h3>

                    <p className="text-gray-400">
                      Success of learners remains our priority.
                    </p>
                  </div>
                </div>

              </div>

            </div>

            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952"
              className="rounded-3xl h-[350px] w-full object-cover"
            />

          </div>

        </div>

      </section>
      <Footer/>

    </div>
  );
}