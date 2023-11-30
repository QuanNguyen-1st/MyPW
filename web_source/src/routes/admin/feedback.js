const express = require('express');
const router = express.Router();

const adminFeedbackController = require('../../app/controllers/admin/FeedbackController');

router.get('/', adminFeedbackController.index);

module.exports = router;