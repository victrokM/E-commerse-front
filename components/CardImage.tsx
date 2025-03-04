import Image from "next/image";
import React from "react";
import gif from "@/public/loading.gif";

interface props {
  src: string;
}

export default function CardImage({ src }: props) {
  return (
    <div className="rounded-xl overflow-hidden">
      <Image alt="" src={src !== "" ? src : gif} width={0} height={0}/>
    </div>
  );
}
