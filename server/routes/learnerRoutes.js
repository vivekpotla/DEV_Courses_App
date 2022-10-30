import express from 'express';
import { getLearners, login, signUpLearner } from '../controllers/learnerControllers.js';

const router= express.Router();

// to get all learners.
router.get('/', getLearners);

// for a learner sign-in.
router.post('/login', login);

// for a learner sign-up.
router.post('/signup', signUpLearner);

export default router;