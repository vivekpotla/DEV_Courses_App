import mongoose from "mongoose";

const Schema  = mongoose.Schema;

const instructorSchema = new Schema({
    name : {
        type : String,
        required : true,
    },
    email:{
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
        minLength : 6,
    },
    mobileno : {
        type :  String,
        required :  true,
        length : 10,
    },
   
    createdCourses:[{type: mongoose.Types.ObjectId, ref:"Course",required:true}],

    
});

export default mongoose.model("Instructor",instructorSchema);