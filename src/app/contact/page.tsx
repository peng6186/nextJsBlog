import React from "react";
import Image from "next/image";
import { Metadata } from "next/types";
export const metadata: Metadata = {
  title: "XU-SDE/Contact",
  description: "Contact Page",
};
const Contact = () => {
  return (
    <div className="flex flex-col p-4">
      <h1 className="text-center text-5xl text-slate-700 font-semibold">
        Let's Keep in Touch
      </h1>
      <div className="flex flex-col sm:flex-row gap-6 mt-8">
        <div className="flex-1 relative  sm:min-h-full animate-move">
          <Image
            className="object-contain"
            src="/imgs/contact.png"
            alt="contact-img"
            fill={true}
          />
        </div>
        <form className="flex-1 flex flex-col gap-5">
          <input
            className="p-4 rounded-md outline-none border"
            type="text"
            placeholder="name"
          />
          <input
            className="p-4 rounded-md outline-none border"
            type="email"
            placeholder="email"
          />
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="message"
            className="p-4 border rounded-md"
          ></textarea>
          <button className="border rounded-md py-2 px-4 bg-emerald-400 text-slate-500">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
