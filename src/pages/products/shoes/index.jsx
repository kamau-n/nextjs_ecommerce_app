import React from "react";

import data from "../../../resources/shoes-products";

import Image from "next/image";

import { useRouter } from "next/navigation";

export default function shoes() {
  const router = useRouter();
  const dispaly = () => {
    // console.log(data);
    return data.map((product) => {
      return (
        <div
          key={product.id}
          onClick={() => {
            router.push({
              pathname: `/products/shoes/${product.id}`,
              query: {
                data: JSON.stringify({
                  id: product.id,
                  name: product.name,
                  gender: product.gender,
                  link: product.imageURL,
                  brand: product.brand,
                  price: product.price,
                }),
              },
            });
          }}
          className=" px-3 py-3  flex  flex-col justify-center  align-middle mx-3 my-10 texx-center bg-white">
          <Image
            src={product.imageURL}
            alt="no image"
            width="150"
            height="60"
            className="w-4/5 mx-auto"
            // placeholder="blur"
          />
          <div className="text-center">
            <button className="border-2 border-blue-400  text-center py-1 px-8 mt-4 ">
              Add to cart
            </button>
          </div>
          {/* <span>{product.id}</span> */}
          <div className="text-center my-3 ">
            <div className="font-bold my-3">{product.name}</div>
            <div className="font-bold my-3">$ {product.price}</div>
          </div>
        </div>
      );
    });
  };
  return (
    <div>
      <h2 className="uppercase font-bold text-center px-4 my-3  py-2 mx-4 font-mono after:text-blue-500">
        Available Shoes
      </h2>
      <div className="p-5 m-5  grid grid-cols-4 gap-2">{dispaly()}</div>
    </div>
  );
}
