import React, { useContext } from "react";
import Product from "./Product";
import Button from "./Button";
import { ProductContext } from "../contexts/ProductContext";

const OfferProducts = () => {
  const { products } = useContext(ProductContext);

  const filteredProducts = products.filter((eachProduct) => {
    return (
      eachProduct.category === "men's clothing" ||
      eachProduct.category === "women's clothing"
    );
  });
  return (
    <section className="bg-blue py-[120px]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-[60px]">
          <div>
            <p className="font-yellowtail text-green text-xl font-normal uppercase italic ">
              Offer Products
            </p>
            <h1 className="font-roboto text-white font-bold uppercase text-[40px]">
              We Offer Organic For You
            </h1>
          </div>
          <div>
            <Button type={"yellow"}>View All products</Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[40px] ">
          {filteredProducts.map((eachProduct) => {
            return (
              <Product
                key={eachProduct.id}
                product={eachProduct}
                style="bg-white"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default OfferProducts;
