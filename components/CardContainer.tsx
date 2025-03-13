import React, { JSX } from 'react';
import CardImage from './CardImage';

interface props {
  children: React.ReactNode;
  src?: string;
}

export default function CardContainer({ children, src }: props): JSX.Element {
  return (
    <div className="w-fit max-w-[100%] bg-slate-100 rounded-2xl flex flex-col p-2 gap-2 cursor-pointer ">
      <CardImage src={src ?? ''} />
      <div className="w-fit">{children}</div>
    </div>
  );
}
