import React from "react";
import aboutUsIconOne from "../img/about-icon-one.svg";
import aboutUsIcontwo from "../img/about-icon-two.svg";
import Button from "./Button";

const AboutUs = () => {
  return (
    <section className="bg-white-10 py-[110px]">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-3 w-[1300px] mx-auto">
        <div>
          <img
            src={
              "https://assets.website-files.com/6205f7ee3b8a768a85fce0fc/620c9e8c5090ae82f89a84c2_About-Us.png"
            }
          />
        </div>
        <div className="-mt-[20px] pl-8">
          <div className="pt-28 ">
            <p className="font-yellowtail text-green text-xl font-normal uppercase italic">
              About Us
            </p>
            <h1 className="font-roboto text-blue font-extrabold mt-2 uppercase lg:text-[30px] max-w-md ">
              We Believe in Working Accredited Farmers
            </h1>
            <p className="mt-2 text-[16px] text-gray-80">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="h-[100px] w-[120px] bg-[#FFFFFF] rounded-[20px] flex items-center justify-center mr-3">
              <img src={aboutUsIconOne} />
            </div>
            <div>
              <h2 className="font-roboto text-blue font-extrabold lg:text-[20px] max-w-md ">
                Organic Foods Only
              </h2>
              <p className="mt-1 text-[16px] text-gray-80">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="h-[100px] w-[120px] bg-[#FFFFFF] rounded-[20px] flex items-center justify-center mr-3">
              <img src={aboutUsIcontwo} />
            </div>
            <div>
              <h2 className="font-roboto text-blue font-extrabold lg:text-[20px] max-w-md ">
                Quality Standards
              </h2>
              <p className="mt-1 text-[16px] text-gray-80">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </p>
            </div>
          </div>
          <div className="mt-4">
            <Button type={"blue"}>Shop Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
