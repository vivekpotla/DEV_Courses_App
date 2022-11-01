import React, { useEffect } from 'react'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Development from './components/Categories/Development'
import Itsoftware from "./components/Categories/Itsoftware";
import Music from './components/Categories/Music'
import Marketing from './components/Categories/Marketing'
import Home from './components/Home';
import Business from './components/Categories/Business'
import Teach from './components/Categories/Teach'
import Design from './components/Categories/Design';
import Health from './components/Categories/Health';
import Personal from './components/Categories/personal';
import Login from './components/LoginComponent/Login.js';
import SignUp from './components/SignUpComponent/SignUp';
import { useDispatch, useSelector } from 'react-redux';
import CreateCourse from "./components/course/CreateCourse.js";
import {authActions} from "./store/index.js";
import Profile from './components/Profile';

function App() {
  const dispatch = useDispatch();
    const isLoggedIn = useSelector((state)=>state.isLoggedIn);
    console.log(isLoggedIn);
    useEffect(()=>
    {
      if(localStorage.getItem("userId"))
      {
        dispatch(authActions.login());
      }
    },[dispatch]);
    const userType = localStorage.getItem("userType");
  return (
    
    <div>
      <Header/>

    
 <Routes>
      
 {!isLoggedIn?(<>  <Route path="/" element={<Home/>}/>
 <Route path='/'  element={<Home/>}/>
       <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/home'  element={<Home/>}/>
      
        
        </>):
 (
   <>
      <Route path="/" element={<Home/>}/>
      <Route path='/home'  element={<Home/>}/>
      { userType=="learner" && <> <Route path='/teach' element ={<Teach/>}/>
      <Route path='/development'  element={<Development/>}/>
      <Route path='/itsoftware'  element={<Itsoftware/>}/>
      <Route path='/business'  element={<Business/>}/>
      <Route path='/marketing' element={<Marketing/>}/>
      <Route path='/music' element={<Music/>}/>
      <Route path='/profile'element={<Profile/>} />
      <Route path='/design' element={<Design/>}/>
      <Route path='/health' element={<Health/>}/>
      <Route path='/personal' element={<Personal/>}/> </> }
     
      <Route path='/profile' element={<Profile/>}/>
      { userType=="instructor" && <Route path='/addcourse' element={<CreateCourse/>}/>}

   </>
 )}

</Routes>

  
     <Footer/>
    </div>

  )
}

export default App