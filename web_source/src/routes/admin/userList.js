const express = require('express');
const router = express.Router();

const adminUserListController = require('../../app/controllers/admin/UserListController');

router.get('/', adminUserListController.index);
router.get('/check-user-list', adminUserListController.openCheckUserListForm);
router.get('/check-user-info', adminUserListController.openCheckUserInfoForm);
router.get('/check-frequence', adminUserListController.openCheckFrequenceForm);

module.exports = router;