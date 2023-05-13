import React from "react";

const OfferBanner = () => {
  return (
    <section className="bg-white py-[120px] max-w-[1000px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-[20px] ">
        <div className="bg-offer-one h-[300px] bg-cover bg-no-repeat bg-[50% 50%] rounded-[30px] md:mx-[40px] sm:mx-[40px]">
          <div className="pt-28 pl-8">
            <p className="font-yellowtail text-white text-xl font-normal uppercase italic">
              Natural!!
            </p>
            <h1 className="font-roboto text-white font-extrabold uppercase lg:text-[30px] max-w-md ">
              Get Garden <br /> Fresh Fruits
            </h1>
          </div>
        </div>
        <div className="bg-offer-two h-[300px]  bg-cover bg-no-repeat bg-[50% 50%] rounded-[30px] md:mx-[40px] sm:mx-[40px]">
          <div className="pt-28 pl-8">
            <p className="font-yellowtail text-green text-xl font-normal uppercase italic">
              Offer!!
            </p>
            <h1 className="font-roboto text-blue font-extrabold uppercase lg:text-[30px] max-w-md ">
              Get 10% off <br /> on Vegetables
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferBanner;
