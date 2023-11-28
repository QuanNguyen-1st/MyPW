const express = require('express');
const router = express.Router();

const homepageController = require('../../app/controllers/user/HomepageController');

router.get('/', homepageController.login);
router.get('/homepage', homepageController.index);

module.exports = router;