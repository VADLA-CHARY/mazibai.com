import React from 'react'
import "../styles/about.css"
import {Link } from "react-router-dom"; 
export default function About() {
return (
<>
<div class= "headers">
    <li style={{color:'#fff',position:"fixed",left:'30px',top:'30px',zIndex:'1000'}}><Link style={{color:'white'}} to="/"> <i style={{marginRight:'5px'}} className='fas fa-arrow-left'></i>Home</Link></li>
  <nav class="circle">
  </nav>

</div>
<div class="about_us" style={{width:'100vw',marginRight:'auto',marginLeft:'auto'}}>
  <h2 style={{color:'#fff'}}>MAZIBAI</h2>
  <div class="missionn">
    <span>MISSION & VISION</span>
    <p>Our mission & vision is to give the best services at affordable rates. </p>
  </div>
  <span>ABOUT US</span>
  <p style={{color:'#fff'}}>We at MaziBai.com are a team of dedicated people committed to high customer satisfaction. We provide customized and personalized home services at affordable rates. We are customer-oriented and service-oriented not money-oriented. We provide 365 days and 24/7 services if needed, instant maid booking and maid replacement in case your regular maid is on leave. We provide 1, 2 days 1, 2 weeks or 1, 2 months maid/manpower services in case you need it. Try us, we are sure you would love to use our services for the long term. We do background checks and document verification. You can keep your worries out and safely rely on us. We look for a long-term relationship so that customers need not worry about changing maids frequently. Morals and ethics are an integral part of us. As we know during covid, many people lost their jobs, many people are struggling to maintain their homes and families. We support families by providing employment opportunities. We provide employment and a chance to be in touch with good people. At the same time, our maid/manpower provides free time, to our customers. This time can be utilized for personal or professional development or to do things that you always wanted to do but were unable to do because of a lack of time and support. We reduce the stress and household worries of our customers and let them enjoy their precious life happily. We strive hard to strengthen the socio-economic status, build a good society and create employment opportunities thus positively contributing to Indian Economy.</p>
  <span>OUR COMMITMENT</span>
  <p style={{color:'#fff'}}>
    Thank you for considering us. Our vision and commitment is to deliver quality services.
  </p>
</div>
</>

)}