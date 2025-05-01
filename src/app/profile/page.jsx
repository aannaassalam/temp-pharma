import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function profile() {
  return (
    <>
      <Navbar />
      <section>
        <div className="container mx-auto p-4">
          <h2 className="text-3xl font-bold mb-6">My Profile</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block mb-1 font-medium text-[#4A4A4A]">
                    Title *
                  </label>
                  <select className="w-full border border-[#A4A4A4] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300">
                    <option>Mr.</option>
                    <option>Mrs.</option>
                    <option>Ms.</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1 font-medium text-[#4A4A4A]">
                    First Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    className="w-full border border-[#A4A4A4] rounded-md px-4 py-2"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium text-[#4A4A4A]">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    className="w-full border border-[#A4A4A4] rounded-md px-4 py-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 font-medium text-[#4A4A4A]">
                    Email ID *
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email id"
                    className="w-full border border-[#A4A4A4] rounded-md px-4 py-2"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium text-[#4A4A4A]">
                    DOB *
                  </label>
                  <input
                    type="date"
                    placeholder="Enter DOB"
                    className="w-full border border-[#A4A4A4] rounded-md px-4 py-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 font-medium text-[#4A4A4A]">
                    Phone number *
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    className="w-full border border-[#A4A4A4] rounded-md px-4 py-2"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium text-[#4A4A4A]">
                    Phone number *
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter alternate number"
                    className="w-full border border-[#A4A4A4] rounded-md px-4 py-2"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 font-medium text-[#4A4A4A]">
                  Address *
                </label>
                <textarea
                  placeholder="Enter address"
                  className="w-full border border-[#A4A4A4] rounded-md px-4 py-2 h-24"
                ></textarea>
              </div>
            </div>

            <div className="border border-[#A4A4A4] rounded-md p-6 h-fit shadow-sm">
              <h3 className="text-lg font-medium mb-2">
                Request to delete account
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="bg-[#038D96] hover:bg-teal-700 text-white w-full py-2 px-4 rounded-md">
                Delete my account
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
