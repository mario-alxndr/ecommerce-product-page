// Node Modules
import React from 'react';

// Component
import AddToChartButton from '@/components/AddToChartButton';
import Carousel from '@/components/Carousel';
import Counter from '@/components/Counter';
import Header from "@/components/Header";
import ImagePreview from '@/components/ImagePreview';

const HomePage = () => {
  return (
    <main className={"block max-w-7xl mx-auto bg-white"}>
      <Header />
      <div className={"h-fit grid grid-cols-1 dweb:grid-cols-2 dweb:py-20 dweb:px-14"}>
        {/* dweb image content */}
        <div className={'hidden w-[440px] mx-auto dweb:block'}>
          <ImagePreview/>
        </div>
        {/* mweb image content */}
        <div className={'dweb:hidden'}>
          <Carousel />
        </div>
        <div className={'p-5 dweb:p-16'}>
          <p className={'text-orange text-sm'}>SNEAKER COMPANY</p>
          <p className={'text-black text-3xl font-bold mt-6 dweb:text-5xl'}>Fall Limited Edition Sneakers</p>
          <p className={'mt-6 text-dark-grayish text-sm'}>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
          <div className={'mt-8 flex justify-between'}>
            <div className={'inline-block'}>
              <p className={'text-black inline-block text-4xl font-bold mr-4'}>$125.00</p>
              <div className={'inline-block align-super px-2 py-1 bg-paleorange rounded-lg font-normal'}><p className={'text-base text-orange font-bold'}>50%</p></div>
            </div>
            <p className={'self-center text-grayish line-through dweb:hidden'}>$250.00</p>
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
