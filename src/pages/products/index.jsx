import Link from "next/link";
import React from "react";

export default function products() {
  return (
    <div className="mx-auto my-10 p-10 bg-slate-400 w-2/3">
      <h2 className="text-center text-2xl font-bold">Products</h2>
      <div className="w-1/2 p-10">
        <Link href="/products/shoes" className="font-bold text-blue-500">
          Shoes
        </Link>
      </div>
    </div>
  );
}
