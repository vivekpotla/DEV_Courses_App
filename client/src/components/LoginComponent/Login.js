import React, { useState } from 'react'
import './Login.css'
import {FaUserAlt} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {RiLockPasswordFill} from 'react-icons/ri'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux';
import axios from "axios";
import useButtonLoader from '../useButtonLoader'
import {authActions} from "../../store";


function Login() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [check, setCheck] = useState(false);
  const [userType, setUserType] = useState('instructor');
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loginButton,isLoading] = useButtonLoader("Login","Logging In...");
  const onFormSubmit = (userCredObj) => {
    const sendRequest = async () => {
      isLoading(true);
      const res = await axios.post(`http://localhost:5003/api/${userType}/login`,
        {
          email: userCredObj.email,
          password: userCredObj.password
        }).catch(err => {
          setCheck(true);
          isLoading(false);
        });

      const data = await res.data;
      console.log(data);
      return data;

    }
    sendRequest()
      .then((data) => {
       
          localStorage.setItem("userId", data.user._id);
          localStorage.setItem("userType",userType);
          setCheck(false);
          dispatch(authActions.login());
          isLoading(false);
          navigate("/");
          
      
      })



  }
  return (
    <div>
        <section className="vh-100">
  <div className="container h-100" >
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black">
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                <form onSubmit={handleSubmit(onFormSubmit)} className="mx-1 mx-md-4">

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MdEmail/>
                    <div className="form-outline flex-fill mb-0 ms-3">
                      <input type="email" id="email" className="form-control" placeholder='Email' {...register("email")}/>
                      
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <RiLockPasswordFill/>
                    <div className="form-outline flex-fill mb-0 ms-3">
                      <input type="password" id="password" className="form-control" placeholder='Password' {...register("password")}/>
                    </div>
                  </div>
                  <div className='d-flex justify-content-end gap-2 m-2'>
                          <div  className={userType =="instructor"? 'type-btn type-btn-color' : 'type-btn'} onClick={() => { setUserType("instructor") }}>Instructor</div>
                          <div className={userType =="instructor" ? 'type-btn' : 'type-btn type-btn-color'} onClick={() => { setUserType("learner") }}>Learner</div>
                        </div>


                  <div class="form-check d-flex justify-content-end mb-5">
                    <label class="form-check-label" for="form2Example3">
                      <a href="#!">Forgot Password?</a>
                    </label>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" ref={loginButton} className="btn btn-primary btn-lg">Login</button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Login