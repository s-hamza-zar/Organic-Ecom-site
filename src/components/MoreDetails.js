import React from "react";

const MoreDetails = () => {
  return (
    <section className="h-[720px]">
      <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
        <div className="bg-whoWeAre bg-cover bg-no-repeat h-[720px]"></div>
        <div className="relative">
          <div className="bg-white my-[80px] rounded-tl-[30px] rounded-bl-[30px] drop-shadow-md absolute -left-[60px] p-12">
            <div className="">
              <p className="font-yellowtail text-green text-[36px] italic">
                Eco Friendly
              </p>
              <h1 className="font-roboto text-blue font-bold mt-2 uppercase lg:text-[40px] max-w-sm ">
                From Our Farm To Your Home.
              </h1>
              <h2 className="font-roboto text-blue font-semibold text-[22px] mt-[10px]">
                Choose Your Products
              </h2>
              <p className="mt-1 text-[16px] text-gray-80">
                In our listing, we have several collections of organic products.
                This is the place where you need to choose the product you want.
              </p>
              <h2 className="font-roboto text-blue font-semibold text-[22px] mt-[20px]">
                Farmers Will Produce It
              </h2>
              <p className="mt-1 text-[16px] text-gray-80">
                The Product that you ordered will be verified that we have or
                not if have we will start to move on with the next step.
              </p>
              <h2 className="font-roboto text-blue font-semibold text-[22px] mt-[20px]">
                We Can Delivery Too
              </h2>
              <p className="mt-1 text-[16px] text-gray-80">
                If you are not comfortable going to the nearby market place we
                also will deliver your product to your doorstep.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreDetails;
