const express = require('express');
const router = express.Router();

const adminUserListController = require('../app/controllers/AdminUserListController');

router.get('/', adminUserListController.index);
router.get('/check-user-list', adminUserListController.OpenCheckUserListForm);
router.get('/check-user-info', adminUserListController.OpenCheckUserInfoForm);

module.exports = router;