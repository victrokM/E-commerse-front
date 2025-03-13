import Image from 'next/image';
import React, { JSX } from 'react';
import imagen from '@/public/portrait-young-happy-woman-studio.jpg';
import CardContainer from '@/components/CardContainer';

export default function Principal(): JSX.Element {
  return (
    <div className="flex justify-center relative w-full min-h-[90vh]">
      <div className="w-[90%] rounded-[42px] overflow-hidden absolute h-[100%]">
        <Image alt="" src={imagen} />
      </div>
      <div className="absolute top-2/4 left-3/4">
        <CardContainer
          src=""
          product={{
            id: 0,
            description: 'see the product datails',
            price: 0,
            image: ''
          }}
          isLink={true}
        />
      </div>
    </div>
  );
}
