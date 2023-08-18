import Image from "next/image";
import Link from "next/link";
import React from "react";

const Portfolio = () => {
  return (
    <div className="mt-5">
      <h1 className="text-slate-500 text-4xl"> Choose a gallery </h1>
      <div className="mt-5 flex flex-col  sm:flex-row gap-5">
        <div className="relative w-[300px] h-[400px] border-2 rounded-sm">
          <Image
            src="/imgs/illustration.png"
            className=""
            alt="illustration"
            fill={true}
          />
          <Link
            href="/portfolio/illustrations"
            className="absolute right-0 bottom-0 text-slate-400 text-xl p-4 hover:opacity-70"
          >
            Illustrations
          </Link>
        </div>
        <div className="relative w-[300px] h-[400px] border-2 rounded-sm ">
          <Image
            src="/imgs/websites.jpg"
            className=""
            alt="websites"
            fill={true}
          />
          <Link
            href="/portfolio/websites"
            className="absolute right-0 bottom-0 p-4 text-slate-400 text-xl hover:opacity-70"
          >
            Websites
          </Link>
        </div>
        <div className="relative w-[300px] h-[400px] border-2 rounded-sm">
          <Image
            src="/imgs/apps.jpg"
            className=""
            alt="application"
            fill={true}
          />
          <Link
            href="/portfolio/application"
            className="absolute right-0 bottom-0 p-4 text-slate-400 text-xl hover:opacity-70"
          >
            applications
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
