"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import AboutBanner from "../assets/images/about-banner.jpg";
import Link from "next/link";
import circleImage from "../assets/images/circli-img.jpg";
import missionImg from "../assets/images/card3.png";

export default function About() {
  const [activeTab, setActiveTab] = useState("tab1");
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
            About Us
          </Link>
          <Link className="breadCrumbItem" href="#">
            Divisions & Training Venues
          </Link>
        </div>
        <h2 className="common-banner-title">About Us</h2>
        <div className="about-banner-overlay"></div>
        <div className="bg-[#038D961A]">
          <div className="container mx-auto">
            <div className="flex justify-evenly gap-4 flex-wrap py-4 md:py-7">
              <button
                className={`aboutTabBtn ${
                  activeTab === "tab1"
                    ? "!border-b-2 !border-[#038D96] !text-[#038D96]"
                    : ""
                }`}
                onClick={() => setActiveTab("tab1")}
              >
                About Us
              </button>
              <button
                className={`aboutTabBtn ${
                  activeTab === "tab2"
                    ? "!border-b-2 !border-[#038D96] !text-[#038D96]"
                    : ""
                }`}
                onClick={() => setActiveTab("tab2")}
              >
                Our Annual Reports
              </button>
              <button
                className={`aboutTabBtn ${
                  activeTab === "tab3"
                    ? "!border-b-2 !border-[#038D96] !text-[#038D96]"
                    : ""
                }`}
                onClick={() => setActiveTab("tab3")}
              >
                Our Divisions and Training Venues
              </button>
              <button
                className={`aboutTabBtn ${
                  activeTab === "tab4"
                    ? "!border-b-2 !border-[#038D96] !text-[#038D96]"
                    : ""
                }`}
                onClick={() => setActiveTab("tab4")}
              >
                Our Museum
              </button>
              <button
                className={`aboutTabBtn ${
                  activeTab === "tab5"
                    ? "!border-b-2 !border-[#038D96] !text-[#038D96]"
                    : ""
                }`}
                onClick={() => setActiveTab("tab5")}
              >
                Our Team
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto mt-6 md:mt-8 xl:mt-10">
          <div className="about-content-wrapper pt-10">
            {activeTab === "tab1" && (
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
                <h3 className="page-common-h3">Passionate About Wellbeing</h3>
                <p className="page-common-desc">
                  Every day St John SA volunteers attend community events right
                  across the state, providing health and medical services to
                  event goers. Our youth development program provides a range
                  of activities and experiences to develop the potential
                  of youth members, and for those who feel disconnected from
                  community life our range of social inclusion programs make a
                  world of difference through the simple gift of human contact.
                </p>
                <h3 className="page-common-h3">Saving Lives</h3>
                <p className="page-common-desc">
                  Through public access resources and training, we give people
                  the skills to help save a loved one, friend, work colleague or
                  passer-by, should accident or disaster strike. Couple this
                  with the right first aid kits and equipment and you have more
                  hands in the community able to help themselves and others - a
                  resilient South Australia.
                </p>
                <h3 className="page-common-h3">In Times Of Disaster</h3>
                <p className="page-common-desc">
                  As part of the State Emergency Management Plan, our taskforce
                  of qualified volunteers stand alongside emergency services in
                  preparing for, responding to, and helping the people affected
                  recover from disaster.
                </p>
                <h3 className="page-common-h3">We Are Not-For-Profit</h3>
                <p className="page-common-desc">
                  St John is a volunteer based organisation run entirely for the
                  wellbeing of the South Australian community. As a charity and
                  registered not-for-profit, we are reliant on public donations,
                  together with the proceeds from commercial training and
                  product sales to fund humanitarian services.
                </p>
                <div className="common-sec">
                  <h3 className="common-sec-title">Our Values</h3>
                  <div className="about-circle-sec mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 2xl:gap-x-[120px] 2xl:gap-y-[52px]">
                    <div className="about-circle">
                      <Image src={circleImage} alt="" />
                      <h3>TEAMWORK</h3>
                      <p>
                        Our people challenge themselves to be the best they can,
                        and operate in a spirit of Teamwork
                      </p>
                    </div>
                    <div className="about-circle">
                      <Image src={circleImage} alt="" />
                      <h3>TEAMWORK</h3>
                      <p>
                        Our people challenge themselves to be the best they can,
                        and operate in a spirit of Teamwork
                      </p>
                    </div>
                    <div className="about-circle">
                      <Image src={circleImage} alt="" />
                      <h3>TEAMWORK</h3>
                      <p>
                        Our people challenge themselves to be the best they can,
                        and operate in a spirit of Teamwork
                      </p>
                    </div>
                    <div className="about-circle">
                      <Image src={circleImage} alt="" />
                      <h3>TEAMWORK</h3>
                      <p>
                        Our people challenge themselves to be the best they can,
                        and operate in a spirit of Teamwork
                      </p>
                    </div>
                    <div className="about-circle">
                      <Image src={circleImage} alt="" />
                      <h3>TEAMWORK</h3>
                      <p>
                        Our people challenge themselves to be the best they can,
                        and operate in a spirit of Teamwork
                      </p>
                    </div>
                    <div className="about-circle">
                      <Image src={circleImage} alt="" />
                      <h3>TEAMWORK</h3>
                      <p>
                        Our people challenge themselves to be the best they can,
                        and operate in a spirit of Teamwork
                      </p>
                    </div>
                  </div>
                </div>
                <div className="common-sec">
                  <h3 className="common-sec-title">Our Values</h3>
                  <div className="flex justify-center">
                    <Link
                      href=""
                      className="common-sec-desc underline underline-offset-1 !text-center"
                    >
                      View or Download our Strategic Plan
                    </Link>
                  </div>
                  <figure className="w-full h-[320px] md:h-[400px] xl:h-[521px] object-cover flex justify-center mt-6">
                    <Image
                      className="w-full md:w-1/3 h-full object-cover"
                      src={circleImage}
                      alt=""
                    />
                  </figure>
                </div>
                <div className="common-sec">
                  <h2 className="common-sec-title">Supporting the Community</h2>
                  <p className="page-common-desc">
                    When you think of St John Ambulance, 11th Century armoured
                    Crusaders may not be the first image that comes to mind. It
                    was, however, these knights that helped the holy brothers in
                    Jerusalem care for the sick and injured, also known as
                    Knights Hospitallers. It was this partnership that would
                    later evolve into the Order of St John.
                  </p>
                  <p className="page-common-desc">
                    Fast forward some 800 years to 1877 when St John Ambulance
                    was established in England, with uniformed brigades of
                    volunteers teaching and providing first aid to members of
                    the public. Just over a decade later, the Order of St John
                    was granted a Royal Order of Chivalry by the Queen.
                  </p>
                  <p className="page-common-desc">
                    The movement traversed the vast Indian Ocean, bringing St
                    John Ambulance to Australia in 1883 and South Australia in
                    1885. Since then, the organisation has evolved from its
                    first aid origins to establishing the state ambulance
                    service in 1951. It later transitioned the service over to
                    SA Ambulance Service in 1992 so that St John could once
                    again focus on first aid provision, social inclusion and
                    youth development.
                  </p>
                  <p className="page-common-desc">
                    These focuses remain the primary services of the modern day
                    St John Ambulance SA.
                  </p>
                </div>
              </>
            )}
            {activeTab === "tab2" && (
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
              </>
            )}
            {activeTab === "tab3" && (
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
            {activeTab === "tab4" && (
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
            {activeTab === "tab5" && (
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
