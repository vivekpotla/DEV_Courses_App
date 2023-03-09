import React, { useEffect } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Carousel from 'react-bootstrap/Carousel'
import axios from 'axios'
import { useState } from 'react'
import {faCirclePlay,faStar,faInfinity,faIndianRupeeSign,faCircleInfo,faStarHalf} from '@fortawesome/free-solid-svg-icons'
import Card from './Card'
function Teach() {

  let [data, setData] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:5003/api/course/bytopic/Teach")
    .then(response=>setData (response.data.course))
    .catch(err=>console.log(err))
    console.log(data)
  }, [])

  return (
    <div className='container'>
    <div >
    <h2 className='mt-5 fw-bold'>Teach Courses</h2>
    <h4 className='mt-5 fw-bold'>Couses to get you started</h4>
    </div>
    <hr></hr>
    <div className="row row-cols-sm-3 row-cols-1 text-center">
      <p className="col fw-bold"><FontAwesomeIcon icon={faCirclePlay} className='pe-3' />Learn in-demand skills with over <br></br> 183,000 video courses</p>
      <p className="col fw-bold"><FontAwesomeIcon icon={faStar} className='pe-3' />Choose courses taught by real-world <br></br> experts</p>
      <p className="col fw-bold"><FontAwesomeIcon icon={faInfinity} className='pe-3' />Learn at your own pace, with lifetime <br></br>access on mobile and desktop</p>
    </div>
    <hr></hr>
    <div className='container'>
    <h4 className='fw-bold mt-5'>Featured Courses</h4>
    
    <Carousel interval={2000}>
      {data.map((value, kay)=>        
        <Carousel.Item interval={5000}>
          <Card data = {value}/>
        </Carousel.Item>)}
      </Carousel>
      <h4 className='fw-bold mt-5'>Popular topics</h4>
      <Carousel>
        <Carousel.Item interval={5000}>
        <div className='row container fw-bold text-center'>
      <p className="col-sm border pt-3 pb-3 me-1">
      Python
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
          JavaScript
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
          React
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
        C#
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
        Machine Learning
        </p>
      </div>
      <div className='row container fw-bold text-center'>
      <p className="col-sm border pt-3 pb-3 me-1">Web Teach
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
          Java
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
          Data Science
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
        Unity
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
        Css
        </p>
      </div>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
        <div className='row container fw-bold text-center'>
      <p className="col-sm border pt-3 pb-3 me-1">
      Machine Learning
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
          C++
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
          Google Flutter
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
        SQL
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
        Unreal Engine
        </p>
      </div>
      <div className='row container fw-bold text-center'>
      <p className="col-sm border pt-3 pb-3 me-1">Css
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
          Solidity
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
          Angular
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
        Node.js
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
        Data Analysis
        </p>
      </div>
        </Carousel.Item>
      </Carousel>
      <h4 className='fw-bold mt-5'>All Teach Courses</h4>
      <p className='fw-bold border p-3'> <FontAwesomeIcon icon={faCircleInfo} className="pe-3" />Not sure? All courses have a 30-day money-back guarantee</p>
      {data.map((value, key)=><Card data = {value}/>)}
    </div>
  </div>
  )
}

export default Teach
