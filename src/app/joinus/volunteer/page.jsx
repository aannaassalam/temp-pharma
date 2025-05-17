"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import AboutBanner from "../../assets/images/about-banner.png";
import Link from "next/link";

export default function Volunteer() {
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
                        Join Us
                    </Link>
                    <Link className="breadCrumbItem" href="#">
                        Become a Volunteer
                    </Link>
                </div>
                <h2 className="common-banner-title">Become a Volunteer</h2>
                <div className="about-banner-overlay"></div>
            </section>
            <section>
                <div className="container mx-auto">
                    <p className="page-common-desc !text-center">
                        Become part of one of Australia’s most trusted
                        charities, and join a team of passionate
                        volunteers! There are many ways to get involved with St
                        John SA and contribute to making your community a better
                        place. You can read more about the various volunteering
                        opportunities available with St John SA here. To start
                        your volunteering journey with St John SA, simply fill
                        in the enquiry form below and a member of our team will
                        be in contact with you shortly. We look forward to
                        hearing from you!
                    </p>
                    <h3 className="page-common-h3 !text-center">
                        Volunteer Enquiry
                    </h3>
                    <div className="w-full flex justify-center">
                        <div className="flex flex-col gap-6 mt-6">
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
                            </div>
                            <div className="grid grid-cols-1 gap-6 w-full lg:w-1/2">
                                <div>
                                    <label className="form-label">
                                        Any Other Enquiries?
                                    </label>
                                    <textarea
                                        className="form-input w-full"
                                        rows="5"
                                        name=""
                                        id=""
                                    ></textarea>
                                </div>
                            </div>
                            <p className="text-[16px] md:text-[18px] font-medium text-[#4A4A4A]">
                                I understand that all St John applicants
                                selected as prospective members, will be
                                required to undergo a National Police Check, and
                                provide a Working With Children Check, prior to
                                being formally offered a role.I understand that
                                clinical volunteering involves mandatory minimum
                                training and event participation
                                requirements.Important information: Please note,
                                you must have the right to volunteer in
                                Australia to apply for these roles. For more
                                information, contact 
                                <Link
                                    className="underline underline-offset-2"
                                    href=""
                                >
                                    www.immi.gov.au
                                </Link>
                                .
                            </p>
                            <div className="flex items-center gap-1">
                                <input type="checkbox" />
                                <span className="text-[16px] md:text-[18px] font-medium text-[#4A4A4A] mt-1">
                                    I have read and agree to the above
                                    conditions.
                                </span>
                            </div>
                            <div className="mt-6 md:mt-8 lg:mt-10 2xl:mt-[60px]">
                                <a href="" className="primary-btn">
                                    Submit
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
