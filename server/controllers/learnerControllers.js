import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Learner from '../model/learnerSchema.js';


// to get all the learners.
export const getLearners= expressAsyncHandler(async (req, res) => {

    let learners= await Learner.find();
    res.status(200).json({msg: 'Learners fetched', payload: {learners}});
})

export const getLearnerById = async(req,res,next)=>
{
    const id = req.params.id;

    let learner;

    try {
        learner = await Learner.findById(id);
    } catch (error) {
        return console.log(error);
    }
    if(!learner)
    {
        return res.status(404).json({message:"NO learner FOUND!"});
    }
    return res.status(200).json({user:learner});
}

export const login = async(req,res,next)=>
{
    const{email,password} = req.body;

    let existingInst;

    try {
        existingInst =await Learner.findOne({email});
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

// for a learner sign-up.
export const signUpLearner= expressAsyncHandler(async (req, res) => {

    let {name,email,password,mobileno}= req.body;

    // check if a Learner already exists.
    let existingLearnerObj= await Learner.findOne({ 
            email
    });

    // if a Learner with such credentials already exists.
    if (existingLearnerObj) {
        return res.status(400).json({msg: 'Learner may already exist! Better logging in'});
    }

    // we can hash the password as the Learner already doesn't exist.
    let hashedPswd= await bcrypt.hash(password, 6);

    // create the given Learner as a doc of our Learner schema type.
    const learner= new Learner({
        name,
        email,
        password : hashedPswd,
        mobileno,
        enrolledCourses : []
    });
    
    // to save the doc inside the DB.
    await learner.save();

    res.status(201).json({user:learner});
})
