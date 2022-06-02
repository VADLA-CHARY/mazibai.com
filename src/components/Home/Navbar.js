import React , {useContext, useEffect , useState} from 'react'
import { Link } from 'react-router-dom';
import { backendUrl } from '../../urls';
import AuthContext from '../../Context/AuthContext';
import "../../styles/navbar.css"
import Extras from './Extras';

function Navbar() {
  const [show , setshow ]  = useState(false); 
  const [style , setstyle ]  = useState({backgroundColor:'#007bff'});
  const {user} = useContext(AuthContext);
  const [others , setothers] = useState(0); 
  const [authToken , setauthToken] = useState('');
  useEffect(()=> {
    let authToken = localStorage.getItem('MazibaiToken');
    setauthToken(authToken);  
  })
  useEffect(() => {
    window.addEventListener('resize',()=>{
      if(window.screen.width > 990 ) {
        setshow(false)
      }
    })
    return () => {
      window.removeEventListener('resize',()=>{

      }); 
    }
  }, [])
  
  const setZero = ()=> {
    setothers(0);
  }
  const setNumber = (e,n)=> {
    e.preventDefault(); 
    setothers(n)
  }

  return (
    <>
    <Extras others={others} setZero={setZero} />

      {/* <div className="site-mobile-menu site-navbar-target">
      <div className="site-mobile-menu-header">
        <div className="site-mobile-menu-close mt-3" >
          <span className="icon-close2 js-menu-toggle"  ><i className="fas fa-times"></i></span>
        </div>
      </div>
      <div className="site-mobile-menu-body">
      <div className="site-mobile-menu-header">
    <div className="site-mobile-menu-close mt-3"  >
      <span className="icon-close2 js-menu-toggle"   ><i className="fas fa-times"></i></span>
    </div>
  </div>
      </div> 
    </div>  */}

    <div className="site-navbar-wrap">
      <div className="site-navbar-top">
        <div className="container py-3 upperNav">
          <div className="row">
            <div className="col-4">
              <div className="d-flex ">
                <a href="mailto:mazibaiteam@gmail.com" className="d-flex  mr-2">
                  <span className="icon-envelope mr-2"></span>
                  <span className="d-none d-md-inline-block">mazibaiteam@gmail.com</span>
                </a>
                <a href="tel:9511836323" className="d-flex ">
                  <span className="icon-phone mr-2"></span>
                  <span className="d-none d-md-inline-block">+91 9511836323</span>
                </a>
              </div>
            </div>
            <div className="col-6 text-right">
              <div className="mr-5">
                <a  href='/' onClick={(e)=>setNumber(e,1)} className="p-2  pl-3 pr-3 ml-3 btns togglerefer"><span>Want Job</span></a>
                <a href="/" onClick={(e)=>setNumber(e,2)} className="p-2  pl-3 pr-3 ml-3  btns togglewant"><span>Refer Maid</span></a>
                <a href="/" onClick={(e)=>setNumber(e,3)} className="p-2  pl-3 pr-3 ml-3 btns toggler "><span> Register as Partner</span></a>
                {
                  authToken && 
                  <Link  to={'/dashboard/main'}>
                    <img src={`${backendUrl}${user.userImg}`} style={{height:'35px',width:'35px',borderRadius:'50%',marginLeft:'60px'}} alt='user img' />
                  </Link>
                }
              </div>
            </div>
            <div className="col-2 ">  
              <div className="d-flex">
                <div id="google_translate_element" className="translate">
                </div>
              </div>
              <div className="skiptranslate mr-0">
                {/* <iframe frameborder="0" style="visibility:visible" src="javascript:''"
                  className="goog-te-banner-frame skiptranslate" id=":2.container"></iframe> */}
              </div>
            </div>

          </div>

        </div>

      </div>
      <div id='sticky-wrapper' className='sticky-wrapper' style={{height
      :'0'}} >
                 
      <div className="site-navbar site-navbar-target position-sticky">
        <div className="container1  align-items-center " style={{backgroundColor:'' , position:"sticky",top:'0',width:'100%'}} >
          <div className="row align-items-center mr-5 ml-5 ">
            <div className="col-2 ">
              <h1 className="my-0  site-logo mt-4"><Link to={'/'}>MaziBai</Link></h1>
            </div>
            <div className="col-10">
              <nav className="site-navigation text-right" role="navigation">
                <div className="container1" >
                  <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3"><a href="#"
                      className="site-menu-toggle js-menu-toggle text-white active">
                      <span className="icon-menu h3" style={{marginLeft:'auto'}}  ><i className="fas fa-bars" onClick={()=>{setshow(true)}} ></i></span></a></div>

                  <ul className="site-menu main-menu js-clone-nav d-none d-lg-block ">
                    
                    <li className="active"><Link to="/" className="nav-link">Home</Link></li>
                    <li className="has-children">
                      <Link to={'/'} className="nav-link">Services <span className="text-right"><i
                            className="fas fa-angle-down"></i></span></Link>
                      <ul className="dropdown ">
                        <li className="has-children">
                          <Link to={'/'}>House Cleaning <span className="float-right"><i
                                className="fas fa-angle-down"></i></span></Link>
                          <ul className="dropdown">
                            <li><Link to={'/book'}>Hygienic </Link></li>
                            <li><Link to={'/book'}>Comprehensive </Link></li>

                          </ul>
                        </li>
                        <li><Link to={'/book'} className="nav-link">Elderly Care</Link></li>
                        <li>
                          <Link to={'/book'}>Delicious Cook</Link>

                        </li>
                        <li>
                          <Link to={'/book'}>Hygienic Kitchen Care</Link>
                        </li>
                        <li>
                          <Link to={'/book'}>Baby Sitting</Link>

                        </li>
                        <li>
                          <Link to={'/book'}>Neat & Clean Laundry</Link>

                        </li>
                        <li>
                          <Link to={'/book'}>Caring Nurses</Link>

                        </li>
                        <li>
                          <Link to={'/book'}>Patient Care</Link>

                        </li>


                        <li className="has-children">
                          <Link to={'/book'}> Mother Care <span className="float-right"><i
                                className="fas fa-angle-down"></i></span> </Link>
                          <ul className="dropdown">
                            <li><Link to={'/book'}>New Born Baby</Link></li>
                            <li><Link to={'/book'}>Massager</Link></li>

                          </ul>
                        </li>
                        <li>
                          <Link to={'/book'}>Office Boy</Link>

                        </li>
                        <li>
                          <Link to={'/book'}>Home Painting</Link>

                        </li>
                        <li>
                          <Link to={'/book'}> Beauty Care</Link>

                        </li>
                        <li>
                          <Link to={'/book'}>Ecofriendly Gardener </Link>
                        </li>

                      </ul>
                    </li>
                    <li className="active"><Link to="/about" className="nav-link">About Us</Link></li>
                    <li><a href="tel:9511836323">Contact</a></li>
                    <li></li>
                    <div className="mediaIcons">
                      <li className="togglerefer"><a href="#refer" className="nav-link border-btn">Refer a Maid</a></li>
                      <li className="togglewant"><a href="#job" className="nav-link border-btn">Want a Job</a></li>
                      <li className="toggler"><a href="#partner" className="nav-link border-btn ">Register as Partner</a></li>
                      {/* <li>
                        <img src='' alt='User img'  />
                      </li> */}
                      

                    </div>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      </div> 
    </div>

    {
      show && 
      <section  style={{width:'300px',height:'100vh' ,backgroundColor:'#5574a1'}} id="sidebar" className={`${show ? 'show' : 'hide'}`}>
          <ul className="nav flex-column text-white w-100">
      <h3  className="nav-link">
        <span className="mx-2">Mazibai</span>
        <i className="fa fa-times float-right"  onClick={()=>{setshow(false)}}   ></i>
      </h3>
      
      
      <li style={{color:'#fff'}}  className=" nav-link active has-children">
        <i className="fas fa-angle-down"></i>
        <span className="mx-2">Services</span>
        <ul className="dropdown " style={{backgroundColor:'#fff'}}>
          <li style={{backgroundColor:'#fff'}} className="has-children">
            <Link to={'/book'}>House Cleaning  <span className="float-right"><i className="fas fa-angle-down"></i></span></Link>
            <ul className="dropdown">
              <li style={{backgroundColor:'#fff'}}><Link to={'/book'}>Hygienic </Link></li>
              <li style={{backgroundColor:'#fff'}}><Link to={'/book'}>Comprehensive </Link></li>
            </ul>
          </li>
          <li style={{backgroundColor:'#fff'}} ><Link to={'/book'}>Elderly Care</Link></li>
          <li  style={{backgroundColor:'#fff'}}>
            <Link to={'/book'}>Cook</Link>
          </li> 
          <li style={{backgroundColor:'#fff'}} >
            <Link to={'/book'}>Hygienic Kitchen Care</Link>
          </li>
          <li style={{backgroundColor:'#fff'}} >
            <Link to={'/book'}>Baby Sitting</Link>
          </li>
          <li  style={{backgroundColor:'#fff'}}>
            <Link to={'/book'}> Laundry</Link>
          </li>
          <li  style={{backgroundColor:'#fff'}}>
            <Link to={'/book'}>Caring Nurses</Link>
          </li>
          <li  style={{backgroundColor:'#fff'}}>
            <Link to={'/book'}>Patient Care</Link>
          </li>
          
          
          <li style={{backgroundColor:'#fff'}} className="has-children">
            <Link Link to={'/book'}>  Mother Care  <span className="float-right"><i className="fas fa-angle-down"></i></span> </Link>
            <ul className="dropdown">
              <li style={{backgroundColor:'#fff'}}><Link Link to={'/book'}>New Born Baby</Link></li>
              <li style={{backgroundColor:'#fff'}}><Link Link to={'/book'}>Massager</Link></li>
            </ul>
          </li>
          <li  style={{backgroundColor:'#fff'}}>
            <Link Link to={'/book'}>Office Boy</Link>
          </li>
          <li  style={{backgroundColor:'#fff'}}>
            <Link Link to={'/book'}>Painting</Link>
          </li>
          <li  style={{backgroundColor:'#fff'}}>
            <Link Link to={'/book'}> Beauty Care</Link>
            
          </li>
          <li  style={{backgroundColor:'#fff'}}>
            <Link Link to={'/book'}> Gardener </Link>
            
          </li>
         
        </ul>
      </li>
      <Link to={'/'}>
      <li  style={{color:'#fff'}}   className="nav-link">
        <i className="bx bxs-dashboard"></i>
        <span className="mx-2"   >Home</span>
      </li>
      </Link>
      <Link to={'/about'}>
      <li style={{color:'#fff'}} href="#" className="nav-link">
        <i className="bx bx-user-check"></i>
        <span className="mx-2"  >About</span>
      </li>
      </Link>
      <a style={{color:'#fff'}}  href="tel:9511836323" className="nav-link">
        <i className="bx bx-conversation"></i>
        <span className="mx-2"  >Contact</span>
      </a>
    </ul>
		
	</section>
    
    }
    

    </>

  )
}

export default Navbar