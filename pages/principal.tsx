import Image from "next/image";
import React, { JSX } from "react";
import imagen from "@/public/portrait-young-happy-woman-studio.jpg";
import CardContainer from "@/components/CardContainer";
import { FaArrowRight } from "react-icons/fa";

export default function Principal(): JSX.Element {
  return (
    <div className="flex justify-center relative w-full min-h-[90vh]">
      <div className="w-[90%] rounded-[42px] overflow-hidden absolute h-[100%]">
        <Image alt="" src={imagen} />
      </div>
      <div className="absolute top-2/4 left-3/4">
        <CardContainer>
          <div className="flex w-fit items-center cursor-pointer">
            <div className="font-semibold text-xl max-w-[165px]">
              see the product datails
            </div>
            <div className="min-w-8 flex justify-center items-center text-2xl transition-all hover:animate-pulse hover:scale-125 ">
              <FaArrowRight />
            </div>
          </div>
        </CardContainer>
      </div>
    </div>
  );
}
