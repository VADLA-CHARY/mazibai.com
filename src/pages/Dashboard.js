import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../components/Dashboard/Navbar';
import Sidebar from '../components/Dashboard/Sidebar';
import AuthContext from '../Context/AuthContext';
// import "../styles/DashboardCSS.css"
import {notificationUrl , loginUserDetails} from "../urls"
function Dashboard() {
    const navigate = useNavigate();
    // getting the actual page name 
    const { theme , user , setuser , setNotifications } = useContext(AuthContext);
    // protecting this route 
    useEffect(() => {
        let authToken = localStorage.getItem('MazibaiToken');
        if (!authToken) {
            navigate('/auth');
        } 
        // 
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
                        navigate('/dashboard/main')
                    }
                })
            }else{
                navigate('/auth')
            }
        })
    }, [])

    // providing the theme 
    useEffect(() => {
        if (!theme) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [theme])

    return (
        <>
            <Sidebar />
            <section id="content">
                <Navbar />
                <Outlet />
            </section>
        </>
    )
}

export default Dashboard