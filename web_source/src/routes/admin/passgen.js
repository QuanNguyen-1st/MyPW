const express = require('express');
const router = express.Router();

const adminPassgenController = require('../../app/controllers/admin/PassgenController');

router.get('/', adminPassgenController.index);

module.exports = router;