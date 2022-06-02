import   {   useState } from "react";
import AuthContext from "./AuthContext";
import { addNotificationUrl,authLoginUrl,loginUserDetails , notificationUrl ,authRegisterUrl , deleteNotificationUrl } from "../urls";
const AuthState = (props) => {
    
    const [notifications , setNotifications] = useState([]); 
    const [user , setuser  ] = useState({
        _id:'',
        email:'',
        phone:'',
        place:'',
        zipcode:'',
        userImg:'',
        gender:''
    })
    const [checkNotification , setCheckNotification ] = useState(false); 
    const [error , seterror ] = useState(''); 
    
    const handleError = () => {
        setTimeout(() => {
            seterror(''); 
        }, 5000);
    }
    const Register  = async ( registerEmail , registerPassword  , registerFirstName ) => {
        
        try {
            const response = await fetch(authRegisterUrl,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    email:registerEmail,
                    password:registerPassword , 
                    name:registerFirstName  
                })
            })
            const data = await response.json() 
            return data  
        } catch (error) {
            seterror('Internal Server Error');
            handleError(); 
        }
    }


    const Login = async (loginEmail , loginPassword ) => {

        try {
            const response = await fetch(authLoginUrl,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    email:loginEmail,
                    password:loginPassword   
                })
            })
            const data = await response.json() 
            return data             
        } catch (error) {
            seterror('Internal Server Error');
            handleError();
        }
         
    }
    // side bar state 
    const [sidebarShow , setsidebarShow ] = useState(true); 
    //  Theme Provider 
    const [theme , setTheme ] = useState(true); 
    // Notifications 
    const addNotificationFunction = async(title, body , email) => {
        let url = `${addNotificationUrl}`
        try {
            const response = await fetch(url,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    email:email, 
                    title:title,
                    body:body     
                })
            })
            const data = await response.json() 
            return data ;        
        } catch (error) {
            return error 
        }
    }
    const getLoginUserDetails = (authToken) =>{
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
                return data ; 
            }
        })

    }
    const deleteNotificationFunction = async(id,authToken) => {
        let url = `${deleteNotificationUrl}`+`${id}`
        try {
            const response = await fetch(url,{
                method:'DELETE',
                headers:{
                    'Content-Type':'application/json',
                    'authToken':authToken
                }
            })
            const data = await response.json() 
            return data         
        } catch (error) {
            return error 
        }
    }
    return (
        <>
            <AuthContext.Provider value={{ notifications , getLoginUserDetails , checkNotification , setCheckNotification , setNotifications,  user ,setuser , error , Login , Register ,seterror , handleError  , sidebarShow  , deleteNotificationFunction , setsidebarShow , theme , setTheme ,addNotificationFunction }}>
                {props.children} 
            </AuthContext.Provider>
        </>
    )
}

export default AuthState
