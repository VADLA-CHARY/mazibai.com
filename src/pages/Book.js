import React from 'react'
import {useState} from "react"
import { Link, useNavigate } from 'react-router-dom';
import { bookNowUrl } from '../urls';
import "../styles/Booking.css"
function Book() {
  const navigate = useNavigate(); 

  const [error , seterror] = useState('')

  const [booking , setbooking] = useState({});
	
	const handleChange = (e) => {
		setbooking({...booking , [e.target.name]:e.target.value})
	}
	const [array , setArray] = useState([]); 
	const ArrayHandle = (e) => {
		let a = [];
		let list = document.getElementsByClassName("bookingsArrayNext"); 
		for(let i=0 ; i<list.length ; i++){
			if(list[i].checked){
				a.push(list[i].value); 
			}
		}
		setArray(a); 
	}

	const BookNow = async ()=>{
		fetch(bookNowUrl,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
			body:JSON.stringify({
				email:booking.email,
				name:booking.name,
				phone:booking.phone,
				preferGender:booking.gender,
				service:array,
				place:booking.place,
				zipcode:booking.zipcode,
				text:booking.zipcode 
			})
        }).then(res => res.json())
        .then(data => {
            if(data.success === true){
              seterror('Success. Your request has been received'); 
              setTimeout(() => {
                seterror(''); 
              }, 3000);
			      }
            else{
              seterror(data.msg); 
              setTimeout(()=> {
                seterror(''); 
              },3000)
            }
		})
	}
  const bookNowStyles = {
    backgroundColor : '#fff',
    display:'flex',
    padding:'20px',
    justifyContent:'center',
    flexDirection:'column',
    alignItems:'center',
    margin:'20px',
    marginRight:'auto',
    marginLeft:'auto',
    borderRadius:'10px'
  }
  return (
    <>
			  <div className="form" style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
				  <div className="headerForm container text" style={bookNowStyles}>
				  <Link to={'/'} className="text-left" style={{marginRight:'auto'}} > <i className='fas fa-arrow-left'></i>{'  Go Back'}</Link>
					<h4>Bookings form</h4>
        {
			error &&   <div style={{width:'100%'}} className={`${error==='Success. Your request has been received'? 'alert alert-success': 'alert alert-danger'}`} role="alert">
				{error}
			</div>
			}
					<div className="py-2">
			        <div className="row justify-content-center  py-2">
			            <div className="col-md-5"> <label htmlFor="name">Name</label> 
							<input type="text" className="bg-light form-control" name='name' value={booking.name}  onChange={handleChange}/> 
						</div>
						<div className="col-md-5"> <label htmlFor="email">Email Address</label> 
							<input type="text" className="bg-light form-control"  name='email' value={booking.email} onChange={handleChange}  />
			        	</div>
			        
						<div className="col-md-5 pt-md-0 pt-3"> <label htmlFor="phone">Phone Number</label> 
						<input type="tel" className="bg-light form-control" name='phone' value={booking.phone} onChange={handleChange} /> </div>
							<div className="col-md-5">
							<label htmlFor="pincode">Zip Code</label> 
							<input type="text" value={booking.zipcode} onChange={handleChange}  name="zipcode" maxlength="6" className="bg-light form-control" placeholder="Pincode" />
						</div>
						<div className="col-md-5"> 
			               </div>
			        </div>
					<div className="row  justify-content-center py-2">
							<div className="col-md-10">
								<label htmlFor="exampleFormControlTextarea1" className="form-label">Text</label>
								<textarea className="form-control" id="exampleFormControlTextarea1" rows="2" value={booking.text} onChange={handleChange} name='text' placeholder='Enter your service requirements'></textarea>
							</div>
			        </div>
					<div className="row  justify-content-center py-2">
						<div className="col-md-10 "> 
							<div className="container_service">
									<label>Select Services</label>
									<ul className="ks-cboxtags">
									<li><input type="checkbox" onChange={(e)=>{ArrayHandle(e)}} className="bookingsArrayNext" name='name1' id="checkboxOne" value="COOK"/><label htmlFor="checkboxOne">DELICIOUS COOK</label></li>
									<li><input type="checkbox" onChange={(e)=>{ArrayHandle(e)}} className="bookingsArrayNext" name='name2' id="checkboxTwo" value="HYGIENIC_CLEAN" /><label htmlFor="checkboxTwo">HYGIENIC HOUSE CLEANING</label></li>
									<li><input type="checkbox" onChange={(e)=>{ArrayHandle(e)}} className="bookingsArrayNext" name='name3' id="checkboxFour" value="BABY_SITTER"/><label htmlFor="checkboxFour">CAREFUL BABY SITTING</label></li>
									<li><input type="checkbox" onChange={(e)=>{ArrayHandle(e)}} className="bookingsArrayNext" name='name4' id="checkbox10" value="COMPREHENSIVE_CLEAN" /><label htmlFor="checkbox10">COMPREHENSIVE HOUSE CLEANING</label></li>
									<li><input type="checkbox" onChange={(e)=>{ArrayHandle(e)}} className="bookingsArrayNext" name='name4' id="checkboxThree" value="KITCHEN_CARE" /><label htmlFor="checkboxThree">HYGIENIC KITCHEN CARE</label></li>
									<li><input type="checkbox" onChange={(e)=>{ArrayHandle(e)}} className="bookingsArrayNext" name='' id="checkboxFive" value="LAUNDRY"/><label htmlFor="checkboxFive">LAUNDRY</label></li>
									<li><input type="checkbox" onChange={(e)=>{ArrayHandle(e)}} className="bookingsArrayNext" name='services' id="checkboxSix" value="ELDER_CARE" /><label htmlFor="checkboxSix">CAREFUL ELDER CARE</label></li>
									<li><input type="checkbox" onChange={(e)=>{ArrayHandle(e)}} className="bookingsArrayNext" name='services' id="checkboxSeven" value="PATIENT_CARE"/><label htmlFor="checkboxSeven">RESPONSIBLE PATIENT CARE</label></li>
									<li><input type="checkbox" onChange={(e)=>{ArrayHandle(e)}} className="bookingsArrayNext" name='services' id="checkboxEight" value="HYGIENIC_CARE"/><label htmlFor="checkboxEight">PERSONAL HYGIENIC CARE</label></li>
									<li><input type="checkbox" onChange={(e)=>{ArrayHandle(e)}} className="bookingsArrayNext" name='services' id="checkboxNine" value="BABY_CARE"/><label htmlFor="checkboxNine">NEWLY BORN BABY & MOTHER CARE</label></li>
									<li><input type="checkbox" onChange={(e)=>{ArrayHandle(e)}} className="bookingsArrayNext" name='services' id="checkboxTen" value="NURSE"/><label htmlFor="checkboxTen">NURTURING NURSES</label></li>
									<li className="ks-selected"><input type="checkbox"  onChange={(e)=>{ArrayHandle(e)}} className="bookingsArrayNext" name='services' id="checkboxEleven" value="GARDENER"/><label htmlFor="checkboxEleven">GARDENER</label></li>
									<li><input type="checkbox" onChange={(e)=>{ArrayHandle(e)}} className="bookingsArrayNext" name='services' id="checkboxTwelve" value="OFFICE_BOY"/><label htmlFor="checkboxTwelve">OFFICE BOY / WORKER</label></li>
									<li><input type="checkbox" onChange={(e)=>{ArrayHandle(e)}} className="bookingsArrayNext" name='services' id="checkboxThirteen" value="PAINTING"/><label htmlFor="checkboxThirteen">HOUSE COLORING & PAINTING</label></li>
									</ul>
								</div>
						</div>
			    	</div>
					<div className="row justify-content-center  py-2">
							<div className="col-md-10">
								<label htmlFor="exampleFormControlTextarea1" className="form-label">City/Place/Address</label>
								<textarea className="form-control" id="exampleFormControlTextarea1" rows="2" value={booking.place} onChange={handleChange} name='place' placeholder='Address/Place'></textarea>
							</div>
			        </div>
					
					<div className="row justify-content-center  py-2">
						<div className="col-md-2"></div>
						<div className="col-md-5 ">
							 <button type="button" className="btn btn-primary btn-lg btn-block" data-bs-toggle="modal" data-bs-target="#exampleModal">
							Book Now 
							</button>
						</div>
					</div>
				</div>
			</div>
				
				<>
					<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div className="modal-dialog">
						<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">Are you sure ?</h5>
							<button type="button" className="btn-outline-danger btn btn-close" data-bs-dismiss="modal" aria-label="Close">X</button>
						</div>
						<div className="modal-body">
							{
								( array.length  && booking.phone )  ? <p style={{color:'black'}}>Booked <b style={{color:'green'}}> { array.length} </b> services</p>  : <p style={{color:'red'}}>Please Fill Required Inputs</p> 
							}
							
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
							<button type="button" className="btn btn-primary" data-bs-toggle="modal" disabled={array.length===0}  onClick={BookNow} >Confirm Booking</button>
						</div>
						</div>
					</div>
					</div>
				</>
				</div>
    </>
  )
}

export default Book