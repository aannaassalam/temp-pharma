import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import {
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  Video,
  Presentation,
  FileText,
} from "lucide-react";

export default function MyCourses() {
  return (
    <>
      <Navbar />
      <section className="mt-8">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-6">My Courses</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              {[1, 2, 3].map((_, i) => (
                <div
                  key={i}
                  className="bg-[#038D96] text-white p-4 rounded-md shadow"
                >
                  <h2 className="text-lg font-semibold">Section 1</h2>
                  <p className="text-sm">5 Lessons &nbsp;&nbsp; 45 Mins</p>
                </div>
              ))}

              <div className="bg-white">
                {[
                  {
                    title: "Lesson 1",
                    type: "Presentation",
                    icon: (
                      <Presentation className="w-4 h-4 inline-block mr-1" />
                    ),
                    completed: true,
                  },
                  {
                    title: "Lesson 2",
                    type: "Video",
                    icon: <Video className="w-4 h-4 inline-block mr-1" />,
                    completed: true,
                  },
                  {
                    title: "Lesson 2",
                    type: "Video",
                    icon: <Video className="w-4 h-4 inline-block mr-1" />,
                    completed: true,
                  },
                  {
                    title: "Lesson 2",
                    type: "Video",
                    icon: <Video className="w-4 h-4 inline-block mr-1" />,
                    completed: true,
                  },
                  {
                    title: "Lesson 2",
                    type: "Video",
                    icon: <Video className="w-4 h-4 inline-block mr-1" />,
                    completed: true,
                  },
                ].map((lesson, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 border-b border-[#D2D2D2]"
                  >
                    <div>
                      <p className="font-semibold">{lesson.title}</p>
                      <p className="text-sm text-gray-500">
                        {lesson.icon} {lesson.type} &nbsp; • &nbsp; 45 Mins
                      </p>
                    </div>
                    {lesson.completed && (
                      <span className="text-green-600 flex items-center">
                        <CheckCircle className="w-4 h-4 mr-1" /> Completed
                      </span>
                    )}
                  </div>
                ))}

                <div className="flex items-center justify-between bg-[#038D960F] p-4">
                  <div>
                    <p className="font-semibold">Knowledge test 1</p>
                    <p className="text-sm text-gray-500">
                      <FileText className="w-4 h-4 inline-block mr-1" />{" "}
                      Assessment &nbsp; • &nbsp; 45 Mins
                    </p>
                  </div>
                  <Link href="/assessment" className="bg-[#038D96] text-white px-4 py-2 rounded-md hover:bg-teal-800">
                    Start
                  </Link>
                </div>
              </div>

              {[1, 2, 3].map((_, i) => (
                <div
                  key={i}
                  className="bg-[#038D96] text-white p-4 rounded-md shadow"
                >
                  <h2 className="text-lg font-semibold">Section 1</h2>
                  <p className="text-sm">5 Lessons &nbsp;&nbsp; 45 Mins</p>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-md border border-[#E8E8E8] h-fit">
              <h3 className="text-lg font-semibold mb-4">Contact details</h3>
              <div className="space-y-4 text-sm text-gray-700">
                <p className="flex items-start">
                  <MapPin className="min-w-6 h-4 mr-2 mt-1 text-[#038D96]" /> Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-[#038D96]" /> 1234567890
                </p>
                <p className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-[#038D96]" /> abc@abc.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
