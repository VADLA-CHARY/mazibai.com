import React from 'react'
import Worker from "../../images/1.png"
import "../../styles/whatWeDo.css"
function WhatWeDo() {
  return (
    <>
    <section>
    <div id="features-section" className="pad-sec">
      <div className="whatWeDo">
        <div className="title-section text-center animated out" data-animation="fadeInUp" data-delay="0">
          <div className="row">
            <div className="col-sm-8 col-sm-offset-2">
              <h2>What we do?</h2>
              <hr/>
              <span className="bgcolor H6">We Provide Customised {'&'} Personalised Home Services at affordable
                rates.</span>
            </div>
          </div>
        </div>
        <div className="row COL" >
          <div className="col-md-12 without-padding">
            <div className="left-features-services">
              <ul className="features-list">
                <li>
                  <div className="left-features-box animated out" data-animation="fadeInLeft" data-delay="0">
                    <span className="iconbox"><i className="fa fa-coffee"></i></span>
                    <div className="features-box-content">
                      <h6>Delicious & Nutritious Cook</h6>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="left-features-box animated out" data-animation="fadeInLeft" data-delay="0">
                    <span className="iconbox"><i className="fa fa-snowflake-o"></i></span>
                    <div className="features-box-content">
                      <h6>Hygienic House Cleaning</h6>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="left-features-box animated out" data-animation="fadeInLeft" data-delay="0">
                    <span className="iconbox"><i className="fas fa-baby-carriage"></i></span>
                    <div className="features-box-content">
                      <h6>Loving & Caring Baby Sitting</h6>
                    </div> 
                  </div>
                </li>
                <li>
                  <div className="left-features-box animated out" data-animation="fadeInLeft" data-delay="0">
                    <span className="iconbox"><i className="fas fa-broom"></i></span>
                    <div className="features-box-content">
                      <h6>Comprehensive House Cleaning</h6>
                    </div> 
                  </div> 
                </li>
               
                <li>
                  <div className="right-features-box animated out" data-animation="fadeInRight" data-delay="0">
                    <span className="iconbox"><i className="fa fa-users"></i></span>
                    <div className="features-box-content">
                      <h6>Office Boy/ Office Worker</h6>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="right-features-box animated out" data-animation="fadeInRight" data-delay="0">
                    <span className="iconbox"><i className="fas fa-paint-roller"></i></span>
                    <div className="features-box-content">
                      <h6>House Coloring and Painting</h6>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="right-features-box animated out" data-animation="fadeInRight" data-delay="0">
                    <span className="iconbox"><i className="fas fa-wheelchair"></i></span>
                    <div className="features-box-content">
                      <h6>Carefull & Nurturing
                        Elder Care</h6>
                    </div>
                  </div>
                </li>


              </ul>
            </div> 
          <div className="col-md-6">

            <div className="features-image animated out" data-animation="fadeInUp" data-delay="0">
              <h6 className="line-height"><b> Worried ?</b>  <br/>
                Just Relax! Leave All Your Household Worries With Us <br/>
                <b> You Enjoy Your Precious Life  </b>
              </h6>

              <img src={Worker} className="imggg" alt="" id="im"/>
            </div> 
          </div> 

          <div className="col-md-3 without-padding">
            <div className="right-features-services">
              <ul className="features-list">
                <li>
                  <div className="right-features-box animated out" data-animation="fadeInRight" data-delay="0">
                    <span className="iconbox"><i className="fas fa-tshirt"></i></span>
                    <div className="features-box-content">
                      <h6>Neat {'&'} Clean Clothes Washing/Laundry</h6>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="right-features-box animated out" data-animation="fadeInRight" data-delay="0">
                    <span className="iconbox"><i className="fas fa-procedures"></i></span>
                    <div className="features-box-content">
                      <h6>Responsible Patient Care</h6>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="right-features-box animated out" data-animation="fadeInRight" data-delay="0">
                    <span className="iconbox"><i className="fas fa-paint-brush"></i></span>
                    <div className="features-box-content">
                      <h6>Personal Hygiene & Beauty Care</h6>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="right-features-box animated out" data-animation="fadeInRight" data-delay="0">
                    <span className="iconbox"><i className="fas fa-baby"></i></span>
                    <div className="features-box-content">
                      <h6>New Born Baby & Mother Care/Massager</h6>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="right-features-box animated out" data-animation="fadeInRight" data-delay="0">
                    <span className="iconbox"><i className="fas fa-user-nurse"></i></span>
                    <div className="features-box-content">
                      <h6>Nurturing & Caring Nurses</h6>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="right-features-box animated out" data-animation="fadeInRight" data-delay="0">
                    <span className="iconbox"><i className="fab fa-pagelines"></i></span>
                    <div className="features-box-content">
                      <h6>Ecofriendly Gardener </h6>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="right-features-box animated out" data-animation="fadeInRight" data-delay="0">
                    <span className="iconbox"><i className="fas fa-sink"></i></span>
                    <div className="features-box-content">
                      <h6>Hygienic Kitchen Care</h6>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div> 

        </div> 
      </div> 
    </div>
    </div>
  </section>
    </>
  )
}

export default WhatWeDo