import React from 'react'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Development from './components/Development'
import Itsoftware from './components/Itsoftware'
import Music from './components/Music'
import Marketing from './components/Marketing'
import Home from './components/Home';
import Business from './components/Business'
import Teach from './components/Teach'
import Design from './components/Design';
import Health from './components/Health';
import Personal from './components/personal';
import Login from './components/Login';
function App() {
  return (
    <div>
      <Header/>



    <Routes>

          <Route path='/'  element={<Home/>}/>
          <Route path='/home'  element={<Home/>}/>
          <Route path='/teach' element ={<Teach/>}/>
          <Route path='/development'  element={<Development/>}/>
          <Route path='/itsoftware'  element={<Itsoftware/>}/>
          <Route path='/business'  element={<Business/>}/>
          <Route path='/marketing' element={<Marketing/>}/>
          <Route path='/music' element={<Music/>}/>
          <Route path='/design' element={<Design/>}/>
          <Route path='/health' element={<Health/>}/>
          <Route path='/personal' element={<Personal/>}/>
          <Route path='/login' element={<Login/>}/>
    </Routes>




















     <div className='footer w-100'><Footer/></div> 
    </div>

  )
}

export default App