import React from "react";
import { useRouter } from "next/router";

export default function shoeDetails() {
  const router = useRouter();
  const shoeId = router.query.shoeid;
  return <h1 className="font-bold">Selected shoe is :{shoeId}</h1>;
}
