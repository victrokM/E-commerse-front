// react
import React, { JSX } from 'react';

import clsx from 'clsx';
import Carousel from 'react-multi-carousel';
import responsive from '@/utils/breakpoint';
import { product } from '@/models/product.interface';

interface CardProps {
  product: product;
  onCreateCarousels?: () => void;
  isProduct?: boolean;
  index?: number;
}

interface Props {
  Products: product[];
  cardComponent?: React.ComponentType<CardProps>;
  isProduct?: boolean;
  useLoading?: boolean;
}

export default function CarouselComponent({
  Products,
  cardComponent
}: Props): JSX.Element {
  const CardComponent = cardComponent ?? (() => <></>);

  return (
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
        {Products?.map((item) => (
          <div
            key={item.id}
            className={
              clsx()
              // 'grow-0 shrink-0 px-2.5 mb-4 max-w-[50%] md:max-w-[25%] lg:w-[20%] basis-6/12 md:basis-1/4 lg:basis-[20%]'
            }
          >
            <>
              <CardComponent product={item} />
            </>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
