const express = require('express');
const router = express.Router();

const passmanController = require('../app/controllers/PassmanController');

router.get('/', passmanController.index);

module.exports = router;