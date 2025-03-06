const express = require('express');
const {createCourse, getCourses} = require('../Controllers/courseController');

const router = express.Router();

router.post('/courses', createCourse);
router.get('/courses', getCourses);

module.exports = router;