"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import AboutBanner from "../assets/images/about-banner.jpg";
import Link from "next/link";
import cardImage from "../assets/images/card1.jpg";

export default function Training() {
  return (
    <>
      <Navbar />
      <section className="relative w-full mb-[80px] h-[240px]">
        <Image className="w-full h-full" src={AboutBanner} alt="banner" />
        <div className="breadCrumb absolute top-8 left-20 mx-auto z-10">
          <Link className="breadCrumbItem" href="#">
            Home
          </Link>
          <Link className="breadCrumbItem" href="#">
            Training
          </Link>
          <Link className="breadCrumbItem" href="#">
            Train with the Best
          </Link>
        </div>
        <h2 className="common-banner-title">Train with the Best</h2>
        <div className="about-banner-overlay"></div>
      </section>
      <section className="common-sec">
        <div className="container mx-auto">
          <p className="page-common-desc text-center">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
             Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.  Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus.  Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.  
          </p>
          <h3 className="common-sec-title text-center">On Site Training</h3>
          <p className="common-sec-desc text-center">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
          <div className="flex justify-center mt-8">
            <div className="w-full lg:w-[70%]">
              <div className="hero-banner-popup !top-0">
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
        </div>
      </section>
      <section className="common-sec">
        <div className="container mx-auto">
          <h3 className="common-sec-title text-center">Our Courses</h3>
          <p className="common-sec-desc text-center">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.  
          </p>
          <div className="bg-[#038D96] rounded-[12px] p-4 flex flex-col sm:flex-row sm:items-center justify-between mt-6 md:mt-9">
            <div>
              <h2 className="text-white font-semibold text-base sm:text-lg">
                Search By Course Number
              </h2>
              <p className="text-white text-sm">
                If you know the course code, you can use our search tool
              </p>
            </div>
            <div className="mt-3 sm:mt-0">
              <div className="flex items-center bg-white rounded-[8px] px-3 py-2 w-full sm:w-80">
                <input
                  type="text"
                  placeholder="Search by Course Code"
                  className="flex-grow outline-none text-gray-700 placeholder-gray-400 bg-transparent"
                />
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 31 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.875 28.75L19.625 20.25M22.375 13.1667C22.375 18.6435 18.0657 23.0833 12.75 23.0833C7.43426 23.0833 3.125 18.6435 3.125 13.1667C3.125 7.68984 7.43426 3.25 12.75 3.25C18.0657 3.25 22.375 7.68984 22.375 13.1667Z"
                    stroke="#038D96"
                    stroke-width="4.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 xl:gap-8 mt-6 md:mt-8">
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
          </div>
          <div className="flex justify-center mt-6 md:mt-9 2xl:mt-12">
            <span className="!text-center text-[16px] md:text-[18px] font-medium">
              Can’t find what you’re looking for? Call us on{" "}
              <Link className="underline underline-offset-2" href="">
                1300 78 5646
              </Link>
            </span>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
