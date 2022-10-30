import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Carousel from 'react-bootstrap/Carousel'
import {faCirclePlay,faStar,faInfinity,faIndianRupeeSign,faCircleInfo,faStarHalf} from '@fortawesome/free-solid-svg-icons'
function Development() {
  return (
    <div className='container'>
    <div >
    <h2 className='mt-5 fw-bold'>Development Courses</h2>
    <h4 className='mt-5 fw-bold'>Courses to get you started</h4>
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
        <Carousel.Item interval={5000}>
        <div className="card mt-2 shadow w-100">
        <div className="row p-3">
            <div className="col-md-5">
                <img src="https://www.lambdatest.com/blog/wp-content/uploads/2018/11/JPG-2.jpg" className="card-img h-100  " alt=""/>
            </div>
            <div className=" col-md-7">
            <h4 className="fw-bold">Understanding HTML and CSS</h4>
            <p>Deeply understand Semantic HTML, CSS, Flexbox, Grid, learn to <br></br>read the specifications, and more.</p>
            <p className="text-secondary">By Anthony Alicea<br></br>Updated <b>March 2022</b> 14.5 total hours. 207 lectures. All levels </p>
            <p>4.9 <FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar}  className="text-warning"/><FontAwesomeIcon icon={faStar} className="text-warning"  /><FontAwesomeIcon icon={faStar} className="text-warning" />(119) </p>
            <h4 className='fw-bold'><FontAwesomeIcon icon={faIndianRupeeSign} /> 3,499</h4>
            </div>
        </div>
    </div>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
        <div className="card mt-2 shadow w-100">
        <div className="row p-3">
            <div className="col-md-5">
                <img src="https://couponos.ooo/wp-content/uploads/2022/03/Unreal-Engine-5-C-Multiplayer-Shooter.jpg" className="card-img h-100" alt=""/>
            </div>
            <div className="col-md-7">
            <h4 className="fw-bold">Unreal Engine 5 C++ Multiplayer Shooter</h4>
            <p>Create a fast-paced, Competitive multiplayer shooter in Unreal <br></br>Engine 5 using C++.</p>
            <p className="text-secondary">By Stephen Ulibarri<br></br>Updated <b>April 2022</b> 28.5 total hours. 111 lectures. All levels </p>
            <p>4.8 <FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar}  className="text-warning"/><FontAwesomeIcon icon={faStar} className="text-warning"  /><FontAwesomeIcon icon={faStar} className="text-warning" />(35) </p>
            <h4 className='fw-bold'><FontAwesomeIcon icon={faIndianRupeeSign} /> 3,499</h4>
            </div>
        </div>
    </div>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
        <div className="card mt-2 shadow w-100">
        <div className="row p-3">
            <div className="col-md-5">
                <img src="https://www.syncfusion.com/blogs/wp-content/uploads/2019/11/10-best-practices-to-secure-ASP.NET-Core-MVC-Web-applications_tile.png" className="card-img h-100" alt=""/>
            </div>
            <div className="col-md-7">
            <h4 className="fw-bold">ASP-NET Core 6.0 Course-MVC-Blazor-Razor EF Core</h4>
            <p>Become a great ASP.NET Developer and be ready for any ASP.NET <br></br>Scenario using Blazor, MVC, Razor.</p>
            <p className="text-secondary">By Denis Panjuta and 1 other<br></br>Updated <b>March 2022</b> 13 total hours. 119 lectures. All levels </p>
            <p>4.8 <FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar}  className="text-warning"/><FontAwesomeIcon icon={faStar} className="text-warning"  /><FontAwesomeIcon icon={faStar} className="text-warning" />(35) </p>
            <h4 className='fw-bold'><FontAwesomeIcon icon={faIndianRupeeSign} /> 3,499</h4>
            </div>
        </div>
    </div>
        </Carousel.Item>
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
      <p className="col-sm border pt-3 pb-3 me-1">Web Development
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
      <h4 className='fw-bold mt-5'>All Development Courses</h4>
      <p className='fw-bold border p-3'> <FontAwesomeIcon icon={faCircleInfo} className="pe-3" />Not sure? All courses have a 30-day money-back guarantee</p>
      <div className="mt-2 w-100">
        <div className="row p-3">
            <div className="col-md-4">
                <img src="https://wikicoding.org/wp-content/uploads/2021/08/python.jpg" className="w-100 border" alt=""/>
            </div>
            <div className="col-md-5">
            <h6 className="fw-bold">2022 Complete Python Bootcamp From Zero <br></br>to Hero in Python</h6>
            <p>Learn python like a Professional Start from the basics <br></br>and go all the way to creating your own applications<br></br> and games</p>
            <p>4.9 <FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar}  className="text-warning"/><FontAwesomeIcon icon={faStar} className="text-warning"  /><FontAwesomeIcon icon={faStar} className="text-warning" />(44,123) </p>
            <p className="text-secondary"> 13 total hours. 119 lectures. All levels </p>
            </div>
            <div className='col-md-3'><h4 className='fw-bold'><FontAwesomeIcon icon={faIndianRupeeSign} /> 3,699</h4></div>
        </div>
        <hr></hr>
    </div>
    <div className="mt-2 w-100">
        <div className="row p-3">
            <div className="col-md-4">
                <img src="https://www.crwdesigns.com/wp-content/uploads/2019/03/main-qimg-e00b5cb81575bf9c870b0bd19ed7e314-c.jpg" className="w-100 border" alt=""/>
            </div>
            <div className="col-md-5">
            <h6 className="fw-bold">The Web Developer Bootcamp <br></br>2022</h6>
            <p>COMPLETELY REDONE-The only<br></br>course you need to learn web development<br></br>-HTML,CSS,JS..</p>
            <p>4.7 <FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar}  className="text-warning"/><FontAwesomeIcon icon={faStar} className="text-warning"  /><FontAwesomeIcon icon={faStarHalf} className="text-warning" />(32,123) </p>
            <p className="text-secondary">64 total hours. 615 lectures. All levels </p>
            </div>
            <div className='col-md-3'><h4 className='fw-bold'><FontAwesomeIcon icon={faIndianRupeeSign} /> 3,499</h4></div>
        </div>
        <hr></hr>
    </div>
    <div className="mt-2 w-100">
        <div className="row p-3">
            <div className="col-md-4">
                <img src="https://www.filepicker.io/api/file/FSIjaoI2QtKWZL65cogd" className="w-100 border" alt=""/>
            </div>
            <div className="col-md-5">
            <h6 className="fw-bold">The complete 2022 web development <br></br>Bootcamp</h6>
            <p>Become a FUll-Stack web developer with just ONE course.<br></br>HTML,CSS,JavaScript,Node,React,<br></br>MONGODB,build real projects.</p>
            <p>4.3 <FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar}  className="text-warning"/><FontAwesomeIcon icon={faStar} className="text-warning"  /><FontAwesomeIcon icon={faStarHalf} className="text-warning" />(44,213) </p>
            <p className="text-secondary"> 55.5 total hours. 442 lectures. All levels </p>
            </div>
            <div className='col-md-3'><h4 className='fw-bold'><FontAwesomeIcon icon={faIndianRupeeSign} /> 3,899</h4></div>
        </div>
        <hr></hr>
    </div>
    <div className="mt-2 w-100">
        <div className="row p-3">
            <div className="col-md-4">
                <img src="https://uploads.toptal.io/blog/image/125413/toptal-blog-image-1518523133236-d2bc894552c77f954f1e5ce48da6604d.png" className="w-100 border" alt=""/>
            </div>
            <div className="col-md-5">
            <h6 className="fw-bold">Angular-The Complete Guide (2022<br></br>Edition)</h6>
            <p>Master Angular 13(formerly "Angular 2") and build <br></br>awesome, reactive web apps with the successor of<br></br>Angular.js</p>
            <p>4.6 <FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar}  className="text-warning"/><FontAwesomeIcon icon={faStar} className="text-warning"  /><FontAwesomeIcon icon={faStarHalf} className="text-warning" />(45,115) </p>
            <p className="text-secondary"> 34 total hours. 463 lectures. All levels </p>
            </div>
            <div className='col-md-3'><h4 className='fw-bold'><FontAwesomeIcon icon={faIndianRupeeSign} /> 4,499</h4></div>
        </div>
        <hr></hr>
    </div>
    <div className="mt-2 w-100">
        <div className="row p-3">
            <div className="col-md-4">
                <img src="https://venturebeat.com/wp-content/uploads/2021/12/GettyImages-1202870693.jpg?fit=2113%2C1218&strip=all" className="w-100 border" alt=""/>
            </div>
            <div className="col-md-5">
            <h6 className="fw-bold">Machine Learning A-Z: Hands-On Python <br></br>& R in Data Science</h6>
            <p>Learn to create Machine Learning Algorithms in <br></br>Python and R from two Data Science experts.Code <br></br>templates included.</p>
            <p>4.9 <FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar}  className="text-warning"/><FontAwesomeIcon icon={faStar} className="text-warning"  /><FontAwesomeIcon icon={faStar} className="text-warning" />(40,123) </p>
            <p className="text-secondary"> 44.5 total hours. 320 lectures. All levels </p>
            </div>
            <div className='col-md-3'><h4 className='fw-bold'><FontAwesomeIcon icon={faIndianRupeeSign} /> 4,199</h4></div>
        </div>
        <hr></hr>
    </div>
    <div className="mt-2 w-100">
        <div className="row p-3">
            <div className="col-md-4">
                <img src="https://miro.medium.com/max/1400/1*BPSx-c--z6r7tY29L19ukQ.png" className="w-100 border" alt=""/>
            </div>
            <div className="col-md-5">
            <h6 className="fw-bold">2022 Complete JavaScript Course 2022: From<br></br>Zero to Expert!</h6>
            <p>The modern JavaScript Cousre for everyone! Master <br></br>JavaScript with rpojects, Challenges and theory.Many<br></br>coures in one.</p>
            <p>4.8 <FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar}  className="text-warning"/><FontAwesomeIcon icon={faStar} className="text-warning"  /><FontAwesomeIcon icon={faStar} className="text-warning" />(12,253) </p>
            <p className="text-secondary">69 total hours. 320 lectures. All levels </p>
            </div>
            <div className='col-md-3'><h4 className='fw-bold'><FontAwesomeIcon icon={faIndianRupeeSign} /> 3,599</h4></div>
        </div>
        <hr></hr>
    </div>
    <div className="mt-2 w-100">
        <div className="row p-3">
            <div className="col-md-4">
                <img src="https://www.iimtindia.net/Blog/wp-content/uploads/2021/06/Data-Science.jpg" className="w-100 border" alt=""/>
            </div>
            <div className="col-md-5">
            <h6 className="fw-bold">The Data Science Course 2022: Complete <br></br>Data Science Bootcamp</h6>
            <p>Complete Data Science training: Mathematics, <br></br>Statistics, Python, Advanced Statistics in Python,<br></br>Machine & Deep Learning.</p>
            <p>4.5 <FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar}  className="text-warning"/><FontAwesomeIcon icon={faStar} className="text-warning"  /><FontAwesomeIcon icon={faStarHalf} className="text-warning" />(54,153) </p>
            <p className="text-secondary"> 30 total hours. 488 lectures. All levels </p>
            </div>
            <div className='col-md-3'><h4 className='fw-bold'><FontAwesomeIcon icon={faIndianRupeeSign} /> 3,299</h4></div>
        </div>
        <hr></hr>
    </div>
    <div className="mt-2 w-100">
        <div className="row p-3">
            <div className="col-md-4">
                <img src="https://unity.com/sites/default/files/styles/social_media_sharing/public/2019-01/Unity_USC-Blog-1280x720.jpg?h=c673cd1c&itok=9ouBh2aR" className="w-100 border" alt=""/>
            </div>
            <div className="col-md-5">
            <h6 className="fw-bold">Complete C# Unity Game Developer 2D</h6>
            <p>Learn Unity in C# & Code Your First Five 2D Video<br></br>Games for Web, Mac & PC. The tutorials cover<br></br>Tilemap.</p>
            <p>4.7 <FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar}  className="text-warning"/><FontAwesomeIcon icon={faStar} className="text-warning"  /><FontAwesomeIcon icon={faStarHalf} className="text-warning" />(44,163) </p>
            <p className="text-secondary"> 18 total hours. 139 lectures. All levels </p>
            </div>
            <div className='col-md-3'><h4 className='fw-bold'><FontAwesomeIcon icon={faIndianRupeeSign} /> 3,799</h4></div>
        </div>
        <hr></hr>
    </div>
    </div>
  </div>
  )
}

export default Development