import Course from "../model/courseSchema.js";
import Instructor from "../model/instructorSchema.js";
import Learner from "../model/learnerSchema.js";
import mongoose from "mongoose";

export const getAllCourse = async(req,res,next)=>
{
    let existingCourse;
    try {
        existingCourse = await Course.find();
    } catch (error) {
        console.log(error)
    }
    if(!existingCourse)
    {
        return res.status(404).json({message:"Couldn't Fetch Course"});
    }
    return res.status(200).json({existingCourse});
}
// export const getCourseByTopic = async(req,res,next)=>
// {
//     const {topic} = req.body;

//     let course;

//     try {
//         course = await Course.find({topic});
//     } catch (error) {
//         return console.log(error);
//     }
//     if(!course)
//     {
//         return res.status(404),json({message:"NO COURSE FOUND!"});
//     }
//     return res.status(200).json({course});
// }
export const getCourseByTopic = async(req,res,next)=>
{
    const id = req.params.id;

    let course;

    try {
        console.log(id)
        course = await Course.find({topic:id});
    } catch (error) {
        return console.log(error);
    }
    if(!course)
    {
        return res.status(404),json({message:"NO COURSE FOUND!"});
    }
    return res.status(200).json({course});
}

export const getCourseById = async(req,res,next)=>
{
    const {id} = req.body;

    let course;

    try {
        course = await Course.findById(id);
    } catch (error) {
        return console.log(error);
    }
    if(!course)
    {
        return res.status(404),json({message:"NO COURSE FOUND!"});
    }
    return res.status(200).json({course});
}
export const addCourse= async (req, res,next) => {

    const {title,topic, description,startDate,startTime,price,creator,imageurl} = req.body;

    const course= new Course({
        title,
        topic,
        description,
        startDate,startTime,price,creator,learners:[],imageurl
    });
    let existingUser;

    try {
        existingUser = await Instructor.findById(creator);
    } catch (error) {
        return console.log(error);
    }
    if(!existingUser)
    {
        return res.status(400).json({message :"Unable to Find User By this Id"});
    }

    try {
        const session = await mongoose.startSession();
        session.startTransaction();
        await course.save({session});
        existingUser.createdCourses.push(course._id);
        await existingUser.save({session});
        await session.commitTransaction();
    } catch (error) {
        return res.status(500).json({message:error});
    }
    
    res.status(201).json({msg: 'Your Course is Created', payload: {course}})
}

export const joinCourse =  async(req,res,next)=>
{
    const {userId,courseId} = req.body;
    

    let existingCourse ,existingUser,enrolledUser;
    try {
        existingCourse = await Course.findById(courseId);
        existingUser = await Learner.findById(userId);
        enrolledUser =  existingCourse.learners.includes(userId);
        
      
    } catch (error) {
        return console.log(error);
    }

     if(existingCourse.creator == userId)
    {
        return res.status(400).json({message:"CREATOR CANNONT ENROLL AGAIN!"})
    }
    else if(enrolledUser)
    {
        return res.status(400).json({message:"ALREADY ENROLLED TO THE COURSE!"})
    }
  
    try
    {
        const session = await mongoose.startSession();
        session.startTransaction();
        existingCourse.learners.push(userId);
        await existingCourse.save({session});
        existingUser.enrolledCourses.push(courseId);
        await existingUser.save({session});
        await session.commitTransaction();
    }
    catch(err)
    {
        return res.status(500).json({message:err});
    }
    return res.status(200).json({message:"SUCCESFULLY ENROLLED INTO THE COURSE!"});
}