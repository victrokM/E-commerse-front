import React, { JSX } from 'react';
import CardImage from './CardImage';
import { product } from '@/models/product.interface';
import { FaArrowRight } from 'react-icons/fa6';

interface props {
  product: product;
  src?: string;
  isLink?: boolean;
}

export default function CardContainer({
  product,
  src,
  isLink
}: props): JSX.Element {
  // console.log(product.description);
  return (
    <div className="w-fit max-w-[100%] bg-slate-100 rounded-2xl flex flex-col p-2 gap-2 cursor-pointer ">
      <CardImage src={src ?? ''} />
      <div
        className="flex max-w-44 gap-3 justify-center items-center"
        key={product?.id}
      >
        <div className="line-clamp-2 font-semibold">
          {product?.description ?? ''}
        </div>
        {isLink ? (
          <div className="min-w-8 flex justify-center items-center text-2xl transition-all hover:animate-pulse hover:scale-125 ">
            <FaArrowRight />
          </div>
        ) : (
          <div className="font-semibold"> ${product?.price}</div>
        )}
      </div>
    </div>
  );
}
