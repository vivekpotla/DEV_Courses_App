import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Carousel from 'react-bootstrap/Carousel'
import {faCirclePlay,faStar,faInfinity,faIndianRupeeSign,faCircleInfo,faStarHalf} from '@fortawesome/free-solid-svg-icons'
function Itsoftware() {
  return (
    <div>
    <div className='container'>
    <h2 className='mt-5 fw-bold'>IT & Software Courses</h2>
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
                <img src="https://docs.microsoft.com/learn/achievements/data-analytics-and-microsoft-social.png" className="card-img h-100" alt=""/>
            </div>
            <div className="col-sm-8">
            <h4 className="fw-bold">PL-300 | DA-100: Microsoft Power BI Data Analyst - Exam Prep</h4>
            <p>Full Practice Exam | Pass the PL-300 | DA-100 exam and become Microsoft Certified:<br></br> Power BI Data Analyst Associate!</p>
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
                <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--zrUJwvgZ--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bupbqc9fctvw4j7r14it.png" className="card-img h-100" alt=""/>
            </div>
            <div className="col-sm-8">
            <h4 className="fw-bold">Master Spring framework, Spring Boot, REST, JPA, Hibernate</h4>
            <p>Master Java framework Spring, AOP, Spring MVC, Spring Boot, Thymeleaf, Spring Security,<br></br> Spring JDBC,Spring Data JPA,REST</p>
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
                <img src="https://static.javatpoint.com/tutorial/uipath/images/uipath2.png" className="card-img h-100" alt=""/>
            </div>
            <div className="col-sm-8">
            <h4 className="fw-bold">UiPath Beginners Course (9 Complete Use Cases)</h4>
            <p>Go from beginner to a professional UiPath <br></br>developer</p>
            <p className="text-secondary">By Jan Langdeel<br></br>Updated <b>March 2022</b> 4 total hours. 13 lectures. All levels </p>
            <p>5.0 <FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar}  className="text-warning"/><FontAwesomeIcon icon={faStar} className="text-warning"  /><FontAwesomeIcon icon={faStar} className="text-warning" />(95) </p>
            <h4 className='fw-bold'><FontAwesomeIcon icon={faIndianRupeeSign} />525</h4>
            </div>
        </div>
    </div>
        </Carousel.Item>
      </Carousel>
    {/* <h4 className='fw-bold mt-5'>Popular topics</h4> */}
      {/* <Carousel>
        <Carousel.Item interval={5000}>
        <div className='row container fw-bold text-center'>
      <p className="col-sm border pt-3 pb-3 me-1">
      Digital Marketing
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
          JavaScript
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
          Social Media Marketing
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
        Google Ads
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
        Facebook Ads
        </p>
      </div>
      <div className='row container fw-bold text-center'>
      <p className="col-sm border pt-3 pb-3 me-1">Web Development
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
          Facebook Marketing
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
          SEO
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
        Instgram Marketing
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
        Copywriting
        </p>
      </div>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
        <div className='row container fw-bold text-center'>
      <p className="col-sm border pt-3 pb-3 me-1">
      Facebook Ads
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
          Youtube Marketing
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
          PPC Advertising
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
        Youtube Audience growth
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
        Google Analysis
        </p>
      </div>
      <div className='row container fw-bold text-center'>
      <p className="col-sm border pt-3 pb-3 me-1">Copywriting
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
          Marketing Strategy
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
          Affiliate Marketing
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
        WordPress
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
        Content Marketing
        </p>
      </div>
        </Carousel.Item>
      </Carousel> */}
      <h4 className='fw-bold mt-5'>All IT & Sfotware Courses</h4>
      <p className='fw-bold border p-3'> <FontAwesomeIcon icon={faCircleInfo} className="pe-3" />Not sure? All courses have a 30-day money-back guarantee</p>
      <div className="mt-2 w-100">
        <div className="row p-3">
            <div className="col-md-4">
                <img src="https://miro.medium.com/max/750/0*J_73pQHXmpsI4M5-.jpg" className="w-100 border" alt=""/>
            </div>
            <div className="col-md-5">
            <h6 className="fw-bold">Ultimate AWS Certified Solutions Architect Associate 2022</h6>
            <p>Full Practice Exam | Learn Cloud Computing | Pass the AWS Certified<br></br> Solutions Architect Associate Certification SAA-C02!</p>
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
                <img src="https://www.dutchtrain.nl/wp-content/uploads/2016/01/EC-Council-Certified-Ethical-Hacker-_-CEH-500x292-2.png" className="w-100 border" alt=""/>
            </div>
            <div className="col-md-5">
            <h6 className="fw-bold">Learn Ethical Hacking From Scratch</h6>
            <p>Become an ethical hacker that can hack computer systems <br></br>like black hat hackers and secure them like security experts.</p>
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
                <img src="https://miro.medium.com/max/1068/1*uzqzUEViPe1kvrR6J70A0Q.png" className="w-100 border" alt=""/>
            </div>
            <div className="col-md-5">
            <h6 className="fw-bold">[NEW] Ultimate AWS Certified Cloud Practitioner - 2022</h6>
            <p>Full Practice Exam included + explanations | Learn Cloud Computing <br></br>| Pass the AWS Cloud Practitioner CLF-C01 exam!</p>
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
                <img src="https://www.apsu.edu/continuing-education/careerandworkforcecertificationsbusiness/ic-aplus-1-min.jpg" className="w-100 border" alt=""/>
            </div>
            <div className="col-md-5">
            <h6 className="fw-bold">TOTAL: CompTIA A+ Certification (220-1001).</h6>
            <p>Course 1: Everything you need to pass the A+ Certification Core 1 (220-1001) Exam,<br></br> from Mike Meyers and Total Seminars.</p>
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
                <img src="https://www.saviantconsulting.com/images/blog/10-reasons-why-choose-azure-for-your-enterprise.png" className="w-100 border" alt=""/>
            </div>
            <div className="col-md-5">
            <h6 className="fw-bold">AZ-900: Microsoft Azure Fundamentals Exam Prep - JAN 2022</h6>
            <p>Learn the fundamentals of Azure, and get certified, with this complete beginner's<br></br> AZ-900 course, includes practice test!</p>
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
                <img src="https://www.cloudsigma.com/wp-content/uploads/How-To-Create-a-Kubernetes-Cluster-Using-Kubeadm-on-Ubuntu-18.jpg" className="w-100 border" alt=""/>
            </div>
            <div className="col-md-5">
            <h6 className="fw-bold">Kubernetes for the Absolute Beginners - Hands-on</h6>
            <p>Learn Kubernetes in simple, easy and fun way with hands-on<br></br> coding exercises. For beginners in DevOps.</p>
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
                <img src="https://imageio.forbes.com/specials-images/imageserve/621f711b68e65b2ffb859094/Cyber-security-and-data-protection--Businesswoman-using-modern-screen-computer/0x0.jpg?fit=crop&format=jpg&crop=3545,1994,x1991,y0,safe" className="w-100 border" alt=""/>
            </div>
            <div className="col-md-5">
            <h6 className="fw-bold">The Complete Cyber Security Course : Hackers Exposed!</h6>
            <p>Volume 1 : Become a Cyber Security Specialist, Learn How to Stop Hackers,<br></br> Prevent Hacking, Learn IT Security & INFOSEC</p>
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
                <img src="https://media.onlinecoursebay.com/2019/03/15021135/1256694_18e1_4.jpg" className="w-100 border" alt=""/>
            </div>
            <div className="col-md-5">
            <h6 className="fw-bold">The Complete Networking Fundamentals Course. Your CCNA start</h6>
            <p>Learn about networking and start your journey to Cisco 200-301<br></br> Certification.</p>
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

export default Itsoftware