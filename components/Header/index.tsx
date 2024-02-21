// Node Modules
import React from 'react';

// Components
import Image from "next/image";

// Assets
import logo from '@/public/logo.svg';
import chart from '@/public/icon/icon-cart.svg';
import profilePict from '@/public/image-avatar.png';

const Header = () => {
  return (
    <header className={"grid grid-cols-12 h-28 bg-white px-6 border-b-2"}>
      <Image className={'self-center col-span-2'} src={logo} alt={'logo'} />
      <div className={"h-16 self-end text-center cursor-pointer"}>
        Collection
      </div>
      <div className={"h-16 self-end text-center cursor-pointer"}>
        Men
      </div>
      <div className={"h-16 self-end text-center cursor-pointer"}>
        Women
      </div>
      <div className={"h-16 self-end text-center cursor-pointer"}>
        About
      </div>
      <div className={"h-16 self-end text-center cursor-pointer"}>
        Contact
      </div>
      <Image className={'self-center justify-self-center col-start-11'} src={chart} alt={'chart'} />
      <Image className={'self-center justify-self-center col-start-12 w-12 h-12 border-2 border-amber-300 rounded-3xl'} src={profilePict} alt={'profile-picture'} />
    </header>
  )
}

export default Header;
