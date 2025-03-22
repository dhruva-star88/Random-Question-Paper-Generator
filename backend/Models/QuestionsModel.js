const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    unit_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'unit',
        required: true
    },
    question_text: {
        type: String,
        required: true,
        trim: true
    },
    difficulty: {
        type: String,
        enum: ['easy', 'medium', 'hard'],
        required: true
    },
    marks: {
        type: Number,
        required: true
    },
    question_type: {
        type: String,
        enum: ['Theory Based', 'Application Based'],
        required: true
    },
    bloom_level: {
        type: String,
        enum: ['Remember', 'Understand', 'Apply', 'Analyze', 'Evaluate', 'Create'],
        required: true
    }
});

const QuestionModel = mongoose.model("question", questionSchema);

module.exports = QuestionModel;
