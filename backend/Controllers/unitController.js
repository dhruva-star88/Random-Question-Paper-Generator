const Unit = require('../Models/unitModel');

// Create a new unit
const createUnit = async (req, res) => {
    try {
        const { course_id, unit_name } = req.body;
        const newUnit = new Unit({ course_id, unit_name });
        await newUnit.save();
        res.status(201).json({ message: "Unit created successfully", newUnit });
    } catch (error) {
        console.error("Error in createUnit:", error);
        res.status(400).json({ message: "Internal Server Error" });
    }
};

// Get all units
const getUnits = async (req, res) => {
    try {
        const units = await Unit.find();
        res.status(200).json(units);
    } catch (error) {
        console.error("Error in getUnits:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = { createUnit, getUnits };
