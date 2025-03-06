const Course = require('../Models/CourseModel');

// Create a new course
const createCourse = async(req, res) => {
    try {
        const { course_name, course_code } = req.body;
        const newCourse = new Course({ course_name, course_code });
        await newCourse.save();
        res.status(201).json({ message: "Course created successfully", newCourse });
    } catch (error) {
        console.error("Error in createCourse:", error);
        res.status(400).json({message: "Internal Server Error"});
    }
};

// Get all courses
const getCourses = async(req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (error) {
        console.error("Error in getCourses:", error);
        res.status(500).json({message: "Internal Server Error"});
    }
};

module.exports = { createCourse, getCourses };