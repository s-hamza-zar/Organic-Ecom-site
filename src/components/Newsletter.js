import React from "react";
import Button from "./Button";

const Newsletter = () => {
  return (
    <section className="bg-white-10 py-[120px] ">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-[20px] max-w-[1200px] mx-auto">
        <div className="bg-newsLetter h-[300px] bg-cover bg-no-repeat ] rounded-[30px] md:mx-[40px] sm:mx-[40px]">
          <div className="pt-28 pl-12 flex justify-between items-center">
            <h1 className="font-roboto text-white font-extrabold uppercase lg:text-[30px] max-w-md ">
              Subscribe Our Newsletter
            </h1>
            <div className="mr-8">
              <input
                type="email"
                maxlength="256"
                className="mr-8 p-[16px] rounded-2xl  focus:outline-none"
                name="Subscriber-Email-2"
                data-name="Subscriber Email 2"
                placeholder="Enter Your Email Address"
                id="Subscriber-Email-2"
                required=""
              ></input>
              <Button type={"blue"}>Subscribe </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
