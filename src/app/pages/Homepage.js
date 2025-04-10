"use client";

import React from "react";
import Link from "next/link";
import banner from "../assets/images/banner-background.jpg";
import Image from "next/image";
import { useState, useRef } from "react";
import cardImage from "../assets/images/card1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/navigation"; 
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import productImage from "../assets/images/card2.png";
import checkImage from "../assets/images/check-img.png";
import missionImg from "../assets/images/card3.png";
import logo from "../assets/images/logo.png";

export default function Homepage() {
  const [isOn, setIsOn] = useState(false);
  return (
    <>
      <section className="hero-banner mb-[80px]">
        <Image
          className="w-full h-screen absolute z-[-1]"
          src={banner}
          alt="banner"
        />
        <div className="container mx-auto">
          <div className="hero-banner-main py-[100px]">
            <div className="w-full lg:w-1/2">
              <span className="hero-banner-chip">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.2563 2.69922C12.8925 2.69922 13.4083 3.21499 13.4083 3.85122V5.00322C13.4083 5.63945 12.8925 6.15522 12.2563 6.15522C11.6201 6.15522 11.1043 5.63945 11.1043 5.00322V3.85122C11.1043 3.21499 11.6201 2.69922 12.2563 2.69922Z"
                    fill="#8AC342"
                  />
                  <path
                    d="M16.8643 11.9152C16.8643 14.4601 14.8012 16.5232 12.2563 16.5232C9.71136 16.5232 7.64828 14.4601 7.64828 11.9152C7.64828 9.37029 9.71136 7.30722 12.2563 7.30722C14.8012 7.30722 16.8643 9.37029 16.8643 11.9152Z"
                    fill="#8AC342"
                  />
                  <path
                    d="M16.3293 17.6173L17.1439 18.4319C17.5938 18.8818 18.3232 18.8818 18.773 18.4319C19.2229 17.982 19.2229 17.2526 18.773 16.8027L17.9585 15.9881C17.5086 15.5382 16.7792 15.5382 16.3293 15.9881C15.8794 16.438 15.8794 17.1674 16.3293 17.6173Z"
                    fill="#8AC342"
                  />
                  <path
                    d="M18.7729 5.39846C19.2228 5.84835 19.2228 6.57775 18.7729 7.02764L17.9583 7.84222C17.5085 8.29211 16.7791 8.29211 16.3292 7.84222C15.8793 7.39234 15.8793 6.66293 16.3292 6.21305L17.1438 5.39846C17.5936 4.94858 18.323 4.94858 18.7729 5.39846Z"
                    fill="#8AC342"
                  />
                  <path
                    d="M20.3203 13.0672C20.9565 13.0672 21.4723 12.5515 21.4723 11.9152C21.4723 11.279 20.9565 10.7632 20.3203 10.7632H19.1683C18.5321 10.7632 18.0163 11.279 18.0163 11.9152C18.0163 12.5515 18.5321 13.0672 19.1683 13.0672H20.3203Z"
                    fill="#8AC342"
                  />
                  <path
                    d="M12.2563 17.6752C12.8925 17.6752 13.4083 18.191 13.4083 18.8272V19.9792C13.4083 20.6155 12.8925 21.1312 12.2563 21.1312C11.6201 21.1312 11.1043 20.6155 11.1043 19.9792V18.8272C11.1043 18.191 11.6201 17.6752 12.2563 17.6752Z"
                    fill="#8AC342"
                  />
                  <path
                    d="M6.55424 7.84224C7.00413 8.29213 7.73353 8.29213 8.18342 7.84224C8.6333 7.39236 8.6333 6.66295 8.18342 6.21307L7.36883 5.39848C6.91894 4.9486 6.18954 4.9486 5.73965 5.39848C5.28977 5.84837 5.28977 6.57777 5.73965 7.02766L6.55424 7.84224Z"
                    fill="#8AC342"
                  />
                  <path
                    d="M8.18331 17.6173L7.36872 18.4318C6.91884 18.8817 6.18943 18.8817 5.73955 18.4318C5.28966 17.982 5.28966 17.2526 5.73955 16.8027L6.55413 15.9881C7.00402 15.5382 7.73342 15.5382 8.18331 15.9881C8.63319 16.438 8.63319 17.1674 8.18331 17.6173Z"
                    fill="#8AC342"
                  />
                  <path
                    d="M5.34428 13.0672C5.98052 13.0672 6.49628 12.5515 6.49628 11.9152C6.49628 11.279 5.98052 10.7632 5.34428 10.7632H4.19228C3.55605 10.7632 3.04028 11.279 3.04028 11.9152C3.04028 12.5515 3.55605 13.0672 4.19228 13.0672H5.34428Z"
                    fill="#8AC342"
                  />
                </svg>
                Lorem Ipsum
              </span>
              <h1 className="hero-banner-title">
                Lorem ipsum dolor sit{" "}
                <span className="!text-[#8AC342]">amet</span>
              </h1>
              <p className="hero-banner-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
              <div className="relative"></div>
              <Link href="" className="primary-btn">
                Get started
              </Link>
            </div>
            <div className="w-full lg:w-1/2 pl-36">
              <div className="hero-banner-popup">
                <h3 className="hero-popup-title">
                  Need help finding the right course?
                </h3>
                <p className="hero-popup-desc">
                  Our course wizard can help you find the right course in four
                  simple steps, or you can browse through more courses below.
                </p>
                <h3 className="popup-question">
                  Why are you looking to do a course?
                </h3>
                <div className="flex flex-col gap-2 md:gap-6">
                  <span className="answer-list">Answer 1</span>
                  <span className="answer-list">Answer 1</span>
                  <span className="answer-list">Answer 1</span>
                </div>
                <div className="flex justify-center mt-7">
                  <Link href="" className="primary-btn">
                    Next
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="flex gap-4">
            <div className="avatar-group -space-x-6">
              <div className="avatar">
                <div className="w-12">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
      <section className="default-card-sec overflow-hidden mb-[80px]">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <span className="section-heading">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.2563 2.69922C12.8925 2.69922 13.4083 3.21499 13.4083 3.85122V5.00322C13.4083 5.63945 12.8925 6.15522 12.2563 6.15522C11.6201 6.15522 11.1043 5.63945 11.1043 5.00322V3.85122C11.1043 3.21499 11.6201 2.69922 12.2563 2.69922Z"
                  fill="#8AC342"
                />
                <path
                  d="M16.8643 11.9152C16.8643 14.4601 14.8012 16.5232 12.2563 16.5232C9.71136 16.5232 7.64828 14.4601 7.64828 11.9152C7.64828 9.37029 9.71136 7.30722 12.2563 7.30722C14.8012 7.30722 16.8643 9.37029 16.8643 11.9152Z"
                  fill="#8AC342"
                />
                <path
                  d="M16.3293 17.6173L17.1439 18.4319C17.5938 18.8818 18.3232 18.8818 18.773 18.4319C19.2229 17.982 19.2229 17.2526 18.773 16.8027L17.9585 15.9881C17.5086 15.5382 16.7792 15.5382 16.3293 15.9881C15.8794 16.438 15.8794 17.1674 16.3293 17.6173Z"
                  fill="#8AC342"
                />
                <path
                  d="M18.7729 5.39846C19.2228 5.84835 19.2228 6.57775 18.7729 7.02764L17.9583 7.84222C17.5085 8.29211 16.7791 8.29211 16.3292 7.84222C15.8793 7.39234 15.8793 6.66293 16.3292 6.21305L17.1438 5.39846C17.5936 4.94858 18.323 4.94858 18.7729 5.39846Z"
                  fill="#8AC342"
                />
                <path
                  d="M20.3203 13.0672C20.9565 13.0672 21.4723 12.5515 21.4723 11.9152C21.4723 11.279 20.9565 10.7632 20.3203 10.7632H19.1683C18.5321 10.7632 18.0163 11.279 18.0163 11.9152C18.0163 12.5515 18.5321 13.0672 19.1683 13.0672H20.3203Z"
                  fill="#8AC342"
                />
                <path
                  d="M12.2563 17.6752C12.8925 17.6752 13.4083 18.191 13.4083 18.8272V19.9792C13.4083 20.6155 12.8925 21.1312 12.2563 21.1312C11.6201 21.1312 11.1043 20.6155 11.1043 19.9792V18.8272C11.1043 18.191 11.6201 17.6752 12.2563 17.6752Z"
                  fill="#8AC342"
                />
                <path
                  d="M6.55424 7.84224C7.00413 8.29213 7.73353 8.29213 8.18342 7.84224C8.6333 7.39236 8.6333 6.66295 8.18342 6.21307L7.36883 5.39848C6.91894 4.9486 6.18954 4.9486 5.73965 5.39848C5.28977 5.84837 5.28977 6.57777 5.73965 7.02766L6.55424 7.84224Z"
                  fill="#8AC342"
                />
                <path
                  d="M8.18331 17.6173L7.36872 18.4318C6.91884 18.8817 6.18943 18.8817 5.73955 18.4318C5.28966 17.982 5.28966 17.2526 5.73955 16.8027L6.55413 15.9881C7.00402 15.5382 7.73342 15.5382 8.18331 15.9881C8.63319 16.438 8.63319 17.1674 8.18331 17.6173Z"
                  fill="#8AC342"
                />
                <path
                  d="M5.34428 13.0672C5.98052 13.0672 6.49628 12.5515 6.49628 11.9152C6.49628 11.279 5.98052 10.7632 5.34428 10.7632H4.19228C3.55605 10.7632 3.04028 11.279 3.04028 11.9152C3.04028 12.5515 3.55605 13.0672 4.19228 13.0672H5.34428Z"
                  fill="#8AC342"
                />
              </svg>
              Lorem Ipsum
            </span>
          </div>
          <h2 className="section-title">Train with the Best</h2>
          <p className="section-description">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.  
          </p>
          <div className="flex justify-center items-center gap-5 mt-10">
            <span className="text-[#000000] text-[16px] font-medium">
              Public
            </span>
            <div
              className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer transition-all duration-300  ${
                isOn ? "bg-teal-500" : "bg-teal-100"
              }`}
              onClick={() => setIsOn(!isOn)}
            >
              <div
                className={`w-6 h-6 bg-teal-700 rounded-full transition-all duration-300 ${
                  isOn ? "translate-x-8" : "translate-x-0"
                }`}
              ></div>
            </div>
            <span className="text-[#000000] text-[16px] font-medium">
              Private
            </span>
          </div>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={3.8}
            className="default-card-swiper mt-8 !w-[120%]"
          >
            <SwiperSlide>
              <div className="default-card">
                <figure>
                  <Image src={cardImage} alt="card1" />
                </figure>
                <div className="default-card-detail">
                  <h3 className="default-card-title">First Aid</h3>
                  <p className="default-card-desc">
                    Lorem ipsum dolor sit amet, consectetur elit, sed doeiusmod
                    tempor
                  </p>
                  <div className="flex flex-col gap-[10px]">
                    <span className="default-card-item">6 hours long</span>
                    <span className="default-card-item">
                      NIH approved certificate
                    </span>
                    <span className="default-card-item">
                      4.5/5 by 5k+ Trainees
                    </span>
                    <span className="default-card-item">Dr. First Last</span>
                  </div>
                  <Link
                    href="#"
                    className="primary-btn !py-[10px] !text-[18px] !w-full mt-4"
                  >
                    Explore this course
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="default-card">
                <figure>
                  <Image src={cardImage} alt="card1" />
                </figure>
                <div className="default-card-detail">
                  <h3 className="default-card-title">First Aid</h3>
                  <p className="default-card-desc">
                    Lorem ipsum dolor sit amet, consectetur elit, sed doeiusmod
                    tempor
                  </p>
                  <div className="flex flex-col gap-[10px]">
                    <span className="default-card-item">6 hours long</span>
                    <span className="default-card-item">
                      NIH approved certificate
                    </span>
                    <span className="default-card-item">
                      4.5/5 by 5k+ Trainees
                    </span>
                    <span className="default-card-item">Dr. First Last</span>
                  </div>
                  <Link
                    href="#"
                    className="primary-btn !py-[10px] !text-[18px] !w-full mt-4"
                  >
                    Explore this course
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="default-card">
                <figure>
                  <Image src={cardImage} alt="card1" />
                </figure>
                <div className="default-card-detail">
                  <h3 className="default-card-title">First Aid</h3>
                  <p className="default-card-desc">
                    Lorem ipsum dolor sit amet, consectetur elit, sed doeiusmod
                    tempor
                  </p>
                  <div className="flex flex-col gap-[10px]">
                    <span className="default-card-item">6 hours long</span>
                    <span className="default-card-item">
                      NIH approved certificate
                    </span>
                    <span className="default-card-item">
                      4.5/5 by 5k+ Trainees
                    </span>
                    <span className="default-card-item">Dr. First Last</span>
                  </div>
                  <Link
                    href="#"
                    className="primary-btn !py-[10px] !text-[18px] !w-full mt-4"
                  >
                    Explore this course
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="default-card">
                <figure>
                  <Image src={cardImage} alt="card1" />
                </figure>
                <div className="default-card-detail">
                  <h3 className="default-card-title">First Aid</h3>
                  <p className="default-card-desc">
                    Lorem ipsum dolor sit amet, consectetur elit, sed doeiusmod
                    tempor
                  </p>
                  <div className="flex flex-col gap-[10px]">
                    <span className="default-card-item">6 hours long</span>
                    <span className="default-card-item">
                      NIH approved certificate
                    </span>
                    <span className="default-card-item">
                      4.5/5 by 5k+ Trainees
                    </span>
                    <span className="default-card-item">Dr. First Last</span>
                  </div>
                  <Link
                    href="#"
                    className="primary-btn !py-[10px] !text-[18px] !w-full mt-4"
                  >
                    Explore this course
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="default-card">
                <figure>
                  <Image src={cardImage} alt="card1" />
                </figure>
                <div className="default-card-detail">
                  <h3 className="default-card-title">First Aid</h3>
                  <p className="default-card-desc">
                    Lorem ipsum dolor sit amet, consectetur elit, sed doeiusmod
                    tempor
                  </p>
                  <div className="flex flex-col gap-[10px]">
                    <span className="default-card-item">6 hours long</span>
                    <span className="default-card-item">
                      NIH approved certificate
                    </span>
                    <span className="default-card-item">
                      4.5/5 by 5k+ Trainees
                    </span>
                    <span className="default-card-item">Dr. First Last</span>
                  </div>
                  <Link
                    href="#"
                    className="primary-btn !py-[10px] !text-[18px] !w-full mt-4"
                  >
                    Explore this course
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="default-card">
                <figure>
                  <Image src={cardImage} alt="card1" />
                </figure>
                <div className="default-card-detail">
                  <h3 className="default-card-title">First Aid</h3>
                  <p className="default-card-desc">
                    Lorem ipsum dolor sit amet, consectetur elit, sed doeiusmod
                    tempor
                  </p>
                  <div className="flex flex-col gap-[10px]">
                    <span className="default-card-item">6 hours long</span>
                    <span className="default-card-item">
                      NIH approved certificate
                    </span>
                    <span className="default-card-item">
                      4.5/5 by 5k+ Trainees
                    </span>
                    <span className="default-card-item">Dr. First Last</span>
                  </div>
                  <Link
                    href="#"
                    className="primary-btn !py-[10px] !text-[18px] !w-full mt-4"
                  >
                    Explore this course
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="default-card">
                <figure>
                  <Image src={cardImage} alt="card1" />
                </figure>
                <div className="default-card-detail">
                  <h3 className="default-card-title">First Aid</h3>
                  <p className="default-card-desc">
                    Lorem ipsum dolor sit amet, consectetur elit, sed doeiusmod
                    tempor
                  </p>
                  <div className="flex flex-col gap-[10px]">
                    <span className="default-card-item">6 hours long</span>
                    <span className="default-card-item">
                      NIH approved certificate
                    </span>
                    <span className="default-card-item">
                      4.5/5 by 5k+ Trainees
                    </span>
                    <span className="default-card-item">Dr. First Last</span>
                  </div>
                  <Link
                    href="#"
                    className="primary-btn !py-[10px] !text-[18px] !w-full mt-4"
                  >
                    Explore this course
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="default-card">
                <figure>
                  <Image src={cardImage} alt="card1" />
                </figure>
                <div className="default-card-detail">
                  <h3 className="default-card-title">First Aid</h3>
                  <p className="default-card-desc">
                    Lorem ipsum dolor sit amet, consectetur elit, sed doeiusmod
                    tempor
                  </p>
                  <div className="flex flex-col gap-[10px]">
                    <span className="default-card-item">6 hours long</span>
                    <span className="default-card-item">
                      NIH approved certificate
                    </span>
                    <span className="default-card-item">
                      4.5/5 by 5k+ Trainees
                    </span>
                    <span className="default-card-item">Dr. First Last</span>
                  </div>
                  <Link
                    href="#"
                    className="primary-btn !py-[10px] !text-[18px] !w-full mt-4"
                  >
                    Explore this course
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="default-card">
                <figure>
                  <Image src={cardImage} alt="card1" />
                </figure>
                <div className="default-card-detail">
                  <h3 className="default-card-title">First Aid</h3>
                  <p className="default-card-desc">
                    Lorem ipsum dolor sit amet, consectetur elit, sed doeiusmod
                    tempor
                  </p>
                  <div className="flex flex-col gap-[10px]">
                    <span className="default-card-item">6 hours long</span>
                    <span className="default-card-item">
                      NIH approved certificate
                    </span>
                    <span className="default-card-item">
                      4.5/5 by 5k+ Trainees
                    </span>
                    <span className="default-card-item">Dr. First Last</span>
                  </div>
                  <Link
                    href="#"
                    className="primary-btn !py-[10px] !text-[18px] !w-full mt-4"
                  >
                    Explore this course
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="flex justify-center mt-10">
            <a className="secondary-button" href="">
              View all courses
            </a>
          </div>
        </div>
      </section>
      <section className="product-card-sec overflow-hidden mb-[80px] py-[64px] bg-[#038D96]">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <span className="section-heading">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.2563 2.69922C12.8925 2.69922 13.4083 3.21499 13.4083 3.85122V5.00322C13.4083 5.63945 12.8925 6.15522 12.2563 6.15522C11.6201 6.15522 11.1043 5.63945 11.1043 5.00322V3.85122C11.1043 3.21499 11.6201 2.69922 12.2563 2.69922Z"
                  fill="#8AC342"
                />
                <path
                  d="M16.8643 11.9152C16.8643 14.4601 14.8012 16.5232 12.2563 16.5232C9.71136 16.5232 7.64828 14.4601 7.64828 11.9152C7.64828 9.37029 9.71136 7.30722 12.2563 7.30722C14.8012 7.30722 16.8643 9.37029 16.8643 11.9152Z"
                  fill="#8AC342"
                />
                <path
                  d="M16.3293 17.6173L17.1439 18.4319C17.5938 18.8818 18.3232 18.8818 18.773 18.4319C19.2229 17.982 19.2229 17.2526 18.773 16.8027L17.9585 15.9881C17.5086 15.5382 16.7792 15.5382 16.3293 15.9881C15.8794 16.438 15.8794 17.1674 16.3293 17.6173Z"
                  fill="#8AC342"
                />
                <path
                  d="M18.7729 5.39846C19.2228 5.84835 19.2228 6.57775 18.7729 7.02764L17.9583 7.84222C17.5085 8.29211 16.7791 8.29211 16.3292 7.84222C15.8793 7.39234 15.8793 6.66293 16.3292 6.21305L17.1438 5.39846C17.5936 4.94858 18.323 4.94858 18.7729 5.39846Z"
                  fill="#8AC342"
                />
                <path
                  d="M20.3203 13.0672C20.9565 13.0672 21.4723 12.5515 21.4723 11.9152C21.4723 11.279 20.9565 10.7632 20.3203 10.7632H19.1683C18.5321 10.7632 18.0163 11.279 18.0163 11.9152C18.0163 12.5515 18.5321 13.0672 19.1683 13.0672H20.3203Z"
                  fill="#8AC342"
                />
                <path
                  d="M12.2563 17.6752C12.8925 17.6752 13.4083 18.191 13.4083 18.8272V19.9792C13.4083 20.6155 12.8925 21.1312 12.2563 21.1312C11.6201 21.1312 11.1043 20.6155 11.1043 19.9792V18.8272C11.1043 18.191 11.6201 17.6752 12.2563 17.6752Z"
                  fill="#8AC342"
                />
                <path
                  d="M6.55424 7.84224C7.00413 8.29213 7.73353 8.29213 8.18342 7.84224C8.6333 7.39236 8.6333 6.66295 8.18342 6.21307L7.36883 5.39848C6.91894 4.9486 6.18954 4.9486 5.73965 5.39848C5.28977 5.84837 5.28977 6.57777 5.73965 7.02766L6.55424 7.84224Z"
                  fill="#8AC342"
                />
                <path
                  d="M8.18331 17.6173L7.36872 18.4318C6.91884 18.8817 6.18943 18.8817 5.73955 18.4318C5.28966 17.982 5.28966 17.2526 5.73955 16.8027L6.55413 15.9881C7.00402 15.5382 7.73342 15.5382 8.18331 15.9881C8.63319 16.438 8.63319 17.1674 8.18331 17.6173Z"
                  fill="#8AC342"
                />
                <path
                  d="M5.34428 13.0672C5.98052 13.0672 6.49628 12.5515 6.49628 11.9152C6.49628 11.279 5.98052 10.7632 5.34428 10.7632H4.19228C3.55605 10.7632 3.04028 11.279 3.04028 11.9152C3.04028 12.5515 3.55605 13.0672 4.19228 13.0672H5.34428Z"
                  fill="#8AC342"
                />
              </svg>
              Lorem Ipsum
            </span>
          </div>
          <h2 className="section-title !text-[#FFFFFF]">Train with the Best</h2>
          <p className="section-description !text-[#D2D2D2]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.  
          </p>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={4.9}
            className="default-card-swiper mt-8 !w-[120%]"
          >
            <SwiperSlide>
              <div className="product-card">
                <figure>
                  <Image src={productImage} alt="card2" />
                </figure>
                <div className="product-card-detail">
                  <h3 className="product-title">Bicycle First Aid Kit</h3>
                  <p className="product-code">Product code: 6777777</p>
                  <div className="flex items-center gap-2">
                    <span className="product-price">$6.48</span>
                    <span className="product-discounted-price">$6.48</span>
                  </div>

                  <Link
                    href="#"
                    className="primary-btn !py-[10px] !text-[18px] !w-full mt-4"
                  >
                    Add to cart
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="product-card">
                <figure>
                  <Image src={productImage} alt="card2" />
                </figure>
                <div className="product-card-detail">
                  <h3 className="product-title">Bicycle First Aid Kit</h3>
                  <p className="product-code">Product code: 6777777</p>
                  <div className="flex items-center gap-2">
                    <span className="product-price">$6.48</span>
                    <span className="product-discounted-price">$6.48</span>
                  </div>

                  <Link
                    href="#"
                    className="primary-btn !py-[10px] !text-[18px] !w-full mt-4"
                  >
                    Add to cart
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="product-card">
                <figure>
                  <Image src={productImage} alt="card2" />
                </figure>
                <div className="product-card-detail">
                  <h3 className="product-title">Bicycle First Aid Kit</h3>
                  <p className="product-code">Product code: 6777777</p>
                  <div className="flex items-center gap-2">
                    <span className="product-price">$6.48</span>
                    <span className="product-discounted-price">$6.48</span>
                  </div>

                  <Link
                    href="#"
                    className="primary-btn !py-[10px] !text-[18px] !w-full mt-4"
                  >
                    Add to cart
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="product-card">
                <figure>
                  <Image src={productImage} alt="card2" />
                </figure>
                <div className="product-card-detail">
                  <h3 className="product-title">Bicycle First Aid Kit</h3>
                  <p className="product-code">Product code: 6777777</p>
                  <div className="flex items-center gap-2">
                    <span className="product-price">$6.48</span>
                    <span className="product-discounted-price">$6.48</span>
                  </div>

                  <Link
                    href="#"
                    className="primary-btn !py-[10px] !text-[18px] !w-full mt-4"
                  >
                    Add to cart
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="product-card">
                <figure>
                  <Image src={productImage} alt="card2" />
                </figure>
                <div className="product-card-detail">
                  <h3 className="product-title">Bicycle First Aid Kit</h3>
                  <p className="product-code">Product code: 6777777</p>
                  <div className="flex items-center gap-2">
                    <span className="product-price">$6.48</span>
                    <span className="product-discounted-price">$6.48</span>
                  </div>

                  <Link
                    href="#"
                    className="primary-btn !py-[10px] !text-[18px] !w-full mt-4"
                  >
                    Add to cart
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="product-card">
                <figure>
                  <Image src={productImage} alt="card2" />
                </figure>
                <div className="product-card-detail">
                  <h3 className="product-title">Bicycle First Aid Kit</h3>
                  <p className="product-code">Product code: 6777777</p>
                  <div className="flex items-center gap-2">
                    <span className="product-price">$6.48</span>
                    <span className="product-discounted-price">$6.48</span>
                  </div>

                  <Link
                    href="#"
                    className="primary-btn !py-[10px] !text-[18px] !w-full mt-4"
                  >
                    Add to cart
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="product-card">
                <figure>
                  <Image src={productImage} alt="card2" />
                </figure>
                <div className="product-card-detail">
                  <h3 className="product-title">Bicycle First Aid Kit</h3>
                  <p className="product-code">Product code: 6777777</p>
                  <div className="flex items-center gap-2">
                    <span className="product-price">$6.48</span>
                    <span className="product-discounted-price">$6.48</span>
                  </div>

                  <Link
                    href="#"
                    className="primary-btn !py-[10px] !text-[18px] !w-full mt-4"
                  >
                    Add to cart
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="flex justify-center mt-10">
            <a className="secondary-button !text-[#FFFFFF]" href="">
              View all courses
            </a>
          </div>
        </div>
      </section>
      <section className="community-sec mb-[80px]">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <span className="section-heading">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.2563 2.69922C12.8925 2.69922 13.4083 3.21499 13.4083 3.85122V5.00322C13.4083 5.63945 12.8925 6.15522 12.2563 6.15522C11.6201 6.15522 11.1043 5.63945 11.1043 5.00322V3.85122C11.1043 3.21499 11.6201 2.69922 12.2563 2.69922Z"
                  fill="#8AC342"
                />
                <path
                  d="M16.8643 11.9152C16.8643 14.4601 14.8012 16.5232 12.2563 16.5232C9.71136 16.5232 7.64828 14.4601 7.64828 11.9152C7.64828 9.37029 9.71136 7.30722 12.2563 7.30722C14.8012 7.30722 16.8643 9.37029 16.8643 11.9152Z"
                  fill="#8AC342"
                />
                <path
                  d="M16.3293 17.6173L17.1439 18.4319C17.5938 18.8818 18.3232 18.8818 18.773 18.4319C19.2229 17.982 19.2229 17.2526 18.773 16.8027L17.9585 15.9881C17.5086 15.5382 16.7792 15.5382 16.3293 15.9881C15.8794 16.438 15.8794 17.1674 16.3293 17.6173Z"
                  fill="#8AC342"
                />
                <path
                  d="M18.7729 5.39846C19.2228 5.84835 19.2228 6.57775 18.7729 7.02764L17.9583 7.84222C17.5085 8.29211 16.7791 8.29211 16.3292 7.84222C15.8793 7.39234 15.8793 6.66293 16.3292 6.21305L17.1438 5.39846C17.5936 4.94858 18.323 4.94858 18.7729 5.39846Z"
                  fill="#8AC342"
                />
                <path
                  d="M20.3203 13.0672C20.9565 13.0672 21.4723 12.5515 21.4723 11.9152C21.4723 11.279 20.9565 10.7632 20.3203 10.7632H19.1683C18.5321 10.7632 18.0163 11.279 18.0163 11.9152C18.0163 12.5515 18.5321 13.0672 19.1683 13.0672H20.3203Z"
                  fill="#8AC342"
                />
                <path
                  d="M12.2563 17.6752C12.8925 17.6752 13.4083 18.191 13.4083 18.8272V19.9792C13.4083 20.6155 12.8925 21.1312 12.2563 21.1312C11.6201 21.1312 11.1043 20.6155 11.1043 19.9792V18.8272C11.1043 18.191 11.6201 17.6752 12.2563 17.6752Z"
                  fill="#8AC342"
                />
                <path
                  d="M6.55424 7.84224C7.00413 8.29213 7.73353 8.29213 8.18342 7.84224C8.6333 7.39236 8.6333 6.66295 8.18342 6.21307L7.36883 5.39848C6.91894 4.9486 6.18954 4.9486 5.73965 5.39848C5.28977 5.84837 5.28977 6.57777 5.73965 7.02766L6.55424 7.84224Z"
                  fill="#8AC342"
                />
                <path
                  d="M8.18331 17.6173L7.36872 18.4318C6.91884 18.8817 6.18943 18.8817 5.73955 18.4318C5.28966 17.982 5.28966 17.2526 5.73955 16.8027L6.55413 15.9881C7.00402 15.5382 7.73342 15.5382 8.18331 15.9881C8.63319 16.438 8.63319 17.1674 8.18331 17.6173Z"
                  fill="#8AC342"
                />
                <path
                  d="M5.34428 13.0672C5.98052 13.0672 6.49628 12.5515 6.49628 11.9152C6.49628 11.279 5.98052 10.7632 5.34428 10.7632H4.19228C3.55605 10.7632 3.04028 11.279 3.04028 11.9152C3.04028 12.5515 3.55605 13.0672 4.19228 13.0672H5.34428Z"
                  fill="#8AC342"
                />
              </svg>
              Lorem Ipsum
            </span>
          </div>
          <h2 className="section-title">Supporting the Community</h2>
          <p className="section-description">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.  
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 2xl:gap-12 mt-10 px-[120px]">
            <div className="community-card">
              <svg
                width="46"
                height="45"
                viewBox="0 0 46 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="path-1-outside-1_186_57964"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0.269531"
                  width="46"
                  height="45"
                  fill="black"
                >
                  <rect fill="white" y="0.269531" width="46" height="45" />
                  <path d="M17.7261 41.5115V3.62753H28.3041V41.5115H17.7261ZM3.54005 27.5715V17.5675H42.5721V27.5715H3.54005Z" />
                </mask>
                <path
                  d="M17.7261 41.5115H14.7261V44.5115H17.7261V41.5115ZM17.7261 3.62753V0.627529H14.7261V3.62753H17.7261ZM28.3041 3.62753H31.3041V0.627529H28.3041V3.62753ZM28.3041 41.5115V44.5115H31.3041V41.5115H28.3041ZM3.54005 27.5715H0.540055V30.5715H3.54005V27.5715ZM3.54005 17.5675V14.5675H0.540055V17.5675H3.54005ZM42.5721 17.5675H45.5721V14.5675H42.5721V17.5675ZM42.5721 27.5715V30.5715H45.5721V27.5715H42.5721ZM20.7261 41.5115V3.62753H14.7261V41.5115H20.7261ZM17.7261 6.62753H28.3041V0.627529H17.7261V6.62753ZM25.3041 3.62753V41.5115H31.3041V3.62753H25.3041ZM28.3041 38.5115H17.7261V44.5115H28.3041V38.5115ZM6.54006 27.5715V17.5675H0.540055V27.5715H6.54006ZM3.54005 20.5675H42.5721V14.5675H3.54005V20.5675ZM39.5721 17.5675V27.5715H45.5721V17.5675H39.5721ZM42.5721 24.5715H3.54005V30.5715H42.5721V24.5715Z"
                  fill="white"
                  mask="url(#path-1-outside-1_186_57964)"
                />
              </svg>
              <h2 className="community-card-title">FIRST AID IN SCHOOLS</h2>
              <Image src={checkImage} alt="image" />
              <div className="community-card-detail">
                <p className="community-card-desc">
                  The First Aid in Schools program teaches South
                  Australian primary school children the lifesaving skills of
                  first aid free of charge. We can arrange for a qualified St
                  John Trainer to come to your school and teach students a range
                  of vital first aid skills, tailored to suit each year level. 
                </p>
                <Link
                  href="#"
                  className="primary-btn !text-[#038D96] !bg-[#FFFFFF] !w-full !py-[10px]"
                >
                  Enroll now
                </Link>
                <Link href="#" className="more-btn">
                  Find Out More
                </Link>
              </div>
            </div>
            <div className="community-card">
              <svg
                width="46"
                height="45"
                viewBox="0 0 46 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="path-1-outside-1_186_57964"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0.269531"
                  width="46"
                  height="45"
                  fill="black"
                >
                  <rect fill="white" y="0.269531" width="46" height="45" />
                  <path d="M17.7261 41.5115V3.62753H28.3041V41.5115H17.7261ZM3.54005 27.5715V17.5675H42.5721V27.5715H3.54005Z" />
                </mask>
                <path
                  d="M17.7261 41.5115H14.7261V44.5115H17.7261V41.5115ZM17.7261 3.62753V0.627529H14.7261V3.62753H17.7261ZM28.3041 3.62753H31.3041V0.627529H28.3041V3.62753ZM28.3041 41.5115V44.5115H31.3041V41.5115H28.3041ZM3.54005 27.5715H0.540055V30.5715H3.54005V27.5715ZM3.54005 17.5675V14.5675H0.540055V17.5675H3.54005ZM42.5721 17.5675H45.5721V14.5675H42.5721V17.5675ZM42.5721 27.5715V30.5715H45.5721V27.5715H42.5721ZM20.7261 41.5115V3.62753H14.7261V41.5115H20.7261ZM17.7261 6.62753H28.3041V0.627529H17.7261V6.62753ZM25.3041 3.62753V41.5115H31.3041V3.62753H25.3041ZM28.3041 38.5115H17.7261V44.5115H28.3041V38.5115ZM6.54006 27.5715V17.5675H0.540055V27.5715H6.54006ZM3.54005 20.5675H42.5721V14.5675H3.54005V20.5675ZM39.5721 17.5675V27.5715H45.5721V17.5675H39.5721ZM42.5721 24.5715H3.54005V30.5715H42.5721V24.5715Z"
                  fill="white"
                  mask="url(#path-1-outside-1_186_57964)"
                />
              </svg>
              <h2 className="community-card-title">FIRST AID IN SCHOOLS</h2>
              <Image src={checkImage} alt="image" />
              <div className="community-card-detail">
                <p className="community-card-desc">
                  The First Aid in Schools program teaches South
                  Australian primary school children the lifesaving skills of
                  first aid free of charge. We can arrange for a qualified St
                  John Trainer to come to your school and teach students a range
                  of vital first aid skills, tailored to suit each year level. 
                </p>
                <Link
                  href="#"
                  className="primary-btn !text-[#038D96] !bg-[#FFFFFF] !w-full !py-[10px]"
                >
                  Enroll now
                </Link>
                <Link href="#" className="more-btn">
                  Find Out More
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <a className="secondary-button" href="">
              Enquire about these courses
            </a>
          </div>
        </div>
      </section>
      <section className="mission-vision-sec mb-[80px] py-[80px] bg-[#038D96]">
        <div className="container mx-auto">
          <div className="mission-card">
            <div className="mission-card-detail">
              <h2 className="mission-card-title">Our Mission</h2>
              <p className="mission-card-desc">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ipsum eget dolor. ipsum massa. Cum sociis natoque ipsum
                et magnis dis parturient montes, ipsum ridiculus mus.  
              </p>
            </div>
            <figure>
              <Image src={missionImg} alt="missionImg" />
            </figure>
          </div>
          <div className="mission-card !flex-row-reverse mt-[60px]">
            <div className="mission-card-detail">
              <h2 className="mission-card-title">Our Vision</h2>
              <p className="mission-card-desc">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ipsum eget dolor. ipsum massa. Cum sociis natoque ipsum
                et magnis dis parturient montes, ipsum ridiculus mus.  
              </p>
            </div>
            <figure>
              <Image src={missionImg} alt="missionImg" />
            </figure>
          </div>
        </div>
      </section>
      <section className="mb-[80px]">
        <div className="container mx-auto">
          <div className="gallary-sec grid grid-cols-4 grid-rows-5 gap-4">
            <Image
              className="rounded-[12px] col-span-2 row-span-3"
              src={missionImg}
              alt="missionImg"
            />
            <Image
              className="rounded-[12px] col-span-2 row-span-5 col-start-3"
              src={missionImg}
              alt="missionImg"
            />
            <Image
              className="rounded-[12px] row-span-2 row-start-4"
              src={missionImg}
              alt="missionImg"
            />
            <Image
              className="rounded-[12px] row-span-2 row-start-4"
              src={missionImg}
              alt="missionImg"
            />
          </div>
        </div>
      </section>
      <section className="sponsership-sec overflow-hidden mb-[80px] py-[64px] bg-[#038D96]">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <span className="section-heading">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.2563 2.69922C12.8925 2.69922 13.4083 3.21499 13.4083 3.85122V5.00322C13.4083 5.63945 12.8925 6.15522 12.2563 6.15522C11.6201 6.15522 11.1043 5.63945 11.1043 5.00322V3.85122C11.1043 3.21499 11.6201 2.69922 12.2563 2.69922Z"
                  fill="#8AC342"
                />
                <path
                  d="M16.8643 11.9152C16.8643 14.4601 14.8012 16.5232 12.2563 16.5232C9.71136 16.5232 7.64828 14.4601 7.64828 11.9152C7.64828 9.37029 9.71136 7.30722 12.2563 7.30722C14.8012 7.30722 16.8643 9.37029 16.8643 11.9152Z"
                  fill="#8AC342"
                />
                <path
                  d="M16.3293 17.6173L17.1439 18.4319C17.5938 18.8818 18.3232 18.8818 18.773 18.4319C19.2229 17.982 19.2229 17.2526 18.773 16.8027L17.9585 15.9881C17.5086 15.5382 16.7792 15.5382 16.3293 15.9881C15.8794 16.438 15.8794 17.1674 16.3293 17.6173Z"
                  fill="#8AC342"
                />
                <path
                  d="M18.7729 5.39846C19.2228 5.84835 19.2228 6.57775 18.7729 7.02764L17.9583 7.84222C17.5085 8.29211 16.7791 8.29211 16.3292 7.84222C15.8793 7.39234 15.8793 6.66293 16.3292 6.21305L17.1438 5.39846C17.5936 4.94858 18.323 4.94858 18.7729 5.39846Z"
                  fill="#8AC342"
                />
                <path
                  d="M20.3203 13.0672C20.9565 13.0672 21.4723 12.5515 21.4723 11.9152C21.4723 11.279 20.9565 10.7632 20.3203 10.7632H19.1683C18.5321 10.7632 18.0163 11.279 18.0163 11.9152C18.0163 12.5515 18.5321 13.0672 19.1683 13.0672H20.3203Z"
                  fill="#8AC342"
                />
                <path
                  d="M12.2563 17.6752C12.8925 17.6752 13.4083 18.191 13.4083 18.8272V19.9792C13.4083 20.6155 12.8925 21.1312 12.2563 21.1312C11.6201 21.1312 11.1043 20.6155 11.1043 19.9792V18.8272C11.1043 18.191 11.6201 17.6752 12.2563 17.6752Z"
                  fill="#8AC342"
                />
                <path
                  d="M6.55424 7.84224C7.00413 8.29213 7.73353 8.29213 8.18342 7.84224C8.6333 7.39236 8.6333 6.66295 8.18342 6.21307L7.36883 5.39848C6.91894 4.9486 6.18954 4.9486 5.73965 5.39848C5.28977 5.84837 5.28977 6.57777 5.73965 7.02766L6.55424 7.84224Z"
                  fill="#8AC342"
                />
                <path
                  d="M8.18331 17.6173L7.36872 18.4318C6.91884 18.8817 6.18943 18.8817 5.73955 18.4318C5.28966 17.982 5.28966 17.2526 5.73955 16.8027L6.55413 15.9881C7.00402 15.5382 7.73342 15.5382 8.18331 15.9881C8.63319 16.438 8.63319 17.1674 8.18331 17.6173Z"
                  fill="#8AC342"
                />
                <path
                  d="M5.34428 13.0672C5.98052 13.0672 6.49628 12.5515 6.49628 11.9152C6.49628 11.279 5.98052 10.7632 5.34428 10.7632H4.19228C3.55605 10.7632 3.04028 11.279 3.04028 11.9152C3.04028 12.5515 3.55605 13.0672 4.19228 13.0672H5.34428Z"
                  fill="#8AC342"
                />
              </svg>
              Lorem Ipsum
            </span>
          </div>
          <h2 className="section-title !text-[#FFFFFF]">
            Thankyou to our Sponsors
          </h2>
          <p className="section-description !text-[#D2D2D2]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.  
          </p>
          <div className="brand-wrapper overflow-hidden whitespace-nowrap relative mt-9">
            <div className="brand-track flex gap-6 items-center">
              <div className="brand-box">
                <Image src={logo} alt="" />
              </div>
              <div className="brand-box">
                <Image src={logo} alt="" />
              </div>
              <div className="brand-box">
                <Image src={logo} alt="" />
              </div>
              <div className="brand-box">
                <Image src={logo} alt="" />
              </div>
              <div className="brand-box">
                <Image src={logo} alt="" />
              </div>
              <div className="brand-box">
                <Image src={logo} alt="" />
              </div>
              <div className="brand-box">
                <Image src={logo} alt="" />
              </div>
              <div className="brand-box">
                <Image src={logo} alt="" />
              </div>
              <div className="brand-box">
                <Image src={logo} alt="" />
              </div>
              <div className="brand-box">
                <Image src={logo} alt="" />
              </div>
              <div className="brand-box">
                <Image src={logo} alt="" />
              </div>
              <div className="brand-box">
                <Image src={logo} alt="" />
              </div>
              <div className="brand-box">
                <Image src={logo} alt="" />
              </div>
              <div className="brand-box">
                <Image src={logo} alt="" />
              </div>
              <div className="brand-box">
                <Image src={logo} alt="" />
              </div>
              <div className="brand-box">
                <Image src={logo} alt="" />
              </div>
              <div className="brand-box">
                <Image src={logo} alt="" />
              </div>
              <div className="brand-box">
                <Image src={logo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-[80px]">
        <div className="container mx-auto">
        <h2 className="section-title">Get in touch with us</h2>
          <p className="section-description">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.  
          </p>
          <div className="email-input-wrapper">
            <input placeholder="Email Address" type="text" />
          </div>
        </div>
      </section>
    </>
  );
}
