import React from "react";
import Button from "./Button";

const Gallery = () => {
  return (
    <section className="bg-[#F1F8F4] py-[140px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-[30px] ">
        <div className="flex flex-col items-center justify-center bg-gallery-one h-[500px] bg-cover bg-no-repeat md:mx-[40px] sm:mx-[40px]">
          <button className="px-8 py-6 bg-white rounded-xl text-blue text-[22px] font-medium leading-6 hover:bg-yellow">
            Fruit Juice
          </button>
        </div>
        <div className="flex flex-col items-center justify-center bg-gallery-two h-[500px] bg-cover bg-no-repeat md:mx-[40px] sm:mx-[40px]">
          <button className="px-8 py-6 bg-white rounded-xl text-blue text-[22px] font-medium leading-6 hover:bg-yellow">
            Organic Food
          </button>
        </div>
        <div className="flex flex-col items-center justify-center bg-gallery-three h-[500px] bg-cover bg-no-repeat md:mx-[40px] sm:mx-[40px]">
          <button className="px-8 py-6 bg-white rounded-xl text-blue text-[22px] font-medium leading-6 hover:bg-yellow">
            Nuts Cookies
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
