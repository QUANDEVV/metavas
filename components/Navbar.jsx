import { useEffect, useState, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import images from '../assets';
import Button from './Button';







  

     


 
const Navbar = () => {
  const [first, setfirst] = useState(true)
   

  return (
<nav className="flexBetween w-full fixed z-10 p-2 flex-row border-b"> 


                     <div className="flex flex-1 flex-row justify-start">
                                <Link href="/">
                                <div className="flexCenter md:hidden cursor-pointer" onClick={() => {}}>
                                <Image src={images.opensea} objectFit="contain" width={32} height={32} alt="logo" />
                                <p className=" dark:text-white text-nft-black-1 font-semibold text-lg ml-1">metavas</p>
                                </div>
                                </Link>

                                <Link href="/">
                                <div className="hidden md:flex"
                                onClick={() => {}}>
                                <Image src={images.opensea} objectFit="contain" width={32} height={32} alt="logo" />
                                <p className=" dark:text-white text-nft-black-1 font-semibold text-lg ml-3 ">metavas</p>
                                </div>
                                </Link> 
                                </div>

      
    </nav>
  );
};

export default Navbar;

           