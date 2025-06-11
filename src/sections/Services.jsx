import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <section className="container mx-auto px-5 py-8">
      <div className="flex flex-col space-y-3 items-center justify-center">
        <p className="sub-heading font-bold text-[#5E6282] text-sm md:text-lg">
          CATEGORY
        </p>
        <h1 className="text-[#181E4B] font-bold heading text-xl md:text-2xl lg:text-4xl">
          We Offer Best Services
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12 container mx-auto justify-items-center">
        <Image
          src="/assets/images/Category.png"
          alt="Calculated Weather service"
          width={190}
          height={227}
          className="cursor-pointer hover:-translate-y-2 transition-all"
        />
        <Image
          src="/assets/images/Category Active.png"
          alt="Best Flights service"
          width={302}
          height={348.91}
          className="cursor-pointer hover:-translate-y-2 transition-all"
        />
        <Image
          src="/assets/images/Category (1).png"
          alt="Local Events service"
          width={181}
          height={229}
          className="cursor-pointer hover:-translate-y-2 transition-all"
        />
        <Image
          src="/assets/images/Category (2).png"
          alt="Customization service"
          width={181}
          height={216}
          className="cursor-pointer hover:-translate-y-2 transition-all"
        />
      </div>
    </section>
  );
};

export default Services;
