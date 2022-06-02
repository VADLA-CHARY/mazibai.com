import React , {useState} from 'react'
import {ReferMaidUrl} from "../../urls"; 
function ReferMaid(props) {
    const [input , setinput] = useState({})
    const handleChange = (e) => {
        setinput({...input , [e.target.name]:e.target.value}); 
    }
    const [error , seterror ] = useState(''); 
    const handleSubmit = () => {
        fetch(ReferMaidUrl,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
			body:JSON.stringify(input)
        }).then(res => res.json())
        .then(data => {
            if(data.success ===  true){
				seterror('Success'); 
                setTimeout(() => {
                    props.setZero(); 
                }, 1500);
			}
            else{
                seterror(data.msg); 
                setTimeout(() => {
                    seterror('') 
                }, 2000);
            }
		})
	}     
  return (
    <>
        <div className="mr-auto">
      <div className="ref-contact" id="123refer">
        <h3 align="center">Refer a Maid</h3>
        <p>Provide Your Trusted Maid To Cooperate With Mazibai.</p>
        <p style={{color:'red'}}>{error}</p>
        <hr/>
        <div className="scroll">
          <form>
            <input className="chinput" onChange={handleChange} type="text" name="referer_name" placeholder="Referee Name" />
            <input className="chinput" onChange={handleChange} type="tel" name="referer_phone" placeholder="Referee Phone Number" />

            <input className="chinput" onChange={handleChange} type="text" name="referee_name" placeholder="Maid Name" />
            <input className="chinput" onChange={handleChange} type="tel" name="referee_phone" placeholder="Maid Phone Number" />
            <input type="button"  value="Submit" onClick={handleSubmit} />
          </form>
        </div>
        <span className="wrong togglerefer"> <i onClick={props.setZero} className="fas fa-times"></i></span>
        <hr/>
        <h5 className="text-center"> Happy to Receive your Maid. <i className="fas fa-smile color-green  "></i></h5>
      </div>
    </div>
    </>

  )
}

export default ReferMaid