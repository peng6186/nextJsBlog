import React from "react";
import Image from "next/image";
import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (cat: string) => {
  const data = items[`${cat}`];
  if (data) return data;
  return notFound();
};

const Category = ({ params }: { params: { category: string } }) => {
  console.log(params);
  const data = getData(params.category);
  return (
    <div>
      <h1 className="text-4xl font-semibold text-[#53c28a]">
        {params.category}
      </h1>
      <div className="mt-10 flex flex-col gap-20">
        {data.map(
          (item: {
            id: number;
            title: string;
            desc: string;
            image: string;
          }) => (
            <div
              key={item.id}
              className="flex flex-col sm:odd:flex-row sm:even:flex-row-reverse gap-8 sm:flex-row"
            >
              <div className="flex-1 flex flex-col gap-10">
                <h1 className="text-5xl text-slate-700 font-semibold">
                  {item.title}
                </h1>
                <p>{item.desc}</p>
                <button className="border rounded-md py-2 px-4 bg-emerald-400 text-slate-500 w-max">
                  See More
                </button>
              </div>
              <div className="flex-1 relative max-w-[40%] min-w-[350px]  h-[450px] min-h-[400px]">
                <Image src={item.image} fill={true} alt="img" />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Category;
