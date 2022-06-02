import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "../../images/img1.jpg"
import img2 from "../../images/img2.jpg"
import img3 from "../../images/img3.jpg"
import img4 from "../../images/img4.jpg"

function Maids() {
  const maids = [
    {
      name:'John',
      job: 'Nurse',
      img:img1
    },
    {
      name:'Chary',
      job: 'Cook',
      img:img2
    },
    {
      name:'Kiran',
      job: 'Washing',
      img:img3
    },
    {
      name:'Kumar',
      job: 'Office Worker',
      img:img4
    },
  ]
  return (
    <>
    <div className="break1 container-fluid text-center">

      <section className="maid">
        <div className="container">
          <div className="title-text">
            <p>OUR BAI'S</p>
            <h1>Check Out Our Maids</h1>
          </div>
          <div className="main-card">
            <div className="cards">
              {
                maids.map((maid , index)=> {
                  return <div key={index} className="card ">
                  <div className="content">
                    <div className="img">
                      <img src={maid.img} alt=""/>
                    </div>
                    <div className="details">
                      <div className="name">{maid.name}</div>
                      <div className="job">{maid.job}</div>
                    </div>
                    <div className="media-icons">
                      <a href="#"><i className="fab fa-facebook-f"></i></a>
                      <a href="#"><i className="fab fa-twitter"></i></a>
                      <a href="#"><i className="fab fa-instagram"></i></a>
                      <a href="#"><i className="fab fa-youtube"></i></a>
                    </div>
                    <div className="hire">
                      <Link to={'/book'}>Hire Me</Link>
                    </div>
                  </div>
                </div>
                })
              }
              
            </div>
          </div>
        </div>
      </section>

    </div>

    </>
  )
}

export default Maids