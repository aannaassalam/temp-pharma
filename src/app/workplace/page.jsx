"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import AboutBanner from "../assets/images/about-banner.jpg";
import Link from "next/link";
import circleImage from "../assets/images/circli-img.jpg";
import missionImg from "../assets/images/card3.png";

export default function Workplace() {
  const [activeTab, setActiveTab] = useState("Workplace Services");
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
                onClick={() => setActiveTab("Workplace Services")}
              >
                Workplace Services
              </button>
              <button
                className={`aboutTabBtn ${
                  activeTab === "Workplace Assessment"
                    ? "!border-b-2 !border-[#038D96] !text-[#038D96]"
                    : ""
                }`}
                onClick={() => setActiveTab("Workplace Assessment")}
              >
                Workplace Assessment
              </button>
              <button
                className={`aboutTabBtn ${
                  activeTab === "On-site Restocking"
                    ? "!border-b-2 !border-[#038D96] !text-[#038D96]"
                    : ""
                }`}
                onClick={() => setActiveTab("On-site Restocking")}
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
                  St John SA offers a range of workplace first aid services and
                  products to help keep you first aid compliant in the
                  workplace. Whether you are unsure about the first aid risks
                  and requirements for your workplace, need your first aid kits
                  serviced and restocked, or your team requires first aid
                  training, St John SA is your one-stop-shop for all things
                  first aid in the workplace.
                </p>
                <h3 className="page-common-h3">WORKPLACE ASSESSMENT</h3>
                <p className="page-common-desc !mb-0">
                  To help you understand the first aid risks and requirements of
                  your workplace, we offer a complimentary Workplace First Aid
                  Assessment, valued at $199.
                </p>
                <Link className="page-common-cta" href="">
                  Find out more
                </Link>

                <div className="common-sec">
                  <h3 className="page-common-h3">ON-SITE RESTOCKING</h3>
                  <p className="page-common-desc !mb-0">
                    To make life easy for you, we offer a mobile first aid kit
                    restocking service, so you never have to worry about when to
                    replenish your first aid kit contents again.
                  </p>
                  <Link className="page-common-cta" href="">
                    Find out more
                  </Link>
                </div>
                <div className="common-sec">
                  <h3 className="page-common-h3">ON-SITE TRAINING</h3>
                  <p className="page-common-desc !mb-0">
                    First aid training is a requirement of many job roles. Why
                    not train your whole team at once with our on-site training
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
                  To determine the first aid requirements for your workplace,
                  fill out the quick and easy form below and we will get in
                  contact with you to book a free Workplace First Aid
                  Assessment.  A St John First Aid Advisor will come to your
                  workplace and conduct a thorough risk assessment to determine
                  the first aid training, products and equipment required to
                  meet compliance standards. After completing the assessment, a
                  confidential report will be provided detailing guidelines and
                  recommendations, ensuring that the process of first aid
                  compliance is made smooth and easy for your workplace. If you
                  work in a remote area, we can assist you to work through this
                  assessment yourself.
                </p>
                <div className="common-sec">
                    <h3 className="page-common-h4">Workplace First Aid Assessment Enquiry</h3>
                    <form className="space-y-6">
        {/* Grid for name, email, phone, etc. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">First name*</label>
            <input type="text" placeholder="Enter Name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-200" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Last name*</label>
            <input type="text" placeholder="Enter Name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-200" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email*</label>
            <input type="email" placeholder="Enter Name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-200" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number*</label>
            <input type="tel" placeholder="Enter Number" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-200" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Business name*</label>
            <input type="text" placeholder="Enter Name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-200" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Postcode*</label>
            <input type="text" placeholder="Enter Number" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-200" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Number of employees*</label>
            <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-200">
              <option>Enter Name</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>

        {/* Radio group for assessment */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700">Have you previously completed a Workplace First Aid Assessment?</p>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input type="radio" name="assessment" className="form-radio text-blue-600" />
              <span className="ml-2 text-gray-700">Yes</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="assessment" defaultChecked className="form-radio text-blue-600" />
              <span className="ml-2 text-gray-700">No</span>
            </label>
          </div>
        </div>

        {/* Risk selection (not visible in screenshot but mentioned) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mt-4">Is your workplace high or low risk?</label>
          {/* Options can be added here if needed */}
        </div>
      </form>
                </div>
              </>
            )}
            {activeTab === "On-site Restocking" && (
              <>
                <p className="page-common-desc">
                  St John Ambulance SA has volunteer divisions statewide, where
                  members meet for training and provide first aid at local
                  events. Many divisions also support youth development and
                  serve as public first aid training venues, extending access to
                  regional areas.
                  <Link className="underline underline-offset-1" href="#">
                    Find your nearest St John division below.
                  </Link>
                </p>
                <div className="common-sec">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-10 2xl:gap-12">
                    <div className="about-box-list">
                      <h3 className="page-common-h3 !text-center">
                        Adult Divisions
                      </h3>
                      <div className="about-box">
                        <Link href="">Adelaide Central</Link>
                        <Link href="">Arno Bay</Link>
                        <Link href="">Band</Link>
                        <Link href="">Campbelltown</Link>
                        <Link href="">Event Comms</Link>
                        <Link href="">Gawler</Link>
                        <Link href="">Limestone Coast</Link>
                        <Link href="">Logistics</Link>
                        <Link href="">Lower North</Link>
                        <Link href="">Mitcham/Colonel Light Gardens</Link>
                        <Link href="">Mt Barker</Link>
                        <Link href="">Murray Bridge</Link>
                        <Link href="">Noarlunga</Link>
                        <Link href="">Playford</Link>
                        <Link href="">Prospect</Link>
                        <Link href="">Port Lincoln</Link>
                        <Link href="">Port Pirie</Link>
                        <Link href="">Unley</Link>
                        <Link href="">Victor Harbor</Link>
                        <Link href="">West Torrens</Link>
                        <Link href="">Whyalla</Link>
                        <Link href="">Woodville</Link>
                      </div>
                    </div>

                    <div className="about-box-list">
                      <h3 className="page-common-h3 !text-center">
                        Youth Divisions
                      </h3>
                      <div className="about-box">
                        <Link href="">Blackwood</Link>
                        <Link href="">Campbelltown</Link>
                        <Link href="">Gawler</Link>
                        <Link href="">Mallala</Link>
                        <Link href="">Marion</Link>
                        <Link href="">Mitcham/Colonel Light Gardens</Link>
                        <Link href="">Mt Barker</Link>
                        <Link href="">Mt Gambier</Link>
                        <Link href="">Noarlunga</Link>
                        <Link href="">Playford</Link>
                        <Link href="">Prospect</Link>
                        <Link href="">Port Adelaide</Link>
                        <Link href="">Port Pirie</Link>
                        <Link href="">Tea Tree Gully</Link>
                        <Link href="">Unley</Link>
                        <Link href="">West Torrens</Link>
                        <Link href="">Whyalla</Link>
                        <Link href="">Woodville</Link>
                      </div>
                    </div>

                    <div className="about-box-list">
                      <h3 className="page-common-h3 !text-center">
                        Training Venues
                      </h3>
                      <div className="about-box">
                        <Link href="">
                          Adelaide CBD (Master Builders Association)
                        </Link>
                        <Link href="">47 South Tce, Adelaide SA 5000</Link>
                        <Link href="">Berri (Berri Hotel)</Link>
                        <Link href="">Riverview Driver, Berri SA 5343</Link>
                        <Link href="">Clare (St John Centre)</Link>
                        <Link href="">324 Main Rd, Clare SA 5034</Link>
                        <Link href="">Elizabeth (St John Centre)</Link>
                        <Link href="">81 Elizabeth Way, Elizabeth SA 5112</Link>
                        <Link href="">
                          Evanston (Gawler & Barossa Jockey club)
                        </Link>
                        <Link href="">51 Barnet Rd, Evanston SA 5116</Link>
                        <Link href="">Kadina (Accustom Driving School)</Link>
                        <Link href="">
                          43 Russell Street, Matta Flat SA 5554
                        </Link>
                        <Link href="">Kent Town (Econo Lodge)</Link>
                        <Link href="">
                          27 Dequetteville Terrace, Kent Town SA 5067
                        </Link>
                        <Link href="">Marion (Club Marion)</Link>
                        <Link href="">262 Sturt Road, Marion SA 5043</Link>
                        <Link href="">Modbury (Sferas on the Park)</Link>
                        <Link href="">191 Reservoir Road, Modbury SA 5092</Link>
                        <Link href="">Morphett Vale (St John Centre)</Link>
                        <Link href="">
                          26 Flaxmill Road, Morphett Vale SA 5168
                        </Link>
                        <Link href="">Mount Barker (St John Centre)</Link>
                        <Link href="">3 Kookaburra Lane, Totness SA 5250</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            {activeTab === "On-site Training" && (
              <>
                <p className="page-common-desc">
                  We highly value the historical heritage of St John and its
                  evolution throughout the ages, which has enabled it to grow
                  into the modern-day organisation we champion today. In order
                  to capture and document this history, the St John Historical
                  Society of SA was established in 1988 and is part of a network
                  of St John Historical Societies throughout Australia. Each
                  year a Historical Seminar is held where the societies gather
                  and subsequently publish an annual journal. It is a
                  fascinating record of St John history that ensures these
                  important stories and moments in time are documented for
                  future generations to enjoy.
                </p>
                <p className="page-common-desc">
                  Our dedicated team of Historical Society volunteers work
                  tirelessly to collect, manage, preserve and research artefacts
                  that reflect the history of the Order of St John and St John
                  Ambulance. Many of these elements are on display in the St
                  John SA Historical Museum, which is open for members of the
                  public to enjoy. Coupled with the extensive knowledge our
                  Historical Society volunteers have of St John, the museum is a
                  treasure trove of St John history and memorabilia.
                </p>
                <p className="page-common-desc">
                  At the beginning of 2021, our museum moved to its new location
                  in Brighton. Our volunteers are very excited to welcome you
                  for a tour of the interesting artefacts and pieces of St John
                  history.
                </p>
                <p className="page-common-desc">
                  Address: 7 Arundel Road, Brighton
                </p>
                <p className="page-common-desc">Visiting hours</p>
                <p className="page-common-desc">Fridays 10:30am to 12:30pm</p>
                <p className="page-common-desc">Sundays 1:30pm to 3:30pm</p>
                <p className="page-common-desc">
                  Group bookings can be made at any mutually agreed time. To
                  arrange a time, please call 0456 053 908.
                </p>
              </>
            )}
            {activeTab === "Hire an AED" && (
              <>
                <p className="page-common-desc">
                  St John Ambulance SA is governed by a Board of Directors who
                  are responsible to the members for the performance of the
                  incorporated association, ensuring St John is appropriately
                  managed and provides leading first aid and community services
                  consistent with the culture and values of The Order of St
                  John.
                </p>
                <p className="page-common-desc">
                  Board members freely donate their time and professional
                  expertise to assist in the successful management of St John
                  Ambulance SA.
                </p>
                <p className="page-common-desc">
                  Day-to-day management of the organisation is led by the Chief
                  Executive Officer and Executive Management team. General
                  Managers head their respective areas of the organisation,
                  supported by departmental managers and their teams.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 2xl:gap-x-[78px] 2xl:gap-y-9">
                  <div className="about-team-card">
                    <Image src={missionImg} alt="" />
                    <h2 className="page-common-h3">Mary Patetsos</h2>
                    <p className="page-common-h3 !text-[#A4A4A4] !font-bold">
                      Chair of the Board
                    </p>
                  </div>
                  <div className="about-team-card">
                    <Image src={missionImg} alt="" />
                    <h2 className="page-common-h3">Mary Patetsos</h2>
                    <p className="page-common-h3 !text-[#A4A4A4] !font-bold">
                      Chair of the Board
                    </p>
                  </div>
                  <div className="about-team-card">
                    <Image src={missionImg} alt="" />
                    <h2 className="page-common-h3">Mary Patetsos</h2>
                    <p className="page-common-h3 !text-[#A4A4A4] !font-bold">
                      Chair of the Board
                    </p>
                  </div>
                  <div className="about-team-card">
                    <Image src={missionImg} alt="" />
                    <h2 className="page-common-h3">Mary Patetsos</h2>
                    <p className="page-common-h3 !text-[#A4A4A4] !font-bold">
                      Chair of the Board
                    </p>
                  </div>
                  <div className="about-team-card">
                    <Image src={missionImg} alt="" />
                    <h2 className="page-common-h3">Mary Patetsos</h2>
                    <p className="page-common-h3 !text-[#A4A4A4] !font-bold">
                      Chair of the Board
                    </p>
                  </div>
                  <div className="about-team-card">
                    <Image src={missionImg} alt="" />
                    <h2 className="page-common-h3">Mary Patetsos</h2>
                    <p className="page-common-h3 !text-[#A4A4A4] !font-bold">
                      Chair of the Board
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
