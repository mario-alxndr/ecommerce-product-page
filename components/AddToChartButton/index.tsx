// Node Modules
import React from 'react';

// Component
import Image from "next/image";

// Assets
import IconChartWhite from '@/public/icon/icon-cart-white.svg';

const AddToChartButton = () => {
  return (
    <button className={'w-full py-4  inline-block bg-orange rounded dweb:w-64'}>
      <Image className={'inline-block mr-4'} src={IconChartWhite} alt={'add-to-chart'}/>
      <p className={'inline-block text-white font-bold'}>Add to chart</p>
    </button>
  )
}

export default AddToChartButton;
