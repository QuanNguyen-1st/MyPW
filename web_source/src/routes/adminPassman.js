const express = require('express');
const router = express.Router();

const adminPassmanController = require('../app/controllers/AdminPassmanController');

router.get('/', adminPassmanController.index);

module.exports = router;