import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import instructorRouter from "./routes/instructorRoutes.js";
// import cors from 'cors';

dotenv.config();
const app= express();
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use("/api/instructor",instructorRouter);

const PORT  = process.env.PORT;
// .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
mongoose.connect(process.env.CONN_URL)
    .then(() => console.log('connected to DB'))
    .catch((err) => console.log('err.msg'));

// Invalid-Path handler Middleware
// app.use((req, res, next) => {
//     res.send({message: `path ${req.url} is INVALID`});
// })

// // Error-Handling Middleware
// app.use((err, req, res, next) => {
//     res.send({message: 'Error Occurred', reason: `${err.message}`});
// })

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));