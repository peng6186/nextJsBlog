import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="p-5 flex justify-between items-center">
      <div className="text-slate-500">2023 XU-SDE. All rights reserved.</div>
      <div className="flex items-center gap-4 cursor-pointer">
        <Image src="/imgs/1.png" alt="social-media" width={20} height={20} />
        <Image src="/imgs/2.png" alt="social-media" width={20} height={20} />
        <Image src="/imgs/3.png" alt="social-media" width={20} height={20} />
        <Image src="/imgs/4.png" alt="social-media" width={20} height={20} />
      </div>
    </div>
  );
};

export default Footer;
