const express = require('express');
const router = express.Router();

const passmanController = require('../../app/controllers/user/PassmanController');

router.get('/', passmanController.index);

module.exports = router;