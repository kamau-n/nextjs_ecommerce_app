import React from "react";

import data from "../../../resources/shoes-products";
import nav_bar from "@/components/nav_bar";
import Image from "next/image";

export default function shoes() {
  const dispaly = () => {
    // console.log(data);
    return data.map((product) => {
      return (
        <div
          key={product.id}
          className="w-3/4 p-10 mx-auto my-10  bg-slate-300">
          <span>{product.id}</span>
          <span>{product.name}</span>
          <Image
            src={product.imageURL}
            alt="no image"
            width="220"
            height="220"
            placeholder="blur"
          />
        </div>
      );
    });
  };
  return (
    <div>
      <h2 className="uppercase font-bold text-center p-4 m-4 font-mono after:text-blue-500">
        Available Shoes
      </h2>
      <div className="p-5 m-5  grid grid-cols-4 gap-4">{dispaly()}</div>
    </div>
  );
}
