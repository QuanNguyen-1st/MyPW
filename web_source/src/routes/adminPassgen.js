const express = require('express');
const router = express.Router();

const adminPassgenController = require('../app/controllers/AdminPassgenController');

router.get('/', adminPassgenController.index);

module.exports = router;