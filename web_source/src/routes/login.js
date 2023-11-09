const express = require('express');
const router = express.Router();

const loginController = require('../app/controllers/LoginController');
const user2faController = require('../app/controllers/User2FAController');

router.get('/', loginController.index);
router.get('/2fa', user2faController.index);

module.exports = router;