import React from "react";
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
const SampleNextArrow = ({ className, style, onClick }) => {
  return (
    <FontAwesomeIcon
      icon={faChevronRight}
      className={className}
      style={{ ...style, display: "block", right: "380px", color: "#525C60" }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = ({ className, style, onClick }) => {
  return (
    <FontAwesomeIcon
      icon={faChevronLeft}
      className={className}
      style={{
        ...style,
        display: "block",
        color: "#525C60",
        left: "380px",
      }}
      onClick={onClick}
    />
  );
};
const Testimonial = () => {
  const settings = {
    infinite: true,
    speed: 700,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const firstExample = {
    size: 20,
    value: 5,
    edit: false,
  };
  return (
    <section className="bg-testimonial bg-cover bg-no-repeat h-[700px]">
      <div className="py-[120px]">
        <div className="flex flex-col items-center mb-[40px]">
          <p className="font-yellowtail text-green text-2xl font-normal uppercase italic">
            Testimonial
          </p>
          <h1 className="font-roboto text-blue text-[40px] font-bold uppercase">
            What Our Customer Saying?
          </h1>
        </div>
        <Slider {...settings}>
          <div>
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center">
                <img
                  src={
                    "https://assets.website-files.com/6205f7ee3b8a768a85fce0fc/620ca1744234b400fb1d652e_testimonial-client-image-2.jpg"
                  }
                  className="rounded-[100px] mb-[10px]"
                />
                <ReactStars {...firstExample} activeColor="#FFA858" />
              </div>
              <div className="flex flex-col items-center">
                <p className="font-roboto text-gray-80 text-xl w-max text-center my-[30px]">
                  The quality of organic produce is extremely high, the service
                  is second to none and the taste of <br /> the food takes me
                  back to my childhood when we were growing our own.
                </p>
                <h1 className="font-roboto text-blue text-[26px] font-semibold leading-snug">
                  Sara Taylor
                </h1>
                <p className="text-gray-80 text-sm ">Consumer</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center">
                <img
                  src={
                    "https://assets.website-files.com/6205f7ee3b8a768a85fce0fc/62064ac3231f73a3d0d49e0e_testimonial-client-image-1.jpg"
                  }
                  className="rounded-[100px] mb-[10px]"
                />
                <ReactStars {...firstExample} activeColor="#FFA858" />
              </div>
              <div className="flex flex-col items-center">
                <p className="font-roboto text-gray-80 text-xl w-max text-center my-[30px]">
                  I have been using the Organick Grocer for over a year now and
                  I find the staff friendly and <br />
                  helpful with a good knowledge of the products they sell.
                </p>
                <h1 className="font-roboto text-blue text-[26px] font-semibold leading-snug">
                  Chris Jordan
                </h1>
                <p className="text-gray-80 text-sm ">Store Owner</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
