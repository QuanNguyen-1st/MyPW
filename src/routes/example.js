const express = require('express');
const router = express.Router();

const exampleController = require('../app/controllers/ExampleController');

router.get('/', exampleController.index);

module.exports = router;