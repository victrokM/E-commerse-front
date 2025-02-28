import Image from "next/image";
import React, { JSX } from "react";
import imagen from "@/public/portrait-young-happy-woman-studio.jpg";
import CardContainer from "@/components/CardContainer";

export default function Principal(): JSX.Element {
  return (
    <div className="flex justify-center relative w-full">
      <div className="w-[90%] rounded-[42px] overflow-hidden absolute">
        <Image alt="" src={imagen} />
      </div>
      <div className="absolute">
        <CardContainer>
            <div>hola xd ppunto</div>
        </CardContainer>
      </div>
    </div>
  );
}
