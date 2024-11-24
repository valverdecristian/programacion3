var express = require('express');
var router = express.Router();
const stacksController = require("../Controllers/stacksControllers.js")

/* GET users listing. */
router.get('/', stacksController.getStacks);

module.exports = router;
