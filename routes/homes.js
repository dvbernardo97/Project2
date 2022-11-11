var express = require("express");
var router = express.Router();
const animeCtrl = require('../controllers/homes')


router.get('/', animeCtrl.index)

module.exports = router;
