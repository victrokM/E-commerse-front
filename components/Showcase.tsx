import React, { JSX } from "react";
import Carousel from "react-multi-carousel";
import responsive from "../utils/breakpoint";
import card from "@/utils/testCards";
import "react-multi-carousel/lib/styles.css";
import CardContainer from "./CardContainer";

export default function Showcase(): JSX.Element {
  return (
    <div className="flex-col">
      <div>
        <div></div>
        <div></div>
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
          infinite
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
              <div className="flex">
                <div>{card.description}</div>
                <div>{card.price}</div>
              </div>
            </CardContainer>
          ))}
        </Carousel>
      </div>
      <div>
        <div>Explore All Products</div>
      </div>
    </div>
  );
}
