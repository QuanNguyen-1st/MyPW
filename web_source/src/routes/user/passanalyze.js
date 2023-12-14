const express = require('express');
const router = express.Router();
const {isAuthenticated} = require('../../middlewares/session');

const PassAnalysisController = require('../../app/controllers/user/PassAnalysisController')

router.get('/' , isAuthenticated, PassAnalysisController.index);


module.exports = router;