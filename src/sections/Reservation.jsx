import Image from "next/image";
import React from "react";

const steps = [
  {
    imgSrc: "/assets/icons/group-7.png",
    alt: "selection 1",
    title: "Choose Destination",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
  {
    imgSrc: "/assets/icons/group-12.png",
    alt: "water-sport 1",
    title: "Make Payment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
  {
    imgSrc: "/assets/icons/group-11.png",
    alt: "taxi 1",
    title: "Reach Airport on Selected Date",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
];

const ReservationSection = () => {
  return (
    <section className="container mx-auto px-5 pb-8">
      <div className="flex flex-col space-y-6 lg:flex-row items-center justify-center lg:space-x-8">
        {/* Left Section */}
        <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start space-y-6">
          <p className="sub-heading font-bold text-[#5E6282] text-sm md:text-lg">
            Easy and Fast
          </p>
          <h1 className="text-[#181E4B] font-bold heading text-xl md:text-2xl lg:text-5xl max-w-[500px]">
            Book your next trip in 3 easy steps
          </h1>

          {steps.map((step, idx) => (
            <div key={idx} className="flex items-start space-x-4">
              <Image src={step.imgSrc} alt={step.alt} width={47} height={48} />
              <div className="flex flex-col space-y-1">
                <p className="sub-heading text-sm md:text-lg text-[#181E4B] font-bold">
                  {step.title}
                </p>
                <p className="text-[#5E6282] text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div>
          <Image
            src="/assets/images/image.png"
            alt="Trip Illustration"
            width={485}
            height={459}
          />
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
