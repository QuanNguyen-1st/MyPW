const express = require('express');
const router = express.Router();

const adminUserListController = require('../../app/controllers/admin/UserListController');

router.get('/', adminUserListController.index);
router.get('/check-user-list', adminUserListController.OpenCheckUserListForm);
router.get('/check-user-info', adminUserListController.OpenCheckUserInfoForm);
router.get('/check-frequence', adminUserListController.OpenCheckFrequenceForm);

module.exports = router;