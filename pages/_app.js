import { Component } from 'react'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import Modal from '../components/Modal'

import Script from 'next/script';

const MyApp = ({ Component, pageProps}) => (

 <>
  <div className=" ">
  {/* <Modal /> */}
  <Navbar />
    <div className="pt-65 h-[150vh] ">
      <Component {...pageProps} />
    </div>
    
    <Footer />
    
  </div>

  <Script src="https://kit.fontawesome.com/d45b25ceeb.js" crossorigin="anonymous" />

</>

)
 


export default MyApp