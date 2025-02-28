import React, { JSX } from "react";
import pe from "../public/images/pe.jpg";

export default function Footer(): JSX.Element {
  return (
    <div className="w-full flex items-center justify-center mt-5">
      <div className="bg-black w-[90%] text-white flex flex-row justify-between pr-5 gap-5 rounded-[42px] ">
        <div className="flex-col gap-10 p-7">
          <div className="flex flex-row gap-4 text-xs">
            <div className="cursor-pointer">Products</div>
            <div className="cursor-pointer">Support</div>
            <div className="cursor-pointer">About Us</div>
          </div>
          <div className="text-3xl font-bold leading-[1.8rem] mt-5">
            Ready to Experience the Future of Sound
          </div>
        </div>
        <div
          className="w-[300px] rounded-xl bg-gray-400 h-[450px] m-5"
          style={{
            backgroundImage: `url(${pe.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </div>
  );
}
