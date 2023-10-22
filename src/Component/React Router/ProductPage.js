import React from "react";
import { productData } from "./Products";
import { Link } from "react-router-dom";
export const ProductPage = () => {
  return (
    <div className="flex sm:justify-start ml-2 flex-wrap gap-1 sm:gap-5 mt-10 sm:mx-5">
      {productData.map((item) => {
        return (
          <Link
            key={item.id}
            to={`/productDetailse/${item.id}`}
            className="animate-opacity mb-3 rounded-md bg-[#c3c0c0] h-fit p-3 w-[49%] sm:w-[20%] lg:w-[15%] flex flex-col gap-2"
          >
            <img src="/public/img/1.png" alt="" />
            <img src={item.img} alt="" />
            <h1 className="text-xl font-bold">{item.title}</h1>
            <p>{item.description}</p>
            <p className="text-orange-600 text-sm font-bold">{item.price}</p>
          </Link>
        );
      })}
    </div>
  );
};
