"use client";
import Link from "next/link";
import React from "react";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <div className="p-5 flex justify-between items-center">
      <Link href="/" className="font-bold text-lg text-slate-500">
        {" "}
        XU-SDE{" "}
      </Link>
      <div className="flex gap-4 items-center text-slate-500">
        <DarkModeToggle />
        {links.map((link) => (
          <Link href={link.url} key={link.id}>
            {link.title}
          </Link>
        ))}
        <button
          className="border rounded-md py-2 px-4 bg-emerald-400"
          onClick={() => {
            console.log("Logout");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
