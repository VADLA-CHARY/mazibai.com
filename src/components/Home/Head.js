import React , {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import BG1 from "../../images/bg1.jpg"
import BG2 from "../../images/bg2.jpg"
import BG3 from "../../images/bg3.jpg"
import BG4 from "../../images/bg4.jpg"
import BG5 from "../../images/bg5.jpg"

function Head() {
  const [authToken , setauthToken] = useState(null);
  useEffect(() => {
    let authToken = localStorage.getItem('MazibaiToken');
    if(authToken){
      setauthToken(authToken);
    }
  }, [])

  return (
    <>
        <section className="head">
      <div className="bgslider">
        <img src={BG1} alt=""/>
        <img src={BG2} alt=""/>
        <img src={BG3} alt=""/>
        <img src={BG4} alt=""/>
        <img src={BG5} alt=""/>
      </div>
      <div className="animation-area">
        <div className="wilson">

          <div className="banner-text">
            <h1 className="logoName mt-5">MaziBai.com</h1>
            <p className="logoTagLine">Redefining Home Services</p>
            <p className="logoCaption" style={{fontSize:'25px'}}>We Provide Customised {'&'} Personalised Home Services At Affordable Rates.</p>
            <div className="banner-btn btnContainer">
              <Link to={'/auth'}><span></span>Login</Link>
              {
                authToken &&
                <Link to={'/dashboard/main'}><span></span>Dashboard</Link>
              }

              <Link to={'/book'}><span></span>Book Now</Link>
            </div>

          </div>

        </div>



      </div>


      {/* <div className="chat_icon">
        <i className="fa fa-comments chat-color" aria-hidden="true"></i>
      </div> */}
      <div className="chat_box">
        <div className="my-conv-form-wrapper">
          <form action="" method="GET" className="hidden">
            <input type="text" name="name"
              data-conv-question="Hello! We Are Happy To Help You..!, <br> Please, Enter your name"/>
            <input type="tel" name="tel" data-conv-question="Hi {name}, <br> Please Enter Your Contact Number"
              length="10"/>

            <select data-conv-question="Services You Are Interested In" name="category">
              <option value="WebDevelopment">Home Maid</option>
              <option value="DigitalMarketing">Baby Sitter</option>
              <option value="DigitalMarketing1">Cook</option>
              <option value="DigitalMarketing2">Cloth Cleaner</option>
            </select>

            <div data-conv-fork="category">
              <div data-conv-case="WebDevelopment">
                <input type="text" name="domainName" data-conv-question="Please, tell me your domain name"/>
              </div>
              <div data-conv-case="DigitalMarketing" data-conv-fork="first-question2">
                <input type="text" name="companyName" data-conv-question="Please, enter your company name"/>
              </div>
            </div>

            <input type="text" name="name" data-conv-question="Please, Enter your name"/>

            <input type="text" data-conv-question="Hi {name}, <br> It's a pleasure to meet you." data-no-answer="true"/>

            <input data-conv-question="Enter your e-mail"
              data-pattern="^[a-zA-Z0-9.!#$%*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
              type="email" name="email" required placeholder="What's your e-mail?"/>

            <select data-conv-question="Please Conform">
              <option value="Yes">Confirm</option>
            </select>

          </form>
        </div>
      </div>

      <section>
        <div className="sep-section"></div>
      </section>

    </section>
    </>

  )
}

export default Head
