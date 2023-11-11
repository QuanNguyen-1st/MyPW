const express = require('express');
const router = express.Router();

const adminUserInfoController = require('../app/controllers/AdminUserInfoController');

router.get('/', adminUserInfoController.index);

module.exports = router;