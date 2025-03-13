import React, { JSX } from 'react';
import Carousel from 'react-multi-carousel';
import responsive from '../utils/breakpoint';
import card from '@/utils/testCards';
import 'react-multi-carousel/lib/styles.css';
import CardContainer from './CardContainer';
import Image from 'next/image';
import image from '@/public/images/image.png';
import Button from './Button';

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
      <div className="max-w-[1300px]">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay={false}
          autoPlaySpeed={4000}
          centerMode={false}
          className="gap-5"
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={false}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={responsive}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={2}
          swipeable
        >
          {card.map((card) => (
            <CardContainer key={card.id} src={card.image}>
              <div
                className="flex max-w-44 gap-3 justify-center items-center
              "
              >
                <div className="line-clamp-2 font-semibold">
                  {card.description}
                </div>
                <div className="font-semibold"> ${card.price}</div>
              </div>
            </CardContainer>
          ))}
        </Carousel>
      </div>
      <div className="w-fit">
        <Button>Explore All Products</Button>
      </div>
    </div>
  );
}
