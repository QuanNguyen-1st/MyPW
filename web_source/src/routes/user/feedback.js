const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../../middlewares/session');

const feedbackController = require('../../app/controllers/user/FeedbackController');

router.get('/', isAuthenticated, feedbackController.index);

module.exports = router;