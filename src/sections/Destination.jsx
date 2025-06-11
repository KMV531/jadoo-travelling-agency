import Image from "next/image";
import React from "react";

const DestinationSection = () => {
  return (
    <section className="container mx-auto px-5">
      <div className="flex flex-col space-y-3 items-center justify-center">
        <p className="sub-heading font-bold text-[#5E6282] text-sm md:text-lg">
          Top Selling
        </p>
        <h1 className="text-[#181E4B] font-bold heading text-xl md:text-2xl lg:text-4xl">
          Top Destinations
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-12 max-w-5xl mx-auto justify-items-center">
        <Image
          src="/assets/images/Destination.png"
          alt="CRome, Italty"
          width={315}
          height={457}
          className="cursor-pointer hover:-translate-y-2 transition-all"
        />
        <Image
          src="/assets/images/Destination (1).png"
          alt="London, UK"
          width={315}
          height={457}
          className="cursor-pointer hover:-translate-y-2 transition-all"
        />
        <Image
          src="/assets/images/Group 1000001925.png"
          alt="Full Europe"
          width={315}
          height={457}
          className="cursor-pointer hover:-translate-y-2 transition-all"
        />
      </div>
    </section>
  );
};

export default DestinationSection;
