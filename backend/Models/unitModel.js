const mongoose = require('mongoose');

const unitSchema = new mongoose.Schema({
    unit_name:{
        type: String,
        required: true,
        trim: true
    }
})

const UnitModel = mongoose.model("unit", unitSchema);

module.exports = UnitModel;