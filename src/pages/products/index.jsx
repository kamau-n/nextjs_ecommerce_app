import React from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import data from "@/resources/shoes-products";
import Image from "next/image";
import Link from "next/link";

export default function products() {
  //   dots: true,
  //   appendDots: (dots) => (
  //     <div style={{ position: "absolute", bottom: "10px", right: "10px" }}>
  //       <ul style={{ margin: "0px" }}> {dots} </ul>
  //     </div>
  //   ),
  //   customPaging: (i) => <div className="dot" />,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   initialSlide: 0,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         initialSlide: 3,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  return (
    <div className=" px-6  py-7 bg-slate-300  h-screen ">
      <div className="flex justify-between font-xl font-bold w-3/4 bg-slate-50 px-5 py-8 mx-auto text-blue-400">
        <Link href="/products/shoes">Shoes</Link>
        <Link href="/products/shoes">Jackets</Link>
        <Link href="/products/shoes">Shirts</Link>
        <Link href="/products/shoes">Make_up</Link>
      </div>
      <div className="relative bg-gray-500 p-8">
        <div
          className="absolute inset-0 opacity-50 bg-cover bg-center"
          style={{ backgroundImage: "url(/path/to/image.jpg)" }}></div>
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-4">My Content</h1>
          <p className="text-gray-100 mb-8">This is my content in the div.</p>
          <button className="bg-blue-500 text-white py-3 px-6 rounded-lg">
            My Button
          </button>
        </div>
      </div>
    </div>
  );
  s;
}
