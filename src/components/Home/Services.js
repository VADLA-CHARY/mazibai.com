import React , {useMemo} from 'react'
import bg1 from "../../images/bg1.jpg"
import bg2 from "../../images/bg2.jpg"
import mothercare from "../../images/mothercare.jpg"
import paint from "../../images/paint.jpg"
import gardener from "../../images/gardener.jpg"
import house from "../../images/house.jpg"
import cloths from "../../images/cloths.jpg"
import officeboy from "../../images/officeworker.jpg"
import nurse from "../../images/nurse.jpg"

import {Link} from "react-router-dom"

function Services() {
  
    const centerStyle = {
        display:'flex',
        justifyContent:'center'
    }
    const ser = [
      {
        name:'Hygienic Kitchen Care',
        desc:'Cleanliness is next to Godliness and a Clean Kitchen is next to Happiness.',
        img:bg1
      },
      {
        name:'Delicious & Nutritious Cook',
        desc:'We not only take care of Taste, but also Nutrition and Hygiene while preparing food.',
        img:bg2
      },
      {
        name:'New Born Baby & Mother Care/Massager',
        desc:'What can be a better gift than giving your baby and new mother, a loving and caring babysitter and massager.',
        img:mothercare
      },
      {
        name:'House Coloring and Painting',
        desc:'To keep your home new and shining forever, try our creative coloring and painting services.',
        img:paint
      },
      {
        name:'Eco-Friendly Gardener',
        desc:'To keep your garden and home surroundings beautiful, attractive, and lush green. Go green with our eco-friendly gardener.',
        img:gardener
      },
      {
        name:'Hygienic House Cleaning',
        desc:'Neat, Clean and Tidy! Your First Step To Healthy and Hygenic Home.',
        img:house
      },
      {
        name:'Neat & Clean Cloth Washing/Laundry',
        desc:'Neat and Clean Washing for First Class Look.',
        img:cloths
      },
      {
        name:'Office Boy/Office Worker',
        desc:'Disciplined, Sincere, Punctual and Trained manpower.',
        img:officeboy
      },
      {
        name:'Nurturing and Caring Nurses for Elder & Patient Care',
        desc:'To heal patients quickly and support them in their tough times try our experienced service for a family member recovering from Illness. Taking good care of your health recovery is our Responsibility.',
        img:nurse
      },

    ]
  return (
    <section style={centerStyle}>
      <div className="container py-2">
        <div className="h1 text-center text-dark" id="pageHeaderTitle">Our Services</div>
          {
            ser.map((item , index)=> {
              return <article key={index} className="postcard light blue">
              <a className="postcard__img_link" href="#">
                <img className="postcard__img" src={item.img} alt="Image Title" />
              </a>
              <div className="postcard__text t-dark">
                <h1 className="postcard__title blue"><a href="#">{item.name}</a></h1>
    
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">{item.desc}</div>
                <ul className="postcard__tagbox">
                    <Link to={"/book"} className="tag__item"><i className="fas fa-tag mr-2"></i>Book Now</Link>
                </ul>
              </div>
            </article>
            })
          }

      </div>
    </section>

  )
}

export default Services