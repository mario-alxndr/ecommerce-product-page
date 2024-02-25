// Node Modules
import React from 'react';

// Component
import Image from "next/image";

// Assets
import IconMinus from '@/public/icon/icon-minus.svg';
import IconPlus from '@/public/icon/icon-plus.svg';

const Counter = () => {
  return (
    <div className={'flex p-4 gap-8 bg-light-grayish w-fit rounded'}>
      <Image className={'self-center cursor-pointer'} src={IconMinus} alt={'icon-minus'} width={12} height={4}/>
      <p className={'text-sm font-bold'}>0</p>
      <Image className={'self-center cursor-pointer'} src={IconPlus} alt={'icon-plus'} width={12} height={4}/>
    </div>
  )
}

export default Counter;
