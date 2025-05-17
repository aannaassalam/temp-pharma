"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import AboutBanner from "../assets/images/about-banner.png";
import Link from "next/link";
import circleImage from "../assets/images/circli-img.jpg";

export default function JoinUs() {
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
                </div>
                <h2 className="common-banner-title">Join Us</h2>
                <div className="about-banner-overlay"></div>
            </section>
            <section>
                <div className="container mx-auto">
                    <h3 className="page-common-h3 !text-center">
                        Step-by-Step Guide
                    </h3>
                    <p className="page-common-desc !text-center">
                        Joining St John Ambulance SA as a volunteer is a
                        rewarding way to make a difference in your community.
                    </p>
                    <h3 className="page-common-h3 !text-center">Our Values</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-16 xl:gap-20 2xl:gap-[140px] mb-10 md:mb-12 2xl:mb-16">
                        <div className="about-circle">
                            <Image src={circleImage} alt="" />
                            <h3>Step 1: Explore Rules</h3>
                            <p>
                                Browse our volunteering opportunities and find a
                                role that suits you.
                            </p>
                        </div>
                        <div className="about-circle">
                            <Image src={circleImage} alt="" />
                            <h3>Step 2 : Apply Online</h3>
                            <p>Complete our simple online application form.</p>
                        </div>
                        <div className="about-circle">
                            <Image src={circleImage} alt="" />
                            <h3>Step 3 : Get Trained</h3>
                            <p>
                                Attend our comprehensive training sessions to
                                prepare for your role.
                            </p>
                        </div>
                    </div>
                    <h3 className="page-common-h3 !text-center">
                        Application Process
                    </h3>
                    <ol className="common-page-ul list-decimal pl-4 mb-4 md:mb-6 xl:mb-8 2xl:mb-9">
                        <li>Submit an enquiry online</li>
                        <li>
                            Speak with one of our volunteer support team to
                            explore the right volunteering pathway for you
                        </li>
                        <li>
                            Attend an online or in person information session
                            and interview with your team of choice
                        </li>
                        <li>Submit application and references</li>
                        <li>
                            Apply for a volunteer Working with Children Check
                            and National Police Clearance (St John will cover
                            the costs)
                        </li>
                        <li>Sign your Volunteer Engagement Agreement</li>
                    </ol>
                    <h3 className="page-common-h3 !text-center">
                        Ready to make a difference?
                    </h3>
                    <p className="page-common-desc !text-center">
                        Volunteering with St John Ambulance SA offers an
                        opportunity to learn valuable skills, meet new people,
                        and give back to the community. We welcome individuals
                        from all walks of life and look forward to having you
                        join our dedicated team.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-16 xl:gap-20 2xl:gap-[140px]">
                        <a className="primary-btn" href="">
                            View Volunteering Roles
                        </a>
                        <a className="primary-btn" href="">
                            Become a Volunteer
                        </a>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
