'use client'

// Node Modules
import React, { useState } from 'react';

// Component
import Slider from "react-slick";
import Image from "next/image";

// Assets
import ImageProduct1 from '@/public/image-product-1.jpg';
import ImageProduct2 from '@/public/image-product-2.jpg';
import ImageProduct3 from '@/public/image-product-3.jpg';
import ImageProduct4 from '@/public/image-product-4.jpg';

// Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Assets
import PreviousIcon from '@/public/icon/icon-previous.svg';
import NextIcon from '@/public/icon/icon-next.svg';

const Carousel = () => {
  // const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // const onClickPrevButton = () => {

  // };

  // const onClickNextButton = () => {

  // };

  const PrevArrow = (props: any) => {
    const { onClick } = props;

    return (
      <div onClick={onClick} className={'absolute top-[167.5px] left-6 px-[14px] py-[11px] w-10 h-10 rounded-full cursor-pointer bg-white z-10'}>
        <Image src={PreviousIcon} alt={'previous-icon'} />
      </div>
    );
  }
  
  const NextArrow = (props: any) => {
    const { onClick } = props;

    return (
      <div onClick={onClick} className={'absolute top-[167.5px] right-6 px-[14px] py-[11px] w-10 h-10 rounded-full cursor-pointer bg-white'}>
        <Image src={NextIcon} alt={'next-icon'} />
      </div>
    );
  }

  return (
    <div className={'block mx-auto'}>
      <Slider
        className={'center'}
        infinite
        nextArrow={<NextArrow />}
        prevArrow={<PrevArrow />}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        waitForAnimate={false}
      >
        <div>
          <Image className={'mx-auto'} src={ImageProduct1} alt={'image-product-1'} width={375} height={375} />
        </div>
        <div>
          <Image className={'mx-auto'} src={ImageProduct2} alt={'image-product-2'} width={375} height={375} />
        </div>
        <div>
          <Image className={'mx-auto'} src={ImageProduct3} alt={'image-product-3'} width={375} height={375} />
        </div>
        <div>
          <Image className={'mx-auto'} src={ImageProduct4} alt={'image-product-4'} width={375} height={375} />
        </div>
      </Slider>
    </div>
  )
}

export default Carousel;
