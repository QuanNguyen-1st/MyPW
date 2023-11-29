const express = require('express');
const router = express.Router();

const feedbackController = require('../../app/controllers/user/FeedbackController');

router.get('/', feedbackController.index);

module.exports = router;