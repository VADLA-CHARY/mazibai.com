import React, { useContext, useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../Context/AuthContext'
import { backendUrl , loginUserDetails , notificationUrl  , userEdit , imageUpload} from '../../urls'
function DashboardProfile() {
	const navigate = useNavigate()
	const [loading , setloading ] = useState(false); 
    const {user ,setNotifications ,  setuser } = useContext(AuthContext)
    const Update = (e) => {
		setloading(true)
		let authToken = localStorage.getItem('MazibaiToken'); 
		if(!authToken){
			navigate('/'); 
		}
		fetch(userEdit,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json',
                'authToken':authToken
            },
			body:JSON.stringify(user)
        }).then(res => res.json())
        .then(data => {
            if(data.success === true){
				// image uploading 
				handleSubmit(); 
				setTimeout(() => {
					setloading(false)
				}, 2000); 
            }else{
				setTimeout(() => {
					setloading(false)
				}, 2000); 
			}
        })
	}
	const [selectedImage, setSelectedImage] = useState('');
	const handleSubmit = () =>{
		let authToken = localStorage.getItem('MazibaiToken'); 
		if(!authToken){
			navigate('/'); 
		}
		let formdata = new FormData();
		formdata.append('photo',selectedImage) 
		fetch(imageUpload, {
			method: 'PUT',
			headers: {
				'authToken':authToken
			},
			body: formdata
			})
			.then(response => response.json())
        	.then(data=>{
				if(data.success == true){
					// reload()
					navigate('/dashboard/profile')
				}
			});
	}
	const reload = () => {
		let authToken = localStorage.getItem('MazibaiToken');
        if (!authToken) {
            navigate('/');
        } 
        // api call for checking user is logged in or not '
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
                // we need to get users notifications and store them 
                fetch(notificationUrl,{
                    method:'GET',
                    headers:{
                        'Content-Type':'application/json',
                        'authToken':authToken
                    },
                }).then(res => res.json())
                .then(data => {
                    if(data.success === true){
                        setNotifications(data.data); 
                    }
                })
            }else{
                navigate('/auth')
            }
        })
	}
	useEffect(() => {
		reload(); 
    }, [])
    const handleChange = (e) => {
		setuser({...user , [e.target.name]:e.target.value}); 
    }
    
    const gender = () => {
        if(user.gender === "male"){
            return true 
        }else if(user.gender ==="female"){
            return false 
        }
    }
    return (
        <>

            <main id="profile" className="profile">
			{
			loading &&   <div className="alert alert-success" role="alert">
				Updating User Info 
			</div>
			}
                <div className="wrapper">
                    <div className="photo-profile">
                        <h4 className="pb-4 text">Edit Profile </h4>
                        <div className="d-flex align-items-center justify-content-center py-3">
							{
								!selectedImage && 
                            	<img src={`${backendUrl}${user.userImg}`} className="img"  alt="" />
							}
							{
								selectedImage && 
                            	<img src={URL.createObjectURL(selectedImage)} className="img"  alt="" />
							
							}
					<form  id="formForImage" encType='multipart/form-data'>
					{/* <i class="fas fa-edit"></i> */}
							<label htmlFor='photo' style={{height:'30px',width:'30px'}}><i className='fas fa-plus'></i></label>
                            <br />
							<input
								type="file"
								name="photo"
								id='photo'
								onChange={(e)=>setSelectedImage(e.target.files[0])}
								hidden={true}
								/>
					</form>
                            <div className="username"> <span className="pb-4 small text" id="username">{user.email}</span></div>
                        </div>
                    </div>
                    <div className="form">
				<div className="headerForm text">
					<h4 className='mt-5' >Your Details </h4>
					<div className="py-2">
			        <div className="row py-2">
			            <div className="col-md-12 pt-md-0 pt-3"> <label htmlFor="name">Name</label> 
						<input type="text" className="bg-light form-control " name='name' onChange={handleChange} value={user.name}/></div>
			            <div className="col-md-12 pt-md-0 pt-3"> <label htmlFor="phone">Phone Number</label> 
						<input type="tel" className="bg-light form-control" name='phone' onChange={handleChange} value={user.phone} placeholder="+91 9XXXXXXXXX" /> </div>
			        </div>
			        <div className="row py-2">
			        </div>
					 <div className="row py-2">
						<div className="col-md-12"> <label htmlFor="gender"  >Gender</label>
			            	<select name="gender" id="gender" onChange={handleChange} className="bg-light">
			                    <option value="male" defaultValue={gender} >Male</option>
			                    <option value="female" defaultValue={!gender} >Female</option>
			                </select>
			               </div>
							<div className="col-md-12">
								<label htmlFor="pincode">Zip Code/Pin Code</label> 
								<input type="text"  value={user.zipcode} onChange={handleChange} id="profileZipCode" name='zipcode'  maxLength="6" className="bg-light form-control" placeholder="Pincode" />
							</div>
			        </div>
					 <div className="row py-2">
							<div className="col-md-12">
								<label for="exampleFormControlTextarea1" className="form-label">Area/Place/Address</label>
								<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={user.place} onChange={handleChange} name='place'>your address</textarea>
							</div>
			        </div>
					<div className="row py-2">
					</div>
                    <div className="d-grid gap-2 mt-5 col-6 mx-auto">
                        <button className="btn btn-primary" type="button" onClick={Update}>{loading ? 'Loading' : 'Edit & Save'}</button>
                    </div>
			    </div>
				</div>
			</div>
                    <hr/>
                </div>

            </main>
        </>
    )
}

export default DashboardProfile