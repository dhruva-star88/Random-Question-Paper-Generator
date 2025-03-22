const express = require('express');
const { createQuestion, getQuestions } = require('../Controllers/questionsController');

const router = express.Router();

router.post('/questions', createQuestion);
router.get('/questions', getQuestions);

module.exports = router;
