import React , {useEffect , useState} from 'react'
import "../../styles/testimonial.css"
function CustomerTestimonial() {
    const [number , setnumber ] = useState(0);
    const reviews = [
        {
            img:'https://mazibai.herokuapp.com/uploads/user/default_image.png',
            name:'Dr.Swati(Professional)',
            review:'I thank the MaziBai.com team for giving me outstanding Home services here in Nagpur. They did as promised by sending me to cook on time. She was very friendly and cooked us three meals of the day, the food was very delicious. I recommend this service to my relatives.'
        },
        {
            img:'https://mazibai.herokuapp.com/uploads/user/default_image.png',
            name:'Mrs. Nayana (a Happy Mom)',
            review:'After getting to know about MaziBai.com on social media, I thought of hiring a babysitter. She was very friendly and handled the baby from morning to evening with utmost care. Thank You and Keep Growing.'
        },
        {
            img:'https://mazibai.herokuapp.com/uploads/user/default_image.png',
            name:'Ms. Poonam (a PG Student)',
            review:'There was a problem with clothes washing at my PG and I hired a Bai from Mazibai.com for doing my laundry thrice every week. I would recommend this service to all my mates as services are affordable. Thank you.'
        },
        {
            img:'https://mazibai.herokuapp.com/uploads/user/default_image.png',
            name:'Mrs. Vanita (a proud Garden Owner)',
            review:'I can\'t see my garden getting dry during summer, just because of my hectic work. So I hired a gardener from MaziBai.com to keep my garden green, clean and weed-free. Thanks a lot for your eco-friendly services at low prices.'
        },
    ]
    const increase = (e) => {
        e.preventDefault();
        if(number===reviews.length-1){
            setnumber(0);
        }
        else{
            setnumber(number+1);
        }
    }
    const decrease = (e) => {
        e.preventDefault();
        if(number===0){
            setnumber(reviews.length-1);
        }
        else{
            setnumber(number-1);
        }
    }

  return (
    <>
        <section className="customer-revs">
  <div className="rectangle22"></div>
  <div className="slideshow-container5">

    <h1>Here's what <span>People</span> say:</h1>

    {
        reviews.map((review , index) => {
            if(index===number){

                return  <div key={index} className="mySlides">
                    <img src={reviews[number].img} className='customerImg' />
                    <div className="mySlidesContainer34">
                    <q>
                        {reviews[number].review}
                    </q>
                </div>
                <p className="author">By: <span>{reviews[number].name}</span></p>
                </div>
            }
    })
    }
    <a className="prev incdec" onClick={(e)=>decrease(e)} >&#10094;</a>
    <a className="next incdec" onClick={(e)=>increase(e)}>&#10095;</a>
</div>

</section>
    </>
  )
}

export default CustomerTestimonial
