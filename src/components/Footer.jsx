import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="container mx-auto px-5 mt-32">
      <div
        className="
          grid 
          grid-cols-1 gap-y-8
          md:grid-cols-2 md:gap-x-12 md:gap-y-10
          lg:grid-cols-5 lg:gap-x-8 lg:gap-y-0
          items-start
        "
      >
        {/* Logo and description */}
        <div className="flex flex-col space-y-4 max-w-xs">
          <Image
            src={"/assets/images/Jadoo.png"}
            alt="Jadoo logo"
            width={115}
            height={34}
            priority
          />
          <p className="sub-heading text-[#5E6282] text-sm font-medium leading-relaxed">
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>

        {/* Company Section */}
        <div className="flex flex-col space-y-3 w-max">
          <h2 className="sub-heading text-lg md:text-xl font-bold text-black">
            Company
          </h2>
          {["About", "Careers", "Mobile"].map((item) => (
            <p
              key={item}
              className="sub-heading text-[#5E6282] text-sm font-medium cursor-pointer hover:text-[#FF7D68] transition"
            >
              {item}
            </p>
          ))}
        </div>

        {/* Contact Section */}
        <div className="flex flex-col space-y-3 w-max">
          <h2 className="sub-heading text-lg md:text-xl font-bold text-black">
            Contact
          </h2>
          {["Help/FAQ", "Press", "Affiliates"].map((item) => (
            <p
              key={item}
              className="sub-heading text-[#5E6282] text-sm font-medium cursor-pointer hover:text-[#FF7D68] transition"
            >
              {item}
            </p>
          ))}
        </div>

        {/* More Section */}
        <div className="flex flex-col space-y-3 w-max">
          <h2 className="sub-heading text-lg md:text-xl font-bold text-black">
            More
          </h2>
          {["Airlinefees", "Airline", "Low fare tips"].map((item) => (
            <p
              key={item}
              className="sub-heading text-[#5E6282] text-sm font-medium cursor-pointer hover:text-[#FF7D68] transition"
            >
              {item}
            </p>
          ))}
        </div>

        {/* Advertisement Image */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src={"/assets/icons/Outbound.png"}
            alt="advertisement"
            width={214}
            height={147}
            priority
          />
        </div>
      </div>
      <p className="sub-heading text-[#5E6282] text-sm font-medium my-20 text-center">
        All rights reserved@jadoo.co
      </p>
    </footer>
  );
};

export default Footer;
