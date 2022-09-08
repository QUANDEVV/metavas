import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div  className=" w-full h-10 bg-white border-t-2  fixed left-0 bottom-0 flex justify-center items-center">
    <Link href={`https://t.me/metavass`}>
    Click for a service 📥📩✉️
               </Link>
    
    </div>
  )
}

export default Footer