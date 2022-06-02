import {BrowserRouter , Routes , Route} from 'react-router-dom';
// CLIENT SIDE PAGES AND THE COMPONENTS 
import Auth from './pages/Auth';
import AuthState from "./Context/AuthState";
import Home from "./pages/Home"
import ForgotPass from './pages/ForgotPass';
import ErrorPage from './pages/ErrorPage';
import Dashboard from './pages/Dashboard';
import DashboardMain from './components/Dashboard/DashboardMain';
import DashboardProfile from './components/Dashboard/DashboardProfile';
import DashboardBookNow from './components/Dashboard/DashboardBookNow';
import DashboardHistory from './components/Dashboard/DashboardHistory';
import DashboardNotifications from './components/Dashboard/DashboardNotifications';
import Book from './pages/Book';
import About from './pages/About';
function App() {
  return (
    <>
      <AuthState>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/auth' element={<Auth/>} />
                <Route path='/forgotpassword' element={<ForgotPass/>} />
                <Route path='*' element={<ErrorPage/>} />
                <Route path='/book' element={<Book/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/dashboard'  element={<Dashboard/>} >
                      <Route path='/dashboard/main' element={<DashboardMain/>} />
                      <Route path='/dashboard/profile' element={<DashboardProfile/>} />
                      <Route path='/dashboard/book' element={<DashboardBookNow/>} />
                      <Route path='/dashboard/bookings' element={<DashboardHistory/>} />
                      <Route path='/dashboard/notifications' element={<DashboardNotifications/>} />
                </Route>
            </Routes>
        </BrowserRouter>  
      </AuthState>
    </>
  );
}

export default App;
