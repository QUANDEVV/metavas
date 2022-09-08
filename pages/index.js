import React from 'react'
import { useState } from 'react';
import Link  from 'next/link';


const index = () => {

 return (
   
<>

<h1 className=' flex  justify-center font-bold font-poppins text-[0.96rem]'>
   HELPING COMPANIES SUCCEED IN WEB3 WORLD
</h1>
<p className="flex justify-center my-2 font-semibold font-poppins text-[0.9rem]">
CLICK TO DM US FOR A SERVICE 👇
</p>   






               <div className='flex justify-center mt-8'>
               <button type='button' className=" bg-black-600 px-2  text-lg md:text-sm rounded-md shadow-xl  shadow-blue-300 active:scale-90 hover:translate-y-2 transition-all border-t-4 border-blue-300 font-semibold ">
                <Link href={`https://t.me/metavass`}>NFT MINTING SITE 
               </Link>
                </button>
                </div>

               <div className='flex justify-center mt-8'>
               <button type='button' className=" bg-black-600 px-2  text-lg md:text-sm rounded-md shadow-xl  shadow-blue-300 active:scale-90 hover:translate-y-2 transition-all border-t-4 border-blue-300 font-semibold ">
                <Link href={`https://t.me/metavass`}>NFT MINTING SITE 
                GENERATE 10K NFT COLLECTION AND SELL</Link>
                </button>
                </div>

                <div className='flex justify-center mt-8'>
               <button type='button' className=" bg-black-600 px-10  text-lg md:text-sm rounded-md shadow-xl  shadow-blue-300 active:scale-90 hover:translate-y-2 transition-all border-t-4 border-blue-300 font-semibold ">
                <Link href={`https://t.me/metavass`}>NFT MARKET PLACE LIKE OPENSEA
                </Link>
                </button>
                </div>


               

                <div className='flex justify-center mt-8'>
               <button type='button' className=" bg-black-600 px-10  text-lg md:text-sm rounded-md shadow-xl  shadow-blue-300 active:scale-90 hover:translate-y-2 transition-all border-t-4 border-blue-300 font-semibold ">
                <Link href={`https://t.me/metavass`}>NFT WEBSITE
                </Link>
                </button>
                </div>

                <div className='flex justify-center mt-8'>
               <button type='button' className=" bg-black-600 px-10  text-lg md:text-sm rounded-md shadow-xl  shadow-blue-300 active:scale-90 hover:translate-y-2 transition-all border-t-4 border-blue-300 font-semibold ">
                <Link href={`https://t.me/metavass`}>NFT SMART CONTRACT
                </Link>
                </button>
                </div>


                <div className='flex justify-center mt-8'>
               <button type='button' className=" bg-black-600 px-10  text-lg md:text-sm rounded-md shadow-xl  shadow-blue-300 active:scale-90 hover:translate-y-2 transition-all border-t-4 border-blue-300 font-semibold ">
                <Link href={`https://t.me/metavass`}>CRYPTO COIN DEVELOPMENT
                </Link>
                </button>
                </div>





</>


 )
  
}

export default index