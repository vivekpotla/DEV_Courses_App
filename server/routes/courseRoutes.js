import express from "express";
import {getAllCourse,getCourseByTopic,getCourseById,addCourse,joinCourse} from "../Controllers/courseControllers.js";

const courseRoute = express.Router();

courseRoute.get("/",getAllCourse);
courseRoute.get("/bytopic/:id",getCourseByTopic);
courseRoute.get("/byid",getCourseById);
courseRoute.post("/addcourse",addCourse);
courseRoute.post("/joincourse",joinCourse);

export default courseRoute;