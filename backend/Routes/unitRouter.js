const express = require('express');
const { createUnit, getUnits } = require('../Controllers/unitController');

const router = express.Router();

router.post('/units', createUnit);
router.get('/units', getUnits);

module.exports = router;
