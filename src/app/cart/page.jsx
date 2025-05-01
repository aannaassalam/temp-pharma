"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import card4 from "../assets/images/card4.jpg";
import { FaStar, FaMapMarkerAlt, FaCalendarAlt, FaClock } from "react-icons/fa";

export default function Cart() {
  const [quantity, setQuantity] = useState([1, 1, 1, 1]);

  const handleQuantity = (index, delta) => {
    setQuantity((prev) => {
      const newQty = [...prev];
      newQty[index] = Math.max(1, newQty[index] + delta);
      return newQty;
    });
  };

  const subtotal = quantity.reduce((sum) => sum + 60, 80 * 4);
  const discount = 24;
  const tax = 61.99;
  const total = subtotal - discount + tax;

  return (
    <>
    <Navbar />
      <div className="p-4 md:p-10 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">My Cart</h1>
        <p className="mb-4 text-gray-600">1 workshop in your Cart</p>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6 pt-4 border-t border-[#D2D2D2]">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="flex flex-col md:flex-row items-start md:items-center gap-4 border-b border-[#D2D2D2] pb-4"
                >
                  <Image
                    className="w-full md:w-48 rounded"
                    src={card4}
                    alt="Workshop"
                  />
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold">
                      First Aid for Children: Lorem Ipsum
                    </h2>
                    <p className="text-gray-500 text-sm">by ABC hospital</p>
                    <div className="flex items-center text-yellow-400 my-1">
                      {Array(5)
                        .fill(0)
                        .map((_, idx) => (
                          <FaStar key={idx} />
                        ))}
                    </div>
                    <div className="flex gap-4 text-gray-600 text-sm">
                      <span className="flex items-center gap-1">
                        <FaMapMarkerAlt /> Mumbai
                      </span>
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt /> 4th February, 2025
                      </span>
                      <span className="flex items-center gap-1">
                        <FaClock /> 4:00p.m - 6:00p.m
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mt-4 md:mt-0 border border-[#038D96] rounded-[8px]">
                      <button
                        onClick={() => handleQuantity(i, -1)}
                        className="px-2 py-1 bg-teal-600 text-white rounded"
                      >
                        -
                      </button>
                      <span className="w-6 text-center">{quantity[i]}</span>
                      <button
                        onClick={() => handleQuantity(i, 1)}
                        className="px-2 py-1 bg-teal-600 text-white rounded"
                      >
                        +
                      </button>
                    </div>
                    <div className="text-teal-600 font-semibold mt-2 md:mt-0 pt-8 text-end">
                      $60
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className="bg-white border border-[#E4E7E9] p-6 rounded-md h-fit">
            <h2 className="text-xl font-semibold mb-4">Price details</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-[#5F6C72]">Sub-total</span>
                <span>$320</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5F6C72]">Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5F6C72]">Discount</span>
                <span>-$24</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5F6C72]">Tax</span>
                <span>$61.99</span>
              </div>
              <div className="border-t border-[#E4E7E9] pt-2 mt-2 font-bold flex justify-between">
                <span>Total</span>
                <span>${total.toFixed(2)} USD</span>
              </div>
            </div>
            <button className="w-full mt-4 bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
