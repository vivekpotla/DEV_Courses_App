import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Carousel from 'react-bootstrap/Carousel'
import {faCirclePlay,faStar,faInfinity,faIndianRupeeSign,faCircleInfo,faStarHalf} from '@fortawesome/free-solid-svg-icons'
function Health() {
  return (
    <div>
    <div className='container'>
    <h2 className='mt-5 fw-bold'>Health & Fitness Courses</h2>
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
            <div className="col-sm-4">
                <img src="https://media1.s-nbcnews.com/i/newscms/2018_08/2339546/180223-marathon-runners-al-1328_6b354fa0bb256eb6582bffcc8cc80089.jpg" className="card-img h-100" alt=""/>
            </div>
            <div className="col-sm-8">
            <h4 className="fw-bold">Running a Marathon: Slow Jogging Approach</h4>
            <p>How to make your marathon training surprisingly efficient with the safe, science-based Slow Jogging approach</p>
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
            <div className="col-sm-4">
                <img src="https://destinationdeluxe.com/wp-content/uploads/2017/05/Top-5-Meditation-Tips-Destination-Deluxe-570x381.jpg" className="card-img h-100" alt=""/>
            </div>
            <div className="col-sm-8">
            <h4 className="fw-bold">Meditation Practitioner Certification: Accredited Diploma</h4>
            <p>Meditation & Mindfulness Teacher Certification | Mindfulness Meditation & Transcendental Meditation For Instructors</p>
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
            <div className="col-sm-4">
                <img src="https://adwaityoga.com/wp-content/uploads/2020/09/Mindfulness-Meditation-Practice.jpg" className="card-img h-100" alt=""/>
            </div>
            <div className="col-sm-8">
            <h4 className="fw-bold">Meditation Teacher Training Certificate Course</h4>
            <p>Yoga Alliance Continuing Education Approved Course</p>
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
      Massage
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
          Holistic Medicine
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
          Nutrition
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
        Herbalism
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
        Yoga
        </p>
      </div>
      <div className='row container fw-bold text-center'>
      <p className="col-sm border pt-3 pb-3 me-1">Mediation teaching
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
          Fitness
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
          Meditation
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
        Qi Gong
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
        Art Therapy
        </p>
      </div>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
        <div className='row container fw-bold text-center'>
      <p className="col-sm border pt-3 pb-3 me-1">
        Health Coaching
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
        Health
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
          Aromatherpy
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
        Dance
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
        Weight loss
        </p>
      </div>
      <div className='row container fw-bold text-center'>
      <p className="col-sm border pt-3 pb-3 me-1">Medical
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
          Sports Massage
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
          Dance
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
         Krav Maga
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
        Natural Medicine
        </p>
      </div>
        </Carousel.Item>
      </Carousel>
      <h4 className='fw-bold mt-5'>All Health & Fitness Courses</h4>
      <p className='fw-bold border p-3'> <FontAwesomeIcon icon={faCircleInfo} className="pe-3" />Not sure? All courses have a 30-day money-back guarantee</p>
      <div className="mt-2 w-100">
        <div className="row p-3">
            <div className="col-md-4">
                <img src="https://creakyjoints.org/wp-content/uploads/2020/02/0120_CBT_Logo.jpg" className="w-100 border" alt=""/>
            </div>
            <div className="col-md-5">
            <h6 className="fw-bold">Cognitive Behavioural Therapy (CBT) Practitioner Course</h6>
            <p>Become a Certified Cognitive Behavioural Therapy (CBT) Practitioner and elevate<br></br> your understanding of human behaviour.</p>
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
                <img src="https://images.squarespace-cdn.com/content/v1/5d2fb1e4caf26500019bfdcf/1592006176591-D22K42Z8C8IWZJKYJL92/art+therapy+without+another+degree+or+certification+-+blog+post.png" className="w-100 border" alt=""/>
            </div>
            <div className="col-md-5">
            <h6 className="fw-bold">Therapeutic Art Life Coach Certification (Accredited)</h6>
            <p>Therapeutic Art: Help Clients Heal, Reduce Stress & Manifest Dreams with Mandalas,<br></br> Affirmations, Vision Boards & More</p>
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
                <img src="https://st2.depositphotos.com/1005563/5208/i/600/depositphotos_52083087-stock-photo-fresh-medicinal-herbs.jpg" className="w-100 border" alt=""/>
            </div>
            <div className="col-md-5">
            <h6 className="fw-bold">Herbalism :: Introduction & Medicine Making Certificate</h6>
            <p>Take charge of your health with herbal medicine. Using herbs and natural holistic<br></br> medicine is easy, effective and safe.</p>
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
                <img src="https://downloadfreecourse.com/uploads/images/2020/webp/image_750x_5eca713d33d08.webp" className="w-100 border" alt=""/>
            </div>
            <div className="col-md-5">
            <h6 className="fw-bold">Internationally Accredited Diploma Certificate in Nutrition</h6>
            <p>Learn how to eat healthy and understand the fundamentals of nutrition <br></br>science</p>
            <p>4.5<FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar}  className="text-warning"/><FontAwesomeIcon icon={faStar} className="text-warning"  /><FontAwesomeIcon icon={faStarHalf} className="text-warning" />(45,115) </p>
            <p className="text-secondary"> 34 total hours. 173 lectures. All levels </p>
            </div>
            <div className='col-md-3'><h4 className='fw-bold'><FontAwesomeIcon icon={faIndianRupeeSign} /> 499</h4></div>
        </div>
        <hr></hr>
    </div>
    <div className="mt-2 w-100">
        <div className="row p-3">
            <div className="col-md-4">
                <img src="https://coursemarks.com/wp-content/uploads/2020/11/253326_a442_10.jpg.webp" className="w-100 border" alt=""/>
            </div>
            <div className="col-md-5">
            <h6 className="fw-bold">15 Minutes x 15 Days Yoga Mobility Challenge</h6>
            <p>Increase your flexibility and range of motion, energise your body and improve your yoga<br></br> skills in 15 minutes a day.</p>
            <p>4.9 <FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar}  className="text-warning"/><FontAwesomeIcon icon={faStar} className="text-warning"  /><FontAwesomeIcon icon={faStar} className="text-warning" />(40,123) </p>
            <p className="text-secondary"> 44.5 total hours. 320 lectures. All levels </p>
            </div>
            <div className='col-md-3'><h4 className='fw-bold'><FontAwesomeIcon icon={faIndianRupeeSign} /> 599</h4></div>
        </div>
        <hr></hr>
    </div>
    <div className="mt-2 w-100">
        <div className="row p-3">
            <div className="col-md-4">
                <img src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/320423_2200-732x549.jpg" className="w-100 border" alt=""/>
            </div>
            <div className="col-md-5">
            <h6 className="fw-bold">Aromatherapy- Using Essential Oils For Natural Living (5 CE)</h6>
            <p>Aromatherapy-Blend Aromatherapy Essential Oils By The Notes, Beauty Products, <br></br>Cleaning Products, Balms And Scrubs !</p>
            <p>4.8 <FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar}  className="text-warning"/><FontAwesomeIcon icon={faStar} className="text-warning"  /><FontAwesomeIcon icon={faStar} className="text-warning" />(12,253) </p>
            <p className="text-secondary">69 total hours. 320 lectures. All levels </p>
            </div>
            <div className='col-md-3'><h4 className='fw-bold'><FontAwesomeIcon icon={faIndianRupeeSign} /> 699</h4></div>
        </div>
        <hr></hr>
    </div>
    <div className="mt-2 w-100">
        <div className="row p-3">
            <div className="col-md-4">
                <img src="https://about.udemy.com/wp-content/uploads/2017/01/10340009.jpg" className="w-100 border" alt=""/>
            </div>
            <div className="col-md-5">
            <h6 className="fw-bold">Elevate Your Tennis Game: Learn from Champion Andre Agassi</h6>
            <p>Level up your tennis game with the next best thing to a private lesson.<br></br> Master insider secrets and a winner’s mindset.</p>
            <p>4.5 <FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar}  className="text-warning"/><FontAwesomeIcon icon={faStar} className="text-warning"  /><FontAwesomeIcon icon={faStarHalf} className="text-warning" />(54,153) </p>
            <p className="text-secondary"> 30 total hours. 488 lectures. All levels </p>
            </div>
            <div className='col-md-3'><h4 className='fw-bold'><FontAwesomeIcon icon={faIndianRupeeSign} /> 525</h4></div>
        </div>
        <hr></hr>
    </div>
    <div className="mt-2 w-100">
        <div className="row p-3">
            <div className="col-md-4">
                <img src="https://www.cnet.com/a/img/resize/c2591bb9699e78dd58d6b78f5ec553bfe4ecd571/2020/06/05/35a4f522-71e0-41b1-a281-477f941a6fc1/gettyimages-1213531596.jpg?auto=webp&width=940" className="w-100 border" alt=""/>
            </div>
            <div className="col-md-5">
            <h6 className="fw-bold">Sit Less Move More - Office Desk Exercise To Improve Posture</h6>
            <p>Helping people and the organizations they work for – engage, <br></br>flourish and thrive with daily office-based body movement!</p>
            <p>4.7 <FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar}  className="text-warning"/><FontAwesomeIcon icon={faStar} className="text-warning"  /><FontAwesomeIcon icon={faStarHalf} className="text-warning" />(44,163) </p>
            <p className="text-secondary"> 18 total hours. 139 lectures. All levels </p>
            </div>
            <div className='col-md-3'><h4 className='fw-bold'><FontAwesomeIcon icon={faIndianRupeeSign} /> 999</h4></div>
        </div>
        <hr></hr>
    </div>
    </div>
  </div>
  )
}

export default Health