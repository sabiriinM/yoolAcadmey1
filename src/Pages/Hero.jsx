import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaPhoneAlt,
  FaCheckCircle,
  FaLaptopCode,
  FaChartLine,
  FaPalette,
  FaVideo,
} from "react-icons/fa";

import heroVideo from "../assets/hero-video.mp4";

export default function Hero() {
  return (
    <main className="bg-white dark:bg-slate-950">
      {/* SECTION 1: VIDEO HERO */}
      <section className="relative min-h-screen overflow-hidden text-white">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        <div className="relative z-10 flex min-h-screen items-center px-6 pt-28">
          <div className="mx-auto max-w-7xl">
            <p className="mb-4 text-xl font-light text-slate-200">
              Technology Training & Consultancy Center
            </p>

            <h1 className="max-w-5xl text-5xl font-black uppercase leading-tight md:text-7xl">
              Build Your Future Skills With Yool Academy
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Yool Academy waa xarun tababar iyo consultancy casri ah oo
              dhista xirfadaha technical iyo professional ee ardayda,
              graduates-ka, professionals-ka iyo organizations-ka.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/apply"
                className="inline-flex items-center gap-3 rounded-md bg-emerald-600 px-8 py-4 font-bold text-white transition hover:bg-emerald-700"
              >
                Apply Now <FaArrowRight />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-md bg-white px-8 py-4 font-bold text-emerald-700 transition hover:bg-slate-100"
              >
                <FaPhoneAlt /> Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: COURSES */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="font-bold uppercase text-emerald-600">
              Our Programs
            </span>
            <h2 className="mt-3 text-4xl font-black text-slate-900 dark:text-white md:text-5xl">
              Professional Courses We Offer
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Koorsooyinka Yool Academy waxay ku saleysan yihiin baahida dhabta
              ah ee suuqa shaqada maanta.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <FaPalette />,
                title: "Graphic Design",
                text: "Adobe Photoshop iyo Adobe Illustrator.",
              },
              {
                icon: <FaVideo />,
                title: "Video Editing",
                text: "Adobe Premiere Pro iyo editing practical ah.",
              },
              {
                icon: <FaLaptopCode />,
                title: "Computer Applications",
                text: "Word, Excel, PowerPoint iyo Microsoft Access.",
              },
              {
                icon: <FaChartLine />,
                title: "Data Analysis",
                text: "Advanced Excel, Power BI iyo Data Visualization.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-3 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-3xl text-emerald-600 transition group-hover:bg-emerald-600 group-hover:text-white">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY CHOOSE US */}
      <section className="bg-slate-50 px-6 py-24 dark:bg-slate-900">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="font-bold uppercase text-emerald-600">
              Why Choose Us
            </span>

            <h2 className="mt-3 text-4xl font-black text-slate-900 dark:text-white md:text-5xl">
              Waxbarasho Tayo Leh Iyo Tababar Practical Ah
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Yool Academy waxay qaadaneysaa tiro arday ah oo kooban si loo
              hubiyo tayada waxbarashada, practical support, iyo in arday walba
              helo xirfad uu si dhab ah ugu shaqeyn karo.
            </p>
          </div>

          <div className="space-y-5">
            {[
              "Fasallo kooban si tayada loo ilaaliyo",
              "Macalimiin xirfad iyo khibrad leh",
              "Koorsooyin ku saleysan suuqa shaqada",
              "Certificates iyo practical projects",
              "Training iyo consultancy services",
            ].map((text, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-md dark:bg-slate-950"
              >
                <FaCheckCircle className="text-2xl text-emerald-600" />
                <p className="font-semibold text-slate-800 dark:text-slate-200">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[40px] bg-gradient-to-r from-emerald-700 to-blue-800 p-10 text-center text-white shadow-2xl md:p-16">
          <h2 className="text-4xl font-black md:text-5xl">
            Diiwaangelintu Waa Furan Tahay
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
            Boosasku waa xadidan yihiin. Horey isu diiwaangeli si aad uga
            faa’iidaysato fursaddan qiimaha leh oo aad u dhisato mustaqbal
            xirfadeed oo muuqda.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/apply"
              className="rounded-full bg-white px-8 py-4 font-bold text-emerald-700 transition hover:bg-slate-100"
            >
              Apply Now
            </Link>

            <Link
              to="/contact"
              className="rounded-full border border-white/40 px-8 py-4 font-bold text-white transition hover:bg-white hover:text-emerald-700"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}