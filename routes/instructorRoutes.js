import express from "express";
import { getAllInstructor,getInstructorById,signup,login } from "../Controllers/instructorController.js";

const instRouter = express.Router();

instRouter.get("/",getAllInstructor);
instRouter.get("/byid/:id",getInstructorById);
instRouter.post("/signup",signup);
instRouter.post("/login",login);

export default instRouter