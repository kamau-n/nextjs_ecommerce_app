import React from "react";

import data from "../../../resources/shirt";

import Image from "next/image";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Footer from "@/components/Footer";

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
          className=" px-3 py-2 flex  flex-col justify-center  align-middle mx-3 my-5 texx-center bg-white">
          <Image
            src={product.imageURL}
            alt="no image"
            width="150"
            height="60"
            className="w-4/5 h-2/3 mx-auto"
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
      <div className="relative bg-gray-500 p-8">
        <div
          className="absolute inset-0 opacity-50 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://cdn.britannica.com/35/222035-050-C68AD682/makeup-cosmetics.jpg)",
          }}></div>
        <div className="flex justify-center align-middle gap-7 relative z-10 font-xl font-bold w-2/3  px-5 py-2 mx-auto text-white">
          <Link href="/products/">Products</Link>
          <Link href="/home">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="relative text-center z-10">
          <h1 className="text-3xl font-bold mb-4">All Products Plug</h1>
          <p className="text-gray-100 mb-8">
            We have all the categories you want.
          </p>
          <button className="bg-blue-500 text-white py-3 px-6 rounded-md">
            Shop Now
          </button>
        </div>
      </div>
      {/* <h2 className="uppercase font-bold text-center px-4 my-2  py-2 mx-4 font-mono after:text-blue-500">
        Available Shoes
      </h2> */}
      <div className="p-5 m-5 w-3/4 mx-auto grid grid-cols-4 gap-2">
        {dispaly()}
      </div>
      <Footer />
    </div>
  );
}
