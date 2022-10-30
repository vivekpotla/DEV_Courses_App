import React from 'react'
import Logo from '../images/Logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { Form, FormControl, Button, Dropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBell, faCartArrowDown, faHeart, faUser } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from "../store/index.js";

// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
// import {Form} from 'react-bootstrap/Form'
function Header() {


  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const userType = localStorage.getItem("userType");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




  return (
    <div className='w-100 '>
      <div className='first-navbar w-100'>
        <nav className="w-100 navbar navbar-expand-lg bg-light  p-2 m-0 justify-content-between gap-2" >

          <a className="ms-3 nav-item me-0" href="/home"><img src={Logo} alt="Logo" style={{ width: '6rem' }} /></a>


          {/* Collapse button  */}
          {/* <FontAwesomeIcon icon={faBars} className="mt-1"/>   bars icon */}
          <button onClick={handleShow} className="navbar-toggler bg-light shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown #navbar2" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "><FontAwesomeIcon icon={faBars} className="mt-1" /></span>
          </button>


          <Offcanvas show={show} onHide={handleClose} className='w-50'>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Categories</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>


              <ul className="navbar-nav navbar-collapse d-flex flex-column justify-content-center gap-2  text-center w-100" >
                <li className="nav-item nav-items-2 border w-100 "><Link className='nav-link text-dark' to='development'>Development</Link></li>
                <li className="nav-item nav-items-2 border w-100"><Link className='nav-link text-dark' to='marketing'>Marketing</Link></li>
                <li className="nav-item nav-items-2 border w-100"><Link className='nav-link text-dark' to='itsoftware'>IT & Software</Link></li>
                <li className="nav-item nav-items-2 border w-100"><Link className='nav-link text-dark' to='design'>Design</Link></li>
                <li className="nav-item nav-items-2 border w-100"><Link className='nav-link text-dark' to='personal'>Personal Development</Link></li>
                <li className="nav-item nav-items-2 border w-100"><Link className='nav-link text-dark' to='business'>Business</Link></li>
                <li className="nav-item nav-items-2 border w-100"><Link className='nav-link text-dark' to='music'>Music</Link></li>
                <li className="nav-item nav-items-2 border w-100"><Link className='nav-link text-dark' to='health'>Health & Fitness</Link></li>
                <li className="nav-item nav-items-2 border w-100"><Link className='nav-link text-dark' to='addCourse'>Create Course</Link></li>
                <li className='d-flex gap-3 mt-5 mx-auto' >
                  <li>
                    <Link className='nav-link text-dark ' to='wishlist'><FontAwesomeIcon icon={faHeart} className='fa-lg' /></Link>
                  </li>
                  <li>
                    <Link className='nav-link text-dark ' to='cart'><FontAwesomeIcon icon={faCartArrowDown} className='fa-lg' /></Link>
                  </li>
                  <li className=''>
                    <Link className='nav-link text-dark ' to='notifications'><FontAwesomeIcon icon={faBell} className='fa-lg' /></Link>

                  </li>
                  <li className=''>
                    <Link className='nav-link text-dark ' to='login'><FontAwesomeIcon icon={faUser} className='fa-lg' /></Link>
                  </li>
                </li>
              </ul>
            </Offcanvas.Body>
          </Offcanvas>

          {/* Collapsible navbar */}
          <div className=" nav-item collapse navbar-collapse" id="navbarNavDropDown">

            <ul className="navbar-nav navbar-collapse justify-content-between p-0" >
              {isLoggedIn && 

                <li className="nav-item ">
                  {/* <Button className="btn border-0 bg-light text-dark shadow-none ms-3" >Categories</Button> */}
                  <Dropdown className=''>
                    <Dropdown.Toggle id="dropdown-basic" className='bg-light text-dark shadow-none border-0'>Categories</Dropdown.Toggle>

                    <Dropdown.Menu className='p-2 dropdown-menu shadow'>
                      <Dropdown.Item href="/development" className='p-2'>Development</Dropdown.Item>
                      <Dropdown.Item href="/business" className='p-2'>Business</Dropdown.Item>
                      <Dropdown.Item href="/music" className='p-2'>Music</Dropdown.Item>
                      <Dropdown.Item href="/itsoftware" className='p-2'>IT & Software</Dropdown.Item>
                      <Dropdown.Item href="/personal" className='p-2'>Personal Development</Dropdown.Item>
                      <Dropdown.Item href="/design" className='p-2'>Design</Dropdown.Item>
                      <Dropdown.Item href="/health" className='p-2'>Health & Fitness</Dropdown.Item>
                      <Dropdown.Item href="/marketing" className='p-2'>Marketing</Dropdown.Item>
                      <Dropdown.Item href="/addCourse" className='p-2'>Create Course</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              }
              {!isLoggedIn && 

                <li className="nav-item ">
                  {/* <Button className="btn border-0 bg-light text-dark shadow-none ms-3" >Categories</Button> */}
                  <Dropdown className=''>
                    <Dropdown.Toggle id="dropdown-basic" className='bg-light text-dark shadow-none border-0'>Categories</Dropdown.Toggle>

                    <Dropdown.Menu className='p-2 dropdown-menu shadow'>
                      <Dropdown.Item className='p-2'>Development</Dropdown.Item>
                      <Dropdown.Item className='p-2'>Business</Dropdown.Item>
                      <Dropdown.Item className='p-2'>Music</Dropdown.Item>
                      <Dropdown.Item className='p-2'>IT & Software</Dropdown.Item>
                      <Dropdown.Item className='p-2'>Personal Development</Dropdown.Item>
                      <Dropdown.Item className='p-2'>Design</Dropdown.Item>
                      <Dropdown.Item className='p-2'>Health & Fitness</Dropdown.Item>
                      <Dropdown.Item className='p-2'>Marketing</Dropdown.Item>
                      <Dropdown.Item className='p-2'>Create Course</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              }


              <li className="nav-item ">
                {/* search bar */}

                <Form >

                  {/* <span className=""><FontAwesomeIcon icon={faMagnifyingGlass}  /></span>  */}
                  <FormControl
                    type="search"
                    placeholder=" Search for anything"
                    className=" p-2 m-2 border-1 rounded-pill shadow-none border-dark "
                    aria-label="Search"
                    style={{ width: "40rem" }}
                  />

                </Form>

              </li>



              {isLoggedIn &&
                <>
                  <li>
                    <Link className='nav-link text-dark' to='wishlist'><FontAwesomeIcon icon={faHeart} className='fa-lg' /></Link>
                  </li>
                  <li>
                    <Link className='nav-link text-dark' to='cart'><FontAwesomeIcon icon={faCartArrowDown} className='fa-lg' /></Link>
                  </li>
                  <li className='me-3'>
                    <Link className='nav-link text-dark' to='notifications'><FontAwesomeIcon icon={faBell} className='fa-lg' /></Link>

                  </li>
                  <li className='me-5'>
                    <Link className='nav-link text-dark' to='profile'><FontAwesomeIcon icon={faUser} className='fa-lg' /></Link>
                  </li>
                  <li className='me-5'>
                    <Link className='nav-link text-dark' to='login' onClick={() => {
                      localStorage.removeItem("userId");
                      localStorage.removeItem("userType");
                      dispatch(authActions.logout());
                      navigate("/");
                    }}>LOGOUT</Link>
                  </li>

                </>}

              {!isLoggedIn && <li className='me-5 d-flex'>
                <Link className='nav-link text-dark' to='login'>LOGIN</Link>
                <Link className='nav-link text-dark' to='signup'>SIGNUP</Link>
              </li>}
            </ul>


          </div>

        </nav>
      </div>
      <hr className='m-0 p-0' />

      {
        isLoggedIn && userType=="learner" && 
        <nav className=" navbar navbar-expand-lg bg-light   m-0 p-0 justify-content-between gap-2 w-100">
          <div className=" nav-item collapse navbar-collapse" id="navbarNavDropDown">

            <ul className="navbar-nav navbar-collapse d-flex justify-content-center gap-5  ms-4 me-4 " >
              <li className="nav-item nav-items-2"><Link className='nav-link text-dark' to='development'>Development</Link></li>
              <li className="nav-item nav-items-2"><Link className='nav-link text-dark' to='marketing'>Marketing</Link></li>
              <li className="nav-item nav-items-2"><Link className='nav-link text-dark' to='itsoftware'>IT & Software</Link></li>
              <li className="nav-item nav-items-2"><Link className='nav-link text-dark' to='design'>Design</Link></li>
              <li className="nav-item nav-items-2"><Link className='nav-link text-dark' to='personal'>Personal Development</Link></li>
              <li className="nav-item nav-items-2"><Link className='nav-link text-dark' to='business'>Business</Link></li>
              <li className="nav-item nav-items-2"><Link className='nav-link text-dark' to='music'>Music</Link></li>
              <li className="nav-item nav-items-2"><Link className='nav-link text-dark' to='health'>Health & Fitness</Link></li>
              <li className="nav-item nav-items-2"><Link className='nav-link text-dark' to='myCourse'>My Courses</Link></li>
            </ul>
          </div>
        </nav>
      }
      {
        isLoggedIn && userType=="instructor" && 
        <nav className=" navbar navbar-expand-lg bg-light   m-0 p-0 justify-content-between gap-2 w-100">
          <div className=" nav-item collapse navbar-collapse" id="navbarNavDropDown">

            <ul className="navbar-nav navbar-collapse d-flex justify-content-center gap-5  ms-4 me-4 " >
              
              <li className="nav-item nav-items-2"><Link className='nav-link text-dark' to='addCourse'>Create Courses</Link></li>
            </ul>
          </div>
        </nav>
      }

      <hr className='m-0 p-0' />

    </div>
  );
}

export default Header