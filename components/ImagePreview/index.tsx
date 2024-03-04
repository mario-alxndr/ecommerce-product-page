'use client'

// Node Modules
import React, { useState } from 'react';
import cn from 'classnames';

// Component
import Image from "next/image";

// Assets
import ImageProduct1 from '@/public/image-product-1.jpg';
import ImageProduct2 from '@/public/image-product-2.jpg';
import ImageProduct3 from '@/public/image-product-3.jpg';
import ImageProduct4 from '@/public/image-product-4.jpg';
import ImageProductThumbnail1 from '@/public/image-product-1-thumbnail.jpg';
import ImageProductThumbnail2 from '@/public/image-product-2-thumbnail.jpg';
import ImageProductThumbnail3 from '@/public/image-product-3-thumbnail.jpg';
import ImageProductThumbnail4 from '@/public/image-product-4-thumbnail.jpg';

const ImagePreview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagePreview = [
    ImageProduct1,
    ImageProduct2,
    ImageProduct3,
    ImageProduct4,
  ];

  const imageThumbnails = [
    ImageProductThumbnail1,
    ImageProductThumbnail2,
    ImageProductThumbnail3,
    ImageProductThumbnail4
  ];

  return (
    <>
      <Image className={'rounded-2xl mx-auto'} src={imagePreview[currentIndex]} alt={`preview-image-${currentIndex}`} height={440}/>
      <div className={'flex mt-8 gap-7 '}>
        {imageThumbnails.map((image, index) => {
          const handleClickImage = (selectedIndex: number) => () => {
            setCurrentIndex(selectedIndex)
          };

          const imageThumbnailClassname = cn('rounded-xl relative cursor-pointer', {
            'border-2 border-orange' : index === currentIndex
          });

          const overlayBlurClassname = cn('absolute w-[88px] h-[88px] bg-white opacity-0 rounded-xl hover:opacity-75', {
            'opacity-75': index === currentIndex
          });

          return (
            <div className={imageThumbnailClassname} onClick={handleClickImage(index)}>
              {index === currentIndex ? (
                <div className={'absolute w-[88px] h-[88px] bg-white rounded-xl opacity-75'}/>
              ) : <div className={overlayBlurClassname}/> }
              <Image 
                alt={`preview-image-${index}`}
                className={'rounded-xl'}
                src={image}
              />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default ImagePreview;
