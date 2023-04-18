const express = require('express');

const router = express.Router();


const { generateTimeTable } = require('../controllers/generate');

router.route('/').post(generateTimeTable);


module.exports = router;