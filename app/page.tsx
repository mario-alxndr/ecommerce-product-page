// Node Modules
import React from 'react';

// Component
import Counter from '@/components/Counter';
import Header from "@/components/Header";
import Image from "next/image";

// Assets
import ImageProduct1 from '@/public/image-product-1.jpg';
import ImageProductThumbnail1 from '@/public/image-product-1-thumbnail.jpg';
import ImageProductThumbnail2 from '@/public/image-product-2-thumbnail.jpg';
import ImageProductThumbnail3 from '@/public/image-product-3-thumbnail.jpg';
import ImageProductThumbnail4 from '@/public/image-product-4-thumbnail.jpg';
import AddToChartButton from '@/components/AddToChartButton';

const HomePage = () => {
  return (
    <main className={"block max-w-7xl mx-auto bg-white"}>
      <Header />
      <div className={"h-fit grid grid-cols-1 dweb:grid-cols-2 dweb:py-20 dweb:px-14"}>
        <div className={'hidden w-[440px] mx-auto dweb:block'}>
          <Image className={'rounded-2xl mx-auto'} src={ImageProduct1} alt={'preview-image-1'} height={440}/>
          <div className={'flex mt-8 gap-7 '}>
            <Image className={'rounded-xl'} src={ImageProductThumbnail1} alt={'preview-image-1'}/>
            <Image className={'rounded-xl'} src={ImageProductThumbnail2} alt={'preview-image-2'}/>
            <Image className={'rounded-xl'} src={ImageProductThumbnail3} alt={'preview-image-3'}/>
            <Image className={'rounded-xl'} src={ImageProductThumbnail4} alt={'preview-image-4'}/>
          </div>
        </div>
        <div className={'p-5 dweb:p-16'}>
          <p className={'text-orange text-sm'}>SNEAKER COMPANY</p>
          <p className={'text-3xl font-bold mt-6 dweb:text-5xl'}>Fall Limited Edition Sneakers</p>
          <p className={'mt-6 text-dark-grayish text-sm'}>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
          <div className={'mt-8 flex'}>
            <p className={'text-4xl font-bold mr-4'}>$125.00</p>
            <div className={'self-center px-2 py-1 bg-paleorange rounded-lg font-normal'}><p className={'text-base text-orange font-bold'}>50%</p></div>
            <p className={'self-center text-grayish line-through text-right grow shrink-0 basis-auto dweb:hidden'}>$250.00</p>
          </div>
          <p className={'hidden text-grayish line-through mt-4 dweb:block'}>$250.00</p>
          <div className={'mt-8 dweb:flex dweb:gap-4'}>
            <Counter />
            <div className='mt-4 dweb:mt-0'>
              <AddToChartButton />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default HomePage;
