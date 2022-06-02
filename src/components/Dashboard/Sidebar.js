import React, { useContext } from 'react'
import { useNavigate , Link, useLocation } from 'react-router-dom'
import AuthContext from '../../Context/AuthContext';

function Sidebar() {
	const navigate = useNavigate()
    const { sidebarShow  } = useContext(AuthContext); 
    const Logout = (e)=> {
        e.preventDefault()
		localStorage.removeItem('MazibaiToken'); 
		navigate('/'); 
    }
	const location = useLocation(); 
  return (
    <>
    <section id="sidebar"  className={sidebarShow ? "hide" : "show"}>
		<Link to="/" className="brand">
			<i className='bx bxs-smile'></i>
			<span className="text">MaziBai.com</span>
		</Link>
		<ul className="side-menu top">
			<li className={location.pathname==='/dashboard/main' ? 'active' : ''}>
				<Link    to="/dashboard/main" >
					<i className='bx bxs-dashboard'></i>
					<span className="text">Dashboard</span>
				</Link>
			</li>

			<li className={location.pathname==='/dashboard/profile' ? 'active' : ''}>
				<Link   to="/dashboard/profile">
					<i className='bx bxs-group'></i>
					<span className="text">Profile</span>
				</Link>
			</li>
			<li className={location.pathname==='/dashboard/book' ? 'active' : '' }>
				<Link   to="/dashboard/book" >
					<i className='bx bxs-group'></i>
					{/* <span class="iconify" data-icon="bi:cart-check-fill"></span> */}
					{/* <i class="fa-solid fa-cart-circle-arrow-up"></i> */}
					<span className="text">Book Now</span>
				</Link>
			</li>
			<li className={location.pathname==='/dashboard/bookings' ? 'active' : ''}>
				<Link   to="/dashboard/bookings">
					<i className='bx bxs-message-dots'></i>
					<span className="text">Bookings</span>
				</Link>
			</li>
			<li className={location.pathname==='/dashboard/notifications' ? 'active' : ''}>
				<Link   to="/dashboard/notifications">
					<i className='bx bxs-bell'></i>
					<span className="text">Notifications</span>
				</Link>
			</li>
			{/* <li style={{marginLeft:'10px',cursor:"pointer"}} onClick={Logout}>
					<i className='bx bxs-log-out-circle'></i>
					<span className="text">Logout</span>
			</li> */}
		</ul>
		<ul className="side-menu" style={{height:'30px',marginTop:'0'}}>
			<li>
				< a onClick={Logout} className="logout">
					<i className='bx bxs-log-out-circle'></i>
					<span className="text">Logout</span>
				</a>
			</li>
		</ul>
	</section>
    </>
  )
}

export default Sidebar