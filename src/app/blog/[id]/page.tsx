import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
async function getData(id: number) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
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

export async function generateMetadata({ params }: { params: { id: number } }) {
  const post = await getData(params.id);
  return {
    title: post.title,
    description: post.desc,
  };
}
const page = async ({ params }: { params: Params }) => {
  const data: Item = await getData(params.id);
  return (
    <div className="flex flex-col">
      <div className="flex  flex-col sm:flex-row gap-8 sm:gap-5">
        <div className="flex-1">
          <h1 className="text-8xl">{data.title}</h1>
          <p className="opacity-70 italic">{data.username}</p>
          <p>{data.desc}</p>
        </div>
        <div className="relative flex-1 min-h-[400px] w-[350px] sm:min-w-[400px] sm:m-h-[400px] sm:max-w-[500px] m-h-[400px]">
          <Image src={data.img} fill={true} alt="img" className="rounded-md" />
        </div>
      </div>
      <div>
        <p>{data.content}</p>
      </div>
    </div>
  );
};

export default page;
