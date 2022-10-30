import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import instructorRouter from "./routes/instructorRoutes.js";
import cors from 'cors';
import learnerRouter from './routes/learnerRoutes.js';
import courseRouter from "./routes/courseRoutes.js";

dotenv.config();
const app= express();
app.use(cors());
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));

// http://localhost:5003/api/instructor/
app.use("/api/instructor",instructorRouter);

// http://localhost:5003/api/learner/
app.use('/api/learner', learnerRouter);

// http://localhost:5003/api/course/
app.use('/api/course', courseRouter);

const PORT  = process.env.PORT;
// .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
mongoose.connect(process.env.CONN_URL)
    .then(() => console.log('connected to DB'))
    .catch((err) => console.log('err.msg'));

// Invalid-Path handler Middleware
app.use((req, res, next) => {
    res.send({message: `path ${req.url} is INVALID`});
})

// Error-Handling Middleware
app.use((err, req, res, next) => {
    res.send({message: 'Error Occurred', reason: `${err.message}`});
})

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));