import React, { useContext, useState } from "react";
import { GoogleLogin } from "react-google-login";
import { useNavigate , Link } from 'react-router-dom'
import AuthContext from "../Context/AuthContext";
import FrontImg from '../images/frontImg.jpg'
import BackImg from '../images/backImg.jpg'
import "../styles/Auth.css"
function Auth() {
    const navigate = useNavigate();
    const {  Login , Register , error , seterror ,handleError  } = useContext(AuthContext)

    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')
    const [name , setname  ] = useState('')
    const [showPass , setShowPass] = useState(false); 
    const handleLogin = async (e) => {
        e.preventDefault(); 
        let data =  await Login(loginEmail , loginPassword); 
        if(data.success){
            const authToken = data.authToken ; 
            localStorage.setItem('MazibaiToken',authToken); 
            navigate('/dashboard/main'); 
        }else{
            seterror(data.msg); 
            handleError();  
        }
    }
    const handleRegister = async (e) => {
        e.preventDefault(); 
        let data = await  Register(registerEmail , registerPassword , name);
        if(data.success){
            const authToken = data.authToken ; 
            localStorage.setItem('MazibaiToken',authToken); 
            navigate('/dashboard/main'); 
        }else{
            seterror(data.msg); 
            handleError();  
        } 
    }

    const responseSuccessGoogle = async (response) => {
        console.log(response); 
        const details = await fetch('https://mazibai.herokuapp.com/api/auth/user/googlelogin',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({tokenId:response.tokenId}) 
        })
        const data = await details.json();
        if(data.success){
            const authToken = data.authToken;
            localStorage.setItem('MazibaiToken',authToken);
            navigate('/dashboard/main');
        } 
        else{
            seterror(data.msg);
            handleError(); 
        }
    }
   
    const responseFailureGoogle = () => {
        seterror('Something Went Wrong');
        handleError(); 
    }
    
    return (
        <React.Fragment>
            <section className="fold">
                <div className="container-login">
                    <Link to={'/'}><i className='fas fa-arrow-left'></i>Home</Link>
                    <input type="checkbox" id="flip" />
                    <div className="cover">
                        <div className="front">
                            <img src={FrontImg} alt="" />
                            <div className="text">
                                <span className="text-1">It takes months<br/> to find a Customer,<br/>Seconds to lose one!</span>
                                <span className="text-2">Let's get connected</span>
                            </div>
                        </div>
                        <div className="back">
                            <img className="backImg" src={BackImg} alt="" />
                            <div className="text">
                                <span className="text-1">Our Services are never before...<br />ever after</span>
                                <span className="text-2">Let's get started</span>
                            </div>
                        </div>
                    </div>
                    <div className="forms">
                        <div className="form-content">
                            <div className="login-form">
                                <div className="title">LOGIN</div>
                                <form action="#">
                                    <div className="input-boxes">
                                        <small className="errorText">{error ? error : ''}</small>
                                        <div className="input-box">
                                            <i className="fas fa-envelope"></i>
                                            <input type="text" placeholder="Enter your email" onChange={(e)=>setLoginEmail(e.target.value)} required={true} />
                                        </div>
                                        <div className="input-box passwordBox">
                                            <i className="fas fa-lock"></i>
                                            <input type={showPass ? 'text' :'password'} placeholder="Enter your password" onChange={(e)=>setLoginPassword(e.target.value)} required={true} />
                                            <i className={showPass ? 'fa fa-eye eyeIcon' : 'fa fa-eye-slash eyeIcon'} onClick={()=>{setShowPass(!showPass)}}></i>
                                        </div>
                                        {/* <div className="text"><Link to="/forgotpassword" >Forgot password?</Link></div> */}
                                        <div className="button input-box">
                                            <input type="button" value="Submit" onClick={handleLogin} />
                                        </div>
                                        <div className="socialBox googleButtonContainer">
                                            <GoogleLogin  className="googleLogin input-box"
                                                clientId="746130167111-n7o5qnpn9gns3m0nf75dk72tfton7239.apps.googleusercontent.com"
                                                buttonText="Continue With Google"
                                                onSuccess={responseSuccessGoogle}
                                                onFailure={responseFailureGoogle}
                                                cookiePolicy={'single_host_origin'}
                                                />
                                        </div>
                                        <div className="text sign-up-text">Don't have an account?<br /> <label htmlFor="flip">SIGN UP NOW</label></div>
                                    </div>
                                </form>
                            </div>
                            <div className="signup-form">
                                            <Link to={'/'}><i className='fas fa-arrow-left'></i>Home</Link>
                                <div className="title">SIGN UP</div>
                                <form action="#">
                                    <div className="input-boxes">
                                        <small className="errorText">{error ? error : ''}</small>
                                        <div className="input-box">
                                            <i className="fas fa-user"></i>
                                            <input type="text" placeholder="Enter your name" onChange={(e)=>setname(e.target.value)} required={true} />
                                        </div>
                                        <div className="input-box">
                                            <i className="fas fa-envelope"></i>
                                            <input type="text" placeholder="Enter your email" onChange={(e)=>setRegisterEmail(e.target.value)} required={true} />
                                        </div>
                                        <div className="input-box passwordBox">
                                            <i className="fas fa-lock"></i>
                                            <input type={showPass ? 'text' :'password'} placeholder="Enter your password" onChange={(e)=>setRegisterPassword(e.target.value)} required={true} />
                                            <i className={showPass ? 'fa fa-eye eyeIcon' : 'fa fa-eye-slash eyeIcon'} onClick={()=>{setShowPass(!showPass)}}></i>
                                        </div>
                                        <div className="button input-box">
                                            <input type="button" value="Submit" onClick={handleRegister} />
                                        </div>
                                        <div className="socialBox googleButtonContainer">
                                                <GoogleLogin  className="googleLogin input-box"
                                                clientId="570279389073-emdgbvuvp9ecienislbuelg2q6vd42is.apps.googleusercontent.com"
                                                buttonText="Continue With Google"
                                                onSuccess={responseSuccessGoogle}
                                                onFailure={responseFailureGoogle}
                                                cookiePolicy={'single_host_origin'}
                                                />,
                                                {/* <GoogleButton
                                                    className="googleLogin"
                                                    clientId="746130167111-n7o5qnpn9gns3m0nf75dk72tfton7239.apps.googleusercontent.com"
                                                    Success={responseSuccessGoogle}
                                                    onClick={responseSuccessGoogle}
                                                /> */}
                                            {/* <button className="social" onClick={responseSuccessGoogle}> <i className="fas fa-lock"></i> Google</button> */}
                                            {/* <button className="social">  <i className="fas fa-lock"></i> Facebook</button> */}
                                        </div>
                                        <div className="text sign-up-text">Already have an account?<br /> <label htmlFor="flip">LOGIN NOW</label></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default Auth