import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
// import cors from 'cors';


const app= express();
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));

const CONN_URL='mongodb+srv://cbit-hacktober-learners-hub:zC03IWcExaoMyURj@learners-hub-db.i7yhjli.mongodb.net/?retryWrites=true&w=majority';
const PORT= 5003;

// .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
mongoose.connect(CONN_URL)
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

app.listen(PORT, () => console.log('Server running ...'));