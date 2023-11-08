const express = require('express');
const router = express.Router();

const userinfoController = require('../app/controllers/UserInfoController');

router.get('/', userinfoController.index);

module.exports = router;