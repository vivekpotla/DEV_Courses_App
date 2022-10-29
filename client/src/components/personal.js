import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Carousel from 'react-bootstrap/Carousel'
import {faCirclePlay,faStar,faInfinity,faIndianRupeeSign,faCircleInfo,faStarHalf} from '@fortawesome/free-solid-svg-icons'
function personal() {
  return (
    <div className='container'>
    <div >
    <h2 className='mt-5 fw-bold'>Personal Development Courses</h2>
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
                <img src="https://www.trainerize.me/articles/wp-content/uploads/2019/01/self-confidence-self-esteem.jpeg" className="card-img h-100  " alt=""/>
            </div>
            <div className=" col-md-7">
            <h4 className="fw-bold">10-Day Double Your Self-Confidence & Self-Esteem Challenge</h4>
            <p>Step-by-step process to creating lasting confidence in personal life and business.<br></br> Boost your inner and outer confidence</p>
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
                <img src="https://venmerc.com/images/it-support.jpg" className="card-img h-100" alt=""/>
            </div>
            <div className="col-md-7">
            <h4 className="fw-bold">IT Support Technical Skills Bootcamp</h4>
            <p>Hands-on Technical skills for IT Support Professionals</p>
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
                <img src="https://wce.education/da-orldclassm/files/2021/09/Councilin-Skills-11.jpg" className="card-img h-100" alt=""/>
            </div>
            <div className="col-md-7">
            <h4 className="fw-bold">Overcome Stress using Cognitive Behavioural Therapy</h4>
            <p>Master all the tools and techniques you need to live happily and deal <br></br>with your emotions effectively.</p>
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
      Confidence
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
          Time Management
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
          Learning Strategies
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
        Spirituality 
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
        Emotional Intelligence
        </p>
      </div>
      <div className='row container fw-bold text-center'>
      <p className="col-sm border pt-3 pb-3 me-1">Personal Transformation
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
          Mindfulness
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
          Life Purpose
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
        Coaching
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
        Meditation
        </p>
      </div>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
        <div className='row container fw-bold text-center'>
      <p className="col-sm border pt-3 pb-3 me-1">
      Life Coach Training
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
         Neuro-Linguistic Programming
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
          Leadership
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
        Communication Skills
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
        Confidence
        </p>
      </div>
      <div className='row container fw-bold text-center'>
      <p className="col-sm border pt-3 pb-3 me-1">Personal Development
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
          Personal Productivity
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
          Speed Reading
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
        Memory
        </p>
        <p className="col-sm border pt-3 pb-3 me-1">
        Personal Transformation
        </p>
      </div>
        </Carousel.Item>
      </Carousel>
      <h4 className='fw-bold mt-5'>All Personal Development Courses</h4>
      <p className='fw-bold border p-3'> <FontAwesomeIcon icon={faCircleInfo} className="pe-3" />Not sure? All courses have a 30-day money-back guarantee</p>
      <div className="mt-2 w-100">
        <div className="row p-3">
            <div className="col-md-4">
                <img src="https://www.thehumancapitalhub.com/images/uploads_articles/27322-time-management-while-work-from-home.jpg" className="w-100 border" alt=""/>
            </div>
            <div className="col-md-5">
            <h6 className="fw-bold">Productivity and Time Management <br></br>for the Overwhelmedn</h6>
            <p>A complete productivity and time management course designed to<br></br> help you reduce your overwhelm and increase your results.</p>
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
                <img src="https://www.naslearn.com/wp-content/uploads/2021/06/course3-1.jpg" className="w-100 border" alt=""/>
            </div>
            <div className="col-md-5">
            <h6 className="fw-bold">Become a SuperLearner® 2: Learn Speed <br></br>Reading & Boost Memory</h6>
            <p>The original course to learn faster & more easily using the skills of the<br></br> worlds fastest readers & memory record holders</p>
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
                <img src="https://modernappliedpsychology.com/wp-content/uploads/2020/06/nlp-advanced-online-courses.jpg" className="w-100 border" alt=""/>
            </div>
            <div className="col-md-5">
            <h6 className="fw-bold">Life Coaching Certificate Course <br></br>(Beginner to Intermediate)</h6>
            <p>A comprehensive online training that delivers in-depth understanding <br></br>of the key elements of the Life Coaching profession</p>
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
                <img src="https://edu.rstca.com.np/wp-content/uploads/2020/04/Neuro-Linguistic-Programming.jpg" className="w-100 border" alt=""/>
            </div>
            <div className="col-md-5">
            <h6 className="fw-bold">Neuro-Linguistic Programming (NLP) <br></br>Practitioner Certificate</h6>
            <p>Gain an in-depth understanding of Neuro-Linguistic Programming (NLP) for <br></br>personal growth and professional excellence.</p>
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
                <img src="https://mcgrawhillprofessionalbusinessblog.com/wp-content/uploads/2018/04/How-To-Connect-With-Your-Customers-Through-Storytelling-770x500.jpg" className="w-100 border" alt=""/>
            </div>
            <div className="col-md-5">
            <h6 className="fw-bold">Storytelling to Influence</h6>
            <p>How to use stories to influence decision makers in the audience!</p>
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
                <img src="https://ccweb.imgix.net/https%3A%2F%2Fd3f1iyfxxz8i1e.cloudfront.net%2Fcourses%2Fcourse_image%2Faaf60eb094b6.jpg?ar=16%3A9&auto=format&cs=strip&fit=crop&h=380&ixlib=php-3.3.1&w=535&s=a5c73c8d96907b9fa9448847139ab4bd" className="w-100 border" alt=""/>
            </div>
            <div className="col-md-5">
            <h6 className="fw-bold">Psychology of Diversity and Unconscious Bias</h6>
            <p>Understand Stereotypes, Prejudice, and Discrimination and How to <br></br>Reduce Their Influence at Work and Your Community</p>
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
                <img src="https://www.jotform.com/blog/wp-content/uploads/2020/10/Guide-to-Effective-Communication-in-the-Workplace-Featured-Image.png" className="w-100 border" alt=""/>
            </div>
            <div className="col-md-5">
            <h6 className="fw-bold">Effective Email Communication: <br></br>Enhancing Your Voice at Work</h6>
            <p>Improving the Clarity and Effectiveness of Digital Communication</p>
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
                <img src="https://media.gcflearnfree.org/content/5c17c23a77c0500354728613_12_17_2018/decision_intro_paths.jpg" className="w-100 border" alt=""/>
            </div>
            <div className="col-md-5">
            <h6 className="fw-bold">Critical Thinking Strategies For Better Decisions</h6>
            <p>Upgrade your problem solving skills and optimize business outcomes <br></br> by applying the critical thinking process.</p>
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

export default personal