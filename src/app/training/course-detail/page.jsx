"use client";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import card4 from "../../assets/images/card4.jpg";

export default function CourseDetails() {
  return (
    <>
      <Navbar />
      <section className="bg-[#038D96]">
        <div className="container mx-auto">
          <div className="py-10 md:py-[60px] 2xl:py-[80px] lg:w-[70%]">
            <h1 className="text-[28px] md:text-[32px] lg:text-[36px] 2xl:text-[38px] font-semibold text-[#FFFFFF] mb-7">
              First Aid for Children: Lorem Ipsum
            </h1>
            <p className="text-[14px] md:text-[16px] text-[#FFFFFF]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="flex items-center gap-[4px] md:px-[8px] mt-2 md:mt-4">
              <div className="flex gap-1 md:gap-2 items-center">
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 11.9525L12.635 14.75L11.405 9.4775L15.5 5.93L10.1075 5.4725L8 0.5L5.8925 5.4725L0.5 5.93L4.595 9.4775L3.365 14.75L8 11.9525Z"
                    fill="#8AC342"
                  />
                </svg>
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 11.9525L12.635 14.75L11.405 9.4775L15.5 5.93L10.1075 5.4725L8 0.5L5.8925 5.4725L0.5 5.93L4.595 9.4775L3.365 14.75L8 11.9525Z"
                    fill="#8AC342"
                  />
                </svg>
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 11.9525L12.635 14.75L11.405 9.4775L15.5 5.93L10.1075 5.4725L8 0.5L5.8925 5.4725L0.5 5.93L4.595 9.4775L3.365 14.75L8 11.9525Z"
                    fill="#8AC342"
                  />
                </svg>
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 11.9525L12.635 14.75L11.405 9.4775L15.5 5.93L10.1075 5.4725L8 0.5L5.8925 5.4725L0.5 5.93L4.595 9.4775L3.365 14.75L8 11.9525Z"
                    fill="#8AC342"
                  />
                </svg>
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 11.9525L12.635 14.75L11.405 9.4775L15.5 5.93L10.1075 5.4725L8 0.5L5.8925 5.4725L0.5 5.93L4.595 9.4775L3.365 14.75L8 11.9525Z"
                    fill="#8AC342"
                  />
                </svg>
              </div>
              <div className="flex gap-[2px]">
                <span className="text-[14px] md:text-[16px] text-[#FFFFFF]">
                  (1.5k ratings)
                </span>
                <span className="text-[14px] md:text-[16px] text-[#FFFFFF]">
                  35,000 students
                </span>
              </div>
            </div>
            <div className="flex gap-2 items-center mt-4 md:mt-6">
              <span className="text-[14px] md:text-[16px] text-[#FFFFFF]">
                Taught by
              </span>
              <span className="text-[14px] md:text-[16px] text-[#FFFFFF] underline underline-offset-2">
                Abc Hospital
              </span>
            </div>
            <div className="flex gap-2 items-center mt-4 md:mt-6">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.05493 9H3C4.10457 9 5 9.89543 5 11V12C5 13.1046 5.89543 14 7 14C8.10457 14 9 14.8954 9 16V18.9451M6 1.93552V3.5C6 4.88071 7.11929 6 8.5 6H9C10.1046 6 11 6.89543 11 8C11 9.10457 11.8954 10 13 10C14.1046 10 15 9.10457 15 8C15 6.89543 15.8954 6 17 6L18.0645 6M13 18.4879V16C13 14.8954 13.8954 14 15 14H18.0645M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="text-[14px] md:text-[16px] text-[#FFFFFF]">
                English
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8">
        <div className="container mx-auto">
          <div className="flex flex-col gap-10 lg:flex-row">
            <div className="w-full lg:w-[70%]">
              <h3 className="page-common-h3">What you’ll learn</h3>
              <ul className="course-detail-list">
                <li>Lorem ipsum dolor sit amet consectetur adipiscing elit</li>
                <li>Lorem ipsum dolor sit amet consectetur adipiscing elit</li>
                <li>Lorem ipsum dolor sit amet consectetur adipiscing elit</li>
                <li>Lorem ipsum dolor sit amet consectetur adipiscing elit</li>
                <li>Lorem ipsum dolor sit amet consectetur adipiscing elit</li>
              </ul>
              <div className="flex items-center gap-2 mt-1 md:mt-2 xl:mt-4 mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 16L4 17C4 18.6569 5.34315 20 7 20L17 20C18.6569 20 20 18.6569 20 17L20 16M16 12L12 16M12 16L8 12M12 16L12 4"
                    stroke="#333333"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="text-[14px] md:text-[16px] text-[#333333] underline underline-offset-1">
                  Download the course pdf
                </span>
              </div>
              <h3 className="page-common-h3">Book your slot</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 md:mt-5">
                <div>
                  <label className="form-label">Attendees *</label>
                  <select className="form-input">
                    <option>Lorem</option>
                    <option>Lorem</option>
                    <option>Lorem</option>
                    <option>Lorem</option>
                  </select>
                </div>
                <div>
                  <label className="form-label">Where? *</label>
                  <select className="form-input">
                    <option>Lorem</option>
                    <option>Lorem</option>
                    <option>Lorem</option>
                    <option>Lorem</option>
                  </select>
                </div>
                <div>
                  <label className="form-label">When *</label>
                  <select className="form-input">
                    <option>Lorem</option>
                    <option>Lorem</option>
                    <option>Lorem</option>
                    <option>Lorem</option>
                  </select>
                </div>
              </div>
              <div className="slot-booking-sec pt-6 md:pt-8 xl:pt-10">
                <h3 className="text-[18px] md:text-[20px] text-[#000000] font-semibold flex gap-1 items-center mt-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.6569 16.6569C16.7202 17.5935 14.7616 19.5521 13.4138 20.8999C12.6327 21.681 11.3677 21.6814 10.5866 20.9003C9.26234 19.576 7.34159 17.6553 6.34315 16.6569C3.21895 13.5327 3.21895 8.46734 6.34315 5.34315C9.46734 2.21895 14.5327 2.21895 17.6569 5.34315C20.781 8.46734 20.781 13.5327 17.6569 16.6569Z"
                      stroke="#038D96"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z"
                      stroke="#038D96"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Mumbai
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 2xl:gap-8 mt-2 md:mt-4 xl:mt-5">
                  <div className="schedule-card">
                    <span className="schedule-card-date">
                      4th February, 2025
                    </span>
                    <span className="schedule-card-time">
                      4:00p.m - 6:00p.m
                    </span>
                    <span className="schedule-card-seat">
                      3 remaining seats
                    </span>
                    <a className="primary-btn !text-[16px] !px-4" href="">
                      Add to cart
                    </a>
                  </div>
                  <div className="schedule-card">
                    <span className="schedule-card-date">
                      4th February, 2025
                    </span>
                    <span className="schedule-card-time">
                      4:00p.m - 6:00p.m
                    </span>
                    <span className="schedule-card-seat">
                      3 remaining seats
                    </span>
                    <a className="primary-btn !text-[16px] !px-4" href="">
                      Add to cart
                    </a>
                  </div>
                  <div className="schedule-card">
                    <span className="schedule-card-date">
                      4th February, 2025
                    </span>
                    <span className="schedule-card-time">
                      4:00p.m - 6:00p.m
                    </span>
                    <span className="schedule-card-seat">
                      3 remaining seats
                    </span>
                    <a className="primary-btn !text-[16px] !px-4" href="">
                      Add to cart
                    </a>
                  </div>
                </div>
                <h3 className="text-[18px] md:text-[20px] text-[#000000] font-semibold flex gap-1 items-center mt-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.6569 16.6569C16.7202 17.5935 14.7616 19.5521 13.4138 20.8999C12.6327 21.681 11.3677 21.6814 10.5866 20.9003C9.26234 19.576 7.34159 17.6553 6.34315 16.6569C3.21895 13.5327 3.21895 8.46734 6.34315 5.34315C9.46734 2.21895 14.5327 2.21895 17.6569 5.34315C20.781 8.46734 20.781 13.5327 17.6569 16.6569Z"
                      stroke="#038D96"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z"
                      stroke="#038D96"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Mumbai
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 2xl:gap-8 mt-2 md:mt-4 xl:mt-5">
                  <div className="schedule-card">
                    <span className="schedule-card-date">
                      4th February, 2025
                    </span>
                    <span className="schedule-card-time">
                      4:00p.m - 6:00p.m
                    </span>
                    <span className="schedule-card-seat">
                      3 remaining seats
                    </span>
                    <a className="primary-btn !text-[16px] !px-4" href="">
                      Add to cart
                    </a>
                  </div>
                  <div className="schedule-card">
                    <span className="schedule-card-date">
                      4th February, 2025
                    </span>
                    <span className="schedule-card-time">
                      4:00p.m - 6:00p.m
                    </span>
                    <span className="schedule-card-seat">
                      3 remaining seats
                    </span>
                    <a className="primary-btn !text-[16px] !px-4" href="">
                      Add to cart
                    </a>
                  </div>
                  <div className="schedule-card">
                    <span className="schedule-card-date">
                      4th February, 2025
                    </span>
                    <span className="schedule-card-time">
                      4:00p.m - 6:00p.m
                    </span>
                    <span className="schedule-card-seat">
                      3 remaining seats
                    </span>
                    <a className="primary-btn !text-[16px] !px-4" href="">
                      Add to cart
                    </a>
                  </div>
                  <div className="schedule-card">
                    <span className="schedule-card-date">
                      4th February, 2025
                    </span>
                    <span className="schedule-card-time">
                      4:00p.m - 6:00p.m
                    </span>
                    <span className="schedule-card-seat">
                      3 remaining seats
                    </span>
                    <a className="primary-btn !text-[16px] !px-4" href="">
                      Add to cart
                    </a>
                  </div>
                  <div className="schedule-card">
                    <span className="schedule-card-date">
                      4th February, 2025
                    </span>
                    <span className="schedule-card-time">
                      4:00p.m - 6:00p.m
                    </span>
                    <span className="schedule-card-seat">
                      3 remaining seats
                    </span>
                    <a className="primary-btn !text-[16px] !px-4" href="">
                      Add to cart
                    </a>
                  </div>
                  <div className="schedule-card">
                    <span className="schedule-card-date">
                      4th February, 2025
                    </span>
                    <span className="schedule-card-time">
                      4:00p.m - 6:00p.m
                    </span>
                    <span className="schedule-card-seat">
                      3 remaining seats
                    </span>
                    <a className="primary-btn !text-[16px] !px-4" href="">
                      Add to cart
                    </a>
                  </div>
                </div>
                <h3 className="text-[18px] md:text-[20px] text-[#000000] font-semibold flex gap-1 items-center mt-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.6569 16.6569C16.7202 17.5935 14.7616 19.5521 13.4138 20.8999C12.6327 21.681 11.3677 21.6814 10.5866 20.9003C9.26234 19.576 7.34159 17.6553 6.34315 16.6569C3.21895 13.5327 3.21895 8.46734 6.34315 5.34315C9.46734 2.21895 14.5327 2.21895 17.6569 5.34315C20.781 8.46734 20.781 13.5327 17.6569 16.6569Z"
                      stroke="#038D96"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z"
                      stroke="#038D96"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Mumbai
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 2xl:gap-8 mt-2 md:mt-4 xl:mt-5">
                  <div className="schedule-card">
                    <span className="schedule-card-date">
                      4th February, 2025
                    </span>
                    <span className="schedule-card-time">
                      4:00p.m - 6:00p.m
                    </span>
                    <span className="schedule-card-seat">
                      3 remaining seats
                    </span>
                    <a className="primary-btn !text-[16px] !px-4" href="">
                      Add to cart
                    </a>
                  </div>
                  <div className="schedule-card">
                    <span className="schedule-card-date">
                      4th February, 2025
                    </span>
                    <span className="schedule-card-time">
                      4:00p.m - 6:00p.m
                    </span>
                    <span className="schedule-card-seat">
                      3 remaining seats
                    </span>
                    <a className="primary-btn !text-[16px] !px-4" href="">
                      Add to cart
                    </a>
                  </div>
                  <div className="schedule-card">
                    <span className="schedule-card-date">
                      4th February, 2025
                    </span>
                    <span className="schedule-card-time">
                      4:00p.m - 6:00p.m
                    </span>
                    <span className="schedule-card-seat">
                      3 remaining seats
                    </span>
                    <a className="primary-btn !text-[16px] !px-4" href="">
                      Add to cart
                    </a>
                  </div>
                  <div className="schedule-card">
                    <span className="schedule-card-date">
                      4th February, 2025
                    </span>
                    <span className="schedule-card-time">
                      4:00p.m - 6:00p.m
                    </span>
                    <span className="schedule-card-seat">
                      3 remaining seats
                    </span>
                    <a className="primary-btn !text-[16px] !px-4" href="">
                      Add to cart
                    </a>
                  </div>
                  <div className="schedule-card">
                    <span className="schedule-card-date">
                      4th February, 2025
                    </span>
                    <span className="schedule-card-time">
                      4:00p.m - 6:00p.m
                    </span>
                    <span className="schedule-card-seat">
                      3 remaining seats
                    </span>
                    <a className="primary-btn !text-[16px] !px-4" href="">
                      Add to cart
                    </a>
                  </div>
                  <div className="schedule-card">
                    <span className="schedule-card-date">
                      4th February, 2025
                    </span>
                    <span className="schedule-card-time">
                      4:00p.m - 6:00p.m
                    </span>
                    <span className="schedule-card-seat">
                      3 remaining seats
                    </span>
                    <a className="primary-btn !text-[16px] !px-4" href="">
                      Add to cart
                    </a>
                  </div>
                </div>
                <h3 className="text-[18px] md:text-[20px] text-[#000000] font-semibold flex gap-1 items-center mt-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.6569 16.6569C16.7202 17.5935 14.7616 19.5521 13.4138 20.8999C12.6327 21.681 11.3677 21.6814 10.5866 20.9003C9.26234 19.576 7.34159 17.6553 6.34315 16.6569C3.21895 13.5327 3.21895 8.46734 6.34315 5.34315C9.46734 2.21895 14.5327 2.21895 17.6569 5.34315C20.781 8.46734 20.781 13.5327 17.6569 16.6569Z"
                      stroke="#038D96"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z"
                      stroke="#038D96"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Mumbai
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 2xl:gap-8 mt-2 md:mt-4 xl:mt-5">
                  <div className="schedule-card">
                    <span className="schedule-card-date">
                      4th February, 2025
                    </span>
                    <span className="schedule-card-time">
                      4:00p.m - 6:00p.m
                    </span>
                    <span className="schedule-card-seat">
                      3 remaining seats
                    </span>
                    <a className="primary-btn !text-[16px] !px-4" href="">
                      Add to cart
                    </a>
                  </div>
                  <div className="schedule-card">
                    <span className="schedule-card-date">
                      4th February, 2025
                    </span>
                    <span className="schedule-card-time">
                      4:00p.m - 6:00p.m
                    </span>
                    <span className="schedule-card-seat">
                      3 remaining seats
                    </span>
                    <a className="primary-btn !text-[16px] !px-4" href="">
                      Add to cart
                    </a>
                  </div>
                  <div className="schedule-card">
                    <span className="schedule-card-date">
                      4th February, 2025
                    </span>
                    <span className="schedule-card-time">
                      4:00p.m - 6:00p.m
                    </span>
                    <span className="schedule-card-seat">
                      3 remaining seats
                    </span>
                    <a className="primary-btn !text-[16px] !px-4" href="">
                      Add to cart
                    </a>
                  </div>
                  <div className="schedule-card">
                    <span className="schedule-card-date">
                      4th February, 2025
                    </span>
                    <span className="schedule-card-time">
                      4:00p.m - 6:00p.m
                    </span>
                    <span className="schedule-card-seat">
                      3 remaining seats
                    </span>
                    <a className="primary-btn !text-[16px] !px-4" href="">
                      Add to cart
                    </a>
                  </div>
                  <div className="schedule-card">
                    <span className="schedule-card-date">
                      4th February, 2025
                    </span>
                    <span className="schedule-card-time">
                      4:00p.m - 6:00p.m
                    </span>
                    <span className="schedule-card-seat">
                      3 remaining seats
                    </span>
                    <a className="primary-btn !text-[16px] !px-4" href="">
                      Add to cart
                    </a>
                  </div>
                  <div className="schedule-card">
                    <span className="schedule-card-date">
                      4th February, 2025
                    </span>
                    <span className="schedule-card-time">
                      4:00p.m - 6:00p.m
                    </span>
                    <span className="schedule-card-seat">
                      3 remaining seats
                    </span>
                    <a className="primary-btn !text-[16px] !px-4" href="">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[30%]">
              <div className="sidebar-card bg-[#FFFFFF] rounded-[12px] w-full shadow-2xl -translate-y-[150px]">
                <div className="sidebar-card-inner p-5">
                  <Image
                    className="w-full h-[210px] object-cover mb-4 rounded-[8px]"
                    src={card4}
                    alt="card"
                  />
                  <div className="flex items-center gap-2 md:gap-3">
                    <span className="sidebar-card-price">$60</span>
                    <span className="sidebar-card-price !text-[#9D9D9D] !font-medium line-through">
                      $60
                    </span>
                    <span className="sidebar-card-price ml-10">$60</span>
                  </div>
                  <div className="flex items-center gap-2 mt-7">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                        stroke="#333333"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span className="text-[14px] md:text-[16px] text-[#333333]">
                      6 hours long
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 md:gap-3 mt-4">
                    <span className="sidebar-card-list">
                      NIH approved certificate
                    </span>
                    <span className="sidebar-card-list">
                      NIH approved certificate
                    </span>
                    <span className="sidebar-card-list">
                      NIH approved certificate
                    </span>
                    <span className="sidebar-card-list">
                      NIH approved certificate
                    </span>
                    <span className="sidebar-card-list">
                      NIH approved certificate
                    </span>
                  </div>
                </div>
                <div className="flex gap-5 p-5 bg-[#FFDB431A]">
                  <svg
                  className="min-w-[20px]"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 16H12V12H11M12 8H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="#333333"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span className="text-[#333333] text-[12px] md:text-[16px]">For any enquires about an onsite workshop please contact 123456789</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
