import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Carousel from 'react-bootstrap/Carousel'
import {faCirclePlay,faStar,faInfinity,faIndianRupeeSign,faCircleInfo,faStarHalf} from '@fortawesome/free-solid-svg-icons'
function Design() {
  return (
    <div>
    <div className='container'>
    <h2 className='mt-5 fw-bold'>Design Courses</h2>
    <h4 className='mt-5 fw-bold'>Courses to get you started</h4>
    </div>
    <hr></hr>
    <div className="row row-cols-sm-3 row-cols-1 ms-5 me-5 text-center">
      <p className="col fw-bold"><FontAwesomeIcon icon={faCirclePlay} className='pe-3' />Learn in-demand skills with over <br></br> 183,000 video courses</p>
      <p className="col fw-bold"><FontAwesomeIcon icon={faStar} className='pe-3' />Choose courses taught by real-world <br></br> experts</p>
      <p className="col fw-bold"><FontAwesomeIcon icon={faInfinity} className='pe-3' />Learn at your own pace, with lifetime <br></br>access on mobile and desktop</p>
    </div>
    <hr></hr>
    <div className='container'>
    <h4 className='fw-bold mt-5'>Features Courses</h4>
    <Carousel>
        <Carousel.Item interval={5000}>
        <div className="card mt-2 shadow w-100">
        <div className="row p-3">
            <div className="col-md-5">
                <img src="https://www.grafixfather.com/wp-content/uploads/2022/03/Udemy-Blender-From-Groundup.jpg" className="card-img h-100" alt=""/>
            </div>
            <div className="col-md-7">
            <h4 className="fw-bold">BLENDER FROM GROUND UP</h4>
            <p>In this course we will learn how to use Blender from start to finish with Marwan Hussein</p>
            <p className="text-secondary">By Nicolai<br></br>Updated <b>March 2022</b> 9 total hours. 26 lectures. All levels </p>
            <p>4.8 <FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar}  className="text-warning"/><FontAwesomeIcon icon={faStar} className="text-warning"  /><FontAwesomeIcon icon={faStar} className="text-warning" />(18) </p>
            <h4 className='fw-bold'><FontAwesomeIcon icon={faIndianRupeeSign} /> 525</h4>
            </div>
        </div>
    </div>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
        <div className="card mt-2 shadow w-100">
        <div className="row p-3">
            <div className="col-md-5">
                <img src="https://i.ytimg.com/vi/iLOynuac0_k/maxresdefault.jpg" className="card-img h-100" alt=""/>
            </div>
            <div className="col-md-7">
            <h4 className="fw-bold">Complete Guide to Marvelous Designer 11</h4>
            <p>Create different types of Garments for your 3d characters.</p>
            <p className="text-secondary">By Eazy Bytes<br></br>Updated <b>March 2022</b> 35 total hours. 63 lectures. All levels </p>
            <p>4.8 <FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar}  className="text-warning"/><FontAwesomeIcon icon={faStar} className="text-warning"  /><FontAwesomeIcon icon={faStar} className="text-warning" />(30) </p>
            <h4 className='fw-bold'><FontAwesomeIcon icon={faIndianRupeeSign} /> 525</h4>
            </div>
        </div>
    </div>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
        <div className="card mt-2 shadow w-100">
        <div className="row p-3">
            <div className="col-md-5">
                <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/196178780/original/63d9b27d5b854453f2904b5ae5032f4dbe092234/design-low-content-kdp-interior-amazon-kdp-cover-or-coloring-book.jpg" className="card-img h-100" alt=""/>
            </div>
            <div className="col-md-7">
            <h4 className="fw-bold">How to Design a STAND-OUT Book Cover for Amazon KDP in Canva</h4>
            <p>Learn How to Design Stunning Book Covers and 3D Mock-ups for Hardcover, Paperback.</p>
            <p className="text-secondary">By Jan Langdeel<br></br>Updated <b>March 2022</b> 4 total hours. 13 lectures. All levels </p>
            <p>5.0 <FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar}  className="text-warning"/><FontAwesomeIcon icon={faStar} className="text-warning"  /><FontAwesomeIcon icon={faStar} className="text-warning" />(95) </p>
            <h4 className='fw-bold'><FontAwesomeIcon icon={faIndianRupeeSign} />525</h4>
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
      Photo Shop
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
          Adobe Illustrator
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
          Drawing
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
        Blender
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
        Web Design
        </p>
      </div>
      <div className='row container fw-bold text-center'>
      <p className="col-sm border pt-3 pb-3 me-1">Web Development
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
          Graph Design
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
          User Experience design
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
        3D modelling
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
        After Effect
        </p>
      </div>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
        <div className='row container fw-bold text-center'>
      <p className="col-sm border pt-3 pb-3 me-1">
      Web design
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
        Character Design
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
          AutoCad
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
        WordPress
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
        Figma
        </p>
      </div>
      <div className='row container fw-bold text-center'>
      <p className="col-sm border pt-3 pb-3 me-1">Copywriting
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
          After effect
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
          Mobile App Design
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
        Adobe XD
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
        User Interface
        </p>
      </div>
        </Carousel.Item>
      </Carousel>
      <h4 className='fw-bold mt-5'>All Design Courses</h4>
      <p className='fw-bold border p-3'> <FontAwesomeIcon icon={faCircleInfo} className="pe-3" />Not sure? All courses have a 30-day money-back guarantee</p>
      <div className="mt-2 w-100">
        <div className="row p-3">
            <div className="col-md-4">
                <img src="https://cdn.mos.cms.futurecdn.net/kbQ3rpQhDEcYQiiPoysSHH.jpg" className="w-100 border" alt=""/>
            </div>
            <div className="col-md-5">
            <h6 className="fw-bold">The Ultimate Drawing Course - Beginner to Advanced</h6>
            <p>Learn the #1 most important building block of all art, Drawing. <br></br>This course will teach you how to draw like a pro!</p>
            <p>4.7 <FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar}  className="text-warning"/><FontAwesomeIcon icon={faStar} className="text-warning"  /><FontAwesomeIcon icon={faStarHalf} className="text-warning" />(148,123) </p>
            <p className="text-secondary"> 27 total hours. 373 lectures. All levels </p>
            </div>
            <div className='col-md-3'><h4 className='fw-bold'><FontAwesomeIcon icon={faIndianRupeeSign} />525</h4></div>
        </div>
        <hr></hr>
    </div>
    <div className="mt-2 w-100">
        <div className="row p-3">
            <div className="col-md-4">
                <img src="https://static.skillshare.com/uploads/discussion/tmp/e9422edf" className="w-100 border" alt=""/>
            </div>
            <div className="col-md-5">
            <h6 className="fw-bold">Character Art School: Complete Character Drawing Course</h6>
            <p>Learn How to Draw People and Character Drawings Professionally, <br></br>Drawing for Animation, Comics, Cartoons, Games and More!</p>
            <p>4.6 <FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar}  className="text-warning"/><FontAwesomeIcon icon={faStar} className="text-warning"  /><FontAwesomeIcon icon={faStarHalf} className="text-warning" />(106,123) </p>
            <p className="text-secondary">16 total hours. 136 lectures. All levels </p>
            </div>
            <div className='col-md-3'><h4 className='fw-bold'><FontAwesomeIcon icon={faIndianRupeeSign} />525</h4></div>
        </div>
        <hr></hr>
    </div>
    <div className="mt-2 w-100">
        <div className="row p-3">
            <div className="col-md-4">
                <img src="https://www.sculpteo.com/blog/wp-content/uploads/2018/08/studio.jpg" className="w-100 border" alt=""/>
            </div>
            <div className="col-md-5">
            <h6 className="fw-bold">Complete Blender Creator: Learn 3D Modelling for Beginners</h6>
            <p>Use Blender to Create Beautiful 3D models for Video Games, 3D Printing & More.<br></br> Beginners Level Course</p>
            <p>4.7 <FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar}  className="text-warning"/><FontAwesomeIcon icon={faStar} className="text-warning"  /><FontAwesomeIcon icon={faStarHalf} className="text-warning" />(87,213) </p>
            <p className="text-secondary"> 17.5 total hours. 165 lectures. All levels </p>
            </div>
            <div className='col-md-3'><h4 className='fw-bold'><FontAwesomeIcon icon={faIndianRupeeSign} /> 1200</h4></div>
        </div>
        <hr></hr>
    </div>
    <div className="mt-2 w-100">
        <div className="row p-3">
            <div className="col-md-4">
                <img src="https://www.innovationtraining.org/wp-content/uploads/2020/02/Steps-to-Design-Thinking.jpeg" className="w-100 border" alt=""/>
            </div>
            <div className="col-md-5">
            <h6 className="fw-bold">Design Thinking in 3 Steps</h6>
            <p>Understand your audience, envision a creative solution, and test your <br></br>prototype</p>
            <p>4.5<FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar}  className="text-warning"/><FontAwesomeIcon icon={faStar} className="text-warning"  /><FontAwesomeIcon icon={faStarHalf} className="text-warning" />(45,115) </p>
            <p className="text-secondary"> 34 total hours. 173 lectures. All levels </p>
            </div>
            <div className='col-md-3'><h4 className='fw-bold'><FontAwesomeIcon icon={faIndianRupeeSign} /> 3,499</h4></div>
        </div>
        <hr></hr>
    </div>
    <div className="mt-2 w-100">
        <div className="row p-3">
            <div className="col-md-4">
                <img src="https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhcGhpYyUyMGRlc2lnbnxlbnwwfHwwfHw%3D&w=1000&q=80" className="w-100 border" alt=""/>
            </div>
            <div className="col-md-5">
            <h6 className="fw-bold">Graphic Design Masterclass - Learn GREAT Design</h6>
            <p>The Ultimate Graphic Design Course Which Covers Photoshop, Illustrator, <br></br>InDesign,Design Theory, Branding and Logo Design</p>
            <p>4.9 <FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar}  className="text-warning"/><FontAwesomeIcon icon={faStar} className="text-warning"  /><FontAwesomeIcon icon={faStar} className="text-warning" />(40,123) </p>
            <p className="text-secondary"> 44.5 total hours. 320 lectures. All levels </p>
            </div>
            <div className='col-md-3'><h4 className='fw-bold'><FontAwesomeIcon icon={faIndianRupeeSign} /> 3,499</h4></div>
        </div>
        <hr></hr>
    </div>
    <div className="mt-2 w-100">
        <div className="row p-3">
            <div className="col-md-4">
                <img src="https://freecoursesites.com/wp-content/uploads/2019/03/Adobe-illustrator-in-an-easy-way-create-awesome-designs-Course.jpg" className="w-100 border" alt=""/>
            </div>
            <div className="col-md-5">
            <h6 className="fw-bold">Illustrator 2022 MasterClass</h6>
            <p>Master Adobe Illustrator with this in-depth training for all <br></br>levels.</p>
            <p>4.8 <FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar}  className="text-warning"/><FontAwesomeIcon icon={faStar} className="text-warning"  /><FontAwesomeIcon icon={faStar} className="text-warning" />(12,253) </p>
            <p className="text-secondary">69 total hours. 320 lectures. All levels </p>
            </div>
            <div className='col-md-3'><h4 className='fw-bold'><FontAwesomeIcon icon={faIndianRupeeSign} /> 3,499</h4></div>
        </div>
        <hr></hr>
    </div>
    <div className="mt-2 w-100">
        <div className="row p-3">
            <div className="col-md-4">
                <img src="https://www.howtofree.org/wp-content/uploads/2020/11/homepagefeaturebox-ps-ad-jun18.jpg" className="w-100 border" alt=""/>
            </div>
            <div className="col-md-5">
            <h6 className="fw-bold">Adobe Photoshop CC – Essentials Training Course</h6>
            <p>This Adobe Photoshop Essentials course will teach you Photoshop Retouching as well as <br></br>Photoshop for graphic design.</p>
            <p>4.5 <FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar}  className="text-warning"/><FontAwesomeIcon icon={faStar} className="text-warning"  /><FontAwesomeIcon icon={faStarHalf} className="text-warning" />(54,153) </p>
            <p className="text-secondary"> 30 total hours. 488 lectures. All levels </p>
            </div>
            <div className='col-md-3'><h4 className='fw-bold'><FontAwesomeIcon icon={faIndianRupeeSign} /> 3,499</h4></div>
        </div>
        <hr></hr>
    </div>
    <div className="mt-2 w-100">
        <div className="row p-3">
            <div className="col-md-4">
                <img src="https://learnwithmuhammadimran.com/wp-content/uploads/2021/01/autocad-curse.jpg" className="w-100 border" alt=""/>
            </div>
            <div className="col-md-5">
            <h6 className="fw-bold">The complete AutoCAD 2018-21 course</h6>
            <p>A complete course for learning AutoCAD from scratch to professional level</p>
            <p>4.7 <FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar}  className="text-warning"/><FontAwesomeIcon icon={faStar} className="text-warning"  /><FontAwesomeIcon icon={faStarHalf} className="text-warning" />(44,163) </p>
            <p className="text-secondary"> 18 total hours. 139 lectures. All levels </p>
            </div>
            <div className='col-md-3'><h4 className='fw-bold'><FontAwesomeIcon icon={faIndianRupeeSign} /> 3,499</h4></div>
        </div>
        <hr></hr>
    </div>
    </div>
  </div>
  )
}

export default Design
