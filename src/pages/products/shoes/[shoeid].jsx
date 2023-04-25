import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

export default function ShoeDetails() {
  const router = useRouter();
  let data = router.query.data;
  data = JSON.parse(data);

  return (
    <div className="bg-white h-screen">
      <div className="w-2/3 mx-auto my-6 py-6 flex justify-between px-4">
        <div className="basis-1/2">
          <img
            src={data.link}
            alt="no image"
            className="p-6 "

            // placeholder="blur"
          />
        </div>

        <div className=" mx-5 my-10 py-4 px-3 basis-1/2  space-y-24">
          <h2 className="text-2xl font-serif ">{data.name}</h2>

          <div className="flex gap-28 my-10">
            <h2 className="font-mono ">{data.brand}</h2>
            <h2 className="font-mono ">{data.gender}</h2>
          </div>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero rem
            mollitia nam dignissimos eveniet, blanditiis beatae fuga, fugit
            autem corporis, quia numquam? Consequatur omnis optio sit ut autem.
            Recusandae, architecto?
          </p>
          <h2 className="font-bold text-xl  my-8">{data.price}</h2>
        </div>
      </div>
      <div className="text-center text-blue-800">
        <Link href="/products/shoes">Back to Shoes</Link>
      </div>
    </div>
  );
}
/*  */
