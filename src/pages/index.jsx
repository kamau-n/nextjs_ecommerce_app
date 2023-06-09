import Link from "next/link";
import { useRouter } from "next/router";
import img1 from "../resources/bag.webp";
import Footer from "@/components/Footer";
import data from "../resources/Feature";
import Image from "next/image";

const Home = () => {
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
            <button className="border-2 border-blue-400  w-full text-center py-1 px-8 mt-4 ">
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
    <div className="mx-auto my-0 p-0 bg-slate-400 w-full">
      <div className="relative bg-gray-500 p-8">
        <div
          className="absolute inset-0 opacity-50 bg-cover  bg-center"
          style={{
            backgroundImage: `url('${img1.src}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}></div>

        <div className="flex justify-center align-middle gap-7 relative z-10 font-xl font-bold w-2/3  px-5 py-2 mx-auto text-white">
          <Link href="/products/">Products</Link>
          <Link href="/Home">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="relative text-center py-6 my-9 z-10">
          <h1 className="text-3xl text-white  font-bold mb-4">
            All Product Plug
          </h1>
          <p className="text-gray-100 mb-8">We Got Everything you need.</p>
          <div className="sm:flex sm:justify-center bg-red-400 justify-between gap-4">
            <button
              className="bg-blue-500 text-white font-bold py-3 px-6 rounded-md "
              onClick={() => {
                router.push("/products");
              }}>
              Shop Now
            </button>
            <button
              className="bg-white text-black font-bold py-3 px-6 rounded-md"
              onClick={() => {
                router.push("/about");
              }}>
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className=" w-2/3 mx-auto py-5 px-3 my-5">
        <h2 className="text-left font-bold text-2xl my-5 mx-2">
          Featured Collection
        </h2>
        <div className=" sm:grid sm:grid-cols-3  gap-3">{dispaly()}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
