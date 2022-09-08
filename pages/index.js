import React from 'react'
import { useState } from 'react';
import Link  from 'next/link';


const index = () => {

 return (
   
<>

<h1 className=' flex  justify-center font-bold font-poppins ml-2 mr-2'>
   HELPING COMPANIES SUCCEED IN WEB3 WORLD
</h1>
<p className="flex justify-center my-2 font-semibold font-poppins">
CLICK TO DM US FOR A SERVICE 👇
</p>


               <div className='flex justify-center'>
               <button type='button' className=" bg-black-600 px-7 py-2.5 text-lg md:text-sm rounded-md shadow-md shadow-blue-100 active:scale-90 hover:translate-y-2 transition-all">
                <Link href={`https://t.me/metavass`}>NFT MINTING SITE 
                GENERATE 10K NFT COLLECTION AND SELL</Link>
                </button>
                </div>


</>


 )
  
}

export default index