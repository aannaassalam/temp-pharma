"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart, Search, ChevronDown } from "lucide-react";
import logo from "../assets/images/logo.png";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex gap-9">
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src={logo}
                  alt="LIFE SAVERS FIRST AID"
                  width={150}
                  height={50}
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden xl:flex space-x-6">
              <div className="relative group">
                <Link
                  href="/about"
                  className="flex items-center text-gray-700 hover:text-green-600 py-6"
                >
                  About Us
                </Link>
              </div>
              <div className="relative group">
                <Link
                  href="/training"
                  className="flex items-center text-gray-700 hover:text-green-600 py-6"
                >
                  Training
                </Link>
              </div>
              <div className="relative group">
                <Link
                  href="#"
                  className="flex items-center text-gray-700 hover:text-green-600 py-6"
                >
                  Shop
                </Link>
              </div>
              <div className="relative group">
                <Link
                  href="#"
                  className="flex items-center text-gray-700 hover:text-green-600 py-6"
                >
                  Workplace service <ChevronDown className="w-4 h-4 ml-1" />
                </Link>
                <div className="absolute hidden group-hover:block bg-white shadow-md   w-48 p-2 rounded-md">
                  <Link
                    href="/workplace"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Workplace Services
                  </Link>
                  <Link
                    href="/workplace"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Workplace Assessment
                  </Link>
                  <Link
                    href="/workplace"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    On-site Restocking
                  </Link>
                  <Link
                    href="/workplace"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    On-site Training
                  </Link>
                  <Link
                    href="/workplace"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Hire an AED
                  </Link>
                </div>
              </div>
              <div className="relative group">
                <Link
                  href="#"
                  className="flex items-center text-gray-700 hover:text-green-600 py-6"
                >
                  Health service <ChevronDown className="w-4 h-4 ml-1" />
                </Link>
                <div className="absolute hidden group-hover:block bg-white shadow-md   w-48 p-2 rounded-md">
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Our Story
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Team
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Careers
                  </Link>
                </div>
              </div>
              <div className="relative group">
                <Link
                  href="#"
                  className="flex items-center text-gray-700 hover:text-green-600 py-6"
                >
                  How we help
                </Link>
              </div>
              <div className="relative group">
                <Link
                  href="#"
                  className="flex items-center text-gray-700 hover:text-green-600 py-6"
                >
                  Join us <ChevronDown className="w-4 h-4 ml-1" />
                </Link>
                <div className="absolute hidden group-hover:block bg-white shadow-md   w-48 p-2 rounded-md">
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Our Story
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Team
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Careers
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Icons and Get Started Button */}
          <div className="hidden xl:flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-700 cursor-pointer" />
            <ShoppingCart className="w-5 h-5 text-gray-700 cursor-pointer" />
            <button className="bg-[#038D96] text-white px-4 py-2 rounded-md">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="xl:hidden bg-white shadow-md absolute w-full left-0 top-16">
          <div className="flex flex-col space-y-4 p-4">
            <Link href="#" className="text-gray-700 hover:text-green-600">
              About Us
            </Link>
            <Link href="#" className="text-gray-700 hover:text-green-600">
              Training
            </Link>
            <Link href="#" className="text-gray-700 hover:text-green-600">
              Shop
            </Link>
            <Link href="#" className="text-gray-700 hover:text-green-600">
              Workplace Service
            </Link>
            <Link href="#" className="text-gray-700 hover:text-green-600">
              Health Service
            </Link>
            <Link href="#" className="text-gray-700 hover:text-green-600">
              How We Help
            </Link>
            <Link href="#" className="text-gray-700 hover:text-green-600">
              Join Us
            </Link>
            <button className="bg-teal-500 text-white px-4 py-2 rounded-md">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
