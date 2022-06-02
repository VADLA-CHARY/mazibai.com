import React from 'react'
import {Link} from "react-router-dom"
function Footer() {

    const footerStyle = {
        display:'flex',
        flexDirection:'column'
    }
  return (
    <>
    <section className="foot" style={{width:'100vw'}}>
    <div className="comments">
      <div className="comts">
      </div>
    </div>
    <footer   >
      <div className="content">
        <div className="top">
          <div className="logo-details">
            <span className="logo_name">MaziBai</span>
          </div>

        </div>
        <div className="link-boxes">
          <ul className="box" style={footerStyle}>
            <li className="link_name">Company</li>
            <li><a href="#">Home</a></li>
            <li><a href="tel:9511836323">Contact us</a></li>
            <li><Link to={'/about'}>About us</Link></li>
            <li><Link to="/auth" >Get started</Link></li>
          </ul>
          {/* <ul className="box"style={footerStyle}>
            <li className="link_name" >Services</li>
            <li><a href="#">Baby sitter</a></li>
            <li><a href="#">Coking</a></li>
            <li><a href="#">Cleaning</a></li>
            <li><a href="#">Elderly Care</a></li>
          </ul> */}
          {/* <ul className="box" style={footerStyle}>
            <li className="link_name">Account</li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">My account</a></li>
            <li><a href="#">Prefrences</a></li>

          </ul> */}


          {/* <ul className="box" style={footerStyle}>
            <li className="link_name ">Location</li>
            <iframe className="m"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238130.11877536518!2d78.93242410447118!3d21.161028197938382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d06d0bb3e2b!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1648670766558!5m2!1sen!2sin"
              allowFullScreen="" loading="lazy"></iframe>
        </ul> */}
        </div>
      </div>
      <div className="bottom-details">
        <div className="bottom_text">
          <span className="copyright_text">Copyright &#169; 2021 <a href="#">MaziBai.com</a>All rights reserved</span>
          <span className="policy_terms">
            <a href="#">Privacy policy</a>
            <a href="#">Terms & condition</a>
          </span>
        </div>
      </div>
    </footer>
  </section>
    </>
  )
}

export default Footer