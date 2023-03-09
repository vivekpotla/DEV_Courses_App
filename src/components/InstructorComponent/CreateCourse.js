import React from 'react'
import {useForm} from 'react-hook-form'
import DatePicker from 'react-date-picker';
function CreateCourse() {

    let {register, handleSubmit, formState:{errors}} =useForm()
    
    const onFormSubmit = (userObj)=>{
        console.log(userObj)
    }
  return (
    <div>
        <section className="vh-100">
  <div className="container h-100" >
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black">
          <div className="card-body p-md-5">
          
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Create Course</p>

                <form onSubmit={handleSubmit(onFormSubmit)} className="">

                  <div className="d-flex flex-row align-items-center mb-4 ms-3">
                   <label>Course Name : 
                      <input type="text" id="name" className="form-control w-100" placeholder='Course Name' {...register("coursename")}/>
                      </label>
                      
                   </div>



                  <div className="d-flex flex-row align-items-center mb-4 ms-3">
                  
                  <label>
                      Course Domain : 
                  <select className='ms-5'>
                    <option value="Development">Development</option>
                    <option value="Health">Health</option>
                    <option value="Music">Music</option>
                    <option value="mango">Mango</option>
                  </select>
                  </label>
                  </div>




                  <div className="d-flex flex-row align-items-center mb-4">
                 
                    <div className="form-outline flex-fill mb-0 ms-3">
                    <label>Enter course description : </label>
                        <textarea type="textarea"  name="textValue" />
                     </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4 ms-3">
                   <label>Start Date : 
                   <DatePicker  /> </label>
                      
                   </div>

                  

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg">Register</button>
                  </div>

                </form>

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

export default CreateCourse