const express = require('express');
const router = express.Router();

const homepageController = require('../app/controllers/HomepageController');

router.get('/', homepageController.index);

module.exports = router;