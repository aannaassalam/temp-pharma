"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import AboutBanner from "../assets/images/about-banner.jpg";
import Link from "next/link";

export default function Faq() {
  return (
    <>
      <Navbar />
      <section className="relative w-full mb-[60px] h-[240px]">
        <Image className="w-full h-full" src={AboutBanner} alt="banner" />
        <div className="breadCrumb absolute top-8 left-20 mx-auto z-10">
          <Link className="breadCrumbItem" href="#">
            Home
          </Link>
          <Link className="breadCrumbItem" href="#">
            Services
          </Link>
          <Link className="breadCrumbItem" href="#">
            Frequently Asked Questions
          </Link>
        </div>
        <h2 className="common-banner-title">Frequently Asked Questions</h2>
        <div className="about-banner-overlay"></div>
      </section>

      <section>
        <div className="container mx-auto">
          <h3 className="page-common-h3 !uppercase">
            Q: CAN YOUR TEAM MEMBERS OFFER MORE THAN FIRST AID?
          </h3>
          <p className="page-common-desc">
            A: St John Ambulance SA offers Health and Medical Services well
            beyond first aid. Our tailored and bespoke service offering extends
            to operational team members who are highly skilled and trained in
            emergency medical services including oxygen resuscitation and basic
            life support. Our extensive pool of Registered Health Care
            Professionals such as Registered Paramedics and Nurses offer a high
            level of clinical capability to best support the needs of your
            event.
          </p>
          <h3 className="page-common-h3 !uppercase">
            Q:  WHY DO I NEED TO PAY FOR YOUR SERVICE?  
          </h3>
          <p className="page-common-desc">
            A: St John Ambulance SA uses an integrated workforce powered by paid
            and volunteer team members. Our cost-recovery model helps us cover
            essential expenses such as uniforms, insurance, and equipment,
            ensuring a safe and well-equipped environment to best support your
            event. Due to the level of expenses incurred, St John Ambulance SA
            is not in a position to provide free-of-charge events at this time. 
          </p>
          <h3 className="page-common-h3 !uppercase">
            Q: MY EVENT HAS GOVERNING REGULATIONS, WILL ST JOHN AMBULANCE SA
            FOLLOW THESE REGULATIONS? 
          </h3>
          <p className="page-common-desc">
            A: Correct - as part of your booking, we ask that you provide us
            with all required information including governing regulations for
            consideration during the risk assessment process. Our Registered
            Paramedics will review the Governing Regulations and provide a quote
            that aligns with these requirements. Where there is ambiguity within
            the governing regulations or no regulations exist, our Registered
            Paramedics will conduct an in-depth Risk Assessment Process to
            ensure we provide a quote as required for the risk profile of your
            event.
          </p>
          <h3 className="page-common-h3 !uppercase">
            Q: I NEED A QUOTE AS SOON AS POSSIBLE. ARE YOU ABLE TO PROVIDE ME
            WITH A QUOTE OVER THE PHONE?
          </h3>
          <p className="page-common-desc">
            A: To provide you with the most accurate quote possible, we do
            require the online booking form to be completed. This helps us to
            ensure we have all the correct information to support your event and
            progresses your booking quicker.  If you require a quote within a
            short timeframe, submit an online booking form and then contact us
            at HMS.Events@stjohnsa.com.au to let us know your timeframe. In
            every instance, we will do our best to meet certain time
            restrictions.  
          </p>
          <h3 className="page-common-h3 !uppercase">
            Q: MY EVENT IS COMING UP IN A COUPLE DAYS – IS ST JOHN AMBULANCE SA
            ABLE TO ASSIST? 
          </h3>
          <p className="page-common-desc">
            A: Yes! We do understand that things pop up from time to time. While
            we do ask for a minimum of two months’ notice for Health and Medical
            Services bookings, we understand this is not always possible and
            will do our best to accommodate all requests. Fees may apply for
            last-minute requests and will be communicated to you during the
            quoting process.  For urgent bookings, we still require the online
            booking form to be completed and give us a call on (08) 8306 6941 to
            let us know. Once this has been received, we can begin processing
            your booking request.  
          </p>
          <h3 className="page-common-h3 !uppercase">
            Q: WHAT IF THERE ARE NO VOLUNTEERS AVAILABLE ON THE DATE OF MY
            EVENT?  
          </h3>
          <p className="page-common-desc">
            A: We will always do our best to secure volunteer members to attend
            your event. However, in the case where we are completely booked out,
            we do have an option for casual staff pool to supplement our
            volunteer member numbers. Please note that the casual staff pool is
            limited and there is no guarantee they will be able to support the
            event. It’s important to note that the earlier we receive a booking
            request, the more likely we can secure volunteers and/or casual
            staff.  
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
