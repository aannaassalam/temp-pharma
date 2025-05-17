"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import AboutBanner from "../assets/images/about-banner.png";
import Link from "next/link";

export default function Workplace() {
    const [activeTab, setActiveTab] = useState("Workplace Services");
    return (
        <>
            <Navbar />
            <section className="relative w-full mb-[80px] h-[300px]">
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
                        Workplace Services
                    </Link>
                </div>
                <h2 className="common-banner-title">{activeTab}</h2>
                <div className="about-banner-overlay"></div>
                <div className="bg-[#038D961A]">
                    <div className="container mx-auto">
                        <div className="flex justify-evenly gap-4 flex-wrap py-4 md:py-7">
                            <button
                                className={`aboutTabBtn ${
                                    activeTab === "Workplace Services"
                                        ? "!border-b-2 !border-[#038D96] !text-[#038D96]"
                                        : ""
                                }`}
                                onClick={() =>
                                    setActiveTab("Workplace Services")
                                }
                            >
                                Workplace Services
                            </button>
                            <button
                                className={`aboutTabBtn ${
                                    activeTab === "Workplace Assessment"
                                        ? "!border-b-2 !border-[#038D96] !text-[#038D96]"
                                        : ""
                                }`}
                                onClick={() =>
                                    setActiveTab("Workplace Assessment")
                                }
                            >
                                Workplace Assessment
                            </button>
                            <button
                                className={`aboutTabBtn ${
                                    activeTab === "On-site Restocking"
                                        ? "!border-b-2 !border-[#038D96] !text-[#038D96]"
                                        : ""
                                }`}
                                onClick={() =>
                                    setActiveTab("On-site Restocking")
                                }
                            >
                                On-site Restocking
                            </button>
                            <button
                                className={`aboutTabBtn ${
                                    activeTab === "On-site Training"
                                        ? "!border-b-2 !border-[#038D96] !text-[#038D96]"
                                        : ""
                                }`}
                                onClick={() => setActiveTab("On-site Training")}
                            >
                                On-site Training
                            </button>
                            <button
                                className={`aboutTabBtn ${
                                    activeTab === "Hire an AED"
                                        ? "!border-b-2 !border-[#038D96] !text-[#038D96]"
                                        : ""
                                }`}
                                onClick={() => setActiveTab("Hire an AED")}
                            >
                                Hire an AED
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container mx-auto mt-6 md:mt-8 xl:mt-10">
                    <div className="about-content-wrapper pt-10">
                        {activeTab === "Workplace Services" && (
                            <>
                                <p className="page-common-desc !text-[#000000] font-medium">
                                    St John SA offers a range of workplace first
                                    aid services and products to help keep you
                                    first aid compliant in the workplace.
                                    Whether you are unsure about the first aid
                                    risks and requirements for your workplace,
                                    need your first aid kits serviced and
                                    restocked, or your team requires first aid
                                    training, St John SA is your one-stop-shop
                                    for all things first aid in the workplace.
                                </p>
                                <h3 className="page-common-h3">
                                    WORKPLACE ASSESSMENT
                                </h3>
                                <p className="page-common-desc !mb-0">
                                    To help you understand the first aid risks
                                    and requirements of your workplace, we offer
                                    a complimentary Workplace First Aid
                                    Assessment, valued at $199.
                                </p>
                                <Link className="page-common-cta" href="">
                                    Find out more
                                </Link>

                                <div className="common-sec">
                                    <h3 className="page-common-h3">
                                        ON-SITE RESTOCKING
                                    </h3>
                                    <p className="page-common-desc !mb-0">
                                        To make life easy for you, we offer a
                                        mobile first aid kit restocking service,
                                        so you never have to worry about when to
                                        replenish your first aid kit contents
                                        again.
                                    </p>
                                    <Link className="page-common-cta" href="">
                                        Find out more
                                    </Link>
                                </div>
                                <div className="common-sec">
                                    <h3 className="page-common-h3">
                                        ON-SITE TRAINING
                                    </h3>
                                    <p className="page-common-desc !mb-0">
                                        First aid training is a requirement of
                                        many job roles. Why not train your whole
                                        team at once with our on-site training
                                        courses?
                                    </p>
                                    <Link className="page-common-cta" href="">
                                        Find out more
                                    </Link>
                                </div>
                            </>
                        )}
                        {activeTab === "Workplace Assessment" && (
                            <>
                                <p className="page-common-desc !text-[#000000] font-medium">
                                    To determine the first aid requirements for
                                    your workplace, fill out the quick and easy
                                    form below and we will get in contact with
                                    you to book a free Workplace First Aid
                                    Assessment.  A St John First Aid Advisor
                                    will come to your workplace and conduct a
                                    thorough risk assessment to determine the
                                    first aid training, products and equipment
                                    required to meet compliance standards. After
                                    completing the assessment, a confidential
                                    report will be provided detailing guidelines
                                    and recommendations, ensuring that the
                                    process of first aid compliance is made
                                    smooth and easy for your workplace. If you
                                    work in a remote area, we can assist you to
                                    work through this assessment yourself.
                                </p>
                                <div className="common-sec">
                                    <h3 className="page-common-h4">
                                        Workplace First Aid Assessment Enquiry
                                    </h3>
                                    <form className="space-y-6 mt-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full lg:w-[70%]">
                                            <div>
                                                <label className="form-label">
                                                    First name*
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Name"
                                                    className="form-input"
                                                />
                                            </div>
                                            <div>
                                                <label className="form-label">
                                                    Last name*
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Name"
                                                    className="form-input"
                                                />
                                            </div>
                                            <div>
                                                <label className="form-label">
                                                    Email*
                                                </label>
                                                <input
                                                    type="email"
                                                    placeholder="Enter Name"
                                                    className="form-input"
                                                />
                                            </div>
                                            <div>
                                                <label className="form-label">
                                                    Phone Number*
                                                </label>
                                                <input
                                                    type="tel"
                                                    placeholder="Enter Number"
                                                    className="form-input"
                                                />
                                            </div>
                                            <div>
                                                <label className="form-label">
                                                    Business name*
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Name"
                                                    className="form-input"
                                                />
                                            </div>
                                            <div>
                                                <label className="form-label">
                                                    Postcode*
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Number"
                                                    className="form-input"
                                                />
                                            </div>
                                            <div>
                                                <label className="form-label">
                                                    Number of employees*
                                                </label>
                                                <select className="form-input">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="border-t border-[#A4A4A4] pt-6 flex flex-col gap-4 md:gap-[22px]">
                                            <div className="space-y-2">
                                                <p className="form-label !font-medium">
                                                    Have you previously
                                                    completed a Workplace First
                                                    Aid Assessment?
                                                </p>
                                                <div className="flex flex-col gap-2">
                                                    <label className="flex items-center">
                                                        <input
                                                            type="radio"
                                                            name="assessment"
                                                            className="form-radio !text-[#038D96]"
                                                        />
                                                        <span className="ml-2 text-gray-700">
                                                            Yes
                                                        </span>
                                                    </label>
                                                    <label className="flex items-center">
                                                        <input
                                                            type="radio"
                                                            name="assessment"
                                                            defaultChecked
                                                            className="form-radio !text-[#038D96]"
                                                        />
                                                        <span className="ml-2 text-gray-700">
                                                            No
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <p className="form-label !font-medium">
                                                    Is your workplace high or
                                                    low risk?
                                                </p>
                                                <div className="flex flex-col gap-2">
                                                    <label className="flex items-center">
                                                        <input
                                                            type="radio"
                                                            name="risk"
                                                            className="form-radio !text-[#038D96]"
                                                        />
                                                        <span className="ml-2 text-gray-700">
                                                            High
                                                        </span>
                                                    </label>
                                                    <label className="flex items-center">
                                                        <input
                                                            type="radio"
                                                            name="risk"
                                                            defaultChecked
                                                            className="form-radio !text-[#038D96]"
                                                        />
                                                        <span className="ml-2 text-[#606060] font-bold">
                                                            Low
                                                        </span>
                                                    </label>
                                                    <label className="flex items-center">
                                                        <input
                                                            type="radio"
                                                            name="risk"
                                                            className="form-radio !text-[#038D96]"
                                                        />
                                                        <span className="ml-2 text-gray-700">
                                                            Unsure
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <p className="form-label !font-medium">
                                                    Do you have sufficient first
                                                    aiders in your workplace?
                                                </p>
                                                <div className="flex flex-col gap-2">
                                                    <label className="flex items-center">
                                                        <input
                                                            type="radio"
                                                            name="workplace"
                                                            className="form-radio !text-[#038D96]"
                                                        />
                                                        <span className="ml-2 text-gray-700">
                                                            High
                                                        </span>
                                                    </label>
                                                    <label className="flex items-center">
                                                        <input
                                                            type="radio"
                                                            name="workplace"
                                                            defaultChecked
                                                            className="form-radio !text-[#038D96]"
                                                        />
                                                        <span className="ml-2 text-[#606060] font-bold">
                                                            Low
                                                        </span>
                                                    </label>
                                                    <label className="flex items-center">
                                                        <input
                                                            type="radio"
                                                            name="workplace"
                                                            className="form-radio !text-[#038D96]"
                                                        />
                                                        <span className="ml-2 text-gray-700">
                                                            Unsure
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <p className="form-label !font-medium">
                                                    Do you have sufficient first
                                                    aid kits in your workplace,
                                                    including vehicles?
                                                </p>
                                                <div className="flex flex-col gap-2">
                                                    <label className="flex items-center">
                                                        <input
                                                            type="radio"
                                                            name="vehicles"
                                                            className="form-radio !text-[#038D96]"
                                                        />
                                                        <span className="ml-2 text-gray-700">
                                                            High
                                                        </span>
                                                    </label>
                                                    <label className="flex items-center">
                                                        <input
                                                            type="radio"
                                                            name="vehicles"
                                                            defaultChecked
                                                            className="form-radio !text-[#038D96]"
                                                        />
                                                        <span className="ml-2 text-[#606060] font-bold">
                                                            Low
                                                        </span>
                                                    </label>
                                                    <label className="flex items-center">
                                                        <input
                                                            type="radio"
                                                            name="vehicles"
                                                            className="form-radio !text-[#038D96]"
                                                        />
                                                        <span className="ml-2 text-gray-700">
                                                            Unsure
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <p className="form-label !font-medium">
                                                    Do all first aiders in your
                                                    workplace have current first
                                                    aid qualifications?
                                                </p>
                                                <div className="flex flex-col gap-2">
                                                    <label className="flex items-center">
                                                        <input
                                                            type="radio"
                                                            name="qualifications"
                                                            className="form-radio !text-[#038D96]"
                                                        />
                                                        <span className="ml-2 text-gray-700">
                                                            High
                                                        </span>
                                                    </label>
                                                    <label className="flex items-center">
                                                        <input
                                                            type="radio"
                                                            name="qualifications"
                                                            defaultChecked
                                                            className="form-radio !text-[#038D96]"
                                                        />
                                                        <span className="ml-2 text-[#606060] font-bold">
                                                            Low
                                                        </span>
                                                    </label>
                                                    <label className="flex items-center">
                                                        <input
                                                            type="radio"
                                                            name="qualifications"
                                                            className="form-radio !text-[#038D96]"
                                                        />
                                                        <span className="ml-2 text-gray-700">
                                                            Unsure
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <p className="form-label !font-medium">
                                                    Does your workplace have
                                                    adequate and visible first
                                                    aid signage?
                                                </p>
                                                <div className="flex flex-col gap-2">
                                                    <label className="flex items-center">
                                                        <input
                                                            type="radio"
                                                            name="signage"
                                                            className="form-radio !text-[#038D96]"
                                                        />
                                                        <span className="ml-2 text-gray-700">
                                                            High
                                                        </span>
                                                    </label>
                                                    <label className="flex items-center">
                                                        <input
                                                            type="radio"
                                                            name="signage"
                                                            defaultChecked
                                                            className="form-radio !text-[#038D96]"
                                                        />
                                                        <span className="ml-2 text-[#606060] font-bold">
                                                            Low
                                                        </span>
                                                    </label>
                                                    <label className="flex items-center">
                                                        <input
                                                            type="radio"
                                                            name="signage"
                                                            className="form-radio !text-[#038D96]"
                                                        />
                                                        <span className="ml-2 text-gray-700">
                                                            Unsure
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <p className="form-label !font-medium">
                                                    Does your workplace have a
                                                    current set of first aid
                                                    procedures?
                                                </p>
                                                <div className="flex flex-col gap-2">
                                                    <label className="flex items-center">
                                                        <input
                                                            type="radio"
                                                            name="procedures"
                                                            className="form-radio !text-[#038D96]"
                                                        />
                                                        <span className="ml-2 text-gray-700">
                                                            High
                                                        </span>
                                                    </label>
                                                    <label className="flex items-center">
                                                        <input
                                                            type="radio"
                                                            name="procedures"
                                                            defaultChecked
                                                            className="form-radio !text-[#038D96]"
                                                        />
                                                        <span className="ml-2 text-[#606060] font-bold">
                                                            Low
                                                        </span>
                                                    </label>
                                                    <label className="flex items-center">
                                                        <input
                                                            type="radio"
                                                            name="procedures"
                                                            className="form-radio !text-[#038D96]"
                                                        />
                                                        <span className="ml-2 text-gray-700">
                                                            Unsure
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <p className="form-label !font-medium">
                                                    Does your workplace run
                                                    regular first aid drills?
                                                </p>
                                                <div className="flex flex-col gap-2">
                                                    <label className="flex items-center">
                                                        <input
                                                            type="radio"
                                                            name="drills"
                                                            className="form-radio !text-[#038D96]"
                                                        />
                                                        <span className="ml-2 text-gray-700">
                                                            High
                                                        </span>
                                                    </label>
                                                    <label className="flex items-center">
                                                        <input
                                                            type="radio"
                                                            name="drills"
                                                            defaultChecked
                                                            className="form-radio !text-[#038D96]"
                                                        />
                                                        <span className="ml-2 text-[#606060] font-bold">
                                                            Low
                                                        </span>
                                                    </label>
                                                    <label className="flex items-center">
                                                        <input
                                                            type="radio"
                                                            name="drills"
                                                            className="form-radio !text-[#038D96]"
                                                        />
                                                        <span className="ml-2 text-gray-700">
                                                            Unsure
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <p className="form-label !font-medium">
                                                    Does your workplace have a
                                                    Defibrillator (AED)?
                                                </p>
                                                <div className="flex flex-col gap-2">
                                                    <label className="flex items-center">
                                                        <input
                                                            type="radio"
                                                            name="Defibrillator"
                                                            className="form-radio !text-[#038D96]"
                                                        />
                                                        <span className="ml-2 text-gray-700">
                                                            High
                                                        </span>
                                                    </label>
                                                    <label className="flex items-center">
                                                        <input
                                                            type="radio"
                                                            name="Defibrillator"
                                                            defaultChecked
                                                            className="form-radio !text-[#038D96]"
                                                        />
                                                        <span className="ml-2 text-[#606060] font-bold">
                                                            Low
                                                        </span>
                                                    </label>
                                                    <label className="flex items-center">
                                                        <input
                                                            type="radio"
                                                            name="Defibrillator"
                                                            className="form-radio !text-[#038D96]"
                                                        />
                                                        <span className="ml-2 text-gray-700">
                                                            Unsure
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="mt-6 md:mt-8 lg:mt-10 2xl:mt-[60px]">
                                                <a
                                                    href=""
                                                    className="primary-btn"
                                                >
                                                    Submit
                                                </a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </>
                        )}
                        {activeTab === "On-site Restocking" && (
                            <>
                                <p className="page-common-desc !text-[#000000] font-medium">
                                    Did you know that your first aid kits should
                                    be checked and audited every 12 months as a
                                    minimum requirement?
                                </p>
                                <p className="page-common-desc !text-[#000000] font-medium">
                                    With our on-site restocking service, we come
                                    to you to check and replenish your kits,
                                    create an inventory list of first aid items,
                                    affix a signed compliance sticker on your
                                    kits each visit, and offer ongoing
                                    compliance support. We can also provide
                                    courtesy reminders of when services are due
                                    to give you peace of mind.
                                </p>
                                <p className="page-common-desc !text-[#000000] font-medium">
                                    Simply fill out the form below and a member
                                    of our Restocking team will contact you to
                                    organise our on-site restocking service for
                                    your workplace.
                                </p>
                                <div className="common-sec">
                                    <h3 className="page-common-h4">
                                        On-site Restocking Enquiry
                                    </h3>
                                    <form className="space-y-6 mt-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full lg:w-[70%]">
                                            <div>
                                                <label className="form-label">
                                                    First name*
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Name"
                                                    className="form-input"
                                                />
                                            </div>
                                            <div>
                                                <label className="form-label">
                                                    Last name*
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Name"
                                                    className="form-input"
                                                />
                                            </div>
                                            <div>
                                                <label className="form-label">
                                                    Email*
                                                </label>
                                                <input
                                                    type="email"
                                                    placeholder="Enter Name"
                                                    className="form-input"
                                                />
                                            </div>
                                            <div>
                                                <label className="form-label">
                                                    Phone Number*
                                                </label>
                                                <input
                                                    type="tel"
                                                    placeholder="Enter Number"
                                                    className="form-input"
                                                />
                                            </div>
                                            <div>
                                                <label className="form-label">
                                                    Business name*
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Name"
                                                    className="form-input"
                                                />
                                            </div>
                                            <div>
                                                <label className="form-label">
                                                    Postcode*
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Number"
                                                    className="form-input"
                                                />
                                            </div>
                                            <div>
                                                <label className="form-label">
                                                    Number of employees*
                                                </label>
                                                <select className="form-input">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="border-t border-[#A4A4A4] pt-6 flex flex-col gap-4 md:gap-[22px]">
                                            <h4 className="text-[18px] md:text-[20px] text-[#000000] font-semibold">
                                                Booking Contact Details
                                            </h4>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full lg:w-[70%]">
                                                <div>
                                                    <label className="form-label">
                                                        Portable Workplace Kits*
                                                    </label>
                                                    <input
                                                        type="number"
                                                        placeholder="0"
                                                        className="form-input"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="form-label">
                                                        Wall Mount Kits*
                                                    </label>
                                                    <input
                                                        type="number"
                                                        placeholder="0"
                                                        className="form-input"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="form-label">
                                                        Small Kits*
                                                    </label>
                                                    <input
                                                        type="number"
                                                        placeholder="0"
                                                        className="form-input"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="form-label">
                                                        Automated External
                                                        Defibrillator (AED)*
                                                    </label>
                                                    <input
                                                        type="number"
                                                        placeholder="0"
                                                        className="form-input"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <p className="form-label !font-medium">
                                                    Have we restocked for this
                                                    site before?
                                                </p>
                                                <div className="flex flex-col gap-2">
                                                    <label className="flex items-center">
                                                        <input
                                                            type="radio"
                                                            name="assessment"
                                                            className="form-radio !text-[#038D96]"
                                                        />
                                                        <span className="ml-2 text-gray-700">
                                                            Yes
                                                        </span>
                                                    </label>
                                                    <label className="flex items-center">
                                                        <input
                                                            type="radio"
                                                            name="assessment"
                                                            defaultChecked
                                                            className="form-radio !text-[#038D96]"
                                                        />
                                                        <span className="ml-2 text-gray-700">
                                                            No
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="mt-6 md:mt-8 lg:mt-10 2xl:mt-[60px]">
                                                <a
                                                    href=""
                                                    className="primary-btn"
                                                >
                                                    Submit
                                                </a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </>
                        )}
                        {activeTab === "On-site Training" && (
                            <>
                                <p className="page-common-desc !text-[#000000] font-medium">
                                    Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit. Aenean commodo ligula eget
                                    dolor. Aenean massa. Cum sociis natoque
                                    penatibus et magnis dis parturient montes,
                                    nascetur ridiculus mus.  
                                </p>

                                <div className="common-sec">
                                    <h3 className="page-common-h4">
                                        On-Site Course Booking Enquiry
                                    </h3>
                                    <form className="space-y-6 mt-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            <div>
                                                <label className="form-label">
                                                    Name Of Your Organisation *
                                                </label>
                                                <select className="form-input">
                                                    <option>Lorem</option>
                                                    <option>Lorem</option>
                                                    <option>Lorem</option>
                                                    <option>Lorem</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="form-label">
                                                    Preferred Course Date
                                                </label>
                                                <select className="form-input">
                                                    <option>Lorem</option>
                                                    <option>Lorem</option>
                                                    <option>Lorem</option>
                                                    <option>Lorem</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="form-label">
                                                    Course Name
                                                </label>
                                                <select className="form-input">
                                                    <option>Lorem</option>
                                                    <option>Lorem</option>
                                                    <option>Lorem</option>
                                                    <option>Lorem</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="border-t border-[#A4A4A4] pt-6 flex flex-col gap-4 md:gap-[22px]">
                                            <h4 className="text-[18px] md:text-[20px] text-[#000000] font-semibold">
                                                Address of Training
                                            </h4>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full lg:w-1/2">
                                                <div>
                                                    <label className="form-label">
                                                        Unit Number? *
                                                    </label>
                                                    <select className="form-input">
                                                        <option>Lorem</option>
                                                        <option>Lorem</option>
                                                        <option>Lorem</option>
                                                        <option>Lorem</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className="form-label">
                                                        City? *
                                                    </label>
                                                    <select className="form-input">
                                                        <option>Lorem</option>
                                                        <option>Lorem</option>
                                                        <option>Lorem</option>
                                                        <option>Lorem</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className="form-label">
                                                        Postcode? *
                                                    </label>
                                                    <select className="form-input">
                                                        <option>Lorem</option>
                                                        <option>Lorem</option>
                                                        <option>Lorem</option>
                                                        <option>Lorem</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className="form-label">
                                                        State? *
                                                    </label>
                                                    <select className="form-input">
                                                        <option>Lorem</option>
                                                        <option>Lorem</option>
                                                        <option>Lorem</option>
                                                        <option>Lorem</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border-t border-[#A4A4A4] pt-6 flex flex-col gap-4 md:gap-[22px]">
                                            <h4 className="text-[18px] md:text-[20px] text-[#000000] font-semibold">
                                                Booking Contact Details
                                            </h4>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full lg:w-1/2">
                                                <div>
                                                    <label className="form-label">
                                                        Contact Name *
                                                    </label>
                                                    <select className="form-input">
                                                        <option>Lorem</option>
                                                        <option>Lorem</option>
                                                        <option>Lorem</option>
                                                        <option>Lorem</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className="form-label">
                                                        Contact Number *
                                                    </label>
                                                    <select className="form-input">
                                                        <option>Lorem</option>
                                                        <option>Lorem</option>
                                                        <option>Lorem</option>
                                                        <option>Lorem</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className="form-label">
                                                        Email *
                                                    </label>
                                                    <select className="form-input">
                                                        <option>Lorem</option>
                                                        <option>Lorem</option>
                                                        <option>Lorem</option>
                                                        <option>Lorem</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border-t border-[#A4A4A4] pt-6 flex flex-col gap-4 md:gap-[22px]">
                                            <h4 className="text-[18px] md:text-[20px] text-[#000000] font-semibold">
                                                All Hours Contact Details
                                            </h4>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full lg:w-1/2">
                                                <div>
                                                    <label className="form-label">
                                                        Contact Name *
                                                    </label>
                                                    <select className="form-input">
                                                        <option>Lorem</option>
                                                        <option>Lorem</option>
                                                        <option>Lorem</option>
                                                        <option>Lorem</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className="form-label">
                                                        Contact Number *
                                                    </label>
                                                    <select className="form-input">
                                                        <option>Lorem</option>
                                                        <option>Lorem</option>
                                                        <option>Lorem</option>
                                                        <option>Lorem</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className="form-label">
                                                        Email *
                                                    </label>
                                                    <select className="form-input">
                                                        <option>Lorem</option>
                                                        <option>Lorem</option>
                                                        <option>Lorem</option>
                                                        <option>Lorem</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border-t border-[#A4A4A4] pt-6 flex flex-col gap-4 md:gap-[22px]">
                                            <div className="space-y-2">
                                                <p className="form-label !font-medium">
                                                    Onsite induction required?
                                                </p>
                                                <div className="flex flex-col gap-2">
                                                    <label className="flex items-center">
                                                        <input
                                                            type="radio"
                                                            name="assessment"
                                                            className="form-radio !text-[#038D96]"
                                                        />
                                                        <span className="ml-2 text-gray-700">
                                                            Yes
                                                        </span>
                                                    </label>
                                                    <label className="flex items-center">
                                                        <input
                                                            type="radio"
                                                            name="assessment"
                                                            defaultChecked
                                                            className="form-radio !text-[#038D96]"
                                                        />
                                                        <span className="ml-2 text-gray-700">
                                                            No
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="form-label">
                                                    Any Other Enquiries?
                                                </label>
                                                <textarea
                                                    className="form-input w-full lg:!w-1/2"
                                                    rows="5"
                                                    name=""
                                                    id=""
                                                ></textarea>
                                            </div>
                                            <div className="mt-6 md:mt-8 lg:mt-10 2xl:mt-[60px]">
                                                <a
                                                    href=""
                                                    className="primary-btn"
                                                >
                                                    Submit
                                                </a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </>
                        )}
                        {activeTab === "Hire an AED" && (
                            <>
                                <h3 className="page-common-h3">
                                    Ensure Safety and Preparedness at Your Event
                                    or Workplace
                                </h3>
                                <p className="page-common-desc">
                                    Welcome to our AED Hire Service! Whether
                                    you're a corporate business looking to
                                    enhance workplace safety, or an event
                                    organiser aiming to ensure the well-being of
                                    your attendees, our AED hire service is here
                                    to support you.
                                </p>
                                <h3 className="page-common-h3">
                                    Why Hire an AED?
                                </h3>
                                <p className="page-common-desc">
                                    Cardiac arrest preparedness is crucial, as
                                    sudden cardiac arrest can happen anywhere,
                                    anytime. Having an AED on hand significantly
                                    increases the chances of survival and
                                    recovery. Ensuring the safety of your
                                    employees, clients, or guests by being
                                    prepared for medical emergencies provides
                                    peace of mind. Our AEDs are user-friendly
                                    and come with clear instructions, making
                                    them accessible for anyone to operate during
                                    an emergency.
                                </p>
                                <h3 className="page-common-h3">
                                    Who Should Hire an AED?
                                </h3>
                                <ul className="common-page-ul list-disc pl-4 mb-4 md:mb-6 xl:mb-8 2xl:mb-9">
                                    <li>
                                        <span>Corporate Businesses:</span>
                                         Enhance the safety of your workplace by
                                        being prepared for medical emergencies.
                                    </li>
                                    <li>
                                        <span>Event Organisers:</span> Ensure
                                        the safety of your attendees at large
                                        gatherings, sporting events,
                                        conferences, and more.
                                    </li>
                                    <li>
                                        <span>Community Groups:</span> Provide a
                                        safer environment for your community
                                        events, fairs, and festivals.
                                    </li>
                                    <li>
                                        <span>Public Venues</span> Equip your
                                        location with an AED to increase the
                                        safety for everyone who visits.
                                    </li>
                                </ul>
                                <h3 className="page-common-h3">
                                    Our Service IncludesEnsure Safety and
                                    Preparedness at Your Event or Workplace
                                </h3>
                                <p className="page-common-desc">
                                    Our service includes top-quality AED units
                                    that are reliable and easy to use, meeting
                                    all necessary safety standards. We offer
                                    flexible hire periods, whether you need an
                                    AED for a day, a week, or longer, to suit
                                    your specific needs. We provide basic online
                                    training on how to use the AED and offer
                                    ongoing support throughout the hire period,
                                    with quality accredited training available
                                    on request (POA). Each AED is thoroughly
                                    checked and maintained to ensure it is in
                                    perfect working condition before being hired
                                    out.
                                </p>
                                <h3 className="page-common-h3">
                                    How It Works:
                                </h3>
                                <ol className="common-page-ul list-decimal pl-4 mb-4 md:mb-6 xl:mb-8 2xl:mb-9">
                                    <li>
                                        Contact Us: Reach out to us to discuss
                                        your AED hire needs. We'll help you
                                        determine the best solution for your
                                        situation.
                                    </li>
                                    <li>
                                        Hire Agreement: Complete our
                                        straightforward hire agreement form,
                                        detailing your hire period and contact
                                        information.
                                    </li>
                                    <li>
                                        Delivery: We deliver the AED to your
                                        location
                                    </li>
                                    <li>
                                        Use and Return: Use the AED if needed
                                        during your hire period. At the end of
                                        the hire period, return the AED to us in
                                        the condition it was received.
                                    </li>
                                </ol>
                                <h3 className="page-common-h3">Get in Touch</h3>
                                <p className="page-common-desc">
                                    Ready to enhance the safety of your
                                    workplace or event? Contact us today to
                                    learn more about our AED hire services and
                                    how we can help you be prepared for medical
                                    emergencies.
                                </p>
                                <h3 className="page-common-h3">
                                    Contact Information
                                </h3>
                                <ul className="common-page-ul list-disc pl-4 mb-4 md:mb-6 xl:mb-8 2xl:mb-9">
                                    <li>
                                        <Link href="">Phone: 1300 78 5646</Link>
                                    </li>
                                    <li>
                                        <Link href="">
                                            Email: supplies@stjohnsa.com.aus
                                        </Link>
                                    </li>
                                </ul>
                            </>
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
