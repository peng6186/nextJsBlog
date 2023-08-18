import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col flex-1 p-6 gap-12">
      <div className="relative w-[100%] h-[200px] ">
        <Image
          className="object-cover rounded-md grayscale"
          alt="img"
          fill={true}
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <div className="absolute bottom-4 left-4 right-4 sm:w-max  p-2 bg-emerald-500 rounded-md">
          <h1 className="text-lg font-bold text-white">Digital Storytellers</h1>
          <h2 className="text-base text-white">
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-8">
        <div className="flex-1">
          <h1 className="text-3xl font-semibold text-slate-600">Who Are We?</h1>
          <p className="mt-4 text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
          </p>
          <br />
          <br />
          <p className="text-slate-500">
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-semibold text-slate-600">What We Do?</h1>
          <p className="mt-4 text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
          </p>
          <br />
          <br />
          <p className="text-slate-500">- Dynamic Websites</p>
          <br />
          <p className="text-slate-500">- Fast and Handy</p>
          <br />
          <p className="text-slate-500">- Mobile Apps</p>
          <br />
          <button className="border rounded-md py-2 px-4 bg-emerald-400 text-slate-500">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
