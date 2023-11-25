const express = require('express');
const router = express.Router();

const passgenController = require('../app/controllers/PassgenController');

router.get('/', passgenController.index);
router.post('/generate', passgenController.generate);
module.exports = router;