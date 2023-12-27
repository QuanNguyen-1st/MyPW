const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../../middlewares/session');

const passmanController = require('../../app/controllers/user/PassmanController');

router.get('/', isAuthenticated, passmanController.index);
router.post('/', isAuthenticated, passmanController.postPassword);
router.delete('/:id', isAuthenticated, passmanController.deletePassword);

module.exports = router;