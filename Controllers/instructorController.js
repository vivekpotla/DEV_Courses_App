import Instructor from "../model/instructorSchema.js";
import bcrypt from 'bcryptjs';

export const getAllInstructor =  async(req,res,next)=>
{
    let instructors;

    try {
        instructors = await Instructor.find();
    } catch (error) {
        console.log(error)
    }
    if(!instructors)
    {
        return res.status(404).json({message:"No Users Found"});

    }
    return res.status(200).json({instructors});
}

export const getInstructorById = async(req,res,next)=>
{
    const id = req.params.id;

    let instructor;

    try {
        instructor = await Instructor.findById(id);
    } catch (error) {
        return console.log(error);
    }
    if(!instructor)
    {
        return res.status(404).json({message:"NO instructor FOUND!"});
    }
    return res.status(200).json({user:instructor});
}

export const signup = async(req,res,next)=>
{
    const {name,email,password,mobileno} = req.body;
    let existingInst;

    try
    {
        existingInst = await Instructor.findOne({email});
    }
    catch(err)
    {
        console.log(err);
    }
    if(existingInst)
    {
        res.status(400).json({message : "User Already Exists!"});
    }
    const hashedPassword = bcrypt.hashSync(password);
    const Inst = new Instructor({
        name,
        email,
        password:hashedPassword,
        mobileno,
        createdCourses:[],
    });
    try
    {
        await Inst.save();
    } 
    catch(err)
    {
        return res.status(404).json({message:"User Creation Failed!"});
    }
    return res.status(201).json({user:Inst});
}

export const login = async(req,res,next)=>
{
    const{email,password} = req.body;

    let existingInst;

    try {
        existingInst =await Instructor.findOne({email});
    } catch (error) {
        return console.log(error);
    }
    if(!existingInst)
    {
        return res.status(404).json({message:"user Not Found!"});
    }
    const isPasswordCorrect = bcrypt.compareSync(password,existingInst.password);

    if(!isPasswordCorrect)
    {
        return res.status(404).json({message:"Incorrect Password!"});

    }
    return res.status(200).json({message:"Login Successfull",user:existingInst});

}