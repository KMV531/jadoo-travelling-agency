import Image from "next/image";
import React from "react";

const TestimonialSection = () => {
  return (
    <section className="container mx-auto px-5 pb-8">
      <div className="flex flex-col items-center justify-center space-y-6 lg:flex-row lg:space-x-8">
        {/* left */}
        <div className="flex flex-col space-y-4 items-center justify-center lg:items-start lg:justify-start">
          <p className="sub-heading font-semibold text-[#5E6282] text-sm md:text-lg">
            TESTIMONIALS
          </p>
          <h1 className="text-[#181E4B] font-bold heading text-xl md:text-2xl lg:text-5xl max-w-[500px]">
            What people say about Us.
          </h1>
          <div className="my-4 mx-auto lg:mx-0">
            <Image
              src={"/assets/icons/Group-61.png"}
              alt="Pagination buttons"
              width={87}
              height={12}
            />
          </div>
        </div>

        {/* right */}
        <div>
          <Image
            src={"/assets/images/Group-64.png"}
            alt="Testimonial"
            width={669}
            height={356}
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
