import mongoose from "mongoose";

const Schema = mongoose.Schema;

const courseSchema = new Schema({

    title:
    {
        type: String,
        required: true,
    },
    topic:
    {
        type: String,
        required: true,
    },
    description:
    {
        type: String,
        required: true,
    },
    startDate:
    {
        type: String,
        required: true,
    }
    ,
    startTime:
    {
        type: String,
        required: true,
    }
    ,
    endDate:
    {
        type: String,
    },
    endTime:
    {
        type: String,
    }
    ,
    rating:
    {
        type: Number,
    },
    price:
    {
        type: Number,
        required: true,
    },
    imageurl:
    {
        type : String,
        required : true,
    },
    creator:
    {
        type: mongoose.Types.ObjectId,
        ref: "Instructor",
        required: true,
    },
    learners: [{ type: mongoose.Types.ObjectId, ref: "Learner", required: true }]

})

export default mongoose.model("Course", courseSchema);