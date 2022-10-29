import express from "express";
import {getAllCourse,getCourseByTopic,addCourse,joinCourse} from "../Controllers/courseControllers.js";

const courseRoute = express.Router();

courseRoute.get("/",getAllCourse);
courseRoute.get("/bytopic",getCourseByTopic);
courseRoute.post("/addcourse",addCourse);
courseRoute.post("/joincourse",joinCourse);

export default courseRoute;