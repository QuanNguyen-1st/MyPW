const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../../middlewares/session');

const passmanController = require('../../app/controllers/user/PassmanController');

router.get('/', isAuthenticated, passmanController.index);
router.get('/getPass', isAuthenticated, passmanController.get_passwordList);


module.exports = router;