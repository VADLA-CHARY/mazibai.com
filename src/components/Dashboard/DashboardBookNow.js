import React, { useContext , useEffect , useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext'
import { loginUserDetails , bookNowUrl, addNotificationUrl} from "../../urls";
function DashboardBookNow() {
	const navigate = useNavigate(); 
	const [error , seterror ] = useState(''); 
	const [showError , setShowError ] = useState(false); 
	const {user , setuser , addNotificationFunction} = useContext(AuthContext); 
	const [showModal , setShowModal] = useState(false)
    
	const [booking , setbooking] = useState(user);
	
	const handleChange = (e) => {
		setbooking({...booking , [e.target.name]:e.target.value})
	}
	const [array , setArray] = useState([]); 
	const ArrayHandle = (e) => {
		let a = [];
		let list = document.getElementsByClassName("bookingsArray"); 
		for(let i=0 ; i<list.length ; i++){
			if(list[i].checked){
				a.push(list[i].value); 
			}
		}
		setArray(a); 
	}

	const BookNow = async ()=>{
		let authToken = localStorage.getItem('MazibaiToken');
        if (!authToken) {
            navigate('/');
        } 
		fetch(bookNowUrl,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'authToken':authToken
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
				setShowError(true)
                seterror('Booking Recieved');
				let Title = `Booking Received`
				let Body = 'Thanks For choosing our Service.'
				fetch(addNotificationUrl,{
					method:'POST',
					headers:{
						'Content-Type':'application/json'
					},
					body:JSON.stringify({
						email:booking.email,
						title:Title,
						body:Body 
					})
				}).then(res => res.json())
				.then(data => {
					if(data.success){
						navigate('/dashboard/notifications') 
					}        
				})
			}
		})
	}
	
	useEffect(() => {
		let authToken = localStorage.getItem('MazibaiToken');
        if (!authToken) {
            navigate('/');
        } 
		fetch(loginUserDetails,{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'authToken':authToken
            },
        }).then(res => res.json())
        .then(data => {
            if(data.success === true){
                setuser(data.user);
				setbooking(data.user); 
                // we need to get users notifications and store them 
            }else{
                navigate('/auth')
            }
        })
		// updates user information with notifications 
    }, [])
	
	
	

	// movable things 
	let items = document.getElementsByClassName("movable");
	let left = 0; 
	let right = 0; 
	const moveLeft = ()=>{
		if(left!==0){
			left = left+320; 
			right = right - 320; 
		}
		for (var i = 0, max = items.length; i < max; i++) {
			items[i].style.transform = `translateX(${left}px)`;
		}
	}
	const moveRight = ()=>{
		if(right<=300*5){
			right = right+300; 
			left = left - 320 
		}
		for (var i = 0, max = items.length; i < max; i++) {
			items[i].style.transform = `translateX(-${right}px)`;
		}
	}

  return (
    <>
		<main id="chary2" className="booknow">
			<div className="head-title">
				<div className="left">
					<h1>Book now </h1>
				</div>
			</div>
			<div className="box">
				<div  className="leftarrow">
						<button onClick={moveLeft}
							className="slidebutton"
							type="button"
							id="left-arrow"
							name="button"
						></button>
						<label className="arrow left" htmlFor="left-arrow" id="aurr">
							&lt;
						</label>
					</div>
					<ul className="box-info">
					<li  className="movable"  id="1">
							{/* <i className="bx bxs-group"></i> */}
							<span className="text">
								<h3>Cooking</h3>
								<p style={{marginLeft:'10px'}} >Bookings : 3770 </p>
							</span>
						</li>
						<li  className="movable" id="2">
							{/* <i className="bx bxs-calendar-check"></i> */}
							<span className="text">
								<h3>Cleaning</h3>
								<p style={{marginLeft:'10px'}} >Bookings : 2001</p>
							</span>
						</li>
						<li  className="movable" id="3">
							{/* <i className="bx bxs-dollar-circle"></i> */}
							<span className="text">
								<h3>Elder Care</h3>
								<p style={{marginLeft:'10px'}} >Bookings : 1700</p>
							</span>
						</li>
						<li  className="movable" id="4">
							{/* <i className="bx bxs-group"></i> */}
							<span className="text">
								<h3>Washing</h3>
								<p style={{marginLeft:'10px'}} >Bookings : 1902 </p>
							</span>
						</li>
						<li  className="movable" id="5">
							{/* <i className="bx bxs-group"></i> */}
							<span className="text">
								<h3>Old Care</h3>
								<p style={{marginLeft:'10px'}} >Bookings : 1089 </p>
							</span>
						</li>
						<li  className="movable" id="6">
							{/* <i className="bx bxs-group"></i> */}
							<span className="text">
								<h3>Others</h3>
								<p style={{marginLeft:'10px'}} >Bookings : 209 </p>
							</span>
						</li>
					</ul>
					<div className="rightarrow">
						<button onClick={moveRight}
							className="slidebutton"
							type="button"
							id="right-arrow"
							name="button"
						></button>
						<label className="arrow right" htmlFor="right-arrow" id="arr">
							&gt;
						</label>
					</div>
			</div>
			{
			showError &&   <div className="alert alert-success" role="alert">
				{error}
			</div>
			}
			<div className="form">
				<div className="headerForm text">
					<h4>Bookings form</h4>
					<div className="py-2">
			        <div className="row justify-content-center  py-2">
			            <div className="col-md-5"> <label htmlFor="name">Name</label> 
							<input type="text" className="bg-light form-control" name='name'  onChange={handleChange} value={booking.name}/> 
						</div>
						<div className="col-md-5"> <label htmlFor="email">Email Address</label> 
							<input type="text" className="bg-light form-control"  name='email' onChange={handleChange} value={booking.email} readOnly={true}/>
							<small className='text' style={{color:'red'}}>*you cannot change your email address</small>
			        	</div>
			        
						<div className="col-md-5 pt-md-0 pt-3"> <label htmlFor="phone">Phone Number</label> 
						<input type="tel" className="bg-light form-control" name='phone' onChange={handleChange} value={booking.phone}/> </div>
							<div className="col-md-5">
							<label htmlFor="pincode">Zip Code</label> 
							<input type="text" value={booking.zipcode} onChange={handleChange}  name="zipcode" maxlength="6" className="bg-light form-control" placeholder="Pincode" />
						</div>
						<div className="col-md-5"> 
			               </div>
			        </div>
					<div className="row justify-content-center py-2">
							<div className="col-md-10">
								<label for="exampleFormControlTextarea1" className="form-label">Text</label>
								<textarea className="form-control" id="exampleFormControlTextarea1" rows="2" value={booking.text} onChange={handleChange} name='text' placeholder='Any Specific Service'></textarea>
							</div>
			        </div>
					<div className="row justify-content-center py-2">
						<div className="col-md-10 "> 
							<div className="container_service">
									<label>Select Services</label>
									<ul className="ks-cboxtags">
									<li><input type="checkbox" onChange={(e)=>{ArrayHandle(e)}} className="bookingsArray" name='name1' id="checkboxOne" value="COOK"/><label for="checkboxOne">DELICIOUS COOK</label></li>
									<li><input type="checkbox" onChange={(e)=>{ArrayHandle(e)}} className="bookingsArray" name='name2' id="checkboxTwo" value="HYGIENIC_CLEAN" /><label for="checkboxTwo">HYGIENIC HOUSE CLEANING</label></li>
									<li><input type="checkbox" onChange={(e)=>{ArrayHandle(e)}} className="bookingsArray" name='name3' id="checkboxFour" value="BABY_SITTER"/><label for="checkboxFour">CAREFUL BABY SITTING</label></li>
									<li><input type="checkbox" onChange={(e)=>{ArrayHandle(e)}} className="bookingsArray" name='name4' id="checkbox10" value="COMPREHENSIVE_CLEAN" /><label for="checkbox10">COMPREHENSIVE HOUSE CLEANING</label></li>
									<li><input type="checkbox" onChange={(e)=>{ArrayHandle(e)}} className="bookingsArray" name='name4' id="checkboxThree" value="KITCHEN_CARE" /><label for="checkboxThree">HYGIENIC KITCHEN CARE</label></li>
									<li><input type="checkbox" onChange={(e)=>{ArrayHandle(e)}} className="bookingsArray" name='' id="checkboxFive" value="LAUNDRY"/><label for="checkboxFive">LAUNDRY</label></li>
									<li><input type="checkbox" onChange={(e)=>{ArrayHandle(e)}} className="bookingsArray" name='services' id="checkboxSix" value="ELDER_CARE" /><label for="checkboxSix">CAREFUL ELDER CARE</label></li>
									<li><input type="checkbox" onChange={(e)=>{ArrayHandle(e)}} className="bookingsArray" name='services' id="checkboxSeven" value="PATIENT_CARE"/><label for="checkboxSeven">RESPONSIBLE PATIENT CARE</label></li>
									<li><input type="checkbox" onChange={(e)=>{ArrayHandle(e)}} className="bookingsArray" name='services' id="checkboxEight" value="HYGIENIC_CARE"/><label for="checkboxEight">PERSONAL HYGIENIC CARE</label></li>
									<li><input type="checkbox" onChange={(e)=>{ArrayHandle(e)}} className="bookingsArray" name='services' id="checkboxNine" value="BABY_CARE"/><label for="checkboxNine">NEWLY BORN BABY & MOTHER CARE</label></li>
									<li><input type="checkbox" onChange={(e)=>{ArrayHandle(e)}} className="bookingsArray" name='services' id="checkboxTen" value="NURSE"/><label for="checkboxTen">NURTURING NURSES</label></li>
									<li className="ks-selected"><input type="checkbox"  onChange={(e)=>{ArrayHandle(e)}} className="bookingsArray" name='services' id="checkboxEleven" value="GARDENER"/><label for="checkboxEleven">GARDENER</label></li>
									<li><input type="checkbox" onChange={(e)=>{ArrayHandle(e)}} className="bookingsArray" name='services' id="checkboxTwelve" value="OFFICE_BOY"/><label for="checkboxTwelve">OFFICE BOY / WORKER</label></li>
									<li><input type="checkbox" onChange={(e)=>{ArrayHandle(e)}} className="bookingsArray" name='services' id="checkboxThirteen" value="PAINTING"/><label for="checkboxThirteen">HOUSE COLORING & PAINTING</label></li>
									</ul>
								</div>
						</div>
			    	</div>
					<div className="row justify-content-center py-2">
							<div className="col-md-10">
								<label for="exampleFormControlTextarea1" className="form-label">Area/Place/Address</label>
								<textarea className="form-control" id="exampleFormControlTextarea1" rows="2" value={booking.place} onChange={handleChange} name='place'>your address</textarea>
							</div>
			        </div>
					{/* <div className="row py-2">
						<div className="col-md-2"></div>
						<div className="col-md-2">
							<label htmlFor="exp">Minimum Charges</label>
							<b>2999/-</b>
						</div>
						<div className="col-md-2"></div>
						
					</div> */}
					<div className="row py-2">
						<div className="col-md-2"></div>
						<div className="col-md-5 ">
							<button className="btn border button mr-3  btn-lg" >Cancel</button>
							 {/* <button className="btn btn-primary ml-3 btn-lg"  >Book now</button> */}
							 <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
								( array.length && booking.email && booking.phone )  ? <p style={{color:'black'}}>Booked <b style={{color:'green'}}> { array.length} </b> services</p>  : <p style={{color:'red'}}>Select Any Service</p> 
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
		</main>
    </>
  )
}

export default DashboardBookNow