import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Button from "./Button";
import Product from "./Product";

const Products = () => {
  const { products } = useContext(ProductContext);
  // Filter data by category
  const filteredProducts = products.filter((eachProduct) => {
    return (
      eachProduct.category === "men's clothing" ||
      eachProduct.category === "women's clothing"
    );
  });
  return (
    <div className="container mx-auto py-[120px]">
      <div className="flex flex-col items-center mb-[40px]">
        <p className="font-yellowtail text-green text-xl font-normal uppercase italic">
          Categories
        </p>
        <h1 className="font-roboto text-blue font-extrabold uppercase text-[30px] max-w-md ">
          Our Products
        </h1>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 lg:px-[100px]  xl:grid-cols-4 xl:px-[100px] gap-[40px] ">
        {filteredProducts.map((eachProduct) => {
          return <Product key={eachProduct.id} product={eachProduct} />;
        })}
      </div>
      <div className="mt-20 flex items-center justify-center">
        <Button type={"blue"}>Load More</Button>
      </div>
    </div>
  );
};

export default Products;
