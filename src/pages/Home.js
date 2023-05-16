import React from "react";
import {
  AboutUs,
  Gallery,
  Hero,
  MoreDetails,
  Newsletter,
  OfferBanner,
  OfferProducts,
  Products,
  Testimonial,
} from "../components";

const Home = () => {
  return (
    <div>
      <section className="pt-14">
        <Hero />
        <OfferBanner />
        <AboutUs />
        <Products />
        <Testimonial />
        <OfferProducts />
        <MoreDetails />
        <Gallery />
        <Newsletter />
      </section>
    </div>
  );
};

export default Home;
