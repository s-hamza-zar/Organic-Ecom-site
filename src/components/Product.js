import React, { useContext } from "react";
import { BsEyeFill, BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import ReactStars from "react-rating-stars-component";
const Product = ({ product, style }) => {
  const { addToCart } = useContext(CartContext);
  const { id, image, category, title, price } = product;
  const firstExample = {
    size: 20,
    value: 4,
    edit: false,
  };
  return (
    <section>
      <div
        className={`bg-white-10 rounded-[30px] h-[400px] mb-4 relative overflow-hidden group transition ${style}`}
      >
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={
                "https://assets.website-files.com/620a0c9708d12203da701643/620c861339b4b14c3e66ba59_Product-01-p-500.jpeg"
              }
            />
          </div>
        </div>
        <div
          className="absolute top-4 right-2  p-2 flex flex-col items-center justify-center 
        gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <button onClick={() => addToCart(product, id)}>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-blue">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`product/${id}`}
            className=" w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
        <div className="absolute top-6 left-6 bg-blue px-[12px] py-[6px] rounded-[8px]">
          <div className=" text-white capitalize font-roboto font-semibold text-[14px]">
            {category}
          </div>
        </div>
        <div className="absolute bottom-8 p-4">
          <Link to={`/product/${id}`}>
            <h2 className="font-semibold font-roboto text-blue text-[18px] mb-1 hover:text-green">
              {/* {title} */}
              Calabrese Broccoli
            </h2>
          </Link>
        </div>
        <div className="absolute bottom-12 w-full px-4">
          <div className=" border-b"></div>
        </div>
        <div className="absolute bottom-4 w-full px-4">
          <div className="flex justify-between">
            <div className="flex items-center">
              <div className="text-[#B8B8B8] font-roboto font-medium tracking-wide line-through text-[18px] mr-3">
                ${price}
              </div>
              <div className="text-blue font-roboto font-semibold tracking-wide text-[18px]">
                ${parseFloat(price - price * (20 / 100)).toFixed(2)}
              </div>
            </div>
            <div>
              <ReactStars {...firstExample} activeColor="#FFA858" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
