import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="container mx-auto px-5 py-4">
      <div className="flex flex-col space-y-8 lg:flex-row lg:items-center lg:justify-center lg:space-x-4">
        {/* hero left */}
        <div className="max-w-[630px] flex flex-col items-start justify-start space-y-4 order-2 lg:order-none">
          <p className="sub-heading capitalize text-[#DF6951] font-bold text-lg md:text-xl">
            Best Destinations around the world
          </p>
          <h1 className="text-2xl md:text-4xl lg:text-7xl text-[#181E4B] font-bold heading">
            Travel, enjoy and live a new and full life
          </h1>
          <p className="text-[#5E6282] text-sm md:text-lg lg:text-xl sub-heading">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <div className="flex items-start justify-start space-x-4">
            <Image
              src={"/assets/images/CTA.png"}
              alt="find more call to action button"
              width={170}
              height={60}
              className="cursor-pointer"
            />
            <Image
              src={"/assets/images/Play Demo.png"}
              alt="play demo button"
              width={165}
              height={52}
              className="cursor-pointer"
            />
          </div>
        </div>

        {/* hero right */}
        <div className="order-1 lg:order-none">
          <Image
            src={"/assets/images/Traveller_Image.png"}
            alt="happy traveller image"
            width={783.87}
            height={764}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
