import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <section className="bg-white-10 py-[80px]">
      <div className="grid grid-cols-1 divide-x divide-gray-10 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-[10px] mx-auto">
        <div className="flex flex-col items-end justify-between">
          <h3 className="text-blue font-roboto font-semibold text-[30px] mb-[30px]">
            Contact Us
          </h3>
          <div className="flex flex-col items-end mb-6">
            <h4 className="text-gray-80 font-bold text-[18px] mb-2">Email</h4>
            <a
              href="mailto:needhelp@organick.com"
              className="text-gray-80  hover:text-green"
            >
              needhelp@organick.com
            </a>
          </div>
          <div className="flex flex-col items-end mb-6">
            <h4 className="text-gray-80 font-bold text-[18px] mb-2 ">Phone</h4>
            <a
              href="mailto:needhelp@organick.com"
              className="text-gray-80  hover:text-green"
            >
              <a>123 (1254) 1452</a>
            </a>
          </div>
          <div className="flex flex-col items-end mb-6">
            <h4 className="text-gray-80 font-bold text-[18px] mb-2">Address</h4>
            <p className="text-gray-80  hover:text-green">
              88 Road, Brooklyn Street, USA
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center col-span-2">
          <Link to={"/"} className="mb-6">
            <div>
              <img src={Logo} className="h-full" />
            </div>
          </Link>

          <div className="flex flex-col items-center">
            <p className="text-gray-80 text-center">
              We are a popular and farming company aspiring tobe a leader in{" "}
              <br></br>the Organic food industry.
            </p>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col items-start justify-between ml-3">
            <h3 className="text-blue font-roboto font-semibold text-[30px] mb-[30px]">
              Utility Pages
            </h3>
            <div className="flex flex-col items-start mb-6">
              <Link
                to={"/style-guide"}
                className="text-gray-80 text-[18px] my-3 hover:text-green"
              >
                Style Guide
              </Link>
              <Link
                to={"https://organick-template.webflow.io/401"}
                className="text-gray-80 text-[18px] my-3 hover:text-green"
              >
                Protected
              </Link>
              <Link
                to={"https://organick-template.webflow.io/404"}
                className="text-gray-80 text-[18px] my-3 hover:text-green"
              >
                Page Not Found
              </Link>
              <Link
                to={"/changelog"}
                className="text-gray-80 text-[18px] my-3 hover:text-green"
              >
                Changelog
              </Link>
              <Link
                to={"/licenses"}
                className="text-gray-80 text-[18px] my-3 hover:text-green"
              >
                Licenses
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
