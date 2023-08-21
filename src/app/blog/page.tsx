import Link from "next/link";
import React from "react";
import Image from "next/image";
export const metadata: Metadata = {
  title: "XU-SDE/Blog",
  description: "Blog page",
};
async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    next: { revalidate: 10 },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export type Item = {
  _id: number;
  title: string;
  desc: string;
  content: string;
  username: string;
  img: string;
};

const Blog = async () => {
  const data = await getData();
  return (
    <div className="p-5">
      {data.map((item: Item) => (
        <div className="flex gap-10 items-center">
          <div>
            <Image src={item.img} alt="img" width={450} height={300} />
          </div>
          <div>
            <Link href={`/blog/${item._id}`}>
              <h1 className="text-6xl font-bold">{item.title}</h1>
            </Link>
            <p className="text-xl">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
