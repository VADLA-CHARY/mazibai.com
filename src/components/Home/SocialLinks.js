import React from 'react'

function SocialLinks() {
  return (
    <>
      <div className="side_bar_book">
          <div className="li"><a href="https://www.facebook.com/people/Mazi-Bai/100077774187222/" target="_blank" rel="noreferrer" ><i
                className="fab fa-facebook-f"></i><span className="hov">Facebook</span></a></div>
          <div className="li"><a href="https://twitter.com/mazibaiteam" target="_blank" rel="noreferrer" ><i className="fab fa-twitter"></i><span
                className="hov">Twitter</span></a></div>
          <div className="li"><a href="https://instagram.com/mazibaiteam?utm_medium=copy_link" target="_blank"  rel="noreferrer" ><i className="fab fa-instagram"></i><span className="hov">Instagram</span></a></div>
          <div className="li"><a href="tel:+919511836323"><i className="fas fa-phone-alt"></i><span className="hov">Contact</span></a>
          </div>
          <div className="li"><a href="https://mazibaiteam.blogspot.com/" target="blank" rel="noreferrer" ><i className="fab fa-blogger"></i><span
                className="hov">Blog</span></a></div>
          <div className="li"><a href="https://www.youtube.com/channel/UC5LHKr1WtR7gdyV7B2vENmQ" target="_blank" rel="noreferrer" ><i className="fab fa-youtube"></i><span className="hov">Youtube</span></a></div>
          <div className="li" ><a style={{backgroundColor:'#25D366',color:'white'}} href="https://wa.me/+919511836323" target="blank" rel="noreferrer" ><i className="fab fa-whatsapp"></i><span
                className="hov">Whatsapp</span></a></div>
      </div>
    </>
  )
}

export default SocialLinks
