"use client";
import { log } from "console";
import { Metadata } from "next";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
const metadata: Metadata = {
  title: "XU-SDE/Dashboard",
  description: "Dashboard",
};
const DashBoard = () => {
  // const session = useSession();
  // console.log(session);

  const fetcher = (url: any) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  // useEffect(() => {
  //   async function getData() {
  //     setIsLoading(true);
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {});
  //     // The return value is *not* serialized
  //     // You can return Date, Map, Set, etc.

  //     if (!res.ok) {
  //       // This will activate the closest `error.js` Error Boundary
  //       setisError(true);
  //     }

  //     const data = await res.json();
  //     setData(data);
  //     setIsLoading(false);
  //   }
  //   getData();
  // }, []);
  console.log(data);

  return <div>DashBoard Page</div>;
};

export default DashBoard;
