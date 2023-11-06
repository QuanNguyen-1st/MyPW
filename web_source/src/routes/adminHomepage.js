const express = require('express');
const router = express.Router();

const adminHomepageController = require('../app/controllers/AdminHomepageController');

router.get('/', adminHomepageController.index);

module.exports = router;