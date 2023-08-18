import React from "react";
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
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

type Item = {
  id: number;
  title: string;
  body: string;
};

const Blog = async () => {
  const data = await getData();
  return (
    <div>
      {data.map((item: Item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
