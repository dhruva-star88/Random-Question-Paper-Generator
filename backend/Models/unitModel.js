const mongoose = require('mongoose');

const unitSchema = new mongoose.Schema({
    course_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'course',
        required: true
    },
    unit_name: {
        type: String,
        required: true,
        trim: true
    }
});

const UnitModel = mongoose.model("unit", unitSchema);

module.exports = UnitModel;
