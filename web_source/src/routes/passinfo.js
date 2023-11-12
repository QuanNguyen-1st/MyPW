const express = require('express');
const router = express.Router();

const passInfoController = require('../app/controllers/PassInfoController');

router.get('/', passInfoController.index);

module.exports = router;