const express = require('express');
const router = express.Router();

const adminUserInfoController = require('../../app/controllers/admin/UserInfoController');

router.get('/', adminUserInfoController.index);

module.exports = router;