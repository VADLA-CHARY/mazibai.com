import React from 'react'

function New() {
  return (
    <>
    <div className="site-mobile-menu-body">
    <ul className="site-nav-wrap">
                <li className="active"><a href="#home-section" className="nav-link">Home</a></li>
                <li className="has-children"><span className="arrow-collapse collapsed" data-toggle="collapse" data-target="#collapseItem0"></span>
                  <a href="#" className="nav-link">Services <span className="text-right"><i className="fas fa-angle-down"></i></span></a>
                  <ul className="collapse" id="collapseItem0">
                    <li className="has-children"><span className="arrow-collapse collapsed" data-toggle="collapse" data-target="#collapseItem1"></span>
                      <a href="#">House Cleaning  <span className="float-right"><i className="fas fa-angle-down"></i></span></a>
                      <ul className="collapse" id="collapseItem1">
                        <li><a href="book.html">Hygienic </a></li>
                        <li><a href="book.html">Comprehensive </a></li>
                      
                      </ul>
                    </li>
                    <li><a href="book.html" className="nav-link">Elderly Care</a></li>
                    <li>
                      <a href="book.html">Cook</a>
                      
                    </li>
                    <li>
                      <a href="book.html">Hygienic Kitchen Care</a>
                      
                    </li>
                    <li>
                      <a href="book.html">Baby Sitting</a>
                      
                    </li>
                    <li>
                      <a href="book.html"> Laundry</a>
                      
                    </li>
                    <li>
                      <a href="book.html">Caring Nurses</a>
                      
                    </li>
                    <li>
                      <a href="book.html">Patient Care</a>
                      
                    </li>
                    
                    
                    <li className="has-children"><span className="arrow-collapse collapsed" data-toggle="collapse" data-target="#collapseItem2"></span>
                      <a href="book.html"> Mother Care  <span className="float-right"><i className="fas fa-angle-down"></i></span> </a>
                      <ul className="collapse" id="collapseItem2">
                        <li><a href="book.html">New Born Baby</a></li>
                        <li><a href="book.html">Massager</a></li>
                        
                      </ul>
                    </li>
                    <li>
                      <a href="book.html">Office Boy</a>
                      
                    </li>
                    <li>
                      <a href="book.html">Painting</a>
                      
                    </li>
                    <li>
                      <a href="book.html"> Beauty Care</a>
                      
                    </li>
                    <li>
                      <a href="book.html"> Gardener </a>
                      
                    </li>
                   
                  </ul>
                </li>
                <li><a href="about.html" className="nav-link">About</a></li>
                <li><a href="#gallery-section" className="nav-link">Gallery</a></li>
                <li><a href="#contact-section">Contact</a></li>
                
                <div className="mediaIcons">
                 <li className="togglerefer"><a href="#refer" className="nav-link border-btn">Refer a Maid</a></li>
                 <li className="togglewant"><a href="#job" className="nav-link border-btn">Want a Job</a></li>
                 <li className="toggler"><a href="#partner" className="nav-link border-btn ">Register as Partner</a></li>
                 
              </div>
              </ul>
              </div>    
    </>

  )
}

export default New