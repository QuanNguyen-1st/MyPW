const express = require('express');
const router = express.Router();

const adminFeedbackController = require('../app/controllers/AdminFeedbackController');

router.get('/', adminFeedbackController.index);

module.exports = router;