import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div
      onClick={toggle}
      className="cursor-pointer flex items-center border relative rounded-lg w-[42px]  justify-between  px-1"
    >
      <div>🔆</div>
      <div>🌙</div>
      <div
        className={`${
          mode === "light" ? " left-1" : "right-1"
        } absolute w-[15px] h-[15px] rounded-full bg-emerald-300`}
      />
    </div>
  );
};

export default DarkModeToggle;
