"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import AboutBanner from "../../assets/images/about-banner.png";
import Link from "next/link";
import circleImage from "../../assets/images/circli-img.jpg";

export default function Vacant() {
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
                        Positions Vacant
                    </Link>
                </div>
                <h2 className="common-banner-title">Positions Vacant</h2>
                <div className="about-banner-overlay"></div>
            </section>
            <section>
                <div className="container mx-auto">
                    <p className="page-common-desc !text-center">
                        Being a part of St John SA means you have access to
                        ongoing professional development, extensive training
                        resources, progressive terms and conditions of
                        employment and volunteering, and work with others who
                        share the St John values and enjoy supporting the
                        community.
                    </p>
                    <p className="page-common-desc !text-center !font-bold text-[#4A4A4A]">
                        NOW HIRING: Commercial First Aid Trainer positions
                        available
                    </p>
                    <p className="page-common-desc !text-center !font-bold text-[#4A4A4A]">
                        Click to view the prospectus below
                    </p>
                    <div className="mb-6 flex justify-center">
                        <Image
                            className="w-[220px] h-[248px]"
                            src={circleImage}
                            alt=""
                        />
                    </div>
                    <h3 className="page-common-h3 !text-center">
                        Current Available Positions
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 xl:gap-20 2xl:gap-[140px] mb-10 md:mb-12 2xl:mb-16 lg:px-[200px]">
                        <div className="about-circle">
                            <Image src={circleImage} alt="" />
                            <h3>Commercial First Aid Trainer</h3>
                        </div>
                        <div className="about-circle">
                            <Image src={circleImage} alt="" />
                            <h3> Expressions of Interest - Event Medic</h3>
                        </div>
                        <div className="about-circle">
                            <Image src={circleImage} alt="" />
                            <h3> Expressions of Interest - Event Medic</h3>
                        </div>
                        <div className="about-circle">
                            <Image src={circleImage} alt="" />
                            <h3>Home Support Worker</h3>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
