const express = require('express');
const router = express.Router();

const adminPassmanController = require('../../app/controllers/admin/PassmanController');

router.get('/', adminPassmanController.index);

module.exports = router;