import React , {useContext,useEffect ,  useState} from 'react'
import AuthContext from '../../Context/AuthContext'
import {notificationUrl} from "../../urls"
import {useNavigate} from "react-router-dom"

function DashboardNotifications() {
	const navigate = useNavigate()
	const {user , setuser ,checkNotification , deleteNotificationFunction , notifications , setNotifications  } = useContext(AuthContext)
	const [state , setstate] = useState(false); 
	let authToken = localStorage.getItem('MazibaiToken');
        if (!authToken) {
            navigate('/');
        } 
	useEffect(() => {
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
	}, [])
	
	const deleteNotification = async (id , index) => {
		let authToken = localStorage.getItem('MazibaiToken')
		// delete notifi in the front end 
		setstate(true); 
		let newNotifications = notifications.filter((notification,index)=> {
			if(notification._id !== id){
				return notification
			}
		})
		setNotifications(newNotifications); 
		// fetch calls to delete in the backend 
		let data = deleteNotificationFunction(id,authToken)
		if(data.success ){
			setstate(false)
		}else{
			setTimeout(() => {
				setstate(false); 
			}, 2000);
		}
	}
	const dateToDate = (date) => {
		let string = new Date(date); 
		return string.toLocaleDateString(); 
	  } 
	  const dateToTime = (date) => {
		let string = new Date(date); 
		return string.toLocaleTimeString(); 
	  } 
    return (
		<>
            <main id="notification" className="Notification text">
			<h3>Notifications</h3>
			<div className="current">
			{
			state &&   <div className="alert alert-success" role="alert">
				Deleting Notification
			</div>
			}
				{
					notifications.length ===0 && <h1>No Notifications</h1>
				}
				{
					notifications.map((notification , index )=>{
						return <div key={index} className="div" id="five">
						<div className="noticeContent not">
							<div className="noticeData">
								<h4 className="h4"><i className='bx bxs-bell size'></i>{notification.title}</h4>
								<span>{dateToDate(notification.date) + '  ' + dateToTime(notification.date)}</span>
								<p>{notification.body}</p>
							</div>
							<p>{notification.time}</p>
							<i className='bx bxs-trash' onClick={()=>deleteNotification(notification._id , index)} ></i>
						</div>
					</div>
					})
				}
				
			</div>


		</main>
        </>
    )
}

export default DashboardNotifications