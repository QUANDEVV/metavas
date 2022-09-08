import { Component } from 'react'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import Navbar from '../components/Navbar'
// import Modal from '../components/Modal'

import Script from 'next/script';

const MyApp = ({ Component, pageProps}) => (

 <>
  <div className=" ">
  {/* <Modal /> */}
  <Navbar />
    <div className="pt-65">
      <Component {...pageProps} />
    </div>
    
  </div>

  <Script src="https://kit.fontawesome.com/d45b25ceeb.js" crossorigin="anonymous" />

</>

)
 


export default MyApp