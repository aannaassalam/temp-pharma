import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function assessment() {
  const questions = [
    {
      id: 1,
      type: "radio",
      text: "What else can someone do to help a person that might ease their asthma attack?",
      options: [
        { label: "Lie them down, reassure them" },
        { label: "Sit them down, reassure them" },
        { label: "Give them back blows" },
        { label: "Give them a brown paper bag to breath in and out of" },
      ],
    },
    {
      id: 2,
      type: "checkbox",
      text: "What else can someone do to help a person that might ease their asthma attack?",
      options: [
        { label: "Checkbox" },
        { label: "Checkbox" },
        { label: "Checkbox" },
        { label: "Checkbox" },
      ],
    },
    {
      id: 3,
      type: "radio",
      text: "What else can someone do to help a person that might ease their asthma attack?",
      options: [
        { label: "Lie them down, reassure them" },
        { label: "Sit them down, reassure them" },
        { label: "Give them back blows" },
        { label: "Give them a brown paper bag to breath in and out of" },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <section className="mt-8">
        <div className="container mx-auto">
          <div className="bg-white p-8 text-gray-800 md:px-[40px] lg:px-[60px] 2xl:px-[100px]">
            <div className="space-y-10">
              {questions.map((question, index) => (
                <div key={question.id} className="space-y-2">
                  <p className="text-lg font-medium">1. {question.text}</p>
                  <div className="flex flex-col space-y-2 pl-6">
                    {question.options.map((option, idx) => (
                      <label
                        key={idx}
                        className={`flex items-center space-x-2 ${
                          option.checked ? "font-semibold text-black" : ""
                        }`}
                      >
                        <input
                          type={question.type}
                          name={`q${question.id}`}
                          // defaultChecked={option.checked}
                          className={`form-${question.type} text-teal-600`}
                        />
                        <span>{option.label}</span>
                      </label>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-6">1 point</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
