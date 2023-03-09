import React from 'react'
import '../SignUpComponent/SignUp.css';
import { useForm } from 'react-hook-form'
import {  useNavigate } from 'react-router-dom'
import useButtonLoader from '../useButtonLoader';
import axios from "axios";

const CreateCourse = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [signupButton, isLoading] = useButtonLoader("Add Course", "Processing...");
    const userId = localStorage.getItem("userId");
    const onFormSubmit = (userCredObj) => {
        const sendRequest = async () => {
            isLoading(true);
            const res = await axios.post("http://localhost:5003/api/course/addcourse",
              {
                title : userCredObj.title,
                topic : userCredObj.topic,
                description : userCredObj.description,
                startDate : userCredObj.startDate,
                startTime : userCredObj.startTime,
                price: userCredObj.price,
                imageurl : userCredObj.imageurl,
                creator : userId
              
              }).catch(err => {
                console.log(err)
                isLoading(false);
              });
      
            const data = await res.data;
            console.log(data);
            return data;
      
          }
          sendRequest()
            .then((data)=>console.log(data))
            .then(isLoading(false))
            .then(navigate("/"))
    }
    return (
        <div>
            <section className=" py-4">
                <div className="container h-100" >
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black">
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Add Course</p>

                                            <form onSubmit={handleSubmit(onFormSubmit)} className="mx-1 mx-md-4">
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <img src="https://img.icons8.com/external-sbts2018-solid-sbts2018/58/000000/external-course-basic-ui-elements-2.3-sbts2018-solid-sbts2018.png" height='20px' width='20px' />
                                                    <div className="form-outline flex-fill mb-0 ms-3">
                                                        <input type="text" id="title" className="form-control" placeholder='Title' {...register("title", { required: true })} />
                                                        {errors.title?.type === 'required' && <p className='text-danger'>*Title is Required</p>}
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <img src="https://img.icons8.com/material-rounded/24/000000/topic.png" height='20px' width='20px' />
                                                    <select class="form-select form-outline flex-fill mb-0 ms-3" aria-label="Default select example" {...register("topic",{required:true})}>
                                                        <option selected>Development</option>
                                                        <option value="Business">Business</option>
                                                        <option value='Music'>Music</option>
                                                        <option value='IT & Software'>IT & Software</option>
                                                        <option value='Personal Development'>Personal Development</option>
                                                        <option value='Design'>Design</option>
                                                        <option value='Health & Fitness'>Health & Fitness</option>
                                                        <option value='Marketing'>Marketing</option>
                                                    </select>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <img src="https://img.icons8.com/ios-glyphs/30/000000/document--v1.png" height='20px' width='20px' />
                                                    <div className="form-outline flex-fill mb-0 ms-3">
                                                        <input type="textarea" id="description" className="form-control" placeholder='description' {...register("description")} />
                                                    </div>
                                                </div>
                                                <div className='d-flex flex-row align-items-center mb-4 gap-3'>
                                                    <img src="https://img.icons8.com/external-regular-kawalan-studio/24/000000/external-calendar-date-time-regular-kawalan-studio-7.png" height='20px' width='20px' />
                                                    <div className="mb-3">
                                                        <label htmlFor="startDate" className='mt-1 mb-1 d-block m-auto' placeholder="dd-mm-yyyy">START-DATE</label>
                                                        <input type="date" style={{ borderRadius: '15px' }} id="startDate" className="form-control " {...register("startDate", { required: true })} />
                                                        {/* validation error msg for startDate */}
                                                        {errors.startDate?.type === 'required' && <p className='text-danger'>*startDate is required</p>}
                                                    </div>
                                                    {/* startTime */}
                                                    <div className="mb-3">
                                                        <label htmlFor="startTime" className='mt-1 mb-1 d-block m-auto' >START-TIME</label>
                                                        <input type="time" style={{ borderRadius: '15px' }} id="startTime" className="form-control " {...register("startTime", { required: true })} />
                                                        {/* validation error msg for startTime */}
                                                        {errors.startTime?.type === 'required' && <p className='text-danger'>*startTime is required</p>}
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <img src="https://img.icons8.com/ios-glyphs/30/000000/pictures-folder.png" height='20px' width='20px' />
                                                    <div className="form-outline flex-fill mb-0 ms-3">
                                                        <input type="text" id="imageurl" className="form-control" placeholder='Imageurl' {...register("imageurl")} />
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <img src="https://img.icons8.com/ios-glyphs/30/000000/rupee.png" height='20px' width='20px' />
                                                    <div className="form-outline flex-fill mb-0 ms-3">
                                                        <input type="number" id="price" className="form-control" placeholder='Price' {...register("price", { required: true })} />
                                                        {errors.price?.type === 'required' && <p className='text-danger'>*Price Required</p>}
                                                    </div>
                                                </div>

                                                <div className="form-check d-flex justify-content-center mb-5">
                                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" {...register("check")} />
                                                    <label className="form-check-label" for="form2Example3">
                                                        I agree all statements in <a href="#!">Terms of service</a>
                                                    </label>
                                                </div>

                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button ref={signupButton} type="submit" className="btn btn-primary btn-lg">Add Course</button>
                                                </div>

                                            </form>

                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />

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

export default CreateCourse
