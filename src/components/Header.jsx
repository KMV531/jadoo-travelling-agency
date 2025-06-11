"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const categories = [
    { name: "Destinations", path: "/" },
    { name: "Hotels", path: "/" },
    { name: "Flights", path: "/" },
    { name: "Bookings", path: "/" },
    { name: "LogIn", path: "/" },
  ];
  return (
    <header className="relative">
      <main className="container mx-auto px-5 p-10">
        <div className="flex items-center justify-between">
          <div>
            <Image
              src={"/assets/images/Jadoo.png"}
              alt="Jadoo logo"
              width={114.91}
              height={33.99}
            />
          </div>

          <nav className="hidden lg:flex items-center justify-between space-x-10 gap-x-4 text-[#212832]">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.path}
                className="text-lg sub-heading space-x-8"
              >
                {category.name}
              </Link>
            ))}
            <button className="border border-[#212832] py-2 px-4 cursor-pointer rounded-lg">
              Sign Up
            </button>
          </nav>

          <button
            variant="ghost"
            size="icon"
            className="lg:hidden cursor-pointer"
            onClick={toggleMobileMenu}
          >
            <Menu size={24} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-white">
            <div className="container-custom py-4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold heading">Menu</h2>
                <button
                  variant="ghost"
                  size="icon"
                  onClick={toggleMobileMenu}
                  className="cursor-pointer"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="flex items-center justify-between flex-col space-y-14">
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    href={category.path}
                    className="text-lg sub-heading text-[#212832]"
                    onClick={toggleMobileMenu}
                  >
                    {category.name}
                  </Link>
                ))}
                <button className="border border-[#212832] py-2 px-4 cursor-pointer rounded-lg">
                  Sign Up
                </button>
              </nav>
            </div>
          </div>
        )}
        <div>
          <Image
            src={"/assets/images/Decore.png"}
            alt="background image"
            width={766.31}
            height={872.58}
            className="absolute top-0 right-0 -z-10"
          />
        </div>
      </main>
    </header>
  );
};

export default Header;
