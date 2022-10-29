import express from "express";
import { getAllInstructor,signup,login } from "../Controllers/instructorController.js";

const instRouter = express.Router();

instRouter.get("/",getAllInstructor);
instRouter.post("/signup",signup);
instRouter.post("/login",login);

export default instRouter