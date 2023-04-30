import React from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import data from "@/resources/shoes-products";
import Image from "next/image";
import Link from "next/link";
import img1 from "../../resources/shoes.jpg";
import img2 from "../..//resources/shirt.webp";
import img3 from "../../resources/mu.webp";
import img4 from "../../resources/bag.webp";
import { useRouter } from "next/router";
// import img5 from "../../resources/jacket.avif";
import Footer from "@/components/Footer";

export default function Products() {
  const router = useRouter();

  return (
    <div className=" px-1 py-1 bg-slate-300  h-screen ">
      <div className="relative bg-gray-500 p-8">
        <div
          className="absolute inset-0 opacity-50 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://cdn.britannica.com/35/222035-050-C68AD682/makeup-cosmetics.jpg)",
          }}></div>
        <div className="flex justify-center align-middle gap-7 relative z-10 font-xl font-bold w-2/3  px-5 pb-5 mx-auto text-white">
          <Link href="/">Home</Link>
          <Link href="/products/">Products</Link>

          <Link href="/about">About</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="relative text-center z-10">
          <h1 className="text-3xl  font-bold mb-4">Our Products</h1>
          <p className="text-gray-100 mb-8">
            You have so many categories to choose from.
          </p>
          <button className="bg-blue-500 text-white py-3 px-6 rounded-lg">
            Shop Now
          </button>
        </div>
      </div>
      <div className=" w-2/3 mx-auto py-5 px-3 my-5">
        <h2 className="text-left font-bold text-2xl my-5 mx-2">
          Our Categories
        </h2>
        <div className=" sm:grid sm:grid-cols-3  flex flex-col space-y-9 md:grid md:grid-cols-2  gap-3">
          <div
            className=" flex flex-col py-10  h-60  bg-cover bg-center"
            style={{
              background: `linear-gradient(rgba(1,0,0,0.6),rgba(1,0,0,0.5)) ,url(${img1.src}) `,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}>
            <h2 className=" text-center py-2   px-3 text-2xl font-bold text-white">
              Shoes
            </h2>

            <button
              className="bg-blue-500 text-white py-2 w-1/2 mx-auto px-4 rounded-md"
              onClick={() => {
                router.push("/products/shoes");
              }}>
              Shop Now
            </button>
          </div>
          <div
            className=" flex flex-col py-10  h-60  bg-cover bg-center"
            style={{
              background: `linear-gradient(rgba(1,0,0,0.6),rgba(1,0,0,0.5)) ,url(${img2.src}) `,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}>
            <h2 className=" text-center py-2   px-3 text-2xl font-bold text-white">
              Shirts
            </h2>

            <button
              className="bg-blue-500 text-white py-2 w-1/2 mx-auto px-4 rounded-md"
              onClick={() => {
                router.push("/products/shirts");
              }}>
              Shop Now
            </button>
          </div>
          <div
            className=" flex flex-col py-10  h-60  bg-cover bg-center"
            style={{
              background: `linear-gradient(rgba(1,0,0,0.6),rgba(1,0,0,0.5)) ,url(${img3.src}) `,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}>
            <h2 className=" text-center py-2   px-3 text-2xl font-bold text-white">
              Make Up
            </h2>

            <button className="bg-blue-500 text-white py-2 w-1/2 mx-auto px-4 rounded-md">
              Shop Now
            </button>
          </div>
          <div
            className=" flex flex-col py-10  h-60  bg-cover bg-center"
            style={{
              background: `linear-gradient(rgba(1,0,0,0.6),rgba(1,0,0,0.5)) ,url(${img4.src}) `,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}>
            <h2 className=" text-center py-2   px-3 text-2xl font-bold text-white">
              Bags
            </h2>

            <button className="bg-blue-500 text-white py-2 w-1/2 mx-auto px-4 rounded-md">
              Shop Now
            </button>
          </div>
          <div
            className=" flex flex-col py-10  h-60  bg-cover bg-center"
            style={{
              background: `linear-gradient(rgba(1,0,0,0.6),rgba(1,0,0,0.5)) ,url(${img1.src}) `,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}>
            <h2 className=" text-center py-2   px-3 text-2xl font-bold text-white">
              Shoes
            </h2>

            <button className="bg-blue-500 text-white py-2 w-1/2 mx-auto px-4 rounded-md">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
  s;
}
