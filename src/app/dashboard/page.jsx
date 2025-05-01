"use client";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import card4 from "../assets/images/card4.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const courses = [
  {
    title: "HLTAID012 - Provide First Aid in an education and Care Setting",
    date: "30th November 2023 9:30am",
    address:
      "Address, Address, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    session: "1 Session (Online with face-to face assessment)",
    progress: 20,
  },
  {
    title: "HLTAID012 - Provide First Aid in an education and Care Setting",
    date: "30th November 2023 9:30am",
    address:
      "Address, Address, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    session: "1 Session (Online with face-to face assessment)",
    progress: 40,
  },
  {
    title: "HLTAID012 - Provide First Aid in an education and Care Setting",
    date: "30th November 2023 9:30am",
    address:
      "Address, Address, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    session: "1 Session (Online with face-to face assessment)",
    progress: 40,
  },
];

export default function Courses() {
  return (
    <>
    <Navbar />
      <div className="max-w-7xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">My Courses</h1>
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {courses.map((course, i) => (
              <div
                key={i}
                className="bg-white rounded-lg border border-[#E8E8E8] flex flex-col md:flex-row overflow-hidden"
              >
                <Image
                  src={card4}
                  alt="course"
                  className="w-full md:w-1/3 object-cover"
                />
                <div className="p-4 flex-1">
                  <h2 className="font-bold text-lg">{course.title}</h2>
                  <p className="font-medium mt-2">Starting {course.date}</p>
                  <p className="mt-1 text-sm text-gray-600">{course.address}</p>
                  <p className="mt-4 font-semibold">{course.session}</p>

                  <div className="mt-4">
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-full bg-[#8AC342] rounded-full"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-right text-[#8AC342] mt-1">
                      {course.progress}%
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg border border-[#E8E8E8] p-6 h-fit">
            <h3 className="font-semibold text-lg mb-4">Contact details</h3>
            <div className="space-y-4 text-sm text-gray-700">
              <p className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-[#038D96] mt-1 min-w-[24px]" />
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </span>
              </p>
              <p className="flex items-center gap-2">
                <FaPhoneAlt className="text-[#038D96]" /> 1234567890
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-[#038D96]" /> abc@abc.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
