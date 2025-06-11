import Image from "next/image";
import React from "react";

const NewsletterSection = () => {
  return (
    <section
      className={`container mx-auto relative p-20 
        bg-no-repeat bg-center bg-contain
        lg:bg-[url('/assets/images/newsletter-bg.png')]`}
    >
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <h1 className="text-lg md:text-xl lg:text-2xl sub-heading font-semibold text-[#5E6282] max-w-2xl py-5">
          Subscribe to get information, latest news and other interesting offers
          about Jadoo
        </h1>
        <form
          action="/"
          className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-4"
        >
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-xl border border-white bg-white text-[#5E6282] w-full md:w-auto"
          />
          <button
            type="submit"
            className="bg-gradient-to-tr from-[#FF946D] to-[#FF7D68] text-white text-sm font-semibold p-3 rounded-xl w-full md:w-auto cursor-pointer"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Arrow icon only visible on lg and above */}
      <div className="hidden lg:block absolute -top-6 right-56">
        <Image
          src={"/assets/icons/arrow-right-up.png"}
          alt="arrow-right-up"
          width={70}
          height={70}
        />
      </div>
    </section>
  );
};

export default NewsletterSection;
