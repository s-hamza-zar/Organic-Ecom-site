import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="bg-hero h-[800px] my-8">
      <div className="py-64">
        <div className="mx-60 ">
          <p className="font-yellowtail text-green text-2xl font-normal uppercase italic">
            Made with nature 100%
          </p>
          <h1 className="font-roboto text-blue text-[56px] font-extrabold uppercase max-w-xl">
            Choose the best healthier way of life
          </h1>
          <Button type={"yellow"}>Explore Now</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
