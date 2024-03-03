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
    <header className={
      "grid grid-cols-12 h-16 bg-white px-6 border-b-2 border-light-grayish dweb:h-28"
    }>
      <Image className={'self-center col-span-2'} src={logo} alt={'logo'} />
      <div className={"hidden h-16 self-end text-center cursor-pointer dweb:block"}>
        Collection
      </div>
      <div className={"hidden h-16 self-end text-center cursor-pointer dweb:block"}>
        Men
      </div>
      <div className={"hidden h-16 self-end text-center cursor-pointer dweb:block"}>
        Women
      </div>
      <div className={"hidden h-16 self-end text-center cursor-pointer dweb:block"}>
        About
      </div>
      <div className={"hidden h-16 self-end text-center cursor-pointer dweb:block"}>
        Contact
      </div>
      <Image 
        className={
          'self-center justify-self-center col-start-9 col-span-2 dweb:col-start-11 dweb:col-span-1'
        } 
        src={chart}
        alt={'chart'}
      />
      <Image 
        className={
          'self-center justify-self-center w-6 h-6 border-2 rounded-3xl col-start-11 col-span-2 dweb:w-12 dweb:h-12 dweb:col-start-12 dweb:col-span-1'
        }
        src={profilePict}
        alt={'profile-picture'}
      />
    </header>
  )
}

export default Header;
