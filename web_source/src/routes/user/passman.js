const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../../middlewares/session');

const passmanController = require('../../app/controllers/user/PassmanController');

router.get('/', isAuthenticated, passmanController.index);

module.exports = router;