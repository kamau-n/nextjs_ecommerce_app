import Link from "next/link";
import React from "react";

export default function pageNotFound() {
  return (
    <div className="w-1/2 m-auto bg-slate-400 p-16 h-screen">
      <h2>It seems the page you are looking for is not found</h2>
      <Link href="/">Go back to homepage</Link>
    </div>
  );
}
