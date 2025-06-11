import Footer from "@/components/Footer";
import Header from "@/components/Header";
import DestinationSection from "@/sections/Destination";
import HeroSection from "@/sections/Hero";
import NewsletterSection from "@/sections/Newsletter";
import PartnersSection from "@/sections/Partners";
import ReservationSection from "@/sections/Reservation";
import Services from "@/sections/Services";
import TestimonialSection from "@/sections/Testimonial";
import React from "react";

const HomePage = () => {
  return (
    <main>
      <Header />
      <HeroSection />
      <Services />
      <DestinationSection />
      <ReservationSection />
      <TestimonialSection />
      <PartnersSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
};

export default HomePage;
