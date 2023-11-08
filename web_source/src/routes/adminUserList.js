const express = require('express');
const router = express.Router();

const adminUserListController = require('../app/controllers/AdminUserListController');

router.get('/', adminUserListController.index);

module.exports = router;