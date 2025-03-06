const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    course_name:{
        type: String,
        required: true,
        trim: true // Remove whitespace from both sides of a string
    },
    course_code:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
});

const CourseModel = mongoose.model("course", courseSchema);

module.exports = CourseModel;


