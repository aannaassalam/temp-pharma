"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import AboutBanner from "../assets/images/about-banner.png";
import Link from "next/link";

export default function Health() {
    return (
        <>
            <Navbar />
            <section className="relative w-full mb-[60px] h-[300px]">
                <Image
                    className="w-full h-full object-cover"
                    src={AboutBanner}
                    alt="banner"
                />
                <div className="breadCrumb absolute top-8 left-20 mx-auto z-10">
                    <Link className="breadCrumbItem" href="#">
                        Home
                    </Link>
                    <Link className="breadCrumbItem" href="#">
                        Services
                    </Link>
                    <Link className="breadCrumbItem" href="#">
                        Health and Medical Services
                    </Link>
                </div>
                <h2 className="common-banner-title">
                    Health and Medical Services
                </h2>
                <div className="about-banner-overlay"></div>
            </section>

            <section>
                <div className="container mx-auto">
                    <h3 className="page-common-h3 !text-center">
                        On Site Training
                    </h3>
                    <p className="page-common-desc !text-center">
                        St John Ambulance SA Health and Medical Services has a
                        long-standing history of almost 140 years of service to
                        the South Australian community. As the leading provider
                        of Health and Medical Services, we play a critical role
                        in ensuring the safety and wellbeing of participants and
                        attendees at events across the region.  
                    </p>
                    <p className="page-common-desc !text-center">
                        We're committed to providing more than just 'first
                        aid'. Our staff are trained at a level far exceeding
                        standard first aid requirements and undergo continuous
                        professional development to ensure the highest standards
                        of care. Every year, St John Ambulance SA supports over
                        2,200 events across South Australia, offering a
                        comprehensive range of medical services tailored to meet
                        each event's specific needs.
                    </p>
                    <p className="page-common-desc !text-center">
                        Our extensive experience and historical presence in
                        South Australia provide us with unparalleled insight
                        into risk management and best practice guidelines. This
                        expertise enables us to deliver the most effective and
                        proven coverage for events, from a 10-person conference
                        to large-scale events hosting over 100,000 attendees. As
                        the largest and most comprehensive provider of Health
                        and Medical Services in the state, our extensive
                        operational workforce and scalable solutions ensure our
                        services meet the demands and risks associated with any
                        event. 
                    </p>
                    <p className="page-common-desc !text-center">
                        Under our Health and Medical Services umbrella,
                        our Non-Emergency Patient Transport Services provide
                        safe, comfortable, and efficient transportation for
                        patients needing clinical care during transit. Whether
                        it's transporting patients to their homes or between
                        medical appointments, our services are designed to offer
                        the necessary care and support, adhering strictly to SA
                        Health Licensing Requirements.
                    </p>
                    <p className="page-common-desc !text-center">
                        St John Ambulance SA is more than a service provider; we
                        are a trusted partner in the community, committed to
                        ensuring that everyone has access to high-quality
                        medical care and support, wherever and whenever it's
                        needed.
                    </p>
                    <h3 className="page-common-h3 !text-center">
                        On Site Training
                    </h3>
                    <p className="page-common-desc !text-center">
                        For over 140 years, St John Ambulance SA has been a
                        trusted name in Health and Medical Services. In the past
                        year alone, we have supported over 2,200 events,
                        delivering the highest standard of care and safety to
                        the South Australian community.
                    </p>
                    <div className="flex justify-center items-center gap-10 md:gap-16 xl:gap-20 2xl:gap-[140px] mb-10 md:mb-12 2xl:mb-16">
                        <div className="flex flex-col justify-center items-center gap-[2px]">
                            <svg
                                width="69"
                                height="77"
                                viewBox="0 0 69 77"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M48.6667 2.25V16.75M20.3333 2.25V16.75M2.625 31.25H66.375M9.70833 9.5H59.2917C63.2037 9.5 66.375 12.7459 66.375 16.75V67.5C66.375 71.5041 63.2037 74.75 59.2917 74.75H9.70833C5.79632 74.75 2.625 71.5041 2.625 67.5V16.75C2.625 12.7459 5.79632 9.5 9.70833 9.5Z"
                                    stroke="#1E1E1E"
                                    stroke-width="4"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                            <p className="text-[#000000] text-[12px] md:text-[14px] text-center">
                                Years Of Service
                            </p>
                            <span className="text-[#000000] text-[20px] md:text-[24px] text-center font-bold leading-[1]">
                                139
                            </span>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-[2px]">
                            <svg
                                width="69"
                                height="77"
                                viewBox="0 0 69 77"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M48.6667 2.25V16.75M20.3333 2.25V16.75M2.625 31.25H66.375M9.70833 9.5H59.2917C63.2037 9.5 66.375 12.7459 66.375 16.75V67.5C66.375 71.5041 63.2037 74.75 59.2917 74.75H9.70833C5.79632 74.75 2.625 71.5041 2.625 67.5V16.75C2.625 12.7459 5.79632 9.5 9.70833 9.5Z"
                                    stroke="#1E1E1E"
                                    stroke-width="4"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                            <p className="text-[#000000] text-[12px] md:text-[14px] text-center">
                                Events Supported Annually
                            </p>
                            <span className="text-[#000000] text-[20px] md:text-[24px] text-center font-bold leading-[1]">
                                2,200
                            </span>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-[2px]">
                            <svg
                                width="61"
                                height="71"
                                viewBox="0 0 61 71"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M58.625 29.418C58.625 50.7096 30.5 68.9596 30.5 68.9596C30.5 68.9596 2.375 50.7096 2.375 29.418C2.375 22.1577 5.33816 15.1947 10.6126 10.0609C15.8871 4.92711 23.0408 2.04297 30.5 2.04297C37.9592 2.04297 45.1129 4.92711 50.3874 10.0609C55.6618 15.1947 58.625 22.1577 58.625 29.418Z"
                                    stroke="#1E1E1E"
                                    stroke-width="4"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M30.5 38.543C35.6777 38.543 39.875 34.4576 39.875 29.418C39.875 24.3784 35.6777 20.293 30.5 20.293C25.3223 20.293 21.125 24.3784 21.125 29.418C21.125 34.4576 25.3223 38.543 30.5 38.543Z"
                                    stroke="#1E1E1E"
                                    stroke-width="4"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>

                            <p className="text-[#000000] text-[12px] md:text-[14px] text-center">
                                Operational
                            </p>
                            <span className="text-[#000000] text-[20px] md:text-[24px] text-center font-bold leading-[1]">
                                20
                            </span>
                        </div>
                    </div>
                    <p className="page-common-desc !text-center">
                        Our skilled professionals are equipped to handle any
                        situation, whether it’s a small community gathering or a
                        large-scale event. With a proven track record, we
                        proudly stand as the leading provider of Health and
                        Medical Services in South Australia. We have an
                        unparalleled presence across the state, with 20
                        operational sites stretching from Metropolitan Adelaide
                        to Regional South Australia. Our reach extends from
                        Unley to Noarlunga and from Port Lincoln to Mount
                        Gambier, giving us the most extensive footprint of any
                        Event Medical Provider.
                    </p>
                    <p className="page-common-desc !text-center">
                        As part of a national organisation, we collaborate
                        closely with our St John Ambulance counterparts across
                        Australia. If you need to secure St John Ambulance
                        services in other states, we can seamlessly connect you
                        with our Health and Medical Services teams across the
                        country to coordinate your booking.
                    </p>
                    <div className="flex flex-col justify-center md:flex-row gap-4 md:gap-6 xl:gap-8 2xl:gap-12 my-10 md:my-12 2xl:my-16">
                        <a className="primary-btn" href="">
                            View Our Services
                        </a>
                        <a className="primary-btn" href="">
                            View Our Clinical Governance
                        </a>
                    </div>
                    <h3 className="page-common-h3 !text-center">
                        Our Partners
                    </h3>
                    <p className="page-common-desc !text-center">
                        We partner with a range of organisations across South
                        Australia to support their Health and Medical Services
                        requirements, including some of the following:
                    </p>
                    <div className="flex flex-wrap gap-4 mt-10 md:mt-12 2xl:mt-16">
                        <a className="primary-btn" href="">
                            Partner 1
                        </a>
                        <a className="primary-btn" href="">
                            Partner 2
                        </a>
                        <a className="primary-btn" href="">
                            Partner 1
                        </a>
                        <a className="primary-btn" href="">
                            Partner 2
                        </a>
                        <a className="primary-btn" href="">
                            Partner 1
                        </a>
                        <a className="primary-btn" href="">
                            Partner 2
                        </a>
                        <a className="primary-btn" href="">
                            Partner 1
                        </a>
                        <a className="primary-btn" href="">
                            Partner 2
                        </a>
                        <a className="primary-btn" href="">
                            Partner 1
                        </a>
                        <a className="primary-btn" href="">
                            Partner 2
                        </a>
                        <a className="primary-btn" href="">
                            Partner 1
                        </a>
                        <a className="primary-btn" href="">
                            Partner 2
                        </a>
                        <a className="primary-btn" href="">
                            Partner 1
                        </a>
                        <a className="primary-btn" href="">
                            Partner 2
                        </a>
                        <a className="primary-btn" href="">
                            Partner 1
                        </a>
                        <a className="primary-btn" href="">
                            Partner 2
                        </a>
                        <a className="primary-btn" href="">
                            Partner 1
                        </a>
                        <a className="primary-btn" href="">
                            Partner 2
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
