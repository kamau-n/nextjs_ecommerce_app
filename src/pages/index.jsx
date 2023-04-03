import Link from "next/link";

const Home = () => {
  return (
    <div className="mx-auto my-10 p-10 bg-slate-400 w-2/3">
      <h2 className="text-center text-2xl font-bold">HomePage</h2>
      <div className="w-1/2 flex mx-auto justify-between p-10">
        <Link href="/products" className="font-bold text-blue-500">
          Products
        </Link>
        <Link href="/products" className="font-bold text-blue-500">
          About
        </Link>
        <Link href="/about" className="font-bold text-blue-500">
          Profile
        </Link>
      </div>
    </div>
  );
};

export default Home;
