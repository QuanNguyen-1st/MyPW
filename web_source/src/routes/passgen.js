const express = require('express');
const router = express.Router();

const passgenController = require('../app/controllers/PassgenController');

router.get('/', passgenController.index);

module.exports = router;