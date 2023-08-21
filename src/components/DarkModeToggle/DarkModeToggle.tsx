import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div
      onClick={toggle}
      className="cursor-pointer flex items-center border relative rounded-lg w-[46px]  gap-1 justify-between  px-1 "
    >
      <div>🔆</div>
      <div>🌙</div>
      <div
        className={`${
          mode === "light" ? " left-1" : "right-1"
        } absolute w-[18px] h-[18px] rounded-full bg-emerald-300`}
      />
    </div>
  );
};

export default DarkModeToggle;
