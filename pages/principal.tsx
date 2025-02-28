import Image from "next/image";
import React, { JSX } from "react";
import imagen from "@/public/portrait-young-happy-woman-studio.jpg";
import CardContainer from "@/components/CardContainer";
import { FaArrowRight } from "react-icons/fa";

export default function Principal(): JSX.Element {
  return (
    <div className="flex justify-center relative w-full min-h-[100vh]">
      <div className="w-[90%] rounded-[42px] overflow-hidden absolute h-[150%]">
        <Image alt="" src={imagen} />
      </div>
      <div className="absolute top-1/3 left-3/4">
        <CardContainer>
          <div className="flex">
            <div className="font-semibold text-xl max-w-[70%]">see the product datails</div>
            <div>
              <FaArrowRight />
            </div>
          </div>
        </CardContainer>
      </div>
    </div>
  );
}
