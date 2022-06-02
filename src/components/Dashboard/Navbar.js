import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext'
import {backendUrl  } from "../../urls"
function Navbar() {
	const [profileState , setprofileState] = useState(false)
	const { sidebarShow , setuser  ,  notifications , setsidebarShow ,theme ,user , setTheme  } = useContext(AuthContext); 
	const navigate = useNavigate();
	
	const logout  = ()=>{
		localStorage.removeItem('MazibaiToken'); 
		navigate('/')	
	}
  return (
    <>
        <nav>
			<i className='bx bx-menu' onClick={()=>setsidebarShow(!sidebarShow)} ></i>
			<form>
				{/* <div className="form-input">
					<input type="search" placeholder="Search..."/>
					<button type="button" className="search-btn"><i className='bx bx-search'></i></button>
				</div> */}
			</form>
			{/* <input type="checkbox" id="switch-mode" hidden={true}/>
			<label htmlFor="switch-mode" onClick={()=>setTheme(!theme)}  className="switch-mode"></label> */}
			<Link to="/dashboard/notifications" className="notification">
				<i className='bx bxs-bell'></i>
				<span className="num">{notifications.length}</span>
			</Link>
			<li  className="profile">
				<img onClick={()=>setprofileState(!profileState)} src={`${backendUrl}${user.userImg}`} alt='User Profile' />
			</li>
		</nav>{
			profileState && 
				<div className="showProfile" id="prof">
						<ul className="toggleContent">
							<Link onClick={()=>setprofileState(!profileState)} to={'/dashboard/profile'}>
							<li  className="space"><i className='bx bxs-group space' ></i>Profile</li>
							</Link>
							<Link onClick={()=>setprofileState(!profileState)} to={'/dashboard/settings'}>
							<li  className="space" ><i className="fas fa-home-lg"></i> Settings</li>
							</Link>
							<hr/>
							<li onClick={logout} className="space"><i className="fas fa-power-off space"></i>Logout</li>
						</ul>
					</div>
			}
    </>
  )
}

export default Navbar