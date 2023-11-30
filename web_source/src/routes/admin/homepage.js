const express = require('express');
const router = express.Router();

const adminHomepageController = require('../../app/controllers/admin/HomepageController');

router.get('/', adminHomepageController.homepage);
router.get('/homepage', adminHomepageController.index);

module.exports = router;