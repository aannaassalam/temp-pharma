"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import cardImage from "../assets/images/card1.jpg";
import Link from "next/link";
import Image from "next/image";
import productImage from "../assets/images/card2.png";

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const results = [
    "First Aid Kit | Half day program",
    "First Aid Kit",
    "First Aid Kit",
    "First Aid Kit",
    "First Aid Kit",
  ];

  const filteredResults = results.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <section className="pt-10 md:pt-12 lg:pt-16 2xl:pt-[74pxs] overflow-hidden">
        <div className="container mx-auto">
          <div className="flex justify-center items-center gap-4 xl:gap-7 mb-4 md:mb-6">
            <div className="flex gap-2 md:gap-3">
              <input type="checkbox" />
              <span className="text-[#606060] text-[16px] md:text-[18px] font-bold">
                Courses
              </span>
            </div>
            <div className="flex gap-2 md:gap-3">
              <input type="checkbox" />
              <span className="text-[#606060] text-[16px] md:text-[18px] font-bold">
                Products
              </span>
            </div>
            <div className="flex gap-2 md:gap-3">
              <input type="checkbox" />
              <span className="text-[#606060] text-[16px] md:text-[18px] font-bold">
                Articles
              </span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-lg relative">
              <div className="flex items-center border border-gray-300 rounded-xl px-4 py-2">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setShowDropdown(true);
                  }}
                  placeholder="Search here"
                  className="flex-1 outline-none text-lg"
                />
                <Search className="text-[#038D96]" />
              </div>

              {showDropdown && searchTerm.length > 0 && (
                <div className="absolute w-full bg-white border border-blue-400 rounded-xl mt-2 z-50 overflow-hidden">
                  {filteredResults.length > 0 ? (
                    filteredResults.map((result, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 text-[#777777] md:text-[16px] hover:text-[#000000] hover:bg-[#e6f4f5]"
                      >
                        {result}
                      </div>
                    ))
                  ) : (
                    <div className="px-4 py-2 text-gray-500">
                      No results found
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="mb-4 md:mb-6 lg:mb-8">
            <div className="flex items-center justify-between">
              <h3 className="section-title">Courses</h3>
              <button className="secondary-btn">View all</button>
            </div>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={3.8}
              className="default-card-swiper mt-8 !w-[120%]"
            >
              <SwiperSlide>
                <div className="default-card relative">
                  <span className="default-card-status">Online</span>
                  <figure>
                    <Image src={cardImage} alt="card1" />
                  </figure>
                  <div className="default-card-detail">
                    <h3 className="default-card-title">First Aid</h3>
                    <p className="default-card-desc">
                      Lorem ipsum dolor sit amet, consectetur elit, sed
                      doeiusmod tempor
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
                <div className="default-card relative">
                  <span className="default-card-status">Online</span>
                  <figure>
                    <Image src={cardImage} alt="card1" />
                  </figure>
                  <div className="default-card-detail">
                    <h3 className="default-card-title">First Aid</h3>
                    <p className="default-card-desc">
                      Lorem ipsum dolor sit amet, consectetur elit, sed
                      doeiusmod tempor
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
                <div className="default-card relative">
                  <span className="default-card-status">Online</span>
                  <figure>
                    <Image src={cardImage} alt="card1" />
                  </figure>
                  <div className="default-card-detail">
                    <h3 className="default-card-title">First Aid</h3>
                    <p className="default-card-desc">
                      Lorem ipsum dolor sit amet, consectetur elit, sed
                      doeiusmod tempor
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
                <div className="default-card relative">
                  <span className="default-card-status">Online</span>
                  <figure>
                    <Image src={cardImage} alt="card1" />
                  </figure>
                  <div className="default-card-detail">
                    <h3 className="default-card-title">First Aid</h3>
                    <p className="default-card-desc">
                      Lorem ipsum dolor sit amet, consectetur elit, sed
                      doeiusmod tempor
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
                <div className="default-card relative">
                  <span className="default-card-status">Online</span>
                  <figure>
                    <Image src={cardImage} alt="card1" />
                  </figure>
                  <div className="default-card-detail">
                    <h3 className="default-card-title">First Aid</h3>
                    <p className="default-card-desc">
                      Lorem ipsum dolor sit amet, consectetur elit, sed
                      doeiusmod tempor
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
                <div className="default-card relative">
                  <span className="default-card-status">Online</span>
                  <figure>
                    <Image src={cardImage} alt="card1" />
                  </figure>
                  <div className="default-card-detail">
                    <h3 className="default-card-title">First Aid</h3>
                    <p className="default-card-desc">
                      Lorem ipsum dolor sit amet, consectetur elit, sed
                      doeiusmod tempor
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
                <div className="default-card relative">
                  <span className="default-card-status">Online</span>
                  <figure>
                    <Image src={cardImage} alt="card1" />
                  </figure>
                  <div className="default-card-detail">
                    <h3 className="default-card-title">First Aid</h3>
                    <p className="default-card-desc">
                      Lorem ipsum dolor sit amet, consectetur elit, sed
                      doeiusmod tempor
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
          </div>
          <div className="mb-4 md:mb-6 lg:mb-8">
            <div className="flex items-center justify-between">
              <h3 className="section-title">Products</h3>
              <button className="secondary-btn">View all</button>
            </div>
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
          </div>
          <div className="mb-4 md:mb-6 lg:mb-8">
            <div className="flex items-center justify-between">
              <h3 className="section-title">Products</h3>
              <button className="secondary-btn">View all</button>
            </div>
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
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
