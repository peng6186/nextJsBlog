import React from "react";
import { notFound } from "next/navigation";
async function getData(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 10 },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    return notFound();
  }

  return res.json();
}

import { Item } from "../page";

type Params = {
  id: number;
};
const page = async ({ params }: { params: Params }) => {
  const data: Item = await getData(params.id);
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
};

export default page;
