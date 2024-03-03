// Node Modules
import React from 'react';

// Component
import Image from "next/image";

// Assets
import IconMinus from '@/public/icon/icon-minus.svg';
import IconPlus from '@/public/icon/icon-plus.svg';

const Counter = () => {
  return (
    <div className={'w-full flex justify-between p-4 gap-8 bg-light-grayish rounded dweb:w-fit'}>
      <div className={'cursor-pointer py-[10px]'}>
        <Image className={'self-center'} src={IconMinus} alt={'icon-minus'} width={12} height={4}/>
      </div>
      <p className={'text-sm font-bold'}>0</p>
      <div className={'cursor-pointer py-[6px]'}>
        <Image className={'self-center cursor-pointer'} src={IconPlus} alt={'icon-plus'} width={12} height={4}/>
      </div>
    </div>
  )
}

export default Counter;
