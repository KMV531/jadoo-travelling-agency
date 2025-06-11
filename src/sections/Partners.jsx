import Image from "next/image";
import React from "react";

const partners = [
  {
    imgSrc: "/assets/icons/image 27.png",
    alt: "axon",
  },
  {
    imgSrc: "/assets/icons/image 28.png",
    alt: "jetstar",
  },

  {
    imgSrc: "/assets/icons/Group-63.png",
    alt: "expedia",
  },
  {
    imgSrc: "/assets/icons/image 30.png",
    alt: "Quantas",
  },
  {
    imgSrc: "/assets/icons/image 31.png",
    alt: "alitalia",
  },
];

const PartnersSection = () => {
  return (
    <section className="container mx-auto flex items-center justify-center space-x-10 px-5 pb-12">
      {partners.map((partner, idx) => (
        <div key={idx}>
          <Image
            src={partner.imgSrc}
            alt={partner.alt}
            width={162}
            height={162}
          />
        </div>
      ))}
    </section>
  );
};

export default PartnersSection;
