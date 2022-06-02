import React , {useEffect, useState} from 'react'
import "../../styles/scrolltop.css"
function ScrollTop() {
    const [show , setshow] = useState(false); 
    const moveTop = () => {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0; 
    }

    useEffect(()=>{
        window.addEventListener('scroll',()=> {
            if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
                setshow(true); 
              } else {
                setshow(false); 
            }
        })
        return (()=> {
            window.removeEventListener('scroll',()=> {

            })
        })
    },[show]); 
  return (
    <>
    {
        show && 

        <div onClick={moveTop} className="scrollTop__box">
            <i className="scrollTopIcon fa fa-arrow-up"></i>  
        </div> 
        }
    </>

  )
}

export default ScrollTop