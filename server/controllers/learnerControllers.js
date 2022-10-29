import expressAsyncHandler from 'express-async-handler';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Learner from '../model/learnerSchema.js';

// to get all the learners.
export const getLearners= expressAsyncHandler(async (req, res) => {

    let learners= await Learner.find();
    res.status(200).json({msg: 'Learners fetched', payload: {learners}});
})

// for a learner sign-in.
export const signInLearner= expressAsyncHandler(async (req, res) => {

    let LearnerCredObj= req.body;

    // check if a Learner exists with the given Learner email.
    let existingLearnerObj= await Learner.findOne({
        email: LearnerCredObj.email
    });

    if (!existingLearnerObj) {
        return res.status(400).json({msg: 'Incorrect Learnername / Password enterred. Retry !'});
    }

    // Compare passwords.
    let isPswdCrct= await bcryptjs.compare(LearnerCredObj.password, existingLearnerObj.password);

    if (!isPswdCrct) {
        return res.status(400).json({msg: 'Incorrect Email / Password enterred. Retry !'});
    }
    
    // creating a jwt token for sign-in session.
    let token= jwt.sign({name: LearnerCredObj.name}, 'cbit-hacktober-2022', {expiresIn: 600});

    // Sending token to the client.
    res.status(200).json({msg: 'Login Success', payload: token, LearnerInDB: existingLearnerObj});
})


// for a learner sign-up.
export const signUpLearner= expressAsyncHandler(async (req, res) => {

    let newLearnerObj= req.body;

    // check if a Learner already exists.
    let existingLearnerObj= await Learner.findOne({ 
            email: newLearnerObj.email
    });

    // if a Learner with such credentials already exists.
    if (existingLearnerObj) {
        return res.status(400).json({msg: 'Learner may already exist! Better logging in'});
    }

    // we can hash the password as the Learner already doesn't exist.
    let hashedPswd= await bcryptjs.hash(newLearnerObj.password, 6);
    newLearnerObj.password= hashedPswd;

    // create the given Learner as a doc of our Learner schema type.
    const learner= new Learner(newLearnerObj);
    
    // to save the doc inside the DB.
    await learner.save();

    res.status(201).json({msg: 'New Learner Created', payload: {learner}});
})
