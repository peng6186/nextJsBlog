import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-1 p-5">
      <h1 className="text-8xl text-slate-600 font-semibold">Our Works</h1>
      {children}
    </div>
  );
};

export default layout;
