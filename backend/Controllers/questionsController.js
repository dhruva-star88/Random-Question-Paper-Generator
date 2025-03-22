const Question = require('../Models/QuestionsModel');

// Create a new question
const createQuestion = async (req, res) => {
    try {
        const { unit_id, question_text, difficulty, marks, question_type, bloom_level } = req.body;
        const newQuestion = new Question({ unit_id, question_text, difficulty, marks, question_type, bloom_level });
        await newQuestion.save();
        res.status(201).json({ message: "Question created successfully", newQuestion });
    } catch (error) {
        console.error("Error in createQuestion:", error);
        res.status(400).json({ message: "Internal Server Error" });
    }
};

// Get all questions
const getQuestions = async (req, res) => {
    try {
        const questions = await Question.find();
        res.status(200).json(questions);
    } catch (error) {
        console.error("Error in getQuestions:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = { createQuestion, getQuestions };
