import React from 'react';
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Home/Navbar';
import Cards from '../components/Home/Cards';
// import AuthContext from '../Context/AuthContext';

import Footer from "../components/Home/Footer"
import Head from '../components/Home/Head';
import Maids from "../components/Home/Maids"
import Services from "../components/Home/Services"
import SocialLinks from '../components/Home/SocialLinks';
import Testimonials from "../components/Home/Testimonials"
import WhyUs from "../components/Home/WhyUs"
import WhatWeDo from "../components/Home/WhatWeDo"

import "../styles/Home.css"
import CustomerTestimonial from '../components/Home/CustomerTestimonial';
import ScrollTop from '../components/Home/ScrollTop';

function Home() {
    const navigate = useNavigate(); 
  return (
    <>
    <ScrollTop/>
    <Navbar/>
    <Head/>
    <SocialLinks/>
    <Cards/>
    <div className='container' style={{marginRight:'auto',marginLeft:'auto'}}>
        <WhatWeDo/>
     </div>

      {/* <WhatWeDo/> */}
      <div>
        <Services/>
      </div>
      <div className='container' style={{marginRight:'auto',marginLeft:'auto'}}>
          {/* <Maids/> */}
        {/* <Testimonials/> */}
        <CustomerTestimonial/>
      </div>
      <WhyUs/>

      <Footer/>
    </>
  )
}
export default Home;
