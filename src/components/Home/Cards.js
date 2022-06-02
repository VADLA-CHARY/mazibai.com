import React from 'react'

function Cards() {
  return (
    <>
         <section className="usps">
      <center>
        <span className="green fs-3 fw-2" style={{backgroundColor:'#d02f9c',color:'white',padding:'5px',margin:'10px',borderRadius:'4px'}}>Neat, Clean & Hygienic Services</span>
        <div className="usp" style={{marginTop:'30px'}}>
          <div className="inner justify-content-center">
            <div className="common__inner inner1" style={{height:''}}>
              <div className="img">
                <i className="fas fa-handshake fs-5 white"></i>
              </div>
              <div className="title" style={{paddingBottom:'20px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                365 DAYS SERVICE
              </div>
              <div className="desc">
                We provide 365 days and 24/7 services if needed, maid replacement in case your regular maid is on leave.
                We provide 1, 2 days 1, 2 weeks or 1, 2 months maid/manpower services if needed.
              </div>

            </div>
            <div className="common__inner inner2" style={{height:'max-content'}}>
              <div className="img">
                <i className="fas fa-clipboard-check fs-5 white"></i>
              </div>
              <div className="title" style={{marginBottom:'10px'}}>
                INSTANT BOOKING
              </div>
              <div className="desc">
                We provide instant maid booking and maid replacement in case your regular maid is on leave.
              </div>
              <div className="button">
              </div>
            </div>
            <div className="common__inner inner3" style={{height:'max-content'}}>
              <div className="img">
                <i className="fas fa-smile fs-5 white"></i>
              </div>
              <div className="title" style={{marginBottom:'10px'}}>
                HAPPY CUSTOMERS
              </div>
              <div className="desc">
                Our maids create free time, to our customers. This time can be utilized for personal or professional
                development or to do things that you always wanted to do but were unable to do because of a lack of time
                and support.
              </div>
              <div className="button">
              </div>
            </div>
          </div>
        </div>
      </center>
    </section>
    </>
  )
}

export default Cards
