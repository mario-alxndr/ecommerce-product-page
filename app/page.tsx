// Node Modules
import React from 'react';

// Component
import Header from "@/components/Header";
import Image from "next/image";

// Assets
import ImageProduct1 from '@/public/image-product-1.jpg';
import ImageProductThumbnail1 from '@/public/image-product-1-thumbnail.jpg';
import ImageProductThumbnail2 from '@/public/image-product-2-thumbnail.jpg';
import ImageProductThumbnail3 from '@/public/image-product-3-thumbnail.jpg';
import ImageProductThumbnail4 from '@/public/image-product-4-thumbnail.jpg';

const HomePage = () => {
  return (
    <main className={"block max-w-7xl mx-auto bg-white"}>
      <Header />
      <div className={"h-screen grid grid-cols-2 py-20 px-14"}>
        <div>
          <Image className={'rounded-2xl'} src={ImageProduct1} alt={'preview-image-1'}/>
          <div className={'flex mt-8 gap-7'}>
            <Image className={'rounded-xl'} src={ImageProductThumbnail1} alt={'preview-image-1'}/>
            <Image className={'rounded-xl'} src={ImageProductThumbnail2} alt={'preview-image-2'}/>
            <Image className={'rounded-xl'} src={ImageProductThumbnail3} alt={'preview-image-3'}/>
            <Image className={'rounded-xl'} src={ImageProductThumbnail4} alt={'preview-image-4'}/>
          </div>
        </div>
        <div className={'p-16'}>
          <p className={'text-orange text-sm'}>SNEAKER COMPANY</p>
          <p className={'text-5xl font-bold mt-6'}>Fall Limited Edition Sneakers</p>
        </div>
      </div>
    </main>
  )
}

export default HomePage;
