import React from "react";
import {
  AboutUs,
  Hero,
  OfferBanner,
  Products,
  Testimonial,
} from "../components";

const Home = () => {
  return (
    <div>
      <section className="py-16">
        <Hero />
        <OfferBanner />
        <AboutUs />
        <Products />
        <Testimonial />
      </section>
    </div>
  );
};

export default Home;
