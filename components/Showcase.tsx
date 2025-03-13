import React, { JSX } from 'react';
import card from '@/utils/testCards';
import 'react-multi-carousel/lib/styles.css';
import CardContainer from './CardContainer';
import Image from 'next/image';
import image from '@/public/images/image.png';
import Button from './Button';
import CarouselComponent from './CarouselComponent';

export default function Showcase(): JSX.Element {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex w-full justify-between items-center">
        <div className="text-6xl font-semibold max-w-[900px]">
          Designed for seamless sound and advanced technology.
        </div>
        <div className="pr-12">
          <Image
            alt="image"
            src={image}
            width={0}
            height={0}
            className="w-32 h-32 overflow-hidden rounded-lg object-cover"
          />
        </div>
      </div>
      <CarouselComponent Products={card} cardComponent={CardContainer} />
      <div className="w-full flex justify-center">
        <div className="w-fit">
          <Button>Explore All Products</Button>
        </div>
      </div>
    </div>
  );
}
