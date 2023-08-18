import Image from "next/image";
import Hero from "public/imgs/hero.png";

export default function Home() {
  return (
    <div className="flex flex-col-reverse sm:flex-row  gap-24 items-center p-6 mx-auto">
      <div className="flex flex-col gap-10 flex-1">
        <h1 className="text-6xl bg-gradient-to-b from-[#194c33] to-[#bbb] text-transparent bg-clip-text font-bold">
          Better design for your digital products
        </h1>
        <p className="text-xl">
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <button className="border rounded-md py-2 px-4 bg-emerald-400 w-max text-slate-500">
          See Our Works
        </button>
      </div>
      <div className="flex-1 animate-move">
        <Image
          src={Hero}
          alt="hero-img"
          className="w-[100%] h-[500px] object-contain"
        />
      </div>
    </div>
  );
}
