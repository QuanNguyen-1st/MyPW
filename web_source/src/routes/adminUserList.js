const express = require('express');
const router = express.Router();

const adminUserListController = require('../app/controllers/AdminUserListController');

router.get('/', adminUserListController.index);
router.get('/check-user-list', adminUserListController.OpenCheckUserListForm);

module.exports = router;