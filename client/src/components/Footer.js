import React from 'react'
import Flogo from '../images/Flogo.png'
function Footer() {
  return (
    <div className='bg-dark text-white  '>
        <div className="d-flex justify-content-around pt-5 pb-2">
        <ul className="flex-item text-white ">
            <li><a  className=" text-white link1  " href="" >Udemy Business</a></li>
            <li><a className=" text-white link1" href="">Teach on Udemy</a></li>
            <li><a className=" text-white link1" href="" >Get the app</a></li>
            <li><a className=" text-white link1"  href="">About us</a></li>
            <li><a className="text-white link1" href="">Contact us</a></li>
        </ul>
            
            
         <ul className="flex-item text-white ">     
            <li><a href="" className='text-white link1'>Careers</a></li>
            <li><a className=" text-white link1" href="" >Blog</a></li>
            <li><a className=" text-white link1" href="">Help and Support</a></li>
            <li><a className="text-white link1 " href="">Affiliate</a></li>
            <li><a className=" text-white link1" href="">Investors</a></li>
        </ul>

        <ul className="flex-item text-white ">
            <li><a className=" text-white link1" href="">Terms</a></li>
            <li><a className=" text-white link1" href="">Privacy policy</a></li>
            <li><a className=" text-white link1"  href="">Cookie settings</a></li>
            <li><a className=" text-white link1" href="">Sitemap</a></li>
            <li><a className="text-white link1 " href="">Accessibility statement</a></li>
        </ul>

            </div>



            <div className="text-center d-flex justify-content-around p-3">
                <div className="flex-item" data-purpose="logo-container">
                    <img src={Flogo} alt="" style={{width:"6rem"}}/>
                   </div>

            <div className="flex-item my-auto" data-purpose="footer-copyright">© 2022 Udemy, Inc.</div>
       
        

 </div>
 </div>             
 
  )
}

export default Footer