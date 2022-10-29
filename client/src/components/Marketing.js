import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Carousel from 'react-bootstrap/Carousel'
import {faCirclePlay,faStar,faInfinity,faIndianRupeeSign,faCircleInfo,faStarHalf} from '@fortawesome/free-solid-svg-icons'
function Marketing() {
  return (
    <div className='container'>
    <div className='container'>
    <h2 className='mt-5 fw-bold'>Marketing Courses</h2>
    <h4 className='mt-5 fw-bold'>Courses to get you started</h4>
    </div>
    <hr></hr>
    <div className="row row-cols-sm-3 row-cols-1  ms-5 me-5">
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
                <img src="https://i.ytimg.com/vi/mLV7MASrDlQ/maxresdefault.jpg" className="card-img h-100" alt=""/>
            </div>
            <div className="col-sm-8">
            <h4 className="fw-bold">NeuroMarketing: Applied NeuroScience <br></br>to grow business</h4>
            <p>Boost Your Digital Marketing Using Neuromarketing<br></br>Strategies.</p>
            <p className="text-secondary">By Diego Davila. 650.000+ Students and 1 other<br></br>Updated <b>March 2022</b> 3 total hours. 26 lectures. All levels </p>
            <p>4.8 <FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar}  className="text-warning"/><FontAwesomeIcon icon={faStar} className="text-warning"  /><FontAwesomeIcon icon={faStar} className="text-warning" />(18) </p>
            <h4 className='fw-bold'><FontAwesomeIcon icon={faIndianRupeeSign} /> 3,499</h4>
            </div>
        </div>
    </div>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
        <div className="card mt-2 shadow w-100">
        <div className="row p-3">
            <div className="col-sm-4">
                <img src="https://teresas.ac.in/wp-content/uploads/2021/07/20190820185239-GettyImages-985550942.jpeg" className="card-img h-100" alt=""/>
            </div>
            <div className="col-sm-8">
            <h4 className="fw-bold">Digital Marketing Strategy: G.I.F.T. <br></br>Framework Masterclass</h4>
            <p>Unlock the hidden source of free leads that BIG brands <br></br> have been using for decades.</p>
            <p className="text-secondary">By Donatas Jonikas (PhD)<br></br>Updated <b>March 2022</b> 8 total hours. 63 lectures. All levels </p>
            <p>4.8 <FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar}  className="text-warning"/><FontAwesomeIcon icon={faStar} className="text-warning"  /><FontAwesomeIcon icon={faStar} className="text-warning" />(30) </p>
            <h4 className='fw-bold'><FontAwesomeIcon icon={faIndianRupeeSign} /> 3,499</h4>
            </div>
        </div>
    </div>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
        <div className="card mt-2 shadow w-100">
        <div className="row p-3">
            <div className="col-sm-4">
                <img src="https://cdn.educba.com/academy/wp-content/uploads/2019/07/SEO-Tools.jpg" className="card-img h-100" alt=""/>
            </div>
            <div className="col-sm-8">
            <h4 className="fw-bold">Google SEO MasterClass for Beginners:<br></br>Academy 365</h4>
            <p>Master the practical SEO tactics with this course.<br></br> Learn how to rank your website on the top of SE.</p>
            <p className="text-secondary">By Academy 365<br></br>Updated <b>March 2022</b> 8 total hours. 65 lectures. All levels </p>
            <p>5.0 <FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar}  className="text-warning"/><FontAwesomeIcon icon={faStar} className="text-warning"  /><FontAwesomeIcon icon={faStar} className="text-warning" />(95) </p>
            <h4 className='fw-bold'><FontAwesomeIcon icon={faIndianRupeeSign} />1,920</h4>
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
      </Carousel>
      <h4 className='fw-bold mt-5'>All Marketing Courses</h4>
      <p className='fw-bold border p-3'> <FontAwesomeIcon icon={faCircleInfo} className="pe-3" />Not sure? All courses have a 30-day money-back guarantee</p>
      <div className="mt-2 w-100">
        <div className="row p-3">
            <div className="col-md-4">
                <img src="https://www.techrika.com/wp-content/uploads/2022/01/digital-marketing.jpg" className="w-100 border" alt=""/>
            </div>
            <div className="col-md-5">
            <h6 className="fw-bold">The Complete Digital Marketing Course - 12 Courses in 1</h6>
            <p>Master Digital Marketing Strategy, Social Media Marketing, SEO, YouTube, Email, Facebook <br></br>Marketing, Analytics & More!</p>
            <p>4.5 <FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar}  className="text-warning"/><FontAwesomeIcon icon={faStar} className="text-warning"  /><FontAwesomeIcon icon={faStarHalf} className="text-warning" />(148,123) </p>
            <p className="text-secondary"> 22.5 total hours. 119 lectures. All levels </p>
            </div>
            <div className='col-md-3'><h4 className='fw-bold'><FontAwesomeIcon icon={faIndianRupeeSign} /> 3,699</h4></div>
        </div>
        <hr></hr>
    </div>
    <div className="mt-2 w-100">
        <div className="row p-3">
            <div className="col-md-4">
                <img src="https://xpertly.in/wp-content/uploads/2021/06/google_adwords_cover.jpg" className="w-100 border" alt=""/>
            </div>
            <div className="col-md-5">
            <h6 className="fw-bold">Ultimate Google Ads Training 2021: Profit with Pay Per Click</h6>
            <p>Google Ads 2021: How our clients have transformed their sales using <br></br>Google Ads & get your Google Ads certification!</p>
            <p>4.6 <FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar}  className="text-warning"/><FontAwesomeIcon icon={faStar} className="text-warning"  /><FontAwesomeIcon icon={faStarHalf} className="text-warning" />(32,123) </p>
            <p className="text-secondary">24.5 total hours. 136 lectures. All levels </p>
            </div>
            <div className='col-md-3'><h4 className='fw-bold'><FontAwesomeIcon icon={faIndianRupeeSign} /> 3,499</h4></div>
        </div>
        <hr></hr>
    </div>
    <div className="mt-2 w-100">
        <div className="row p-3">
            <div className="col-md-4">
                <img src="https://thevideoink.com/wp-content/uploads/2021/09/Instagram.png" className="w-100 border" alt=""/>
            </div>
            <div className="col-md-5">
            <h6 className="fw-bold">Instagram Marketing 2022: Complete Guide To Instagram Growth</h6>
            <p>Attract Hyper-Targeted Instagram Followers, Convert Followers to Paying Customers, & Expand <br></br>your Brand Using Instagram</p>
            <p>4.5 <FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar}  className="text-warning"/><FontAwesomeIcon icon={faStar} className="text-warning"  /><FontAwesomeIcon icon={faStarHalf} className="text-warning" />(44,213) </p>
            <p className="text-secondary"> 7.5 total hours. 65 lectures. All levels </p>
            </div>
            <div className='col-md-3'><h4 className='fw-bold'><FontAwesomeIcon icon={faIndianRupeeSign} /> 3,499</h4></div>
        </div>
        <hr></hr>
    </div>
    <div className="mt-2 w-100">
        <div className="row p-3">
            <div className="col-md-4">
                <img src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/OGGLXAIY4ZLCFGM3NYFG37OXRQ.jpg" className="w-100 border" alt=""/>
            </div>
            <div className="col-md-5">
            <h6 className="fw-bold">Facebook Ads & Facebook Marketing MASTERY 2022 | Coursenvy ®</h6>
            <p>Facebook Marketing from beginner to advanced! Join 100,000+ students who MASTERED <br></br>Facebook and are Facebook Ads experts!</p>
            <p>4.5<FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar}  className="text-warning"/><FontAwesomeIcon icon={faStar} className="text-warning"  /><FontAwesomeIcon icon={faStarHalf} className="text-warning" />(45,115) </p>
            <p className="text-secondary"> 34 total hours. 73 lectures. All levels </p>
            </div>
            <div className='col-md-3'><h4 className='fw-bold'><FontAwesomeIcon icon={faIndianRupeeSign} /> 3,499</h4></div>
        </div>
        <hr></hr>
    </div>
    <div className="mt-2 w-100">
        <div className="row p-3">
            <div className="col-md-4">
                <img src="https://www.talkwalker.com/images/2020/blog-headers/meg/social-media-tips-blog-header-no-logo.png" className="w-100 border" alt=""/>
            </div>
            <div className="col-md-5">
            <h6 className="fw-bold">Social Media Marketing MASTERY | Learn Ads on 10+ Platforms</h6>
            <p>MASTER online marketing on Twitter, Pinterest, Instagram, YouTube,<br></br> Facebook, Google and more ad platforms! Coursenvy ®</p>
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
                <img src="https://platy.sk/c/images/cms/2020/09/graduates_cover_small.jpg" className="w-100 border" alt=""/>
            </div>
            <div className="col-md-5">
            <h6 className="fw-bold">Google Analytics Certification - Become Analytics Certified!</h6>
            <p>How to Pass the Google Analytics Certification Exam Quickly & Become Google Analytics<br></br> Certified. No Experience Required!</p>
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
                <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2021/04/how-to-prioritize-in-seo-for-the-greatest-business-impact-607d2f547f65c-1520x800.png" className="w-100 border" alt=""/>
            </div>
            <div className="col-md-5">
            <h6 className="fw-bold">SEO 2022: Complete SEO Training + SEO for WordPress Websites</h6>
            <p>Competitor + Keyword Research, On Page + Technical SEO, Core Web Vitals, Pagespeed,<br></br> Backlinks SEO & WordPress Training</p>
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
                <img src="https://cdn-ippei.pressidium.com/wp-content/uploads/2020/07/make-money-with-clickbank-header-min.jpg" className="w-100 border" alt=""/>
            </div>
            <div className="col-md-5">
            <h6 className="fw-bold">ClickBank Success – Affiliate Marketing Without A Website</h6>
            <p>Learn and model my proven system for success as a ClickBank affiliate. <br></br>No hidden secrets - I reveal it all!</p>
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

export default Marketing