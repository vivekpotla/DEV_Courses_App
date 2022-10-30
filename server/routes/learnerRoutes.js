import express from 'express';
import { getLearners,getLearnerById, login, signUpLearner } from '../controllers/learnerControllers.js';

const router= express.Router();

// to get all learners.
router.get('/', getLearners);

//get Learner By id
router.get('/byid/:id', getLearnerById);

// for a learner sign-in.
router.post('/login', login);

// for a learner sign-up.
router.post('/signup', signUpLearner);

export default router;